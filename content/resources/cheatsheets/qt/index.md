---
title: "Qt"
date: 2025-01-01
description: "Practical Qt reference: common snippets, patterns, and core concepts."
summary: "Concise, real-world Qt snippets and reminders for everyday development."
tags: ["Qt", "PySide", "PyQt", "snippets"]
---

## Overview

This document is a **practical Qt cheatsheet** focused on **frequently used snippets**, **flags**, and **core concepts** encountered in real-world applications.

**Qt** is a cross-platform C++ framework (also available via Python bindings such as **PySide** and **PyQt**) following the **WOCA** principle (*Write Once, Compile Anywhere*).
It is widely used for building **desktop applications**, **GUIs**, and **embedded systems** across Windows, Linux, and macOS.

---

### Check if a `QListWidgetItem` is checkable

```python
is_checkable = bool(item.flags() & Qt.ItemIsUserCheckable)
```

**Explanation**

* `Qt.ItemIsUserCheckable` is a **flag**, not a property.
* You must test it using a **bitwise AND (`&`)**.

> **`QListWidgetItem` is *not* checkable by default.**
> The checkbox will only appear if:
>
> * the `Qt.ItemIsUserCheckable` flag is set **and**
> * a check state is explicitly assigned using `setCheckState()`.

✅ Correct usage reminder:

```python
item.setFlags(item.flags() | Qt.ItemIsUserCheckable)
item.setCheckState(Qt.Unchecked)
```

----
