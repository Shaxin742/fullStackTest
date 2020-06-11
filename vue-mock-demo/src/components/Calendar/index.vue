<!--
 * @Author: ShaXin
 * @Date: 2020-06-11 14:01:19
 * @LastEditors: ShaXin
 * @LastEditTime: 2020-06-11 14:16:14
 -->
<template>
  <div class="calendar">
    <ul>
      <li v-for="v in weeks" :key="v" class="weekCon">{{ v }}</li>
      <li
        v-for="(item,index) in data"
        :key="index"
        :class="[
          {notCurrentMonth: !isCurrentMonth(item.date)},
          {todayBg: isCurrentDay(item.date)},
          {selectDay: index===selectedIndex}
        ]"
        class="dayCon"
        @click="selectItem(item,index)"
        @dblclick="viewItem(item,index)"
      >
        <el-popover placement="top-start" width="200" trigger="hover">
          <p>详情</p>
          <p>详情</p>
          <p>详情</p>
          <section slot="reference" class="content">
            <p>{{ item.day }}</p>
          </section>
        </el-popover>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Calender',
  props: {
    data: {
      type: Array,
      default: () => []
    },

    timeVal: {
      type: [Date, String],
      required: true
    }
  },
  data: function() {
    return {
      weeks: ['一', '二', '三', '四', '五', '六', '日'],
      selectedIndex: -1,
      calendatArr: []
    }
  },
  watch: {
    timeVal(val) {
      this.selectedIndex = -1
    }
  },
  methods: {
    // 点击选中
    selectItem(item, index) {
      console.log(item, index)
      this.selectedIndex = index
      this.$set(this.selectedItem, item)
    },
    // 双点击选中
    viewItem(item, index) {
      console.log('view', item, index)
    },

    // 是否是当前月
    isCurrentMonth(date) {
      const timeVal = this.getNewDate(new Date(this.timeVal))
      const val = this.getDate(timeVal.year, timeVal.month, 1)
      const { year: currentYear, month: currentMonth } = this.getNewDate(val)
      const { year, month } = this.getNewDate(new Date(date))
      return currentYear === year && currentMonth === month
    },
    // 是否是今天
    isCurrentDay(date) {
      const {
        year: currentYear,
        month: currentMonth,
        day: currentDay
      } = this.getNewDate(new Date())
      const { year, month, day } = this.getNewDate(new Date(date))
      return (
        currentYear === year && currentMonth === month && currentDay === day
      )
    },
    getNewDate(date) {
      const year = date.getFullYear()
      const month = date.getMonth()
      const day = date.getDate()
      return { year, month, day }
    },
    // 转为时间
    getDate(year, month, day = 0) {
      return new Date(year, month, day)
    }
  }
}
</script>

<style lang='scss'>
.calendar {
  width: 100%;
  height: 100%;
  ul {
    margin: 0;
    clear: both;
    display: inline-block;
    padding: 0;
    width: 100%;
    li {
      list-style: none;
    }
    .weekCon {
      height: 40px;
      width: 14.285%;
      background: #aaa;
      color: white;
      float: left;
      line-height: 40px;
      text-align: center;
    }
    .dayCon {
      width: 14.285%;
      float: left;
      color: #666;
      height: 120px;
      text-align: right;
      border: 1px solid #ccc;
      position: relative;
      &.notCurrentMonth {
        background-image: linear-gradient(
          45deg,
          rgba(000, 000, 000, 0.03) 25%,
          transparent 25%,
          transparent 50%,
          rgba(000, 000, 000, 0.03) 50%,
          rgba(000, 000, 000, 0.03) 75%,
          transparent 75%,
          transparent
        );
        background-size: 20px 20px;
      }

      &.todayBg {
        background: yellow;
      }
      &.selectDay {
        background: blue;
        color: white;
      }
      .content {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
