'use strict';
const select = {
  templateOf: {
    books: '#template-book',
  },
  listOf: {
    booksList: '.books-list',
    images: '.books-list .book__image',
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

   const filtersContainer = document.querySelector(select.listOf.filters);
    
      /* add event listener to filtersContainer */
      filtersContainer.addEventListener('click', function(event){
        // event.preventDefault();
    
        /* find const of clickedElement */
        const clickedElement = event.target;
    
        /* check if it's a checkbox that was clicked in the whole filters container - event.target */
        if(event.target.tagName === 'INPUT' && event.target.type === 'checkbox' && event.target.name === 'filter'){
    
          // console.log(event.target.value);
            
          /* if checked - push it's value to array */
          if(clickedElement.checked){
            filters.push(clickedElement.value);
                  
            /* if uncheckes - remove from array */
          } else /* if(!clickedElement.checked) */{
      
            /* remove bookID from the array */
            const indexOfFilterID = filters.indexOf(clickedElement.value);
            filters.splice(indexOfFilterID, 1);
          }
        }
        console.log(filters);
    });
 
}

render();
initActions();
