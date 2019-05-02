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
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'app/core/data.service';
var EditBookComponent = /** @class */ (function () {
    function EditBookComponent(route, dataService) {
        this.route = route;
        this.dataService = dataService;
    }
    EditBookComponent.prototype.ngOnInit = function () {
        var _this = this;
        var bookID = parseInt(this.route.snapshot.params['id']);
        this.dataService.getBookById(bookID).subscribe(function (data) { return _this.selectedBook = data; }, function (err) { return console.log(err); }, function () { return console.log("Selected book: " + _this.selectedBook.title); });
        this.dataService.getOldBookById(bookID).subscribe(function (data) { return console.log("Old book title: " + data.bookTitle); });
    };
    EditBookComponent.prototype.setMostPopular = function () {
        this.dataService.setMostPopularBook(this.selectedBook);
    };
    EditBookComponent.prototype.saveChanges = function () {
        var _this = this;
        this.dataService.updateBook(this.selectedBook).subscribe(function (data) { return console.log(_this.selectedBook.title + " updated successfully"); }, function (err) { return console.log(err); });
    };
    EditBookComponent = __decorate([
        Component({
            selector: 'app-edit-book',
            templateUrl: './edit-book.component.html',
            styles: []
        }),
        __metadata("design:paramtypes", [ActivatedRoute,
            DataService])
    ], EditBookComponent);
    return EditBookComponent;
}());
export { EditBookComponent };
//# sourceMappingURL=edit-book.component.js.map