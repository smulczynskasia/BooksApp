const select = {
    templateOf: {
        books: '#template-book',
    },
    listOf: {
        bookList: '.book-list',
    },
}

render() {
    const thisBook = this;

    for(let book of dataSource.books){
        const generatedHTML = templates.bookList(thisBook.dataSource.books);

        thisBook.element = utils.createDOMFromHTML(generatedHTML);

        thisBook.element.push(.books-list);
    }
}
