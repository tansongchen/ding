---
sidebar_position: 2
---

# 顶功的优势

顶功的优势是什么？看了前两节的分析，你可能会说：

> 顶功就是少打空格，降低码长！

这句话对，但是也不全对。

说这句话对，是因为，在上面的例子中，声笔飞码确实比五笔字型在短码空间多了很多：

- 声笔飞码：两键字 567 个（21 × 26 + 21），三键字 2730 个（21 × 26 × 5）
- 五笔字型：两键字 25 个，三键字 625 个（25 × 25）

说这句话不对，是因为，理论上可以构造出来一个和声笔飞码码长相同的非顶功方案，这个方案的正则描述是：

- UA
- UBA
- UBBA

这和声笔飞码的正则描述（AU、AUB、AUBB）只是顺序调换了一下而已，实际的空间是一样大的，也就是说，这种方案两键字也可以有 567 个，三键字也可以有 2730 个，等等。而且，这个方案中没有任何一个编码是另一个编码的前缀，也就是说这不是顶功方案。

那么，这个方案的代价是什么呢？代价就是，你在输入第二码的时候，不知道这个字是用 UA 还是 UBA 编码的，只能尝试，或者死记住；同样，在输入第三码的时候，也不知道是该走 UBA 还是 UBBA 这条路。

再看五笔字型的编码。设 B = a ~ y 25 个键，A = 空格，那么正则描述是：

- BA（一级简码，如 g_）
- BBA（二级简码）
- BBBA（三级简码）
- BBBB

是不是和上面很像？但是，五笔字型的用户不需要死记到底是哪一级简码，因为他们在输入 B, BB, BBB 的时候分别已经显示出 BA, BBA, BBBA 的候选了，如果是想要的字就补空格（A）上屏，如果不是就继续打。这里的关键在于空格（A）是不携带信息的，所以用户不用被迫提前做出选择。

看到这里，你就会明白，所有非顶功方案都有一个天然的缺陷：除了最大码长的编码之外，其他编码（短码）的末码都不能携带任何信息，否则就会造成严重的易学性问题。然而，较短的编码正是效率的关键所在，短码的末码不携带信息必然损失编码效率。

为了把这种编码效率补回来，我们会看到，以 09 五笔为首的「多重简码」派一直在试图增大集合 A 的大小，从 091 的一二简三重到 092 的一二简十重，都是在增加这个「不携带信息的选择键」的数量，从而增加较短编码的空间大小。但是，这种多重简码需要额外记忆，指法也不是很好。

与此相对，顶功的解决方案就自然得多了：AU、AUB、AUBB，因为一个编码可以是另外一个编码的前缀，所以用户只需要看候选确认就可以自然地熟悉简码，而且不影响末码携带信息。

综上所述，顶功的真正优势在于「允许一个编码是另一个编码的前缀」和「简码是全码的前缀」这两者是天然吻合的。