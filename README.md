![image](https://user-images.githubusercontent.com/96935132/230734279-65ab2c26-3448-4aab-a5d8-fe1807747c50.png)

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

### **1. 메인화면**

<br>

#### ✅ **대소문자 구분없이 입력가능**

![image](https://user-images.githubusercontent.com/96935132/230733170-fbee93f8-3451-463d-985e-1b01d4587543.png)

#### ✅ **같은 그룹명 내에 접속해 있는 중복 닉네임이 존재하는지 체크**

![image](https://user-images.githubusercontent.com/96935132/230733280-7bfa3063-a39b-4b4c-9f9a-13e1979a73ad.png)

<br>

### **2. 채팅화면**

<br>

> 닉네임 : ssum, 그룹명 : 1234 로 들어간 case

#### ✅ **처음 그룹에 입장하면 Admin 에서 Welcome 메시지를 전송**

![image](https://user-images.githubusercontent.com/96935132/231310420-e3aff421-4d3e-4678-8462-96cd66121b0e.png)

#### ✅ **생성된 그룹에 다른 user가 입장하면 접속중인 user 목록에 새로운 user 추가**

#### ✅ **기존에 있던 user 의 채팅창에 새로운 user 의 입장 알림 메시지가 전송됨**

![image](https://user-images.githubusercontent.com/96935132/231310476-d76d2220-7b7c-4bf1-87ce-64fb0ca98463.png)

#### ✅ **채팅기능**

![image](https://user-images.githubusercontent.com/96935132/231310557-c8a2e2af-fd45-448f-bbf1-1985f18b9870.png)

#### ✅ **동시접속 테스트**

![Collage](https://user-images.githubusercontent.com/96935132/231314069-ca1e23ef-bf0b-4b5d-a1b0-52ecafc8a207.png)

#### ✅ **퇴장 알림**

- EXIT 버튼 혹은 뒤로가기 버튼으로 초기화면 진입 가능

  ![image](https://user-images.githubusercontent.com/96935132/231314223-a5bdb651-f086-4509-9f7d-38ccf6312db6.png)

#### ✅ **해당 방 참가 인원 표시**

- online 상태인 인원을 우선 표기하고, 토글 형태로 참여중인 닉네임들을 보여준다
  ![Collage (1)](https://user-images.githubusercontent.com/96935132/231314547-2adbc5e1-bfb8-4a86-9eef-7970669a0a87.png)
