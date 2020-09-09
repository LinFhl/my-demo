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
            auTextfield: {type: String},
            labelButton: {type: String}

        }
    }

    constructor() {
        super();
        this.labelTextfield = "";
        this.labelTextarea = "";
        this.auTextfield = "";
        this.labelButton = "";
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
    
        vaadin-text-field {
            margin: 10px;
            width: 65%;
        }

        vaadin-text-area {
            height:250px;
            width: 65%;
        }

        vaadin-form-layout {
            width: 65%;
            margin: auto;
            margin-left: auto;
            margin-right: auto;
        }
    
        vaadin-button{
            margin: 15px;
        }

        h2{
            background-color: #BDBDBD;
            width:80%;
            margin-left: auto;
            margin-right: auto;
            border-radius: 5px;
            text-align: center;
        }

      `;
    }

    render() {
        return html`
        <div id="container">
            <h2>Neuer Blog-Artikel</h2>
            <div>
                <vaadin-text-field id= "titelFieldId" placeholder="${this.labelTextfield}" label="" value=""></vaadin-text-field> <br>
                <vaadin-text-area id="textAreaId" Placeholder="${this.labelTextarea}" label="" value=""></vaadin-text-area> <br>
                <vaadin-text-field id="autorFieldId" placeholder="${this.auTextfield}" label="" value=""></vaadin-text-field> <br>
                    <vaadin-button @click="${this.saveBlog}">
                        <iron-icon icon=""></iron-icon>
                        ${this.labelButton}

                    </vaadin-button>
            
        </div>
       
   
    `;
    }
    firstUpdated(changedProperties) {
    
    }

    async saveBlog() {
        const titelField = this.shadowRoot.getElementById('titelFieldId');
        const textField = this.shadowRoot.getElementById('textAreaFieldId'); 
        const autorField = this.shadowRoot.getElementById('autorFieldId');  
        const response = await fetch(`/blog/api/blog`, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: '{"titel":"' + titelField.value + '","blogText":"' + textField.value + '", "autor":"' + autorField.value + '"}' 

        });

        titelField.value = "";

        location.reload();

    }


}

customElements.define('new-blog', NewBlogLit);