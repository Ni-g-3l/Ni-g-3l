---
title: "C++ Cheatsheet"
date: 2025-01-01
description: "Quick-reference C++ snippets and core concepts for day-to-day development."
summary: "Quick-reference C++ snippets and core concepts for day-to-day development."
tags: ["C++", "software"]
---

## Overview

This note is a **practical reference** for commonly used **C++ snippets** and **core concepts**.

The focus is on:

* Day-to-day development workflows
* Short explanations that clarify *when* and *why* something is used
* Examples that reflect real-world usage rather than exhaustive documentation

### ⏱ Time Measurement (Elapsed Time)

**Use when:** Measuring execution time of a code block.

```cpp
#include <chrono>
#include <iostream>

auto start = std::chrono::steady_clock::now();

// code to measure

auto end = std::chrono::steady_clock::now();

auto elapsed = std::chrono::duration_cast<std::chrono::milliseconds>(
    end - start
);

std::cout << elapsed.count() << " ms\n";
```

**Key points**

* `steady_clock` → monotonic, safe for timing
* `duration_cast<T>` → convert to desired unit
* `count()` → numeric value

**Common units**

```cpp
std::chrono::nanoseconds
std::chrono::microseconds
std::chrono::milliseconds
std::chrono::seconds
```

---

### 🧠 Quick Reminder

| Task                 | Recommendation                       |
| -------------------- | ------------------------------------ |
| Measure elapsed time | `std::chrono::steady_clock`          |
| Wall-clock time      | `std::chrono::system_clock`          |
| High precision       | `std::chrono::high_resolution_clock` |

---
