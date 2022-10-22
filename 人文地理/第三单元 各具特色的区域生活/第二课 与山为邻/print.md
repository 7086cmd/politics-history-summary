
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

    - [第二课 与山为邻](#第二课-与山为邻)<br>
      - [第一框 垂直的生计](#第一框-垂直的生计)<br>
      - [第二框 山地之国](#第二框-山地之国)<br>

<div class="divider"></div>


### 第二课 与山为邻

---

::: warning 重要提醒
本单元没有考点，换言之，本单元没有提纲。这里只是占位。
由于维护者有强迫症，喜欢左右的都凑齐，所以这只是形式。
~~如果要的话去看书叭，拜拜。~~
:::

---

#### 第一框 垂直的生计

---

#### 第二框 山地之国

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
