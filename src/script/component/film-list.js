import './film-item.js';
 
class FilmList extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

   set film(film) {
       this._film = film;
       this.render();
   }
 
   renderError(message) {
        this.shadowDOM.innerHTML = `
        <style>
            .placeholder {
                font-weight: lighter;
                color: rgba(0,0,0,0.5);
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
            }
        </style>
            `;
       this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
   }
 
   render() {
       this.shadowDOM.innerHTML = "";
       this._film.forEach(films => {
           const filmItemElement = document.createElement("film-item");
           filmItemElement.films = films;
           this.shadowDOM.appendChild(filmItemElement);
       })
   }
}
 
customElements.define("film-list", FilmList);