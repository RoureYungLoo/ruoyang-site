# Ubuntu22.04 LTS 安装教程

# 分区方案

> 在主引导记录（MBR）分区表中，最多可以有四个主分区，或者三个主分区和一个扩展分区。扩展分区可以包含多个逻辑分区，如果需要更多的分区，可以将其中一些设置为逻辑分区；
> 在GUID分区表（GPT）中，没有主分区或扩展分区的限制（可以有128个主分区），因此可以创建更多的分区。

## GPT分区表

以128GB硬盘空间为例：

| **分区** | **分区类型** | **分区容量**          |
| -------- | ------------ | --------------------- |
| biosgrub | biso         | 1MB                   |
| /efi     | logical      | 1GB                   |
| /boot    | primary      | 1GB                   |
| /        | primary      | 40GB                  |
| /home    | primary      | 50GB                  |
| /opt     | primary      | 10GB                  |
| /usr     | primary      | 30GB                  |
| /srv     | primary      | 10GB                  |
| /var     | primary      | 20GB                  |
| swap     | primary      | 8GB（物理内存1～2倍） |

# 安装openssh-server

```bash
sudo apt install openssh-server
```

# 修改终端显示路径

```bash
vim ~/.bashrc 

# 把小写w改为大写W
if [ "$color_prompt" = yes ]; then
    PS1='${debian_chroot:+($debian_chroot)}\[\033[01;32m\]\u@\h\[\033[00m\]:\[\033[01;34m\]\W\[\033[00m\]\$ '
else
    PS1='${debian_chroot:+($debian_chroot)}\u@\h:\w\$ '
fi
```

# 自定义文件夹路径

```bash
mkdir desktop xiazai template public docs music video picture
vim ~/.config/user-dirs.dirs
    XDG_DESKTOP_DIR="$HOME/desktop"
    XDG_DOWNLOAD_DIR="$HOME/xiazai"
    XDG_TEMPLATES_DIR="$HOME/template"
    XDG_PUBLICSHARE_DIR="$HOME/public"
    XDG_DOCUMENTS_DIR="$HOME/docs"
    XDG_MUSIC_DIR="$HOME/music"
    XDG_PICTURES_DIR="$HOME/picture"
    XDG_VIDEOS_DIR="$HOME/video"
```

# [修改软件源](https://mirrors.tuna.tsinghua.edu.cn/help/ubuntu/)

**1、备份**

```bash
sudo cp /etc/apt/sources.list /etc/apt/sources.list.backup  
```

**2、修改**

```bash
/etc/apt/sources.list

# 默认注释了源码镜像以提高 apt update 速度，如有需要可自行取消注释
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy main restricted universe multiverse
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy-updates main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy-updates main restricted universe multiverse
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy-backports main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy-backports main restricted universe multiverse

# deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy-security main restricted universe multiverse
# # deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy-security main restricted universe multiverse

deb http://security.ubuntu.com/ubuntu/ jammy-security main restricted universe multiverse
# deb-src http://security.ubuntu.com/ubuntu/ jammy-security main restricted universe multiverse

# 预发布软件源，不建议启用
# deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy-proposed main restricted universe multiverse
# # deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy-proposed main restricted universe multiverse
```

**3、更新**

```bash
sudo apt update 
sudo apt upgrade #（一般不推荐升级）
```

# 卸载snap软件包

1、查看已经安装的snap软件包

```bash
[user@localhost ~]$ sudo snap list
Name                       Version           Rev    Tracking         Publisher   Notes
bare                       1.0               5      latest/stable    canonical✓  base
core20                     20220826          1623   latest/stable    canonical✓  base
firefox                    106.0-1           1969   latest/stable/…  mozilla✓    -
gnome-3-38-2004            0+git.6f39565     119    latest/stable/…  canonical✓  -
gtk-common-themes          0.1-81-g442e511   1535   latest/stable/…  canonical✓  -
snap-store                 41.3-64-g512c0ff  599    latest/stable/…  canonical✓  -
snapd                      2.57.4            17336  latest/stable    canonical✓  snapd
snapd-desktop-integration  0.1               14     latest/stable/…  canonical✓  -
```

2、删除snap软件包

```bash
sudo snap remove --purge firefox
sudo snap remove --purge snap-store
sudo snap remove --purge gnome-3-38-2004
sudo snap remove --purge gtk-common-themes
sudo snap remove --purge snapd-desktop-integration
sudo snap remove --purge bare
sudo snap remove --purge core20
sudo snap remove --purge snapd
```

3、删除snap服务

```bash
sudo apt remove --autoremove snapd
```

4、关闭apt触发器

```bash
sudo gedit /etc/apt/preferences.d/nosnap.pref
```

写入以下内容：

```bash
Package: snapd
Pin: release a=*
Pin-Priority: -10
```

5、最后一步

```bash
sudo apt update
```

# 软件安装

