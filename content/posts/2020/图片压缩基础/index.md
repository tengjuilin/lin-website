---
title: "图片压缩基础"
date: 2020-06-16T00:00:00+08:00
draft: false
resources:
- name: featured-image
  src: kinglee.jpg
lightgallery: true
---

## 图片里有什么信息？

图片是由一个个像素点构成的。

彩色图片每一个像素点的颜色都能被三个数字的 **RGB 色彩标准**所代表，分别是红色（**R**ed）、绿色(**G**reen)和蓝色(**B**lue)，每个数字取值 0~255。三种颜色合在一起就可以得到人眼能看到的大多数颜色。

黑白照片的像素点由一个数字来代表他的**灰度值**（gray scale），取值 0~255。黑色是 0，白色是 255。

### 矩阵：大家好 我又来了

这些像素点的信息可以构成一个**矩阵**（matrix），矩阵里的每个数字都代表着图片的颜色信息。

比如说这张图：

```matlab
% MATLAB INPUT: processing_img.mat
clear; clc; close all
A = imread('dog.jpg');
sizeA = size(A)
imshow(A);
title('Original Colored Image')
```

```matlab
% MATLAB OUTPUT
sizeA =
   327   327     3
```

{{< image src="fig1.png" caption="彩色憨憨" >}}

这个彩色憨憨就有 327 行像素和 327 列像素，每个像素分别对应 RGB 中的 3 个数字。

这里我们简化一下概念，只讨论黑白图片压缩，那么就将这张图片转化成黑白的：

```matlab
% MATLAB INPUT: processing_img.mat
A = im2double(rgb2gray(A));
sizeA = size(A)
storage = sizeA(1) * sizeA(2)
imshow(A);
title('Original Gray Scale Image')
```

```matlab
% MATLAB OUTPUT
sizeA =
   327   327
storage =
      106929
```

{{< image src="fig2.png" caption="黑白憨憨" >}}

这个黑白憨憨还是有 327 行像素和 327 列像素，但每个像素分别对应 1 个灰度值。这么说来我们需要储存 $327\times327=106929$ 组数字。

## 怎么压缩图片呢？

### 矩阵的奇异值分解

既然都把图片信息存入矩阵了，就不得不介绍一点线性代数（linear algebra）的内容了。推导的过程可能有些复杂，那就直接上结论吧：

一个 $m\times n$ 矩阵 $\mathbf{A}$ 可以被**分解成三个矩阵的乘积**:

$$\mathbf{A} = \mathbf{U \Sigma V}^{T}$$

将这三个矩阵对应的组成部分依照规则相乘后相加就能得到原矩阵:

$$\mathbf{A} = \sum_{i=1}^{\min (m, n)} \mathbf{u}_{i} \sigma _{i} \mathbf{v}_{i}^{T}$$

如果只将前k个对应的组成部分的积相加，那么我们就得到了原矩阵的**近似**:
$$\mathbf{A} \approx \sum_{i=1}^{k} \mathbf{u}_{i} \sigma _{i} \mathbf{v}_{i}^{T}, \quad \text{且 } k \le n$$

这样的矩阵运算就是矩阵的**奇异值分解** （singular value decomposition；SVD）。

怎么还是这么复杂？

说人话就是——我们找出了这个矩阵**最富有信息的部分**，并只把这一小部分储存起来，以达到**保留图片质量并缩小图片**（文件大小）的目的。

百闻不如一见，那么我们就来看看吧！（营销号未遂

### 图片压缩实例

如果我只把这三个矩阵第一组对应部分相乘（最最最有信息的部分），记作**一级近似**（rank-1 approximation），那么我们得到的矩阵（图片）长这样：

```matlab
% MATLAB INPUT: processing_img.mat
[U, S, V] = svd(A, 0);
k = 1;
rank1 = U(:, 1:k) * S(1:k, 1:k) * V(:, 1:k)';
imshow(rank1);
title(['Rank-', num2str(k), ' Approximation'])
```

{{< image src="fig3.png" caption="一级近似：是我近视了吗？" >}}

这... 这质量我还不如不压缩呢。不过别急，如果我们把前 k 组对应部分（前 k 组最最最有信息的部分）相乘之后相加，记作**k 级近似**。我们再来看看图片长什么样。先试试 $k=2$：

{{< image src="fig4.png" caption="二级近似：看起来差远了" >}}

有趣... 但还是什么都看不出来。再试试 $k=5$：

{{< image src="fig5.png" caption="五级近似：“干啥”显现！" >}}

好像有戏！ 图片下端的“干啥”二字隐约可见。继续尝试 $k=10$：

{{< image src="fig6.png" caption="十级近似：“干啥”实锤" >}}

已经可以明显看到“干啥”二字了！狗子的脸庞也模糊可见了。再试试 $k=20$：

{{< image src="fig7.png" caption="20级近似：似乎变得清晰了起来？" >}}

好像摘下了眼镜，图片终于能看了。再来增加到 $k=50$：

{{< image src="fig8.png" caption="50级近似：竟然真的清晰了起来？" >}}

这质量已经能作为这黑白憨憨原图的压缩版了。实际上，如果我们取 $k=327$（图片的像素列数），那么我们就能得到原图了：

{{< image src="fig9.png" caption="327级近似：就是我黑白憨憨本尊" >}}

50 级近似和原图相比，50 级近似还是有更多的噪点。

### 信息比：什么叫做足够好呢？

