
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

    - [第四单元 经济大危机和第二次世界大战](#第四单元-经济大危机和第二次世界大战)<br>
      - [第 13 课 罗斯福新政](#第-13-课-罗斯福新政)<br>
      - [第 14 课 法西斯国家的侵略扩张](#第-14-课-法西斯国家的侵略扩张)<br>
      - [第 15 课 第二次世界大战](#第-15-课-第二次世界大战)<br>

<div class="divider_top"></div>


### 第四单元 经济大危机和第二次世界大战

---

#### 第 13 课 罗斯福新政

---

#### 第 14 课 法西斯国家的侵略扩张

#### 第 15 课 第二次世界大战

1. 意、德、日法西斯政权的建立者依次是：<u>墨索里尼</u>、<u>希特勒</u>、<u>广田弘毅</u>。

2. 欧洲战争策源地：<u>德国</u>；<br>亚洲战争策源地：<u>日本</u>。

3. 第二次世界大战爆发的原因：

    1. 根本原因：<u>帝国主义国家之间政治经济发展的不平衡</u>；
    2. 直接原因：<u>为了应对经济危机，一些国家（德、日）建立了法西斯专政，成为战争的策源地</u>；
    3. 其他原因：<u>绥靖政策加速了第二次世界大战的全面爆发</u>。

4. 第二次世界大战的性质：<u>正义的反法西斯战争</u>。

5. 第二次世界大战能够取胜的根本原因<u>世界反法西斯同盟的建立</u>；其建立的时间是<u>1942 年 1 月</u>，标志是<u>《联合国家宣言》的签署</u>。

6. 二战全面爆发的时间和标志：<u>1939 年，德国闪击波兰</u>；<br>二战规模进一步扩大的标志：<u>1941 年，德国突袭苏联</u>；<br>二战达到最大规模的标志：<u>1941 年，日本偷袭珍珠港</u>；

7. 粉碎了德军不可战胜的神话：<u>莫斯科保卫战</u>；<br>第二次世界大战的转折点：<u>斯大林格勒保卫战</u>；<br>开辟欧洲第二战场：<u>诺曼底登陆</u>。

8. 第二次世界大战结束的时间和标志：<u>1945 年 9 月 2 日，日本正式签署投降书</u>。

9. 二战期间的两次重要会议（按时间顺序）
 <table><tbody><tr><th>会议名称</th><td><u>雅尔塔会议</u></td><td><u>波茨坦会议</u></td></tr><tr><th>时间</th><td>1945 年 2 月</td><td>1945 年 7 月</td></tr><tr><th>与会国</th><td align="center" colspan="2"><u>美、英、苏</u></td></tr><tr><th>内容</th><td><ol><li><u>消灭德国法西斯主义，战后分区占领；</u></li><li><u>战后成立联合国；</u></li><li><u>苏联承诺对日作战。</u></li></ol></td><td><u>发表了敦促日本投降的《波茨坦公告》。</u></td></tr></tbody></table>
10. 台湾及钓鱼岛属于中国领土的国际法律依据是：<u>《开罗宣言》</u>。

11. 第二次世界大战的启示

    1. <u>不忘历史，反对战争，珍爱和平；</u>
    2. <u>要建立公正合理的国际新秩序，推动构建人类命运共同体；</u>
    3. <u>发挥联合国的作用，加强国际合作。</u>

12. 第二次世界大战的影响
    1. <u>第二次世界大战是人类历史上规模空前的战争，给各国人民带来巨大灾难；</u>
    2. <u>彻底粉碎了法西斯主义和军国主义通过战争称霸世界的野心；</u>
    3. <u>彻底结束了列强通过争夺殖民地瓜分世界的历史，促进世界殖民体系的瓦解；</u>
    4. <u>对维护世界和平，促进共同发展产生了重大而深远的影响。</u>

---

<iframe src="/assets/summaries-blank/hw-11-1.pdf" frameborder="0" width="100%" type="application/pdf"></iframe>

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
