# fancheer-ts-2

Create Next App 없이 TypeScript로 gh-pages로 배포하기

![Next.JS](https://img.shields.io/badge/next.js-TypeScript-007ACC?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Emotion](https://img.shields.io/badge/👩‍🎤_Emotion-CC6699?style=for-the-badge&logo=emotion&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)
![Github Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)

![Repo Size](https://img.shields.io/github/repo-size/koremp/fancheer-ts-2)

[![Coverage](https://github.com/koremp/fancheer-ts-2/actions/workflows/coverage.yaml/badge.svg)](https://github.com/koremp/fancheer-ts-2/actions/workflows/coverage.yaml)

### 문제들
#### 댄서들 정보

나무위키 크롤링하기... 필요함 (50명이 넘을듯) <br>
-> 수기 입력했는데, 너무 아쉬운 것이다... 

#### 이미지

이미지는 아직도 사이즈가 들쭉날쭉하고 레이아웃도 이상함 <br>
`next/image`를 사용하기 위해서 ant design에 넣어서 이상한걸까..
-> 이미지를 직접 추가할 수 있도록 만드려면 직접 서버를 만들어야하고 그걸 또 배포해야하는 일들이 생기니까 귀찮은 것
#### Next Config Js - Path Alias

VS Code에선 path 를 못잡음 그래서 타입 자동완성이 안됨
tsconfig.json 에서 Path Alias와 Next Config 에서 Path Alias를 설정해주니 설정 문제가 해결되었다.

의외로 시간이 많이 걸렸다. 문제의 갈피를 찾지 못하니까 직접 노가다로 이미지 파일들의 url들을 변경하고 파일도 이동하고 변경하고 그런 의미없는 삽질들을 했다.

#### 참고한 레포

* https://github.com/NullFull/wonderful-laws
* https://github.com/sex-request/frontend/
* https://github.com/sex-request/nextjs-starter-kit

`nextjs-starter-kit`에서는 yarn 과 windows 11, git bash, wsl 등의 충돌이 있어서 create-next-app을 참고하려고 했는데 또 화면 설정이 안되고. <br>
그래서 참고했던 레포는 널채움의 `이상한 나라의 판사` 레포를 참고했는데 Next.js 버전이 10이어서 문제가 있었다.
기존 레포를 `yarn init` 등의 명령어로 만들지 않고 그냥 일부분만 참고하여 만들었는데, test 레포지토리나 storybook 등의 기술들을 사용하기에는 내가 체력적으로, 멘탈적으로 건강하지 못했기에 우선 손이 가고 만들 수 있었던 것들만 만들었다. 코드도 컴포넌트 분리가 되지도 않았고, 기타 등등의 문제가 있지만... 일단 여기까지 만들었다. 

#### 과정

2022-01-21 rtk로 빌드 및 배포 성공. 리듀서로 변환하기 완료. 커버리지 높이고, 포트폴리오 만들고 이력서 준비하는 활동을 해야하는데 이건 이전처럼 계속 집중할 수 있는 환경이 아닌 것 같음. 고민해봐야겠다.