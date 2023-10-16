import Link from "next/link";
import * as S from "./loginMiddle.style";
import Image from "next/image";
import LogoImage from "../../../../../public/images/sign-logo.png";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "./login.validation";
import { useMutation } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/stores";
import { axiosClient } from "../../../../commons/axios/axios-client";
import { useAuth } from "../../../commons/hooks/useLogin";

interface IFormData {
  email: string;
  password: string;
}

interface ILoginResData {
  accessToken: string;
  refreshToken: string;
}

interface ILoginRes extends AxiosResponse {
  data: ILoginResData;
}

export default function LoginMiddle(): JSX.Element {
  useAuth();
  const router = useRouter();
  const { register, handleSubmit, formState } = useForm<IFormData>({
    resolver: yupResolver(loginSchema),
    mode: "onChange",
  });

  const [_, setAccessToken] = useRecoilState(accessTokenState);

  const onClickSubmit = (formData: IFormData): void => {
    if (isLoading) return;
    mutate(formData);
  };

  const { mutate, isLoading } = useMutation({
    mutationFn: (formDate: IFormData) => {
      return axiosClient.post("/auth/login", formDate);
    },
    onError: () => {
      alert("아이디와 패스워드가 정확하지 않습니다. 다시 시도해주세요.");
    },
    onSuccess: (response: ILoginRes) => {
      const {
        data: { accessToken, refreshToken },
      } = response;

      setAccessToken(accessToken);

      // TODO: 배포 https(reverse proxy) 적용 후 cookie에 넣기
      window.localStorage.setItem("refreshToken", refreshToken);

      // TODO: redirect로 변경하기
      router.push("/");
    },
  });

  return (
    <S.Container>
      <S.Wrapper>
        <Link href="/">
          <a>
            <Image src={LogoImage} />
          </a>
        </Link>
        <S.LoginForm onSubmit={handleSubmit(onClickSubmit)}>
          <S.EmailBox>
            <S.Label htmlFor="email">이메일</S.Label>
            <S.Input
              {...register("email")}
              isError={formState.errors.email?.message}
              id="email"
              type="text"
              placeholder="이메일을 입력해주세요."
            />
            <S.ErrorMessage>{formState.errors.email?.message}</S.ErrorMessage>
          </S.EmailBox>
          <S.PasswordBox>
            <S.Label htmlFor="password">비밀번호</S.Label>
            <S.Input
              {...register("password")}
              isError={formState.errors.password?.message}
              id="password"
              type="password"
              placeholder="비밀번호를 입력해주세요."
            />
            <S.ErrorMessage>
              {formState.errors.password?.message}
            </S.ErrorMessage>
          </S.PasswordBox>
          <S.SubmitButton disabled={isLoading}>로그인</S.SubmitButton>
          <Link href="/sign-up">
            <S.Signup>회원가입</S.Signup>
          </Link>
        </S.LoginForm>
      </S.Wrapper>
    </S.Container>
  );
}
