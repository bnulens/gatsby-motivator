import styled from "styled-components"

export const StyledSideNote = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 20%;
  height: 100%;
  padding: 12px 24px;

  .side-note__side-scroll {
    .side-note__side-scroll-item {
      display: flex;
      align-items: center;
      margin: 12px auto;
      cursor: pointer;

      .item-bullet {
        display: block;
        width: 10px;
        height: 10px;
        margin-right: 10px;
        border: 1px solid var(--color-silver);
        border-radius: 50%;
      }

      h4 {
        font-family: "Fraunces";
        font-size: 24px;
        font-weight: 300;
        color: var(--color-silver);
      }
    }
  }
  .side-note__languages {
    p {
      font-family: "Fraunces";
      font-size: 12px;
      font-weight: 300;
    }
  }
`
