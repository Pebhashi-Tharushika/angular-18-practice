"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisitingLecture = void 0;
var Lecture_1 = require("./Lecture");
var VisitingLecture = /** @class */ (function (_super) {
    __extends(VisitingLecture, _super);
    function VisitingLecture(name, salary, department, workingHours) {
        var _this = _super.call(this, name, salary, department, true) || this; // Calls the constructor of the parent class
        _this.workingHours = workingHours;
        return _this;
    }
    return VisitingLecture;
}(Lecture_1.Lecture));
exports.VisitingLecture = VisitingLecture;
