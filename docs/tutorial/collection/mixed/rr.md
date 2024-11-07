---
sidebar_position: 3
---

# Rr 并击

## 基本信息

- 简介：https://www.jsxiaoshi.com/post_index/tid/3740
- 输入方案、社区：QQ 群（374971723）

## 编码规则

「Rr 并击」是形音、主单辅词的输入方案。

它首先将[虎码](https://tiger-code.com)的字根分为 30 组，然后通过大小写变换得到 60 个单手组合。记双手并击为大集合 A（3600 个组合），单手并击为小集合 B（120 个组合）。

单字全码有两个规则，前者只有常用字，后者做了全字集：

- 形音规则：[首根 + 末根] + 拼音首字母
- 全形规则：[首根 + 末根] + 第二根 + 第三根

其中「首根 + 末根」为双手一击打出。单字简码就是只打第一击。

词组全码是类似于四码定长的组词规则，一共 4 码，分两击打完，中间用分隔符 ' 隔开。

总结，Rr 并击的格式为：

- A（单字简码）
- AB（单字形音全码）
- ABB（单字纯形全码）
- A'A（词组）

在这个意义上，Rr 并击属于一码顶。

## 评价

### 易用性

由于采用了大小写变换的方式来生成 60 个码元而不是直接将元素布局在 60 个码元上，其难度要高于 [TK 并击](tk.md)。

### 编码效率

与 [TK 并击](tk.md)类似，单字 + 少量简词可以让「击长」接近 1.0。

### 离散能力

大小写变换解决了并击的大部首问题，离散性能更好。