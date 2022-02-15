# 목표는 취업이조 2팀

<br>

## 🚀 정보

- [배포주소 바로가기](https://3week-ncnc-nrc5qsatr-wanted2.vercel.app/)
- [노션 바로가기](https://sleepy-oxygen-343.notion.site/41970b5fee2d45aebd7b01de061039eb)

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
|                                                                                                                                   |                                                                                                                                  |                                                                                                                                 |                                                                                                                                  |

<br>

## 🔥 프로젝트 과정 소개

| 실시간 회의                                                                                                          | Issue 트래킹 및 PR 분배                                                                                            |
| -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| ![실시간회의](https://user-images.githubusercontent.com/68528752/154127816-a61aec1d-4184-4489-8836-b1c217e4b4f2.png) | ![역할분배](https://user-images.githubusercontent.com/68528752/154128116-5849d3da-7a31-4fa7-b9bd-de9b313146b2.png) |

| [정보 공유](https://www.notion.so/5520df8322e549ebb29b4528de020d52)                                                | [반복 최소화](./styles/font.ts)                                                                                       |
| ------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------- |
| ![정보공유](https://user-images.githubusercontent.com/78653426/153548448-d9e13041-e5fa-4b66-b69f-9b54b8d8fbdc.png) | ![반복 최소화](https://user-images.githubusercontent.com/68528752/154165034-04acc4b2-c218-4474-96b4-57841b0d1772.png) |

<br>

### 📝 기능 목록 명세

#### ✔ 김지영

- 프로젝트 기초 세팅
- favicon 및 메타정보 설정
- `Dropdowns`, `Swiper` 컴포넌트 구현
- `contacts` 페이지 구현

#### ✔ 고병표

- `button`, `Header`, `Drawer` 컴포넌트 구현
- `main` 페이지 구현

#### ✔ 유제호

- `NavigationBar`, `ProductionList` 컴포넌트 구현
- `categories/brands` 페이지 구현
- 각 페이지 api 로직 구현
- 배포

#### ✔ 홍수연

- `OptionBox`, `CategoryList` 컴포넌트 구현
- `items` 페이지 구현

<br>
<br>
<br>

## 📈 디렉토리 구조

```
<<<<<<< HEAD
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
