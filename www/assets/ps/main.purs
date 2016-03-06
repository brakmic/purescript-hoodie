module DemoApp.Hoodie where

import Prelude                     (Unit, unit, return, bind, (++))
import Data.Maybe                  (Maybe(Nothing, Just))
import Control.Monad.Eff           (Eff)
import Control.Monad.Eff.Console   (CONSOLE, log)
import Control.Monad.Eff.Exception (EXCEPTION)
import API.Hoodie

type HoodieDocument a = {
  "type" :: String
  | a
}

callback :: forall a e. a -> Eff(console :: CONSOLE | e) Unit
callback = \anyData -> do
                       logRaw anyData

eventHandler :: forall a e. HoodieDocument a -> Eff(console :: CONSOLE | e) Unit
eventHandler = \doc -> do
                        logRaw ("DOC-TYPE: " ++ doc.type)

main :: forall e. Eff(console :: CONSOLE, hoodieM :: HoodieM, err :: EXCEPTION | e) Unit
main = do
      let props         = { id : Just "005", "title" : "Getting Water", "updateFunction" : Nothing }
      let options       = Just { "silent" : false }
      let maybeCallback = Just callback

      myHoodie <- hoodie Nothing
      on "store:change" eventHandler myHoodie

      add "todo" props options maybeCallback maybeCallback myHoodie
      {-find "todo" "005" callback callback myHoodie
      findOrAdd "todo" (Just "005") props options callback callback myHoodie
      update "todo" (Just "005") props options callback callback myHoodie
      updateOrAdd "todo" "005" props options callback callback myHoodie
      updateAll "todo" props options callback callback myHoodie-}
      findAll "todo" callback callback myHoodie
      removeAll "todo" options callback callback myHoodie
      return unit