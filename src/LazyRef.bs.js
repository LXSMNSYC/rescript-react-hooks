// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as Constant from "./Constant.bs.js";

function use(supplier) {
  return Constant.use(function (param) {
              return {
                      current: Curry._1(supplier, undefined)
                    };
            });
}

export {
  use ,
  
}
/* Constant Not a pure module */