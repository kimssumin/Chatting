# **Chatting by socket.io**

## ✔ **실행방법**

- `npm install` 설치
- `npm start`

## ✔ **사용 언어**

<img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=Node.js&logoColor=white"/>
<img src="https://img.shields.io/badge/Javascript-ffb13b?style=flat-square&logo=javascript&logoColor=white"/>
<img src="https://img.shields.io/badge/HTML-E34F26?style=flat-square&logo=HTML5&logoColor=white"/>
<img src="https://img.shields.io/badge/CSS-1572B6?style=flat-square&logo=css3&logoColor=white"/>

<br>

## ✔ **구현 결과**

---

### **1. 메인화면**

<br>

- 대소문자 구분없이 입력가능  
  ![image](https://user-images.githubusercontent.com/96935132/230733170-fbee93f8-3451-463d-985e-1b01d4587543.png)

- 같은 그룹명 내에 접속해 있는 중복 닉네임이 존재하는지 체크
  ![image](https://user-images.githubusercontent.com/96935132/230733280-7bfa3063-a39b-4b4c-9f9a-13e1979a73ad.png)

<br>

### **2. 채팅화면**

<br>

> 닉네임 : ssum, 그룹명 : 1234 로 들어간 case

- 처음 그룹에 입장하면 Admin 에서 Welcome 메시지를 전송

  ![image](https://user-images.githubusercontent.com/96935132/230733328-09202add-a8af-497b-88a9-80bf6ff3a842.png)

- 생성된 그룹에 다른 user가 입장하면 접속중인 user 목록에 새로운 user 추가
- 기존에 있던 user 의 채팅창에 새로운 user 의 입장 알림 메시지가 전송됨

  ![image](https://user-images.githubusercontent.com/96935132/230733588-303a0ae4-1ac4-48b5-821d-34730f3a3618.png)

- 채팅기능

  ![image](https://user-images.githubusercontent.com/96935132/230733740-ce2a766d-00a6-4972-b742-3feb214d5f0b.png)

- 동시접속 테스트

  ![image](https://user-images.githubusercontent.com/96935132/230733918-b7498fc5-0a07-47ca-aa94-60de4e3b04ca.png)

- 퇴장 알림

  - EXIT 버튼 혹은 뒤로가기 버튼으로 초기화면 진입 가능

  ![image](https://user-images.githubusercontent.com/96935132/230733950-8223aab8-fb7c-4a51-a690-7e4a63f1c3f5.png)
