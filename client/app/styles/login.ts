import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  width: 100%;
  border-radius: 10px;
  margin-top: 48px;

  @media (max-width: 768px) {
    .content {
      width: 100%;
    }
  }

  .content {
    flex-direction: column;
    align-items: center;
    width: 75%;
    height: 100%;
  }

  .line {
    width: 100%;
    background: rgba(0, 0, 0, 0.25);
    height: 1px;
    margin-top: 1px;
  }

  .inputs {
    /* padding: 48px 24px; */
    gap: 24px;
    justify-self: center;
  }

  h1 {
    align-self: start;
    margin: 72px 0 12px 24px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const LoginContainer = styled.div<{ gridProps?: string }>`
  display: grid;
  grid-template-columns: 50% 1fr;
  height: 100vh !important;
  overflow: hidden;

  .image-side {
    position: relative;
    width: 100%;
    height: 110vh;
    overflow: hidden;
    top: -10px;
  }

  label {
    text-align: start;
    margin-bottom: -16px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    overflow: auto;

    .image-side {
      display: none;
    }
  }
`;

export const FieldsContainer = styled.div`
  background-color: #ffffff;
  width: 100%;
  padding: 24px;

  h2 {
    font-size: 2rem;
    font-weight: 600;
  }

  h1 {
    font-size: 1.5rem;
    font-weight: 400;
  }

  .title-container {
    margin-top: 96px;
  }

  @media (max-width: 768px) {
    padding: 24px;
  }

  .input-container {
    display: flex;
    flex-direction: column;
    p {
      text-align: start;
      margin-bottom: 4px !important;
    }
  }

  .logo {
    margin-top: 96px;
  }
`;
