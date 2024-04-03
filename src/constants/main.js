export const LOGIN = Object.freeze({
  TITLE: '포털시스템 로그인',
  USER_ID: '학번 및 교직원 번호',
  USER_PASSWORD: '비밀번호',
  USER_ID_PLACEHOLDER: '로그인ID',
  USER_PW_PLACEHOLDER: '비밀번호',
  SUBMIT: '로그인',
});

export const ADD_DEVICE = Object.freeze({
  TITLE: '기기 등록',
  DESCRIPTION: `어플을 설치 후 로그인을 통해 받은\nOTP코드를 입력해주세요.`,
  OTP_PLACEHOLDER: 'OTP 코드',
  SUBMIT: '확인',
});

export const AUTHENTICATION = Object.freeze({
  TITLE: '2차 인증 서비스',
  DESCRIPTION: `2차 인증 방식을 선택해주세요.`,
  OTP: 'OTP 인증',
  BIOMETRIC: '생체(지문) 인식',
});

export const OTP_AUTHENTICATION = Object.freeze({
  TITLE: 'OTP 인증',
  DESCRIPTION: '앱에서 OTP 코드를 입력해주세요.',
  SUBMIT: '완료',
});

export const BIOMETRIC_AUTHENTICATION = Object.freeze({
  TITLE: '생체 인증',
  DESCRIPTION: '앱에서 생체인증을 진행해주세요.',
  SUBMIT: '완료',
});
