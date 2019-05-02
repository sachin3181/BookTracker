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
import { map, tap } from 'rxjs/operators';
import { allBooks } from 'app/data';
import { HttpClient, HttpHeaders } from '@angular/common/http';
var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.getHeaders = new HttpHeaders({
            'Accept': 'application/json'
        });
        this.postHeaders = new HttpHeaders({
            'Content-Type': 'application/json'
        });
        this.mostPopularBook = allBooks[0];
    }
    DataService.prototype.setMostPopularBook = function (popularBook) {
        this.mostPopularBook = popularBook;
    };
    DataService.prototype.getAllReaders = function () {
        return this.http.get('/api/readers');
    };
    DataService.prototype.getReaderById = function (id) {
        return this.http.get("/api/readers/" + id, {
            headers: this.getHeaders
        });
    };
    DataService.prototype.getAllBooks = function () {
        return this.http.get('/api/books');
    };
    DataService.prototype.getBookById = function (id) {
        return this.http.get("/api/books/" + id, {
            headers: this.getHeaders
        });
    };
    DataService.prototype.getOldBookById = function (id) {
        return this.http.get("/api/books/" + id)
            .pipe(map(function (b) { return ({
            bookTitle: b.title,
            year: b.publicationYear
        }); }), tap(function (classicBook) { return console.log(classicBook); }));
    };
    DataService.prototype.addBook = function (newBook) {
        return this.http.post('/api/books', newBook, {
            headers: this.postHeaders
        });
    };
    DataService.prototype.updateBook = function (updatedBook) {
        return this.http.put("/api/books/" + updatedBook.bookID, updatedBook, {
            headers: this.postHeaders
        });
    };
    DataService.prototype.deleteBook = function (bookId) {
        return this.http.delete("/api/books/" + bookId);
    };
    DataService.prototype.addReader = function (newReader) {
        return this.http.post('/api/readers', newReader, {
            headers: this.postHeaders
        });
    };
    DataService.prototype.updateReader = function (updatedReader) {
        return this.http.put("/api/readers/" + updatedReader.readerID, updatedReader, {
            headers: this.postHeaders
        });
    };
    DataService.prototype.deleteReader = function (readerID) {
        return this.http.delete("/api/readers/" + readerID);
    };
    DataService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], DataService);
    return DataService;
}());
export { DataService };
//# sourceMappingURL=data.service.js.map