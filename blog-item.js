import { LitElement, html, css} from 'lit-element';



export class BlogItemLit extends LitElement {

    static get properties() {
        return {
            datum: {type: String},
            text: {type: String},
            autor: {type: String},
            id: {type: String}

        }
    }

    constructor() {
        super();
        this.datum = "";
        this.text = "";
        this.autor = "";
        this.id = "";
    }

    static get styles() {

        return css` 
        :host{
            font-family: Arial, Helvetica, sans-serif;
        }

    
    


       
      

        #content {
            width:100%;
            margin-left: auto;
            margin-right: auto;
        }

        #footer {
            width:100%;
            text-align: right;
            font-size: small;
            font-weight: bold;
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
                <vaadin-button @click="${this.deleteBlog}">
                <iron-icon icon="vaadin:trash"></iron-icon>
                </vaadin-button>
                </div>
                <div id="footer">
                ${this.getFooter(this.datum,this.autor)}
                </div>
            </div>
        </div>
   
    `;
    }
    firstUpdated(changedProperties) {
  
    }

    getFooter(footerDatum, footerAutor){


        return footerAutor + " - " + footerDatum;
    }

    async deleteBlog() {
     
        const response = await fetch(`/blog/api/blog/blog/` + this.id ,{ 
        method: 'DELETE'});

        location.reload();

    }


}

customElements.define('blog-item', BlogItemLit);