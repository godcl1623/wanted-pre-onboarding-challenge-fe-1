# :: 원티드 프리온보딩 챌린지 프론트엔드 코스 사전과제 답안

# # 과제 구현 내역

## Assignment 1 - Login / SignUp

- [x] /auth 경로에 로그인 / 회원가입 기능의 개발
  - [x] 로그인, 회원가입을 별도의 경로로 분리(/auth, /signup)
  - [x] 로그인 페이지: 이메일, 비밀번호 input, 제출 button을 갖도록 구성
    ![auth](https://user-images.githubusercontent.com/20578093/183386396-f441cb1d-2d35-45ce-8844-700286e759ec.png)
    ![signup](https://user-images.githubusercontent.com/20578093/183386422-1d45c766-a09e-4400-8099-be6a244be8d5.png)
- [x] 이메일과 비밀번호의 유효성 확인
  - [x] 이메일 조건 : 최소 `@`, `.` 포함
  - [x] 비밀번호 조건 : 8자 이상 입력
  - [x] 이메일과 비밀번호가 모두 입력되어 있고, 조건을 만족해야 제출 버튼이 활성화
  ![auth_valid](https://user-images.githubusercontent.com/20578093/183386411-8826dc88-f0c9-4f49-8b70-1dbe057c4503.png)
- [x] 로그인 API를 호출하고, 올바른 응답을 받았을 때 루트 경로로 이동
  - [x] 응답으로 받은 토큰은 로컬 스토리지에 저장 (key: auth, value: 토큰)
  - [x] 다음 번에 로그인 시 토큰이 존재한다면 루트 경로로 리다이렉트
  - [x] 어떤 경우든 토큰이 유효하지 않다면 사용자에게 알리고 로그인 페이지로 리다이렉트
  ![authgif](https://user-images.githubusercontent.com/20578093/183387486-6822c3ad-3642-4cbb-a31a-d61fca380ff8.gif)

## Assignment 2 - Todo List

- [x] Todo List API 호출을 통한 Todo List CRUD 기능의 구현
  - [x] 목록 / 상세 영역으로 나누어 구현
  - [x] Todo 목록 열람
  ![화면 캡처 2022-08-08 181017](https://user-images.githubusercontent.com/20578093/183386434-6410b7cc-df29-4207-ac5c-7d71382af2f9.png)
  - [x] Todo 추가 버튼을 클릭해 항목을 추가
  ![additem](https://user-images.githubusercontent.com/20578093/183386450-8bdc7e5f-320c-491c-a997-220bb9b23508.gif)
  - [x] Todo 수정 버튼을 클릭해 수정 모드를 활성화하고, 수정 내용을 제출하거나 취소
  ![modifyitem](https://user-images.githubusercontent.com/20578093/183386491-b3dfba3d-1059-469d-89f0-692a314d3409.gif)
  - [x] Todo 삭제 버튼을 클릭해 해당 Todo를 삭제
  ![deleteitem](https://user-images.githubusercontent.com/20578093/183386471-0ad35962-3f4a-4dae-8f8d-1735c1591a65.gif)
- [x] 한 화면 내에서 Todo List와 개별 Todo의 상세 내역을 확인할 수 있도록 구현
  - [x] 새로고침을 했을 때 현재 상태를 유지
  ![refresh](https://user-images.githubusercontent.com/20578093/183386445-5b8383f0-dc15-4825-8447-88b87c7a3f7b.gif)
  - [x] 개별 Todo를 조회 순서에 따라 페이지 뒤로가기를 통하여 조회할 수 있도록 구현
  ![checkprevious](https://user-images.githubusercontent.com/20578093/183386457-bcceb121-57c5-44ba-9d86-bf9247c1b0ce.gif)
- [x] 한 페이지 내에서 새로고침 없이 데이터가 정합성을 갖추도록 구현
  - [x] 수정되는 Todo의 내용을 목록에 실시간으로 반영

# # 과제 실행 방법

```bash
# 1. 백엔드 api 실행 방법
> cd ./be # api 경로로 이동
> yarn # 필요 패키지 설치
> yarn start # http://localhost:8080로 서버 실행

# 2. 프론트엔드 앱 실행 방법
> cd ./fe # 앱 경로로 이동
> yarn # 필요 패키지 설치
> yarn start # 앱 실행

# 3. 로그인 방법
# id: abcd@email.com, password: test0000
```
