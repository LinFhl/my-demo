import { LitElement, html, css} from 'lit-element';
import '@vaadin/vaadin-text-field';
import '@vaadin/vaadin-accordion';


export class ListBlogLit extends LitElement {

    static get properties() {
        return {
            liste: {type: String},
            eintraege: {type: String},
        }
    }

    constructor() {
        super();
        this.liste = "";
       
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

        }
        
      
        
   
      
      `;
    }

    render() {
        return html`
        <div id="container">
                <vaadin-accordion>
                <vaadin-accordion-panel>
                <div slot="summary"><h2>HalloHallo</h2></div>
                <blog-item datum="20.05.2020" text="hefiuhsfoiwjfunoWEFUHH"></blog-item>
               
            </vaadin-accordion-panel>

            <vaadin-accordion-panel>
            <div slot="summary"><h2>HalloHallo</h2></div>
            <blog-item datum="17.07.2020" text="hefiuhsfoiwjfunoWEFUHH"></blog-item>
           
        </vaadin-accordion-panel>
            </vaadin-accordion>
        </div>
    `;
    }
    firstUpdated(changedProperties) {
       
    }


}

customElements.define('list-blog', ListBlogLit);