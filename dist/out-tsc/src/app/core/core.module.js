var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { NgModule, Optional, SkipSelf, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggerService } from './logger.service';
import { DataService } from './data.service';
import { throwIfAlreadyLoaded } from "app/core/module-import-guard";
import { BookTrackerErrorHandlerService } from './book-tracker-error-handler.service';
var CoreModule = /** @class */ (function () {
    function CoreModule(parentModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
    CoreModule = __decorate([
        NgModule({
            imports: [
                CommonModule
            ],
            declarations: [],
            providers: [
                LoggerService,
                DataService,
                { provide: ErrorHandler, useClass: BookTrackerErrorHandlerService }
            ]
        }),
        __param(0, Optional()), __param(0, SkipSelf()),
        __metadata("design:paramtypes", [CoreModule])
    ], CoreModule);
    return CoreModule;
}());
export { CoreModule };
//# sourceMappingURL=core.module.js.map