
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

class BooksList {
    constructor() {
        const thisBooksList = this;

        this.initData();
        this.getElements();
        this.render();
        this.initActions();
        this.filterBooks();
        this.determineRatingBgc();
    }

    initData() {
        this.data = dataSource.books;
    }

    getElements() {

        const thisBook = this;
        thisBook.bookListContainer = document.querySelector(select.listOf.booksList);
        thisBook.booksImages = document.querySelectorAll(select.listOf.images);
        thisBook.filteredBooksContainer = document.querySelector(select.listOf.filters);


    }

    render() {

        const thisBooksList = this;
        for (let book of thisBooksList.data) {
            const generatedHTML = templates.bookTemplate(book);

            const thisBookDOMElement = utils.createDOMFromHTML(generatedHTML);

            const bookListContainer = document.querySelector(select.listOf.booksList);

            bookListContainer.appendChild(thisBookDOMElement);
            const ratingBgc = thisBooksList.determineRatingBgc(book.rating);
            const ratingWidth = book.rating * 10;
        }
    }

    initActions() {

        const favoriteBooks = [];
        console.log(favoriteBooks);
        const filters = [];
        const index = favoriteBooks.indexOf('data-id');
        const thisBook = this;

        for (let bookImage of thisBook.booksImages) {
            bookImage.addEventListener('dblclick', function (event) {

                event.preventDefault();

                if (!event.target.offsetParent.classList.contains('favorite')) {
                    event.target.offsetParent.classList.add('favorite');
                    console.log('bookImage', bookImage);

                    const bookId = bookImage.getAttribute('data-id');
                    console.log('bookId', bookId);

                    favoriteBooks.push(bookId);
                    console.log('pushed', favoriteBooks);
                }

                else if (event.target.offsetParent.classList.contains('favorite')) {

                    event.target.offsetParent.classList.remove('favorite')
                    favoriteBooks.splice(index, 1);
                }
            });
        }


        thisBook.filteredBooksContainer.addEventListener('click', function (event) {

            if (event.target.tagName === 'INPUT' && event.target.type === 'checkbox' && event.target.name === 'filter') {

                if (event.target.checked) {
                    filters.push(event.target.value);
                }
                else {
                    const indexOfFilteredBooks = filters.indexOf(event.target.value);
                    filters.splice(indexOfFilteredBooks, 1);
                }
            }
            console.log(filters);
            filterBooks();
        });

    }

    filterBooks() {

        const thisBook = this;

        for (const book of dataSource.books) {
            let shouldBeHidden = false;
            for (const filter of thisBook.filters) {
                if (!book.details[filter]) {
                    shouldBeHidden = true;
                    break;
                }
            }
            const bookImageID = document.querySelector(select.listOf.image + '[data-id="' + book.id + '"]');

            if (shouldBeHidden === true) {
                bookImageID.classList.add('hidden');
            }
            else {
                bookImageID.classList.remove('hidden');
            }

        }

    }

    determineRatingBgc(rating) {
        if (rating < 6) {
            return 'linear-gradient(to bottom,  #fefcea 0%, #f1da36 100%);';
        } else if (rating > 6 && rating <= 8) {
            return 'linear-gradient(to bottom, #b4df5b 0%,#b4df5b 100%);';
        } else if (rating > 8 && rating <= 9) {
            return 'linear-gradient(to bottom, #299a0b 0%, #299a0b 100%);';
        } else if (rating > 9) {
            return 'linear-gradient(to bottom, #ff0084 0%,#ff0084 100%);';
        }
    }

}

const app = new BooksList();
