
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

    - [第三课 共同关注的环境问题](#第三课-共同关注的环境问题)<br>
      - [第一框 愈演愈烈的环境问题](#第一框-愈演愈烈的环境问题)<br>
      - [第二框 加快改善我国的生态环境](#第二框-加快改善我国的生态环境)<br>

<div class="divider_top"></div>


### 第三课 共同关注的环境问题

---

#### 第一框 愈演愈烈的环境问题

---

#### 第二框 加快改善我国的生态环境

1. 环境问题分为：<u>环境污染</u>、<u>生态破坏</u>两类。

2. 我国主要的生态环境问题是<u>荒漠化</u>、<u>水土流失</u>；<br>
   我国主要的环境污染问题是<u>工业中产生的废气、废水及固体废弃物污染</u>。<br>
   环境问题的实质是<u>发展问题</u>。

3. 加快改善我国生态环境的原因：
    1. 生态环境重要性角度：<u>生态环境是生存之本、发展之源</u>
    2. 环境现状及危害角度：<br>
       现状：<u>目前，我国环境形式依然不容乐观、人民日益增长的对美好生态环境的需求，还不能得到充分的满足。</u><br>
       危害：<u>环境问题不仅危害人们的健康，制约了我国的经济发展，还影响社会安定。成为威胁中华民族生存与发展的重大问题。</u>
    3. 意义角度：
        1. <u>保护和改善环境，满足人民日益增长的对美好生态环境的需求；</u>
        2. <u>有利于推进生态文明建设，促进经济社会可持续发展；</u>
        3. <u>有利于建设美丽中国，实现中华民族的永续发展。</u>

---

<iframe src="/assets/summaries-blank/hg-6-3_4.pdf" frameborder="0" width="100%" type="application/pdf"></iframe>

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
