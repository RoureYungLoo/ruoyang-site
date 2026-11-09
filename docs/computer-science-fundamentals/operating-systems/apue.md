---
sidebar: false
---

## 平台

- FreeBSD 8.0
- Linux 3.2.0（Ubuntu 12.04 LTS）
- Apple Mac OS X 10.6.8
- Solaris 10

### Linux 3.2.0

上传源代码压缩包，解压，编译，拷贝文件，编写代码测试

```
tar -zxvf src.3e.tar.gz
cd apue.3e
make
cp include/apue.h /usr/include/
cp lib/error.c /usr/include/ 
cp lib/libapue.a /usr/lib/
gcc xxx.c -o xxx -l apue
```

报错解决：

/usr/bin/ld: cannot find-lbsd

解决：sudo apt-get install libbsd-dev



devrdev.c:(.text+0xc5): undefined reference to ‘minor’

解决方案：在devrdev.c文件加上 #include <sys/sysmacros.h>



/usr/bin/ld: Error: unable to disambiguate: -dylib (did you mean --dylib ?)

解决方法：修改 db/Makefile 文件第12行，修改为 LDCMD=$(CC)-shared-o libapue_db.so.1 -L$(ROOT)/lib -lapue-lc db.o



barrier.c:(.text+0x80): undefined reference to `heapsort'

```
yum install https://archives.fedoraproject.org/pub/archive/epel/7.9/x86_64/Packages/l/libbsd-0.8.3-1.el7.x86_64.rpm
yum install https://archives.fedoraproject.org/pub/archive/epel/7.9/x86_64/Packages/l/libbsd-devel-0.8.3-1.el7.x86_64.rpm
yum install https://archives.fedoraproject.org/pub/archive/epel/7.9/x86_64/Packages/l/libbsd-ctor-static-0.8.3-1.el7.x86_64.rpm
```



[参考链接1](https://zhuanlan.zhihu.com/p/580675705)

[参考链接2](https://blog.csdn.net/ninesnow_c/article/details/107428736)

[参考链接3](https://devpress.csdn.net/linux/62ea314520df032da732ade7.html)
