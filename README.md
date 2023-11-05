# HydroOJ Cancel Avatar

适用于 [HydroOJ](//hydro.js.org) 的取消用户上传头像的插件。

目的：备案的时候方便点，也可以避免头像图过大，节省流量和带宽

- 取消上传头像功能，
- 取消Gravatar和Github选项
- 仅保留qq头像选项
- 取消个人简介中的上传图片和文件的按钮。

## Installation

1. 安装命令：

```bash
yarn global add hydrooj-cancelavatar
hydrooj addon add hydrooj-cancelavatar
```

2. 重启 HydroOJ。

```bash
pm2 restart hydrooj
```

3. 进入 `我的资料-编辑个人信息`，点击头像下方的`Change avatar`按钮，应该就只有qq一个默认选项了。
3. 如需保留其他选项，按需在 `frontend/foo.page.ts` 中修改 `sel.options.remove(3); ` 这几行即可。其中 `3` 表示==当前==第 `4` 个选项。
3. `plh.placeholder` 为右边文本框默认占位符，可自行修改。
3. 后端代码禁掉了上传功能，如需开启，可以直接删除 `index.ts` 文件或自行修改。

## 卸载

```bash
yarn global remove hydrooj-cancelavatar
hydrooj addon remove hydrooj-cancelavatar
```



## License

AGPL v3 