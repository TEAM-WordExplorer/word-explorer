/** @jsxImportSource @emotion/react */

import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { MediumLogoIcon } from "../../assets";
import RoundButton from "../../components/atom/Button/RoundButton";
import UserInfoInputForm from "../../components/molecule/InputForm/UserInfoInputForm";
import Header from "../../components/organism/Header/Header";
import { registerContainer, registerInputFormContainer, registerWrapper } from "./styles";


export default function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const handleNameChange = (e:any) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  const handleRegister = async () => {
    const formData = {
      name: name,
      email: email,
      password: password,
    };

    try {
      const response = await axios.post('http://127.0.0.1:8000/user/register/', formData);

      if (response.data.success) {
        setSuccess(true);
        // 회원가입 성공 시 로그인 페이지로 이동
        navigate('/login');
      } else {
        console.error('Error during registration:', response.data.message);
      }
    } 
    catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      } else {
        console.log(error);
      }
    }
  };

  // 회원가입 성공 시 알림 창 표시
  useEffect(() => {
    if (success) {
      alert('회원가입이 완료되었습니다. 로그인 페이지로 이동합니다.');
    }
  }, [success]);

  return (
    <div css={registerWrapper}>
      <Header />
      <div css={registerContainer}>
        <MediumLogoIcon />
        <div css={registerInputFormContainer}>
          <UserInfoInputForm title="이름" value={name} onChange={handleNameChange} />
          <UserInfoInputForm title="이메일" value={email} onChange={handleEmailChange} />
          <UserInfoInputForm title="비밀번호" value={password} onChange={handlePasswordChange} />
        </div>
        <div>
          <RoundButton
            message="가입하기"
            onClick={handleRegister}
            width="300px"
            borderRadius="20px"
          />
        </div>
      </div>
    </div>
  );
}
