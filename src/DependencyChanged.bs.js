// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";

function use(dependency, shouldUpdate) {
  var deps = React.useRef(dependency);
  var result = Curry._2(shouldUpdate, deps.current, dependency);
  if (result) {
    deps.current = dependency;
  }
  return result;
}

export {
  use ,
  
}
/* react Not a pure module */
