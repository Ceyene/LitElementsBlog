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
  button {
    background: transparent;
    border: 2px solid aliceblue;
    color: aliceblue;
    padding: 0.75rem;
    border-radius: 0.5rem;
  }
`;
