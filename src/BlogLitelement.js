import { LitElement, html, css } from 'lit';
import './components/my-header/my-header';
import './components/my-posts/my-posts';
import './components/my-footer/my-footer';

export class BlogLitelement extends LitElement {
  static get styles() {
    return css`
      :host {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
    `;
  }

  render() {
    return html`
      <my-header></my-header>
      <my-posts></my-posts>
      <my-footer></my-footer>
    `;
  }
}
