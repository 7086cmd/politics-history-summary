
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

    - [第一课 不断变化的人口问题](#第一课-不断变化的人口问题)<br>
      - [第一框 世界人口的数量变化](#第一框-世界人口的数量变化)<br>
      - [第二框 我国的人口与发展](#第二框-我国的人口与发展)<br>

<div class="divider_top"></div>


### 第一课 不断变化的人口问题

---

#### 第一框 世界人口的数量变化

---

#### 第二框 我国的人口与发展

1. 世界人口自然增长速度，通常用<u>人口自然增长率</u>来表示。<u>发达国家</u>国家的人口自然增长率较低，<u>发展中国家</u>人口自然增长率较高。

2. 影响人口增长的因素：<u>自然增长</u>、<u>人口迁移</u>

3. 我国各种人口问题的相应解决措施、对青少年的要求：

    | 人口问题                                                            | 相应解决措施                                                                                                                                                                                                                             |
    | ------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | 年龄结构角度：<u>人口老龄化程度不断加深</u>                         | 1.<u>坚持以经济建设为中心，大力发张生产力，增强综合国力（根本对策）；</u><br>2.<u>加快发展社会事业，完善社会保障制度（直接对策）；</u><br>3.<u>加强敬老爱老的传统美德教育，营造关爱老人的良好社会风气；</u><br>4.<u>不断完善生育政策</u> |
    | 质量角度：<u>人口素质大幅提高，但与世界发达国家相比还有上升空间</u> | 1.<u>实行计划生育，提倡优生优育；</u><br>2.<u>优先发展教育事业；</u><br>3.<u>实施科教兴国战略和人才强国战略；</u><br>4.<u>加强精神文明建设等</u>                                                                                         |
    | 数量角度：<u>人口总量大，但增长势头明显减弱</u>                     | 1.<u>坚持计划生育的基本国策；</u><br>2.<u>不断完善生育政策</u>                                                                                                                                                                           |

    基本国策：<u>计划生育</u>

---

<iframe src="/assets/summaries-blank/hg-6-1_2.pdf" frameborder="0" width="100%" type="application/pdf"></iframe>

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
