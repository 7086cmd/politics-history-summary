
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

    - [第六单元 走向和平发展的世界](#第六单元-走向和平发展的世界)<br>
      - [第 20 课 联合国与世界贸易组织](#第-20-课-联合国与世界贸易组织)<br>
      - [第 21 课 冷战后的世界格局](#第-21-课-冷战后的世界格局)<br>
      - [第 22 课 不断发展的现代社会](#第-22-课-不断发展的现代社会)<br>

<div class="divider_top"></div>


### 第六单元 走向和平发展的世界

---

#### 第 20 课 联合国与世界贸易组织

1. 支撑、协调世界经济和政治的两大支柱是<u>世界贸易组织</u>和<u>联合国</u>。
2. 二战中<u>雅尔塔会议</u>会议中提出建立联合国，联合国成立于<u>1945</u>年，安理会的五个常任理事国是<u>中国、法国、俄罗斯、英国、美国</u>，拥有<u>否决</u>权。
3. 联合国的地位：<u>是人类构建世界和平的成果，也是影响最大的国际组织</u>；<br>
   联合国的首要宗旨是<u>维持国际和平及安全</u>，<br>作用为<u>在维护国际和平与安全方面发挥了积极作用，使许多国家和地区避免了一些可能发生的战争</u>。
4. 经济全球化中出现的波折主要表现为<u>逆全球化</u>和<u>贸易保护主义</u>。
5. 世界贸易组织的地位：<u>是具有较大影响力的国际组织</u>；<br>
   作用：<u>促进了全球贸易和世界经济的发展</u>。

---

#### 第 21 课 冷战后的世界格局

1. 时代主题是<u>和平与发展</u>，当今世界形势发展总趋势是<u>走向缓和</u>。
2. 二战后的世界格局是<u>美、苏两极格局</u>；<br>当今世界格局是<u>世界多极化趋势</u>，<br>推动这一趋势发展的主要力量有：<u>欧盟</u>、<u>日本</u>、<u>中国</u>、<u>俄罗斯</u>、<u>广大发展中国家</u>。
3. 威胁世界和平的因素有<u>霸权主义</u>、<u>地区冲突</u>、<u>恐怖主义</u>、民族矛盾和宗教纷争。
4. 标志着广大发展中国家已经成为国际政治舞台上的一支重要力量的事件是<u>不结盟运动的兴起</u>。
5. 当今世界的基本特征：<u>经济全球化</u>、<u>世界多极化</u>、<u>社会信息化</u>、<u>文化多样化</u>。

6. 为建立国际新秩序，中国做了哪些努力？

    1. <u>主张平等互信、包容互鉴、合作共赢；</u>
    2. <u>走和平发展道路，奉行独立自主的和平外交政策；</u>
    3. <u>反对霸权主义和强权政治；</u>
    4. <u>构建人类命运共同体；</u>
    5. <u>贡献中国智慧和中国方案。</u>

7. 如何解决和平与发展问题？（中国应如何应对经济全球化？）
    1. 国际社会：
        1. <u>建立公正合理的国际政治经济新秩序，构建人类命运共同体；</u>
        2. <u>发挥联合国作用，加强经济合作。</u>
    2. 中国政府：
        1. <u>以经济为中心，大力改革开放；</u>
        2. <u>奉行独立自主的和平外交政；</u>
        3. <u>倡导建立公正合理的国际政治经济新秩序。</u>

---

#### 第 22 课 不断发展的现代社会

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
