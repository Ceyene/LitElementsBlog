import { css } from 'lit';

export const myHeaderStyles = css`
  :host {
    min-height: 100vh;
    max-width: 960px;
    margin: 0 auto;
    text-align: center;
    color: aliceblue;
  }
  header {
    display: flex;
    width: 100vw;
    justify-content: space-around;
    align-items: center;
  }
  ul {
    width: 25vw;
    display: flex;
    justify-content: flex-end;
    list-style: none;
  }
  li {
    margin: 0 1rem;
    padding: 0.5rem;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  button {
    background: transparent;
    border: 2px solid aliceblue;
    color: aliceblue;
    padding: 0.5rem 0.75rem;
    border-radius: 0.5rem;
  }
`;
