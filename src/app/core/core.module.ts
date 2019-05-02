import { NgModule, Optional, SkipSelf, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoggerService } from './logger.service';
import { DataService } from './data.service';
import { PlainLoggerService } from "./plain-logger.service";
import { throwIfAlreadyLoaded } from "app/core/module-import-guard";
import { BookTrackerErrorHandlerService } from './book-tracker-error-handler.service';
import { AddHeaderInterceptor } from './add-header.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LogResponseInterceptor } from './log-response.interceptor';
import { CacheInterceptor } from './cache.interceptor';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    LoggerService,
    DataService,
    { provide: HTTP_INTERCEPTORS, useClass: AddHeaderInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LogResponseInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true },
    { provide: ErrorHandler, useClass: BookTrackerErrorHandlerService }
  ]
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

}
