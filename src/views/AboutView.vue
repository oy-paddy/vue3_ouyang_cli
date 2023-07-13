<script lang="ts" setup>
import selectDotIcon from '../assets/sign/select-dot-icon.png'
import dotIcon from '../assets/sign/dot-icon.png'
let signedId = ref(2)
</script>

<template>
  <div class="w-full">
    
  </div>
</template>


<script lang="ts">
import icon1 from '../assets/sign/practice-icon.png'
import icon2 from '../assets/sign/study-icon.png'
import icon3 from '../assets/sign/shoping-icon.png'
import icon4 from '../assets/sign/invite-icon.png'
function parsePath(path: string) {
  return new URL(path, import.meta.url).href
}
let taskList = ref([{
  id: 0,
  icon: icon1,
  title: '完成每日一练',
  desc: '完成每日一练可获得',
  score: 10,
  isDone: true,
  buttonText: '已完成',
  scoreText: '积分'
},
{
  id: 1,
  icon: icon2,
  title: '完成听课',
  desc: '每听完一堂课可获得',
  score: 10,
  isDone: false,
  buttonText: '去听课',
  scoreText: '积分'
},
{
  id: 2,
  icon: icon3,
  title: '购物返积分',
  desc: '购买后确认收货后可获得',
  score: 15,
  isDone: false,
  buttonText: '去购物',
  scoreText: '积分'
},
{
  id: 3,
  icon: icon4,
  title: '邀请好友送积分',
  desc: '邀请好友进入小程序获得',
  score: 30,
  isDone: false,
  buttonText: '去邀请',
  scoreText: '积分/人'
}
])
let signScoreList = ref([{
  id: 1,
  score: 5,
  day: 1,
  isSign: false, //当前是签到状态
  isGift: false, //是否显示礼物图标
}, {
  id: 2,
  score: 10,
  day: 2,
  isSign: false, //当前是签到状态
  isGift: false, //是否显示礼物图标
}, {
  id: 3,
  score: 10,
  day: 3,
  isSign: false, //当前是签到状态
  isGift: true, //是否显示礼物图标
}, {
  id: 4,
  score: 10,
  day: 4,
  isSign: false, //当前是签到状态
  isGift: false, //是否显示礼物图标
}, {
  id: 5,
  score: 20,
  day: 5,
  isSign: false, //当前是签到状态
  isGift: false, //是否显示礼物图标
}, {
  id: 6,
  score: 20,
  day: 6,
  isSign: false, //当前是签到状态
  isGift: false, //是否显示礼物图标
},
{
  id: 7,
  score: 20,
  day: 7,
  isSign: false, //当前是签到状态
  isGift: true, //是否显示礼物图标
},
])
</script>

<style lang="scss">
.page {
  width: 750px;
  min-height: 100vh;
  background: #F5F5F5;


}

