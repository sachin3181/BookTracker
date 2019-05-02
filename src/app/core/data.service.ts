import { Injectable } from '@angular/core';
import { map, tap, catchError } from 'rxjs/operators';
import { allBooks, allReaders } from 'app/data';
import { Reader } from 'app/models/reader';
import { Book } from 'app/models/book';
import { BookTrackerError } from 'app/models/bookTrackerError';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { OldBook } from 'app/models/old-book';

@Injectable()
export class DataService {
   getHeaders: HttpHeaders = new HttpHeaders({
    'Accept': 'application/json'
  });
  postHeaders: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  mostPopularBook: Book = allBooks[0];

  constructor(private http: HttpClient) { }

  setMostPopularBook(popularBook: Book): void {
    this.mostPopularBook = popularBook;
  }

  getAllReaders(): Observable<Reader[]> {
    return this.http.get<Reader[]>('/api/readers');
  }

  getReaderById(id: number): Observable<Reader> { 
    return this.http.get<Reader>(`/api/readers/${id}`, {
      headers: this.getHeaders
    });
  }

  getAllBooks(): Observable<Book[] | BookTrackerError> {
    return this.http.get<Book[]>('/api/books')
    .pipe(
      catchError(err => this.handleHttpError(err))
    );
  }

  handleHttpError(error: HttpErrorResponse): Observable<BookTrackerError> {
    let dataError = new BookTrackerError();
    dataError.errorNumber = error.status;
    dataError.message = error.statusText;
    dataError.friendlyMessage = 'An error occured retrieving data';
    return throwError(dataError);
  }

  getBookById(id: number): Observable<Book> {
    return this.http.get<Book>(`/api/books/${id}`, {
      headers: this.getHeaders
    });
  }

  getOldBookById(id: number): Observable<OldBook> {
    return this.http.get<Book>(`/api/books/${id}`)
              .pipe(
                map(b => <OldBook>{
                  bookTitle: b.title,
                  year: b.publicationYear
                }),
                tap(classicBook => console.log(classicBook))
              );
  }

  addBook(newBook: Book): Observable<Book> {
    return this.http.post<Book>('/api/books', newBook, {
      headers: this.postHeaders
    });
  }

  updateBook(updatedBook: Book): Observable<void> {
    return this.http.put<void>(`/api/books/${updatedBook.bookID}`, updatedBook, {
      headers: this.postHeaders
    });
  }

  deleteBook(bookId: number): Observable<void> {
    return this.http.delete<void>(`/api/books/${bookId}`);
  }

  addReader(newReader: Reader): Observable<Reader> {
    return this.http.post<Reader>('/api/readers', newReader, {
      headers: this.postHeaders
    });
  }

  updateReader(updatedReader: Reader): Observable<void> {
    return this.http.put<void>(`/api/readers/${updatedReader.readerID}`, updatedReader, {
      headers: this.postHeaders
    });
  }

  deleteReader(readerID: number): Observable<void> {
    return this.http.delete<void>(`/api/readers/${readerID}`);
  }
}
