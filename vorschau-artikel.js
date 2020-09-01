import { LitElement, html, css} from 'lit-element';



export class VorschauArtikelLit extends LitElement {

    static get properties() {
        return {
            image: {type: String},
            heading: {type: String},
            text: {type: String},

        }
    }

    constructor() {
        super();
        this.image = "";
        this.heading = "";
        this.text = "";
    }

    static get styles() {

        return css` 
        :host{
            font-family: Arial, Helvetica, sans-serif;
        }
        
        #container {
            background-color: #EEEEE;
            width:500px;
            margin-left: auto;
            margin-right: auto;
            border-radius: 1em;
            border-color: #94c6ea;
            border-width: 3px;
            border-style: ridge;
        }
        
        #image{
           padding-top: 20px;
        
        }
        
        #content{
            
        
        }
        
        #header{
            font-size:x-small;
        
        
        }
        
        #text{
            
        
        }
      
      `;
    }

    render() {
        return html`
        <div id="container">
        <a href="artikel.html">
        <div id="image">
        <img src="${this.image}" width="150" height="auto"></img> 
        </div>
        </a>
        <div id="content">
            <div id="header">
                <h1>${this.heading}</h1>
            </div>
            <div id="text">
                <p>
                   ${this.text}
                </p>
            </div>
        </div>
    </div>

   
    `;
    }
    firstUpdated(changedProperties) {
       
    }


}

customElements.define('vorschau-artikel', VorschauArtikelLit);