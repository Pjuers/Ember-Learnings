import Route from '@ember/routing/route';

export default class BooksRoute extends Route {
    async model() {
        const response = await fetch("http://127.0.0.1:8000/api/test")
        const bookData = await response.json();
        console.log(bookData.data);
        return bookData.data

      }
}
