# Mercury PLC 数据导入原型

确认日期：2026-10-19。本目录为已确认交互版本，可直接交给前端参考和复用。

## 预览

直接打开 index.html，或从仓库根目录运行 `python3 -m http.server 8080` 后访问 http://localhost:8080/plc-import/ 。

在线原型：https://mercury-plc-import-20261017.frosty-bear-8273.chatgpt.site

## 功能

- 能效测试 → PLC导入：配置名称、协议连接、字段对应关系、核对并填入。
- 协议：Modbus TCP / S7 / Modbus RTU；协议参数卡片可展开、收起，切换协议保留已填参数。
- 所有协议保留设备IP与端口，RTU串口等参数在协议卡片中配置。
- 配置明细：点位地址、数据类型、精度、偏移、单位、保留位数。
- 换算：PLC原始值 × 精度 + 偏移，再按保留位数处理。
- 取数：最新值、指定时间点值、所选时段平均值。
- 已有数值通过页面内确认框提示覆盖；确认时使用点击填入时固定的数据，完成后断开。
- 系统配置右侧卡片 → PLC记录：搜索、查看、使用、星标及删除历史配置。
- 成功连接读取后自动记录配置；相同配置更新最近使用时间，修改后生成新历史；星标配置优先显示。

## 前端接入说明

本原型为无外部依赖的单文件HTML/CSS/JavaScript，PLC连接与读数均为模拟。
配置保存在浏览器localStorage（mercury-plc-v2，兼容迁移v1）；实际产品应接入移动本地服务器的配置存储。
协议字段沿用Sentinel原型；实际通信、校验和设备支持范围需由后端驱动确定。
连续趋势仅在本次连接期间保留，断开后清除。正式测试结果需接入能效测试记录保存接口。

主要逻辑：
- protocolSchemas / connectionHTML / changeProtocol：协议参数定义及切换。
- collect / validateProtocol：输入收集与校验。
- recordHistory / signature：配置历史记录与去重。
- connectPLC / sampleTick：模拟连接与实时读取，替换为真实PLC服务。
- selectedValues：最新值、指定时间点及区间平均值。
- fillData / commitFill：固定待填值、覆盖确认、填入与断开。

## 验证范围

已通过脚本检查协议字段切换、参数保留、历史记录与星标、换算、三种取数、覆盖取消及确认填入。
尚未完成浏览器视觉检查；本原型未接入真实PLC。
