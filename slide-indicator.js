import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

export class SlideIndicator extends DDDSuper(I18NMixin(LitElement)) {
    static get tag() {
        return "slide-indicator";
    }

    constructor() {
        super();
        this.total = 0;
        this.currentIndex = 0;
    }

    static get properties() {
        return {
            ...super.properties,
            total: { type: Number},
            currentIndex: { type: Number}
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
    let dots = [];
    for (let i = 0; i < this.total; i++) {
        dots.push(html`
            <span @click="${this._handleDotClick}" data-index="${i}" class="dot ${i === this.activeIndex ? 'active' : ''}"></span>
            `)
    }
        return html`
        <div class="dots">
            ${dots}
        </div>
        `;
    }

    // added some stuff in for clicking indicator buttons
    _handleDotClick(e) {
        const indexChange = new CustomEvent("play-list-index-changed", {
            composed: true,
            bubbles: true,
            detail: {
                index: parseInt(e.target.dataset.index)
            },
        });
        this.dispatchEvent(indexChange);
    }

}

globalThis.customElements.define(SlideIndicator.tag, SlideIndicator);