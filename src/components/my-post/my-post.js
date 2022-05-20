import { html, LitElement } from 'lit';
import { myPostStyles } from './my-post-styles';

export class MyPost extends LitElement {
  static properties = {
    post: {},
  };

  static styles = [myPostStyles];

  render() {
    return html`
      <article>
        <img src=${this.post.image} alt="Dummy blog image" />
        <div class="post-content">
          <small>${this.post.date.toLocaleDateString()}</small>
          <h2>${this.post.title}</h2>
          <p>${this.post.text}</p>
        </div>
      </article>
    `;
  }
}

customElements.define('my-post', MyPost);
