import styled from 'styled-components';

export const FormContainer = styled.div`
  padding: 24px;
  border: 1px solid #10182820;
  border-radius: 10px;
  height: fit-content;
  width: 100%;

  @media (min-width: 768px) {
    width: 420px;
    align-self: center;
  }
`;

export const FormHeading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 24px;
  & p {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.25;
  }
`;

export const FormTitle = styled.h2`
  font-weight: 600;
  font-size: 20px;
  line-height: 1.25;
`;
