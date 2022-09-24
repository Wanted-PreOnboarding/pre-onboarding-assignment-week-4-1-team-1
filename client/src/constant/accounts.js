export const ACCOUNT_LIST_TABLE_HEADERS = [
  "증권사",
  "계좌번호",
  "고객명",
  "계좌상태",
  "계좌명",
  "평가금액",
  "입금금액",
  "계좌활성화여부",
  "계좌개설일"
]

export const ACCOUNT_STATE = { 9999 : "관리자확인필요" , 1 : "입금대기" , 2 : "운용중" , 3 : "투자중지" , 4 : "해지" }

export const IS_ACTIVE_ACCOUNT = { true : "계좌 활성화", false : "계좌 비활성화"}