import { html, css, LitElement } from 'lit';

export class MyPosts extends LitElement {
  //defining scoped styles
  static styles = css`
    section {
      width: 90vw;
      max-width: 1300px;
      color: aliceblue;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      margin: 0.5rem auto;
    }
    article {
      background: #2d3c5f;
      width: 30vw;
      min-width: 250px;
      padding-bottom: 1rem;
      margin: 0.5rem 1rem;
    }
    article:first-child {
      width: 100%;
      margin: 0.5rem auto;
      display: flex;
      padding-bottom: 0;
    }
    img {
      width: 30vw;
      min-width: 250px;
    }
    .post-content {
      padding: 1rem;
      text-align: center;
      width: 100%;
    }
  `;

  //defining properties
  static properties = {
    posts: [],
  };

  //constructor
  constructor() {
    super();
    this.posts = [
      { title: 'First Post', text: 'This is the first post of this blog.' },
      { title: 'Second Post', text: 'This is the second post of this blog.' },
      { title: 'Third Post', text: 'This is the third post of this blog.' },
      { title: 'Fourth Post', text: 'This is the fourth post of this blog.' },
      { title: 'Fifth Post', text: 'This is the fifth post of this blog.' },
      { title: 'Sixth Post', text: 'This is the sixth post of this blog.' },
    ];
  }

  //render
  render() {
    return html`
      <section>
        ${this.posts.map(
          post => html`
            <article>
              <img
                src="https://dummyimage.com/600x400/479e9a/60438f.png&text=blog+dummy+img"
                alt="Dummy blog image"
              />
              <div class="post-content">
                <h2>${post.title}</h2>
                <p>${post.text}</p>
              </div>
            </article>
          `
        )}
      </section>
    `;
  }
}

customElements.define('my-posts', MyPosts);
