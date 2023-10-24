import { useForm, Controller, useFieldArray } from "react-hook-form";
import * as S from "./registrationMiddle.style";
import { keydownCheck } from "../../../commons/libs/submitKeydown";
import DateInput from "../../inputs/dateInput";
import { yupResolver } from "@hookform/resolvers/yup";
import { registrationSchema } from "./registration.validation";
import { useMutation } from "@tanstack/react-query";
import axiosClient from "../../../../commons/axios/axios-client";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/stores";
import { useState } from "react";

interface IDates {
  $d: Date;
}

interface ISeat {
  grade: string;
  quantity: number;
}

interface IFormData {
  // TODO: 확정 후 enum타입으로 변경
  category: string;
  title: string;
  description: string;
  address: string;
  dates: IDates[];
  seats: ISeat[];
}

export default function RegistrationMiddle(): JSX.Element {
  const [accessToken] = useRecoilState(accessTokenState);

  const [posterImageUrl, setPosterImageUrl] = useState("");

  const { register, handleSubmit, control, formState } = useForm({
    resolver: yupResolver(registrationSchema),
    mode: "onChange",
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "seats",
  });

  fields[0] = {
    grade: "",
    quantity: 0,
    id: "seat-quantity-1",
  };

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
                {formState.errors.category?.message ?? "\u00A0"}
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
              <S.ErrorMessage>
                {formState.errors.title?.message ?? "\u00A0"}
              </S.ErrorMessage>
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
              {formState.errors.description?.message ?? "\u00A0"}
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
            <S.ErrorMessage>
              {formState.errors.address?.message ?? "\u00A0"}
            </S.ErrorMessage>
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
              <S.ErrorMessage>
                {formState.errors.dates?.message ?? "\u00A0"}
              </S.ErrorMessage>
            </S.DateBox>
          </S.DateWrapper>
          <S.SeatWrapper>
            {fields.map((item, index) => (
              <S.SeatBox key={item.id}>
                <S.SeatInputBox>
                  <S.Label paddingTop={6} htmlFor={`seat-grade-${index}`}>
                    좌석등급
                  </S.Label>
                  <S.Input
                    {...register(`seats.${index}.grade`)}
                    isError={formState.errors.seats?.[index]?.grade?.message}
                    id={`seat-grade-${index}`}
                    type="text"
                    placeholder="좌석등급을 입력해주세요."
                  />
                  <S.ErrorMessage>
                    {formState.errors.seats?.[index]?.grade?.message ??
                      "\u00A0"}
                  </S.ErrorMessage>
                </S.SeatInputBox>
                <S.SeatInputBox>
                  <S.Label paddingTop={6} htmlFor={`seat-quantity-${index}`}>
                    좌석수량
                  </S.Label>
                  <S.Input
                    {...register(`seats.${index}.quantity`)}
                    isError={formState.errors.seats?.[index]?.quantity?.message}
                    id={`seat-quantity-${index}`}
                    type="number"
                  />
                  <S.ErrorMessage>
                    {formState.errors.seats?.[index]?.quantity?.message ??
                      "\u00A0"}
                  </S.ErrorMessage>
                </S.SeatInputBox>
                <S.SeatRemoveBtn onClick={() => remove(index)} type="button">
                  삭제
                </S.SeatRemoveBtn>
              </S.SeatBox>
            ))}
          </S.SeatWrapper>
          <S.SeatAddBtn
            onClick={() => append({ grade: "", quantity: 0 })}
            type="button"
          >
            좌석추가
          </S.SeatAddBtn>
          <S.PosterImageBox>
            <S.Input type="file" />
          </S.PosterImageBox>
          <button>등록하기</button>
        </S.RegistrationForm>
      </S.Wrapper>
    </S.Container>
  );
}
