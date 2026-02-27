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
        `;
    }

}

globalThis.customElements.define(NavigationArrows.tag, NavigationArrows);