# 입9팔9 프로젝트 소개 _FrontEnd
> 입9팔9는 스토어에 상품 등록과 판매가 가능한 소셜 네트워크 서비스(SNS)<br/>
> 이 서비스는 단순히 상품 판매에서 그치는 것이 아니라 데일리룩 이외에도 자신의 취향을 공유할 수 있는 SNS 플랫폼<br/>
<br/>

- 배포 URL : <a href="">🔗 [서비스링크](https://wear9sell9.netlify.app/) </a>
- 서비스 이용을 위한 테스트 계정<br/>
ID: 21test@test.com<br/>
Password: 123456
<br/>

## 목차
- [프로젝트 목적](프로젝트-목적) <br/>
- [팀원 소개 및 역할 분담](팀원-소개-및-역할분담) <br/>
- [개발 환경](개발-환경) <br/>
- [브랜치 관리 전략](브랜치-관리-전략)  <br/>
- [컨벤션](컨벤션)  <br/>
- [폴더 구조](폴더-구조)  <br/>
- [팀 협업 방식](팀-협업-방식)  <br/>
- [구현 기능](구현-기능) <br/>
- [개선 사항](개선-사항)  <br/>
- [느낀점](느낀점)  <br/>
<br/>

## 개발 기간
- 기간 : 2023년 6월 1일 ~ 2023년 6월 28일
<img width="1155" alt="스크린샷 2023-06-26 오후 3 59 50" src="https://github.com/FRONTENDSCHOOL5/final-21-WeMet21-Already29/assets/126529523/67960d65-6d1d-4a37-95b3-6ea16ee211bc">
 <br/>
 <br/>

## 프로젝트 목적
- React 라이브러리를 비롯한 다양한 프론트엔드 기술 스택을 경험하고 이해
- 게시글 CURD 실습을 통한 데이터 관리의 기초를 이해하고 실습
- 실시간 사용자들 간의 소통을 가능하게 하는 피드, 좋아요, 댓글 메세지 기능 구현하여 동적 웹 애플리케이션의 기본 이해
- 사용자 경험을 향상시키는 방법 학습
<br/>

## 팀원 소개 및 역할 분담

### 팀원 소개
|FE 최범관|FE 박경보|FE 유하은|FE 한상헌|
| :---: | :---: | :---: | :---: |                                                    
|  팀장 <br> <a href="https://github.com/KwanBeom"> 🔗 KwanBeom </a>| 팀원 <br> <a href="https://github.com/kyeongbobak">🔗 kyeongbobak </a> |팀원 <br> <a href="https://github.com/yonsinthefish">🔗yonainthefish </a>|팀원 <br> <a href="https://github.com/Skyllerrr">🔗 skyllerrr </a> |
팀 리딩 & 테크리딩 | 프로젝트 기획 & 진행, 문서화 | 로고 디자인 & 피그마제작  |유효성검사 & UI 개선|
<br/>

### 역할 분담
> ### 최범관(팀 리딩 & 테크리딩)
- 404에러 페이지
- 팔로워 팔로잉 페이지 리팩토링
- 홈피드 페이지 기능 구현
- 게시물 상세 페이지 기능 구현
- 상품 등록 페이지 
- 상품 상세 페이지
- 상품 리스트 페이지
- 프로필 페이지
- 프로필 수정 페이지
- 로딩 페이지
- 모달 컴포넌트
- 헤더 컴포넌트
- 바텀 시트
- 하단 탭바
- 디바운싱 활용해서 유저 검색 기능 최적화

> ### 박경보(프로젝트 기획 & 진행, 문서화)
- 서비스 컨셉 기획
- 로그인 페이지
- 게시물 업로드 페이지
- 댓글 등록, 수정, 삭제 기능 구현
- 버튼 공통 컴포넌트
- 회의록 작성
- 리드미 작성
- 발표

> ### 유하은(로고 디자인 & 피그마제작)
- 프로젝트 디자인 총괄
- 회원가입 페이지 
- 게시물 업로드 페이지 
- 댓글 등록, 수정, 삭제 UI구현
- 하단 탭바
- 버튼 공통 컴포넌트
- 리드미 작성
- 발표

> ### 한상헌(유효성검사 & UI 개선)
- 스플래쉬 페이지
- 홈피드 UI
- 유저 검색 페이지
- 팔로워 팔로잉 페이지 
- 하단 탭바
<br/>

## 개발 환경

|**언어**|<img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>  |
| :---| :--- |
|**라이브러리**|<img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"/> <img src="https://img.shields.io/badge/Context--Api-000000?style=for-the-badge&logo=react"/> <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/>|
|**통합 개발 환경**|<img src="https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white"/>|
|**협업 및 커뮤니케이션 도구** | <img src="https://img.shields.io/badge/Notion-%23000000.svg?style=for-the-badge&logo=notion&logoColor=white"/> <img src="https://img.shields.io/badge/Discord-%235865F2.svg?style=for-the-badge&logo=discord&logoColor=white"/>|
|**버전 관리 시스템** | <img src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white"/>|
|**디자인** | <img src="https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white"/>|
|**외부 API**|[감귤마켓 API 명세](https://www.notion.so/16312a05a4c7456db8073785be95cda6)|
<br/> 

## 브랜치 관리 전략
> Git Flow
<br/>

<img width="572" alt="" src="https://github.com/kyeongbobak/sopshop/assets/126529523/cb006ff7-acaa-4a26-9a93-b774b403b43e">
<br/> 

## 컨벤션

### 커밋 컨벤션
> Udacity

### 메세지 구조
  ```
  type : subject

  body

  footer
  ```
### type
    - feat: 새로운 기능
    - fix: 버그 수정
    - docs: 문서 변경
    - style: EOL, 세미콜론 등 코드에 대한 변경이 아닌 컨벤션에 관련된 변경
    - refactor: 프로덕션 코드 리팩토링
    - test: 테스트 추가, 리팩토링 테스트 ( 프로덕션 코드 변경 없음 )
    - chore: 빌드, 릴리즈, 설정 등의 변경 ( 프로덕션 코드 변경 없음 )
<br/>   

### 코드 컨벤션
- ESLint와 Prettier를 사용하여 일관된 스타일 준수
- 코드 포맷은 Prettier가 자동으로 처리
<br/>

## 폴더 구조
```
 입9팔9
├── public
└── src
    ├── assets/images
    ├── components
        ├── Button
        ├── FollowButton
        ├── FollowItem
        ├── Footer
        ├── Header
        ├── HeaderMenu
        ├── Modal
        ├── Post
        ├── Products
        ├── Profile
        ├── ShareModal
        ├── UserList
    ├── contexts/ModalContext
    ├── hooks
    ├── pages
        ├── 404
        ├── FollowList
        ├── HomeFeed
        ├── IntroLogin
        ├── Login
        ├── Post
        ├── PostDetail
        ├── PostUpload
        ├── ProductDetail
        ├── ProductList
        ├── Profile
        ├── ProfileSettings
        ├── Search
        ├── SignUp
        ├── Splash
        ├── UploadProduct
    ├── routes
    ├── style
    └── utils
```
<br/>

## 팀 협업 방식
- 매일 9시와 17시에 금일 작업 내용과 진행 상황을 공유
- GitHub Issue를 통해 프로젝트 작업 개선사항 및 추가 될 기능을 기록하여 작업일정을 팀원들과 공유
- [GitHub Wiki](https://github.com/FRONTENDSCHOOL5/final-21-WeMet21-Already29/wiki/%F0%9F%93%9C-%ED%9A%8C%EC%9D%98%EB%A1%9D) 을 통해 팀 내 공유되야 하는 정보와 회의내용을 기록
- Live share를 통해 VSC 의 Live share를 사용하여 더 나은 코드를 위한 토론을 진행
- 정기 오프라인 회의를 통해 진행상황을 공유하며 일정조율 및 작업방향을 맞춰가는 시간을 마련
<br/>

## 구현 기능
<a href="https://github.com/FRONTENDSCHOOL5/final-21-WeMet21-Already29/wiki/%F0%9F%93%91-%ED%8E%98%EC%9D%B4%EC%A7%80-%EC%83%81%EC%84%B8-%EC%84%A4%EB%AA%85#2-%EC%9D%B4%EB%A9%94%EC%9D%BC%EB%A1%9C-%ED%9A%8C%EC%9B%90%EA%B0%80%EC%9E%85%ED%94%84%EB%A1%9C%ED%95%84-%EC%84%A4%EC%A0%95">🔗 각 페이지에 대한 상세 설명 페이지로 이동하기  </a>

### 1) 홈 + 채팅
|<a href="https://github.com/FRONTENDSCHOOL5/final-21-WeMet21-Already29/wiki/%F0%9F%93%91-%ED%8E%98%EC%9D%B4%EC%A7%80-%EC%83%81%EC%84%B8-%EC%84%A4%EB%AA%85#1-splash">🔗스플래시</a>|<a href="https://github.com/FRONTENDSCHOOL5/final-21-WeMet21-Already29/wiki/📑-페이지-상세-설명#2-이메일로-회원가입프로필-설정">🔗이메일로 회원가입</a>|<a href="https://github.com/FRONTENDSCHOOL5/final-21-WeMet21-Already29/wiki/📑-페이지-상세-설명#2-이메일로-회원가입프로필-설정">🔗프로필 설정</a>|
| :---: | :---: | :---: |
| ![스플래시](https://github.com/kyeongbobak/ibgupalgu/assets/126529523/cbd4a9d4-f911-4a5a-a8bd-8edddb9d3fba)|![이메일로회원가입](https://github.com/kyeongbobak/ibgupalgu/assets/126529523/869766f1-3814-4723-b7b7-4516747ee523)|![프로필설정](https://github.com/kyeongbobak/ibgupalgu/assets/126529523/f97dcf15-42a5-4a55-9c59-62c6d6fa52c4)|
|<a href="https://github.com/FRONTENDSCHOOL5/final-21-WeMet21-Already29/wiki/📑-페이지-상세-설명#3-로그인">🔗로그인</a>|<a href="https://github.com/FRONTENDSCHOOL5/final-21-WeMet21-Already29/wiki/📑-페이지-상세-설명#4-홈피드">🔗홈피드</a>|<a href="https://github.com/FRONTENDSCHOOL5/final-21-WeMet21-Already29/wiki/📑-페이지-상세-설명#5-검색">🔗유저검색</a>|
|![로그인](https://github.com/kyeongbobak/ibgupalgu/assets/126529523/b7c183d2-7950-47d3-be11-93109d26ecbf)|![홈피드](https://github.com/kyeongbobak/ibgupalgu/assets/126529523/1c0c4279-cc24-465e-b2b9-5e89eaac7831)|![유저검색](https://github.com/kyeongbobak/ibgupalgu/assets/126529523/276a6dbe-43ee-4a5b-bee0-35ae27c0496d)|
|<a href="https://github.com/FRONTENDSCHOOL5/final-21-WeMet21-Already29/wiki/📑-페이지-상세-설명#3-로그인">🔗로딩페이지</a>|
|![로딩](https://github.com/kyeongbobak/ibgupalgu/assets/126529523/5a79f37a-5ce6-4d50-89cf-c0e854470988)|
<br>

### 2) 게시물
|<a href="https://github.com/FRONTENDSCHOOL5/final-21-WeMet21-Already29/wiki/📑-페이지-상세-설명#1-게시물-등록">🔗게시물등록(다중선택 가능)</a>|<a href="https://github.com/FRONTENDSCHOOL5/final-21-WeMet21-Already29/wiki/📑-페이지-상세-설명#2-게시물-상세-페이지">🔗게시글 수정/삭제</a>|<a href="https://github.com/FRONTENDSCHOOL5/final-21-WeMet21-Already29/wiki/📑-페이지-상세-설명#2-게시물-상세-페이지">🔗게시글 상세</a>|
| :---: | :---: | :---: |
| ![다중선택최종](https://github.com/kyeongbobak/ibgupalgu/assets/126529523/40824aa2-ced8-4fd7-8e13-d322c627fe42) |![게시글 수정/삭제](https://github.com/kyeongbobak/ibgupalgu/assets/126529523/96cd9fdc-501a-4fd8-ad24-33cb74362190) |![게시물상세페이지](https://github.com/kyeongbobak/ibgupalgu/assets/126529523/23a2aad9-6723-4a6d-8aa5-c33bb0d51fb1)|
|<a href="https://github.com/FRONTENDSCHOOL5/final-21-WeMet21-Already29/wiki/📑-페이지-상세-설명#1-게시물-등록">🔗좋아요</a>|<a href="https://github.com/FRONTENDSCHOOL5/final-21-WeMet21-Already29/wiki/📑-페이지-상세-설명#2-게시물-상세-페이지">🔗댓글 수정/삭제</a>|
|  ![좋아요](https://github.com/kyeongbobak/ibgupalgu/assets/126529523/25ec14c9-4239-47b4-88ea-77c9e9abeedc) |![댓글 등록/삭제](https://github.com/kyeongbobak/ibgupalgu/assets/126529523/673e30dd-b669-4093-b5f9-7f7651d5aa86)|
<br>

### 3) 프로필
|<a href="https://github.com/FRONTENDSCHOOL5/final-21-WeMet21-Already29/wiki/📑-페이지-상세-설명#1-마이-프로필">🔗마이 프로필</a>|<a href="https://github.com/FRONTENDSCHOOL5/final-21-WeMet21-Already29/wiki/📑-페이지-상세-설명#1-마이-프로필">🔗마이 프로필 수정</a>|<a href="https://github.com/FRONTENDSCHOOL5/final-21-WeMet21-Already29/wiki/📑-페이지-상세-설명#4-상품-등록">🔗상품 등록</a>|
| :---: | :---: | :---: |
|  ![마이 프로필](https://github.com/kyeongbobak/ibgupalgu/assets/126529523/6ca88c63-0540-4711-897a-0bf39f15e80e) | ![마이 프로필 수정](https://github.com/kyeongbobak/ibgupalgu/assets/126529523/84f8bc1e-8182-4f85-a546-d396cac6febf)| ![상품 등록](https://github.com/kyeongbobak/ibgupalgu/assets/126529523/b54f222b-397a-4133-80dc-be509ae67f43)|
|<a href="https://github.com/FRONTENDSCHOOL5/final-21-WeMet21-Already29/wiki/📑-페이지-상세-설명#5-상품-수정삭제">🔗상품 수정/삭제</a>|<a href="https://github.com/FRONTENDSCHOOL5/final-21-WeMet21-Already29/wiki/📑-페이지-상세-설명#6-팔로잉팔로워">🔗팔로잉/팔로워</a>|<a href="https://github.com/FRONTENDSCHOOL5/final-21-WeMet21-Already29/wiki/📑-페이지-상세-설명#7-로그아웃">🔗로그아웃</a>|
|![상품 수정/삭제](https://github.com/kyeongbobak/ibgupalgu/assets/126529523/1594646a-689c-42f3-b3f1-202e722ddb72)| ![팔로잉/팔로워](https://github.com/kyeongbobak/ibgupalgu/assets/126529523/e410e952-1e11-43d4-b8f4-51e50de04476)|![로그아웃](https://github.com/kyeongbobak/ibgupalgu/assets/126529523/943d5eb3-c4d0-4bec-a597-aae4627d4b73)|
  <br/>
  
## 개선 사항
- 추후 확장 및 유지 보수를 고려해 재사용되는 컴포넌트는 별도로 common 폴더에서 관리
- 효율적인 작업상황을 고려하여 반복되는 함수는 utils 폴더로 따로 분리하여 사용
- 이후 리팩토링시 진행 예정인 다크모드, 반응형 작업을 위해 변수컬러와, rem 단위를 사용하여 작업에 진행
- 사용자 경험을 고려하여 UX 디자인 제작 (Footer를 통해 화면에서 바로 접근하기 어려운 페이지를 라우팅)
- 로딩 애니메이션을 추가하여 사용자가 로딩 상태를 인지할 수 있도록 기능 구현
- useParams를 이용해 사용자의 아이디를 받아와 정보를 띄워주고 내 프로필에서는 상품 등록 및 프로필 수정 페이지로 이동할 수 있는 버튼이 나타나고, 다른 유저의 프로필에서는 팔로우 버튼이 나타나도록 기능 구현
- 댓글 모달 클릭시 내 댓글이면 삭제, 다른 유저의 댓글이면 신고 기능을 사용할 수 있도록 기능 구현
<br/>

## 느낀점 

#### 최범관 <br/>
문제를 해결하기 위해 끊임없이 소통하면 보다 나은 결과를 얻을 수 있음을 깨달았고, <br>각자의 의견을 나누며 모두가 함께 움직이는 것이 프로젝트의 성공에 필수적이라는 것을 깨닫게 되었습니다.<br> 협업을 통해 함께 성장해 나갈 수 있는 즐거움을 느낄 수 있어 좋았고, 기술적으로나 정신적으로 한 발짝 더 나아갈 수 있는 좋은 경험이었습니다.

#### 한상헌 <br/>
프론트엔드 팀 프로젝트 자체는 이번 멋사에서 처음해보는 경험이라 처음에 어떻게 갈피를 잡아야할지 많은 고민이 있었는데 <br> 프로젝트를 시작하기에 앞서 체계적으로 초기 설정을 잘 잡아야 원활하게 진행할 수 있다는 점을 느껴서,<br> 앞으로 어떻게 효율적으로 프로젝트를 진행할 수 있는지 배울 수 있어서 좋은 경험이었습니다.<br>그리고, 리액트로 진행하는데 오류도 많이나고 구현하지 못하는 부분도 많이 생겨서 그럴때마다 저희 팀원분들이 옆에서 많은 도움을 주셔서 너무 감사드렸고, 부끄럼없이 끊임없는 질문을 하거나 코드의 오류를 잘 해결하고 리팩토링하는 능력은 지금 제가 많이 부족하다고 생각하는데 저희 팀원분들한테 이 장점들을 많이 배웠던 것 같습니다.<br>또, 프로젝트 기간동안 멘토님께서도 궁금한 점이나 따로 코드리뷰를 해주셨는데, 제 스스로 많은 도움을 받아서 너무 감사했습니다.<br>비록, 한달도 안되는 짧은 시간동안 급하게 프로젝트를 진행하게 되어서 많이 힘드셨을텐데 정말 고생많았고 마지막으로, 저희 팀원분들한테 프로젝트 진행하는동안 항상 감사했다고 말씀드리고 싶습니다.

#### 유하은 <br/>
모든 순간이 배움의 연속이었습니다. <br>배움의 즐거움과 고통이 함께 있었지만 그렇기 때문에 프로젝트 기간 정말 많이 성장할 수 있었던 것 같습니다.<br> 작업을 할 때 문서화와 기본기 그리고 기준의 중요성에 대해 다시 깨닫는 시간이었습니다. 모두가 처음하는 프로젝트로 시행착오도 많았지만 팀원분들과의 협업을 통해 기술적인 부분외에도 많은걸 느끼고 팀원분들의 열정적인 태도에 좋은 자극도 많이 받았습니다.<br> 마지막까지 함께 해주시고 고생하신 21조 팀원분들 모두 감사하고 고생 많으셨습니다.

#### 박경보 <br/>
저는 이번에 처음 진행하는 팀프로젝트여서 모든 과정이 배우는 과정이였습니다. 프로젝트 시작 전에는 어떤 이야기를 나누어야하는지 프로젝트 진행과정은 어떤식으로 이루어지는지 등등 사실 아직 배운 내용을 제대로 소화하지 못했고 실력이 많이 부족해서 UI나 기능을 구현함에 있어서 제 역할을 잘 해냈다고는 생각하지 않지만 그럼에도 불구하고 어쨌든 중간에 포기하지 않고 발표까지 왔다는 것에 대해서 제 자신이 너무 대견하고요. 제가 이렇게 온전한 정신으로 프로젝트 발표까지 마무리할 수 있었던것은 묵묵히 제 역할을 해내준 너무 고생 많으셨던 저희 21조 프로젝트 조원 분들과 항상 응원과 조언 아끼지 않던 회고조 분들 그리고 다소 답답한 질문에도 불편한 내색 없이 아주 자세하고 인내심있게 제 질문내용에 대해서 항상 발벗고 나서서 답해주셨던 김유진 멘토님과 항상 격려 아끼지 않고 도움되는 말씀 많이 해주셨던 강사님들과 멘토님들이 있었기 때문 아닌가 싶습니다.그리고 저희 조원 분이 아니신데도 질문에 정성스럽게 답변 주셨던 분들도 너무 감사드립니다. 모두 감사해요!
