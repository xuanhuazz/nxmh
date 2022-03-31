<template>
  <div class="user">
    <div>
      <a href="">
        <img src="@/assets/logo.png" alt="" />
        <span>国资监管</span>
      </a>
    </div>
    <div>
      <a href="">
        <img src="@/assets/logo.png" alt="" />
        <span>国资监管</span>
      </a>
    </div>
    <div>
      <a href="">
        <img src="@/assets/logo.png" alt="" />
        <span>国资监管</span>
      </a>
    </div>
    <div>
      <a href="">
        <img src="@/assets/logo.png" alt="" />
        <span>国资监管</span>
      </a>
    </div>
    <div>
      <a href="">
        <img src="@/assets/logo.png" alt="" />
        <span>国资监管</span>
      </a>
    </div>
    <div>
      <a href="">
        <img src="@/assets/logo.png" alt="" />
        <span>国资监管</span>
      </a>
    </div>
    <div>
      <a href="">
        <img src="@/assets/logo.png" alt="" />
        <span>国资监管</span>
      </a>
    </div>
    <div>
      <a href="">
        <img src="@/assets/logo.png" alt="" />
        <span>国资监管</span>
      </a>
    </div>
    <div>
      <a href="">
        <img src="@/assets/logo.png" alt="" />
        <span>国资监管</span>
      </a>
    </div>
    <div>
      <a href="">
        <img src="@/assets/logo.png" alt="" />
        <span>国资监管</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "First",
};
</script>

<style lang="less" scoped>
.user {
  display: flex;
//   justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  
//   margin-top: 20px;
  div {
      width: 18%;
      height: 150px;
      display: flex;
      align-items: center;
      a {
        display: flex;
        flex-direction:column;
        align-items: center;
            span {
                margin-top: 10px;
            }
      }
  }
  img {
      width: 20%;
      height: 20%;
  }
}
</style>

