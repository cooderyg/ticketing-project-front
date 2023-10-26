import * as yup from "yup";

export const registrationSchema = yup.object({
  categoryId: yup.string().required("카테고리 선택은 필수입니다."),
  name: yup.string().required("제목을 입력해주세요."),
  description: yup.string().required("설명을 입력해주세요."),
  address: yup.string().required("주소를 입력해주세요."),
  dates: yup
    .array()
    .of(
      yup
        .object()
        .shape({
          $d: yup.date().required("예매기간을 설정해주세요."),
        })
        .required("예매기간 입력은 필수입니다.")
    )
    .required("예매기간 입력은 필수입니다."),
  seatInfo: yup
    .array()
    .of(
      yup
        .object()
        .shape({
          grade: yup.string().required("등급을 입력해주세요."),
          price: yup
            .number()
            .min(1000, "등급별 최소 좌석수는 1개입니다.")
            .required("가격을 입력해주세요."),
          seatNumMax: yup
            .number()
            .max(100, "등급별 최대 좌석수는 100개입니다.")
            .min(1, "등급별 최소 좌석수는 1개입니다.")
            .required("좌석 수를 입력해주세요."),
        })
        .required("예매기간 입력은 필수입니다.")
    )
    .min(1)
    .required(),
});
