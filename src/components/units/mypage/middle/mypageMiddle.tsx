import Image from "next/image";
import * as S from "./mypageMiddle.style";
import ProfileImage from "../../../../../public/images/profile.jpg";
import { ChangeEvent, MouseEvent, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState, userInfoState } from "../../../commons/stores";
import { useMutation } from "@tanstack/react-query";
import axiosClient from "../../../../commons/axios/axios-client";
import { validationImageFile } from "../../../commons/libs/validationImageFile";
import { AxiosResponse } from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { nicknameChangeSchema } from "./mypage.validation";

interface IUploadImageResData {
  url: string;
}

interface IUploadImageRes extends AxiosResponse {
  data: IUploadImageResData;
}

interface INicknameFormData {
  nickname: string;
}

interface INicknameResData {
  id: string;
  nickname: string;
}

interface INicknameRes extends AxiosResponse {
  data: INicknameResData;
}

export default function MypageMiddle(): JSX.Element {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const [accessToken] = useRecoilState(accessTokenState);

  // 프로필 이미지 기본적용
  const { mutate: profileImageMutate, isLoading: profileImageLoading } =
    useMutation({
      mutationFn: () => {
        return axiosClient.put(
          "/users/profileImage",
          { profileImageUrl: "" },
          { headers: { Authorization: `Bearer ${accessToken}` } }
        );
      },
      onSuccess: () => {
        setUserInfo((prev) => ({
          ...prev,
          profileImageUrl: "",
        }));
      },
      onError: () => {
        alert("이미지 변경 중 오류가 발생했습니다.");
      },
    });

  // 프로필 이미지 업로드
  const { mutate: uploadImageMutate, isLoading: uploadImageLoading } =
    useMutation({
      mutationFn: (file: FormData) => {
        return axiosClient.post("/uploads/profile-image", file, {
          headers: { Authorization: `Bearer ${accessToken}` },
        });
      },
      onSuccess: (response: IUploadImageRes) => {
        const { url } = response.data;
        setUserInfo((prev) => ({
          ...prev,
          profileImageUrl: url,
        }));
      },
      onError: () => {
        alert("이미지 변경 중 오류가 발생했습니다.");
      },
    });

  const onChangeImage = (event: ChangeEvent<HTMLInputElement>): void => {
    if (uploadImageLoading) return;
    const file = event.target.files?.[0];
    const isValid = validationImageFile(file);
    if (!isValid) return;
    let formData = new FormData();

    if (!file) return;
    formData.append("file", file);
    uploadImageMutate(formData);
  };

  const onClickDefaultImage = (): void => {
    if (profileImageLoading) return;
    profileImageMutate();
  };

  const editBtnRef = useRef<HTMLInputElement>(null);

  const onClickEditImage = (): void => {
    editBtnRef?.current?.click();
  };

  // 닉네임 변경

  const [isModalOpen, setIsModalOpen] = useState(false);
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(nicknameChangeSchema),
    mode: "onChange",
  });
  const { mutate: nicknameMutate, isLoading: nicknameLoading } = useMutation({
    mutationFn: (formdata: INicknameFormData) => {
      return axiosClient.put("/users/nickname", formdata, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
    },

    onSuccess: (response: INicknameRes) => {
      const { nickname } = response.data;
      setUserInfo((prev) => ({
        ...prev,
        nickname,
      }));
      handleCancel();
    },

    onError: () => {
      // TODO: refresh refetch 완성 후 로그인으로 이동
      alert("닉네임 변경도중 에러가 발생했습니다. 다시 시도해주세요.");
    },
  });

  const onClickModal = (event: MouseEvent<HTMLDivElement>) => {
    if (event.currentTarget === event.target) setIsModalOpen(false);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onSubmitNickname = (data: INicknameFormData): void => {
    if (nicknameLoading) return;
    nicknameMutate(data);
  };

  return (
    <S.Container>
      <S.Wrapper>
        <S.Title>내 프로필</S.Title>
        <S.ProfileBox>
          <S.ProfileImageBox>
            <S.ImageWrapper>
              {userInfo.profileImageUrl ? (
                <Image
                  objectFit="cover"
                  width={100}
                  height={100}
                  src={userInfo.profileImageUrl}
                  alt="프로필 이미지"
                />
              ) : (
                <Image
                  objectFit="fill"
                  src={ProfileImage}
                  alt="프로필 이미지"
                />
              )}
            </S.ImageWrapper>
          </S.ProfileImageBox>
          <S.NicknameBox>
            <S.Nickname>{userInfo.nickname}</S.Nickname>
            <S.EditWrapper>
              <S.EditBtn onClick={onClickEditImage}>이미지 수정</S.EditBtn>
              <S.EditBtn onClick={onClickDefaultImage}>기본 이미지</S.EditBtn>
              <S.ImageInput
                onChange={onChangeImage}
                type="file"
                ref={editBtnRef}
              />
              <S.EditBtn onClick={showModal}>닉네임 수정</S.EditBtn>
              <S.NicknameChangeModal
                onClick={onClickModal}
                isModalOpen={isModalOpen}
              >
                <S.NicknameChangeForm onSubmit={handleSubmit(onSubmitNickname)}>
                  <S.NicknameChangeLabel htmlFor="nickname">
                    닉네임 수정
                  </S.NicknameChangeLabel>
                  <S.NicknameChangeInput
                    isError={formState.errors.nickname?.message}
                    {...register("nickname")}
                    name="nickname"
                    id="nickname"
                    type="text"
                    placeholder="닉네임을 입력해주세요."
                  />
                  <S.ErrorMessage>
                    {formState.errors.nickname?.message
                      ? formState.errors.nickname?.message
                      : "\u00A0"}
                  </S.ErrorMessage>
                  <S.ModalBtnBox>
                    <S.SubmitBtn type="submit">변경</S.SubmitBtn>
                    <S.CancelBtn type="button" onClick={handleCancel}>
                      취소
                    </S.CancelBtn>
                  </S.ModalBtnBox>
                </S.NicknameChangeForm>
              </S.NicknameChangeModal>
            </S.EditWrapper>
          </S.NicknameBox>
        </S.ProfileBox>
        <S.Title>내 예매내역</S.Title>
        <S.ReservationBox>
          <S.Reservation>
            <S.ReservationTitle>뮤지컬 레베카</S.ReservationTitle>
            <S.ReservationDate>2023년 11월 11일 오후 3시</S.ReservationDate>
            <S.ReservationSeats>
              <S.ReservationSeat>VIP-1</S.ReservationSeat>
              <S.ReservationSeat>VIP-1</S.ReservationSeat>
              <S.ReservationSeat>VIP-1</S.ReservationSeat>
            </S.ReservationSeats>
          </S.Reservation>
          <S.Reservation>
            <S.ReservationTitle>뮤지컬 레베카</S.ReservationTitle>
            <S.ReservationDate>2023년 11월 11일 오후 3시</S.ReservationDate>
            <S.ReservationSeats>
              <S.ReservationSeat>VIP-1</S.ReservationSeat>
              <S.ReservationSeat>VIP-1</S.ReservationSeat>
              <S.ReservationSeat>VIP-1</S.ReservationSeat>
            </S.ReservationSeats>
          </S.Reservation>
          <S.Reservation>
            <S.ReservationTitle>뮤지컬 레베카</S.ReservationTitle>
            <S.ReservationDate>2023년 11월 11일 오후 3시</S.ReservationDate>
            <S.ReservationSeats>
              <S.ReservationSeat>VIP-1</S.ReservationSeat>
              <S.ReservationSeat>VIP-1</S.ReservationSeat>
              <S.ReservationSeat>VIP-1</S.ReservationSeat>
            </S.ReservationSeats>
          </S.Reservation>
        </S.ReservationBox>
      </S.Wrapper>
    </S.Container>
  );
}
