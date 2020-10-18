<template>
  <div class="info-board-container">
    <div class="contain">
      <span class="title">
        {{ title }}
      </span>
    </div>
    <div class="foot">
      <img src="@/assets/icons/跳转.png" :alt="toLink" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    toLink: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="less" scoped>
.info-board-container {
  //height: 100px;
  width: 90%;
  background-color: rgb(237, 237, 237);
  box-shadow: 8px 8px 5px rgb(212, 212, 212);
  margin: 15px;
  display: flex;
  border-radius: 15px;
  .contain {
    flex: 1;
    display: flex;
    line-height: 1.2em;
    color: black;
    padding: 20px 0 25px 20px;
    align-items: center;
  }
  .foot {
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-end;
    padding: 0 10px 10px 0;
    img {
      width: 10px;
      height: 10px;
    }
  }
}
</style>
