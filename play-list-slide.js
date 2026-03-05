import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

export class PlayListSlide extends DDDSuper(I18NMixin(LitElement)) {
    static get tag() {
        return "play-list-slide";
      }

    constructor() {
        super();
        this.topHeading = "TOP LINE HEADING";
        this.subheading = "Slide #, sub-heading";
        this.details = "Information for slide.";
        this.title = "Screenreader accessibility";
    }

    // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      topHeading: { type : String },
      subheading: { type : String },
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
        font-family: var(--ddd-font-primary);
        font-weight: var(--ddd-font-weight-medium);
      }
      .wrapper {
        margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4);
      }
      
      .top-heading{
        font-size: var(--ddd-play-list-project-title-font-size, var(--ddd-font-size-s));
        max-width: 250px;
      }
      .subheading {
        font-size: var(--ddd-play-list-project-subheading-font-size, var(--ddd-font-size-l));
        max-width: 250px;
      }
      hr {
        width: 80px;
        min-height: 1px;
        padding-top: 4px;
        padding-bottom: 4px;
        margin-left: 0;
        margin-right: auto;
        color: var(--ddd-theme-default-skyBlue);
        margin-top: 4px;
      }
      .details {
        min-height: 200px;
        max-height: 200px;
        max-width: 450px;
        line-height: var(--ddd-lh-140);
        text-align: left;
        overflow-y: auto;
      }

      .button-wrapper button {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        border: none;
        margin: 5px;
        background-color: var(--ddd-theme-default-limestoneGray);
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
        <div class="play-list-slide" title="${this.title}">
            <div class="wrapper">
                <span class="top-heading">${this.topHeading}</span><br>
                <span class="subheading">${this.subheading}</span><hr>
                <p class="details">${this.details}</p>
                <slot></slot>
            </div>
        </div>`;
}

}

globalThis.customElements.define(PlayListSlide.tag, PlayListSlide);