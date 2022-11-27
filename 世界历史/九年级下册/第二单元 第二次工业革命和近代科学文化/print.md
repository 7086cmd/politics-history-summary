
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

    - [第二单元 第二次工业革命和近代科学文化](#第二单元-第二次工业革命和近代科学文化)<br>
      - [第 5 课 第二次工业革命](#第-5-课-第二次工业革命)<br>

<div class="divider_top"></div>


### 第二单元 第二次工业革命和近代科学文化

---

#### 第 5 课 第二次工业革命

1. 两次工业革命的比较

   <table><thead><tr><th>项目</th><th>第一次工业革命</th><th>第二次工业革命</th></tr></thead><tbody><tr><th>开始时间</th><td><u>18世纪六七十年代</u></td><td><u>19世纪六七十年代</u></td></tr><tr><th>标志</th><td><u>蒸汽机的广泛运用</u></td><td><u>电力的广泛运用</u></td></tr><tr><th>动力机器及能源</th><td><u>蒸汽机（煤炭）</u></td><td><u>发电机和电动机（电力）、<br>内燃机（石油）</u></td></tr><tr><th>领先国家</th><td><u>英国</u></td><td><u>美国、德国等</u></td></tr><tr><th>进入时代</th><td><u>“蒸汽时代”</u></td><td><u>“电气时代”</u></td></tr><tr><th>新交通工具及发明者</th><td><u>火车（史蒂芬森）等</u></td><td><u>汽车（本茨）、<br>飞机（莱特兄弟）等</u></td></tr><tr><th rowspan="2">启示</th><td owspan="2" colspan="2"><ol><li><u>科学技术是第一生产力，创新是引领发展的第一动力；</u></li><li><u>实施科教兴国战略，加强科技创新；</u></li><li><u>发展经济的同时应注意保护环境。</u></li></ol></td></tr></tbody></table>

2. 第一次工业是以<u>“工厂”</u>取代<u>“工场”</u>，以<u>机器生产</u>取代<u>手工劳动</u>的过程，最终确立起<u>现代工厂</u>制度。
3. 1825年，<u>史蒂芬森</u>设计的蒸汽机车（火车）正式试车，标志着<u>铁路时代</u>的开始。
4. 第一次工业革命的影响：
    1. <u>极大地提高了社会生产力水平，人类进入“蒸汽时代”；</u>
    2. <u>19世纪中期，英国已成为世界上第一个工业国家；</u>
    3. <u>造成了新的社会矛盾，带来了环境污染等问题。</u>

5. 英国资产阶级革命和英国工业革命的关系
    1. <u>英国君主立宪制建立后，政局稳定；</u>
    2. <u>资本主义经济迅速发展。</u>

6. 第二次工业革命的特点：<u>科学研究同工业生产紧密结合</u>。
7. 第二次工业革命的成果：
    1. 1831年，英国科学家法拉第发现了<u>电磁感应现象</u>，人们根据这一现象发明了早期的<u>发电机</u>。
    2. 美国发明家<u>爱迪生</u>发明了耐用的白炽灯泡等。
    3. <u>电力成为新的能源进入生产生活领域</u>是第二次工业革命最显著的成就。
    4. <u>诺贝尔</u>发明了现代炸药、无烟炸药，在军事、工程等方面得到了广泛应用。
    5. 海厄特发明了赛璐珞的制造技术，<u>现代塑料工业</u>由此诞生。
8. 第二次工业革命的影响：
    1. <u>促进了生产力的发展，极大地改善了人们的生活，人类社会进入了“电气时代”；</u>
    2. <u>一些资本主义国家成为工业化强国；</u>
    3. <u>出现了垄断组织，资本主义向垄断资本主义即帝国主义逐渐过渡；</u>
    4. <u>资本主义对外扩张的增强，对世界产生了深远的影响。</u>

<div class="divider"></div>

<div class="divider"></div>

# 版权声明

作者: [7086cmd](https://github.com/7086cmd).<br>

<p style="font-size: 24px">
本文遵循 <code>CC BY-NC-SA 4.0</code> 协议。未经允许，请勿擅自改动、商用这些内容，并且若转载请注明出处。
</p>

<script setup>
import { ref } from "vue";

const printTitle = ref(decodeURI(new URL(location.href).pathname.split("/")[1])) ?? "政史地总资料";

const documentTitle = ref(decodeURI(new URL(location.href).pathname.split("/").filter(x => (x !== "" && x !== "print")).join(" | "))) ?? "政史地总资料";

const printDate = ref(`导出日期：${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`);

</script>

<div class="divider_top"></div>

<div class="center">
  <div id="ending">7086cmd's notes</div>
</div>

<div class="right">
  <p>未经作者许可禁售。</p>
</div>
