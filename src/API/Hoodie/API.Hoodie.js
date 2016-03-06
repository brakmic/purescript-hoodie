
// module API.Hoodie

var jc             = require('json-cycle');
var Hoodie         = require('hoodie');
var hoodieInstance = null;

var hoodie = function(url){
  var h = null;
  return function(){
    if(!hoodieInstance){
      if(url &&
        url.value0){
        hoodieInstance = new Hoodie(url.value0);
      }else{
        hoodieInstance = new Hoodie();
      }
    }
    window.hoodie = hoodieInstance;
    return hoodieInstance;
  };
};

var add = function(type){
  var ops, props, id, silent;
  return function(properties){
    if(!properties){
      throw new Error('No Object-properties provided!');
    }else{
      id = properties.id.value0;
      delete properties.id;
      props = properties;
      props.id = id;
    }
    return function(options){
      if(!options || !options.value0){
        ops = {
          "silent": false
        }
      }else{
        ops = options.value0;
      }
      return function(doneCallback){
        var cbDone = extractCallback(doneCallback);
        return function(failCallback){
          var cbFail = extractCallback(failCallback);
          return function(_hoodie){
            var cb = createCallback('add_wrapper', null);
            return function(){
              cb(_hoodie.store.add(type, props, ops)
                .done(cbDone)
                .fail(cbFail))();
              return {};
            };
          };
        };
      };
    };
  };
};

var find = function(type){
  return function(id){
    return function(doneCallback){
      var cbDone = extractCallback(doneCallback);
      return function(failCallback){
        var cbFail = extractCallback(failCallback);
        return function(_hoodie){
          var cb = createCallback('find_wrapper', null);
          return function(){
            cb(_hoodie.store.find(type, id)
              .done(doneCallback)
              .fail(failCallback))();
              return {};
          };
        };
      };
    };
  };
};

var findOrAdd = function(type){
  var ops, props, id;
  return function(id){
    var id = id.value0;
    return function(properties){
      if(!properties){
        throw new Error('No Object-properties provided!');
      }else{
        id = properties.id.value0; //if no ID present a new object
        delete properties.id;      // will be created
        props = properties;
        props.id = id;
      }
      return function(options){
        if(!options || !options.value0){
        ops = {
          "silent": false
          }
        }else{
          ops = options.value0;
        }
        return function(doneCallback){
          var cbDone = extractCallback(doneCallback);
          return function(failCallback){
            var cbDone = extractCallback(failCallback);
            return function(_hoodie){
              var cb = createCallback('findOrAdd_wrapper', null);
              return function(){
                cb(_hoodie.store.findOrAdd(type,id,props, ops)
                  .done(doneCallback)
                  .fail(failCallback))();
                  return {};
              };
            };
          };
        };
      };
    };
  };
};

var findAll = function(type){
  return function(doneCallback){
    var cbDone = extractCallback(doneCallback);
    return function(failCallback){
      var cbDone = extractCallback(failCallback);
      return function(_hoodie){
        var cb = createCallback('findAll_wrapper', null);
        return function(){
          cb(_hoodie.store.findAll(type)
            .done(doneCallback)
            .fail(failCallback))();
            return {};
        };
      };
    };
  };
};

var update = function(type){
  var ops, props, id, id2;
  return function(id){
    if(id.value0){
      id = id.value0;
    }
    return function(changedProps){
      if(!changedProps){
        throw new Error('No Object-properties provided!');
      }else{
        if(changedProps.updateFunction &&
           changedProps.updateFunction.constructor &&
           changedProps.updateFunction.constructor.name !== 'Nothing'){
          props = changedProps.updateFunction;
        }else{
          delete changedProps.updateFunction;
          if(changedProps.id &&
            changedProps.id.value0){
            id2 = changedProps.id.value0;
            changedProps.id = id2;
          }
          props = changedProps;
        }
      }
      return function(options){
        if(!options || !options.value0){
        ops = {
          "silent": false
          }
        }else{
          ops = options.value0;
        }
        return function(doneCallback){
          var cbDone = extractCallback(doneCallback);
          return function(failCallback){
            var cbFail = extractCallback(failCallback);
            return function(_hoodie){
              var cb = createCallback('update_wrapper', null);
              return function(){
                cb(_hoodie.store.update(type, id, props, ops)
                  .done(cbDone)
                  .fail(cbFail))();
                  return {};
              };
            };
          };
        };
      };
    };
  };
};

var updateOrAdd = function(type){
  var props, ops, id2;
  return function(id){
    return function(updateObject){
    if(updateObject.updateFunction &&
         updateObject.updateFunction.constructor &&
         updateObject.updateFunction.constructor.name !== 'Nothing'){
        props = updateObject.updateFunction;
      }else{
        delete updateObject.updateFunction;
        if(updateObject.id &&
          updateObject.id.value0){
          id2 = updateObject.id.value0;
          updateObject.id = id2;
        }
        props = updateObject;
      }
      return function(options){
        if(!options || !options.value0){
        ops = {
          "silent": false
          }
        }else{
          ops = options.value0;
        }
        return function(doneCallback){
          var cbDone = extractCallback(doneCallback);
          return function(failCallback){
            var cbFail = extractCallback(failCallback);
            return function(_hoodie){
              var cb = createCallback('updateOrAdd_wrapper', null);
              return function(){
                cb(_hoodie.store.updateOrAdd(type, id, props, ops)
                  .done(cbDone)
                  .fail(cbFail))();
                  return {};
              };
            };
          };
        };
      };
    };
  };
};

