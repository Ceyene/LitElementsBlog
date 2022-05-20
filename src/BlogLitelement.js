import { LitElement, html, css } from 'lit';
import './components/my-header/my-header';
import './components/my-posts/my-posts';
import './components/my-post-detail/my-post-detail';
import './components/my-footer/my-footer';

export class BlogLitelement extends LitElement {
  static properties = {
    newerPosts: { type: Boolean },
    postDetail: {},
  };

  constructor() {
    super();
    this.newerPosts = true;
    this.postDetail = null;
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
      <main
        @toggleorder=${this._postsOrderListener}
        @postdetail=${this._postDetailListener}
      >
        ${this.postDetail
          ? html`<my-postdetail .post=${this.postDetail}></my-postdetail>`
          : html`<h2>${this.newerPosts ? 'Latest Posts:' : 'Older Posts:'}</h2>
              <my-posts></my-posts>`}
      </main>
      <my-footer></my-footer>
    `;
  }

  //event listeners
  _postsOrderListener(e) {
    this.newerPosts = e.detail.newerPosts;
  }
  _postDetailListener(e) {
    const { date, excerpt, image, text, title } = e.detail.postDetail;
    this.postDetail = { date, excerpt, image, text, title };
  }
}
