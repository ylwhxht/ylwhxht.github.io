---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<div class="hx-hero">
  <span class='anchor' id='about-me'></span>
  <div class="hx-hero-top">
    <div>
      <div class="hx-hero-kicker">3D Vision · Embodied AI · Cooperative Perception</div>
      <h1><span>个人简介</span><small>Introduction</small></h1>
    </div>
    <div class="hx-hero-tag">PhD @ Xiamen University</div>
  </div>

  <div class="hx-hero-body">
    <div class="hx-hero-copy">
      <p>你好呀😊。我是黄勋，目前博士就读于<a href="https://www.xmu.edu.cn/">厦门大学</a>，于<a href="http://bjzgca.bjedu.cn:81">北京中关村学院</a>联合培养，我的导师是<a href="https://informatics.xmu.edu.cn/info/1385/26639.htm">温程璐教授</a>与<a href="https://chwang.xmu.edu.cn/">王程教授</a>。</p>
      <ul class="hx-focus-list">
        <li>具身智能与零样本导航</li>
        <li>协同/多模态三维感知</li>
        <li>鲁棒三维目标感知</li>
      </ul>
      <p>Hi 😊. I am Xun Huang, currently pursuing a PhD at <a href="https://www.xmu.edu.cn/">Xiamen University</a>, jointly trained at <a href="http://bjzgca.bjedu.cn:81">Zhongguancun Academy</a>. My supervisor is prof. <a href="https://informatics.xmu.edu.cn/info/1385/26639.htm">Chenglu Wen</a> and prof. <a href="https://chwang.xmu.edu.cn/">Cheng Wang</a>.</p>
      <ul class="hx-focus-list">
        <li>Embodied AI and zero-shot navigation</li>
        <li>Cooperative and multi-modal 3D perception</li>
        <li>Robust 3D object perception</li>
      </ul>
    </div>

    <div class="hx-hero-panel">
      <div class="hx-metric-grid">
        <div><span>12</span><small>Formal Publications</small></div>
        <div><span>247</span><small>Total Citations</small></div>
        <div><span>317</span><small>First-author GitHub Stars</small></div>
        <div><span>4</span><small>First-author Top-tier Papers</small></div>
      </div>
      <div class="hx-first-author-strip">
        <strong>First-author highlights</strong>
        <span>MSGNav: 3 citations · 46 stars</span>
        <span>V2X-R: 47 citations · 156 stars</span>
        <span>L4DR: 49 citations · 70 stars</span>
        <span>Sunshine to Rainstorm: 36 citations · 45 stars</span>
      </div>
    </div>
  </div>
</div>

<span class='anchor' id='-xl'></span>

# 🎓 教育经历/Education

