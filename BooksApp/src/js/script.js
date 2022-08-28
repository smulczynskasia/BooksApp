'use strict';
const select = {
  templateOf: {
    books: '#template-book',
  },
  listOf: {
    booksList: '.books-list',
    images: '.books-list .book__image',
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
    const booksImages = document.querySelectorAll(select.listOf.images);
    const index = favoriteBooks.indexOf(bookId);


    for(let bookImage of booksImages){
        bookImage.addEventListener('dblclick', function (event) {            
           
            event.preventDefault();
             
            if(!bookImage.classList.contains('favorite')){
            bookImage.classList.add('favorite');
            console.log('bookImage', bookImage);

            const bookId = bookImage.getAttribute('data-id');
            console.log('bookId', bookId);

            favoriteBooks.push(bookId);
            console.log('pushed', favoriteBooks);
            }
            
            else if(bookImage.classList.contains(index))

            bookImage.classList.remove('favorite')
            favoriteBooks.splice(index, 1);

        });
    }
}

render();
initActions();
