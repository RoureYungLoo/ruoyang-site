# windwos系统优化

## 关闭chrome ai 模型

1. 地址栏输入 chrome://flags，回车
2. 搜索框里搜 optimization-guide-on-device-model，把它设置成 Disabled,点底部的 Relaunch 重启 Chrome。
3. 搜 prompt-api-for-gemini-nano，也设置成 Disabled, 点底部的 Relaunch 重启 Chrome。
4. 删除模型文件
5. 打开 %LOCALAPPDATA%\Google\Chrome\User Data\，找到 OptGuideOnDeviceModel 文件夹，整个删掉。