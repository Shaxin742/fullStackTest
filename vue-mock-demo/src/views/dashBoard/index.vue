<!--
 * @Author: ShaXin
 * @Date: 2020-05-26 16:56:10
 * @LastEditors: ShaXin
 * @LastEditTime: 2020-06-11 10:36:57
 -->
<template>
  <div class="dashboard-container">
    <div class="win10Cal">
      <ul>
        <li
          v-for="v in weeks"
          :key="v"
          class="weekCon"
        >
          {{ v }}
        </li>
        <li
          v-for="(item,index) in calendatArr"
          :key="index"
          :class="[
            {notCurrentMonth: !isCurrentMonth(item.date)},
            {todayBg: isCurrentDay(item.date)},
            {selectDay: index===selectedIndex},
            {hover1: hover1Index===index},
            {hover2: hover2Index===index},
            {hover3: hover3Index===index},
            {hover4: hover4Index===index},
            {hover5: hover5Index===index},
            {hover6: hover6Index===index},
            {hover7: hover7Index===index},
            {hover8: hover8Index===index},
            {hover9: hover9Index===index}
          ]"
          class="dayCon"
          @click="selectItem(item,index)"
          @dblclick="viewItem(item,index)"
          @mouseover="hoverItem(item,index)"
        >
          <span>{{ item.day }}</span>
          <span>{{ GetLunarDay(item.year,item.month,item.day) }}</span>
        </li>
      </ul>
    </div>

    <div style="height:20px">
      --------
      {{ GetLunarDay(2020,1,13) }}----------
    </div>

    <div class="dashboard-text">
      vuex测试: {{ name }}
    </div>
    <el-date-picker
      v-model="timeVal"
      type="date"
      placeholder="选择日期"
    />
    <div class="calendar">
      <ul>
        <li
          v-for="v in weeks"
          :key="v"
          class="weekCon"
        >
          {{ v }}
        </li>
        <li
          v-for="(item,index) in calendatArr"
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
          <el-popover
            placement="top-start"
            width="200"
            trigger="hover"
          >
            <p>详情</p>
            <p>详情</p>
            <p>详情</p>
            <section
              slot="reference"
              class="content"
            >
              <p>{{ item.day }}</p>
            </section>
          </el-popover>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getCalender } from '@/api/dashBoard'
