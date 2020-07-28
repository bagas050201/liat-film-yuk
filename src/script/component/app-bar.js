class AppBar extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
        * {
        margin: 0;
        padding: 20px;
        box-sizing: border-box;
        }
        :host {
           display: block;
           text-align: center;
           padding: 16px;
           width: 100%;
           background-color: #6351ce;
           color: white;
           box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        }
   </style>
   <h2>Liat Film Yuk!</h2>`;
    }
}

customElements.define("app-bar", AppBar);