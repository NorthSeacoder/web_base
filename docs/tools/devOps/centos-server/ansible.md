# ansible

ansible 是使用 python 写的一个做自动化运维的工具。

## install

```bash
# windows(已安装python)
pip install --user ansible

# centos
adduser ansible
## 权限设置
 chown -R ansible:ansible /home/ansible

 chmod 700 /home/ansible

 chmod 700 /home/ansible/.ssh

 chmod 644 /home/ansible/.ssh/authorized_keys  //公钥文件的所有权限
```
