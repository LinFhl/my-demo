import { LitElement, html, css} from 'lit-element';
import '@vaadin/vaadin-text-field';
import '@vaadin/vaadin-text-field/vaadin-text-area';
import '@vaadin/vaadin-button';
import '@vaadin/vaadin-form-layout';




export class NewBlogLit extends LitElement {

    static get properties() {
        return {
            labelTextfield: {type: String},
            labelTextarea: {type: String},
            labelButton: {type: String}

        }
    }

    constructor() {
        super();
        this.labelTextfield = "";
        this.labelTextarea = "";
        this.labelButton = "";
    }

    static get styles() {

        return css` 
        :host{
            font-family: Arial, Helvetica, sans-serif;
          
        }

        #container {
            background-color: #f6f6f6;
            width:100%;
            margin-left: auto;
            margin-right: auto;
            border: 1px solid;
            border-radius: 25px;
            border-color: #b3b3b3;
            border-style: ridge;
            text-align: center;
        }
    
        vaadin-text-field {
    
          margin: 10px;
        }

        vaadin-text-area {

            height:250px;
        }

        vaadin-form-layout {
            width: 50%;
            margin: auto;
           
        }
      
      `;
    }

    render() {
        return html`
        <div id="container">
            <h2 text-algin:"center">Neuer Blog-Artikel</h2>
            <vaadin-form-layout>
                <vaadin-text-field placeholder="${this.labelTextfield}" label="" value=""></vaadin-text-field> <br>
                <vaadin-text-area Placeholder="${this.labelTextarea}" label="" value=""></vaadin-text-area> <br>
                <vaadin-button>
                <iron-icon icon=""></iron-icon>
                ${this.labelButton}
            </vaadin-button>
            </vaadin-form-layout>
        </div>
       
   
    `;
    }
    firstUpdated(changedProperties) {
    
    }


}

customElements.define('new-blog', NewBlogLit);