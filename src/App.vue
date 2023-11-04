<script setup>
import ChatMessageBox from "./components/ChatMessageBox.vue";
import QuestionInputBox from "./components/QuestionInputBox.vue";
import moment from "moment";
import { ref } from "vue";

const chatRecordList = ref([]);

function submitQuestion(questionText) {
  let id = chatRecordList.value.length + 1;
  let boxType = id % 2 == 0 ? "chatgpt" : "me";

  chatRecordList.value.push({
    id: id,
    boxType: boxType,
    messageText: questionText,
    time: moment(new Date()).format("YYYY/MM/DD HH:mm:ss"),
  });
}

</script>

<template>
  <div class="mainContainer">
    <div class="chatContainer" ref="chatContainer">
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

<style scoped>
.mainContainer {
  display: flex;
  justify-content: center;
  align-items: center;
}
.chatContainer {
  display: flex;
  align-items: center;
  flex-direction: column-reverse;
  margin: 0 20px 0 20px;
  height: 100vh;
  border-width: 0px 1px;
  border-style: solid;
  border-color: #dedede;
  width: 600px;
}

.chatMessageContainer {
  border-width: 0px 0px 1px 0px;
  border-style: solid;
  border-color: #dedede;
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  overflow-y: auto;
  overflow-x: hidden;
  overscroll-behavior: none;
}
</style>
