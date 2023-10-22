import * as yup from "yup";

export const registrationSchema = yup.object({
  category: yup.string(),
  title: yup.string().required("제목을 입력해주세요."),
  description: yup.string().required("설명을 입력해주세요."),
  address: yup.string().required("주소를 입력해주세요."),
  dates: yup.array().of(
    yup.object().shape({
      $d: yup.date().required("예매기간을 설정해주세요."),
    })
  ),
});
