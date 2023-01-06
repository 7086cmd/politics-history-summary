
  <style>
  #title {
    padding-top: 40%;
    font-size: 96px;
  }

  #subtitle {
    font-size: 36px;
    padding-top: 18%;
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

  #allinform {
    padding-top: 18%;
  }

  .topic {
    padding-top: 12%;
    padding-bottom: 8%;
    font-size: 48px;
  }
</style>
<div class="center">
  <div id="title">{{ printTitle }}</div>
  <div id="subtitle" v-if="documentTitle !== printTitle">{{ documentTitle }}</div>
</div>
<div class="right" id="allinform">
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

    - [第五单元 二战后的世界变化](#第五单元-二战后的世界变化)<br>
      - [第 16 课 冷战](#第-16-课-冷战)<br>
      - [第 17 课 二战后资本主义的新变化](#第-17-课-二战后资本主义的新变化)<br>
      - [第 18 课 社会主义的发展与挫折](#第-18-课-社会主义的发展与挫折)<br>
      - [第 19 课 亚非拉国家的新发展](#第-19-课-亚非拉国家的新发展)<br>

<div class="divider_top"></div>


### 第五单元 二战后的世界变化

---

#### 第 16 课 冷战

1. 冷战开始的标志是<u>杜鲁门主义的出台</u>，冷战在经济上的表现<u>马歇尔计划</u>。<br>
    欧洲冷战对峙的局面基本形成的标志是<u>德国的分裂</u>。<br>
    全面冷战对峙，两极格局形成的标志是<u>北约与华约相继成立</u>。

---

#### 第 17 课 二战后资本主义的新变化

1. 大大加快欧洲一体化进程的事件是<u>欧洲联盟</u>的建立，是在<u>欧洲共同体</u>的基础上组成的，其性质是<u>经济政治共同体</u>。
2. 第三次科技革命领先的国家是<u>美国</u>，主要标志是<u>电子计算机的广泛使用</u>，推动人类社会进入<u>信息时代</u>。

---

#### 第 18 课 社会主义的发展与挫折

---

#### 第 19 课 亚非拉国家的新发展

---

<div class="divider"></div>

<script setup>
import { ref } from "vue";

const printTitle = ref(decodeURI(new URL(location.href).pathname.split("/")[1])) ?? "政史地总资料";

const documentTitle = ref(decodeURI(new URL(location.href).pathname.split("/").filter(x => (x !== "" && x !== "print")).join(" | "))) ?? "政史地总资料";

const printDate = ref(`导出日期：${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`);

</script>

# 版权声明

作者: [7086cmd](https://github.com/7086cmd).<br>

<p style="font-size: 24px">
本文遵循 <code>CC BY-NC-SA 4.0</code> 协议。未经允许，请勿擅自改动、商用这些内容，并且若转载请注明出处。
</p>

<div class="center">
  <div id="ending">7086cmd's notes</div>
</div>

<div class="right">
  <p>未经作者许可禁售。</p>
</div>
