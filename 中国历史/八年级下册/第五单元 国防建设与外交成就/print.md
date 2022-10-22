
  <style>
  #title {
    padding-top: 40%;
    font-size: 96px;
    padding-bottom: 24%;
  }

  #ending {
    padding-top: 60%;
    font-size: 48px;
    padding-bottom: 12%;
  }

  .center {
    text-align: center;
  }
  .right {
    text-align: right;
  }

  #inform {
    padding-right: 8%;
    font-size: 18px;
  }

  .topic {
    padding-top: 12%;
    padding-bottom: 8%;
    font-size: 48px;
  }
</style>
<div class="center">
  <div id="title">{{ printTitle }}</div>
</div>
<div class="right">
  <p id="inform">姓名：________________</p>
  <p id="inform">学号：________________</p>
  <p id="inform">班级：________________</p>
  <p id="inform">学校：________________</p>

  <hr />
  <div>
    {{ printDate }}<br />
    制作：<a href="https://github.com/7086cmd/">7086cmd</a><br />
    仓库地址：<a href="https://github.com/7086cmd/politics-history-summary"
      >https://github.com/7086cmd/politics-history-summary</a
    >
  </div>
</div>


<div class="divider_top"></div>

<div class="divider_top"></div>

<div class="center">
  <div class="topic">目录</div>
</div>

    - [第五单元 国防建设与外交成就](#第五单元-国防建设与外交成就)<br>
      - [第 15 课 钢铁长城](#第-15-课-钢铁长城)<br>
      - [第 16 课 独立自主的和平外交](#第-16-课-独立自主的和平外交)<br>
      - [第 17 课 外交事业的发展](#第-17-课-外交事业的发展)<br>

<div class="divider"></div>


### 第五单元 国防建设与外交成就

---

#### 第 15 课 钢铁长城

1. 导弹部队的地位：<u>中国战略威慑的核心力量</u>
2. 中国人民解放军调整组建五大军种：<u>陆军 、海军 、空军 、火箭军、战略支援部队</u>

---

#### 第 16 课 独立自主的和平外交

1. 和平共处五项原则是在<u>1953</u>年底，周恩来在接见印度代表团时首次提出，它的内容是<u>互相尊重主权和领土完整</u>、<u>互不侵犯</u>、<u>互不干涉内政</u>、<u>平等互利</u>、<u>和平共处</u>。它的意义是<u>在国际上产生深远影响，被世界上越来越多的国家接受，成为处理国与国之间关系的基本准则。</u>
2. 万隆会议的时间<u>1955 年</u><br>特点：<u>第一次没有西方殖民主义国家</u>参加的会议<br>会上周恩来提出<u>“求同存异”</u>方针。
3. 我国的外交原则：<u>和平共处五项原则等</u><br>
   我国的外交政策：<u>独立自主的和平外交政策</u>
4. 例举三例史实说明 20 世纪 50 年代新中国的外交成就
    1. <u>1953 年，周恩来首次提出和平共处五项原则；</u>
    2. <u>1954 年，第一次以五国之一的身份参加日内瓦国际会议；</u>
    3. <u>1955 年，参加万隆会议，提出“求同存异”方针。</u>

---

#### 第 17 课 外交事业的发展

1. 列举两例史实说明 20 世纪 70 年代新中国的外交成就
    1. <u>1971 年，恢复在联合国的合法席位</u>
    2. <u>1979 年中美建交、1972 年中日建交</u>
2. 改革开放以来，我国的外交布局<u>全方位</u>、<u>多层次</u>、<u>立体化</u>。
3. 列举三例史实说明改革开放以来新中国的外交成就<br>
   <u>中国举办“一带一路”国际合作高峰论坛、亚太经合组织领导人非正式会议、二十国集团领导人峰会、金砖国家领导人厦门会晤、亚信峰会等重要国际会议</u>

---

<div class="divider"></div>

<div class="divider"></div>

# 版权声明

作者: [7086cmd](https://github.com/7086cmd).<br>

<p style="font-size: 24px">
本文遵循 <code>CC BY-NC-SA 4.0</code> 协议。未经允许，请勿擅自改动、商用这些内容，并且若转载请注明出处。
</p>

<script setup>
import { ref } from "vue";

const printTitle = ref(new URL(location.href).pathname === '/print' ? "政史地总资料" : document.title
.split("|")[0]
.trim());

const printDate = ref(`导出日期：${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`);

</script>

<div class="divider_top"></div>

<div class="center">
  <div id="ending">初中政史地提纲整理</div>
</div>

<div class="right">
  <p>未经作者许可禁售。</p>
</div>
