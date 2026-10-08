// ============================
// NTE 異環 抽卡紀錄 - 資料檔
// ============================
// 新增卡池模板：複製下面這段到 banners 陣列最後面（新的在下），填好存檔即可
// {
//     date:'日期範圍',          // 例：'2026/6/3-6/24'
//     name:'卡池名稱',          // 【】裡的名字
//     featured:'主打角色',       // 主打角色名
//     kind:'分類',               // 限定 / 復刻（不填預設當「限定」）
//     ver:'版本',                // 遊戲版本，例：'1.4上'（不填就不顯示版本標籤）
//     items:[                    // 卡池內容物（展示用）
//       {n:'名稱', grade:'S', type:'角色'},
//       {n:'名稱', grade:'A', type:'滑翔翼'},
//     ],
//     pulls:[                    // 抽到的東西（按順序填）
//       // n: 名稱, grade: 等級(S/A/B), type: 類型(角色/滑翔翼/塗裝/時裝/道具)
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
    date:'2026/4/29-5/13', name:'王牌一代目', featured:'娜娜莉', kind:'限定', ver:'1.0上',
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
    date:'2026/5/13-6/3', name:'獨酌朧月流', featured:'潯', kind:'限定', ver:'1.0下',
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
    date:'2026/6/3-6/24', name:'久夢初醒時', featured:'安魂曲', kind:'限定', ver:'1.1上',
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
  {
    date:'2026/6/24-7/8', name:'無歸路', featured:'卡厄斯', kind:'限定', ver:'1.1下',
    items:[
      {n:'卡厄斯', grade:'S', type:'角色'},
      {n:'天際獵手', grade:'A', type:'滑翔翼'},
      {n:'獵犬奔襲', grade:'S', type:'塗裝'},
      {n:'放晴日', grade:'S', type:'時裝'},
    ],
    pulls:[
      {n:'翳', grade:'A', type:'角色', at:1},
      {n:'薄荷', grade:'A', type:'角色', at:10},
      {n:'海月', grade:'A', type:'角色', at:19},
      {n:'天際獵手', grade:'A', type:'滑翔翼', at:20},
      {n:'翳', grade:'A', type:'角色', at:22},
      {n:'哈尼婭', grade:'A', type:'角色', at:28},
    ],
    cost:{ pulls:'10+10+10', dice:'10+10+2', stones:'0+0+1280' },
  },
  {
    date:'2026/7/8-7/29', name:'破曉前', featured:'真紅', kind:'限定', ver:'1.2上',
    items:[
      {n:'真紅', grade:'S', type:'角色'},
      {n:'蔽日之影', grade:'A', type:'滑翔翼'},
      {n:'赤炎龍影', grade:'S', type:'塗裝'},
      {n:'地海高校生', grade:'S', type:'時裝'},
    ],
    pulls:[
      {n:'蔽日之影', grade:'A', type:'滑翔翼', at:10},
      {n:'薄荷', grade:'A', type:'角色', at:10},
    ],
    cost:{ pulls:'10', dice:'10', stones:'0' },
  },
  {
    date:'2026/7/29-8/19', name:'生命線', featured:'伊洛伊', kind:'限定', ver:'1.2下',
    items:[
      {n:'伊洛伊', grade:'S', type:'角色'},
      {n:'小羊直升機', grade:'A', type:'滑翔翼'},
      {n:'我們仨', grade:'S', type:'塗裝'},
      {n:'大魔導師', grade:'S', type:'時裝'},
    ],
    pulls:[
      {n:'翳', grade:'A', type:'角色', at:5},
    ],
    cost:{ pulls:'10', dice:'10', stones:'0' },
  },
  {
    date:'2026/8/19-9/9', name:'惑心譎影', featured:'殘虹', kind:'限定', ver:'1.3上',
    items:[
      {n:'殘虹', grade:'S', type:'角色'},
      {n:'赤練', grade:'A', type:'滑翔翼'},
      {n:'白沙幻境', grade:'S', type:'塗裝'},
      {n:'秋色閒章', grade:'S', type:'時裝'},
    ],
    pulls:[
      {n:'阿德勒', grade:'A', type:'角色', at:4},
      {n:'阿德勒', grade:'A', type:'角色', at:7},
      {n:'殘虹', grade:'S', type:'角色', at:8},
    ],
    cost:{ pulls:'10', dice:'10', stones:'0' },
  },
  {
    date:'2026/8/19-9/9', name:'王牌一代目', featured:'娜娜莉', kind:'復刻', ver:'1.3上',
    items:[
      {n:'娜娜莉', grade:'S', type:'角色'},
      {n:'副手的副手', grade:'A', type:'滑翔翼'},
      {n:'萌虎來襲', grade:'S', type:'塗裝'},
      {n:'華麗飛踢', grade:'S', type:'時裝'},
    ],
    pulls:[
      {n:'埃德嘉', grade:'A', type:'角色', at:1},
      {n:'薄荷', grade:'A', type:'角色', at:3},
    ],
    cost:{ pulls:'10', dice:'10', stones:'0' },
  },
  {
    date:'2026/9/9-9/30', name:'全頻帶漫遊中！', featured:'靈可', kind:'限定', ver:'1.3下',
    items:[
      {n:'靈可', grade:'S', type:'角色'},
      {n:'超級惡靈！', grade:'A', type:'滑翔翼'},
      {n:'高速運轉的靈可', grade:'S', type:'塗裝'},
      {n:'星間漫遊', grade:'S', type:'時裝'},
    ],
    pulls:[
      {n:'超級惡靈！', grade:'A', type:'滑翔翼', at:6},
      {n:'翳', grade:'A', type:'角色', at:9},
    ],
    cost:{ pulls:'10', dice:'7', stones:'480' },
  },
  {
    date:'2026/9/9-9/30', name:'獨酌朧月流', featured:'潯', kind:'復刻', ver:'1.3下',
    items:[
      {n:'潯', grade:'S', type:'角色'},
      {n:'幽蘭', grade:'A', type:'滑翔翼'},
      {n:'秋色殘影', grade:'S', type:'塗裝'},
      {n:'蘭花不菲', grade:'S', type:'時裝'},
    ],
    pulls:[
    ],
    cost:{ pulls:'10', dice:'2', stones:'1280' },
  },
  {
    date:'2026/9/30-10/21', name:'預言終幕時', featured:'黑羽', kind:'限定', ver:'1.4上',
    items:[
      {n:'黑羽', grade:'S', type:'角色'},
      {n:'預兆鳥', grade:'A', type:'滑翔翼'},
      {n:'夜色飛羽', grade:'S', type:'塗裝'},
      {n:'紅與黑', grade:'S', type:'時裝'},
    ],
    pulls:[
      {n:'阿德勒', grade:'A', type:'角色', at:8},
      {n:'薄荷', grade:'A', type:'角色', at:17},
      {n:'阿德勒', grade:'A', type:'角色', at:20},
      {n:'薄荷', grade:'A', type:'角色', at:28},
      {n:'黑羽', grade:'S', type:'角色', at:30},
    ],
    cost:{ pulls:'10+10+10', dice:'10+7+0', stones:'0+480+1600' },
  },
  {
    date:'2026/9/30-10/21', name:'久夢初醒時', featured:'安魂曲', kind:'復刻', ver:'1.4上',
    items:[
      {n:'安魂曲', grade:'S', type:'角色'},
      {n:'好柿成雙', grade:'A', type:'滑翔翼'},
      {n:'番茄醬巡航', grade:'S', type:'塗裝'},
      {n:'鎏金交響詩', grade:'S', type:'時裝'},
    ],
    pulls:[
      {n:'哈尼婭', grade:'A', type:'角色', at:10},
    ],
    cost:{ pulls:'10', dice:'10', stones:'0' },
  },
];

