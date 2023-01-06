
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

    - [第三单元 第一次世界大战和战后初期的世界](#第三单元-第一次世界大战和战后初期的世界)<br>
      - [第 8 课 第一次世界大战](#第-8-课-第一次世界大战)<br>
      - [第 9 课 列宁与十月革命](#第-9-课-列宁与十月革命)<br>
      - [第 10 课 《凡尔赛条约》和《九国公约》](#第-10-课-《凡尔赛条约》和《九国公约》)<br>
      - [第 11 课 苏联的社会主义建设](#第-11-课-苏联的社会主义建设)<br>
      - [第 12 课 亚非拉民族民主运动的高涨](#第-12-课-亚非拉民族民主运动的高涨)<br>

<div class="divider_top"></div>


### 第三单元 第一次世界大战和战后初期的世界

---

#### 第 8 课 第一次世界大战

---

#### 第 9 课 列宁与十月革命

---

#### 第 10 课 《凡尔赛条约》和《九国公约》

---

#### 第 11 课 苏联的社会主义建设

---

#### 第 12 课 亚非拉民族民主运动的高涨

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
