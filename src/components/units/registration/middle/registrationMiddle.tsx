import { useForm, Controller } from "react-hook-form";
import * as S from "./registrationMiddle.style";
import { keydownCheck } from "../../../commons/libs/submitKeydown";
import DateInput from "../../inputs/dateInput";
import { yupResolver } from "@hookform/resolvers/yup";
import { registrationSchema } from "./registration.validation";
import { useMutation } from "@tanstack/react-query";
import axiosClient from "../../../../commons/axios/axios-client";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/stores";

interface IDates {
  $d: Date;
}

interface IFormData {
  // TODO: 확정 후 enum타입으로 변경
  category: string;
  title: string;
  description: string;
  address: string;
  dates: IDates[];
}

export default function RegistrationMiddle(): JSX.Element {
  const [accessToken] = useRecoilState(accessTokenState);

  const { register, handleSubmit, control, formState } = useForm({
    resolver: yupResolver(registrationSchema),
    mode: "onChange",
  });

  const { mutate: registrationMutate, isLoading } = useMutation({
    mutationFn: (formData: IFormData) => {
      const { dates, ...rest } = formData;
      const startDate = dates[0]?.$d;
      const endDate = dates[1]?.$d;

      const registrationBody = {
        startDate,
        endDate,
        ...rest,
      };

      return axiosClient.post("/concerts", registrationBody, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
    },
  });

  const onSubmit = (formdata: IFormData) => {
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
              <S.ErrorMessage>
                {formState.errors.category?.message}
              </S.ErrorMessage>
            </S.CategoryBox>
            <S.TitleBox>
              <S.Label htmlFor="title">공연 제목</S.Label>
              <S.Input
                isError={formState.errors.title?.message}
                {...register("title")}
                name="title"
                id="title"
                type="text"
                placeholder="제목을 입력하세요."
              />
              <S.ErrorMessage>{formState.errors.title?.message}</S.ErrorMessage>
            </S.TitleBox>
          </S.CategoryTitleWrapper>
          <S.DescriptionBox>
            <S.Label htmlFor="description">공연 설명</S.Label>
            <S.Input
              {...register("description")}
              isError={formState.errors.description?.message}
              name="description"
              id="description"
              type="text"
              placeholder="설명을 입력하세요."
            />
            <S.ErrorMessage>
              {formState.errors.description?.message}
            </S.ErrorMessage>
          </S.DescriptionBox>
          <S.AddressBox>
            <S.Label htmlFor="address">공연 주소</S.Label>
            <S.Input
              {...register("address")}
              isError={formState.errors.address?.message}
              name="address"
              id="address"
              type="text"
              placeholder="주소를 입력하세요."
            />
            <S.ErrorMessage>{formState.errors.address?.message}</S.ErrorMessage>
          </S.AddressBox>
          <S.DateWrapper>
            <S.DateBox>
              <S.Label htmlFor="dates">예매 기간</S.Label>
              <Controller
                control={control}
                name="dates"
                render={({ field: { onChange, onBlur } }) => (
                  <DateInput
                    isError={formState.errors.dates?.message}
                    onChange={onChange}
                    onBlur={onBlur}
                  />
                )}
              />
              <S.ErrorMessage>{formState.errors.dates?.message}</S.ErrorMessage>
            </S.DateBox>
          </S.DateWrapper>
          <button>등록하기</button>
        </S.RegistrationForm>
      </S.Wrapper>
    </S.Container>
  );
}
