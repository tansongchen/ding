---
sidebar_position: 3
---

# 软件平台

在您完成您的顶功输入方案之后，您需要找一个输入平台来使用您的方案。

## Rime 输入平台

[Rime](https://rime.im) 包括了核心的输入引擎以及全平台支持的前端（中州韵、小狼毫、鼠须管、同文、小企鹅、仓输入法）。Rime 对连续顶功有开箱即用的支持，只要设置 `speller/auto_select: true` 即可。

对于非连续顶功，您可以使用它的 [lua 扩展](https://github.com/hchunhui/librime-lua)功能，定义特殊的 `lua_processor` 来处理顶功、上屏相关的逻辑。

### 声笔模组

「声笔模组」是本书作者在重构声笔系列码时编写的一套基于 librime-lua 扩展的 lua 脚本，可以通过配置文件支持任意格式的顶功。除基本的顶功之外，该模组还包括：

- 适用于 `table_translator` 的自动码长、动态调频翻译器；
- 适用于 `script_translator` 的固顶字词、首选后置处理器。
- 可以用正则表达式来扩展的 `key_binder` 和 `selector`，增强了 Rime 内置组件的功能

## 其他输入平台

多多输入法和小小输入法对顶功也有有限的支持。