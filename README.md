## <img src='https://user-images.githubusercontent.com/85447054/192123033-0945830c-0aab-45f9-af4f-5f28638612d5.png' width='100'/>

### [투자 관리 서비스](https://www.fint.co.kr/)의 관리자 기능 구현

## 목차

[1. 데모 페이지](#1-데모-페이지)

[2. 설치, 환경설정, 실행방법](#2-설치-환경설정-실행방법)

- 설치, 환경 설정
- 실행

[3. 프로젝트 소개 및 진행방식](#3-프로젝트-소개-및-진행방식)

[4. 팀원 소개](#4-팀원-소개)

[5. 구현 기능](#5-구현-기능)

- 댓글 CRUD를 구축합니다.
- Redux를 이용한 비동기 처리합니다

[6. 개발 스택](#6-개발-스택)

[7. 폴더 구조](#6-개발-스택)

  <br/>
  
## 1. 데모 페이지

## 2. 설치, 환경설정, 실행방법

```bash
# 설치
> git clone https://github.com/wanted-fe-6/pre-onboarding-assignment-week-4-1-team-1.git
> cd pre-onboarding-assignment-week-4-1-team-1
> npm install

# 실행
> npm start
```

  <br/>
  
## 3. 프로젝트 소개 및 진행방식

  <br/>

## 4. 팀원 소개

  <br/>

| 이름                                          | 개발 내용                       |
| --------------------------------------------- | ------------------------------- |
| [최홍규(팀장)](https://github.com/gomgun-lab) | 계좌 목록 페이지 개발           |
| [김정수](https://github.com/sunpl13)          | 계좌 상세 페이지 개발           |
| [강민규](https://github.com/kagrin97)         | 사용자 목록 페이지 개발         |
| [윤여건](https://github.com/kunnyCode)        | 사용자 상세 페이지 개발         |
| [류웅선](https://github.com/unsnruu)          | 레이아웃 개발 + API 모듈화      |
| [백승전](https://github.com/BaikSeungJeon)    | 로그인 페이지 개발 + API 모듈화 |

  <br/>
  
## 5. 구현 기능

## 6. 개발 스택

<div>
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white"/>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white"/>
<img src="https://img.shields.io/badge/MUI-007FFF?style=for-the-badge&logo=mui&logoColor=white"/>
</div>

  <br/>
  
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
