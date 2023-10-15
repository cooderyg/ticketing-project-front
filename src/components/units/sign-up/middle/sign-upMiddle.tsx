import Link from "next/link";
import * as S from "./sign-upMiddle.style";
import LogoImage from "../../../../../public/images/sign-logo.png";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ROLE, schema } from "./sign-up.validation";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useState } from "react";
import { keydownCheck } from "../../../commons/libs/submitKeydown";

interface ISignupFormData {
  role: ROLE;
  email: string;
  password: string;
  confirmPassword: string;
  nickname: string;
}

interface ISentEmail {
  email: string;
  number: number | null;
}

interface ISentEmailResData {
  number: number;
}

export default function SignupMiddle() {
  const router = useRouter();
  const [sentEmailAndNumber, setSentEmailAndNumber] = useState<ISentEmail>({
    email: "",
    number: null,
  });
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [emailNumber, setEmailNumber] = useState(0);
  const { register, handleSubmit, formState, getValues } =
    useForm<ISignupFormData>({
      resolver: yupResolver(schema),
      mode: "onBlur",
    });
  const onClickSubmit = (data: ISignupFormData) => {
    if (!isEmailValid) {
      alert("이메일을 인증해주세요.");
      return;
    }
    if (createUserLoading) return;
    console.log(data);
    createUser(data);
  };

  const onClickSendBtn = (): void => {
    if (sendMailLoading || formState.errors.email?.message) return;
    const { email } = getValues();
    sendMail(email);
  };

  const onClickCheckBtn = () => {
    if (!isEmailSent || !sentEmailAndNumber.number) return;
    if (sentEmailAndNumber.number === emailNumber) {
      setIsEmailValid(true);
    } else {
      alert("인증번호가 일치하지 않습니다!");
    }
  };

  const onChangeNumberInput = (event: ChangeEvent<HTMLInputElement>): void => {
    setEmailNumber(Number(event.target.value));
  };

  const { mutate: createUser, isLoading: createUserLoading } = useMutation({
    mutationFn: (formData: ISignupFormData) => {
      return axios.post("http://localhost:3001/users", formData);
    },
    onError: (error: Error) => {
      console.error(error);
      alert(error.message);
    },
    onSuccess: () => {
      router.push("/login");
    },
  });

  const { mutate: sendMail, isLoading: sendMailLoading } = useMutation({
    mutationFn: (email: string) => {
      return axios.post("http://localhost:3001/users/verify-email", { email });
    },
    onError: (error: Error) => {
      alert(error?.message);
    },
    onSuccess: (response) => {
      const { email } = getValues();
      const { number }: ISentEmailResData = response.data;
      setSentEmailAndNumber((prev) => ({
        ...prev,
        email,
        number,
      }));
      if (!isEmailSent) setIsEmailSent(true);
    },
  });

  return (
    <>
      <S.Container>
        <S.Wrapper>
          <Link href="/">
            <a>
              <Image src={LogoImage} />
            </a>
          </Link>
          <S.SignupForm
            onSubmit={handleSubmit(onClickSubmit)}
            onKeyDown={keydownCheck}
          >
            <S.RoleBox>
              <input
                {...register("role")}
                id="role-user"
                name="role"
                type="radio"
                value="USER"
                defaultChecked
              />
              <label htmlFor="role-user">유저</label>
              <input
                {...register("role")}
                id="role-host"
                name="role"
                type="radio"
                value="HOST"
              />
              <label htmlFor="role-host">호스트</label>
            </S.RoleBox>
            <S.EmailBox>
              <S.Label htmlFor="email">이메일</S.Label>
              <S.EmailWrapper>
                <S.Input
                  {...register("email")}
                  isSignupEmail={true}
                  isError={formState.errors.email?.message}
                  id="email"
                  type="text"
                  placeholder="이메일을 입력해주세요."
                  disabled={isEmailValid || sendMailLoading}
                />
                <S.EmailBtn
                  onClick={onClickSendBtn}
                  disabled={isEmailValid || sendMailLoading}
                  type="button"
                >
                  {sendMailLoading
                    ? "전송중"
                    : isEmailSent
                    ? "재요청"
                    : "인증메일"}
                </S.EmailBtn>
              </S.EmailWrapper>
              <S.ErrorMessage>{formState.errors.email?.message}</S.ErrorMessage>
            </S.EmailBox>
            {isEmailSent && (
              <S.EmailBox isValidBox={true}>
                <S.EmailWrapper>
                  <S.Input
                    onChange={onChangeNumberInput}
                    isSignupEmail={true}
                    id="validNumber"
                    type="number"
                    placeholder="인증번호 6자리 입력해주세요."
                    maxLength={6}
                    disabled={isEmailValid}
                  />
                  <S.EmailBtn
                    onClick={onClickCheckBtn}
                    disabled={isEmailValid}
                    type="button"
                  >
                    {isEmailValid ? "인증완료" : "인증"}
                  </S.EmailBtn>
                </S.EmailWrapper>
              </S.EmailBox>
            )}
            <S.PasswordBox>
              <S.Label htmlFor="password">비밀번호</S.Label>
              <S.Input
                {...register("password")}
                isError={formState.errors.password?.message}
                id="password"
                type="password"
                placeholder="최소 8자 이상 최대15자 이하"
              />
              <S.ErrorMessage>
                {formState.errors.password?.message}
              </S.ErrorMessage>
            </S.PasswordBox>
            <S.PasswordBox>
              <S.Label htmlFor="confirmPassword">비밀번호 확인</S.Label>
              <S.Input
                {...register("confirmPassword")}
                isError={formState.errors.confirmPassword?.message}
                id="confirmPassword"
                type="password"
                placeholder="비밀번호를 재입력해주세요."
              />
              <S.ErrorMessage>
                {formState.errors.confirmPassword?.message}
              </S.ErrorMessage>
            </S.PasswordBox>
            <S.NicknameBox>
              <S.Label htmlFor="nickname">닉네임</S.Label>
              <S.Input
                {...register("nickname")}
                isError={formState.errors.nickname?.message}
                id="nickname"
                type="text"
                placeholder="닉네임을 입력해주세요."
              />
              <S.ErrorMessage>
                {formState.errors.nickname?.message}
              </S.ErrorMessage>
            </S.NicknameBox>
            <S.SubmitButton>
              {createUserLoading ? "로딩중.." : "회원가입"}
            </S.SubmitButton>
          </S.SignupForm>
        </S.Wrapper>
      </S.Container>
    </>
  );
}
