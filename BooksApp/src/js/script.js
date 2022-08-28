'use strict';
const select = {
  templateOf: {
    books: '#template-book',
  },
  listOf: {
    booksList: '.books-list',
    images: '.books-list .book__image',
    image: '.book__image',
    filters: '.filters',
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
const filters = [];

function initActions() {
    const booksImages = document.querySelectorAll(select.listOf.images);
    const index = favoriteBooks.indexOf('data-id');


    for(let bookImage of booksImages){
        bookImage.addEventListener('dblclick', function (event) {            
           
            event.preventDefault();
             
            if(!event.target.offsetParent.classList.contains('favorite')){
            event.target.offsetParent.classList.add('favorite');
            console.log('bookImage', bookImage);

            const bookId = bookImage.getAttribute('data-id');
            console.log('bookId', bookId);

            favoriteBooks.push(bookId);
            console.log('pushed', favoriteBooks);
            }
            
            else if(event.target.offsetParent.classList.contains('favorite')){
              
            event.target.offsetParent.classList.remove('favorite')
            favoriteBooks.splice(index, 1);  
            }
        });
    }

    const filteredBooksContainer = document.querySelector(select.listOf.filters);
    
      filteredBooksContainer.addEventListener('click', function(event){
    
        if(event.target.tagName === 'INPUT' && event.target.type === 'checkbox' && event.target.name === 'filter'){
            
            if(event.target.checked){
                filters.push(event.target.value);
            }
            else{
                const indexOfFilteredBooks = filters.indexOf(event.target.value);
                filters.splice(indexOfFilteredBooks, 1);
            }
        }
        console.log(filters);
        filterBooks();
    });
 
}

function filterBooks(){
for(const book of dataSource.books){
    let shouldBeHidden = false;
    for(const filter of filters){
        if(!book.details[filter]){
            shouldBeHidden = true;
            break;
        }
    }

}

}

render();
initActions();
