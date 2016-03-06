module API.Hoodie (
                      HoodieM
                    , HoodieEff
                    , Hoodie
                    , Store
                    , StoreProperties
                    , ChangedStoreProperties
                    , StoreOptions
                    , DoneCallback
                    , FailCallback
                    , UpdateCallback
                    , EventHandler
                    , hoodie
                    , add
                    , find
                    , findAll
                    , findOrAdd
                    , update
                    , updateOrAdd
                    , updateAll
                    , remove
                    , removeAll
                    , on
                    , one
                    , off
                    , trigger
                    , logRaw
                  ) where


import Prelude                       (Unit)
import Data.Maybe                    (Maybe)
import Control.Monad.Eff             (Eff)
import Control.Monad.Eff.Console     (CONSOLE())
import Control.Monad.Eff.Exception   (EXCEPTION)

foreign import data HoodieM :: !
foreign import data Hoodie  :: *
foreign import data Store   :: *

type HoodieEff a = forall e. Eff(hoodieM :: HoodieM | e) a

-- | Hoodie Types

type StoreProperties a = {
  "id" :: Maybe String
  | a
}

type ChangedStoreProperties a b c d = {
  "updateFunction" :: Maybe (UpdateCallback a b c)
  | d
}

type StoreOptions a = {
  "silent" :: Boolean
  | a
}

type DoneCallback a b     = (a -> Eff b Unit)
type FailCallback a b     = (a -> Eff b Unit)
type UpdateCallback a b c = (a -> Eff b c)
type EventHandler a b c   = (a -> Eff b c)

-- | Logging helper
foreign import logRaw :: forall a e. a -> Eff (console :: CONSOLE | e) Unit

-- | Hoodie Instance
foreign import hoodie :: forall e. Maybe String -> Eff (err :: EXCEPTION | e) Hoodie

-- | Hoodie Store API
foreign import add         :: forall a b c d e f g.       String -> StoreProperties a -> Maybe (StoreOptions b) -> Maybe (DoneCallback c d) -> Maybe (FailCallback e f) -> Hoodie -> Eff (err :: EXCEPTION | g) Unit
foreign import find        :: forall a b c d e.           String -> String -> (DoneCallback a b) -> (FailCallback c d) -> Hoodie -> Eff (err :: EXCEPTION | e) Unit
foreign import findOrAdd   :: forall a b c d e f g.       String -> Maybe String -> StoreProperties a -> Maybe (StoreOptions b) -> (DoneCallback c d) -> (FailCallback e f) -> Hoodie -> Eff (err :: EXCEPTION | g) Unit
foreign import findAll     :: forall a b c d e.           String -> (DoneCallback a b) -> (FailCallback c d) -> Hoodie -> Eff (err :: EXCEPTION | e) Unit
foreign import update      :: forall a b c d e f g h i j. String -> Maybe String -> (ChangedStoreProperties a b c d) -> Maybe (StoreOptions e) -> (DoneCallback f g) -> (FailCallback h i) -> Hoodie -> Eff (err :: EXCEPTION | j) Unit
foreign import updateOrAdd :: forall a b c d e f g h i j. String -> String -> (ChangedStoreProperties a b c d) -> Maybe (StoreOptions e) -> (DoneCallback f g) -> (FailCallback h i) -> Hoodie -> Eff (err :: EXCEPTION | j) Unit
foreign import updateAll   :: forall a b c d e f g h i j. String -> (ChangedStoreProperties a b c d) -> Maybe (StoreOptions e) -> (DoneCallback f g) -> (FailCallback h i) -> Hoodie -> Eff (err :: EXCEPTION | j) Unit
foreign import remove      :: forall a b c d e f.         String -> String -> Maybe (StoreOptions a) -> (DoneCallback b c) -> (FailCallback d e) -> Hoodie -> Eff (err :: EXCEPTION | f) Unit
foreign import removeAll   :: forall a b c d e f.         String -> Maybe (StoreOptions a) -> (DoneCallback b c) -> (FailCallback d e) -> Hoodie -> Eff (err :: EXCEPTION | f) Unit
-- | Hoodie Event Handling
foreign import on          :: forall a b c e.             String -> (EventHandler a b c) -> Hoodie -> Eff (err :: EXCEPTION | e) Unit
foreign import one         :: forall a b c e.             String -> (EventHandler a b c) -> Hoodie -> Eff (err :: EXCEPTION | e) Unit
foreign import off         :: forall e.                   String -> Hoodie -> Eff (err :: EXCEPTION | e) Unit
foreign import trigger     :: forall a e.                 String -> a -> Hoodie -> Eff (err :: EXCEPTION | e) Unit