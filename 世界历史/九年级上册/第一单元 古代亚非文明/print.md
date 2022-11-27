
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

    - [第一单元 古代亚非文明](#第一单元-古代亚非文明)<br>
      - [第 1 课 古代埃及](#第-1-课-古代埃及)<br>
      - [第 2 课 古代两河流域](#第-2-课-古代两河流域)<br>
      - [第 3 课 古代印度](#第-3-课-古代印度)<br>

<div class="divider_top"></div>


### 第一单元 古代亚非文明

---

#### 第 1 课 古代埃及

#### 第 2 课 古代两河流域

#### 第 3 课 古代印度

1. 请写出图中序号对应的文明名称
   ![wh-1-1.png](/assets/wh-1-1.png)
   A<u>古埃及文明</u>；B<u>古代两河流域文明</u>；C<u>古代印度河流域文明</u>；D<u>中国文明</u>；<br>
   共同地理位置：<u>位于大河流域</u>，原因：<u>气候温和，地势平坦，有充沛的水源和肥沃的土壤</u>。

2. <u>古埃及文明</u>被称为“尼罗河的赠礼”，<u>法老</u>是全国最高统治者，具有无上权威。鼎盛之后，古埃及文明不断衰落，公元前 525 年，<u>波斯帝国</u>吞并古埃及，古埃及文明没有延续下去。

3. 古代两河流域的统一者：<u>汉谟拉比</u>。

4. 古代两河流域的法律成就：<u>《汉谟拉比法典》</u>，这一法律文献的地位：<u>迄今已知世界上第一部较为完整的成文法典</u>。

5. 古代印度早期文明遗址：<u>哈拉帕</u>和<u>摩亨佐·达罗</u>，<u>孔雀王朝</u>统治时期是古印度文明的鼎盛时期。

6. <u>种姓制度</u>是印度严格的社会等级制度，<u>婆罗门</u>、<u>刹帝利</u>、<u>吠舍</u>、<u>首陀罗</u>是由高到低的四个等级，除此之外，还有最卑贱的“不可接触者”——<u>贱民</u>。

7. 古代印度的宗教成就：<u>佛教</u>，创立者：<u>释迦牟尼</u>。

8. 请写出对应的文明成就
   ||古埃及|古代两河流域|古代印度|
   | :----: | :-: | :-: | :-: |
   | 天文学 |<u>太阳历</u>|<u>阴历</u>| 无|
   | 医学 |<u>木乃伊</u>|无|无|
   | 文字 |<u>象形文字</u>|<u>楔形文字</u>|无|
   | 建筑 |<u>金字塔</u>（代表：<u>胡夫金字塔</u>） |<u>空中花园</u>|无|
   | 数学 |无|<u>60 进位制</u>|<u>阿拉伯数字</u>|

---

<iframe src="/assets/summaries-blank/hw-1-1.pdf" frameborder="0" width="100%" type="application/pdf"></iframe>

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
