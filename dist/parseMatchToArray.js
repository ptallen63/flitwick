"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};exports.default=function(e,t){if("object"!==("undefined"==typeof e?"undefined":_typeof(e)))return-1;var r=e[0].indexOf(t);try{if(r===-1)throw new Error("Match Field not Found")}catch(e){return console.log(e),-1}var o=new _progress2.default("   Parsing the Match to list [:bar] :percent :etas remaining",{complete:"=",incomplete:" ",width:30,clear:!0,total:e.length}),n={},a=[];e.forEach(function(r){if(r===e[0])e[0].forEach(function(e){return a.push(e.trim())});else{var i={},l=0;r.forEach(function(e){i[a[l]]=e,l+=1});var u=i[t];u&&(n[u]=i)}o.tick()});var i={};return a.forEach(function(e){i[e]=null}),i.matched=null,o.complete&&console.log(_chalk2.default.green("   ✓ Match to list parsed! ... Time to go to charms with first years \n")),{data:n,fields:i}};var _progress=require("progress"),_progress2=_interopRequireDefault(_progress),_chalk=require("chalk"),_chalk2=_interopRequireDefault(_chalk);
//# sourceMappingURL=parseMatchToArray.js.map
