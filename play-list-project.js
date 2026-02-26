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
    this.topHeading = "Top Line Heading";
    this.subheading = "Slide Subheading";
    this.activeSlide = 0;
    this.details = "Information for slide.";
    this.title = "Screenreader accessibility";
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      topHeading: { type : String },
      subheading: { type : String },
      activeSlide: { type : Number },
      items: { type: Array },
      details: { type: String },
      title: { type: String }
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
      
      .top-heading{
        font-size: var(--ddd-play-list-project-title-font-size, var(--ddd-font-size-s));
      }
      .subheading {
        font-size: var(--ddd-play-list-project-subheading-font-size, var(--ddd-font-size-l));
      }
      hr {
        width: 80px;
        min-height: 1px;
        padding-top: 4px;
        padding-bottom: 4px;
        margin-left: 0;
        margin-right: auto;
        color: var(--ddd-theme-default-original87Pink);
        margin-top: 4px;
      }
      .details {
        min-height: 200px;
        max-height: 200px;
        max-width: 450px;
        text-align: left;
        overflow-y: auto;
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
<div class="play-list-slide" title="${this.title}">
  <div class="wrapper">
    <span class="top-heading">${this.topHeading}</span>
    <br>
    <span class="subheading">${this.subheading}</span>
    <hr>
    <p class="details">${this.details}</p>
    <slot></slot>
  </div>
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