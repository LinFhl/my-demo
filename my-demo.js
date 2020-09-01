import { LitElement, html, css} from 'lit-element';
import '@vaadin/vaadin-date-picker';

export class MyDemoLit extends LitElement {

    static get properties() {
        return {
            vorname: {type: String}, 
            nachname: {type: String},
            geburtsdatum: {type: String},
            telefon: {type: String},
            strasse: {type: String},
            hausnummer: {type: String},
            plz: {type: String},
            ort: {type: String},
            email: {type: String}
        }
    }

    constructor() {
        super();
        this.vorname = "";
        this.nachname = "";
        this.geburtsdatum = "";
        this.telefon = "Nicht angegeben";
        this.strasse = "";
        this.hausnummer = "";
        this.plz = "";
        this.ort = "";
        this.email = "";
    }

    static get styles() {

        return css` 
        :host {
            font-family: Arial, Helvetica, sans-serif;
            display: block;
        }
        
        #container {
            background-color: #EEEEE;
            width: 600px;
            margin-left: auto;
            margin-right: auto;
        }
        
        #name{
            color:#1f497d;
        }
        
        #adress {
            color:808080;
            padding: 10px;
      
        }
        
        #symbol {
            width: 150px;
            height: 150px;
            border-radius: 75px;
            background-color: #3c7bc8;
            float: left;
            margin-left: auto;
            margin-right: 10px;
            margin-top: 35px;
            box-shadow: 4px 4px 30px black inset;
        }
        
        #init {
            width: 100px;
            color: white;
            display: table;
            width: 100%;
            height: 10em;
            font-size: xx-large;
            text-align: center;
            margin-right: 10px;
            margin-top: 10%;
        } 
      
      `;
    }

    render() {
        return html`
        <div id="container">
        <div id="symbol">
            <div id="init">
                <h3>${this.getInitialien(this.vorname, this.nachname)}</h3>
            </div>
        </div>
        <div id="adress">
            <div id="name">
                <h1>${this.vorname} ${this.nachname}</h1>
            </div>
                ${this.strasse}<br />${this.plz} ${this.ort}<br /><br />
                Geburtsdatum: <vaadin-date-picker value="${this.geburtsdatum}"></vaadin-date-picker><br />
                Telefon: ${this.telefon}<br />
                E-Mail: <a href="${this.email}">${this.email}</a>
        </div>
    </div>
   
    `;
    }
    firstUpdated(changedProperties) {
       
    }

    getInitialien(vname, nname){

        var i1 = vname.substring(0,1);
        var i2 = nname.substring(0,1);

        return i1 + i2;
    }

}

customElements.define('my-demo', MyDemoLit);