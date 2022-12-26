---
sidebar_position: 2
---

# 前言

顶功风格的汉字输入方案（后文简称「顶功方案」）给人的印象大约如：规则复杂、难于学习记忆。同时，它对输入法平台很挑剔，目前只有三家主流平台支持：Rime[^1]、小小[^2]、多多[^3]，而商业输入法软件大都没留意过它。顶功方案注定是小众的。

可如果你，讨厌敲空格，追求极致手感；或者相信「字有限，词无穷」，而做个只打单字的「单字党」；又或者，在你的码表里塞入大词库时，冗繁的重码令你生厌！你可以来研究一下奇妙的顶功。

顶功原理这事，可以说简单，也可以不简单。它不过是利用了软件平台的「空码自动上屏」功能。可深究一步，如何设计码表，才能利用上这功能？很难回答。本书从信息论的角度，提供一些设计码表的基本思想，但终不能概全：仍有太多细枝末节超出理论，如何选择类型、如何赋予按键以意义、如何进一步优化手感码长？也许在成熟的作品中，你能找到合适的技巧。

本书收集了十几种成熟的方案，分别介绍了打字规则、性能表现、设计亮点等。它们有完善的码表，有熟练的用户，有独自的社区。这些方案用了不同的方法提高打字效率，如：复杂的编码规则、无理码、大词库、乱序字根、特殊的简码……，提高效率之余，还得留意手感，这往往要更精细地计算。如果你觉着方案少了些，可联系我们。

读完本书，你可能会有冲动，想亲手做一个方案，很棒！待你成功之日，与我们分享吧！

[^1]: Rime，中州韻輸入法引擎。作者：佛振@式恕堂。 [Rime 官网](https://rime.im/)。
[^2]: Yong，小小输入法。作者：ddog。 [小小输入法网盘](http://yongim.ys168.com/)。
[^3]: 多多中文输入法平台。作者：sys（多多论坛名称）。 [多多中文官网](https://www.chinput.com/portal.php)

## 2020 版序

2016 版的《顶功 · 集萃》，洋洋洒洒一万字，已经成为了顶功圈的入门必读书。它用了集合论的语言，细致地分析了顶功的规律。但，对于顶功的工作机制，仅提到了「我们也发现三种不同性质的编码……」「根据这些性质给出狭义顶功的附加限制条件」，不足够深入本质，颇是遗憾。2020 版则取师于信息论，提出「顶功码是非前缀码的唯一可译码」。这足够精确，也更为费解。

新版《顶功 · 集萃》会竭力使用通俗的文字和图片，成为合格的「入门书」(≧▽≦)

最近 4 年来，许多新方案诞生了，《顶功 · 集萃》也需添加章节、丰富内容。

初学顶功的读者，常常会被繁杂的方案迷了眼，反而犹犹豫豫，久久不能决定要使用的方案。因为效率和易学不可兼得，只能在局促的编码空间里平衡取舍。如果能找到心怡的成熟方案，那是万幸的；可现实里失望居多，或是不满意简码，或是无法接受无理码，或是跟自己习惯的方案相去甚远，最终他要么妥协，要么放弃。这样的故事见得多了。或许有另外的办法：自己制作一个，这样还会方便另一位有相同喜好的初学者。

本书会着力写制作码表的技术，不过学海无涯，作者无力写尽全部，只能浅谈设计技巧。

## 作者

- **蓝落萧**：制作《落萧双拼》《蓝版〈小兮码〉》《C输入法四二顶》，独自撰写了 2016 年版的《顶功 · 集萃》；为社区贡献海量理论研究，组织了「pychai 自动拆分」工程。构建了本书的 GitBook 网页， 编写 [信息论视角](informationism/README.md) 章节。邮箱：2320693692@qq.com
- **Yb**：一位希码用户，参与过逸码的制作。编写了其余章节，制作了大多数插图。邮箱：seetxx@qq.com

## 目录

- [封面](README.md)
- [前言](about/README.md) 
- [认识顶功](basics/README.md)
	- [案例：二码顶](basics/case.md)
	- [符号集](basics/symbol-set.md)
	- [顶字上屏](basics/push.md) 
	- [顶功的上屏原理](basics/ding-push.md)
	- [顶功的命名](basics/naming.md)
- [信息论视角](informationism/README.md)
	- [引言](informationism/introduction.md) 
	- [定义](informationism/definition.md) 
	- [方案设计](informationism/design.md)
- [如何评价](evaluation/README.md)
	- [评价码表](evaluation/evaluate-mabiao.md)
	- [评价符号组](evaluation/evaluate-design.md)
- [方案博览](collection/README.md)
	- [连续顶功](collection/continuous-ding.md)
		- [一码顶](collection/ding-one.md)
			- [左飞1811](collection/zuofei1811.md)
			- [声笔简码](collection/shengbijianma.md) 
		- [二码顶](collection/ding-two.md)
			- [声笔飞码](collection/shengbifeima.md)
			- [西风瘦码](collection/xifengshouma.md)
			- [小兮码](collection/xiaoxima.md)
			- [灵形速影](collection/lingxingsuying.md)
			- [leo乱序全形二码顶](collection/leoluanxu.md)
			- [落萧双拼](collection/luoxiaoshuangpin.md)
			- [星兮H](collection/xingxih.md)
		- [三码顶](collection/ding-tree.md)
			- [左飞三码顶](collection/zuofei-sanmading.md)
            - [听雨三码顶](collection/tingyu-sanmading.md)
		- [四码顶](collection/ding-four.md)
			- [星空键道](collection/xingkong.md) 
	- [混合顶功](collection/mixed-ding.md)
		- [二四顶](collection/ding-two-four.md)
			- [C输入法二四顶](collection/c-ersiding.md)
		- [四二顶](collection/ding-four-two.md)
			- [希码顶功动动版](collection/ximadinggong.md)
		- [二五顶](collection/ding-two-five.md)
			- [游天雕86五笔](collection/youtiandiao.md)
	- [其他顶功](collection/miscellany.md)
		- [TK并击](collection/tk-bingji.md)
- [制作一个方案](implementation/README.md)
	- [1. 选择一种风格]
	- [2. 制作全码表]
	- [3. 降低码长]
	- [4. 加入词语]
	- [5. 发布]
- [附录](appendix/README.md)
	- [数学结果的证明](appendix/proof.md)
	- 汉字的信息熵
