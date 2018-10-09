<style lang="scss" scoped>
  .clearfix {
    clear: both;
    zoom: 1;

    &:before,
    &:after {
      content: '';
      display: table;
      clear: both;
      overflow: hidden;
      width: 0;
      height: 0;
    }
  }

  .container {
    margin: 0 30px;
  }

  .page-wrapper-main {
    .content-wrapper {
      padding: 100px 40px;
      h1 {
        font-size: 65px;
        color: #333333;
        line-height: 70px;
        font-weight: 500;
      }
      h3 {
        font-size: 22px;
        line-height: 20px;
        font-weight: 500;
      }
      .btn-group {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;
        padding: 50px 0;
        button {
          height: 40px;
          line-height: 40px;
          font-size: 16px;
          color: #333;
          text-align: center;
          padding: 0 15px;
          min-width: 115px;
          margin: 0 10px;
          color: #fff;
          border-radius: 5px;
          outline: none;
          box-shadow: none;
          text-shadow: none;
          border: 0;
          cursor: pointer;
          transition: all .35s;
          &.warn {
            background-color: #ff9900;
            border: 1px solid #ff9900;
            &:hover {
              background-color: #ff8800;
            }
          }
          &.primary {
            background-color: #448ef6;
            border: 1px solid #448ef6;
            position: relative;
            .qrcode-mask {
              position: absolute;
              transition: all .25s;
              visibility: hidden;
              opacity: 0;
              background-color: #fff;
              top: -100%;
              right: -50%;
              border-radius: 10px;
              border: 1px solid #eee;
              box-sizing: border-box;
              padding: 10px;
              width: 150px;
              height: 150px;
              img {
                width: 100%;
                height: 100%;
              }
            }
            &:hover {
              background-color: #1c75f3;
              .qrcode-mask {
                visibility: visible;
                right: -150%;
                opacity: 1;
              }
            }
          }
        }
        a {
          margin-left: 20px;
        }
      }
    }
  }

  .page-wrapper-footer {}
</style>
<template>
  <div class="page-wrapper">
    <div class="page-wrapper-main clearfix">
      <div class="content-wrapper">
        <h1>Wuss Weapp</h1>
        <h3>一款高质量，组件齐全，高自定义的微信小程序UI组件库</h3>
        <div class="btn-group">
          <button @click="handleClick" class="warn">开始使用</button>
          <button class="primary">
            扫描演示
            <div class="qrcode-mask">
              <img src="../qrcode.jpg" />
            </div>
          </button>
          <a target="_blank" href="https://github.com/phonycode/wuss"><img src="https://img.shields.io/github/stars/phonycode/wuss.svg?style=social" /></a>
        </div>
      </div>
    </div>
    <footer class="page-wrapper-footer clearfix">

    </footer>
  </div>
</template>

<script>
  export default {
    data() {
      return {};
    },

    watch: {},

    components: {},

    computed: {},

    methods: {
      handleClick() {
        window.location.href = '/wuss-weapp/quickstart.html' 
      },
    },

    mounted: function () {
      console.log('mounted')
    }
  }
</script>