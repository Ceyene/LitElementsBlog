import { html, LitElement } from 'lit';
import { myFooterStyles } from './my-footer-styles';

export class MyFooter extends LitElement {
  static styles = [myFooterStyles];

  constructor() {
    super();
  }

  render() {
    return html`<footer>2022 - Made by Cynthia Romero</footer>`;
  }
}

customElements.define('my-footer', MyFooter);
