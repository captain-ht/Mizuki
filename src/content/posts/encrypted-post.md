---
title: 加密文章
published: 2024-01-15
description: 这是一篇用于测试页面加密功能的文章
encrypted: true
pinned: true
password: "123456"
tags: ["测试", "加密"]
category: "技术"
---

这是一篇加密文章示例。只有输入正确的密码才能查看内容。

## 加密功能

你可以通过在文章的前置元数据中设置 `encrypted: true` 和 `password` 字段来加密文章内容。

```yaml
---
title: 加密文章
encrypted: true
password: "你的密码"
---
```

## 使用方法

1. 在文章的前置元数据中添加 `encrypted: true`
2. 设置 `password` 字段为你的密码
3. 访问文章时，系统会要求输入密码
4. 只有输入正确密码的用户才能查看文章内容

## 注意事项

- 密码是明文存储的，请谨慎使用
- 建议使用强密码保护敏感内容
- 加密功能适用于需要限制访问的文章
