var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { BookTrackerError } from 'app/models/bookTrackerError';
var BookTrackerErrorHandlerService = /** @class */ (function () {
    function BookTrackerErrorHandlerService() {
    }
    BookTrackerErrorHandlerService.prototype.handleError = function (error) {
        var customError = new BookTrackerError();
        customError.errorNumber = 200;
        customError.message = error.message;
        customError.friendlyMessage = 'An error occurred. Please try again.';
        console.log(customError);
    };
    BookTrackerErrorHandlerService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [])
    ], BookTrackerErrorHandlerService);
    return BookTrackerErrorHandlerService;
}());
export { BookTrackerErrorHandlerService };
//# sourceMappingURL=book-tracker-error-handler.service.js.map