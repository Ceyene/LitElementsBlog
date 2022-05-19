import { LitElement, html, css } from 'lit';
import './components/my-header/my-header';
import './components/my-posts/my-posts';
import './components/my-footer/my-footer';
export class BlogLitelement extends LitElement {
  static get styles() {
    return css`
      :host {
        min-height: 100vh;
        max-width: 960px;
        margin: 0 auto;
        text-align: center;
        color: aliceblue;
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
