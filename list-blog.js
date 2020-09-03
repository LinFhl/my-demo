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
            width:90%;
            margin-left: auto;
            margin-right: auto;
            border: 1px solid;
            border-radius: 25px;
            border-color: #b3b3b3;
            border-style: ridge;

        }
        
        h2 {
            background-color: #BDBDBD;
            width:80%;
            margin-left: auto;
            margin-right: auto;
            border-radius: 5px;
            text-align: center;
            
        }
        
        blog-item {
            width:90%;

        }
      
        vaadin-accordion-panel {
            width:80%;
            margin-left: auto;
            margin-right: auto;

        }
        
   
      
      `;
    }

    render() {
        return html`
        <div id="container">
        <h2>Artikel</h2>
            <vaadin-accordion>
                <vaadin-accordion-panel>
                    <div slot="summary"><h3>Blogartikel 1</h3></div>
                        <blog-item autor="Juso Budo" datum="20.05.2020" text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                        sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
                        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata 
                        sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                        sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
                        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata 
                        sanctus est Lorem ipsum dolor sit amet."</blog-item>
                </vaadin-accordion-panel>
                <vaadin-accordion-panel>
                    <div slot="summary"><h3>Blogartikel 2</h3></div>
                        <blog-item datum=" 17.07.2020" text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam 
                        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
                        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata 
                        sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr."</blog-item>
                </vaadin-accordion-panel>
            </vaadin-accordion>
        </div>
    `;
    }
    firstUpdated(changedProperties) {
       
    }


}

customElements.define('list-blog', ListBlogLit);