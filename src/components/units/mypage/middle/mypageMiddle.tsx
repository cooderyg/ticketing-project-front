import Image from "next/image";
import * as S from "./mypageMiddle.style";
import ProfileImage from "../../../../../public/images/profile.jpg";
import { ChangeEvent, useRef } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState, userInfoState } from "../../../commons/stores";
import { useMutation } from "@tanstack/react-query";
import axiosClient from "../../../../commons/axios/axios-client";
import { validationImageFile } from "../../../commons/libs/validationImageFile";
import { AxiosResponse } from "axios";

interface IUploadImageResData {
  url: string;
}

interface IUploadImageRes extends AxiosResponse {
  data: IUploadImageResData;
}

export default function MypageMiddle(): JSX.Element {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const [accessToken] = useRecoilState(accessTokenState);
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
    if (!isValid) {
      alert("png, jpeg(jpg)파일만 가능합니다. 파일용량은 최대 5MB입니다.");
      return;
    }
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
              <S.EditBtn>닉네임 수정</S.EditBtn>
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
