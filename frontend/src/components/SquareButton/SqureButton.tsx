interface SquareButtonProps {
  message: string;
  onClick: () => void;
}

export default function SquareButton(props: SquareButtonProps) {
  const { message, onClick } = props;
  return <div onClick={onClick}>{message}</div>;
}