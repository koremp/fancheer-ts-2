# fancheer-ts-2

Create Next App 없이 TypeScript로 gh-pages로 배포하기

![Next.JS](https://img.shields.io/badge/next.js-TypeScript-007ACC?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Emotion](https://img.shields.io/badge/👩‍🎤_Emotion-CC6699?style=for-the-badge&logo=emotion&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)
![Github Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)

![Repo Size](https://img.shields.io/github/repo-size/koremp/fancheer-ts-2)

[![Coverage](https://github.com/koremp/fancheer-ts-2/actions/workflows/coverage.yaml/badge.svg)](https://github.com/koremp/fancheer-ts-2/actions/workflows/coverage.yaml)

## 소개

* 2022.01 ~ 2022.01
* 링크
  * https://github.com/koremp/fancheer-ts-2
  * https://koremp.github.io/fancheer-ts-2/
* 스트릿 우먼 파이터의 팬페이지
* 개인 개발
* TypeScript, React.js, Next.js, Ant-Design, GitHub Actions, gh-pages, Jest, etc
* Test Coverage 100%

### 이슈들

#### 댄서들 정보

크롤링하지 못하고, 직접 수기로 추가했다.

#### 이미지 이슈

#### Next Config Js - Path Alias 이슈

VS Code에선 path 를 못잡음 그래서 타입 자동완성이 안됨
tsconfig.json 에서 Path Alias와 Next Config 에서 Path Alias를 설정해주니 설정 문제가 해결되었다.

의외로 시간이 많이 걸렸다. 문제의 갈피를 찾지 못하니까 직접 노가다로 이미지 파일들의 url들을 변경하고 파일도 이동하고 변경하고 그런 의미없는 삽질들을 했다.

#### 참고한 레포 및 설명

* https://github.com/NullFull/wonderful-laws
* https://github.com/sex-request/frontend/
* https://github.com/sex-request/nextjs-starter-kit

`nextjs-starter-kit`에서는 yarn 과 windows 11, git bash, wsl 등의 충돌이 있어서 create-next-app을 참고하려고 했는데 또 화면 설정이 안되고. <br>
그래서 참고했던 레포는 널채움의 `이상한 나라의 판사` 레포를 참고했는데 Next.js 버전이 10이어서 문제가 있었다.
기존 레포를 `yarn init` 등의 명령어로 만들지 않고 그냥 일부분만 참고하여 만들었는데, 우선 손이 가고 만들 수 있었던 것들만 만들었다. 