var updateAll = function(type){
  var props, ops, id2;
  return function(updateObject){
    if(updateObject.updateFunction &&
       updateObject.updateFunction.constructor &&
       updateObject.updateFunction.constructor.name !== 'Nothing'){
      props = updateObject.updateFunction;
    }else{
      delete updateObject.updateFunction;
      if(updateObject.id &&
        updateObject.id.value0){
        id2 = updateObject.id.value0;
        updateObject.id = id2;
      }
      props = updateObject;
    }
    return function(options){
      if(!options || !options.value0){
      ops = {
        "silent": false
        }
      }else{
        ops = options.value0;
      }
      return function(doneCallback){
        var cbDone = extractCallback(doneCallback);
        return function(failCallback){
          var cbFail = extractCallback(failCallback);
          return function(_hoodie){
            var cb = createCallback('updateAll_wrapper', null);
            return function(){
              cb(_hoodie.store.updateAll(type, props, ops)
                .done(cbDone)
                .fail(cbFail))();
                return {};
            };
          };
        };
      };
    };
  };
};

var remove = function(type){
  var ops;
  return function(id){
    return function(options){
      if(!options || !options.value0){
      ops = {
        "silent": false
        }
      }else{
        ops = options.value0;
      }
      return function(doneCallback){
        var cbDone = extractCallback(doneCallback);
        return function(failCallback){
          var cbFail = extractCallback(failCallback);
          return function(_hoodie){
            var cb = createCallback('´remove_wrapper', null);
            return function(){
              cb(_hoodie.store.remove(type, id, ops)
                .done(cbDone)
                .faile(cbFail))();
                return {};
            };
          };
        }
      };
    };
  };
};

var removeAll = function(type){
  var ops;
  return function(options){
    if(!options || !options.value0){
    ops = {
      "silent": false
      }
    }else{
      ops = options.value0;
    }
    return function(doneCallback){
      var cbDone = extractCallback(doneCallback);
      return function(failCallback){
        var cbFail = extractCallback(failCallback);
        return function(_hoodie){
          var cb = createCallback('´removeAll_wrapper', null);
          return function(){
            cb(_hoodie.store.removeAll(type, ops)
              .done(cbDone)
              .fail(cbFail))();
              return {};
          };
        };
      };
    };
  };
};

var on = function(event){
  return function(handler){
    return function(_hoodie){
      return function(){
        _hoodie.on(event, handler);
        return {};
      };
    };
  };
};

var one = function(event){
  return function(handler){
    return function(_hoodie){
      return function(){
        _hoodie.one(event, handler);
        return {};
      };
    };
  };
};


var off = function(event){
  return function(_hoodie){
    return function(){
      _hoodie.off(event);
      return {};
    };
  };
};

var trigger = function(event){
  return function(paramArray){
    return function(_hoodie){
      return function(){
        _hoodie.trigger(event, paramArray);
        return {};
      };
    };
  };
};

/* HELPERS */

var logRaw = function(str) {
  return function(){
    console.log(str);
    return {};
  };
};

var fallback = function(anyValue){
  //console.log(JSON.stringify(jc.decycle(anyValue), null, 4));
};

var extractCallback = function(maybeCallback){
  if(maybeCallback
    && maybeCallback.value0
    && typeof(maybeCallback.value0) === 'function'){
    return maybeCallback.value0;
  }else{
    return fallback;
  }
};

//This is a helper for creating internal callbacks to process responses.
var createCallback = function(api, callback){
  var cb = null;
  if(callback &&
    callback.value0){
    callback = callback.value0;
  }else if(!callback){
    callback = fallback;
  }
  if(callback &&
       callback.constructor &&
       callback.constructor.name == 'Nothing'){
        cb = function(ignore){
              var ignr = ignore.then(function(){
                  return {};
               }).catch(function(error){
                  console.log(api +' failed, error: ' + error);
            });
          var ret = function(){
            return ignr;
          };
          return ret;
      };
    } else {
      cb = function(val){
        return function(){
          val.then(function(v){
              callback(v);
          }).catch(function(error){
            console.error('[API ' + api + '] ' + error);
          });
          return {};
        }
      };
    }
    return cb;
};

// API mappings
module.exports = {
  logRaw      : logRaw, //non-Hoodie API
  hoodie      : hoodie,
  add         : add,
  find        : find,
  findOrAdd   : findOrAdd,
  findAll     : findAll,
  update      : update,
  updateOrAdd : updateOrAdd,
  updateAll   : updateAll,
  remove      : remove,
  removeAll   : removeAll,
  on          : on,
  one         : one,
  off         : off,
  trigger     : trigger
}