| 类别     | 名称                                              |
| -------- | ------------------------------------------------- |
| 浏览器   | Edge，Google Chrome                               |
| 聊天办公 | QQ，微信，飞书，Xmind，向日葵，亿图图示，WPS 2019 |
| 编程开发 | Visual Studio Code，Vim，Typora，Wireshark        |
| 虚拟软件 | Virtual Box，VMware Workstation Pro，Podman       |
| 电子阅读 | Calibre                                           |
| 影音娱乐 | OBS Studio，QQ音乐，VLC播放器，Steam              |
| 系统工具 | GParted，FSearch                                  |
| 云盘     | 百度网盘                                          |

# 安装[Microsoft Edge](https://www.microsoft.com/zh-cn/edge/download)

```bash
wget https://packages.microsoft.com/repos/edge/pool/main/m/microsoft-edge-stable/microsoft-edge-stable_129.0.2792.89-1_amd64.deb

sudo dpkg -i microsoft-edge-stable_129.0.2792.89-1_amd64.deb
```

# 安装[Google Chrome](https://www.google.cn/chrome/)

```bash
curl -O https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
sudo dpkg -i google-chrome-stable_current_amd64.deb
```

# 安装[WPS 2019](https://linux.wps.cn/)

```bash
curl -O https://wps-linux-personal.wpscdn.cn/wps/download/ep/Linux2019/11691/wps-office_11.1.0.11691_amd64.deb
sudo dpkg -i wps-office_11.1.0.11691_amd64.deb
```

# 安装[WPS 365](https://wps-linux-365.wpscdn.cn/wps/download/ep/Linux365/18605/wps-office_12.8.2.18605.AK.preload.sw_amd64.deb)

```bash
wget https://wps-linux-365.wpscdn.cn/wps/download/ep/Linux365/18605/wps-office_12.8.2.18605.AK.preload.sw_amd64.deb
sudo dpkg -i wps-office_12.8.2.18605.AK.preload.sw_amd64.deb
```

# 安装[Visual Studio Code](https://code.visualstudio.com/download)

```bash
wget https://vscode.download.prss.microsoft.com/dbazure/download/stable/f1a4fb101478ce6ec82fe9627c43efbf9e98c813/code_1.95.3-1731513102_amd64.deb
sudo dpkg -i code_1.95.3-1731513102_amd64.deb
```

# 安装[Vim](https://www.vim.org/download.php)

```bash
sudo apt install vim
```

# 安装[QQ](https://im.qq.com/linuxqq/index.shtml)

```bash
wget https://dldir1.qq.com/qqfile/qq/QQNT/Linux/QQ_3.2.13_241121_amd64_01.deb
sudo dpkg -i QQ_3.2.13_241121_amd64_01.deb
```

# 安装[Podman](https://podman.io/)

```bash
sudo apt install podman -y
sudo vim /etc/containers/registries.conf
#末尾添加
    [registries.search]
    registries=["registry.access.redhat.com", "registry.fedoraproject.org", "docker.io"]
# 插件
sudo apt install cockpit cockpit-podman cockpit-machines
```

访问http://127.0.0.1:9090/

# 安装podman-compose

```bash
wget https://bootstrap.pypa.io/get-pip.py
python3 get-pip.py
cp ~/.local/bin/* /usr/bin/
pip3 install https://github.com/containers/podman-compose/archive/devel.tar.gz
```

# 安装[Oracle VM Virtual Box](https://download.virtualbox.org/virtualbox)

```bash
curl -O https://download.virtualbox.org/virtualbox/7.0.0/virtualbox-7.0_7.0.0-153978~Ubuntu~jammy_amd64.deb
curl -O https://download.virtualbox.org/virtualbox/7.0.0/Oracle_VM_VirtualBox_Extension_Pack-7.0.0.vbox-extpack

sudo dpkg -i virtualbox-7.0_7.0.0-153978~Ubuntu~jammy_amd64.deb
sudo VBoxManage extpack install Oracle_VM_VirtualBox_Extension_Pack-7.0.0.vbox-extpack 
```

# 安装[百度网盘](https://pan.baidu.com/download#linux)

```bash
wget https://05ccbc-704917781.antpcdn.com:19001/b/pkg-ant.baidu.com/issue/netdisk/LinuxGuanjia/4.17.7/baidunetdisk_4.17.7_amd64.deb
sudo dpkg -i baidunetdisk_4.17.7_amd64.deb
```

# 安装[微信](https://www.ubuntukylin.com/applications/106-cn.html)

官方测试版

```bash
wget https://dldir1v6.qq.com/weixin/Universal/Linux/WeChatLinux_x86_64.deb
sudo dpkg -i WeChatLinux_x86_64.deb
```

