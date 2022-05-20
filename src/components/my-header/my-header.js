import { html, LitElement } from 'lit';
import { myHeaderStyles } from './my-header-styles';

export class MyHeader extends LitElement {
  static styles = [myHeaderStyles];

  static properties = {
    title: '',
    showContact: { type: Boolean },
  };

  constructor() {
    super();
    this.title = 'Lit Elements Blog';
    this.showContact = false;
  }

  render() {
    return html`
      <header>
        <h1>${this.title}</h1>
        <nav>
          <button @click="${this._toggleContactInfo}">
            ${this.showContact ? 'Hide Contact Info' : 'Show Contact Info'}
          </button>
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
}

customElements.define('my-header', MyHeader);
