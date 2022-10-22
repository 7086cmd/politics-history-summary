
  <style>
  #title {
    padding-top: 40%;
    font-size: 96px;
    padding-bottom: 24%;
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

  .topic {
    padding-top: 12%;
    padding-bottom: 8%;
    font-size: 48px;
  }
</style>
<div class="center">
  <div id="title">{{ printTitle }}</div>
</div>
<div class="right">
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

    - [第二课 日益严峻的资源问题](#第二课-日益严峻的资源问题)<br>
      - [第一框 世界面临的资源问题](#第一框-世界面临的资源问题)<br>
      - [第二框 应对我国的资源问题](#第二框-应对我国的资源问题)<br>

<div class="divider"></div>


### 第二课 日益严峻的资源问题

---

#### 第一框 世界面临的资源问题

---

#### 第二框 应对我国的资源问题

1. 我国面临的资源状况

    1. <u>我国资源总量丰富，种类相当齐全。人均占有量远低于世界平均水平。导致资源短缺，影响经济社会的可持续发展和人民生活水平的提高。</u>
    2. <u>空间分布不均衡。导致资源区域性短缺，对工农业生产的布局和其余经济社会发展都会产生重大影响。</u>
    3. <u>利用率低，破坏与浪费严重。进一步加剧了资源短缺。</u>

2. 应对我国资源问题的措施（3 点）

    1. 基本国策：<u>节约资源</u>
    2. <u>跨区域调配</u>
    3. <u>开源与节流</u>
        1. 积极利用<u>太阳能</u>、<u>风能</u>等<u>清洁</u>能源，在<u>安全</u>的前提下稳步发展<u>核能</u>。
        2. 建立以<u>节水</u>、<u>节能</u>、<u>节材</u>为中心的工农业生产和城乡居民生活服务体系。

3. 在资源问题上，青少年应做到：
    1. <u>宣传节约资源的基本国策，树立人均观念和节约观念，珍惜和节约资源，减少浪费。</u>
    2. <u>遵守有关资源的法律法规，依法同浪费资源的行为作斗争。</u>
    3. <u>做到节水、节电，低碳出行，减少一次性物品的使用等。</u>

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

const printTitle = ref(new URL(location.href).pathname === '/print' ? "政史地总资料" : document.title
.split("|")[0]
.trim());

const printDate = ref(`导出日期：${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`);

</script>

<div class="divider_top"></div>

<div class="center">
  <div id="ending">初中政史地提纲整理</div>
</div>

<div class="right">
  <p>未经作者许可禁售。</p>
</div>
