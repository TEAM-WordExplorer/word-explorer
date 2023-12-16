/** @jsxImportSource @emotion/react */

import { useState } from "react";
import { Modal } from "../../../components/molecule/Modal/Modal";
import { AnswerModalContent1Style, AnswerModalContent2Style } from "./styles";
import { useRecoilValue } from "recoil";
import { IsLoggedInState } from "../../../atom/LoginInfo";
import axios from "axios";
import { UserInfoState } from "../../../atom/UserInfo";

interface LikeProps{
  wid: number;
}
export default function AnswerModal(props: LikeProps) {
  const { wid } = props;
  const userId = useRecoilValue(UserInfoState);

  const [modalOpen, setModalOpen] = useState(true);
  const isLoggedIn = useRecoilValue(IsLoggedInState);

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleLikeSubmit = async () => {
    const formData = {
      "userId": userId,
      "wId": wid
    }
    if(isLoggedIn){
      try{
        const response = await axios.post('http://127.0.0.1:8000/word_like/', formData); // 이 부분 url 수정하면 됨
        const responseData = response.data;

        if (responseData.success) {
          // 서버로부터의 응답이 성공인 경우 모달을 닫습니다.
          handleModalClose();
        } else {
          // 서버로부터의 응답이 실패인 경우 여기에서 추가적인 처리를 할 수 있습니다.
          console.log("Like submission failed:", responseData.error);
        }
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