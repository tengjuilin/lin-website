---
title: "台湾地区 COVID-19 案例数据分析"
date: 2021-05-16T00:00:00+08:00
draft: false
resources:
- name: featured-image
  src: cover.jpg
lightgallery: true
---

## 背景

2021年04月20日，台湾新增两航空公司机师新冠确诊病例。之后三周内，岛内零零星星增加相关与机师防疫旅馆的新冠确诊病例，感染人群包括机师、防疫旅馆工作人员、外包商及其家人。

2021年05月11日，本土新增病例爬升至7例，其中6例届时感染源不明，包含1起宜兰游艺场群聚事件。因出现感染源不明的本土案例，防疫警戒升为第二级。

之后，本土新增病例持续增加，分布地区广泛。又发现两起群聚感染时间，分别位于台北市万华区和新北市芦洲区。

在2021年05月14日，本土新增病例来到29例。其中两例为台北市和平医院病患。医院采取只出不进的减载措施，但不封院。据了解，2003年时，该院曾爆发SARS院内感染，导致封院。当日，台北市万华区设立多个筛检站进行筛检作业。

2021年05月15日，本土新增病例爆发至180例，分散于7个县市。其中，台北市89例，新北市75例。上午，疫情指挥中心宣布台北、新北两市进入第三级防疫警戒。暂不停班停课。当日，全台中学按计划进行会考，约有20万考生参加。（文献：CDC）

## 数据获取

因需分析本土病例，而JHU数据集并没有区分本土和境外病例，加上时序较短，故使用CDC新闻稿内容进行手动数据收集。2021年04月20日至2021年05月15日，每日本土新增数据如下：[2, 0, 0, 0, 1, 0, 2, 1, 3, 2, 3, 1, 4, 2, 2, 0, 1, 0, 1, 0, 3, 7, 16, 13, 29, 180]（数据：CDC）

## 数据可视化

首先，绘出自04月20日的每日新增病例图。

{{< image src="vis-1.png" caption="Outbreak analysis" >}}

由于05月15日新增病例太多，导致坐标轴拉长，我们先去除该数据来看前几日的趋势：

{{< image src="vis-2.png" caption="Outbreak analysis" >}}

该图显示，自05月09日，本土病例数持续上升，大有指数增长的趋势。而05月15日的案例数爆发（6倍增长），部分支持了该推断。

## 数据分析与预测

在完全没有防控措施的情况下的传染病传播，可以很好地用指数函数来模拟。我们有简单的指数函数

$$P(t) = Ae^{kt}$$

$t$ 为时间，$P(t)$ 为每日新增确诊病例，$A$ 为感染基数，$k$ 为感染速率。

当 $k>0$ 时，新增病例增加；当 $k<0$ 时，新增病例减少。

使用 `scipy.optimize` 中 `curve_fit()` 函数使用每五天的数据预测后五天的数据，得到下图：

{{< image src="analysis-1.png" caption="Outbreak analysis" >}}

黑色散点为原始数据。

深红、深绿折线为使用最近5天数据形成的模型与对之后5天的预测。该模型显示，在无防控措施的情况下，明日（05月16日）预计确诊病例可达约970例。

鉴于防疫等级已经提升，模型假设已不完全具备。在控制得当的情况下，案例确诊速率可能在增加后缓慢减少。但在近日有举行过多场大型宗教绕境活动与会考，模型预测结果仍需结合实际情况权衡。

浅红、浅绿折线为使用每5天数据形成的模型与对之后5天的预测。如，选取05月07日至11日的数据生成模型以预测05月12日至16日。

值得注意的是，05月12日（左侧浅红折线）的模型预测很好地预测了05月15日的病例激增。其与原始数据在13、14日有较大差距的原因主要在于案例检测的滞后性。由于台北市在14日才设立筛检站，**社区感染信息的获取已经滞后与疫情发展**。

**使用05月12日的模型，台湾明日（05月16日）预计本土新增确诊病例可达约540例**。结合实际情况，该模型较为现实。

我们还注意到05月13和14日的模型（右侧浅红折线）预测了较为缓慢的病例增长。这显然是基于我们已知所有社区感染信息的假设（即：应筛尽筛、应治尽治）。但根据现有数据和上文的分析，该假设已经被证伪。故不采用这些模型的数据。

---

我们聚焦于本轮疫情刚开始时的数据，将图片放大：

{{< image src="analysis-2.png" caption="Outbreak analysis" >}}

我们发现，在起初发现机师病例时，模型均预测疫情能够有效得到控制。但是，在长期的信息滞后的情况下，而防疫政策因多种原因未能加强，导致后来疫情多点爆发。模型也给出了疫情增长的预测警讯。

## 数据分析与政策建议

基于上文数据和模型，在加强防疫措施和等级的基础上，应当切实落实新冠病毒的筛检。

由于先前政策，筛检变成一件医师在病人无流行病史的情况下（医学上）难以要求的、（政治上）不敢要求的医学检测，使社区疫情信息长期处于滞后的状态下，进而导致防疫政策滞后。

为解决信息滞后问题，建议确保在高风险地区，能进行筛检的就进行筛检。**降低筛检门槛，广设筛检站，设立发烧门诊。** 在确保医疗资源集中于高风险地区以应对持续增加的病例的情况下，**在多县市也开展自愿筛检工作**。

**统筹防疫旅馆，规划方舱医疗**的可能性。由于先前已发生至少2例家庭群聚，加上近日中学会考聚集，更应采取措施，**防止家庭群聚**爆发的可能性。

由于台北、新北市已经进入三级警戒，进入公共场所采取“实联制”，即登记姓名电话。但在实际实施时，仍有诸多不便，登记时也有造成交叉感染的可能性，发生案例后调查繁复，因此**电子化联网的“健康码”** 不失为一个很好的解决方案。

近日，大陆地区也有多省市新增本土病例，且多为无症状感染者。为有效应对疫情，其中**广泛推行的社区筛检检测、重视无症状感染者**等有效措施，（其实在很早之前）都具有借鉴意义。

## 附录

> 本文也发于[微信公众号](https://mp.weixin.qq.com/s/lsR-JnaltNonUpgzDjl1Hg)。
