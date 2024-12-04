---
title: Making backspace work on remote servers
pubDate: 2024-12-4
---

Sometimes when I SSH into a remote server, I find that the backspace key doesn't work properly at all. This is really annoying.

To fix this, you can try running `export TERM=vt100` or `export TERM=xterm`. This works because you're telling the remote system what type of terminal (emulator) you're using, and consequently what control sequences it should expect for various keystrokes.

Specifically, my system (Kitty on macOS) sends `0x7F`, when some systems might be expecting `0x08`.

Running that `export` snippet is one solution, but you have to remember to do it each time depending on the server you're connecting to, remember the value, etc. etc.

Instead, add it to your `~/.ssh/config` file:

```
Host whatever-alias
    user your-username
    Hostname server.ip.address.here
    SendEnv TERM
    SetEnv TERM=xterm
```

Ta-da, no more remembering.

Caveat that your results may vary, etc.