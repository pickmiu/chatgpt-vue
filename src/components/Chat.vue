<template>
  <div class="mainContainer">
    <div class="chatContainer" ref="chatContainer">
      <ChatHeaderBox />
      <div class="chatMessageContainer">
        <ChatMessageBox
          v-for="record in chatRecordList.slice().reverse()"
          :key="record.id"
          :box-type="record.boxType"
          :message-text="record.messageText"
          :time="record.time"
        />
      </div>
      <QuestionInputBox @submit-question="submitQuestion" />
    </div>
  </div>

  <!-- loading
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="14" fill="#fff" viewBox="0 0 120 30">
                <circle cx="15" cy="15" r="15" fill="var(--primary, red)">
                    <animate attributeName="r" begin="0s" calcMode="linear" dur="0.8s" from="15" repeatCount="indefinite" to="15" values="15;9;15"></animate>
                    <animate attributeName="fill-opacity" begin="0s" calcMode="linear" dur="0.8s" from="1" repeatCount="indefinite" to="1" values="1;.5;1"></animate>
                </circle>
                <circle cx="60" cy="15" r="9" fill="var(--primary, red)" fill-opacity="0.3">
                    <animate attributeName="r" begin="0s" calcMode="linear" dur="0.8s" from="9" repeatCount="indefinite" to="9" values="9;15;9"></animate>
                    <animate attributeName="fill-opacity" begin="0s" calcMode="linear" dur="0.8s" from="0.5" repeatCount="indefinite" to="0.5" values=".5;1;.5"></animate>
                </circle>
                <circle cx="105" cy="15" r="15" fill="var(--primary, red)">
                    <animate attributeName="r" begin="0s" calcMode="linear" dur="0.8s" from="15" repeatCount="indefinite" to="15" values="15;9;15"></animate>
                    <animate attributeName="fill-opacity" begin="0s" calcMode="linear" dur="0.8s" from="1" repeatCount="indefinite" to="1" values="1;.5;1"></animate>
                </circle>
            </svg>
     -->
</template>

<script setup>
import moment from "moment";
import { ref } from "vue";
import ajax from "../network/network.js";
import ChatHeaderBox from "./ChatHeaderBox.vue";
import ChatMessageBox from "./ChatMessageBox.vue";
import QuestionInputBox from "./QuestionInputBox.vue";

const chatRecordList = ref([
  {
    id: 1,
    boxType: "chatgpt",
    messageText: "Hi，我是ChatGPT，请在下方输入你的问题。",
    time: moment(new Date()).format("YYYY/MM/DD HH:mm:ss"),
  },
]);

function submitQuestion(questionText) {
  chatRecordList.value.push({
    id: chatRecordList.value.length + 1,
    boxType: "me",
    messageText: questionText,
    time: moment(new Date()).format("YYYY/MM/DD HH:mm:ss"),
  });

  ajax
    .post("/api/chat/question/tradition", { questionContent: questionText })
    .then(function (response) {
      // 获取响应的状态码
      if (response.status === 200) {
        let replyText = response.data;
        chatRecordList.value.push({
          id: chatRecordList.value.length + 1,
          boxType: "chatgpt",
          messageText: replyText,
          time: moment(new Date()).format("YYYY/MM/DD HH:mm:ss"),
        });
      } else {
        chatRecordList.value.push({
          id: chatRecordList.value.length + 1,
          boxType: "chatgpt",
          messageText: "服务器错误,请反馈邮箱2238192070@qq.com",
          time: moment(new Date()).format("YYYY/MM/DD HH:mm:ss"),
        });
      }
    })
    .catch(function (error) {
      console.log(error);
      chatRecordList.value.push({
        id: chatRecordList.value.length + 1,
        boxType: "chatgpt",
        messageText: "服务器错误,请反馈邮箱2238192070@qq.com",
        time: moment(new Date()).format("YYYY/MM/DD HH:mm:ss"),
      });
    });
}
</script>

<style scoped>
.mainContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.chatContainer {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 20px 0 20px;
  height: 90vh;
  border-width: 1px 1px;
  border-style: solid;
  border-color: #dedede;
  width: 600px;
  border-radius: 5px 5px 5px 5px;
}

.chatMessageContainer {
  border-width: 0px 0px 1px 0px;
  border-style: solid;
  border-color: #dedede;
  width: 100%;
  height: 628px;
  display: flex;
  flex-direction: column-reverse;
  overflow-y: auto;
  overflow-x: hidden;
  overscroll-behavior: none;
}
</style>