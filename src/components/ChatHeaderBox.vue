<template>
    <div class="chat-header">
      <div class="header-text">聊天对话</div>
    </div>
  </template>
  
  <script setup>
  
  </script>
  
  <style scoped>
  .chat-header {
    height: 10%;
    width: 100%;
    display: flex;
    align-items: center;
    border-width: 0px 0px 1px 0px;
    border-style: solid;
    border-color: #dedede;
  }
  
  .header-text {
    font-size: 20px;
    font-weight: bolder;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #303030;
    margin-left: 20px;
  }
  </style>