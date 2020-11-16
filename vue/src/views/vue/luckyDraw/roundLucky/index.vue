<template>
  <div class="roundLucky">
    <h1>剩余抽奖次数：{{ num }}</h1>
    <round-turntable
      ref="roundTurntable"
      :prize-data="prizeData"
      :rotate-circle="rotateCircle"
      :during-time="duringTime"
      :turntable-style-option="turntableStyleOption"
      class="turntable"
      @endRotation="endRotation"
    >
      <template slot="item" slot-scope="scope">
        <div class="turntable-name">
          {{ scope.item.prizeName }}
        </div>
        <div class="turntable-img">
          <img :src="scope.item.prizeImg">
        </div>
      </template>
    </round-turntable>
    <div class="pointer" @click="startRotation" />
  </div>
</template>

<script>
import roundTurntable from "./roundLucky";
export default {
  name: "App",
  components: {
    roundTurntable
  },
  data() {
    return {
      // 转盘上的奖品数据
      prizeData: [
        {
          id: 1,
          prizeName: "2000元京东券",
          prizeImg:
            "http://demo.sc.chinaz.net/Files/DownLoad/webjs1/201803/jiaoben5789/images/1.png"
        },
        {
          id: 2,
          prizeName: "300元京东券",
          prizeImg:
            "http://demo.sc.chinaz.net/Files/DownLoad/webjs1/201803/jiaoben5789/images/7.png"
        },
        {
          id: 3,
          prizeName: "50个比特币",
          prizeImg:
            "http://demo.sc.chinaz.net/Files/DownLoad/webjs1/201803/jiaoben5789/images/3.png"
        },
        {
          id: 4,
          prizeName: "50元话费券",
          prizeImg:
            "http://demo.sc.chinaz.net/Files/DownLoad/webjs1/201803/jiaoben5789/images/4.png"
        },
        {
          id: 5,
          prizeName: "100元话费券",
          prizeImg:
            "http://demo.sc.chinaz.net/Files/DownLoad/webjs1/201803/jiaoben5789/images/5.png"
        },
        {
          id: 6,
          prizeName: "100个比特币",
          prizeImg:
            "http://demo.sc.chinaz.net/Files/DownLoad/webjs1/201803/jiaoben5789/images/6.png"
        }
      ],
      // 转动的圈数
      rotateCircle: 6,
      // 转动需要持续的时间（s）
      duringTime: 4.5,
      // 转盘样式的选项
      turntableStyleOption: {
        // 背景色
        prizeBgColors: [
          "#AE3EFF",
          "#4D3FFF",
          "#FC262C",
          "#3A8BFF",
          "#EE7602",
          "#FE339F"
        ],
        // 转盘的外边框颜色
        borderColor: "#199301"
      },
      // 中奖的奖品的index
      prizeIndex: -1,
      // 用来锁定转盘，避免同时多次点击转动
      isLocking: false,
      // 剩余抽奖次数
      num: 2
    };
  },
  methods: {
    startRotation() {
      // 如果还不可以转动
      if (!this.canBeRotated()) {
        return false;
      }
      // 开始转动
      // 先上锁
      this.isLocking = true;
      // 设置在哪里停下，应该与后台交互，这里随机抽取0~5
      const index = Math.floor(Math.random() * this.prizeData.length);
      // 成功后次数减少一次
      this.num--;
      this.prizeIndex = index;
      // 告诉子组件，开始转动了
      this.$refs.roundTurntable.rotate(index);
    },
    // 已经转动完转盘触发的函数
    endRotation() {
      // 提示中奖
      alert(
        `恭喜您获奖啦,您的奖品是：${this.prizeData[this.prizeIndex].prizeName}`
      );
      // 解锁
      this.isLocking = false;
    },
    // 判断是否可以转动
    canBeRotated() {
      if (this.num <= 0) {
        alert("已经木有次数了！");
        return false;
      }
      if (this.isLocking) {
        return false;
      }
      return true;
    }
  }
};
</script>

<style lang="scss" >
.roundLucky {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  .turntable {
    position: absolute;
    left: calc(50% - 200px);
    top: calc(50% - 200px);
    width: 400px;
    height: 400px;
  }
  .turntable-name {
    /*background: pink;*/
    position: absolute;
    left: 10px;
    top: 20px;
    width: calc(100% - 20px);
    font-size: 26px;
    text-align: center;
    color: #fff;
  }
  .turntable-img {
    position: absolute;
    /*要居中就要50% - 宽度 / 2*/
    left: calc(50% - 80px / 2);
    top: 60px;
    width: 80px;
    height: 80px;
    img {
      display: inline-block;
      width: 100%;
      height: 100%;
    }
  }
  .pointer {
    position: absolute;
    left: calc(50% - 46px);
    top: calc(50% - 50px);
    width: 100px;
    height: 100px;
    background-image: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605523204063&di=fbd447587088ad0461779a6eebe21de0&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Felement_pic%2F19%2F04%2F09%2F1c6ddd330a9b932dcadfd2af7ed6d0c8.jpg");
    background-size: contain;
    background-repeat: no-repeat;
  }
}
</style>
