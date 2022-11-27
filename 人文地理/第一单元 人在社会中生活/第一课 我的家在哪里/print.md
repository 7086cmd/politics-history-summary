
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

    - [第一课 我的家在哪里](#第一课-我的家在哪里)<br>
      - [第一框 从社区看我家](#第一框-从社区看我家)<br>
      - [第二框 在社区中生活](#第二框-在社区中生活)<br>

<div class="divider_top"></div>


### 第一课 我的家在哪里

---

#### 第一框 从社区看我家

1. 地图三要素是<u>方向</u>、<u>比例尺</u>、<u>图例和注记</u>。

2. 地图定向方法

    1. 地图上最常用的定向方法是：<u>一般定向法</u>，定向依据为<u>面向地图，上北下南，左西右东</u>。
    2. 地图上最准确的定向方法是经纬网定向法 ，在地球仪上经线指示<u>南北</u>方向，纬线指示<u>东西</u>方向。
    3. 除此之外还有一种定向方法称为 指向标定向法 ，一般指向<u>正北</u>方向，

3. 经测定，从柳岸晨韵到蛟川书院的实地距离是 660 米，在某幅地图上距离为 6.6 厘米，则这幅地图的比例尺为<u>1：10000</u>。

4. 走向的描述方法

    1. 描述河流流向：<u>如自西北向东南流、自西向东流</u>
    2. 描述公路、山脉走向：<u>如西北-东南走向 、东西走向</u>
    3. 描述风向：<u>风从那个方向吹来就叫什么风，如风从北方吹来叫北风，从东南方吹来叫东南风</u>

5. 两幅图的辨析，其中第一张图为图 A，另一张为图 B。
   ![play](/assets/hg-1-1-1-1.jpg)
   ![2007211193859220](/assets/hg-1-1-1-2.jpg)

    1. 两幅图中，比例尺更大的是图<u>A</u>，比例尺更小的是图<u>B</u>。
    2. 两幅图中，表示范围大的是图<u>B</u>，范围小的是图<u>A</u>。
    3. 两幅图中，内容更详尽的是图<u>A</u>，更简略的是图<u>B</u>。

6. 图幅相同时，比例尺越<u>大</u>，表示实地范围越<u>小</u>，内容越<u>详细</u>；比例尺越<u>小</u>，表示实地范围越<u>大</u>，内容越<u>简略</u>。

---

#### 第二框 在社区中生活

1. 写出以下场景对应的社区服务功能。
    1. 居委会定期进行天然气管道检查：<u>管理功能</u>
    2. 小李爷爷在社区老年大学教书法：<u>文化功能</u>
    3. 社区居委会宣传党的方针、政策：<u>政治功能</u>
    4. 小王在社区某超市购买学习用品：<u>经济功能</u>

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
