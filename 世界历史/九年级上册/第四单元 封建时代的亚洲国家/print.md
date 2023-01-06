
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

    - [第四单元 封建时代的亚洲国家](#第四单元-封建时代的亚洲国家)<br>
      - [第 13 课 古代日本](#第-13-课-古代日本)<br>
      - [第 14 课 阿拉伯帝国](#第-14-课-阿拉伯帝国)<br>

<div class="divider_top"></div>


### 第四单元 封建时代的亚洲国家

---

#### 第 13 课 古代日本

#### 第 14 课 阿拉伯帝国

1. 古代史上，日本在亚洲拜认了第一位老师，并向老师学习，该老师是<u>中国（唐朝）</u>，学习指的是<u>大化改新</u>。<br>
   该事件的内容有：

   1. 政治上
      1. <u>建立以天皇为中心的中央集权制度；</u>
      2. 地方设国、郡、里三级；
   2. 经济上
      1. <u>将土地、部民收归国有；</u>
      2. <u>国家将土地分给公民；</u>
      3. 统一赋税。<br>

   该事件的意义是：<u>使日本发展成为一个中央集权制的封建国家，进入封建社会</u>。<br>
   该事件对我们的启示：

   1. <u>积极改革创新，与时俱进；</u>
   2. <u>善于借鉴，进一步对外开放。</u>

2. 12世纪晚期，源氏首领源赖朝设幕府于镰仓，日本由此进入近700年的<u>幕府</u>统治时期，这一时期的特点是<u>幕府将军实际上把持着国家大权</u>。

3. 8世纪中期，世界上疆域最大的帝国是：<u>阿拉伯帝国</u><br>
   地跨<u>欧亚非</u>三大洲，历史上这样的帝国还有<u>亚历山大帝国</u>、<u>罗马帝国</u>、<u>东罗马帝国（拜占庭帝国）</u>。

4. 阿拉伯文化成就：<br>
   数学：<u>“阿拉伯数字”；代数学；</u><br>
   医学：《<u>医学集成</u>》和《<u>医典</u>》长期被欧洲医学界奉为经典。<br>
   文学：《<u>天方夜谭</u>》是阿拉伯文学的瑰宝。

5. 世界三大宗教：

   | 名称            | 创始人                           | 创立时间    | 创立地点                  | 经典       |
   | --------------- | -------------------------------- | ----------- | ------------------------- | ---------- |
   | <u>佛教</u>     | <u>乔达摩·悉达多（释迦牟尼）</u> | 公元前6世纪 | <u>古印度</u>             | 佛经       |
   | <u>基督教</u>   | <u>耶稣</u>                      | 1世纪       | <u>巴勒斯坦地区</u>       | 《圣经》   |
   | <u>伊斯兰教</u> | <u>穆罕默德</u>                  | 7世纪       | <u>阿拉伯半岛（麦加）</u> | 《古兰经》 |

6. 阿拉伯人对世界文化发展的作用是：<u>担当了沟通东西方文化的角色</u>；<br>
   请举例说明：<u>中国的造纸术、指南针、火药等重大发明和印度的棉花、食糖等都是由阿拉伯人传入欧洲的。</u>

---

<iframe src="/assets/summaries-blank/hw-4-1_5-1.pdf" frameborder="0" width="100%" type="application/pdf"></iframe>

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
