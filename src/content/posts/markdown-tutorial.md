---
title: Markdown 教程
published: 2025-01-20
pinned: true
description: 一个简单的 Markdown 博客文章示例。
tags: [Markdown, 博客]
category: 示例
licenseName: "Unlicensed"
author: emn178
sourceLink: "https://github.com/emn178/markdown"
draft: false
---

# Markdown 教程

一个 Markdown 示例展示了如何编写 Markdown 文件。本文档整合了核心语法和扩展（GMF）。

- [块级元素](#block-elements)
  - [段落和换行](#paragraphs-and-line-breaks)
  - [标题](#headers)
  - [引用](#blockquotes)
  - [列表](#lists)
  - [代码块](#code-blocks)
  - [水平线](#horizontal-rules)
  - [表格](#table)
- [行内元素](#span-elements)
  - [链接](#links)
  - [强调](#emphasis)
  - [代码](#code)
  - [图片](#images)
  - [删除线](#strikethrough)
- [其他](#miscellaneous)
  - [自动链接](#automatic-links)
  - [反斜杠转义](#backslash-escapes)
- [行内 HTML](#inline-html)

## 块级元素

### 段落和换行

#### 段落

HTML 标签：`<p>`

一个或多个空行。（空行是指只包含**空格**或**制表符**的行。）

代码：

    这将是
    行内的。

    这是第二段。

预览：

---

这将是
行内的。

这是第二段。

---

#### 换行

HTML 标签：`<br />`

在行末使用**两个或更多空格**。

代码：

    这不会
    行内。

预览：

---

这不会  
行内。

---

### 标题

Markdown 支持两种标题样式：Setext 和 atx。

#### Setext

HTML 标签：`<h1>`、`<h2>`

使用任意数量的**等号 (=)** 作为 `<h1>` 和**破折号 (-)** 作为 `<h2>` 来"下划线"。

代码：

    这是一级标题
    =============
    这是二级标题
    -------------

预览：

---

# 这是一级标题

## 这是二级标题

---

#### atx

HTML 标签：`<h1>`、`<h2>`、`<h3>`、`<h4>`、`<h5>`、`<h6>`

在行首使用 1-6 个**井号 (#)**，对应 `<h1>` - `<h6>`。

代码：

    # 这是一级标题
    ## 这是二级标题
    ###### 这是六级标题

预览：

---

# 这是一级标题

## 这是二级标题

###### 这是六级标题

---

可选地，你可以"闭合" atx 样式的标题。闭合的井号**不需要匹配**用于打开标题的井号数量。

代码：

    # 这是一级标题 #
    ## 这是二级标题 ##
    ### 这是三级标题 ######

预览：

---

# 这是一级标题

## 这是二级标题

### 这是三级标题

---

### 引用

HTML 标签：`<blockquote>`

Markdown 使用邮件风格的 **>** 字符进行引用。如果你硬换行文本并在每行前放置 >，效果最好。

代码：

    > 这是一个包含两段的引用。Lorem ipsum dolor sit amet,
    > consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
    > Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.
    >
    > Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
    > id sem consectetuer libero luctus adipiscing.

预览：

---

> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
> consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
> Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.
>
> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
> id sem consectetuer libero luctus adipiscing.

---

Markdown 允许你偷懒，只在硬换行段落的第一行前放置 >。

代码：

    > This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
    consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
    Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.

    > Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
    id sem consectetuer libero luctus adipiscing.

预览：

---

> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
> consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
> Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.

> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
> id sem consectetuer libero luctus adipiscing.

---

引用可以嵌套（即引用中的引用），通过添加额外的 > 层级。

代码：

    > This is the first level of quoting.
    >
    > > This is nested blockquote.
    >
    > Back to the first level.

预览：

---

> This is the first level of quoting.
>
> > This is nested blockquote.
>
> Back to the first level.

---

引用可以包含其他 Markdown 元素，包括标题、列表和代码块。

代码：

    > ## This is a header.
    >
    > 1.   This is the first list item.
    > 2.   This is the second list item.
    >
    > Here's some example code:
    >
    >     return shell_exec("echo $input | $markdown_script");

预览：

---

> ## This is a header.
>
> 1.  This is the first list item.
> 2.  This is the second list item.
>
> Here's some example code:
>
>     return shell_exec("echo $input | $markdown_script");

---

### 列表

Markdown 支持有序（编号）和无序（项目符号）列表。

#### 无序列表

HTML 标签：`<ul>`

无序列表使用**星号 (\*)**、**加号 (+)** 和**连字符 (-)**。

代码：

    *   红色
    *   绿色
    *   蓝色

预览：

---

- Red
- Green
- Blue

---

等价于：

代码：

    +   红色
    +   绿色
    +   蓝色

和：

代码：

    -   红色
    -   绿色
    -   蓝色

#### 有序列表

HTML 标签：`<ol>`

有序列表使用数字后跟句点：

代码：

    1.  Bird
    2.  McHale
    3.  Parish

预览：

---

1.  Bird
2.  McHale
3.  Parish

---

It's possible to trigger an ordered list by accident, by writing something like this:

代码：

    1986. What a great season.

预览：

---

1986. What a great season.

---

You can **backslash-escape (\\)** the period:

代码：

    1986\. What a great season.

预览：

---

1986\. What a great season.

---

#### 缩进列表

##### 引用中的列表

要在列表项中放置引用，引用的 > 分隔符需要缩进：

代码：

    *   A list item with a blockquote:

        > This is a blockquote
        > inside a list item.

预览：

---

- A list item with a blockquote:

  > This is a blockquote
  > inside a list item.

---

##### 代码块中的列表

要在列表项中放置代码块，代码块需要缩进两次——**8 个空格**或**两个制表符**：

代码：

    *   A list item with a code block:

            <code goes here>

预览：

---

- A list item with a code block:

      <code goes here>

---

##### 嵌套列表

代码：

    * A
      * A1
      * A2
    * B
    * C

预览：

---

- A
  - A1
  - A2
- B
- C

---

### 代码块

HTML 标签：`<pre>`

将块的每一行至少缩进**4 个空格**或**1 个制表符**。

代码：

    This is a normal paragraph:

        This is a code block.

预览：

---

This is a normal paragraph:

    This is a code block.

---

A code block continues until it reaches a line that is not indented (or the end of the article).

Within a code block, **_ampersands (&)_** and angle **brackets (< and >)** are automatically converted into HTML entities.

代码：

        <div class="footer">
            &copy; 2004 Foo Corporation
        </div>

预览：

---

    <div class="footer">
        &copy; 2004 Foo Corporation
    </div>

---

以下部分围栏代码块和语法高亮是扩展功能，你可以使用其他方式编写代码块。

#### 围栏代码块

只需将代码包裹在 ` ``` ` 中（如下所示），你就不需要缩进四个空格。

代码：

    Here's an example:

    ```
    function test() {
      console.log("notice the blank line before this function?");
    }
    ```

预览：

---

Here's an example:

```
function test() {
  console.log("notice the blank line before this function?");
}
```

---

#### 语法高亮

在你的围栏代码块中，添加可选的语言标识符，我们将通过语法高亮运行它（[支持的语言](https://github.com/github/linguist/blob/master/lib/linguist/languages.yml)）。

代码：

    ```ruby
    require 'redcarpet'
    markdown = Redcarpet.new("Hello World!")
    puts markdown.to_html
    ```

预览：

---

```ruby
require 'redcarpet'
markdown = Redcarpet.new("Hello World!")
puts markdown.to_html
```

---

### 水平线

HTML 标签：`<hr />`
在一行中单独放置**三个或更多连字符 (-)、星号 (\*) 或下划线 (\_)**。你可以在连字符或星号之间使用空格。

代码：

    * * *
    ***
    *****
    - - -
    ---------------------------------------
    ___

预览：

---

---

---

---

---

---

---

---

### 表格

HTML 标签：`<table>`

这是一个扩展功能。

用**管道符 (|)** 分隔列，用**破折号 (-)** 分隔表头，使用**冒号 (:)** 进行对齐。

外层的**管道符 (|)** 和对齐是可选的。每个单元格至少有 **3 个分隔符**用于分隔表头。

代码：

```
| Left | Center | Right |
|:-----|:------:|------:|
|aaa   |bbb     |ccc    |
|ddd   |eee     |fff    |

 A | B
---|---
123|456


A |B
--|--
12|45
```

预览：

---

| Left | Center | Right |
| :--- | :----: | ----: |
| aaa  |  bbb   |   ccc |
| ddd  |  eee   |   fff |

| A   | B   |
| --- | --- |
| 123 | 456 |

| A   | B   |
| --- | --- |
| 12  | 45  |

---

## 行内元素

### 链接

HTML 标签：`<a>`

Markdown 支持两种链接样式：行内和引用。

#### 行内链接

行内链接格式如下：`[链接文本](URL "标题")`

标题是可选的。

代码：

    This is [an example](http://example.com/ "Title") inline link.

    [This link](http://example.net/) has no title attribute.

预览：

---

This is [an example](http://example.com/ "Title") inline link.

[This link](http://example.net/) has no title attribute.

---

如果你引用同一服务器上的本地资源，可以使用相对路径：

代码：

    See my [About](/about/) page for details.

预览：

---

See my [About](/about/) page for details.

---

#### 引用链接

你可以预定义链接引用。格式如下：`[id]: URL "标题"`

标题也是可选的。然后你引用链接时，格式如下：`[链接文本][id]`

代码：

    [id]: http://example.com/  "Optional Title Here"
    This is [an example][id] reference-style link.

预览：

---

[id]: http://example.com/ "Optional Title Here"

This is [an example][id] reference-style link.

---

That is:

- Square brackets containing the link identifier (**not case sensitive**, optionally indented from the left margin using up to three spaces);
- followed by a colon;
- followed by one or more spaces (or tabs);
- followed by the URL for the link;
- The link URL may, optionally, be surrounded by angle brackets.
- optionally followed by a title attribute for the link, enclosed in double or single quotes, or enclosed in parentheses.

The following three link definitions are equivalent:

代码：

    [foo]: http://example.com/  "Optional Title Here"
    [foo]: http://example.com/  'Optional Title Here'
    [foo]: http://example.com/  (Optional Title Here)
    [foo]: <http://example.com/>  "Optional Title Here"

Uses an empty set of square brackets, the link text itself is used as the name.

代码：

    [Google]: http://google.com/
    [Google][]

预览：

---

[Google]: http://google.com/

[Google][]

---

### 强调

HTML 标签：`<em>`、`<strong>`

Markdown 将**星号 (\*)** 和**下划线 (\_)** 视为强调指示符。**一个分隔符**将是 `<em>`；\*_双分隔符_ 将是 `<strong>`。

代码：

    *single asterisks*

    _single underscores_

    **double asterisks**

    __double underscores__

预览：

---

_single asterisks_

_single underscores_

**double asterisks**

**double underscores**

---

But if you surround an \* or \_ with spaces, it'll be treated as a literal asterisk or underscore.

You can backslash escape it:

代码：

    \*this text is surrounded by literal asterisks\*

预览：

---

\*this text is surrounded by literal asterisks\*

---

### 代码

HTML 标签：`<code>`

用**反引号 (`)** 包裹它。

代码：

    Use the `printf()` function.

预览：

---

Use the `printf()` function.

---

To include a literal backtick character within a code span, you can use **multiple backticks** as the opening and closing delimiters:

代码：

    ``There is a literal backtick (`) here.``

预览：

---

``There is a literal backtick (`) here.``

---

The backtick delimiters surrounding a code span may include spaces — one after the opening, one before the closing. This allows you to place literal backtick characters at the beginning or end of a code span:

代码：

    A single backtick in a code span: `` ` ``

    A backtick-delimited string in a code span: `` `foo` ``

预览：

---

A single backtick in a code span: `` ` ``

A backtick-delimited string in a code span: `` `foo` ``

---

### 图片

HTML 标签：`<img />`

Markdown 使用一种图片语法，旨在类似于链接的语法，允许两种样式：行内和引用。

#### 行内图片

行内图片语法如下：`![替代文本](URL "标题")`

标题是可选的。

代码：

    ![Alt text](/path/to/img.jpg)

    ![Alt text](/path/to/img.jpg "Optional title")

预览：

---

![Alt text](https://s2.loli.net/2024/08/20/5fszgXeOxmL3Wdv.webp)

![Alt text](https://s2.loli.net/2024/08/20/5fszgXeOxmL3Wdv.webp "Optional title")

---

即：

- 感叹号：!；
- 后跟一组方括号，包含图片的 alt 属性文本；
- 后跟一组圆括号，包含图片的 URL 或路径，以及用双引号或单引号括起来的可选标题属性。

#### 引用图片

引用样式的图片语法如下：`![替代文本][id]`

代码：

    [img id]: https://s2.loli.net/2024/08/20/5fszgXeOxmL3Wdv.webp  "Optional title attribute"
    ![Alt text][img id]

预览：

---

[img id]: https://s2.loli.net/2024/08/20/5fszgXeOxmL3Wdv.webp "Optional title attribute"

![Alt text][img id]

---

### 删除线

HTML 标签：`<del>`

这是一个扩展功能。

GFM 添加了删除线文本的语法。

代码：

```
~~Mistaken text.~~
```

预览：

---

~~Mistaken text.~~

---

## 其他

### 自动链接

Markdown 支持一种快捷方式样式来创建 URL 和电子邮件地址的"自动"链接：只需用尖括号包围 URL 或电子邮件地址。

代码：

    <http://example.com/>

    <address@example.com>

预览：

---

<http://example.com/>

<address@example.com>

---

GFM 会自动链接标准 URL。

代码：

```
https://github.com/emn178/markdown
```

预览：

---

https://github.com/emn178/markdown

---

### 反斜杠转义

Markdown 允许你使用反斜杠转义来生成字面字符，否则这些字符在 Markdown 的格式化语法中具有特殊含义。

代码：

    \*literal asterisks\*

预览：

---

\*literal asterisks\*

---

Markdown 为以下字符提供反斜杠转义：

代码：

    \   backslash
    `   backtick
    *   asterisk
    _   underscore
    {}  curly braces
    []  square brackets
    ()  parentheses
    #   hash mark
    +   plus sign
    -   minus sign (hyphen)
    .   dot
    !   exclamation mark

## 行内 HTML

对于 Markdown 语法未涵盖的任何标记，你只需使用 HTML 本身。无需前言或分隔符来指示你从 Markdown 切换到 HTML；你只需使用标签。

代码：

    This is a regular paragraph.

    <table>
        <tr>
            <td>Foo</td>
        </tr>
    </table>

    This is another regular paragraph.

预览：

---

This is a regular paragraph.

<table>
    <tr>
        <td>Foo</td>
    </tr>
</table>

This is another regular paragraph.

---

请注意，Markdown 格式化语法**不会在块级 HTML 标签内处理**。

与块级 HTML 标签不同，Markdown 语法**会在行内级标签内处理**。

代码：

    <span>**Work**</span>

    <div>
        **No Work**
    </div>

预览：

---

<span>**Work**</span>

<div>
  **No Work**
</div>
***