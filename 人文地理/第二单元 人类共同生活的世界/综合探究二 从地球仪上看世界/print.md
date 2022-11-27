
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

    - [综合探究二 从地球仪上看世界](#综合探究二-从地球仪上看世界)<br>

<div class="divider_top"></div>


### 综合探究二 从地球仪上看世界

---

1. 经线指示<u>南北</u>方向，纬线指示<u>东西</u>方向。

2. 东西半球的分界线是<u>20°W</u>，<u>160°E</u>；
   东西经的划分界限是<u>本初子午线（0°）</u>；

3. 南北半球的划分是以<u>赤道（0°）</u>来划分。

4. 东经的代号是<u>E</u>(ast)，西经的代号是<u>W</u>(est)，北纬的代号是<u>N</u>(orth)，南纬的代号是<u>S</u>(outh)。

5. 维度带的划分

    | 纬度带（名称） | <u>低纬度</u>             | <u>中纬度</u>                 | <u>高纬度</u>                 |
    | -------------- | ------------------------- | ----------------------------- | ----------------------------- |
    | 纬度范围       | <u>30°N—0°<br>0°—30°S</u> | <u>30°N—60°N<br>30°S—60°S</u> | <u>60°N—90°N<br>60°S—90°S</u> |

6. 五带的划分

    ![img](/assets/hg-2-5-1.gif)

    1. 五带的纬度范围：A<u>66.5°N—90°N</u>；B<u>23.5°N—66.5°N</u>；C<u>23.5°N—23.5°S</u>；

    D<u>23.5°S—66.5°S</u>；E<u>66.5°S—90°S</u>。

    2. 填写纬线的名称与纬度：1<u>北极圈</u>：<u>66.5°N</u>；2<u>北回归线</u>：<u>23.5°N</u>；

    3<u>南回归线</u>：<u>23.5°S</u>；4<u>南极圈</u>：<u>66.5°S</u>。

7. 中国之”最“
    1. 中国最东边的经度约为<u>135°E</u>；
    2. 中国最西边的经度约为<u>73°E</u>；
    3. 中国最北边的纬度约为<u>53°N</u>；
    4. 中国最南边的纬度约为<u>4°N</u>；
    5. 中国大约跨越<u>62°</u>经度，中国最东和最西相差<u>4</u>个小时；
    6. 中国在<u>亚洲</u>的东部，<u>太平洋</u>的西岸。
    7. 中国的位置是：从半球位置看，我国位于<u>东</u>半球、<u>北</u>半球；
       从纬度位置看，我国大部分位于<u>中纬度</u>；大部分位于<u>北温带</u>。

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
