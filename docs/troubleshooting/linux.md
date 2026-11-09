# VMware CentOS8 启动之后, 网卡丢失

大多数时候, 是挂起/关机异常引起的

```bash
[root@localhost ~]# nmcli networking
disable
[root@localhost ~]# nmcli networking on
[root@localhost ~]# nmcli n
enabled
[root@localhost ~]# systemctl restart NetworkManager
[root@localhost ~]# ip a
```