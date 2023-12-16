/** @jsxImportSource @emotion/react */
import { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { useRecoilValue } from "recoil";
import { UserInfoState } from "../../atom/UserInfo";
import Header from "../../components/organism/Header/Header";
import SquareButton from "../../components/atom/Button/SquareButton";
import { theme } from "../../style/theme";
import { LikeWordBox1, LikeWordBox2, LikeWordContainer, LikeWordWrapper } from "./styles";

export default function LikeWord() {
  const navigate = useNavigate();
  const userId = useRecoilValue(UserInfoState);
  const formData = {
    userId: userId,

  }
  const [likeWordList, setLikeWordList] = useState<string[]>([]); // 초기 상태의 타입을 string[]로 명시

  useEffect(() => {
    console.log(userId);
    const fetchData = async () => {
      try {
        const response = await axios.post('http://127.0.0.1:8000/like/', formData);
        console.log(response.data);
        const processedData = response.data.liked_words.map((item:any) => item.name);
        
        // 가공된 데이터를 state에 저장
        console.log(processedData);
        setLikeWordList(processedData);
        console.log(likeWordList)
        
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [userId]);

  return (
    <div css={LikeWordWrapper}>
      <Header />
      <div css={LikeWordContainer}>
        {likeWordList.map((word, index) => (
          index % 2 === 0 ? (
            <div key={index} css={LikeWordBox1}>
              <SquareButton
                message={word}
                onClick={()=>{}}
                color={theme.gray.main}
              />
            </div>
          ) : (
              <div key={index} css={LikeWordBox2}>
                <SquareButton
                  message={word}
                  onClick={() => { }}
                  color={theme.purple.sub1}
                />
              </div>
            )
        ))}
      </div>
    </div>
  );
}
