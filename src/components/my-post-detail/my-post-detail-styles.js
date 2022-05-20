import { css } from 'lit';

export const myPostDetailStyles = css`
  * {
    box-sizing: border-box;
  }
  article {
    background: #2d3c5f;
    width: 80vw;
    min-width: 250px;
    padding-bottom: 1rem;
    margin: 1rem auto;
  }
  .post-header {
    padding: 1rem;
    background: gray;
  }
  .post-content {
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .post-content img {
    width: 40vw;
    min-width: 250px;
  }
  .post-content p {
    width: 50%;
    padding: 0 1rem;
    text-align: justify;
  }
  h1 {
    margin-top: 0.5rem;
  }
  button {
    padding: 1rem;
    background: transparent;
    border: 2px solid aliceblue;
    border-radius: 1rem;
    font-size: 1rem;
    color: aliceblue;
    cursor: pointer;
  }
`;
