
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

    - [综合探究四 走进台湾](#综合探究四-走进台湾)<br>

<div class="divider_top"></div>


### 综合探究四 走进台湾

---

1. 台湾西望<u>福建省</u>，北濒<u>东海</u>，东临<u>太平洋</u>，南濒<u>南海</u>，与祖国大陆隔<u>台湾海峡</u>相望。
2. 台湾省包括<u>台湾岛</u>和<u>澎湖列岛</u>、<u>钓鱼岛</u>、<u>赤尾屿</u>等众多小岛。
3. 台湾的地势特点：<u>中间高、四周低</u>。
4. 台湾岛北部属于<u>亚热带季风</u>气候，南部属于<u>热带季风</u>气候。
5. <u>火烧寮</u>是中国降水最多的地方。
6. 台湾最长的河流：<u>浊水溪</u>，流向：<u>自东向西流</u>。
7. 台湾最大的湖泊：<u>日月潭</u>。
8. 台湾主要的少数民族：<u>高山族</u>。
9. 台湾人口主要集中在<u>西部平原地区</u>。
10. 台湾旅游资源丰富，如<u>日月潭</u>、<u>阿里山</u>、<u>太鲁阁</u>等。

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
