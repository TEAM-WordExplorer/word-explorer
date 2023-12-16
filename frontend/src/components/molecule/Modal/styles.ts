import { css } from "@emotion/react";
import { theme } from "../../../style/theme";

export const ModalWrapper = css`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 300px;
  height: auto;

  display: flex;
  flex-direction: column;

  border-radius: 20px;

  background-color: #DFCAFF;
`

export const closeButton = css`
  position: absolute;
  top: 10px;
  right: 10px;

  background: none;
  border: none;
  font-size: 20px;
  color: ${theme.white};

  cursor: pointer;
`

export const ModalContainer = css`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  margin: 50px 0;

`