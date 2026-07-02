# 地图控制

App 提供了完善的地图控制能力，支持地图移动、缩放、船舶定位等操作，以满足不同使用场景下的操控需求。

同时，为提升操作安全性并减少误触，系统提供“地图锁定”功能。开启后，地图将无法拖动，且视图中心始终跟随船舶当前位置。

![地图控制](./img/mapControl/地图控制.png)

1. **船舶实时轨迹显示开关：** <img src="./img/mapControl/eye.svg" width="20" style="display:inline;vertical-align:middle;" />控制是否显示船舶的实时运动轨迹，长按该按钮可清除历史实时轨迹数据。
2. **地图锁定开关：** <img src="./img/mapControl/unlock.svg" width="20" style="display:inline;vertical-align:middle;" />开启后地图中心立刻移动到船舶当前位置，且地图无法拖动（可以进行双指缩放地图操作），视角将锁定并持续跟随船舶当前位置。
![打开地图锁定](./img/mapControl/打开地图锁定.gif)
3. **船舶方向固定开关：** <img src="./img/mapControl/north.svg" width="20" style="display:inline;vertical-align:middle;" />开启后船舶图标方向保持正前方不变，地图将根据船舶航向角进行旋转，实现“航向朝上”的视角模式。
![船舶方向固定](./img/mapControl/船舶方向固定.gif)
4. **定位船舶按钮：** <img src="./img/mapControl/position.svg" width="20" style="display:inline;vertical-align:middle;" />点击后地图视角将自动放大并移动至船舶当前位置，实现快速回中定位。
![定位船舶位置](./img/mapControl/定位船舶位置.gif)
