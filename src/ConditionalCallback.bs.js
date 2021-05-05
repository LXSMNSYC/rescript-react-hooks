// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";

function use(supplier, dependency, shouldUpdate) {
  var value = React.useRef(supplier);
  var deps = React.useRef(dependency);
  if (Curry._2(shouldUpdate, deps.current, dependency)) {
    value.current = supplier;
    deps.current = dependency;
  }
  return value.current;
}

export {
  use ,
  
}
/* react Not a pure module */
