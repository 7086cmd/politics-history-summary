
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

    - [第七单元 工业革命和共产主义运动的兴起](#第七单元-工业革命和共产主义运动的兴起)<br>
      - [第 20 课 第一次工业革命](#第-20-课-第一次工业革命)<br>
      - [第 21 课 马克思主义的诞生和国际共产主义运动的兴起](#第-21-课-马克思主义的诞生和国际共产主义运动的兴起)<br>

<div class="divider_top"></div>


### 第七单元 工业革命和共产主义运动的兴起

---

#### 第 20 课 第一次工业革命

::: warning 重复提醒
提纲为一二两次工业革命的比较，本提纲包含第二次工业革命的相关内容。
:::

1. 两次工业革命的比较

    <table><thead><tr><th>项目</th><th>第一次工业革命</th><th>第二次工业革命</th></tr></thead><tbody><tr><th>开始时间</th><td><u>18世纪六七十年代</u></td><td>19世纪六七十年代</td></tr><tr><th>标志</th><td><u>蒸汽机的广泛运用</u></td><td>电力的广泛运用</td></tr><tr><th>动力机器及能源</th><td><u>蒸汽机（煤炭）</u></td><td>发电机和电动机（电力）、<br>内燃机（石油）</td></tr><tr><th>领先国家</th><td><u>英国</u></td><td>美国、德国等</td></tr><tr><th>进入时代</th><td><u>“蒸汽时代”</u></td><td>“电气时代”</td></tr><tr><th>新交通工具及发明者</th><td><u>火车（史蒂芬森）等</u></td><td>汽车（本茨）、<br>飞机（莱特兄弟）等</td></tr><tr><th rowspan="2">启示</th><td owspan="2" colspan="2"><ol><li><u>科学技术是第一生产力，创新是引领发展的第一动力；</u></li><li><u>实施科教兴国战略，加强科技创新；</u></li><li><u>发展经济的同时应注意保护环境。</u></li></ol></td></tr></tbody></table>

2. 第一次工业是以<u>“工厂”</u>取代<u>“工场”</u>，以<u>机器生产</u>取代<u>手工劳动</u>的过程，最终确立起<u>现代工厂</u>制度。
3. 1825 年，<u>史蒂芬森</u>设计的蒸汽机车（火车）正式试车，标志着<u>铁路时代</u>的开始。
4. 第一次工业革命的影响：

    1. <u>极大地提高了社会生产力水平，人类进入“蒸汽时代”；</u>
    2. <u>19 世纪中期，英国已成为世界上第一个工业国家；</u>
    3. <u>造成了新的社会矛盾，带来了环境污染等问题。</u>

5. 英国资产阶级革命和英国工业革命的关系
    1. <u>英国资产阶级革命后确立了君主立宪制，为英国的工业革命提供了政治保障；</u>
    2. <u>英国工业革命极大地提高了社会生产力水平，进一步巩固了资产阶级的统治。</u>

---

#### 第 21 课 马克思主义的诞生和国际共产主义运动的兴起

1. 无产阶级登上历史舞台的标志<u>法国的里昂工人起义</u>，<u>英国的宪章运动</u>，<u>德国的西里西亚织工起义</u>。
2. 马克思主义诞生的标志：<u>《共产党宣言》的发表</u>。
3. 1864 年成立的国际工人协会史称<u>第一国际</u>；<br>世界上第一个无产阶级政权是<u>巴黎公社</u>。

---

<iframe src="/assets/summaries-blank/hw-7-1_9-1v1.pdf" frameborder="0" width="100%" type="application/pdf"></iframe>

<iframe src="/assets/summaries-blank/hw-7-1_9-1v2.pdf" frameborder="0" width="100%" type="application/pdf"></iframe>

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
