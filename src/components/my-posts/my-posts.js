import { html, LitElement } from 'lit';
import { myPostsStyles } from './my-posts-styles';
import { postData } from '../../utils/post-data';
import '../my-post/my-post';
export class MyPosts extends LitElement {
  //defining scoped styles
  static styles = [myPostsStyles];

  //defining properties
  static properties = {
    posts: [],
    newerPosts: { type: Boolean },
  };

  //constructor
  constructor() {
    super();
    this.posts = postData;
    this.newerPosts = true;
  }

  //render
  render() {
    //sorting posts
    let sortedPosts = this.newerPosts
      ? this.posts.sort((a, b) => a.date - b.date)
      : this.posts.sort((a, b) => b.date - a.date);

    return html`
      <button>
        ${this.newerPosts ? 'Show older posts first' : 'Show newer posts first'}
      </button>
      <section>
        ${sortedPosts.map(
          post =>
            html`<my-post .post=${post} @click=${this._postDetail}></my-post>`
        )}
      </section>
    `;
  }

  //event emitters
  async _togglePostsOrder() {
    this.newerPosts = !this.newerPosts;

    await this.updateComplete;

    const newerPosts = this.newerPosts;
    const options = {
      detail: { newerPosts },
      bubbles: true,
      composed: true,
    };

    this.dispatchEvent(new CustomEvent('toggleorder', options));
  }
}

customElements.define('my-posts', MyPosts);
