
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

    - [《习近平新时代中国特色社会主义思想学生读本》](#《习近平新时代中国特色社会主义思想学生读本》)<br>

<div class="divider_top"></div>


### 《习近平新时代中国特色社会主义思想学生读本》

---

::: warning 说明
内容不多，八上的时候讲的，因此放在这里。

中考可能会考到，但是以[九上第四单元 第八课 中国人 中国梦](/道德与法治/九年级上册/第四单元%20和谐与梦想/#第八课-中国人-中国梦)为主。
:::

---

1. 什么是中国梦：<u>实现中华民族的伟大复兴</u>

2. 中国梦的本质是：<u>国家富强</u>、<u>民族振兴</u>、<u>人民幸福</u>

3. 建党一百年的奋斗目标：<u>全面建成小康社会</u>；<br>
   2035 年的奋斗目标：<u>基本实现社会主义现代化</u>；<br>
   21 世纪中叶的奋斗目标：<u>把中国建成富强民主文明和谐美丽的社会主义现代化强国</u>

4. 我国发展新的历史方位：<u>中国特色社会主义进入了新时代</u>

5. 新时代的新理论：<u>习近平新时代中国特色社会主义思想</u>

6. 新时代的社会主要矛盾：<u>人民日益增长的美好生活需要和不平衡不充分的发展之间的矛盾。</u>

7. 党和政府坚持的发展思想：<u>以人民为中心</u>

8. 党的奋斗目标：<u>人民对美好生活的向往</u>

9. 发展的目的和归宿：<u>实现人民幸福</u>

10.   “五位一体”总体布局：<u>经济建设</u>、<u>政治建设</u>、<u>文化建设</u>、<u>社会建设</u>和<u>生态文明建设</u>。

11.   “五位一体”战略目标：<u>将中国建成富强民主文明和谐美丽的社会主义现代化强国</u>

12.   “四个全面”战略布局：<u>全面建设社会主义现代化国家</u>、<u>全面深化改革</u>、<u>全面依法治国</u>、<u>全面从严治党。</u>

13.   “四个自信”的基本内容：坚持中国特色社会主义<u>道路自信</u>、 <u>理论自信</u>、<u>制度自信</u>、 <u>文化自信</u>

14.   决定当代中国命运的关键一招：<u>改革开放</u>

15.   改革开放的开端？（时间，会议）<u>1978 年 十一届三中全会</u>

16.   全面深化改革的总目标：<u>完善和发展中国特色社会主义制度，推进国家治理体系和治理能力现代化。</u>

17.   党领导人民治理国家的基本方略：<u>依法治国</u>

18.   全面推进依法治国的基本要求：<u>科学立法</u>，<u>严格执法</u>，<u>公正司法</u>，<u>全民守法</u>

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
