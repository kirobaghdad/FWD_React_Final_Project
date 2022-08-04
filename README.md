# MyReads Project

This is the final assessment project for Udacity's React Fundamentals course.

This project helps you manage your reads as the main page is divided into three shelves(Currently Reading, Want to Read, Read)<br> , and you can easily change the bookshelf. <br>Also, you can navigate to search books page and add new books to your reads.

<br>

## TL;DR

To run this project:

- install all project dependencies with `npm install`
- start the development server with `npm start`

<br>

## Files Tree

```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── public
│   ├── favicon.ico # React Icon
│   └── index.html
└── src
    ├─ App.css # Styles for your app.
    ├── App.js # This is the root of your app.
    ├── Book.js # This element returns the image, the author, and the title of the book.
    ├── BookList.js # This element returns a book list
    ├── Search.js # This element returns the search result
    ├── ShelfChanger.js # This element makes you able to change the bookshelf
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   ├── arrow-drop-down.svg
    │   └── image-not-found.png
    ├── index.css # Global styles.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

- [`getAll`](#getall)
- [`update`](#update)
- [`search`](#search)

### `getAll`

Method Signature:

```js
getAll();
```

- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf);
```

- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
- Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query);
```

- query: `<String>`
- Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
- These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.
