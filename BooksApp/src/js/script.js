'use strict';
const select = {
  templateOf: {
    books: '#template-book',
  },
  listOf: {
    booksList: '.books-list',
  },
};

const templates = {
  bookTemplate: Handlebars.compile(document.querySelector(select.templateOf.books).innerHTML),
};

function render() {

  for(let book of dataSource.books){
    const generatedHTML = templates.bookTemplate(book);

    const thisBookDOMElement = utils.createDOMFromHTML(generatedHTML);

    const bookListContainer = document.querySelector(select.listOf.booksList);

    bookListContainer.appendChild(thisBookDOMElement);
  }
}

favoriteBooks = [];

function initActions() {
    const .books_image = document.querySelectorAll(.booksList);

    for(let .books_image of .booksList){
        .books_image.addEventListener('dblclick', function(event){
            event.preventDefault();

            const clickedBook = this;
            
            clickedBook.classList.add('favorite')
            
            const bookId = clickedBook.getAttribute('data-id')

            favoriteBooks.push(bookId);
        });
    }
}

render();
initActions();
