
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

    - [第三课 地形差异显著](#第三课-地形差异显著)<br>
      - [第一框 秦岭—淮河分南北](#第一框-秦岭—淮河分南北)<br>
      - [第二框 交流与互补](#第二框-交流与互补)<br>

<div class="divider_top"></div>


### 第三课 地形差异显著

---

#### 第一框 秦岭—淮河分南北

1. 中国四大地理区域是：<u>北方地区、南方地区、西北地区和青藏地区</u>

2. 中国南方地区与北方地区的划分界限：<u>秦岭—淮河线</u>

3. 南方地区和北方地区的差异比较

    | 项目     | 南方地区                                                  | 北方地区                                              |
    | -------- | --------------------------------------------------------- | ----------------------------------------------------- |
    | 气候类型 | <u>亚热带季风气候、热带季风气候</u>                       | <u>温带季风气候</u>                                   |
    | 气温     | <u>大部分地区 1 月均温高于 0℃</u>                         | <u>1 月均温低于 0℃</u>                                |
    | 降水     | <u>年降水量在 800 毫米以上</u>                            | <u>年降水量不足 800 毫米</u>                          |
    | 水文特点 | <u>河湖众多，水量大，冬季普遍不结冰，便于航运</u>         | <u>河流少，水量少，冬季结冰，不利于航运</u>           |
    | 耕地类型 | <u>水田为主</u>                                           | <u>旱地为主</u>                                       |
    | 主要作物 | <u>以水稻为主</u>                                         | <u>以小麦、玉米为主</u>                               |
    | 耕作制度 | <u>一年两熟甚至三熟</u>                                   | <u>一年一熟或两年三熟</u>                             |
    | 饮食习惯 | <u>喜欢吃米饭</u>                                         | <u>喜欢吃面食</u>                                     |
    | 交通特点 | <u>水路并举</u>                                           | <u>陆路交通为主</u>                                   |
    | 民居特色 | <u>注意防寒、保暖，墙壁厚实，窗户严密，室内有取暖设备</u> | <u>注意通风、防潮，屋顶坡度较大，一般没有取暖设备</u> |

4. 秦岭—淮河一线的地理意义

    1. <u>南北方分界线</u>
    2. <u>1 月 0℃ 等温线</u>
    3. <u>800mm 年等降水量线</u>
    4. <u>亚热带季风气候与温带季风气候分界线</u>
    5. <u>水稻主产区和小麦主产区的分界线</u>
    6. <u>水田和旱地分界线</u>
    7. <u>湿润区和半湿润区的分界线</u>
    8. <u>亚热带和暖温带的分界线</u>

5. 南北方不同人文环境形成的原因与所处的<u>自然环境</u>密切相关，其中，<u>气候</u>因素起着至关重要的作用。

---

#### 第二框 交流与互补

1. 不同地区之间交流与互补的目的：<u>我国不同地区之间存在着差异，需要区域之间进行交流与合作，以达到互惠互利、合作共赢、协同发展的目的。</u>

2. 中国气温分布特点：

    1. <u>冬季气温南高北低，南北温差大；</u>
    2. <u>夏季全国普遍高温，南北温差不大。</u>

3. 中国年降水量的分布特点：<u>年降水量由东南向西北递减</u>。

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