import { mapGetters } from 'vuex'
import { cloneDeep } from 'lodash'
export default {
  name: 'Dashboard',
  data() {
    return {
      weeks: ['一', '二', '三', '四', '五', '六', '日'],
      timeVal: '',
      calendatArr: [],
      selectedIndex: -1,
      selectedItem: {},
      hover1Index: -1,
      hover2Index: -1,
      hover3Index: -1,
      hover4Index: -1,
      hover5Index: -1,
      hover6Index: -1,
      hover7Index: -1,
      hover8Index: -1,
      hover9Index: -1
    }
  },
  computed: {
    ...mapGetters(['name'])
  },
  watch: {
    timeVal(val) {
      this.selectedIndex = -1
      this.getCalender(this.getNewDate(val))
    }
  },
  mounted() {
    this.timeVal = new Date()
  },
  methods: {
    getNewDate(date) {
      const year = date.getFullYear()
      const month = date.getMonth()
      const day = date.getDate()
      return { year, month, day }
    },
    // 转为时间
    getDate(year, month, day = 0) {
      return new Date(year, month, day)
    },
    async getCalender(data) {
      const params = {
        date: data
      }
      const res = await getCalender(params)
      console.log(res)
      this.calendatArr = cloneDeep(res.data)
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
    hoverItem(item, index) {
      this.hover1Index = index - 8
      this.hover2Index = index - 7
      this.hover3Index = index - 6
      this.hover4Index = index - 1
      this.hover5Index = index
      this.hover6Index = index + 1
      this.hover7Index = index + 6
      this.hover8Index = index + 7
      this.hover9Index = index + 8
      if (index % 7 === 0) {
        this.hover1Index = this.hover4Index = this.hover7Index = -1
      }
      if ((index + 1) % 7 === 0) {
        this.hover3Index = this.hover6Index = this.hover9Index = -1
      }
      if (index < 0) {
        this.hover1Index = this.hover2Index = this.hover3Index = -1
      }
      if (this.calendatArr.length - index < 8) {
        this.hover7Index = this.hover8Index = this.hover9Index = -1
      }
    },
    GetBit(m, n) {
      return (m >> n) & 1
    },
    GetLunarDay(solarYear, solarMonth, solarDay) {
      solarMonth = parseInt(solarMonth) > 0 ? solarMonth - 1 : 11
      this.e2c(solarYear, solarMonth, solarDay)
      return this.GetcDateString(solarDay)
    },

    GetcDateString(cDay) {
      var tmp = ''
      const numString = '一二三四五六七八九十'
      tmp += cDay < 11 ? '初' : cDay < 20 ? '十' : cDay < 30 ? '廿' : '三十'
      if (cDay % 10 !== 0 || cDay === 10) {
        tmp += numString.charAt((cDay - 1) % 10)
      }
      return tmp
    },

    e2c(year, month, day) {
      const madd = new Array(12)
      const CalendarData = [
        0xa4b,
        0x5164b,
        0x6a5,
        0x6d4,
        0x415b5,
        0x2b6,
        0x957,
        0x2092f,
        0x497,
        0x60c96,
        0xd4a,
        0xea5,
        0x50da9,
        0x5ad,
        0x2b6,
        0x3126e,
        0x92e,
        0x7192d,
        0xc95,
        0xd4a,
        0x61b4a,
        0xb55,
        0x56a,
        0x4155b,
        0x25d,
        0x92d,
        0x2192b,
        0xa95,
        0x71695,
        0x6ca,
        0xb55,
        0x50ab5,
        0x4da,
        0xa5b,
        0x30a57,
        0x52b,
        0x8152a,
        0xe95,
        0x6aa,
        0x615aa,
        0xab5,
        0x4b6,
        0x414ae,
        0xa57,
        0x526,
        0x31d26,
        0xd95,
        0x70b55,
        0x56a,
        0x96d,
        0x5095d,
        0x4ad,
        0xa4d,
        0x41a4d,
        0xd25,
        0x81aa5,
        0xb54,
        0xb6a,
        0x612da,
        0x95b,
        0x49b,
        0x41497,
        0xa4b,
        0xa164b,
        0x6a5,
        0x6d4,
        0x615b4,
        0xab6,
        0x957,
        0x5092f,
        0x497,
        0x64b,
        0x30d4a,
        0xea5,
        0x80d65,
        0x5ac,
        0xab6,
        0x5126d,
        0x92e,
        0xc96,
        0x41a95,
        0xd4a,
        0xda5,
        0x20b55,
        0x56a,
        0x7155b,
        0x25d,
        0x92d,
        0x5192b,
        0xa95,
        0xb4a,
        0x416aa,
        0xad5,
        0x90ab5,
        0x4ba,
        0xa5b,
        0x60a57,
        0x52b,
        0xa93,
        0x40e95
      ]
      madd[0] = 0
      madd[1] = 31
      madd[2] = 59
      madd[3] = 90
      madd[4] = 120
      madd[5] = 151
      madd[6] = 181
      madd[7] = 212
      madd[8] = 243
      madd[9] = 273
      madd[10] = 304
      madd[11] = 334
      const TheDate = new Date(year, month, day)
      var total, m, n, k
      var isEnd = false
      var tmp = TheDate.getYear()
      if (tmp < 1900) {
        tmp += 1900
      }
      total =
          (tmp - 1921) * 365 +
          Math.floor((tmp - 1921) / 4) +
          madd[TheDate.getMonth()] +
          TheDate.getDate() -
          38

      if (TheDate.getYear() % 4 === 0 && TheDate.getMonth() > 1) {
        total++
      }
      for (m = 0; ; m++) {
        k = CalendarData[m] < 0xfff ? 11 : 12
        for (n = k; n >= 0; n--) {
          if (total <= 29 + this.GetBit(CalendarData[m], n)) {
            isEnd = true
            break
          }
          total = total - 29 - this.GetBit(CalendarData[m], n)
        }
        if (isEnd) break
      }
      let cMonth = k - n + 1
      if (k === 12) {
        if (cMonth === Math.floor(CalendarData[m] / 0x10000) + 1) {
          cMonth = 1 - cMonth
        }
        if (cMonth > Math.floor(CalendarData[m] / 0x10000) + 1) {
          cMonth--
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
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

.win10Cal {
  ul {
    background: #1a1a1a;
    display: inline-block;
    width: 360px;
    height: 320px;
    font-size: 0;
    margin: 0;
    text-align: center;
    padding: 0;
    li {
      display: inline-block;
      width: 45px;
      height: 45px;
      font-size: 12px;
      box-sizing: border-box;
      margin: 3px;
      color: #eee;
      padding: 3px;
      span {
        display: inline-block;
        margin: 0px;
        width: 100%;
        padding: 0;
      }

      &.notCurrentMonth{
        color: #666;
      }

      &.todayBg {
        span {
          background: blue;
          // border: 1px solid blue;
        }
      }

      &.selectDay {
        border: 1px solid blue;
        color: white;
      }

      &.hover1 {
        background-image: radial-gradient(63px at 63px 63px, #3c3c3c, #1a1a1a);
        border:1px solid #ddd;
        border-image: linear-gradient(to left top,#23b7cb 0%,#1a1a1a 40%) 3 1;;
      }

      &.hover2 {
        background-image: radial-gradient(63px at 21px 63px, #3c3c3c, #1a1a1a);
        border:1px solid #ddd;
        border-image: linear-gradient(to bottom,#000718,#23b7cb) 1 10;;
      }

      &.hover3 {
        background-image: radial-gradient(63px at -21px 63px, #3c3c3c, #1a1a1a);
        border:1px solid #ddd;
        border-image: linear-gradient(to right top,#23b7cb 0%,#1a1a1a 40%) 3 1;;
      }

      &.hover4 {
        background-image: radial-gradient(63px at 63px 21px, #3c3c3c, #1a1a1a);
        border:1px solid #ddd;
        border-image: linear-gradient(to right,#000718,#23b7cb) 1 10;;
      }

      &.hover5 {
        background: #3c3c3c;
        color: white;
        border:1px solid #23b7cb;
      }

      &.hover6 {
        background-image: radial-gradient(63px at -21px 21px, #3c3c3c, #1a1a1a);
        border:1px solid #ddd;
        border-image: linear-gradient(to left,#000718,#23b7cb) 1 10;;
      }

      &.hover7 {
        background-image: radial-gradient(63px at 63px -21px, #3c3c3c, #1a1a1a);
        border:1px solid #ddd;
        border-image: linear-gradient(to left bottom,#23b7cb 0%,#1a1a1a 40%) 3 1;;
      }

      &.hover8 {
        background-image: radial-gradient(63px at 21px -21px, #3c3c3c, #1a1a1a);
        border:1px solid #ddd;
        border-image: linear-gradient(to top,#000718,#23b7cb) 1 10;;
      }

      &.hover9 {
        background-image: radial-gradient(63px at -21px -21px, #3c3c3c, #1a1a1a);
        border:1px solid #ddd;
        border-image: linear-gradient(to right bottom,#23b7cb 0%,#1a1a1a 40%) 3 1;;
      }
    }
  }
}
</style>
