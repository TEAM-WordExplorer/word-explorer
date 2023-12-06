import { SmallLogoIcon } from "../../../assets";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <div style={{ display: "flex", justifyContent: "space-between", padding: "20px"}}>
      <SmallLogoIcon onClick={() => navigate('/')}/>
      <Link to='/' style={{ textDecoration: "none"}}>로그인</Link>
    </div>
  )
}