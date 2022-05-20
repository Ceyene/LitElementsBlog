import { LitElement, html, css } from 'lit';
import './components/my-header/my-header';
import './components/my-posts/my-posts';
import './components/my-footer/my-footer';

export class BlogLitelement extends LitElement {
  static properties = {
    newerPosts: { type: Boolean },
  };

  constructor() {
    super();
    this.newerPosts = true;
  }

  static get styles() {
    return css`
      :host {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-align: center;
      }
    `;
  }

  render() {
    return html`
      <my-header></my-header>
      <main @toggleorder=${this._postsOrderListener}>
        <h2>${this.newerPosts ? 'Latest Posts:' : 'Older Posts:'}</h2>
        <my-posts></my-posts>
      </main>
      <my-footer></my-footer>
    `;
  }

  //event listener
  _postsOrderListener(e) {
    this.newerPosts = e.detail.newerPosts;
  }
}
