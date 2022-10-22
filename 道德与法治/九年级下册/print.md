
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

  - [九年级下册](#九年级下册)<br>
    - [第一单元 我们共同的世界](#第一单元-我们共同的世界)<br>
      - [第一课 同住地球村](#第一课-同住地球村)<br>
      - [第二课 构建人类命运共同体](#第二课-构建人类命运共同体)<br>
    - [第二单元 世界舞台上的中国](#第二单元-世界舞台上的中国)<br>
      - [第三课 与世界紧密相连](#第三课-与世界紧密相连)<br>
      - [第四课 与世界共发展](#第四课-与世界共发展)<br>
    - [第三单元 走向未来的少年](#第三单元-走向未来的少年)<br>
      - [第五课 少年的担当](#第五课-少年的担当)<br>
      - [第六课 我的毕业季](#第六课-我的毕业季)<br>
      - [第七课 从这里出发](#第七课-从这里出发)<br>

<div class="divider"></div>


## 九年级下册

考点极少，基本上都是以前没说完的废话，尤其是第三单元。

<div class="divider"></div>

### 第一单元 我们共同的世界

---

#### 第一课 同住地球村

---

#### 第二课 构建人类命运共同体

---

<div class="divider"></div>

### 第二单元 世界舞台上的中国

---

#### 第三课 与世界紧密相连

---

#### 第四课 与世界共发展

<div class="divider"></div>

### 第三单元 走向未来的少年

---

#### 第五课 少年的担当

---

#### 第六课 我的毕业季

---

#### 第七课 从这里出发

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
