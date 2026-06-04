// ============================
// NTE 異環 抽卡紀錄 - 資料檔
// ============================
// 新增卡池模板：複製下面這段到 banners 陣列最後面（新的在下），填好存檔即可
// {
//     date:'日期範圍',          // 例：'2026/6/3-6/24'
//     name:'卡池名稱',          // 【】裡的名字
//     featured:'主打角色',       // 主打角色名
//     items:[                    // 卡池內容物（展示用）
//       {n:'名稱', grade:'S', type:'角色'},
//       {n:'名稱', grade:'A', type:'滑翔翼'},
//     ],
//     pulls:[                    // 抽到的東西（按順序填）
//       // n: 名稱, grade: 等級(S/A/B), type: 分類(角色/滑翔翼/塗裝/時裝/道具)
//       // at: 第幾抽出（整個卡池的累計位置）
//       {n:'角色名', grade:'A', type:'角色', at:3},
//     ],
//     cost:{                     // 花費（用加法算式記錄每次10抽）
//       pulls:'10',              // 總抽數，例：'10+10' 代表抽了兩輪10抽
//       dice:'10',               // 骰子，例：'10+6'
//       stones:'0',              // 環石，例：'0+640'
//     },
// },

const banners = [
  {
    date:'2026/4/29-5/13', name:'王牌一代目', featured:'娜娜莉',
    items:[
      {n:'娜娜莉', grade:'S', type:'角色'},
      {n:'副手的副手', grade:'A', type:'滑翔翼'},
      {n:'萌虎來襲', grade:'S', type:'塗裝'},
      {n:'華麗飛踢', grade:'S', type:'時裝'},
    ],
    pulls:[
      {n:'阿德勒', grade:'A', type:'角色', at:1},
      {n:'副手的副手', grade:'A', type:'滑翔翼', at:2},
      {n:'埃德嘉', grade:'A', type:'角色', at:5},
    ],
    cost:{ pulls:'10', dice:'10', stones:'0' },
  },
  {
    date:'2026/5/13-6/3', name:'獨酌朧月流', featured:'潯',
    items:[
      {n:'潯', grade:'S', type:'角色'},
      {n:'幽蘭', grade:'A', type:'滑翔翼'},
      {n:'秋色殘影', grade:'S', type:'塗裝'},
      {n:'蘭花不菲', grade:'S', type:'時裝'},
    ],
    pulls:[
      {n:'哈尼婭', grade:'A', type:'角色', at:3},
      {n:'海月', grade:'A', type:'角色', at:7},
      {n:'幽蘭', grade:'A', type:'滑翔翼', at:8},
      {n:'翳', grade:'A', type:'角色', at:10},
    ],
    cost:{ pulls:'10', dice:'10', stones:'0' },
  },
  {
    date:'2026/6/3-6/24', name:'久夢初醒時', featured:'安魂曲',
    items:[
      {n:'安魂曲', grade:'S', type:'角色'},
      {n:'好柿成雙', grade:'A', type:'滑翔翼'},
      {n:'番茄醬巡航', grade:'S', type:'塗裝'},
      {n:'鎏金交響詩', grade:'S', type:'時裝'},
    ],
    pulls:[
      {n:'安魂曲', grade:'S', type:'角色', at:2},
      {n:'好柿成雙', grade:'A', type:'滑翔翼', at:17},
    ],
    cost:{ pulls:'10+10', dice:'10+6', stones:'0+640' },
  },
];