// ============================
// 特殊活動資料
// ============================
// 新增特殊活動模板：複製下面這段到 specialEvents 陣列最後面，填好存檔即可
// {
//     id:'唯一識別碼',              // 例：'speed_rush_2026'
//     name:'活動名稱',              // 例：'失速狂飆'
//     date:'日期範圍',              // 例：'2026/6/3-7/8'
//     type:'blindbox',             // 活動類型：blindbox=盲盒
//     ver:'版本',                   // 遊戲版本，例：'1.3'（不填就不顯示版本標籤）
//     rerun:{ date:'日期範圍', ver:'版本', fromOrder:13 },   // 選填：復刻檔期（盲盒狀態與價格階梯都繼承，fromOrder = 復刻期的第一抽是第幾抽）
//     description:'活動說明',
//     totalBoxes: 15,              // 盲盒總數
//     prices:{                     // 每次抽取價格（依次遞增）
//       stones:[50,80,...],          // 環石價格
//       stonesName:'環石',          // 環石顯示名稱
//       fons:[50000,80000,...],     // 方斯價格
//       fonsName:'方斯',            // 方斯顯示名稱
//     },
//     items:[                      // 盲盒內容物
//       {n:'名稱', grade:'S'},
//     ],
//     pulls:[                      // 抽取紀錄（按順序填）
//       {n:'名稱', grade:'B', order:1},
//     ],
// },