在[优麒麟商店](https://www.ubuntukylin.com/applications/)搜索"微信"

```bash
curl -O https://archive.ubuntukylin.com/software/pool/partner/weixin_2.1.1_amd64.deb
sudo dpkg -i weixin_2.1.1_amd64.deb
```

# 安装[飞书](https://www.feishu.cn/)

```bash
curl -O https://sf3-cn.feishucdn.com/obj/ee-appcenter/399c2025/Feishu-linux_x64-5.30.15.deb

sudo dpkg -i Feishu-linux_x64-5.30.15.deb
```

# 安装[Typora](https://www.typoraio.cn/#linux)

```bash
wget https://download2.typoraio.cn/linux/typora_1.9.3_amd64.deb
sudo dpkg -i typora_1.9.3_amd64.deb
```

# 安装[OBS Studio](https://obsproject.com/)

```bash
sudo add-apt-repository ppa:obsproject/obs-studio
sudo apt update
sudo apt install ffmpeg obs-studio
```

# 安装[向日葵](https://sunlogin.oray.com/download)

```bash
wget https://dw.oray.com/sunlogin/linux/SunloginClient_15.2.0.63064_amd64.deb
sudo dpkg -i SunloginClient_15.2.0.63064_amd64.deb
```

# 安装[Steam](https://store.steampowered.com/about/)

```bash
curl -O https://repo.steampowered.com/steam/archive/precise/steam_latest.deb
sudo dpkg -i steam_latest.deb
```

# 安装[亿图图示](https://www.edrawsoft.cn/download-edrawmax.html)

```bash
 wget https://cc-download.wondershare.cc/prd/edrawmax_full5374.deb
sudo dpkg -i edrawmax_full5374.deb
```

# 安装[FSearch](https://cboxdoerfer.github.io/fsearch/)

```bash
sudo add-apt-repository ppa:christian-boxdoerfer/fsearch-stable
sudo apt update
sudo apt install -y fsearch-trunk
```

# 安装[Xmind](https://xmind.cn/download/)

```bash
 wget https://dl3.xmind.cn/Xmind-for-Linux-amd64bit-24.10.01101-202410201932.deb
sudo dpkg -i Xmind-for-Linux-amd64bit-24.10.01101-202410201932.deb
```

# 安装[QQ音乐](https://y.qq.com/download/download.html)

```bash
wget https://dldir.y.qq.com/music/clntupate/linux/qqmusic_1.1.7_amd64.deb?sign=1732378775-D4wKHiXmtBGamYMQ-0-63c5e04b98a62fc0cc0cb71ebc0357df

sudo dpkg -i qqmusic_1.1.7_amd64.deb
```

# 安装[Qt或QtCreator](https://download.qt.io/official_releases/qtcreator/)

```bash
curl -O https://download.qt.io/official_releases/qtcreator/8.0/8.0.0/qt-creator-opensource-linux-x86_64-8.0.0.run

sudo chmod +x qt-opensource-linux-x64-5.12.9.run
sudo ./qt-opensource-linux-x64-5.12.9.run
```

# 安装VLC播放器

```bash
sudo apt install vlc ubuntu-restricted-extras
```

# 安装[Wireshark](https://www.wireshark.org/download.html)

```bash
sudo add-apt-repository ppa:wireshark-dev/stable
sudo apt update
sudo apt install wireshark
sudo usermod -aG wireshark $USER
```

# 安装[Calibre](https://calibre-ebook.com/download_linux)

```bash
sudo -v && wget -nv -O- https://download.calibre-ebook.com/linux-installer.sh | sudo sh /dev/stdin install_dir=/opt
```

或者

```bash
curl -O https://download.calibre-ebook.com/6.17.0/calibre-6.17.0-x86_64.txz
sudo mkdir -p /opt/calibre && sudo rm -rf /opt/calibre/*
tar xvf calibre-6.17.0-x86_64.txz -C /opt/calibre
sudo /opt/calibre/calibre_postinstall
```

# 安装GParted

```bash
sudo apt install gparted
```

# 安装[搜狗输入法](https://shurufa.sogou.com/linux/guide)

```bash
wget https://ime-sec.gtimg.com/202411240024/aff69dfb7ee75c935015a3b606de9883/pc/dl/gzindex/1680521603/sogoupinyin_4.2.1.145_amd64.deb
sudo apt remove --purge ibus
sudo apt install fcitx

sudo dpkg -i sogoupinyin_4.2.1.145_amd64.deb
sudo apt install libqt5qml5 libqt5quick5 libqt5quickwidgets5 qml-module-qtquick2

sudo apt install libgsettings-qt1

sudo cp /usr/share/applications/fcitx.desktop /etc/xdg/autostart/
```

安装完成后最好重启一下电脑。

# 安装MySQL

```bash
sudo apt update
sudo apt install mysql-server
sudo mysql -uroot

alter user 'root'@'localhost' identified with mysql_native_password by 'your_passwd';
```

`/etc/mysql/mysql.conf.d/mysqld.cnf` #找到 `bind-address`,修改为`0.0.0.0`

重启mysql

```bash
sudo mysql -uroot -pyour_passwd
use mysql;
update user set host='%' where user='root';
flush privileges;
```

# 安装Redis

```bash
sudo apt install redis
```

# 安装Nginx

```bash
sudo apt install nginx
```

# 安装JDK8

```bash
tar -zxvf jdk-8u202-linux-x64.tar.gz
mkdir /usr/local/java
mv jdk1.8.0_202/ /usr/local/java/

vim /etc/profile

JAVA_HOME=/usr/local/jdk1.8.0_251/
CLASSPATH=.:$JAVA_HOME/jre/lib/rt.jar:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar
PATH=$PATH:$JAVA_HOME/bin

export PATH JAVA_HOME CLASSPATH  
```