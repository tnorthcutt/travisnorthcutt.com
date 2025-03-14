---
title: Excluding files and paths from git diff
pubDate: 2025-03-14
---

Today I wanted to feed the output of `git diff` to an LLM, but ran into issues because it was too long. There were several files (e.g. `package-lock.json`) I didn't care about including since they're compiled output. Turns out you can exclude files or paths like so:

```
git diff -- . ':(exclude)path/to/excluded-file' ':(exclude)path/to/excluded-directory/*' | pbcopy
```

The `| pbcopy` bit is to pipe the output to the clipboard for easy pasting wherever.