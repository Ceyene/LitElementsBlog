import { html, LitElement } from 'lit';
import { myPostsStyles } from './my-posts-styles';
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
    this.posts = [
      {
        title: 'First Post',
        text: 'This is the first post of this blog.',
        date: new Date('2017-12-03'),
      },
      {
        title: 'Second Post',
        text: 'This is the second post of this blog.',
        date: new Date('2018-05-02'),
      },
      {
        title: 'Third Post',
        text: 'This is the third post of this blog.',
        date: new Date('2019-03-19'),
      },
      {
        title: 'Fourth Post',
        text: 'This is the fourth post of this blog.',
        date: new Date('2020-05-02'),
      },
      {
        title: 'Fifth Post',
        text: 'This is the fifth post of this blog.',
        date: new Date('2021-06-23'),
      },
      {
        title: 'Sixth Post',
        text: 'This is the sixth post of this blog.',
        date: new Date('2022-05-20'),
      },
    ];
    this.newerPosts = false;
  }

  //render
  render() {
    //sorting posts
    let sortedPosts = this.newerPosts
      ? this.posts.sort((a, b) => a.date - b.date)
      : this.posts.sort((a, b) => b.date - a.date);

    return html`
      <button @click=${this._togglePostsOrder}>
        ${this.newerPosts ? 'Show older posts first' : 'Show newer posts first'}
      </button>
      <section>
        ${sortedPosts.map(post => html`<my-post .post=${post}></my-post>`)}
      </section>
    `;
  }

  //event emitter
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
