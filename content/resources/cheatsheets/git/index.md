---
title: "Git"
date: 2025-01-01
description: "A practical reference of Git commands and core concepts with concise explanations based on real-world usage."
summary: "A practical reference of Git commands and core concepts with concise explanations based on real-world usage."
tags: ["Git", "CLI", "GUI", "Version Control"]
---

## Overview

This note serves as a **practical reference** for commonly used **Git commands** and **core Git concepts**.
Each section includes short explanations intended to clarify *when* and *why* a command or concept is used.


---

## Common Git Commands

### Create and switch to a new branch

Creates a new branch and immediately switches to it.

```bash
git checkout -b <branch-name>
```

> **Tip:** In newer Git versions, you can also use:

```bash
git switch -c <branch-name>
```

---

### Return to your latest branch

Switches to the latest branch

```bash
git checkout -
```

---

### Discard all tracked local changes

Reverts all tracked files to their last committed state.

```bash
git checkout .
```

> ⚠️ This permanently discards uncommitted changes in tracked files.

---

### Check if a commit exists in a branch

Displays branches that contain a specific commit.

```bash
git branch --contains <commit-hash>
```

Useful when:

* Investigating where a fix was merged
* Verifying if a commit is part of a release branch

---

### View a compact, visual commit history

Displays a clean, graphical representation of the commit tree.

```bash
git log --all --decorate --oneline --graph
```

This is helpful for:

* Understanding branch relationships
* Reviewing merges and commit flow

---

### Merge while preferring incoming changes during conflicts

Performs a merge and automatically prefers changes from the incoming branch when conflicts occur.

```bash
git merge --strategy-option theirs master
```

> ⚠️ Use with caution, as this can overwrite local changes during conflicts.

---

## Bare Repository

A **bare Git repository** contains **only Git data** (commits, branches, tags, configuration) and **no working directory**.

Key characteristics:

* No checked-out files
* Cannot directly edit or commit files
* Designed for sharing and collaboration

Typical use cases:

* Central or remote repositories
* Team collaboration servers
* Deployment pipelines

📖 **Documentation:**
[https://git-scm.com/docs/git-clone#Documentation/git-clone.txt---bare](https://git-scm.com/docs/git-clone#Documentation/git-clone.txt---bare)

---

## Git Worktree

A **Git worktree** allows multiple working directories to be attached to the **same repository**, enabling simultaneous work on different branches.

Benefits:

* Work on multiple branches at once
* Avoid frequent branch switching
* Share Git history without creating multiple clones

Works especially well with:

* **Bare repositories**
* Long-running feature or release branches

📖 **Documentation:**
[https://git-scm.com/docs/git-worktree](https://git-scm.com/docs/git-worktree)

---

## GUI Tools

The following GUI tools can simplify Git workflows and visualization:

* **Lazygit** — Terminal-based Git UI
  [https://github.com/jesseduffield/lazygit](https://github.com/jesseduffield/lazygit)

* **GitHub Desktop** — Beginner-friendly Git client
  [https://desktop.github.com/download/](https://desktop.github.com/download/)

* **Gitnuro** — Lightweight and fast Git client
  [https://gitnuro.com/](https://gitnuro.com/)

* **Sublime Merge** — Powerful Git client by Sublime
  [https://www.sublimemerge.com/](https://www.sublimemerge.com/)

* **Git Graph (VS Code Extension)** — Visualize Git history inside VS Code
  [https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph)

---
