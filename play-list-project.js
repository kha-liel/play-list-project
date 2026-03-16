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
        display: inline-block;
        color: var(--ddd-theme-primary);
        background-color: transparent;
        border: none;
        font-family: var(--ddd-font-navigation);
      }
      .container {
        position: relative;
        display: flex;
        align-items: center;
        background-color: var(--ddd-theme-default-slateMaxLight);
        padding: var(--ddd-spacing-12);
        width: 800px;
        min-height: 300px;
        border-radius: var(--ddd-radius-xs);
        border: none;
      }
      .slide-viewer {
        width: 100%;
        max-width: 800px;
      }
      ::slotted(play-list-slide:not([active])) {
        display: none;
      }
      ::slotted(play-list-slide[active]) {
        display: block;
      }
      .navigation-controls {
        position: absolute;
        top: 50%;
        left: 0;
        right: 0;
        transform: translateY(-50%);
        display: flex;
        justify-content: space-between;
        padding: 0 var(--dd-spacing-5);
        z-index: 10;
      }
      .dots-indicator-container {
        position: absolute;
        bottom: var(--ddd-spacing-10);
        left: var(--ddd-spacing-20);
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
        <slot @slotchange="${this.handleSlotChange}"></slot>
      </div>
      <div class="dots-indicator-container">
        <slide-indicator
          .total="${this.total}"
          .currentIndex="${this.index}"
          @play-list-index-changed="${this.handleIndexChange}">
        </slide-indicator>
      </div>
    </div>
    `;
  }

  handleSlotChage (e) {
    this.total = this.querySelectorAll('play-list-slide').length;
    this.updatedVisibleSlide();
  }

  handleIndexChange(e) {
    this.index = e.detail.index;
  }

  prevSlide() {
    this.index = (this.index <= 0) ? this.total - 1 : this.index - 1;
  }

  nextSlide () {
    this.index = (this.index >= this.total - 1) ? 0 : this.index + 1;
  }

  updatedVisibleSlide() {
    const slides = Array.from(this.querySelectorAll('play-list-slide'));
    if (slides.length > 0) {
    slides.forEach((slide,i) => {
      if (i === this.index) {
        slide.setAttribute('active', '')
    } else { 
      slide.removeAttribute('active');
    }
    });
  }
}

  updated(changedProperties) {
    if (changedProperties.has('index')) {
      this.updatedVisibleSlide();
    }
  }
}

globalThis.customElements.define(PlayListProject.tag, PlayListProject);