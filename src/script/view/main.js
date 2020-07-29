import '../component/film-list.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';

const main = () => {
    const searchElement = document.querySelector("search-bar");
    const filmListElement = document.querySelector("film-list");

   /**sesudah pakai promise */
   const onButtonSearchClicked = () => {
        DataSource.searchFilm(searchElement.value)
            .then(renderResult)
            .catch(fallbackResult)
    };

   //sesudah custom element
   const renderResult = results => {
    filmListElement.film = results;
    };

   //sesudah custom element
   const fallbackResult = message => {
    filmListElement.renderError(message);
};
    searchElement.clickEvent = onButtonSearchClicked;
};

export default main;
