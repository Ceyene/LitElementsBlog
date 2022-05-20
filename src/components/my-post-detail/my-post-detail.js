import { html, LitElement } from 'lit';
import { myPostDetailStyles } from './my-post-detail-styles';

export class MyPostDetail extends LitElement {
  static properties = {
    post: {},
  };

  static styles = [myPostDetailStyles];

  render() {
    return html`
      <article>
        <div class="post-header">
          <h1>${this.post.title}</h1>
          <small
            >Published:
            ${this.post.date.toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}</small
          >
        </div>
        <div class="post-content">
          <img src=${this.post.image} alt="Dummy blog image" />
          <p>${this.post.text}</p>
        </div>
      </article>
    `;
  }
}

customElements.define('my-postdetail', MyPostDetail);
