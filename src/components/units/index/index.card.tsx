import Image from "next/image";
import * as S from "./indexCard.style";
import Link from "next/link";
import { IConcert } from "../../../../pages";

interface CardProps {
  concert: IConcert;
}

export default function Card(props: CardProps): JSX.Element {
  return (
    <S.Container>
      <Link href={`/details/${props.concert.id}`} prefetch={false}>
        <S.CardWrapper>
          <S.ImageBox>
            <Image
              src={props.concert.imageUrl}
              layout="fill"
              alt={props.concert.name}
            />
          </S.ImageBox>
          <S.InfoBox>
            <S.Name>{props.concert.name}</S.Name>
            <S.Date>{props?.concert?.concertDate}</S.Date>
            <S.Cast>{props.concert.category.name}</S.Cast>
            <S.Description>{props.concert.description}</S.Description>
          </S.InfoBox>
        </S.CardWrapper>
      </Link>
    </S.Container>
  );
}
