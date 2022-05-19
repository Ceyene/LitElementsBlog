import { html, LitElement } from 'lit';
import { myHeaderStyles } from './my-header-styles';

export class MyHeader extends LitElement {
  static styles = [myHeaderStyles];

  static get properties() {
    return {
      title: { type: String },
    };
  }

  constructor() {
    super();
    this.title = 'Lit Elements Blog';
  }

  render() {
    return html`
      <header>
        <h1>${this.title}</h1>
        <nav>
          <ul>
            <li>Posts</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    `;
  }
}

customElements.define('my-header', MyHeader);
