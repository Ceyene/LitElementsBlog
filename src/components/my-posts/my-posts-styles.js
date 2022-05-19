import { css } from 'lit';

export const myPostsStyles = css`
  * {
    box-sizing: border-box;
  }
  section {
    width: 80vw;
    max-width: 1300px;
    color: aliceblue;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    margin: 0.5rem auto;
  }
  article {
    background: #2d3c5f;
    width: 30vw;
    min-width: 250px;
    padding-bottom: 1rem;
    margin: 0.5rem;
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
