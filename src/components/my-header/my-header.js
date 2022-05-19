import { html, LitElement } from 'lit';
import { myHeaderStyles } from './my-header-styles';

export class MyHeader extends LitElement {
  static styles = [myHeaderStyles];

  static properties = {
    title: '',
    showContactInfo: false,
  };

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
            <li @click="${this._hideContactInfo}">Posts</li>
            <li @click="${this._showContactInfo}">Contact</li>
          </ul>
        </nav>
      </header>
      ${this.showContactInfo
        ? html`<div>
            <p>
              Contact me at:
              <a href="mailto:email@email.com">email@email.com</a>
            </p>
          </div>`
        : ''}
    `;
  }

  _showContactInfo() {
    this.showContactInfo = true;
  }

  _hideContactInfo() {
    this.showContactInfo = false;
  }
}

customElements.define('my-header', MyHeader);
