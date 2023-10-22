<script setup>
import ChatMessageBox from './components/ChatMessageBox.vue';
</script>

<template>
  <div class="mainContainer">
    <ChatMessageBox/>

    <div class="messageBox">
      <!-- logo -->
      <div class="logo-me">我</div>

      <!-- messageBody-->
      <div class="messageBody">
        <!-- messageContent-->
        <div class="messageText">你好</div>
      </div>
      <!-- messageTime-->
      <div class="messageTime">2023/10/22 17:48:20</div>
    </div>

    <div class="border-1 flex">
      <textarea class="textarea" placeholder="请输入你的问题"></textarea>
      <button class="flex button-size">
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
            d="M512.877641 511.997001m-301.216175 301.216175a425.984 425.984 0 1 0 602.43235-602.43235 425.984 425.984 0 1 0-602.43235 602.43235Z"
            fill="#1d93ab"
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
.icon-send {
  height: 30px;
  width: 30px;
}

.button-text {
  color: #ffffff;
  font-size: 14px;
  margin-top: 1px;
}

.textarea {
  height: 100px;
  width: 500px;
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

.button-size {
  justify-content: flex-start;
  align-items: center;
  align-self: end;
  background: #1d93ab;
  height: 36px;
  width: 66.5px;
  border-radius: 10px;
  margin-bottom: 13px;
  margin-right: 10px;
}

.border-1 {
  align-items: center;
  justify-content: space-evenly;
  margin-top: 35px;
  height: 120px;
  width: 600px;
  border-radius: 10px;
  border: 1px solid #dedede;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.03);
}

.mainContainer {
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 700px;
}

.messageBody {
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.05);
  padding: 10px;
  font-size: 14px;
  -webkit-user-select: text;
  -moz-user-select: text;
  user-select: text;
  word-break: break-word;
  border: 1px solid #dedede;
  padding: 10px;
  margin-top: 10px;
}

.messageBox {
  display: flex;
  flex-direction: column;
  align-self: start;
  margin-left: 455px;
}

.logo {
  margin-top: 10px;
}

.logo-me {
  margin-top: 10px;
  width: 30px;
  height: 30px;
  font-size: 14.3px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: #353740;
  color: #fff;
}

.messageTime {
  font-size: 12px;
  opacity: 0.2;
  white-space: nowrap;
  transition: all 0.6s ease;
  color: #353740;
  text-align: right;
  width: 100%;
  box-sizing: border-box;
  padding-left: 5px;
  pointer-events: none;
}
</style>
