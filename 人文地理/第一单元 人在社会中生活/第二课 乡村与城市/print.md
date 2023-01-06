
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

    - [第二课 乡村与城市](#第二课-乡村与城市)<br>
      - [第一框 乡村聚落](#第一框-乡村聚落)<br>
      - [第二框 城市聚落](#第二框-城市聚落)<br>
      - [第三框 往来在区域之间](#第三框-往来在区域之间)<br>

<div class="divider_top"></div>


### 第二课 乡村与城市

---

#### 第一框 乡村聚落

1. 乡村聚落的分类及主要生产方式？

    | 村落        | 主要生产方式  |
    | ----------- | ------------- |
    | <u>农村</u> | <u>种植业</u> |
    | <u>渔村</u> | <u>渔业</u>   |
    | <u>林场</u> | <u>林业</u>   |
    | <u>牧村</u> | <u>畜牧业</u> |

2. 云南傣族吊脚楼、沙特阿拉伯、我国黄土高原的窑洞、北极因纽特人的冰屋的自然环境特征、建筑特征、功能

    | 民居                 | 自然环境特点                                | 建筑特征                                  | 功能                              |
    | -------------------- | ------------------------------------------- | ----------------------------------------- | --------------------------------- |
    | 我国云南的傣族民居   | <u>气候炎热，降水丰沛，地面潮湿</u>         | <u>以竹木为主材搭建而成，往往悬离地面</u> | <u>通风防潮，又可防充蛇</u>       |
    | 沙特阿拉伯的乡村民居 | <u>终年高温干燥，白天炎热，昼夜温差大</u>   | <u>墙厚、窗小</u>                         | <u>阻风隔热，防晒防风沙</u>       |
    | 北极因纽特人的冰屋   | <u>气候严寒</u>                             | <u>用冰块构筑冰屋，低矮无窗户</u>         | <u>保温效果好</u>                 |
    | 我国黄土高原的窑洞   | <u>夏季炎热湿润，冬季寒冷干燥，黄土广布</u> | <u>利用黄土治理性强的特点挖成窑洞</u>     | <u>冬暖夏凉，隔音、隔热、保暖</u> |

---

#### 第二框 城市聚落

1. 城市居民主要生产方式有<u>工业</u>、<u>商业</u>、<u>服务业</u>等；
2. 城市的特色：

    1. 首都以政治活动为主的：<u>北京</u>、<u>华盛顿</u>；
    2. 工商业发达偏重于经济活动：<u>上海</u>、<u>纽约</u>、<u>鹿特丹</u>；
    3. 历史文化积淀厚重、在文化艺术方面富有特色的：<u>西安</u>、<u>巴黎</u>、<u>维也纳</u>；

3. 城市内部功能区分：北京的中关村地区属于<u>高科技园区</u>；王府井属于<u>商业区</u>；方庄小区属于<u>生活区</u>。

4. 城市景观与乡村景观存在差异的原因：<u>劳动生产方式不同</u>。
5. 不同乡村景观存在差异的原因：<u>自然环境（地形和气候）不同</u>。

---

#### 第三框 往来在区域之间

1. 区域联系的必要性及内容

    必要性：

    1. 无论是一个乡村还是一座城市，它们总是与其他<u>区域</u>发生联系。而不同的区域，其<u>自然</u>和<u>人文</u>环境不同，对<u>社会生活</u>所产生的影响也不尽相同；
    2. 由于各地区的<u>自然条件</u>不同，<u>物产</u>也有所不同。为了满足人们物质生活多样化的需求，各区域之间就会发生联系，实现<u>优势互补</u>。

    内容：不同区域之间的联系，不仅限于物产方面，还包括<u>经济</u>、<u>文化</u>、<u>信息</u>、<u>技术</u>、<u>人才</u>等各个方面。

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
