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

### `std::span` (C++20)

**What it is**

* Non-owning view over contiguous memory
* Works with:

  * C-style arrays
  * `std::array`
  * `std::vector`

**Why use it**

* Avoids templating functions on container types
* Prevents tight coupling between APIs and containers
* Improves readability and flexibility of function signatures

**Key properties**

* No memory ownership
* No allocation or resizing
* Read-only or mutable (`std::span<T>` vs `std::span<const T>`)

**Common APIs**

* `span.size()` — number of elements
* `span.data()` — pointer to data
* `span.subspan(offset, count)` — view into a subset

**Example**

```cpp
void print_names(std::span<const std::string> names)
{
    for (const auto& n : names)
        std::cout << n << '\n';
}

int main()
{
    const std::string raw[] = {"John", "Alex"};
    std::vector<std::string> vec = {"Jordan", "Jack"};
    std::array<std::string, 2> arr = {"Kevin", "Kirye"};

    print_names(raw);
    print_names(vec);
    print_names(arr);
}
```

**Rules of thumb**

* Use `std::span` for function parameters
* Never store `std::span` beyond the lifetime of the data
* Prefer `std::span<const T>` for read-only access

### Time Measurement (Elapsed Time)

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
