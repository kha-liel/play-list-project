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
        /* nothing in here yet
        :host {
        
        }*/
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