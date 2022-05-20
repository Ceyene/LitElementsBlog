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
        image:
          'https://img.freepik.com/free-photo/man-work_144627-41108.jpg?t=st=1653073183~exp=1653073783~hmac=88c03d2a6ef619957ab45a1c2e54113500ae3dbafc257d61edeaa6d8d00045b7&w=1380',
      },
      {
        title: 'Second Post',
        text: 'This is the second post of this blog.',
        date: new Date('2018-05-02'),
        image:
          'https://img.freepik.com/free-photo/caucasian-woman-using-computer-laptop_53876-30558.jpg?t=st=1653073183~exp=1653073783~hmac=4a1226e048445c25371059691b21bc138af6d945bcbd2b8fbbb9077339f56bc1&w=1380',
      },
      {
        title: 'Third Post',
        text: 'This is the third post of this blog.',
        date: new Date('2019-03-19'),
        image:
          'https://img.freepik.com/free-photo/aerial-view-woman-using-computer-laptop-working-hot-tea-drink_53876-24779.jpg?t=st=1653073271~exp=1653073871~hmac=80a8d95d811a8abea317cb12c3180b11ebeb339531b143611fbffa6652fce34c&w=1380',
      },
      {
        title: 'Fourth Post',
        text: 'This is the fourth post of this blog.',
        date: new Date('2020-05-02'),
        image:
          'https://img.freepik.com/free-photo/keyboard-with-yellow-flowers-cup_1162-165.jpg?t=st=1653073183~exp=1653073783~hmac=82ca8004573d73734a88c7a805c0fc5cdf5b566662395f52da584104360099d4&w=1380',
      },
      {
        title: 'Fifth Post',
        text: 'This is the fifth post of this blog.',
        date: new Date('2021-06-23'),
        image:
          'https://img.freepik.com/free-photo/headphones-clock-laptop_1162-167.jpg?t=st=1653073348~exp=1653073948~hmac=f60f78335cf9371d989e13d77ff2144aaffb8153c5d397c13832bb37a6a5ca3d&w=1380',
      },
      {
        title: 'Sixth Post',
        text: 'This is the sixth post of this blog.',
        date: new Date('2022-05-20'),
        image:
          'https://img.freepik.com/free-photo/womans-hands-typing-laptop-workplace_1163-4324.jpg?t=st=1653073183~exp=1653073783~hmac=d116b538b760fad6d78a527736df6c71a0769369dab82f4eecba8e7b684d3d78&w=1380',
      },
    ];
    this.newerPosts = true;
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
