var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Book } from "app/models/book";
import { DataService } from 'app/core/data.service';
import { Router } from '@angular/router';
var AddBookComponent = /** @class */ (function () {
    function AddBookComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
    }
    AddBookComponent.prototype.ngOnInit = function () { };
    AddBookComponent.prototype.saveBook = function (formValues) {
        var newBook = formValues;
        newBook.bookID = 0;
        console.log(newBook);
        this.dataService.addBook(newBook).subscribe(function (data) { return console.log(Book); }, function (err) { return console.log(err); }, function () { return console.log("new book added: " + newBook.title); });
        this.router.navigate(['/dashboard']);
    };
    AddBookComponent = __decorate([
        Component({
            selector: 'app-add-book',
            templateUrl: './add-book.component.html',
            styles: []
        }),
        __metadata("design:paramtypes", [DataService, Router])
    ], AddBookComponent);
    return AddBookComponent;
}());
export { AddBookComponent };
//# sourceMappingURL=add-book.component.js.map