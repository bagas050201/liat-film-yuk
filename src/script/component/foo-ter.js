class footers extends HTMLElement {
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
                padding: 0;
                box-sizing: border-box;
            }
            :host {
                display : block;
                left: 0;
                bottom: 0;
                width: 100%;
                background-color: #6351ce;
                color: white;
                text-align: center;
            }
        
            a{
                text-decoration: none;
                color: #fff;
            }
        
            hr{
                width: 650px;
                margin-left:430px;
                text-align: center!important;
                margin-bottom: 0.5rem;
            }
        
            @media screen and (max-width: 550px){
                hr{
                    width: 350px;
                    margin-left:65px;
                }
            }
        </style>
        <br>
        <hr>
            © 2020 ∣ All Rights Reserved :
            <a href="https://github.com/bagas050201"> Powered by Muhammad Bagas Pradana</a>
        <br>
        <br>`;
    }
};

customElements.define("foo-ter", footers);