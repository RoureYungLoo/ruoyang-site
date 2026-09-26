---
outline: deep
---

# C 指针示例

下面的程序展示变量、指针及其地址之间的关系：

```c
int main()
{
    int age=25;
    int *pointer=&age;
    // 问题：age、&age、pointer、&pointer、*pointer、*&age、&*pointer 分别是什么？
    printf("\nthe value of age is %d .",age);
    printf("\nthe value of &age is %#X .",&age);
    printf("\nthe value of pointer is %#X .",pointer);
    printf("\nthe value of &pointer is %#X .",&pointer);
    printf("\nthe value of *pointer is %d .",*pointer);
    printf("\nthe value of *&age is %d .",*&age);
    printf("\nthe value of &*pointer is %#X .\n",&*pointer);
    return 0;
}
```

::: tip 提示
`pointer` 保存 `age` 的地址，`*pointer` 则读取该地址指向的值。
:::
