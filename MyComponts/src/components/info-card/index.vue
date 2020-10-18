<template>
  <div class="info-card-container">
    <van-image :src="img" :alt="title" />
    <div class="content">
      <div class="title">{{ title }}</div>
      <div class="desc">{{ desc }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    desc: {
      type: String,
      default: ''
    },
    img: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="less" scoped>
.info-card-container {
  display: flex;
  background-color: rgb(240, 244, 247);
  border-radius: 10px;
  padding: 10px 30px;
  .van-image {
    width: 80px;
    height: 80px;
  }
  .content {
    flex: 1;
    padding: 20px 0 0 15px;
    color: #6d75e0;
    line-height: 1.2em;
    .title {
      font-size: 14px;
    }
    .desc {
      color: #7b94c1;
      margin-top: 4px;
      font-size: 10px;
    }
  }
}
.info-card-container:active {
  background-color: rgb(236, 237, 238);
  box-shadow: 2px 2px 2px rgb(223, 227, 230);
}
</style>
