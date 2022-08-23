'use strict'

const select = {
    templateOf: {
        books: '#template-book',
    },
    listOf: {
        bookList: '.book-list',
    },
}

const templates = {
    bookTemplate: Handlebars.compile(document.querySelector(select.templateOf.books).innerHTML),
  };

function render() {

    for(let book of dataSource.books){
        const generatedHTML = templates.bookTemplate(book);

        thisBookDOMElement = utils.createDOMFromHTML(generatedHTML);

        const bookListContainer = document.querySelector(select.listOf.bookList);

        bookListContainer.appendChild(thisBookDOMElement);
    }
}
