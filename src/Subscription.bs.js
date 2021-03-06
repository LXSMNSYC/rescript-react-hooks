// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as Caml_obj from "bs-platform/lib/es6/caml_obj.js";

function use(param) {
  var shouldUpdate = param.shouldUpdate;
  var subscribe = param.subscribe;
  var read = param.read;
  var match = React.useState(function () {
        return {
                read: read,
                subscribe: subscribe,
                shouldUpdate: shouldUpdate,
                value: Curry._1(read, undefined)
              };
      });
  var setState = match[1];
  var state = match[0];
  var value = {
    contents: state.value
  };
  if (Caml_obj.caml_notequal(state.read, read) || Caml_obj.caml_notequal(state.subscribe, subscribe) || Caml_obj.caml_notequal(state.shouldUpdate, shouldUpdate)) {
    value.contents = Curry._1(read, undefined);
    Curry._1(setState, (function (param) {
            return {
                    read: read,
                    subscribe: subscribe,
                    shouldUpdate: shouldUpdate,
                    value: value.contents
                  };
          }));
  }
  React.useEffect((function () {
          var mounted = {
            contents: true
          };
          var readCurrent = function (param) {
            if (!mounted.contents) {
              return ;
            }
            var nextValue = Curry._1(read, undefined);
            return Curry._1(setState, (function (prev) {
                          if (Caml_obj.caml_equal(prev.read, read) && Caml_obj.caml_equal(prev.subscribe, subscribe) && Caml_obj.caml_equal(prev.shouldUpdate, shouldUpdate) && Curry._2(shouldUpdate, prev.value, nextValue)) {
                            return {
                                    read: prev.read,
                                    subscribe: prev.subscribe,
                                    shouldUpdate: prev.shouldUpdate,
                                    value: nextValue
                                  };
                          } else {
                            return prev;
                          }
                        }));
          };
          var unsubscribe = Curry._1(subscribe, readCurrent);
          readCurrent(undefined);
          return (function (param) {
                    mounted.contents = false;
                    if (unsubscribe !== undefined) {
                      return Curry._1(unsubscribe, undefined);
                    }
                    
                  });
        }), [
        read,
        subscribe,
        shouldUpdate
      ]);
  return value.contents;
}

export {
  use ,
  
}
/* react Not a pure module */
