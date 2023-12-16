/** @jsxImportSource @emotion/react */

import { useState } from "react";
import { Modal } from "../../../components/molecule/Modal/Modal";
import { AnswerModalContent1Style, AnswerModalContent2Style } from "./styles";
import { useRecoilValue } from "recoil";
import { IsLoggedInState } from "../../../atom/LoginInfo";
import axios from "axios";

interface LikeProps{
  wid: number;
}
export default function AnswerModal(props: LikeProps) {
  const { wid } = props;

  const [modalOpen, setModalOpen] = useState(true);
  const isLoggedIn = useRecoilValue(IsLoggedInState);

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleLikeSubmit = async () => {
    if(isLoggedIn){
      try{
        const response = axios.post('url', wid); // 이 부분 url 수정하면 됨
        console.log(response);
      }
      catch(error){
        console.log(error)
      }
    }
    else alert("로그인이 필요합니다.")
  }

  return (
    <Modal isOpen={modalOpen} onClose={handleModalClose}>
      <div css={AnswerModalContent1Style}>정답!</div>
      <button css={AnswerModalContent2Style} onClick={handleLikeSubmit}>좋아요 단어 저장하기</button>
    </Modal>
  )
}