## NVM
使用 nvm 管理不同版本的 node 与 npm

### 安装
安装地址：[https://github.com/coreybutler/nvm-windows/releases]

安装完之后需要配置node以及npm源，在nvm安装目录下的settings.txt中加上
node_mirror: https://npm.taobao.org/mirrors/node/
npm_mirror: https://npm.taobao.org/mirrors/npm/

*注意：安装nvm前需要全局卸载已经安装的node，不然会导致nvm无法正常切换版本*

### 使用

`nvm install node`: 安装最新版node
`nvm install [node version]`: 安装指定版本node
`nvm install unstable`: 安装最新的unstable版本


`nvm ls`: 列出本地可用node版本
`nvm ls-remote`: 列出远程可用node版本

`nvm use [node version]`: 切换到指定版本node
`nvm alias [alias name] [node version]`: 创建别名
`nvm unalias [alias name]`: 删除别名
`nvm use [alias name]`: 切换到指定别名的node版本
