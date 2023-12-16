/** @jsxImportSource @emotion/react */   // jsx pragma를 지정 -> css prop을 인식

import Header from "../../../components/organism/Header/Header";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { LoadingContainer, LoadingTextWrapper, LoadingWrapper } from "./styles";
import { BigLogoIcon } from "../../../assets";

export default function Loading() {
  const navigate = useNavigate();
  const location = useLocation();
  const { answerList, englishWordList } = location.state;

  const [loadingText, setLoadingText] = useState('');
  
  useEffect(() => {
    const timer = setTimeout(() => navigate('/quiz/result', 
      {state: {
        answerList: answerList,
        englishWordList: englishWordList,
      }})
      , 3000);

    const interval = setInterval(() => {
      setLoadingText(prevText => {
        const text = '채점 중입니다...';
        const nextCharIndex = (prevText.length + 1) % text.length;
        return text.substring(0, nextCharIndex);
      });
    }, 150);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    }
  }, [navigate])

  return (
    <div css={LoadingWrapper}>
      <Header />
      <div css={LoadingContainer}>
        <div css={LoadingTextWrapper}><BigLogoIcon /></div>
        <div>{loadingText}</div>
      </div>
    </div>
  )
}