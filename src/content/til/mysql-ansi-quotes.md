---
title: MySQL ANSI_QUOTES
pubDate: 2024-12-18
---

Recently when importan an sql dump into a MySQL database, I ran into this error message:

```
You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near '"shipping_areas" (
  "id" int unsigned NOT NULL AUTO_INCREMENT,
  "zip" int ' at line 1
```

It turns out that this is because the sql dump was created with `ANSI_QUOTES` enabled.

To fix this, I edited the sql dump file to add this line:

```
SET SESSION sql_mode = 'ANSI_QUOTES';
```

This turns on ANSI quotes mode only for the current session, so that the import will work.

Here's the relevant documentation: https://dev.mysql.com/doc/refman/8.0/en/sql-mode.html#sqlmode_ansi_quotes
