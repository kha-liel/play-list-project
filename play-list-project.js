/**
 * Copyright 2026 kha-liel
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

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
    this.title = "Top Line Heading";
    this.subheading = "Slide Subheading";
    this.activeSlide = 0;
    this.details = "Random information for slide.";
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type : String },
      subheading: { type : String },
      activeSlide: { type : Number },
      items: { type: Array },
      details: { type: String },
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
      .wrapper {
        margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4);
      }
      h4 span {
        font-size: var(--play-list-project-label-font-size, var(--ddd-font-size-s));
      }
      .top-heading{
        font-size: var(--ddd-play-list-project-title-fint-size, var(--ddd-font-size-s));
      }
      .subheading {
        font-size: var(--ddd-play-list-project-subheading-font-size, var(--ddd-font-size-l));
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
<div class="wrapper">
  <span class="top-heading">${this.title}</span><br>
  <span class="subheading">${this.subheading}</span>
  <p class="details">${this.details}</p>
  <slot></slot>
</div>`;
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(PlayListProject.tag, PlayListProject);