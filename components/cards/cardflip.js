import { LitElement, html, css } from 'lit';

export class cardFlip extends LitElement {
    static styles = css`
        .flip-card {
        background-color: transparent;
        width: 190px;
        height: 254px;
        perspective: 1000px;
        font-family: sans-serif;
        }

        .title {
        font-size: 1.5em;
        font-weight: 900;
        text-align: center;
        margin: 0;
        }

        .flip-card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.8s;
        transform-style: preserve-3d;
        }

        .flip-card:hover .flip-card-inner {
        transform: rotateY(180deg);
        }

        .flip-card-front, .flip-card-back {
        box-shadow: 0 8px 14px 0 rgba(0,0,0,0.2);
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        height: 100%;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.30);;
        border-radius: 1rem;
        }

        .flip-card-front {
        background-color: #1a1a1a;
        }

        .flip-card-back {
        background-color: white;
        color: black;
        transform: rotateY(180deg);
        }
    `;

    render() {
        return html`
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <p class="title">FLIP CARD</p>
                        <p>Hover Me</p>
                    </div>
                    <div class="flip-card-back">
                        <p class="title">BACK</p>
                        <p>Leave Me</p>
                    </div>
                </div>
            </div>
        `
    }
};