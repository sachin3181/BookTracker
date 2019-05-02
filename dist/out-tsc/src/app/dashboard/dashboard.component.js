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
import { Title } from '@angular/platform-browser';
import { DataService } from 'app/core/data.service';
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(dataService, title) {
        this.dataService = dataService;
        this.title = title;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getAllBooks().subscribe(function (data) { return _this.allBooks = data; }, function (err) { return console.log(err); }, function () { return console.log('all books received'); });
        this.dataService.getAllReaders().subscribe(function (data) { return _this.allReaders = data; }, function (err) { return console.log(err); }, function () { return console.log('all readers loaded'); });
        this.mostPopularBook = this.dataService.mostPopularBook;
        this.title.setTitle("Book Tracker");
    };
    DashboardComponent.prototype.deleteBook = function (bookID) {
        var _this = this;
        this.dataService.deleteBook(bookID).subscribe(function (data) {
            var index = _this.allBooks.findIndex(function (book) { return book.bookID === bookID; });
            _this.allBooks.splice(index, 1);
        }, function (err) { return console.log(err); });
    };
    DashboardComponent.prototype.deleteReader = function (readerID) {
        var _this = this;
        this.dataService.deleteReader(readerID).subscribe(function (data) {
            var index = _this.allReaders.findIndex(function (r) { return r.readerID === readerID; });
            _this.allReaders.splice(index, 1);
        }, function (err) { return console.log(err); });
    };
    DashboardComponent = __decorate([
        Component({
            selector: 'app-dashboard',
            templateUrl: './dashboard.component.html',
            styles: []
        }),
        __metadata("design:paramtypes", [DataService,
            Title])
    ], DashboardComponent);
    return DashboardComponent;
}());
export { DashboardComponent };
//# sourceMappingURL=dashboard.component.js.map