那我们如何决定怎样的压缩足够好呢？这里面就是**平衡的艺术**了：近似级数越小，图片越小（这里面均指文件大小），但是也越模糊；近似级数越大，图片越大，但是也越清晰。这里，我们可以用我们的近似所占总信息的百分比来帮助我们理解。将**信息比**定义为

$$信息比=\frac{近似拥有的信息}{原图拥有的信息}\times 100\%，$$

**近似等级越高，信息比越大，图片质量越好**。以一级近似为例来计算信息比:

```matlab
% MATLAB INPUT: processing_img.mat
sing_vals = diag(S);
rank1_energy = sum(sing_vals(1:k))/sum(sing_vals)
```

```matlab
% MATLAB OUTPUT
rank1_energy =
   0.3356
```

我们得到一级近似的信息比是 33.56%。这着实不怎么样。就像学了一学期的内容，结果期末考试的时候只记得了 1/3，哀哉哀哉。

同理，我们计算得到二级近似的信息比是 37.30%。可以看到，虽然我们多加了一层近似，信息比只增加了一点点——这是因为**绝大多数信息都储存在第一层**里面，其他细节都在之后的 326 层里。

还能看出轮廓的 20 级近似的信息比是 67.83%。就跟考试一样，还说得过去。

而很靠谱的 50 级近似的信息比是 85.84%，压缩质量很不错。

### 压缩比：信息比的死对头

与信息比对立的就是压缩比了。定义**压缩比**为

$$压缩比=\frac{压缩后图片文件大小}{原图文件大小}\times 100\%$$

虽说信息比越大，图片质量越好，但是图片也就越大。而我们本来的目的就是把图片变小。我们先来计算一级近似的压缩比：

```matlab
% MATLAB INPUT: processing_img.mat
original_img_size = 327*327
compressed_img_size = 327*k + k + 327*k
compression_rate = compressed_img_size / original_img_size
```

```matlab
% MATLAB OUTPUT
original_img_size =
      106929
compressed_img_size =
    655
compression_rate =
    0.0061
```

一级近似的大小是原图的 0.61%——完全成功地缩小图片，但也完全失去了图片质量，没有任何使用的意义。

同理，20 级近似的压缩比为 12.25%——成功的缩小了图片大小，保留了部分图片质量，但是只能模糊地看出照片的主体。

而 50 级近似是原图的 30.63%——**成功地平衡了压缩比和信息比**，得质量又得大小，完美地完成任务。

327 级近似的压缩比为 200%——比原图还要大。这是因为这种压缩的方法将原矩阵分解成了三个，其中一个矩阵只用储存对角线上的数据，大小可以忽略不计，因此大小是原图的两倍左右。

## 图片压缩 - 原来是这样

所以说抛开图片格式和编码这些复杂的东西，图片压缩在最基础的层面就是对**矩阵的数学运算**。

**近似等级越低，信息比越小（图片质量越低），压缩比越低（图片文件越小）。**

**近似等级越高，信息比越大（图片质量越高），压缩比越大（图片文件越大）。**

我们汇总一下上面的数据：

| 近似等级 |  信息比  |  压缩比  |  均衡度  |
|  ----  |  ----  |  ----  |  ----  |
| 一级近似 | 34% |  0.61%  | 质量低  |
| 二级近似 | 37% |  1.2%  |  质量低  |
| 五级近似 | 47% |  3%  |  质量低  |
| 十级近似 | 56% |  6%  |  质量低  |
| 20级近似 | 68% |  12%  |  质量勉强  |
| **50级近似** | **86%** |  **31%**  |  **质量和大小兼得**  |
| **100级近似** | **96%** |  **61%**  |  **质量和大小兼得**  |
| 200级近似 | 99.6% |  123%  |  比原图还大  |
| 327级近似 | 100% |  200%  |  比原图还大  |

所以，在压缩图片的时候**平衡图片质量和大小**就十分重要。

## 图片压缩大赏

### Kinglee Graduation 2019

{{< image src="fig11.png" caption="Kinglee Graduation 2019; Courtesy of Galvin Gao">}}
{{< image src="fig12.png" caption="Kinglee Graduation 2019; Courtesy of Galvin Gao">}}
{{< image src="fig13.png" caption="Kinglee Graduation 2019" >}}
{{< image src="fig14.png" caption="Kinglee Graduation 2019" >}}

### Good Old Kinglee Spirit

{{< image src="fig19.png" caption="Good Old Kinglee Spirit" >}}
{{< image src="fig20.png" caption="Good Old Kinglee Spirit" >}}

### UW Suzzallo Library

{{< image src="fig15.png" caption="UW Suzzallo Library" >}}
{{< image src="fig16.png" caption="UW Suzzallo Library" >}}

### UW Snowman @ Drumheller Fountain

{{< image src="fig17.png" caption="UW Snowman @ Drumheller Fountain" >}}
{{< image src="fig18.png" caption="UW Snowman @ Drumheller Fountain" >}}

## 附录

### 相关课程

- AMATH 301 Beginning Scientific Computing
- AMATH 352 Applied Linear Algebra and Numerical Analysis

### 引用文献

- Craig Gin, AMATH 301 5/13 Lecture Image Compression
- Anne Greenbaum, AMATH 352 Course Notes pp. 150, 154

> 本文也发于[微信公众号](https://mp.weixin.qq.com/s/DSx4hwdJa4oVq88frmfS_Q)。
