import Image from "next/image";
import * as S from "./indexCard.style";
import Poster from "../../../../public/images/main-poster.gif";
import Link from "next/link";

interface CardProps {
  title: string;
  time: string;
  description: string;
  cast: string;
}

export default function Card(props: CardProps): JSX.Element {
  return (
    <S.Container>
      <Link href="/details/aaa">
        <S.CardWrapper>
          <S.ImageBox>
            <Image src={Poster} layout="fill" />
          </S.ImageBox>
          <S.InfoBox>
            <S.Title>{props.title}</S.Title>
            <S.Time>{props.time}</S.Time>
            <S.Cast>출연 : {props.cast}</S.Cast>
            <S.Description>{props.description}</S.Description>
          </S.InfoBox>
        </S.CardWrapper>
      </Link>
    </S.Container>
  );
}
