/** @jsxImportSource @emotion/react */

import { BackIcon, SmallLogoIcon } from "../../../assets";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HeaderWrapper } from "./stlyes";
import { useRecoilState} from "recoil";
import { IsLoggedInState } from "../../../atom/LoginInfo";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(IsLoggedInState);

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/');
  }

  return (
    <div css={HeaderWrapper}>
      {location.pathname === '/' ? (
        <>
          <SmallLogoIcon onClick={() => navigate('/')} />
          {isLoggedIn ? (
            <div onClick={handleLogout}>로그아웃</div>
          ):(
            <Link to = '/login' style = {{ textDecoration: "none" }}>로그인</Link>
          )}
          
        </>
      ):(
        <BackIcon onClick={() => navigate(-1)}/>
      )}
      
    </div>
  )
}