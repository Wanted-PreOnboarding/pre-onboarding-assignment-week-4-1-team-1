# 💰 [투자 관리 서비스](https://www.fint.co.kr/)의 관리자 기능 구현 

## 📚 목차

- [1. 데모 영상](#1-데모-영상)
  - [1-1. Login / LogOut](#1-1-login--logout)
  - [1-2. 계좌 목록](#1-2-계좌-목록)
  - [1-3. 사용자 목록](#1-3-사용자-목록)
  - [1-4. 계좌 상세정보, 사용자 상세정보](#1-4-계좌-상세정보-사용자-상세정보)
- [2. 실행 방법](#2-실행-방법)

- [3. 과제 소개](#3-과제-소개)

- [4. 팀원 소개](#4-팀원-소개)

- [5. 구현 기능](#5-구현-기능)
  - [5-1. 계좌 목록, 계좌 구현 기능](#5-1-계좌-목록-계좌-구현-기능)
  - [5-2. 사용자 목록, 사용자 구현 기능](#5-2-사용자-목록-사용자-구현-기능)
  - [5-3. 사용자 상세, 계좌 상세](#5-3-사용자-상세-계좌-상세)
- [6. 개발 스택](#6-개발-스택)

- [7. 폴더 구조](#7-폴더-구조)


## 1. 데모 영상

- ### 1-1) Login / LogOut

  <video controls width=60% src="https://user-images.githubusercontent.com/75124028/193403642-aaeb8d5a-0b12-46a6-bcc3-3d14cb67b39d.mp4" ></video>

- ### 1-2) 계좌 목록

  <video controls width=60% src="https://user-images.githubusercontent.com/75124028/193403660-f79945ae-5b2e-4308-bec0-3262c2530e1e.mp4"></video>

- ### 1-3) 사용자 목록

  <video controls width=60% src="https://user-images.githubusercontent.com/75124028/193403670-b5b902f5-4fd0-4fba-ba79-d3d8b9d38ed0.mp4"></video>

- ### 1-4) 계좌 상세정보, 사용자 상세정보

  <video controls width=60% src="https://user-images.githubusercontent.com/75124028/193403691-1ea90997-acf7-43b3-84fa-98466f819e65.mp4"></video>
  
<br>

## 2. 실행 방법

```bash
# 설치 방법

> git clone https://github.com/wanted-fe-6/pre-onboarding-assignment-week-4-1-team-1.git
> cd pre-onboarding-assignment-week-4-1-team-1

# 실행 방법

초기 설정
> npm install

서버 실행
> npm run server

리액트 실행
> npm run client
```
<br>

## 3. 과제 소개

투자 관리 서비스의 관리자 기능 구현을 개발합니다.

계좌 목록, 사용자 목록, 사용자 상세정보, 계좌 상세정보가 구현 되어야합니다.

<br>

## 4. 팀원 소개

| 이름                                          | 개발 내용                       |
| --------------------------------------------- | ------------------------------- |
| [최홍규(팀장)](https://github.com/gomgun-lab) | 계좌 목록 페이지 개발           |
| [김정수](https://github.com/sunpl13)          | 계좌 상세 페이지 개발           |
| [강민규](https://github.com/kagrin97)         | 사용자 목록 페이지 개발         |
| [윤여건](https://github.com/kunnyCode)        | 사용자 상세 페이지 개발         |
| [류웅선](https://github.com/unsnruu)          | 레이아웃 개발 + API 모듈화      |
| [백승전](https://github.com/BaikSeungJeon)    | 로그인 페이지 개발 + API 모듈화 |

<br>

## 5. 구현 기능

- ## 5-1) 계좌 목록, 계좌 구현 기능

  - [x] **고객명(user_name)**: 고객 ID를 참조해 실제 이름이 보여집니다.
  
    -  **고객명을 누를 경우 사용자 상세 화면으로 이동**합니다.
  - [x] **계좌번호(number)** : 앞 뒤 각각 두글자를 제외하고 **나머지는 글자수에 맞게 `*` 글자로
    마스킹 처리**가 필요합니다.
  - [x] **계좌상태(status)** : 예시) 운용중, `accountStatus.json` 를 참조하여 실제 이름으로 보여져야 합니다.
  - [x] **계좌명(name)** : 계좌명입니다.
  - [x] **평가금액(assets)** : 예시) 123,123,123
  - [x] **입금금액(payments)** : 예시) 123,123,123
  - [x] **계좌활성화여부(is_active**) : 계좌 활성화 여부
  - [x] **계좌개설일(created_at)**
  - [x] 목록에서 브로커명과 **계좌 활성화 여부, 계좌 상태를 필터링** 할 수 있습니다.
  - [x] 리스트 페이지에서 **검색이 가능**합니다.
  - [x] **페이지네이션**이 가능합니다.
  <br>

- ## 5-2) 사용자 목록, 사용자 구현 기능

  - [x] **고객명(user_name)**: 가운데 글자 마스킹 필요, **두글자일 경우 성을 제외한 이름 마스킹 처리, 4글자 이상일 경우 마스킹 처리 후    앞뒤 한글자만 표기**됩니다.
  
    -  **고객명을 누를 경우 사용자 상세화면으로 이동**합니다.
  - [x] **보유 중인 계좌 수: (해당 API 호출 후 데이터를 정제하여 표기)**
  - [x] **이메일 주소**
  - [x] **주민등록상 성별코드 (gender_origin)**
  - [x] **생년월일 (yyyy-mm-dd) (birth_date)**
  - [x] **휴대폰 번호 (가운데 4자리 `\***` 로 마스킹 필요) (phone_number)\*\*
  - [x] **최근로그인 (last_login)**
  - [x] **혜택 수신 동의 여부 (해당 API 호출 후 데이터를 정제하여 표기) (allow_marketing_push)**
  - [x] **활성화 여부 (해당 API 호출 후 데이터를 정제하여 표기) (is_active)**
  - [x] **가입일 (created_at)**
  - [x] 목록에서 **활성화 여부, 임직원 계좌 여부를 필터링** 할 수 있어야 합니다.
  - [x] 리스트 페이지에서는 **검색이 가능**해야 합니다.
    - `json-server` 의 Full-text Search API 를 사용하여 구현합니다.
    - 예시 : GET [http://localhost:3000/users?q=South](http://localhost:3000/users?q=South)
  - [x] **페이지네이션**이 가능합니다.
    - `json-server` 의 Paginate API 를 사용하여 구현합니다.
    - 예시 : GET [http://localhost:3000/users?\\\_page=1&\\\_limit=20](http://localhost:3000/users?%5C%5C_page=1&%5C%5C_limit=20)
  - [x] 임의로 **신규 사용자를 추가**할 수 있어야 합니다.
  - [x] 잘못 생성한 **사용자를 삭제**할 수 있어야 합니다.
  - [x] 개명을 한 사용자를 위해 **사용자명을 변경**할 수 있어야 합니다.
  <br>

- ## 5-3) 사용자 상세, 계좌 상세
  - [x] 각 사용자, 계좌의 상세 페이지는 획득 가능한 대부분의 정보를 표시해주시면 됩니다.

<br>

## 6. 개발 스택

<div>
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white"/>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white"/>
<img src="https://img.shields.io/badge/MUI-007FFF?style=for-the-badge&logo=mui&logoColor=white"/>
</div>

<br>
  
## 7. 폴더 구조
<pre>
📦src
 ┣ 📜App.jsx
 ┣ 📜index.js
 ┣ 📂api
 ┃ ┣ 📜account.js
 ┃ ┣ 📜customers.js
 ┃ ┗ 📜index.js
 ┣ 📂components
 ┃ ┣ 📂Layout
 ┃ ┃ ┣ 📜Footer.jsx
 ┃ ┃ ┣ 📜Header.jsx
 ┃ ┃ ┣ 📜SideNavigation.jsx
 ┃ ┃ ┗ 📜index.jsx
 ┃ ┗ 📜LabelAndContentBox.jsx
 ┣ 📂constant
 ┃ ┣ 📜accounts.js
 ┃ ┗ 📜broker.js
 ┣ 📂pages
 ┃ ┣ 📂AccountDetail
 ┃ ┃ ┗ 📜AccountDetail.jsx
 ┃ ┣ 📂Accounts
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┣ 📜AccountListTable.jsx
 ┃ ┃ ┃ ┗ 📜Selector.jsx
 ┃ ┃ ┗ 📜AccountList.jsx
 ┃ ┣ 📂UserDetail
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┣ 📜UserAccounts.jsx
 ┃ ┃ ┃ ┗ 📜UserInfo.jsx
 ┃ ┃ ┗ 📜UserDetails.jsx
 ┃ ┣ 📂Users
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┣ 📜AddUser.jsx
 ┃ ┃ ┃ ┣ 📜EditUserName.jsx
 ┃ ┃ ┃ ┣ 📜FilterBotton.jsx
 ┃ ┃ ┃ ┣ 📜SearchBar.jsx
 ┃ ┃ ┃ ┣ 📜TableBodyList.jsx
 ┃ ┃ ┃ ┗ 📜TableHeadList.jsx
 ┃ ┃ ┣ 📜UsersFilter.jsx
 ┃ ┃ ┣ 📜UsersList.jsx
 ┃ ┃ ┗ 📜UsersSearch.jsx
 ┃ ┗ 📜Auth.jsx
 ┣ 📂services
 ┃ ┣ 📜account.js
 ┃ ┣ 📜auth.js
 ┃ ┣ 📜customers.js
 ┃ ┗ 📜legacy.js
 ┣ 📂utils
 ┃ ┣ 📜bankFormatter.js
 ┃ ┣ 📜divisionList.js
 ┃ ┣ 📜formating.js
 ┃ ┣ 📜getIsProfit.js
 ┃ ┣ 📜getTodayTime.js
 ┃ ┣ 📜itemLimit.js
 ┃ ┣ 📜masking.js
 ┃ ┣ 📜moneyFormatter.js
 ┃ ┣ 📜statusFormatter.js
 ┃ ┗ 📜token.js
</pre>
