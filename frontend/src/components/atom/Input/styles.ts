import { css } from '@emotion/react';
import { theme } from '../../../style/theme';

export const InputStyle = css`
  width: 290px;
  height: 50px;

  text-align: center;
  border: 1px solid ${theme.gray.sub2}
`

export const RoundInputStyle = css`
  width: 290px;
  height: 50px;

  margin: 10px 0;
  padding: 0 10px;

  border: none;
  border-radius: 20px;
  
  background-color: ${theme.gray.sub1}
  
`