import { LitElement, html, css } from 'lit';

export class cardHover extends LitElement {
    static styles = css`
        .card {
            width: 190px;
            height: 254px;
            background-image: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
            border-radius: 20px;
            transition: all .3s;
        }
        
        .card2 {
            width: 190px;
            height: 254px;
            background-color: #1a1a1a;
            transition: all .2s;
        }
        
        .card2:hover {
            transform: scale(0.98);
            border-radius: 20px;
        }
        
        .card:hover {
            box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.30);
        }
    `;

    static properties = {
        nome: {},
    }

    constructor() {
        super();
        this.nome = 'tico'
    }

    render() {
        return html`
            <div class="card">
                <div class="card2">
                </div>
            </div>
        `
    }
};

window.customElements.define('card-hover', cardHover);