import fs from 'fs'
import path from 'path'

// ====== 1. 这里直接复制你的 sidebar（或单独抽文件）======
const sidebar = [
      {
        text: 'CrossOcrean',
        items: [
          { text: '安全声明', link: '/securityStatements'},
          { text: '系统简介', link: '/systemIntroduction'},
          { text: 'APP结构', link: '/app结构' }
        ]
      },
      {
        text: '主页',
        link: '/HomePage/homePage',
        collapsed: false,
        items: [
          {text: '航行状态显示',link: '/HomePage/feature/sailingState'},
          {text: '灯光-空调控制',link: '/HomePage/feature/lightsAirControl'},
          {text: '天气数据',link: '/HomePage/feature/weatherInfo'},
        ]
      },
      {
        text: '地图页',
        link: '/MapPage/mapPage',
        collapsed: false,
        items: [
          {text: '循迹',link: '/MapPage/feature/tracking'},
          {text: '电子围栏',link: '/MapPage/feature/electronicFence'},
          {text: '地图控制',link: '/MapPage/feature/mapControl'},
          {text: '航线保存',link: '/MapPage/feature/wayPointSave'},
        ],
      },
      {
        text: '智能设备控制页',
        link: '/ShipPage/shipPage',
        collapsed: false,
        items: [

        ],
      },
      {
        text: '靠泊页',
        link: '/BerthPage/berthPage',
        collapsed: false,
        items: [
          {text: '靠泊',link: '/BerthPage/feature/berth'},
          {text: '泊位保存',link: '/BerthPage/feature/saveBerthPosition'},
        ],
      },
      {
        text: '设置页',
        link: '/SettingPage/settingPage',
        collapsed: false,
        items: [
          {text: '船舶设置',link: '/SettingPage/feature/shipSetting'},
          {text: '主题切换',link: '/SettingPage/feature/themeSetting'},
          {text: '语音助手',link: '/SettingPage/feature/languageAssistant'},
        ],
      },
      {
        text: '小韵语音助手',
        link: '/XiaoYun/xiaoyun',
        collapsed: false,
        items: [
          // {text: '语音助手功能',link: '/XiaoYun/feature/'},
          // {text: '常见问题',link: '/XiaoYun/feature/'},
        ],
      },
      {
        text: '术语表',
        link: '/termList',
      }
    ]

// root
// ============================
const docsRoot = path.resolve('docs')

// ============================
// output
// ============================
const outputFile = path.join(docsRoot, 'ALL_IN_ONE.md')

// ============================
// 数字转中文
// ============================
function toChineseNumber(num) {
//   const map = ['零','一','二','三','四','五','六','七','八','九','十','十一','十二','','','','','','','','','']
const map = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
for (let i = 10; i <= 50; i++) {
  if (i < 20) {
    map[i] = i === 10 ? '十' : '十' + map[i - 10];
  } else if (i < 100) {
    const tens = Math.floor(i / 10);
    const ones = i % 10;
    map[i] = map[tens] + (ones === 0 ? '十' : '十' + map[ones]);
  }
}
  return map[num] ?? num.toString()
}

// ============================
// base route
// ============================
function getBaseRoute(link) {
  const clean = link.replace(/\/$/, '')
  const parts = clean.split('/')
  parts.pop()
  return parts.join('/')
}

// ============================
// rewrite image path
// ============================
function rewriteImagePath(md, baseRoute = '') {
  return md.replace(
    /\.\/img\/([^)'" >]+)/g,
    (_, file) => {
      return baseRoute
        ? `.${baseRoute}/img/${file}`
        : `./img/${file}`
    }
  )
}

function readCover() {
  const coverPath = path.join(docsRoot, 'cover.md')

  if (!fs.existsSync(coverPath)) {
    console.warn('⚠️ cover.md not found')
    return ''
  }

  return fs.readFileSync(coverPath, 'utf-8')
}

// ============================
// read markdown + transform
// ============================
function readMd(fileLink, index) {
  const filePath = path.join(
    docsRoot,
    fileLink.replace(/^\//, '') + '.md'
  )

  if (!fs.existsSync(filePath)) {
    console.warn('❌ not found:', filePath)
    return ''
  }

  let content = fs.readFileSync(filePath, 'utf-8')

  const baseRoute = getBaseRoute(fileLink)

  // 1. 图片路径重写
  content = rewriteImagePath(content, baseRoute)

  // 2. 一级标题加序号
  content = content.replace(
    /^#\s+(.*)$/m,
    `# ${toChineseNumber(index)}、$1`
  )

  return content
}

// ============================
// merge
// ============================
// ============================
// merge
// ============================
let result = ''

// 先添加封面
result += readCover()
result += '\n\n'

let index = 1

for (const group of sidebar) {
  const items =
    group.items?.length
      ? group.items
      : group.link
        ? [{ text: group.text, link: group.link }]
        : []

  for (const item of items) {
    result += readMd(item.link, index)
    result += '\n\n<div style="page-break-after: always;"></div>\n\n'
    index++
  }
}

// ============================
// write
// ============================
fs.writeFileSync(outputFile, result)

console.log('✅ merged to:', outputFile)