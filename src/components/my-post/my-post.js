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
        <img
          src="https://dummyimage.com/600x400/479e9a/60438f.png&text=blog+dummy+img"
          alt="Dummy blog image"
        />
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
