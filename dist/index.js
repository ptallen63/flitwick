"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _babyparse=require("babyparse"),_babyparse2=_interopRequireDefault(_babyparse),_outputToFile=require("./outputToFile"),_outputToFile2=_interopRequireDefault(_outputToFile),_parseMatchListArray=require("./parseMatchListArray"),_parseMatchListArray2=_interopRequireDefault(_parseMatchListArray),_parseMatchToArray=require("./parseMatchToArray"),_parseMatchToArray2=_interopRequireDefault(_parseMatchToArray),_generateNewList=require("./generateNewList"),_generateNewList2=_interopRequireDefault(_generateNewList),_parseConfig=require("./parseConfig"),_parseConfig2=_interopRequireDefault(_parseConfig),flitwick=function(e,r,a){e||(console.log("No match list argument"),process.exit()),r||(console.log("No match to list argument"),process.exit()),a||(console.log("No match field argument"),process.exit());var t=_babyparse2.default.parseFiles(e,[_parseConfig2.default]),i=_babyparse2.default.parseFiles(r,[_parseConfig2.default]),s=(0,_parseMatchListArray2.default)(t.data),u=(0,_parseMatchToArray2.default)(i.data,a),o=u.fields,p=u.data,l=(0,_generateNewList2.default)(s,p,o,a),_=_babyparse2.default.unparse(l);(0,_outputToFile2.default)(_)};exports.default=flitwick;
//# sourceMappingURL=index.js.map
