import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

export class SlideIndicator extends DDDSuper(I18NMixin(LitElement)) {
    static get tag() {
        return "slide-indicator";
    }

    constructor() {
        super();
    }

    static get properties() {
        return {
            ...super.properties,
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
        return html`
        <div class="button-wrapper">
            <button id="1"></button>
            <button id="2"></button>
            <button id="3"></button>
            <button id="4"></button>
        </div>
        `;
    }

}

globalThis.customElements.define(SlideIndicator.tag, SlideIndicator);