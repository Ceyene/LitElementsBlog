import { html, LitElement } from 'lit';
import { myPostStyles } from './my-post-styles';

export class MyPost extends LitElement {
  static properties = {
    post: {},
  };

  static styles = [myPostStyles];

  render() {
    return html`
      <article @click=${this._postDetail}>
        <img src=${this.post.image} alt="Dummy blog image" />
        <div class="post-content">
          <small>${this.post.date.toLocaleDateString()}</small>
          <h2>${this.post.title}</h2>
          <p>${this.post.excerpt}</p>
        </div>
      </article>
    `;
  }

  async _postDetail() {
    const postDetail = this.post;
    const options = {
      detail: { postDetail },
      bubbles: true,
      composed: true,
    };

    this.dispatchEvent(new CustomEvent('postdetail', options));
  }
}

customElements.define('my-post', MyPost);
