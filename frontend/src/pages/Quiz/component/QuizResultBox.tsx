/** @jsxImportSource @emotion/react */

import { RightIcon, WrongIcon } from "../../../assets";
import { IconStyle, QuizResultBoxStyle, QuizResultContentStyle, QuizResultContentTextStyle, QuizResultTitleStyle, QuizResultTitleTextStyle } from "./styles";

interface QuizResult {
  word: string;
  answer: string;
}
interface QuizResultListProps {
  quizResultList: QuizResult[];
}

const grading = (answer: string, word: string) => {
  if (answer === word) return <RightIcon css={IconStyle} />
  else return <WrongIcon css={IconStyle} />
}

export default function QuizResultBox(props: QuizResultListProps) {
  const { quizResultList } = props;
  return (
    <div css={QuizResultBoxStyle}>
      <div>
        <div css={QuizResultTitleStyle}>
          <div css={QuizResultTitleTextStyle}>내 답</div>
          <div css={QuizResultTitleTextStyle}>정답</div>
        </div>
        {quizResultList.map(({ answer, word }, index) => (
          <div key={index} css={QuizResultContentStyle}>
            <div css={QuizResultContentTextStyle}>{index+1}</div>
            {grading(answer, word)}
            <div css={QuizResultContentTextStyle}>{answer}</div>
            <div css={QuizResultContentTextStyle}>{word}</div>
          </div>
        ))}
      </div>
    </div>
  )
}