const specialEvents = [
  {
    id:'speed_rush_2026',
    name:'失速狂飆',
    date:'2026/6/3-7/8',
    ver:'1.1',
    // 復刻檔期：盲盒已開狀態繼承，價格階梯也接續，從第 13 抽開始算復刻期
    rerun:{ date:'2026/9/30-11/11', ver:'1.4', fromOrder:13 },
    type:'blindbox',
    description:'盲盒總共15個，每單次抽取時，可自行選擇使用環石或方斯抽取，每單次抽取環石與方斯所需數量不同，抽取消耗貨幣數量會隨抽取次數依次增加。',
    totalBoxes:15,
    prices:{
      stones:[50,80,100,150,200,300,500,600,800,1200,1400,1600,1800,2000,2200],
      stonesName:'環石',
      fons:[50000,80000,100000,150000,200000,300000,500000,800000,1000000,1500000,2000000,2500000,3000000,3500000,4200000],
      fonsName:'方斯',
    },
    items:[
      {n:'限定載具【Porsche 918 Spyder】', grade:'S'},
      {n:'異能者•零限定時裝及頭像【最佳拍檔】', grade:'S'},
      {n:'捏造骰子*10', grade:'S'},
      {n:'一封手寫信*3', grade:'S'},
      {n:'方斯*500000', grade:'A'},
      {n:'頭像框【怦然瞬間】', grade:'S'},
      {n:'名片【賽道掠影】', grade:'S'},
      {n:'捏造骰子*3', grade:'S'},
      {n:'浮冰電影票*3', grade:'A'},
      {n:'方斯*100000', grade:'A'},
      {n:'無夢果核*10', grade:'B'},
      {n:'特級獵人攻略*10', grade:'A'},
      {n:'特級獵人攻略*10', grade:'A'},
      {n:'甲硬幣*100000', grade:'B'},
      {n:'甲硬幣*100000', grade:'B'},
    ],
    // pulls: currency 欄位記錄該次使用的貨幣 ('stones'=環石, 'fons'=方斯)
    pulls:[
      {n:'甲硬幣*100000', grade:'B', order:1, currency:'fons'},
      {n:'浮冰電影票*3', grade:'A', order:2, currency:'fons'},
      {n:'無夢果核*10', grade:'B', order:3, currency:'fons'},
      {n:'名片【賽道掠影】', grade:'S', order:4, currency:'fons'},
      {n:'特級獵人攻略*10', grade:'A', order:5, currency:'fons'},
      {n:'頭像框【怦然瞬間】', grade:'S', order:6, currency:'fons'},
      {n:'方斯*500000', grade:'A', order:7, currency:'fons'},
      {n:'甲硬幣*100000', grade:'B', order:8, currency:'fons'},
      {n:'捏造骰子*3', grade:'S', order:9, currency:'fons'},
      {n:'異能者•零限定時裝及頭像【最佳拍檔】', grade:'S', order:10, currency:'fons'},
      {n:'一封手寫信*3', grade:'S', order:11, currency:'fons'},
      {n:'方斯*100000', grade:'A', order:12, currency:'fons'},
    ],
  },
  {
    id:'neon_tear_2026',
    name:'霓虹撕裂時',
    date:'2026/7/8-8/19',
    ver:'1.2',
    type:'blindbox',
    description:'盲盒總共15個，每單次抽取時，可自行選擇使用環石或方斯抽取，每單次抽取環石與方斯所需數量不同，抽取消耗貨幣數量會隨抽取次數依次增加。',
    totalBoxes:15,
    prices:{
      stones:[50,80,100,120,150,200,280,350,400,450,500,600,800,900,1000],
      stonesName:'環石',
      fons:[50000,80000,100000,120000,150000,300000,450000,600000,750000,900000,1100000,1300000,1700000,2000000,2200000],
      fonsName:'方斯',
    },
    items:[
      {n:'限定載具【Draco】', grade:'S'},
      {n:'異能者•零限定時裝及頭像【授勳日】', grade:'S'},
      {n:'捏造骰子*10', grade:'S'},
      {n:'異能者•零限定時裝染色【授勳日•赤心】', grade:'S'},
      {n:'異能者•零限定時裝染色【授勳日•落星】', grade:'S'},
      {n:'一封手寫信*1', grade:'S'},
      {n:'頭像框【餘燼軌跡】', grade:'S'},
      {n:'捏造骰子*3', grade:'S'},
      {n:'浮冰電影票*3', grade:'A'},
      {n:'方斯*100000', grade:'A'},
      {n:'無夢果核*10', grade:'B'},
      {n:'特級獵人攻略*10', grade:'A'},
      {n:'特級獵人攻略*10', grade:'A'},
      {n:'甲硬幣*100000', grade:'B'},
      {n:'甲硬幣*100000', grade:'B'},
    ],
    pulls:[
      {n:'一封手寫信*1', grade:'S', order:1, currency:'fons'},
      {n:'捏造骰子*3', grade:'S', order:2, currency:'fons'},
      {n:'甲硬幣*100000', grade:'B', order:3, currency:'fons'},
      {n:'特級獵人攻略*10', grade:'A', order:4, currency:'fons'},
      {n:'特級獵人攻略*10', grade:'A', order:5, currency:'fons'},
      {n:'甲硬幣*100000', grade:'B', order:6, currency:'fons'},
      {n:'浮冰電影票*3', grade:'A', order:7, currency:'fons'},
      {n:'頭像框【餘燼軌跡】', grade:'S', order:8, currency:'fons'},
      {n:'方斯*100000', grade:'A', order:9, currency:'fons'},
      {n:'無夢果核*10', grade:'B', order:10, currency:'fons'},
      {n:'異能者•零限定時裝染色【授勳日•赤心】', grade:'S', order:11, currency:'fons'},
      {n:'捏造骰子*10', grade:'S', order:12, currency:'fons'},
      {n:'異能者•零限定時裝染色【授勳日•落星】', grade:'S', order:13, currency:'fons'},
      {n:'異能者•零限定時裝及頭像【授勳日】', grade:'S', order:14, currency:'fons'},
      {n:'限定載具【Draco】', grade:'S', order:15, currency:'stones'},
    ],
  },
  {
    id:'tide_surf_2026',
    name:'逐光破浪',
    date:'2026/8/19-9/30',
    ver:'1.3',
    type:'blindbox',
    description:'盲盒總共15個，每單次抽取時，可自行選擇使用環石或方斯抽取，每單次抽取環石與方斯所需數量不同，抽取消耗貨幣數量會隨抽取次數依次增加。',
    totalBoxes:15,
    prices:{
      stones:[50,80,100,150,200,300,500,600,800,1200,1400,1600,1800,2000,2200],
      stonesName:'環石',
      fons:[50000,80000,100000,150000,200000,300000,500000,800000,1000000,1500000,2000000,2500000,3000000,3500000,4200000],
      fonsName:'方斯',
    },
    items:[
      {n:'限定載具【Tide】', grade:'S'},
      {n:'娜娜莉限定時裝及頭像【燦陽逐浪】及排球【萌虎新星】', grade:'S'},
      {n:'異能者•零限定時裝及頭像【夏日澄空】及排球【海特洛日出】', grade:'S'},
      {n:'薄荷限定時裝及頭像【海鹽金平糖】及排球【香檳薄荷】', grade:'S'},
      {n:'捏造骰子*5', grade:'S'},
      {n:'一封手寫信*2', grade:'S'},
      {n:'頭像框【悠悠夏日】', grade:'S'},
      {n:'異象巡禮材料自選箱*5', grade:'S'},
      {n:'捏造骰子*3', grade:'S'},
      {n:'浮冰電影票*3', grade:'A'},
      {n:'特級獵人攻略*10', grade:'A'},
      {n:'特級獵人攻略*10', grade:'A'},
      {n:'無夢果核*10', grade:'B'},
      {n:'甲硬幣*100000', grade:'B'},
      {n:'甲硬幣*100000', grade:'B'},
    ],
    pulls:[
      {n:'特級獵人攻略*10', grade:'A', order:1, currency:'fons'},
      {n:'甲硬幣*100000', grade:'B', order:2, currency:'fons'},
      {n:'甲硬幣*100000', grade:'B', order:3, currency:'fons'},
      {n:'特級獵人攻略*10', grade:'A', order:4, currency:'fons'},
      {n:'捏造骰子*3', grade:'S', order:5, currency:'fons'},
      {n:'無夢果核*10', grade:'B', order:6, currency:'fons'},
      {n:'頭像框【悠悠夏日】', grade:'S', order:7, currency:'fons'},
      {n:'浮冰電影票*3', grade:'A', order:8, currency:'fons'},
      {n:'異象巡禮材料自選箱*5', grade:'S', order:9, currency:'fons'},
      {n:'一封手寫信*2', grade:'S', order:10, currency:'fons'},
      {n:'捏造骰子*5', grade:'S', order:11, currency:'fons'},
      {n:'薄荷限定時裝及頭像【海鹽金平糖】及排球【香檳薄荷】', grade:'S', order:12, currency:'fons'},
      {n:'限定載具【Tide】', grade:'S', order:13, currency:'stones'},
      {n:'異能者•零限定時裝及頭像【夏日澄空】及排球【海特洛日出】', grade:'S', order:14, currency:'stones'},
      {n:'娜娜莉限定時裝及頭像【燦陽逐浪】及排球【萌虎新星】', grade:'S', order:15, currency:'stones'},
    ],
  },
];
