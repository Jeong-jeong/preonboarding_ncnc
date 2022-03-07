# 목표는 취업이조 2팀

<br>

## 🚀 정보

- [배포주소 바로가기](https://3week-ncnc-nrc5qsatr-wanted2.vercel.app/)
- [노션 바로가기](https://sleepy-oxygen-343.notion.site/41970b5fee2d45aebd7b01de061039eb)
- [원본 레포지토리 바로가기](https://github.com/wanted-team2/3week_ncnc)

<br>
<br>

## 🛠 기술 스택

### **📚 Frameworkes & Libraries**

- Next.js@12.0.10
- react.js@17.0.2
- typescript@^4.5.5
- styled-components@^5.3.3
- axios@^0.26.0

### **🔧 Tools**

- commitizen@^4.2.4
- vercel
  <br>
  <br>

## 👀 프로젝트 빌드 및 실행 방법

1. 상단 `Code` 버튼을 눌러 레포지토리를 클론 받습니다.

```
$ git clone https://github.com/wanted-team2/3week_ncnc.git
```

2. 패키지를 설치합니다.

```
$ yarn install
```

3. 서버를 실행합니다.

```
$ yarn dev
$ yarn build
```

<br>

## 😎 팀원

| [김지영(팀장)](https://github.com/Jeong-jeong)                                                                                    | [고병표](https://github.com/kokoball)                                                                                            | [유제호](https://github.com/ludacirs)                                                                                           | [홍수연](https://github.com/suyeon-hong)                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| <img src="https://user-images.githubusercontent.com/68528752/153546074-abd9a7df-771c-4f14-8a2f-a77246210b1c.jpeg" width="400px"/> | <img src="https://user-images.githubusercontent.com/68528752/153546140-b58f43fe-4730-46ca-bfda-0b048f36d24f.JPG" width="400px"/> | <img src="https://user-images.githubusercontent.com/68528752/153545718-c688e091-53a3-4e30-97fd-a2f00ab97aa8.JPG" width="400px"> | <img src="https://user-images.githubusercontent.com/68528752/153545721-ecc413f4-9d1b-45e0-9909-423c27128b1c.jpeg" width="400px"> |
| [🚀 회고](https://velog.io/@jeongs/3주차-회고)                                                                                    |                                                                                                                                  |                                                                                                                                 |                                                                                                                                  |

<br>

## 🔥 프로젝트 과정 소개

| 실시간 회의                                                                                                          | Issue 트래킹 및 PR 분배                                                                                            |
| -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| ![실시간회의](https://user-images.githubusercontent.com/68528752/154127816-a61aec1d-4184-4489-8836-b1c217e4b4f2.png) | ![역할분배](https://user-images.githubusercontent.com/68528752/154128116-5849d3da-7a31-4fa7-b9bd-de9b313146b2.png) |

| [정보 공유](https://www.notion.so/5520df8322e549ebb29b4528de020d52)                                                | [반복 최소화](./styles/font.ts)                                                                                       |
| ------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------- |
| ![정보공유](https://user-images.githubusercontent.com/78653426/153548448-d9e13041-e5fa-4b66-b69f-9b54b8d8fbdc.png) | ![반복 최소화](https://user-images.githubusercontent.com/68528752/154165034-04acc4b2-c218-4474-96b4-57841b0d1772.png) |

<br>
<br>

### 🗣 공통 기능

- commitizen 활용하여 커밋 컨벤션 통일화
- issue로 업무 할당, PR로 issue 트래킹

### 📝 담당한 기능

#### ✔ 김지영

- `⭐️ Team Leader` `프로젝트 전체 관리`, `역할 분배 및 issue 관리`, `문서 작성`
- babel, eslint, prettier, next.config, style theme, web-font, favicon 등의 [프로젝트 기초 세팅](https://github.com/Jeong-jeong/3week_ncnc/commit/82e663bac0fb2eaa0c2fb7d02af6c55834e07d22)
- 반복되는 로직은 함수, styled의 css로 [분리](https://github.com/wanted-team2/3week_ncnc/blob/main/styles/commonStyle.ts)
- 크롬 light-house를 활용해 **접근성 12%개선**, **검색엔진 최적화 100% 달성**
- unsplash를 활용해 **[json mock data](https://github.com/Jeong-jeong/3week_ncnc/blob/main/public/mock/slideList.json)**로 커스텀 swiper API 생성
  - 정적 데이터 캐시가 존재하지 않을 경우 랜덤 이미지 생성
- 기존의 getServerSideProps → CSR로 변경하여 **페이지 로딩 속도 개선**
  - 데이터 fetch가 느릴 경우 **Loading 컴포넌트 표시**로 UX 개선
- LCP 컨텐츠일 경우 image priority 속성으로 **초기 데이터 다운 속도 개선**
- 초기렌더링 시 메인 페이지 Navigation Bar의 active된 DOM 요소 위치로 [scroll을 이동](https://github.com/Jeong-jeong/3week_ncnc/commit/86e9520a79bccc547d3c18f48cfbc72508cbb92d)시켜 UX 개선
- Dropdowns 구현. useTabs 커스텀 훅 활용.
- 라이브러리 없이 Swiper 컴포넌트 구현. [커스텀 훅 활용](https://github.com/Jeong-jeong/3week_ncnc/blob/main/hooks/useSwipe.tsx).
- Contacts 페이지 구현

#### 고병표

- `button`, `Header`, `Drawer` 컴포넌트 구현
- `main` 페이지 구현

#### 유제호

- `NavigationBar`, `ProductionList` 컴포넌트 구현
- `categories/brands` 페이지 구현
- 각 페이지 api 로직 구현
- 배포

#### 홍수연

- `OptionBox`, `CategoryList` 컴포넌트 구현
- `items` 페이지 구현

<br>
<br>
<br>

## 📈 디렉토리 구조

```
.
├── README.md
├── api
│   └── index.ts
├── components
│   ├── base
│   └── domain
├── fileMock.js
├── hooks
│   ├── index.ts
│   ├── useAxios.ts
│   ├── useClickedId.tsx
│   ├── useOption.ts
│   ├── useSwipe.tsx
│   ├── useTabs.tsx
│   └── useWindowWidth.tsx
├── jest.config.js
├── next-env.d.ts
├── next.config.js
├── package.json
├── pages
│   ├── 404
│   ├── _app.tsx
│   ├── _document.tsx
│   ├── brands
│   ├── categories
│   ├── contacts
│   ├── index.tsx
│   └── items
├── pagesStyle
│   ├── brandsStyle.ts
│   ├── categoriesStyle.ts
│   ├── contactStyle.ts
│   ├── homeStyle.ts
│   └── itemStyle.ts
├── public
│   ├── android-chrome-144x144.png
│   ├── apple-touch-icon.png
│   ├── browserconfig.xml
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   ├── favicon.ico
│   ├── fonts
│   ├── images
│   ├── mock
│   ├── mstile-150x150.png
│   └── site.webmanifest
├── styleMock.js
├── styles
│   ├── commonCompo.tsx
│   ├── commonStyle.ts
│   ├── font.ts
│   ├── globalStyle.ts
│   ├── index.ts
│   ├── styled.d.ts
│   └── theme.ts
├── tsconfig.jest.json
├── tsconfig.json
├── types
│   ├── Brand.ts
│   ├── Category.ts
│   ├── ConItem.ts
│   ├── Nested.ts
│   ├── QaType.ts
│   ├── Qas.ts
│   ├── SoonItem.ts
│   ├── Swipe.ts
│   └── index.ts
├── utils
│   └── fucntions
├── yarn-error.log
└── yarn.lock
```
