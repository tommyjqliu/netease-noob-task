### HTTP
HTTP（Hypertext Transfer Protocol）超文本传输协议，又译超文本转移协议(此处转移指状态的转移)，是一个应用层协议。HTTP协议的的基本单元是报文，客户端与服务端通过发送请求报文与响应报文进行沟通。一个HTTP报文包括起始行，首部及主体。
#### 起始行
- 请求报文起始行：<method> <request-URL> <version>
- 响应报文起始行：<version> <status> <reason-phrase>

起始行只描述最重要的信息，包括所使用的HTTP版本，请求的URL，请求所使用的方法及请求响应的状态。

- HTTP版本：HTTP/1.1仍然是大多数服务器的选择。但我们也可以考虑实施使用HTTP/2的方案，HTTP/2的性能更好，而且可以在不兼容时回退至HTTP/1.1
- 请求的URL：<scheme>://<user>:<password>@<host>:<port>/<path>;<params>?<query>#<frag>是URL的基本格式，它提供了一种定位网络资源的方法
- 请求方法：基础的方法有HEAD，GET，POST，TRACE，OPTIONS，DELETE。实践上，应当注意应用逻辑和方法语义的吻合。
- 响应状态：使用三位数字表达服务端对客户端的响应，通常附带一个原因短语。

