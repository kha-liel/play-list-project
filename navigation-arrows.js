import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

export class NavigationArrows extends DDDSuper(I18NMixin(LitElement)) {
    static get tag() {
        return "navigation-arrows";
    }

    constructor() {
        super();
    }

    static get properties() {
        return {
            ...super.properties,
            direction: { type: String } // left or right
        };
    }

    static get styles() {
        return [super.styles,
        css`
        button {
            background: white;
            border: 2px solid font-variant(--ddd-theme-default-skyBlue);
            border-radius: 50%;
            width: 48px;
            height: 48px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--ddd-theme-default-skyBlue);
            font-size: 32px;
            font-weight: bold;
        }

        button:hover, button:focus {
            background: var(--ddd-theme-default-skyBlue);
            color: white;
            outline: none;
        }
        `];
    }

    render() {
        const isLeft = this.direction === 'left';
        return html`
            <button aria-label="${isLeft ? 'Previous Slide' : 'Next Slide'}">
                ${isLeft ? html`&#8249;` : html`&#8250;`}
            </button>
        `;
    }

}

globalThis.customElements.define(NavigationArrows.tag, NavigationArrows);