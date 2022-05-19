import { html, css, LitElement } from 'lit';

export class MyHeader extends LitElement {
  static get styles() {
    return css`
      :host {
        min-height: 100vh;
        max-width: 960px;
        margin: 0 auto;
        text-align: center;
        color: aliceblue;
      }
      header {
        display: flex;
        width: 100vw;
        justify-content: space-around;
        align-items: center;
      }
      ul {
        width: 25vw;
        display: flex;
        justify-content: flex-end;
        list-style: none;
      }
      li {
        margin: 0 1rem;
        padding: 0.5rem;
      }
      a {
        text-decoration: none;
        color: inherit;
      }
    `;
  }
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
