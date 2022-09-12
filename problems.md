# 使用git过程中可能出现的一些问题



### 免密配置（要配置）

1、初始化自己的用户名和邮箱：

```
git config --global user.name “输入你的用户名”
git config --global user.email “输入你的邮箱”
```



2、创建SSH Key：

```
ssh -keygen -t rsa -C
```

​     执行命令后**直接连续回车**即可，无需再输入额外内容

​     创建成功会在当前使用的用户目录（C盘）下生成.ssh文件夹：

​     <img src="C:/Users/86180/AppData/Roaming/Typora/typora-user-images/image-20220602100430637.png" alt="image-20220602100430637" style="zoom:67%;" />  



3、用vscode(代码编辑器即可)打开下面文件，全选并复制：

​      <img src="C:/Users/86180/AppData/Roaming/Typora/typora-user-images/image-20220602100701120.png" alt="image-20220602100701120" style="zoom: 67%;" />  



4、打开github，点击自己的头像>Settings

​      <img src="C:/Users/86180/AppData/Roaming/Typora/typora-user-images/image-20220602102927850.png" alt="image-20220602102927850" style="zoom:67%;" />       



![image-20220602101421123](C:/Users/86180/AppData/Roaming/Typora/typora-user-images/image-20220602101421123.png)



​    添加成功后显示：

​       ![image-20220602101926925](C:/Users/86180/AppData/Roaming/Typora/typora-user-images/image-20220602101926925.png)  

​	

   配制完输入命令，验证是否成功：

```
ssh git@github.com
```

   成功：

 <img src="C:/Users/86180/AppData/Roaming/Typora/typora-user-images/image-20220602103613492.png" alt="image-20220602103613492" style="zoom:67%;" /> 



5、查看是否生成SSH仓库地址

​      <img src="C:/Users/86180/AppData/Roaming/Typora/typora-user-images/image-20220602103044617.png" alt="image-20220602103044617" style="zoom: 67%;" />  

​     

之后提交项目到仓库，使用上面的地址

 



### 如何解决git上传文件出错[rejected] master -＞ master (fetch first) error: failed to push some refs to ‘

git push 时报错，如：

![image-20220602093640683](C:/Users/86180/AppData/Roaming/Typora/typora-user-images/image-20220602093640683.png) 

#### **解决方法**

1、先合并：

```javascript
git pull --rebase origin master
```

​      例如：

​      ![image-20220602093901679](C:/Users/86180/AppData/Roaming/Typora/typora-user-images/image-20220602093901679.png)  

 

2、重新提交：

```javascript
git push origin master
```

​      例如：

​      ![image-20220602094305581](C:/Users/86180/AppData/Roaming/Typora/typora-user-images/image-20220602094305581.png)  





### 解决 fatal: unable to access ‘https://github.com/...‘: Encountered end of file

#### 解决方法

去掉proxy配置

```javascript
git config --global http.proxy
git config --global --unset http.proxy
```

重新提交一次，仍未成功则执行：

```
rm ~/.gitconfig
```

