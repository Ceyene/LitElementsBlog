import { html, css, LitElement } from 'lit';

export class MyFooter extends LitElement {
  static get styles() {
    return css`
      * {
        box-sizing: border-box;
      }
      :host {
        width: 100vw;
        padding: 0.5rem 1rem;
        text-align: center;
        color: aliceblue;
      }
    `;
  }

  constructor() {
    super();
  }

  render() {
    return html`<footer>2022 - Made by Cynthia Romero</footer>`;
  }
}

customElements.define('my-footer', MyFooter);
