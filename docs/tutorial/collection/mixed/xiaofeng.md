---
sidebar_position: 4
---

# 小锋顶

## 基本信息

小锋顶，又称「无规则顶功」、「二三四混顶」、「二三整句」，是码圈著名音乐人赵小锋琢磨出来的单字整句玩法，经过字源输入法作者彭秀峰改进，目前实现于大唐输入法平台中。

## 编码规则

严格来说，小锋顶并非本集萃定义的顶功，本身也不是独立完整的输入方案，只是其做法的目的和效果与顶功类似——尽量避免空格以获得整句连打的体验，降低码长。其词表的建立过程如下：

1. 选取**低重**的三码或四码输入方案的拆分表和单字**全码**码表，如[虎码](https://tiger-code.com)、[宇浩](https://shurufa.app/)、[天码](http://soongsky.com/sky/)、[字源](http://ziyuan.ysepan.com)、[文心两仪](https://qm.qq.com/q/bpM4grfQNq)；

2. 选取某个字频文件中的前 3000 高频单字，如[知频](https://github.com/gaboolic/rime-frost/blob/master/others/知频.txt)；

3. 将这 3000 个单字按字频降序排列，依次分配一简、二简、三简，没能分配到简码的单字取全码；
   
   * 彭秀峰的改进：按拆分的字根数量升序以及字频降序排列，这样尽量让简码和全码相同，以减少简码记忆量，例如低频两根字编码 `AB` 优先高频三根字编码 `ABC`分配到简码 AB，经实际测算，这个做法基本不改变生成的码表的重码数量，而由于所有单字都是常用字，因此也基本不影响码长。

4. 需要输入法平台如 [中州韻輸入法](https://rime.im/)、[大唐输入法](http://datang6688.ysepan.com)的支持，达到只有一简需要接空格，二简、三简、全码都不需要接空格的整句连打体验；
   
   * 高频的一简接空格充当了分词的效果；
   
   * 高离散的单字编码可以让输入法平台用空码来进一步帮助区分单字编码的边界；
   
   * 用户要随着输入慢慢积累两字词，以帮助输入法平台在上两个措施不够时，进一步用用户提供的 Bigram 词表来消除单字编码边界的歧义；
   
   * 最后，类似全拼输入，支持用户选重，也支持用户快速回改，例如大唐输入法的「瞬改」功能；

## 评价

### 易用性

小锋顶是嫁接在任意低重输入方案上单字整句输入模式，优点是通用，可以复用已经学会的三码或四码方案，基本不用考虑分词，较少按空格，码长较短，缺点是只适合小字集的规律输入，能容忍少量错别字，如日常聊天，不太适合打古文、专业文献。

### 编码效率

由于省略了二简、三简后的空格，其码长较短，在 2.0 左右。

### 离散能力

取决于所挂载到的输入方案的离散能力，离散越高，使用体验越好。