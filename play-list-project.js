/**
 * Copyright 2026 kha-liel
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import "./play-list-slide.js";
import "./navigation-arrows.js";
import "./slide-indicator.js";

/**
 * `play-list-project`
 * 
 * @demo index.html
 * @element play-list-project
 */
export class PlayListProject extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "play-list-project";
  }
  
  constructor() {
    super();
    this.index = 0;
    this.total = 0;
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      index: { type: Number, reflect : true },
      total : { type: Number}
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
      }

  
    `];
  }

  // Lit render the HTML
  render() {
    return html`
    <div class="container">
      <div class="navigation-controls">
        <navigation-arrows direction="left" @click="${this.prevSlide}"></navigation-arrows>
        <navigation-arrows direction="right" @click="${this.nextSlide}"></navigation-arrows>
      </div>

      <div class="slide-viewer">
        <!-- figure out slot changing -->
      </div>
    </div>
    `;
  }

  prevSlide() {
    this.index = (this.index <= 0) ? this.total - 1 : this.index - 1;
  }

  nextSlide () {
    this.index = (this.index >= this.total - 1) ? 0 : this.index + 1;
  }
}

globalThis.customElements.define(PlayListProject.tag, PlayListProject);