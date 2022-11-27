
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

    - [第三单元 勇担社会责任](#第三单元-勇担社会责任)<br>
      - [第六课 责任与角色同在](#第六课-责任与角色同在)<br>
      - [第七课 积极奉献社会](#第七课-积极奉献社会)<br>

<div class="divider_top"></div>


### 第三单元 勇担社会责任

---

#### 第六课 责任与角色同在

::: danger 提醒
非中考考点！无事勿花太多时间在上面！
:::

1. 责任的来源<br>
   责任来自<u>对他人的承诺</u>、<u>职业要求</u>、<u>道德规范</u>、<u>法律规定</u>等。

2. 作为社会的一员，我们每个人首先要对<u>自己</u>负责。

3. 承担责任的代价是什么<br>
   承担责任不仅意味着付出<u>时间</u>、<u>精力</u>和<u>金钱</u>，而且意味着可能因为做得不好而受到<u>责备</u>，甚至受到<u>处罚</u>。

4. 承担责任会获得哪些回报

    1. 承担责任往往伴随着获得回报的权利。这种回报既包括<u>物质方面</u>，又包括<u>精神方面</u>
    2. 更重要的是<u>精神方面</u>的回报，如<u>良好的自我感觉</u>、<u>获得新的知识和技能</u>、<u>赢得他人的尊重和赞许</u>等。

5. 如何做一个负责任的人

    1. 当可以选择自己承担的责任时，我们要作出<u>正确的评估</u>、<u>合理的选择</u>；一旦作出选择，就应该义无反顾地担当起应负的责任。
    2. 虽然有些应该做的事情不是我们自愿选择的，但是我们仍然应该<u>自觉承担</u>相应的责任。
    3. 履行社会责任应<u>不计代价和回报</u>。
    4. 我们应努力提升<u>自身素质</u>，增强<u>履行责任的能力</u>，勇于承担责任。

---

#### 第七课 积极奉献社会

---

<iframe src="/assets/summaries-blank/ml-8-1-3-5.pdf" frameborder="0" width="100%" type="application/pdf"></iframe>

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
