"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var parseMatchListArray=function(r,t){if(r.constructor!==Array)return-1;var e=r[0].indexOf(t);try{if(e===-1)throw new Error("Match Field not Found")}catch(r){console.log(r)}var o=[];return r.forEach(function(r){r[e]&&""!==r[e]&&o.push(r[e])}),o};exports.default=parseMatchListArray;
//# sourceMappingURL=parseMatchListArray.js.map
