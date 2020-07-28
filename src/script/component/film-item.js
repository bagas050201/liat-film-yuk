class FilmItem extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set films(films) {
        this._films = films;
        this.render();
    }
  
    render() {
        this.shadowDOM.innerHTML = `
        <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :host {
            display: block;
            margin-bottom: 18px;
            margin-top:35px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            border-radius: 10px;
            overflow: hidden;
        }
        
        .fan-art-film {
            width: 100%;
            max-height: 300px;
            object-fit: cover;
            object-position: center;
        }
        
        .film-info {
            padding: 24px;
        }
        
        .film-info > h2 {
            font-weight: lighter;
            text-align: center;
        }
        
        
        .film-info > p {
            text-align : justify;
            margin-top: 10px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 10; 
        }
        
        @media screen and (max-width: 550px){
            :host{
                margin-top:10px;
                margin-bottom:10px;
            }
        }
        </style>
        <img class="fan-art-film" src="https://image.tmdb.org/t/p/original/${this._films.poster_path}" alt="Poster Path">
        <div class="film-info">
            <h2>${this._films.title}</h2>
            <br>
            <p>${this._films.overview}</p>
            <br>
            <hr>
            <br>
            <h4>Release date : ${this._films.release_date}</h4>
            <h4>Rating : ${this._films.vote_average}</h4>
        </div>`;
    }
 }
 customElements.define("film-item", FilmItem);