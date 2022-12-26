---
sidebar_position: 5
---

# 数学结果的证明

## Kraft-McMillan 不等式

**定理** 给定唯一可译码 $f:M\to L$，$L$ 对应的符号集 $S$ 的大小为 $r$，并且语言 $L$ 所包含的 $n$ 个符号串 $l_1,\cdots,l_n$ 的长度分别为 $w_1,\cdots,w_n$，那么

$$
\sum_{i=1}^nr^{-w_i}\le 1
$$

**证明** 我们记等式左方数值为 $K$。现在给定任意正整数 $m$，我们计算

$$
K^m=\sum_{i_1=1}^n\sum_{i_2=1}^n\cdots\sum_{i_m=1}^n r^{-w_{i_1}-w_{i_2}-\cdots -w_{i_n}}
$$

将上式按 $w_{i_1}+\cdots+w_{i_n}$ 的大小重新整理，可以得到

$$
K^m=\sum_{l=1}^{ml_{\max}}q_lr^{-l}
$$

其中，$l_{\max}$ 为语言 $L$ 中最长串的长度，$q_l$ 为 $w_{i_1}+\cdots+w_{i_n}=l$ 的项数。由于该码是唯一可译码，这样的项必然不能超过 $r^l$ 个（如不然，将会出现两种不同的组合方式得到同一个串的情况），因此有

$$
K^m\le\sum_{l=1}^{ml_{\max}}r^lr^{-l}=ml_{\max}
$$

接下来我们使用反证法：不妨设 $K>1$，记 $K=1+\delta$。当 $m$ 充分大以至于 $m>1+2l_{\max}/\delta^2$ 时，则有

$$
K^m\ge\frac12m(m-1)\delta^2>ml_{\max}
$$

矛盾。因此必须 $K\le1$。
