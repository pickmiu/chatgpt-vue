<template>
  <div class="inputBox">
    <textarea
      v-model="questionText"
      class="textarea"
      placeholder="请输入你的问题"
      @keyup.enter="submitQuestionEnter"
    ></textarea>
    <button class="button" ref="button" @click="submitQuestionButton">
      <svg
        t="1697622340336"
        class="icon icon-send"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="12484"
        width="200"
        height="200"
      >
        <path
          ref="path"
          d="M512.877641 511.997001m-301.216175 301.216175a425.984 425.984 0 1 0 602.43235-602.43235 425.984 425.984 0 1 0-602.43235 602.43235Z"
          :fill="fillColor"
          p-id="12485"
          data-spm-anchor-id="a313x.search_index.0.i25.4f943a810DQ16G"
          class="selected"
        ></path>
        <path
          d="M266.24 427.7248l422.5024-103.5776a24.9856 24.9856 0 0 1 28.4672 34.9696l-188.2624 395.1616a24.9344 24.9344 0 0 1-46.08-3.072l-47.9744-149.4016a24.7808 24.7808 0 0 1 5.12-24.3712L522.24 486.4a6.6048 6.6048 0 0 0-8.192-10.24l-109.0048 63.6416a24.9856 24.9856 0 0 1-24.6272 0.3072L260.2496 473.8048a24.9856 24.9856 0 0 1 5.9904-46.08z"
          fill="#ffffff"
          p-id="12486"
          data-spm-anchor-id="a313x.search_index.0.i26.4f943a810DQ16G"
        ></path>
      </svg>

      <div class="button-text">发送</div>
    </button>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
// 暴露submitQuestion事件给父组件
const emit = defineEmits(["submitQuestion"]);
const questionText = ref("");
const button = ref(null);
const fillColor = ref("#dedede");

function submitQuestionButton() {
  if (isInValidInputText(questionText.value)) {
    return;
  }
  console.log(questionText.value + ".");
  emit("submitQuestion", questionText.value);
  questionText.value = "";
}

function submitQuestionEnter() {
  if (isInValidInputText(questionText.value)) {
    return;
  }
  console.log(questionText.value + ".");
  emit("submitQuestion", questionText.value);
  questionText.value = "";
}

// 判断输入内容是否合法
function isInValidInputText(questionText) {
  if (questionText === "") {
    return true;
  }
  for (let i = 0; i < questionText.length; i++) {
    const chatCode = questionText.charAt(i).charCodeAt(0);
    if (chatCode !== 10 && chatCode !== 13 && questionText.charAt(i) !== ' ') {
      return false;
    } 
  }
  return true;
}

watch(questionText, (val) => {
  if (isInValidInputText(val)) {
    fillColor.value = "#dedede";
    button.value.style.backgroundColor = "#dedede";
  } else {
    fillColor.value = "#10a37f";
    button.value.style.backgroundColor = "#10a37f";
  }
});
</script>

<style style scoped>
.inputBox {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 35px 0px 35px 0px;
  height: 15%;
  width: 90%;
  border-radius: 10px;
  border: 1px solid #dedede;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.03);
  flex-shrink: 0;
}

.textarea {
  height: 85%;
  width: 92%;
  background-color: #fff;
  color: #303030;
  font-family: inherit;
  padding: 10px 15px 10px 15px;
  resize: none;
  outline: none;
  box-sizing: border-box;
  min-height: 68px;
  font-size: 14px;
}

.button {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  align-self: end;
  background: #dedede;
  height: 36px;
  width: 66.5px;
  border-radius: 10px;
  margin-bottom: 13px;
  margin-right: 10px;
}

.icon-send {
  height: 30px;
  width: 30px;
}

.button-text {
  color: #ffffff;
  font-size: 14px;
  margin-top: 1px;
}
</style>