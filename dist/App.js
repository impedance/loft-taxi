"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var header_1 = require("./components/Header/header");
var Profile_1 = require("./components/Profile");
var Login_1 = require("./components/Login/Login");
var Map_1 = require("./components/Map/Map");
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(header_1.default, null),
            react_1.default.createElement(Profile_1.default, null),
            react_1.default.createElement(Map_1.default, null),
            react_1.default.createElement(Login_1.default, null)));
    };
    return App;
}(react_1.default.Component));
exports.default = App;
