---
title: "CMake"
date: 2025-01-01
description: "A practical reference for common CMake commands and core concepts, with concise explanations based on real-world usage."
summary: "A practical reference for common CMake commands and core concepts, with concise explanations based on real-world usage."
tags: ["CMake", "CLI", "Toolchains"]
---

## Overview

This note is a **practical reference** for frequently used **CMake commands** and **core CMake concepts**.

The focus is on:

* Common day-to-day workflows
* Short explanations that clarify *when* and *why* something is used
* Examples that reflect real-world usage rather than exhaustive documentation

---

## Common CMake Commands

### Configure (Generate Build System)

Configure a build directory using `ccmake` (curses UI) with a separate source directory:

```bash
ccmake ../src
```

> Use this when you want an interactive way to set CMake options (e.g., build type, toolchain, features).

---

### Build

Build the default target in the current build directory:

```bash
cmake --build .
```

---

### Clean Build Artifacts

Clean all generated build files:

```bash
cmake --build . --target clean
```

> Useful when switching compilers, toolchains, or build options.

---

### Build and Install

Build the project and install it to the configured install prefix:

```bash
cmake --build . --target install
```

> Requires `install()` rules in `CMakeLists.txt`.

---

### Run All Tests

Run all tests registered with CTest:

```bash
ctest
```

---

### Run Specific Tests

Run tests matching a name or regex:

```bash
ctest -R MyTest
```

> Helpful for rerunning a single failing test or a group of related tests.

---

## `CMakeLists.txt`

### Define a Function

Define a reusable CMake function:

```cmake
function(print_message msg)
  message(STATUS "${msg}")
endfunction()
```

> Functions help reduce duplication and improve readability in larger CMake projects.

---

### Include a CMake Module

Include a CMake file located in `CMAKE_MODULE_PATH`:

```cmake
include(MessagePrinter)
print_message("Hello World")
```

> Use this pattern to organize CMake logic into reusable modules.
