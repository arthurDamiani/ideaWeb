import * as B from './IdeaBox.styles'

interface IdeaBox {
  title: string;
  text: string;
}

export default function IdeaBox({title, text}: IdeaBox) {
  return (
    <B.BoxContainer>
      <B.TitleContainer>{title}</B.TitleContainer>
      <B.TextContainer>
        <p>{text}</p>
      </B.TextContainer>
    </B.BoxContainer>
  )
}