
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

    - [第一单元 殖民地人民的反抗与资本主义制度的扩展](#第一单元-殖民地人民的反抗与资本主义制度的扩展)<br>
      - [第 1 课 殖民地人民的反抗斗争](#第-1-课-殖民地人民的反抗斗争)<br>
      - [第 2 课 俄国的改革](#第-2-课-俄国的改革)<br>
      - [第 3 课 美国内战](#第-3-课-美国内战)<br>
      - [第 4 课 日本明治维新](#第-4-课-日本明治维新)<br>

<div class="divider_top"></div>


### 第一单元 殖民地人民的反抗与资本主义制度的扩展

---

#### 第 1 课 殖民地人民的反抗斗争

---

#### 第 2 课 俄国的改革

---

#### 第 3 课 美国内战

---

#### 第 4 课 日本明治维新

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
