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
import { ChangeEvent, useRef, useState } from "react";
import { validationImageFile } from "../../../commons/libs/validationImageFile";
import Image from "next/image";
import { AxiosResponse } from "axios";

interface IDates {
  $d: Date;
}

interface ISeat {
  grade: string;
  price: number;
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

interface IRegistrationResData {}

interface IRegistrationRes extends AxiosResponse {}

export default function RegistrationMiddle(): JSX.Element {
  const [accessToken] = useRecoilState<string>(accessTokenState);

  const [posterImageUrl, setPosterImageUrl] = useState<string>("");

  const imageInputRef = useRef<HTMLInputElement>(null);

  const onClickEditImage = (): void => {
    imageInputRef?.current?.click();
  };

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
    price: 10000,
    quantity: 1,
    id: "seat-quantity-1",
  };

  // 이미지 등록 mutation
  const { mutate: uploadImageMutate, isLoading: posterImageLoading } =
    useMutation({
      mutationFn: (file: FormData) => {
        return axiosClient.post("/uploads/poster-image", file, {
          headers: { Authorization: `Bearer ${accessToken}` },
        });
      },
      onSuccess: (response) => {
        const { url } = response.data;
        setPosterImageUrl(url);
      },
      onError: () => {
        alert("이미지 업로드 중 오류가 발생했습니다.");
      },
    });

  const onChangeImage = (event: ChangeEvent<HTMLInputElement>): void => {
    if (posterImageLoading) return;
    const file = event.target.files?.[0];
    const isValid = validationImageFile(file);
    if (!isValid) return;

    let formData = new FormData();

    if (!file) return;
    formData.append("file", file);
    uploadImageMutate(formData);
  };
  // 콘서트 등록 mutation
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
                  <S.Label htmlFor={`seat-grade-${index}`}>좌석등급</S.Label>
                  <S.Input
                    {...register(`seats.${index}.grade`)}
                    isError={formState.errors.seats?.[index]?.grade?.message}
                    id={`seat-grade-${index}`}
                    type="text"
                    placeholder="ex) a, b, vip"
                  />
                  <S.ErrorMessage>
                    {formState.errors.seats?.[index]?.grade?.message ??
                      "\u00A0"}
                  </S.ErrorMessage>
                </S.SeatInputBox>
                <S.SeatInputBox>
                  <S.Label htmlFor={`seat-price-${index}`}>좌석가격</S.Label>
                  <S.Input
                    {...register(`seats.${index}.price`)}
                    defaultValue={10000}
                    isError={formState.errors.seats?.[index]?.price?.message}
                    id={`seat-price-${index}`}
                    type="number"
                    placeholder="ex) 10000"
                  />
                  <S.ErrorMessage>
                    {formState.errors.seats?.[index]?.price?.message ??
                      "\u00A0"}
                  </S.ErrorMessage>
                </S.SeatInputBox>
                <S.SeatInputBox>
                  <S.Label htmlFor={`seat-quantity-${index}`}>좌석수량</S.Label>
                  <S.Input
                    {...register(`seats.${index}.quantity`)}
                    defaultValue={1}
                    isError={formState.errors.seats?.[index]?.quantity?.message}
                    id={`seat-quantity-${index}`}
                    type="number"
                    placeholder="ex) 100"
                  />
                  <S.ErrorMessage>
                    {formState.errors.seats?.[index]?.quantity?.message ??
                      "\u00A0"}
                  </S.ErrorMessage>
                </S.SeatInputBox>
                {index ? (
                  <S.SeatRemoveBtn onClick={() => remove(index)} type="button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </S.SeatRemoveBtn>
                ) : (
                  ""
                )}
              </S.SeatBox>
            ))}
          </S.SeatWrapper>
          <S.SeatAddBtn type="button">
            <svg
              onClick={() => append({ grade: "", price: 10000, quantity: 1 })}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </S.SeatAddBtn>
          <S.PosterImageBox>
            <S.Label htmlFor="image-input">포스터 이미지</S.Label>
            {posterImageUrl ? (
              <Image
                onClick={onClickEditImage}
                objectFit="contain"
                width={200}
                height={200}
                src={posterImageUrl}
                alt="포스터 이미지"
              />
            ) : (
              <svg
                onClick={onClickEditImage}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
            )}

            <S.Input
              onChange={onChangeImage}
              id="image-input"
              type="file"
              ref={imageInputRef}
            />
          </S.PosterImageBox>
          <S.RegistrationBtn>등록하기</S.RegistrationBtn>
        </S.RegistrationForm>
      </S.Wrapper>
    </S.Container>
  );
}