- *2024.09 - 至今*$~~~~$ , <a href="https://www.xmu.edu.cn/"><img class="edu-logo" src="/images/xmu_transparent.png" alt="Xiamen University logo"></a> [厦门大学](https://www.xmu.edu.cn/) 人工智能研究院， 福建厦门， 博士（硕博连读）
- *2024.09 - 至今*$~~~~$ , <a href="http://bjzgca.bjedu.cn:81"><img class="edu-logo edu-logo--wide" src="/images/bza_logo_white.png" alt="Zhongguancun Academy logo"></a> [北京中关村学院](http://bjzgca.bjedu.cn:81)， 北京， 博士联合培养
- *2022.09 - 2024.06*, <a href="https://www.xmu.edu.cn/"><img class="edu-logo" src="/images/xmu_transparent.png" alt="Xiamen University logo"></a> [厦门大学](https://www.xmu.edu.cn/) 信息学院 $~~~~~~~~~$，  福建厦门， 硕士（推免）
- *2018.09 - 2022.06*, <a href="https://www.jmu.edu.cn/"><img class="svg" src="/images/jmu.png" width="23pt"></a> [集美大学](https://www.jmu.edu.cn/) 计算机工程学院，  福建厦门，  本科（GPA/综合排名均为1/116）

<span class='anchor' id='-lwzl'></span>

# 📝 科研成果/Research Achievements

截至 2026.04，Google Scholar 收录 12 项正式科研成果，累计引用 247 次。其中包括 5 篇`CVPR`，3 篇`AAAI`，1 篇`ECCV`，2 篇`TPAMI`，1 篇`Information Fusion`论文。以`第一作者`发表`AAAI2024`、`AAAI2025-Oral`、`CVPR2025`、`CVPR2026`。

As of 2026.04, Google Scholar lists 12 formal research works with 247 citations, including 5 `CVPR`, 3 `AAAI`, 1 `ECCV`, 2 `TPAMI`, and 1 `Information Fusion` papers. Among them, I have published `AAAI2024`, `AAAI2025-Oral`, `CVPR2025`, and `CVPR2026` as `first author`.

---

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPR - 2026</div><img src='images/msgnav.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**CVPR2026**

<div class="paper-stats"><span>First Author</span><span>3 Citations</span><span>46 GitHub Stars</span></div>

MSGNav: Unleashing the Power of Multi-modal 3D Scene Graph for Zero-Shot Embodied Navigation.

`Xun Huang`, Shijia Zhao, Yunxiang Wang, Xin Lu, Wanfa Zhang, Rongsheng Qu, Weixin Li, Yunhong Wang, Chenglu Wen.

[[paper]](https://arxiv.org/abs/2511.10376) [[code]](https://github.com/ylwhxht/MSGNav)

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPR - 2025</div><img src='images/v2xr_f.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**CVPR2025**

<div class="paper-stats"><span>First Author</span><span>47 Citations</span><span>156 GitHub Stars</span></div>

V2X-R: Cooperative LiDAR-4D Radar Fusion with Denoising Diffusion for 3D Object Detection.

`Xun Huang`, Jinlong Wang, Qiming Xia, Siheng Chen, Bisheng Yang, Xin Li, Cheng Wang, Chenglu Wen.

[[paper]](https://arxiv.org/abs/2411.08402) [[code]](https://github.com/ylwhxht/V2X-R) [[dataset]](http://39.98.109.195:1000/)

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">AAAI - 2025</div><img src='images/l4dr.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**AAAI2025 Oral**

<div class="paper-stats"><span>First Author</span><span>49 Citations</span><span>70 GitHub Stars</span></div>

L4DR: LiDAR-4DRadar Fusion for Weather-Robust 3D Object Detection.

`Xun Huang`, Ziyu Xu, Hai Wu, Jinlong Wang, Qiming Xia, Yan Xia, Jonathan Li, Kyle Gao, Chenglu Wen, Cheng Wang.

[[paper]](https://arxiv.org/abs/2408.03677) [[code]](https://github.com/ylwhxht/L4DR)

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">AAAI - 2024</div><img src='images/srkd.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**AAAI2024**

<div class="paper-stats"><span>First Author</span><span>36 Citations</span><span>45 GitHub Stars</span></div>

Sunshine to Rainstorm: Cross-Weather Knowledge Distillation for Robust 3D Object Detection.

`Xun Huang`, Hai Wu, Xin Li, Xiaoliang Fan, Chenglu Wen, Cheng Wang.

[[paper]](https://arxiv.org/abs/2402.18493) [[code]](https://github.com/ylwhxht/SRKD-DRET)

</div>
</div>

- **TPAMI2026** : DOtA++: Unsupervisely and Collaboratively Detect Objects From Multi-Agent Observations With Multi-Modal Prior Constraints.

$~~~~~~$ Qiming Xia, Longhui Zheng, Shijia Zhao, `Xun Huang`, Hai Wu, Chenglu Wen, Cheng Wang. [[paper]](https://doi.org/10.1109/TPAMI.2026.3664863)

- **Information Fusion 2026** : FusionBev: LiDAR and 4D Radar Fusion for 3D Object Detection.

$~~~~~~$ Yuanfan Qi, Chun Liu, Hai Wu, Ruijie Chen, Chenglu Wen, `Xun Huang`, Shoujun Jia, Keke Zhang. [[paper]](https://doi.org/10.1016/j.inffus.2026.104240)

- **AAAI2026** : V2VLoc: Robust GNSS-Free Collaborative Perception via LiDAR Localization.

$~~~~~~$ Wenkai Lin, Qiming Xia, Wen Li, `Xun Huang`, Chenglu Wen. [[paper]](https://arxiv.org/abs/2511.14247)

- **TPAMI2025** : Unsupervised 3D Object Detection by Commonsense Clue.

$~~~~~~$ Hai Wu, Shijia Zhao, `Xun Huang`, Qiming Xia, Chenglu Wen, Li Jiang, Xin Li, Cheng Wang. [[paper]](https://doi.org/10.1109/TPAMI.2025.3598341)

- **CVPR2025** : Learning to Detect Objects from Multi-Agent LiDAR Scans without Manual Labels.

$~~~~~~$ Qiming Xia, Wenkai Lin, Haoen Xiang, `Xun Huang`, Siheng Chen, Zhen Dong, Cheng Wang, Chenglu Wen. [[paper]](https://arxiv.org/abs/2503.08421) [[code]](https://github.com/xmuqimingxia/DOtA)

- **CVPR2024** : Commonsense Prototype for Outdoor Unsupervised 3D Object Detection.

$~~~~~~$ Hai Wu, Shijia Zhao, `Xun Huang`, Chenglu Wen, Xin Li, Cheng Wang. [[paper]](https://arxiv.org/abs/2404.16493) [[code]](https://github.com/hailanyi/CPD)

- **CVPR2024** : HINTED: Hard Instance Enhanced Detector with Mixed-Density Feature Fusion for Sparsely-Supervised 3D Object Detection.

$~~~~~~$ Qiming Xia, Wei Ye, Hai Wu, Shijia Zhao, Leyuan Xing, `Xun Huang`, Jinhao Deng, Xin Li, Chenglu Wen, Cheng Wang. [[paper]](https://doi.org/10.1109/CVPR52733.2024.01451)

- **ECCV2024** : CMD: A Cross Mechanism Domain Adaptation Dataset for 3D Object Detection

$~~~~~~$ Jinhao Deng, Wei Ye, Hai Wu, `Xun Huang`, Qiming Xia, Xin Li, Jin Fang, Wei Li, Chenglu Wen, Cheng Wang. [[paper]](https://doi.org/10.1007/978-3-031-72998-0_13) [[code]](https://github.com/im-djh/CMD)
<span class='anchor' id='-jsjx'></span>



# 🏆 竞赛奖项/Competition Awards
- *2019.10*, CCPC 中国大学生程序设计竞赛哈尔滨站铜奖
- *2020.10*, 蓝桥杯大赛软件类C/C++程序设计福建省一等奖、全国一等奖
- *2020.10*, CCPC 中国大学生程序设计竞赛威海站铜奖
- *2021.05*, 中国高校计算机大赛——团体程序设计天梯赛团队全国金奖、福建省特等奖
- *2021.05*, ACM-ICPC 国际大学生程序设计竞赛西安邀请赛铜奖、银川站铜奖


<span class='anchor' id='-rych'></span>
# 🏅 荣誉称号/Honorary Titles
- 本科生国家奖学金  
- 专业一等奖学金（8次）
- 厦门市陈嘉庚奖学金
- 麦克奥迪奖学金
- 校级三好学生
- 优秀共青团员
- 优秀学生干部
- 优秀毕业生


<span class='anchor' id='-qtjl'></span>

# 💻 其他经历/Others
- PAT-Professional Ability Test-Top (顶级) `100 分` (该年可 1.5 倍换算浙江大学计算机学院复试上机成绩,满分 100 分）
- 担任 `T-PAMI`，T-ITS，GRSL，PRCV 审稿人，并参与协助审稿 CVPR，ECCV，NIPS 论文
- 于 CSDN 博客平台分享原创科技论文等文章 112 篇，内容获`12w+阅读量`，上千次点赞与收藏

<span class='anchor' id='-yl'></span>

# 🎮 娱乐活动/Gaming

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">College competition of Teamfight Tactics</div><img src='images/gaoxiao.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

金铲铲之战`高校赛八强`

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Master Challenger in League of Legends</div><img src='images/lol.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

英雄联盟艾欧尼亚单双排`超凡大师`

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">The strongest King in Teamfight Tactics</div><img src='images/chanchan.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

金铲铲之战`最强王者`（千分，全服前400）

</div>
</div>


