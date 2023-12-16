/** @jsxImportSource @emotion/react */

import { BasicTextStyle, WordResultBoxStyle, WordResultContentStyle, WordResultContentTextStyle, WordResultTitleStyle, WordResultTitleTextStyle } from "./styles";

interface WordResult {
  word: string;
  similarity: number;
}
interface WordResultListProps {
  wordResultList: WordResult[];
}


export default function WordResultBox(props: WordResultListProps) {
  const { wordResultList } = props;
  const reverseList = [...wordResultList].reverse();
  return (
    <div css={WordResultBoxStyle}>
      {wordResultList.length > 0 ? (
          <div>
            <div css={WordResultTitleStyle}>
              <div css={WordResultTitleTextStyle}>추측 단어</div>
              <div css={WordResultTitleTextStyle}>유사도</div>
            </div>
          {reverseList.map(({word, similarity}, index) => (
            <div key={index} css={WordResultContentStyle}>
              <div css={WordResultContentTextStyle}>{word}</div>
              <div css={WordResultContentTextStyle}>{similarity}</div>
            </div>
          ))}
        </div>
      ) : (
        <div css={BasicTextStyle}>결과는 여기에!</div>
      )}
    </div>
  )
}