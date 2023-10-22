import { useForm, Controller } from "react-hook-form";
import * as S from "./registrationMiddle.style";
import { keydownCheck } from "../../../commons/libs/submitKeydown";
import DateInput from "../../inputs/dateInput";
import { yupResolver } from "@hookform/resolvers/yup";
import { registrationSchema } from "./registration.validation";

export default function RegistrationMiddle(): JSX.Element {
  const { register, handleSubmit, control } = useForm({
    resolver: yupResolver(registrationSchema),
    mode: "onChange",
  });

  const onSubmit = (formdata: any) => {
    console.log(formdata);
  };

  return (
    <S.Container>
      <S.Wrapper>
        <S.Subject>콘서트 등록하기</S.Subject>
        <S.RegistrationForm
          onSubmit={handleSubmit(onSubmit)}
          onKeyDown={keydownCheck}
        >
          <S.CategoryTitleWrapper>
            <S.CategoryBox>
              <S.Label>카테고리</S.Label>
              <S.CategorySelect {...register("category")}>
                <S.Category>뮤지컬</S.Category>
                <S.Category>연극</S.Category>
                <S.Category>콘서트</S.Category>
              </S.CategorySelect>
            </S.CategoryBox>
            <S.TitleBox>
              <S.Label htmlFor="title">공연 제목</S.Label>
              <S.TitleInput
                {...register("title")}
                name="title"
                id="title"
                type="text"
                placeholder="제목을 입력하세요."
              />
            </S.TitleBox>
          </S.CategoryTitleWrapper>
          <S.DescriptionBox>
            <S.Label htmlFor="description">공연 설명</S.Label>
            <S.DescriptionInput
              {...register("description")}
              name="description"
              id="description"
              type="text"
              placeholder="설명을 입력하세요."
            />
          </S.DescriptionBox>
          <S.AddressBox>
            <S.Label htmlFor="address">공연 주소</S.Label>
            <S.AddressInput
              {...register("address")}
              name="address"
              id="address"
              type="text"
              placeholder="주소를 입력하세요."
            />
          </S.AddressBox>
          <S.DateWrapper>
            <S.DateBox>
              <S.Label htmlFor="start-date">예매 기간</S.Label>
              <Controller
                control={control}
                name="dates"
                render={({ field: { onChange, onBlur } }) => (
                  <DateInput onChange={onChange} onBlur={onBlur} />
                )}
              />
            </S.DateBox>
          </S.DateWrapper>
          <button>등록하기</button>
        </S.RegistrationForm>
      </S.Wrapper>
    </S.Container>
  );
}
