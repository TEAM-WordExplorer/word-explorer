interface ButtonProps {
  message: string;
  onClick: () => void;
}

export default function RoundButton(props: ButtonProps) {
  const { message, onClick } = props;
  return <button onClick={onClick}>{message}</button>;
}