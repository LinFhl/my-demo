import { LitElement, html, css} from 'lit-element';
import '@vaadin/vaadin-text-field';
import '@vaadin/vaadin-accordion';
import '@vaadin/vaadin-button';
import '@vaadin/vaadin-form-layout';



export class ListBlogLit extends LitElement {

    static get properties() {
        return {
           blogliste: {type: Array},
           


        }
    }

    constructor() {
        super();
        this.blogliste=[{}];
        
       
        
       
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
            text-align: center;

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

        vaadin-button {
            margin: 15px;
           
        }
        
   
      
      `;
    }

    render() {
        return html`
        


        <div id="container">
        <h2>Artikel</h2>
        
            <vaadin-accordion>
            ${this.blogliste.map((blogEintrag) => 
                html`<vaadin-accordion-panel>
                        <div slot="summary"><h3> ${blogEintrag.titel}</h3></div>
                        <blog-item id="${blogEintrag.id}" autor="${blogEintrag.autor}" datum="${blogEintrag.datumAsString}" text="${blogEintrag.blogtext}"</blog-item>
                    </vaadin-accordion-panel>`
                 )}
            </vaadin-accordion>
           
           
        </div>
    `;
    }
    firstUpdated(changedProperties) {
       this.loaddata();
    }

    async loaddata(){
        await fetch(`/blog/api/blog/blogs`)
        .then(r => r.json())
        .then(async data => {
            this.blogliste = data;
        });
    }

  
   

}

customElements.define('list-blog', ListBlogLit);