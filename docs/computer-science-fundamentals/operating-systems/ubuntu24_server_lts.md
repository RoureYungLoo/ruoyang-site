---
title: ubuntu24_server_lts
order: 1
sidebar: true
---

# 服务器初始化

```shell
# 更新软件包
apt update && apt upgrade -y

# 基础工具
apt install -y \
  git curl wget vim tmux \
  htop tree unzip zip \
  net-tools iproute2 \
  dnsutils iputils-ping \
  lsof tcpdump \
  sysstat strace

# C/C++ 开发环境
apt install -y \
  build-essential \
  gcc g++ clang \
  gdb lldb \
  make cmake ninja-build \
  pkg-config \
  libssl-dev \
  zlib1g-dev \
  libpcre2-dev \
  libreadline-dev

# Python 开发环境
apt install -y \
  python3 \
  python3-pip \
  python3-venv \
  python3-dev
```