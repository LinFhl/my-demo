import { LitElement, html, css} from 'lit-element';



export class BlogItemLit extends LitElement {

    static get properties() {
        return {
            datum: {type: String},
            text: {type: String},

        }
    }

    constructor() {
        super();
        this.datum = "";
        this.text = "";
    }

    static get styles() {

        return css` 
        :host{
            font-family: Arial, Helvetica, sans-serif;
        }

        #header {

        }
        
        #text {

        }
       
      
      `;
    }

    render() {
        return html`
        
        
        <div id="container">
        
            <div id="content">
               
                <div id="text">
                    <p>
                        ${this.text}
                    </p>
                   
                   
                </div>
                <div id="header">
                ${this.datum}
                </div>
               
            </div>
        </div>
   
    `;
    }
    firstUpdated(changedProperties) {
  
    }


}

customElements.define('blog-item', BlogItemLit);