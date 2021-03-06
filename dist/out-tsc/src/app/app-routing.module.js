var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddBookComponent } from "app/add-book/add-book.component";
import { AddReaderComponent } from "app/add-reader/add-reader.component";
import { DashboardComponent } from "app/dashboard/dashboard.component";
import { EditBookComponent } from "app/edit-book/edit-book.component";
import { EditReaderComponent } from "app/edit-reader/edit-reader.component";
var routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'addbook', component: AddBookComponent },
    { path: 'addreader', component: AddReaderComponent },
    { path: 'editreader/:id', component: EditReaderComponent },
    { path: 'editbook/:id', component: EditBookComponent },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map