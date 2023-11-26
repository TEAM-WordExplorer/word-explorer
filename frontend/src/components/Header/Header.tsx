import { SmallLogoIcon } from "../../assets";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", padding: "20px"}}>
      <SmallLogoIcon/>
      <Link to='/' style={{ textDecoration: "none"}}>로그인</Link>
    </div>
  )
}