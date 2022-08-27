'use strict';
const select = {
  templateOf: {
    books: '#template-book',
  },
  listOf: {
    booksList: '.books-list',
    images: 'books-list .book__image',
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

const favoriteBooks = [];
console.log(favoriteBooks);

function initActions() {
    const bookImage = document.querySelectorAll(select.listOf.images);
    for(let image of bookImage){
        image.addEventListener('dblclick', function(event){
            event.preventDefault();

            const clickedBook = this;
            
            clickedBook.classList.add('favorite');
            
            console.log('clickedBook', clickedBook);

            const bookId = clickedBook.getAttribute('data-id');

            favoriteBooks.push(bookId);
            console.log('pushed', favoriteBooks)
        });
    }
}

render();
initActions();
