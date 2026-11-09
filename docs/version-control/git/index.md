# GIT 快速入门

## 安装
略.
## 配置
略.
## 概念

### 本地仓库
- 工作区
- 暂存区
- 本地仓库
### 远程仓库

## 常用命令
### 本地仓库命令

```bash
mkdir myrepo && cd myrepo
git init
git add .
git commit -m "message"
git status
git log
git reflog
git reset

# 远程仓库命令
git clone http://xxx/xxx.git
# 指定私钥克隆
git clone http://xxx/xxx.git --config core.sshCommand="ssh -i ~/.ssh/kaizen/id_rsa"
git remote -v
git pull origin master
git push origin master
git remote add origin http://xxx/xxx.git
git remote remove origin分支
```
### 分支命令
```bash
git branch 
git branch -r
git branch -a

git checkout master
git branch mybranch # 基于 master 分支创建 mybranch 分支

git checkout master
git merge mybranch # 基于 master 分支合并 mybranch 分支分支规范
• Master / Main
• Develop / Dev
• Release
• Snapshot
• Bugfix / Hotfix
• Feature

```
### 版本冲突
```bash
git merge mybranch
git status
git diff

#手动解决冲突后
git add aa.txt
git commit -i aa.txt -m "fix conflict"
git merge mybranch
```
## 配置
### 全局配置

### 局部配置
```bash
# 设置本仓库的用户名
git config --local user.name "RoureYungLoo"

# 设置本仓库的邮箱
git config --local user.email "ruoyang8715@163.com"
```

### 配置多账户SSH
1. 创建 RSA 密钥对
```bash
ssh-keygen -t rsa -C "ruoyanglu@ruoyang8241@126.com"
ssh-keygen -t rsa -C "RoureYungLoo@ruoyang8715@163.com"
```
2. 修改 ~/.ssh/config
```bash
# 配置 ruoyanglu ssh 免密
Host ruoyanglu
HostName github.com
IdentityFile C:\\Users\\lenovo\\.ssh\\ruoyanglu
PreferredAuthentications publickey
User ruoyanglu

# 配置 RoureYungLoo ssh 免密
Host RoureYungLoo
HostName github.com
IdentityFile C:\\Users\\lenovo\\.ssh\\id_rsa_roure_yung_loo
PreferredAuthentications publickey
User RoureYungLoo
```
3. 修改 origin url
```bash
git remote set-url origin git@RoureYungLoo:RoureYungLoo/ad-super.git
```
4. 添加账户公钥
略.
### 常见报错
#### fatal: refusing to merge unrelated histories
追加参数 `--allow-unrelated-histories`
## 参考链接
1. [Git Reference](https://git-scm.com/docs)
2. [Pro Git](https://git-scm.com/book/zh/v2)
3. [看动画学Git](https://learngitbranching.js.org/?locale=zh_CN)
4. [Git 大全 - Gitee.com](https://gitee.com/all-about-git)
