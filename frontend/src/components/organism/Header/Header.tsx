/** @jsxImportSource @emotion/react */

import { BackIcon, SmallLogoIcon } from "../../../assets";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HeaderWrapper } from "./stlyes";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div css={HeaderWrapper}>
      {location.pathname === '/' ? (
        <SmallLogoIcon onClick={() => navigate('/')} />
      ):(
        <BackIcon onClick={() => navigate(-1)}/>
      )}
      <Link to='/' style={{ textDecoration: "none"}}>로그인</Link>
    </div>
  )
}