#### 首部
首部是一系列的键值对。他们可以为客户端和服务端提供与本次请求有关的信息。HTTP的复杂特性主要由这个部分控制。HTTP的可拓展性也主要得益于可拓展的首部。
- Accept： */* # 指明客户端期望接受的数据类型
- Content-Type: text/html; charset=iso-latin-1 # 表明报文主体的数据类型
- Connection：keep-alive # 在HTTP/1.0+(HTTP/1.1出现之前民间对HTTP的拓展)中，如此使用该首部表明报文的发送方希望/认同在本次报文应答完成后保持TCP的连接。在HTTP/1.1中，持久连接被默认的启用了，通过将该字段设置为close可以显式的关闭持久连接。
- Content-Length：1024 # 表明报文主体的长度。在持久连接之前，http通过关闭TCP连接来表明主体的结束，在持久连接之后我们就需要显式的标记主体长度。如果无法事先知道长度，就必须采用chunked的传输方式，或通过关闭连接来表明主体的结束。
- cache-control：max-age=1024 # HTTP/1.1中使用该字段启用HTTP缓存
  
### NGINX
nginx是一个轻量级web服务器，它开源、高性能、高可靠，尤其是并发能力非常强，并且进行开发拓展也比较容易，因此成为了个人网站和部分商业网站的选择。
#### 安装
一般的使用只需直接使用linux包管理安装
```bash
sudo apt install nginx # ubuntu
```
安装完成后，一般已自动配好环境变量，命令行输入nginx即可开始运行nginx服务器
#### 命令行控制
```bash
#带配置启动
nginx -c [path_to_conf] # 指定非默认配置文件路径
nginx -p [path_to_nginx] # 指定nginx的安装目录
# 向主进程发送信号量
nginx -s reload  # 重新加载配置文件，以“优雅”方式结束过期工作进程
nginx -s reopen  # 重新打开日志文件
nginx -s stop    # 马上结束所有进程
nginx -s quit    # ”优雅“方式，等进程完成服务后再结束
# 配置相关
nginx -T         # 查看当前 Nginx 最终的配置
nginx -t         # 检查配置是否有问题
nginx -V 				 # 查看安装编译时采用的配置信息，可以看到安装根目录，默认配置文件位置等信息
# 系统相关
systemctl enable nginx # 开机自动启动
systemctl disable nginx # 关闭开机自动启动
systemctl restart nginx # 重启Nginx
systemctl status nginx # 查看 Nginx 运行状态
ps -ef | grep nginx # 查看Nginx进程
kill -9 pid # 杀死N进程
```
#### 配置目录结构
![](https://s3.bmp.ovh/imgs/2022/02/3673875f2d3b21b4.png)
一般的，我们会在主配置中included两个enabled文件夹内的配置文件，通过软链接来实现对配置模块的管理
#### 基本配置项
```bash
# 基础配置
user tommy; # 工作进程用户，关系到文件访问权限
worker_processes auto; # nginx工作进程数，一般设置为和 CPU 核数一样
pid /run/nginx.pid; # nginx主线程pid记录文件路径
include /etc/nginx/modules-enabled/*.conf;

# 事件类配置
events {
	worker_connections 65535;
	# multi_accept on;
}

# http服务配置
http {
	# Basic Settings
	sendfile on; 
	# 启用Linux上的sendfile系统调用来发送文件，它减少了内核态与用户态之间的两次内存复制，这样就会从磁盘中读取文件后直接在内核态发送到网卡设备，提高了发送文件的效率
	tcp_nopush on;
	tcp_nodelay on;
	keepalive_timeout 65;
	types_hash_max_size 2048;
	# server_tokens off;
	# server_names_hash_bucket_size 64; # 设置server name散列桶的大小
	# server_name_in_redirect off;

	include /etc/nginx/mime.types; # 基本MIME type到文件扩展名的映射
	default_type application/octet-stream;

	# SSL Settings
	ssl_protocols TLSv1 TLSv1.1 TLSv1.2 TLSv1.3; # Dropping SSLv3, ref: POODLE
	ssl_prefer_server_ciphers on;

	# Logging Settings
	access_log /var/log/nginx/access.log;
	error_log /var/log/nginx/error.log;

	# Gzip Settings
	gzip on;
	gzip_vary on;
	gzip_proxied any;
	gzip_comp_level 6;
	gzip_buffers 16 8k;
	gzip_http_version 1.1;
	gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

	# Virtual Host Configs
	include /etc/nginx/conf.d/*.conf;
	include /etc/nginx/sites-enabled/*; # 嵌入虚拟站点
}
```
#### 样例站点
```bash
server {
	listen 80;
	server_name localhost;
	root /home/tommy/workdir/test_site;

	location / {
		try_files $uri $uri/ /index.html;
	}
	# 给静态资源增加缓存
	# assets, media
	location ~* \.(?:css(\.map)?|js(\.map)?|jpe?g|png|gif|ico|cur|heic|webp|tiff?|mp3|m4a|aac|ogg|midi?|wav|mp4|mov|webm|mpe?g|avi|ogv|flv|wmv)$ {
			expires    7d;
			access_log off;
	}

	# svg, fonts
	location ~* \.(?:svgz?|ttf|ttc|otf|eot|woff2?)$ {
			add_header Access-Control-Allow-Origin "*"; # 首部控制
			expires    7d; # 缓存控制
			access_log off;
	}
}
# 同ip不同server_name访问
server {
	listen 80; 
	server_name 127.0.0.1;
	# 反向代理
	location / {
		proxy_pass http://localhost:3000;
	}
}
```
#### 错误排查
若无法正常访问服务，可以按照以下思路进行排查。
1. 命令行运行nginx -T 查看当前应用的所有配置项，检查是否理想配置
2. 查看nginx log，目录是/var/log/nginx,在其中的access和error可以查阅详细的访问记录和错误记录
3. 根据具体信息进行进一步维修
#### 配置工具
https://www.digitalocean.com/community/tools/nginx?global.app.lang=zhCN
#### ref
https://nginx.org/en/docs/
https://zhuanlan.zhihu.com/p/458570804

### whistle
- 安装：`npm install -g whistle`
- 启动：`w2 start`（w2等价于whistle）
- 帮助：`w2 help`

启动完成后，代理默认部署在8899端口，将系统或浏览器的http/https代理设置到该端口即可启用代理。

打开配置页
- 方式1：域名访问 http://local.whistlejs.com/
- 方式2：通过ip+端口来访问，形式如 http://whistleServerIP:whistlePort/ e.g. http://127.0.0.1:8899

#### 代理规则配置
whistle有着强大的代理配置功能，每行配置都是`pattern operatorURI`的形式。其中，pattern为匹配请求url的表达式，可以为：域名，路径，正则及通配符等等多种匹配方式；operatorURI 为对应的操作，由操作协议+操作值组成(operatorURI = opProtocol://opValue)。
```bash
10.125.36.59 ke.qq.com 
# 直接host配置
ctc.i.gtimg.cn/qzone/biz/ C:\Users\ouvenzhang\Desktop\biz\build\ 
# 本地文件替换
ke.qq.com js://C:\Users\ouvenzhang\Desktop\gdt\console.js
# 片段注入
www.qq.com ke.qq.com 
# 请求转发
```
#### ref
http://wproxy.org/whistle/
https://imweb.io/topic/596480af33d7f9a94951744c

