---
title: Instantiating a class via constructor property promotion
pubDate: 2024-11-14
---

PHP 8.0 introduced constructor property promotion, which allows you to declare class properties and assign values to them in a single statement:

```php
class User
{
  public function __construct(
    public string $name,
  ) {}
}
```

Today I learned that you can also use constructor property promotion to instantiate an object. [Andy Hinkle](https://andyhinkle.com/) posted wishing for a particular way of doing this: https://bsky.app/profile/andyhinkle.com/post/3lawbzqce3s2u

Which led me to learn that you can basically do what he was looking for, like this:

```php
public function __construct(public $startDate = new Carbon('2024-01-01'))
{
    parent::__construct();
}
```
