
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

    - [第四单元 崇尚法治精神](#第四单元-崇尚法治精神)<br>
      - [第七课 尊重自由平等](#第七课-尊重自由平等)<br>
      - [第八课 维护公平正义](#第八课-维护公平正义)<br>

<div class="divider"></div>


### 第四单元 崇尚法治精神

---

::: warning 重要提醒
观察两课的标题，自由平等公正法治。社会主义核心价值观的社会体现。
:::

---

#### 第七课 尊重自由平等

1. 法治的价值追求、法治精神的内容：<u>追求自由平等，维护公平正义</u><br>
   法治社会的核心价值：<u>公平正义</u><br>
   社会文明进步的标志，也是社会主义法治的基本原则之一：<u>法律面前人人平等</u>
2. 法治与自由的关系:
    1. 法治与自由<u>互相联系，不可分割</u>。
    2. 一方面，<u>法治标定了自由的界限</u>；
    3. 另一方面，<u>法治是自由的保障</u>。
3. 在法律意义上，平等具有两层含义：
    1. 一是<u>同等情况同等对待</u>
    2. 二是<u>不同情况差别对待</u>
4. 如何珍视自由
    1. <u>珍惜宪法和法律赋予我们的权利</u>；
    2. <u>必须依法行使权利</u>
5. 如何践行平等
    1. <u>就要反对特权</u>；
    2. <u>就要平等对待他人的合法权利</u>；
    3. <u>就要敢于抵抗不平等的行为</u>

---

#### 第八课 维护公平正义

1. 公平的内涵：<u>权利公平</u>、<u>规则公平</u>、<u>机会公平</u>

2. 一般而言，正义行为都是有利于<u>促进社会进步</u>、<u>维护公共利益</u>的行为。

3. 正义的要求：

    1. <u>要求依法保障人们的正当权利</u>，使受害者得到救济、违法者受到惩罚；
    2. 要求人们分辨是非，惩恶扬善，<u>维护社会公共利益</u>；
    3. 要求人们<u>对弱者给予必要的扶助</u>，以保证其有尊严地生存。

4. 公平的重要性：

    1. <u>公平是个人生存和发展的重要保障</u>；
    2. <u>公平是社会稳定和进步的重要基础</u>

5. 正义的重要性：

    1. <u>正义是社会文明的尺度，体现了人们对美好社会的期待和追求</u>
    2. <u>正义是法治追求的基本价值目标之一</u>
    3. <u>正义是社会制度的重要价值</u>
    4. <u>正义是社会和谐的基本条件</u>

6. 如何维护公平正义
    1. <u>个人守护公平正义，做有正义感的人；</u>
    2. <u>依靠制度（特别是法律）保障公平正义；</u>
    3. <u>司法维护公平正义，司法机关必须确保司法公正；</u>
    4. <u>社会积极承担责任，营造公平正义的社会氛围。</u>

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
