---
title: How to ask for help
pubDate: 2023-01-16
description: How to get technical help on an engineering team
---

Recently I wrote up a short guide for our engineering teams titled “how to ask for help”.

This may seem obvious. It’s not.

When you need help with something technical, try following the template below. A few things to keep in mind:

- Include more details and context
  - If you're asking for help in Slack, please make your first message a brief description, then add more details **in a thread**. This way, the main channel isn't cluttered up/hard to read, and your specific thread with all the discussion is easy to reference later if needed.
- Default to asking in the team channel (instead of one person via DM). There are a few reasons for this:
  - Selfishly, you're more likely to get help quickly
  - Others may have the same problem, and benefit from you asking
  - Team leads/managers/etc. can see what types of problems we tend to run into as a team, and get a better feel for what processes, documentation, workflows, etc. need improvement.
  - If you _do_ need to DM a specific person, please be upfront in your first message about what you need help with. This avoids taking up several minutes waiting for them to see your message, then them waiting for you to ask your question, etc. This also applies in channels/group chats as well.

**Bad first message asking for help:**  
"Hey Mark, how are you?"

**Good first message asking for help:**  
"Hey Mark, how are you? This Laravel controller I am writing is not returning the correct JSON result and I can't figure out why. Do you have a moment to Zoom? Here's what I've already tried: [followed by the below format]"

---

### Template for asking for help:

**Title:** Brief description of the problem  
**What I did:** Steps you took. Be specific. Include lots of detail. Add any information you think might be helpful, and then add more.  
**My environment:** What operating system, browser, editor, tool version (e.g. node, npm, python, php, etc.), etc. are you using?  
**What I expected to happen:** What it says – what outcome were you expecting to get?  
**What actually happened:** Again, include lots of detail here! Add screenshots, log file snippets, etc. More information is good.  
**What I've already tried:** Include solutions you've already tried, so the person helping you doesn't waste their time and yours suggesting things you have already done.

Once you've written these things down, read through them and try to anticipate what questions someone might ask. Then, go back through this and add whatever information you can to preemptively answer those questions.

The goal is to minimize time spent back-and-forth asking questions and gathering more information, so that you can get unblocked more quickly, and so that the person helping you can get back to their work more quickly.

---

### Here's an example of a bug report that is incomplete:

"I can't get docker to work with connect on my machine."

### Here's an example of a bug report that has a lot more information and is more likely to get you the help you need:

"""  
I'm unable to get Connect to work on my local machine using Docker.

**What I did:**  
I ran `docker-compose up` and navigated to `http://localhost:8081` in my browser.

**What I expected to happen:**  
I thought that after running `docker-compose up`, I would be able to see the connect application at http://localhost:8081 in my browser.

**What actually happened:**  
When I nagivate to `http://localhost:8081`, I see a "502 Bad Gateway" error page. When this happens, I see these two lines in the logs of the nginx container in Docker Desktop:

```
2023-01-05 14:45:45 2023/01/05 21:45:45 [error] 29#29: *1 connect() failed (111: Connection refused) while connecting to upstream, client: 172.26.0.1, server: student-application.local, request: "GET / HTTP/1.1", upstream: "fastcgi://127.0.0.1:9000", host: "localhost:8081"
2023-01-05 14:45:45 172.26.0.1 - - [05/Jan/2023:21:45:45 +0000] "GET / HTTP/1.1" 502 559 "-" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
```

I looked in the logs for the laravel container in Docker Desktop and saw this, but I don't think it's related/relevant. Including it just in case:

```
2023-01-05 14:45:20    Illuminate\Database\QueryException
2023-01-05 14:45:20
2023-01-05 14:45:20   SQLSTATE[HY000] [2002] Connection refused (SQL: select * from information_schema.tables where table_schema = connect and table_name = migrations and table_type = 'BASE TABLE')
2023-01-05 14:45:20
2023-01-05 14:45:20   at vendor/laravel/framework/src/Illuminate/Database/Connection.php:712
2023-01-05 14:45:20     708▕         // If an exception occurs when attempting to run a query, we'll format the error
2023-01-05 14:45:20     709▕         // message to include the bindings with SQL, which will make this exception a
2023-01-05 14:45:20     710▕         // lot more helpful to the developer instead of just the database's errors.
2023-01-05 14:45:20     711▕         catch (Exception $e) {
2023-01-05 14:45:20   ➜ 712▕             throw new QueryException(
2023-01-05 14:45:20     713▕                 $query, $this->prepareBindings($bindings), $e
2023-01-05 14:45:20     714▕             );
2023-01-05 14:45:20     715▕         }
2023-01-05 14:45:20     716▕     }
2023-01-05 14:45:20
2023-01-05 14:45:20       +36 vendor frames
2023-01-05 14:45:20   37  artisan:35
2023-01-05 14:45:20       Illuminate\Foundation\Console\Kernel::handle(Object(Symfony\Component\Console\Input\ArgvInput), Object(Symfony\Component\Console\Output\ConsoleOutput))
```

Does anyone have a suggestion on what I could do next to debug this?  
"""

## Conclusion

I hope that’s helpful to other engineering managers, team leads, etc. I think teaching and facilitating clear, effective communication is one of the best things a leader can do to help their team work more effective and happily.

If you have any comments/suggestions/think this is terrible, please let me know! I'm [@tnorthcutt](https://twitter.com/tnorthcutt) on Twitter.
