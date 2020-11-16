<template>
  <div class="luckDraw">
    <!-- <title-bar :title="title" /> -->
    <div class="container">
      <div class="turntable-wrapper">
        <div class="luck-wrapper">
          <p class="integral">
            我的积分:
            <span>1000</span>
          </p>
          <ul class="nineGrid">
            <li class="row">
              <div v-for="(n, key) in 3" :key="n" :class="index === key ? `active` : ``">
                <div class="wrapper">
                  <!-- <img src="../../assets/luck-icon.png" alt> -->
                  <p>8金转</p>
                </div>
                <div class="mask" />
              </div>
            </li>
            <li class="row">
              <div :class="index === 7 ? 'active': ''">
                <div class="wrapper">
                  <!-- <img src="../../assets/luck-icon.png" alt> -->
                  <p>128金转</p>
                </div>
                <div class="mask" />
              </div>
              <div class="getLuck" @click="startLottery">
                <p>
                  立即
                  <br>抽奖
                </p>
              </div>
              <div :class="index === 3 ? 'active': ''">
                <div class="wrapper">
                  <!-- <img src="../../assets/luck-icon.png" alt> -->
                  <p>128金转</p>
                </div>
                <div class="mask" />
              </div>
            </li>
            <li class="row">
              <div v-for="(n, key) in 3" :key="n" :class="index === 6-key ? `active` : ``">
                <div class="wrapper">
                  <!-- <img src="../../assets/luck-icon.png" alt> -->
                  <p>256金转</p>
                </div>
                <div class="mask" />
              </div>
            </li>
          </ul>
        </div>
        <div />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "LuckDraw",
  props: {},

  data() {
    return {
      index: -1, // 当前转动到哪个位置，起点位置
      count: 8, // 总共有多少个位置
      timer: 0, // 每次转动定时器
      speed: 200, // 初始转动速度
      times: 0, // 转动次数
      cycle: 50, // 转动基本次数：即至少需要转动多少次再进入抽奖环节
      prize: -1, // 中奖位置
      click: true,
    };
  },

  methods: {
    // 开始抽奖
    startLottery() {
      if (!this.click) {
        return;
      }
      this.speed = 200;
      this.click = false;
      this.startRoll();
    },

    // 开始转动
    startRoll() {
      this.times += 1; // 转动次数
      this.oneRoll(); // 转动过程调用的每一次转动方法，这里是第一次调用初始化

      // 如果当前转动次数达到要求 && 目前转到的位置是中奖位置
      if (this.times > this.cycle + 10 && this.prize === this.index) {
        clearTimeout(this.timer); // 清除转动定时器，停止转动
        this.prize = -1;
        this.times = 0;
        this.click = true;
      } else {
        if (this.times < this.cycle) {
          this.speed -= 10; // 加快转动速度
        } else if (this.times === this.cycle) {
          // 随机获得一个中奖位置
          const index = parseInt(Math.random() * 10, 0) || 0;
          this.prize = index;
          if (this.prize > 7) {
            this.prize = 7;
          }
          console.log(`中奖位置${this.prize}`);
        } else if (
          this.times > this.cycle + 10 &&
          ((this.prize === 0 && this.index === 7) ||
            this.prize === this.index + 1)
        ) {
          this.speed += 110;
        } else {
          this.speed += 20;
        }

        if (this.speed < 40) {
          this.speed = 40;
        }
        this.timer = setTimeout(this.startRoll, this.speed);
      }
    },

    // 每一次转动
    oneRoll() {
      let index = this.index; // 当前转动到哪个位置
      const count = this.count; // 总共有多少个位置
      index += 1;
      if (index > count - 1) {
        index = 0;
      }
      this.index = index;
    },
  }
};
</script>

<style lang='scss' scoped>
.luckDraw {
  .turntable-wrapper {
    padding: 0 38px;
    position: relative;
    //@include background-cover("background-luck.png");
    padding-top: 121px;

    .luck-wrapper {
      width: 300px;
      height: 377px;
      margin: 0 auto;
      position: relative;
      //@include background-cover("background-turntable.png");

      .integral {
        width: 100%;
        color: #6d2d00;
        font-size: 16px;
        font-weight: normal;
        text-align: center;
        position: absolute;
        top: 58px;

        span {
          font-weight: 600;
          color: #ff2f4d;
        }
      }

      .nineGrid {
        position: absolute;
        top: 86px;
        left: 50%;
        margin-left: -130px;
        width: 260px;
        height: 260px;

        li {
          height: 80px;
          display: flex;
          margin-top: 5px;

          div {
            flex: 1;
            margin-right: 5px;
            height: 100%;
            text-align: center;
            position: relative;

            .wrapper {
              width: 100%;
              height: 100%;
              margin: 0;
              //@include background-cover("background-grid.png");
            }

            img {
              width: 46px;
              height: 38px;
              vertical-align: middle;
              margin-top: 8px;
            }

            .mask {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              opacity: 0.5;
              border-radius: 10px;
              background-color: #000;
              display: none;
            }
          }

          div.active {
            .mask {
              display: block;
            }
          }

          div:first-child {
            margin-left: 5px;
          }

          div.getLuck {
            //@include background-cover("background-getLuck.png");
            font-size: 0px;

            p {
              font-size: 20px;
              font-weight: 600;
              line-height: 1.1;
              margin-top: 11px
            }
          }
        }

        li:last-child {
          margin-bottom: 5px;
        }
      }
    }

    .share {
      width: 160px;
      height: 42px;
      margin: 0 auto;
      text-align: center;
      line-height: 42px;
      //@include background-cover("luckShrae.png");
      margin-top: 22px;
      color: #6d2d00;
      font-size: 16px;
      font-weight: 600;

      .icon-go {
        //@include size(30);
        //@include background-cover("goShare-icon.png");

        display: inline-block;
        vertical-align: middle;
        margin-bottom: 2px;
      }
    }

    .rule {
      margin-top: 14px;
      color: #fff;
      font-size: 14px;
      padding-bottom: 39px;

      .rule-title {
        text-align: center;
        position: relative;
        font-size: 16px;
        margin-bottom: 14px;
      }

      .rule-title:before,
      .rule-title:after {
        content: "";
        position: absolute;
        top: 52%;
        background: #fff;
        width: 30%;
        height: 1px;
      }

      .rule-title:before {
        left: 0;
      }

      .rule-title:after {
        right: 0;
      }
    }
  }
}
</style>
