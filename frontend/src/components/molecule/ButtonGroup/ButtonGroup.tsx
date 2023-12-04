import { theme } from "../../../style/theme";
import SquareButton from "../../atom/Button/SquareButton";

interface ButtonGroupProps {
  message1: string,
  message2: string,
  onClick1: () => void;
  onClick2: () => void;
}

export default function ButtonGroup(props: ButtonGroupProps) {
  const { message1, message2, onClick1, onClick2 } = props;
  return (
    <div>
      <SquareButton message={message1} onClick={onClick1} color={theme.gray.main}/>
      <SquareButton message={message2} onClick={onClick2} color={theme.purple.sub1}/>
    </div>
  );
}