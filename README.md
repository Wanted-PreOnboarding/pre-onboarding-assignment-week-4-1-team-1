## <img src='https://user-images.githubusercontent.com/85447054/192123033-0945830c-0aab-45f9-af4f-5f28638612d5.png' width='100'/>

### [투자 관리 서비스](https://www.fint.co.kr/)의 관리자 기능 구현

## 목차

[1. 데모 영상](#1-데모-영상)

[2. 실행 방법](#2-실행-방법)

[3. 과제 소개](#3-과제-소개)

[4. 팀원 소개](#4-팀원-소개)

[5. 구현 기능](#5-구현-기능)

[6. 개발 스택](#6-개발-스택)

[7. 폴더 구조](#7-폴더-구조)

## 1. 데모 영상

![Sep-25-2022 11-45-08](https://user-images.githubusercontent.com/85447054/192125982-86c37dec-7184-4ab6-9c77-8951e4420665.gif)

## 2. 실행 방법

```bash
# 설치 방법

> git clone https://github.com/wanted-fe-6/pre-onboarding-assignment-week-4-1-team-1.git
> cd pre-onboarding-assignment-week-4-1-team-1

# 실행 방법

# pre-onboarding-assignment-week-4-1-team-1
> cd server
# pre-onboarding-assignment-week-4-1-team-1/server
> npm install
> npm start

# pre-onboarding-assignment-week-4-1-team-1
> cd client
# pre-onboarding-assignment-week-4-1-team-1/client
> npm install
> npm start
```

## 3. 과제 소개

[투자 관리 서비스의 관리자 기능 구현](https://pollen-port-115.notion.site/6eda934f6d804e20bab0de8a0363152b)을 개발합니다.

[구현 기능](#5-구현-기능)은 로그인 기능과 계좌 목록과 상세 내용, 사용자 목록과 상세내용이며, 자세한 내용은 해당 텍스트를 클릭해 주세요.

## 4. 팀원 소개

| 이름                                          | 개발 내용                       |
| --------------------------------------------- | ------------------------------- |
| [최홍규(팀장)](https://github.com/gomgun-lab) | 계좌 목록 페이지 개발           |
| [김정수](https://github.com/sunpl13)          | 계좌 상세 페이지 개발           |
| [강민규](https://github.com/kagrin97)         | 사용자 목록 페이지 개발         |
| [윤여건](https://github.com/kunnyCode)        | 사용자 상세 페이지 개발         |
| [류웅선](https://github.com/unsnruu)          | 레이아웃 개발 + API 모듈화      |
| [백승전](https://github.com/BaikSeungJeon)    | 로그인 페이지 개발 + API 모듈화 |

## 5. 구현 기능

### 1. 화면 구성

#### 로그인

#### 레이아웃

- Header
- Footer
- Sider

#### 메뉴

- 계좌 목록
- 계좌 상세
- 사용자 목록
- 사용자 상세

### 2.메뉴 구성

#### 계좌 목록

- **고객명(user_name)**: 고객 ID를 참조해 실제 이름이 보여집니다.
  - **고객명을 누를 경우 사용자 상세 화면으로 이동**합니다.
- **계좌번호(number)** : 앞 뒤 각각 두글자를 제외하고 **나머지는 글자수에 맞게 `*` 글자로 마스킹 처리**가 필요합니다.
- **계좌상태(status)** : 예시) 운용중, `accountStatus.json` 를 참조하여 실제 이름으로 보여져야 합니다.
- **계좌명(name)** : 계좌명입니다.
- **평가금액(assets)** : 예시) 123,123,123
- **입금금액(payments)** : 예시) 123,123,123
- **계좌활성화여부(is_active**) : 계좌 활성화 여부
- **계좌개설일(created_at)**

#### 계좌 구현 기능

- 목록에서 브로커명과 **계좌 활성화 여부, 계좌 상태를 필터링** 할 수 있습니다.
- 리스트 페이지에서 **검색이 가능**합니다.
- **페이지네이션**이 가능합니다.

#### 사용자 목록

- **고객명(user_name)**: 가운데 글자 마스킹 필요, **두글자일 경우 성을 제외한 이름 마스킹 처리, 4글자 이상일 경우 마스킹 처리 후 앞뒤 한글자만 표기**됩니다.
  - **고객명을 누를 경우 사용자 상세화면으로 이동**합니다.
- **보유 중인 계좌 수: (해당 API 호출 후 데이터를 정제하여 표기)**
- **이메일 주소**
- **주민등록상 성별코드 (gender_origin)**
- **생년월일 (yyyy-mm-dd) (birth_date)**
- **휴대폰 번호 (가운데 4자리 `\***` 로 마스킹 필요) (phone_number)\*\*
- **최근로그인 (last_login)**
- **혜택 수신 동의 여부 (해당 API 호출 후 데이터를 정제하여 표기) (allow_marketing_push)**
- **활성화 여부 (해당 API 호출 후 데이터를 정제하여 표기) (is_active)**
- **가입일 (created_at)**

#### 사용자 구현 기능

- 목록에서 **활성화 여부, 임직원 계좌 여부를 필터링** 할 수 있어야 합니다.
- 리스트 페이지에서는 **검색이 가능**해야 합니다.
  - `json-server` 의 Full-text Search API 를 사용하여 구현합니다.
  - 예시 : GET [http://localhost:3000/users?q=South](http://localhost:3000/users?q=South)
- **페이지네이션**이 가능합니다.
  - `json-server` 의 Paginate API 를 사용하여 구현합니다.
  - 예시 : GET [http://localhost:3000/users?\\\_page=1&\\\_limit=20](http://localhost:3000/users?%5C%5C_page=1&%5C%5C_limit=20)
- 임의로 **신규 사용자를 추가**할 수 있어야 합니다.
- 잘못 생성한 **사용자를 삭제**할 수 있어야 합니다.
- 개명을 한 사용자를 위해 **사용자명을 변경**할 수 있어야 합니다.

## 6. 개발 스택

<div>
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white"/>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white"/>
<img src="https://img.shields.io/badge/MUI-007FFF?style=for-the-badge&logo=mui&logoColor=white"/>
</div>
  
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