.top-bg-wrap {
  width: 750px;
  height: 378px;
  background: linear-gradient(360deg, rgba(250, 92, 54, 0) 0%, #F55535 20%, #DF3B32 100%);
  padding-left: 25px;
  position: relative;
  box-sizing: border-box;

  .bg-title {
    font-size: 34px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #FFFFFF;
    padding-top: 66px;
  }

  .bg-desc {
    font-size: 48px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #FFFFFF;
    margin-top: 14px;
  }

  .sign-icon {
    height: 326px;
    width: auto;
    position: absolute;
    right: 0;
    top: 0;
  }


  .sign-card-wrap {
    width: 700px;
    height: 500px;
    background: #FFFFFF;
    border-radius: 16px;

    position: absolute;
    left: 25px;
    top: 250px;

    .sign-card-top-wrap {
      width: 700px;
      height: 88px;
      background: linear-gradient(90deg, #FDF7E7 0%, #F8E4C4 100%);
      border-radius: 16px 16px 0px 0px;

      padding-left: 38px;
      line-height: 88px;
      box-sizing: border-box;

      font-size: 28px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #795216;
    }

    .total-score-wrap {
      font-size: 34px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #000000;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 30px 30px 40px 30px;

      .score-text {
        color: #DD402E;
      }

      .join-btn {
        height: 48px;
        border-radius: 32px;
        border: 2px solid #DD402E;
        box-sizing: border-box;
        text-align: center;
        line-height: 48px;

        font-size: 28px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #DD402E;
      }
    }

    .sign-progress-wrap {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 30px;
      position: relative;
      // .step-line{
      // 	width: 570px;
      // 	height: 1px;
      // 	background: #F3F3F3;
      // 	position: absolute;
      // 	left: 64px;
      // 	top: 104px;
      // 	// top: 106px;
      // 	z-index: 1;

      // }


      .sign-progress {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 24px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #878B9D;
        position: relative;
        z-index: 2;

        .circle {
          width: 70px;
          height: 70px;
          background: #FDF2F1;
          border-radius: 50%;

          display: flex;
          align-items: center;
          justify-content: center;

          font-size: 26px;
          font-family: AppleSystemUIFont;
          color: #DD402E;


        }

        .step-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          // width: 570px;
          position: relative;

          margin-top: 28px;
          margin-bottom: 6px;



          .step-line {
            position: absolute;
            // width: 570px;
            width: 95px;
            height: 1px;
            background: #F3F3F3;
            top: 7px;
            left: 7px;


          }
        }

        .circle-icon {
          width: 14px;
          height: 14px;
          position: relative;

          // &::after {
          // 	content: "";
          // 	position: absolute;
          // 	top: 0;
          // 	left: 0;
          // 	width: 95px;
          // 	height: 1px;
          // 	background: #F3F3F3;
          // 	z-index: 99;
          // }
        }

        .gift-icon {
          width: 42px;
          height: 42px;
        }


      }

      .signed-progress {
        @extend .sign-progress;


        .step-wrap {

          .step-line {
            position: absolute;
            // width: 570px;
            width: 95px;
            height: 1px;
            background: #DD402E;
            top: 7px;
            left: 7px;
          }
        }

        .circle {
          background: #DD402E;
          color: #FFFFFF;


          .circle-icon {
            // &::after {
            // 	content: "";
            // 	position: absolute;
            // 	top: 50%;
            // 	left: 50%;
            // 	width: 95px;
            // 	border: 1px solid #DD402E;
            // }

            // &::after {
            // 	content: "";
            // 	position: absolute;
            // 	top: 0;
            // 	left: 0;
            // 	width: 95px;
            // 	height: 1px;
            // 	background: #DD402E;
            // }
          }


        }
      }
    }

    .sign-btn {
      width: 480px;
      height: 72px;
      border-radius: 42px;
      border: 2px solid;
      box-sizing: border-box;
      text-align: center;
      line-height: 72px;

      font-size: 32px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #DD402E;

      margin-left: 110px;
      margin-top: 40px;
      margin-bottom: 40px;
    }

    .signed-btn {
      @extend .sign-btn;
      border-color: #C5C5C5;
      color: #A5A5A5;
    }

  }
}

.task-wrap {
  margin-top: 400px;

  .task-title {
    font-size: 34px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #333333;
    margin-left: 34px;
    margin-bottom: 32px;
  }

  .task-menus {
    width: 700px;
    background: #FFFFFF;
    border-radius: 10px;
    margin-left: 25px;

    .task-item-wrap {
      height: 130px;
      margin: 0 25px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #EEEEEE;
      ;
      box-sizing: border-box;

      image {
        width: 80px;
        height: 80px;
        margin-right: 24px;
      }

      .left-wrap {
        display: flex;
        align-items: center;

        .task-content-wrap {
          .title {
            font-size: 30px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #333333;
          }

          .desc {
            font-size: 24px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #999999;
          }

          .score {
            color: #F0110C;
          }
        }

      }

      .done-btn {
        width: 122px;
        height: 56px;
        border-radius: 28px;
        border: 1px solid #ACACAC;

        font-size: 26px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #AFAFAF;
        text-align: center;
        line-height: 56px;
        box-sizing: border-box
      }

      .task-btn {
        @extend .done-btn;
        border: 1px solid #F0110C;
        color: #F3322D;
      }
    }
  }
}
</style>
