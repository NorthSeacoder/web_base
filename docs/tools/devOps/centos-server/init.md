# 新服务器配置

## 配置 ssh 登录

-   本地配置.ssh/config

```bash
Host nsc
    HostName 172.17.54.190
    User root
    IdentityFile ~/.ssh/id_rsa

Host nsc-ansible
    HostName 172.17.54.190
    User ansible
    IdentityFile ~/.ssh/id_rsa
```

-   服务器配置~/.ssh/authorized_keys&/home/ansible/.ssh/authorized_keys
    将本地的公钥拷贝到改文件
-   登录

```bash
ssh nsc
```

-   禁用密码

```bash
# 编辑服务器端的 /etc/ssh/sshd_config
# 禁用密码登录
Host *
  PasswordAuthentication no
```

## git安装及配置

