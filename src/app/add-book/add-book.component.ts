import { Component, OnInit } from '@angular/core';

import { Book } from "app/models/book";
import { DataService } from 'app/core/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styles: []
})
export class AddBookComponent implements OnInit {

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() { }

  saveBook(formValues: any): void {
    let newBook: Book = <Book>formValues;
    newBook.bookID = 0;
    console.log(newBook);
    this.dataService.addBook(newBook).subscribe(
      (data: Book) => console.log(Book),
      err => console.log(err),
      () => console.log(`new book added: ${newBook.title}`)
    );

    this.router.navigate(['/dashboard']);
  }

}
