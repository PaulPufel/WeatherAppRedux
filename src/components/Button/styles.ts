import styled from '@emotion/styled';

interface ButtonStyledProps {
  disabled: boolean;
  buttonWidth?: string;
}

export const MainButton = styled.button<ButtonStyledProps>` 
  height: 100%;
  padding: 12px 40px;
  background-color: ${({ disabled }) => (disabled ? '#b8b6ae' : '#3678B4')};
  font-family: Inter, 'Helvetica Neue', Helvetica, sans-serif;
  font-size: 20px;
  line-height: 24.2px;
  line-height: 30px;
  color: #ffffff;
  border: none;
  border-radius: 50px;
  cursor: ${({ disabled }) => (disabled ? 'auto' : 'pointer')};
  transition: all 0.2s ;
  &:hover{
    background-color: #1fb1f5;
    transition: all 0.2s ;
  }

  &:active{
    background-color: #85a6b5;
  }
`;