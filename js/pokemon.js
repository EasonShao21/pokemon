import pokemonAdvanceType from "./pokemonAdvanceType.js";
import pokemonCard from "./pokemonCard.js";
const app = {
  data() {
    return {
      key_word: null,
      advances: [
        {
          name: "一般",
          value: "normal",
        },
        {
          name: "草",
          value: "grass",
        },
        {
          name: "水",
          value: "water",
        },
        {
          name: "火",
          value: "fire",
        },
        {
          name: "電",
          value: "electric",
        },
        {
          name: "冰",
          value: "ice",
        },
        {
          name: "格鬥",
          value: "fighting",
        },
        {
          name: "毒",
          value: "poison",
        },
        {
          name: "地面",
          value: "ground",
        },
        {
          name: "飛行",
          value: "flying",
        },
        {
          name: "超能",
          value: "psychic",
        },
        {
          name: "蟲",
          value: "bug",
        },
        {
          name: "岩石",
          value: "rock",
        },
        {
          name: "幽靈",
          value: "ghost",
        },
        {
          name: "龍",
          value: "dragon",
        },
      ],
      advance_select: null,
      pokemons: [
        {
          no: 1,
          name: "妙蛙種子",
          img_url: "./images/pokemons/001.png",
          advances_type: ["grass", "poison"],
        },
        {
          no: 2,
          name: "妙蛙草",
          img_url: "./images/pokemons/002.png",
          advances_type: ["grass", "poison"],
        },
        {
          no: 3,
          name: "妙蛙花",
          img_url: "./images/pokemons/003.png",
          advances_type: ["grass", "poison"],
        },
        {
          no: 4,
          name: "小火龍",
          img_url: "./images/pokemons/004.png",
          advances_type: ["fire"],
        },
        {
          no: 5,
          name: "火恐龍",
          img_url: "./images/pokemons/005.png",
          advances_type: ["fire"],
        },
        {
          no: 6,
          name: "噴火龍",
          img_url: "./images/pokemons/006.png",
          advances_type: ["fire"],
        },
        {
          no: 7,
          name: "傑尼龜",
          img_url: "./images/pokemons/007.png",
          advances_type: ["water"],
        },
        {
          no: 8,
          name: "卡咪龜",
          img_url: "./images/pokemons/008.png",
          advances_type: ["water"],
        },
        {
          no: 9,
          name: "水箭龜",
          img_url: "./images/pokemons/009.png",
          advances_type: ["water"],
        },
        {
          no: 10,
          name: "綠毛蟲",
          img_url: "./images/pokemons/010.png",
          advances_type: ["bug"],
        },
        {
          no: 11,
          name: "鐵甲蛹",
          img_url: "./images/pokemons/011.png",
          advances_type: ["bug"],
        },
        {
          no: 12,
          name: "巴大蝶",
          img_url: "./images/pokemons/012.png",
          advances_type: ["bug", "flying"],
        },
        {
          no: 13,
          name: "獨角蟲",
          img_url: "./images/pokemons/013.png",
          advances_type: ["bug", "poison"],
        },
        {
          no: 14,
          name: "鐵殼蛹",
          img_url: "./images/pokemons/014.png",
          advances_type: ["bug", "poison"],
        },
        {
          no: 15,
          name: "大針蜂",
          img_url: "./images/pokemons/015.png",
          advances_type: ["bug", "poison"],
        },
        {
          no: 16,
          name: "波波",
          img_url: "./images/pokemons/016.png",
          advances_type: ["normal", "flying"],
        },
        {
          no: 17,
          name: "比比鳥",
          img_url: "./images/pokemons/017.png",
          advances_type: ["normal", "flying"],
        },
        {
          no: 18,
          name: "大比鳥",
          img_url: "./images/pokemons/018.png",
          advances_type: ["normal", "flying"],
        },
        {
          no: 19,
          name: "小拉達",
          img_url: "./images/pokemons/019.png",
          advances_type: ["normal"],
        },
        {
          no: 20,
          name: "拉達",
          img_url: "./images/pokemons/020.png",
          advances_type: ["normal"],
        },
        {
          no: 21,
          name: "烈雀",
          img_url: "./images/pokemons/021.png",
          advances_type: ["normal", "flying"],
        },
        {
          no: 22,
          name: "大嘴雀",
          img_url: "./images/pokemons/022.png",
          advances_type: ["normal", "flying"],
        },
        {
          no: 23,
          name: "阿伯蛇",
          img_url: "./images/pokemons/023.png",
          advances_type: ["poison"],
        },
        {
          no: 24,
          name: "阿伯怪",
          img_url: "./images/pokemons/024.png",
          advances_type: ["poison"],
        },
        {
          no: 25,
          name: "皮卡丘",
          img_url: "./images/pokemons/025.png",
          advances_type: ["electric"],
        },
        {
          no: 26,
          name: "雷丘",
          img_url: "./images/pokemons/026.png",
          advances_type: ["electric"],
        },
        {
          no: 27,
          name: "穿山鼠",
          img_url: "./images/pokemons/027.png",
          advances_type: ["ground"],
        },
        {
          no: 28,
          name: "穿山王",
          img_url: "./images/pokemons/028.png",
          advances_type: ["ground"],
        },
        {
          no: 29,
          name: "尼多蘭",
          img_url: "./images/pokemons/029.png",
          advances_type: ["poison"],
        },
        {
          no: 30,
          name: "尼多娜",
          img_url: "./images/pokemons/030.png",
          advances_type: ["poison"],
        },
        {
          no: 31,
          name: "尼多后",
          img_url: "./images/pokemons/031.png",
          advances_type: ["poison", "ground"],
        },
        {
          no: 32,
          name: "尼多朗",
          img_url: "./images/pokemons/032.png",
          advances_type: ["poison"],
        },
        {
          no: 33,
          name: "尼多力諾",
          img_url: "./images/pokemons/033.png",
          advances_type: ["poison"],
        },
        {
          no: 34,
          name: "尼多王",
          img_url: "./images/pokemons/034.png",
          advances_type: ["poison", "ground"],
        },
        {
          no: 35,
          name: "皮皮",
          img_url: "./images/pokemons/035.png",
          advances_type: ["normal"],
        },
        {
          no: 36,
          name: "尼可西",
          img_url: "./images/pokemons/036.png",
          advances_type: ["normal"],
        },
        {
          no: 37,
          name: "六尾",
          img_url: "./images/pokemons/037.png",
          advances_type: ["fire"],
        },
        {
          no: 38,
          name: "九尾",
          img_url: "./images/pokemons/038.png",
          advances_type: ["fire"],
        },
        {
          no: 39,
          name: "胖丁",
          img_url: "./images/pokemons/039.png",
          advances_type: ["normal"],
        },
        {
          no: 40,
          name: "胖可丁",
          img_url: "./images/pokemons/040.png",
          advances_type: ["normal"],
        },
        {
          no: 41,
          name: "超音蝠",
          img_url: "./images/pokemons/041.png",
          advances_type: ["poison", "flying"],
        },
        {
          no: 42,
          name: "大嘴蝠",
          img_url: "./images/pokemons/042.png",
          advances_type: ["poison", "flying"],
        },
        {
          no: 43,
          name: "走路草",
          img_url: "./images/pokemons/043.png",
          advances_type: ["poison", "grass"],
        },
        {
          no: 44,
          name: "臭臭花",
          img_url: "./images/pokemons/044.png",
          advances_type: ["poison", "grass"],
        },
        {
          no: 45,
          name: "霸王花",
          img_url: "./images/pokemons/045.png",
          advances_type: ["poison", "grass"],
        },
        {
          no: 46,
          name: "派拉斯",
          img_url: "./images/pokemons/046.png",
          advances_type: ["grass", "bug"],
        },
        {
          no: 47,
          name: "派拉斯特",
          img_url: "./images/pokemons/047.png",
          advances_type: ["grass", "bug"],
        },
        {
          no: 48,
          name: "毛球",
          img_url: "./images/pokemons/048.png",
          advances_type: ["bug", "poison"],
        },
        {
          no: 49,
          name: "摩魯蛾",
          img_url: "./images/pokemons/049.png",
          advances_type: ["poison", "bug"],
        },
        {
          no: 50,
          name: "地鼠",
          img_url: "./images/pokemons/050.png",
          advances_type: ["ground"],
        },
        {
          no: 51,
          name: "三地鼠",
          img_url: "./images/pokemons/051.png",
          advances_type: ["ground"],
        },
        {
          no: 52,
          name: "喵喵",
          img_url: "./images/pokemons/052.png",
          advances_type: ["normal"],
        },
        {
          no: 53,
          name: "貓老大",
          img_url: "./images/pokemons/053.png",
          advances_type: ["normal"],
        },
        {
          no: 54,
          name: "可達鴨",
          img_url: "./images/pokemons/054.png",
          advances_type: ["water"],
        },
        {
          no: 55,
          name: "哥達鴨",
          img_url: "./images/pokemons/055.png",
          advances_type: ["water"],
        },
        {
          no: 56,
          name: "猴怪",
          img_url: "./images/pokemons/056.png",
          advances_type: ["fighting"],
        },
        {
          no: 57,
          name: "火爆猴",
          img_url: "./images/pokemons/057.png",
          advances_type: ["fighting"],
        },
        {
          no: 58,
          name: "卡蒂狗",
          img_url: "./images/pokemons/058.png",
          advances_type: ["fire"],
        },
        {
          no: 59,
          name: "風速狗",
          img_url: "./images/pokemons/059.png",
          advances_type: ["fire"],
        },
        {
          no: 60,
          name: "蚊香蝌蚪",
          img_url: "./images/pokemons/060.png",
          advances_type: ["water"],
        },
        {
          no: 61,
          name: "蚊香君",
          img_url: "./images/pokemons/061.png",
          advances_type: ["water"],
        },
        {
          no: 62,
          name: "蚊香泳士",
          img_url: "./images/pokemons/062.png",
          advances_type: ["water", "fighting"],
        },
        {
          no: 63,
          name: "凱西",
          img_url: "./images/pokemons/063.png",
          advances_type: ["psychic"],
        },
        {
          no: 64,
          name: "勇基拉",
          img_url: "./images/pokemons/064.png",
          advances_type: ["psychic"],
        },
        {
          no: 65,
          name: "胡地",
          img_url: "./images/pokemons/065.png",
          advances_type: ["psychic"],
        },
        {
          no: 66,
          name: "腕力",
          img_url: "./images/pokemons/066.png",
          advances_type: ["fighting"],
        },
        {
          no: 67,
          name: "豪力",
          img_url: "./images/pokemons/067.png",
          advances_type: ["fighting"],
        },
        {
          no: 68,
          name: "怪力",
          img_url: "./images/pokemons/068.png",
          advances_type: ["fighting"],
        },
        {
          no: 69,
          name: "喇吧芽",
          img_url: "./images/pokemons/069.png",
          advances_type: ["grass", "poison"],
        },
        {
          no: 70,
          name: "口呆花",
          img_url: "./images/pokemons/070.png",
          advances_type: ["grass", "poison"],
        },
        {
          no: 71,
          name: "大食花",
          img_url: "./images/pokemons/071.png",
          advances_type: ["grass", "poison"],
        },
        {
          no: 72,
          name: "瑪瑙水母",
          img_url: "./images/pokemons/072.png",
          advances_type: ["water", "poison"],
        },
        {
          no: 73,
          name: "毒刺水母",
          img_url: "./images/pokemons/073.png",
          advances_type: ["water", "poison"],
        },
        {
          no: 74,
          name: "小拳石",
          img_url: "./images/pokemons/074.png",
          advances_type: ["rock", "ground"],
        },
        {
          no: 75,
          name: "隆隆石",
          img_url: "./images/pokemons/075.png",
          advances_type: ["rock", "ground"],
        },
        {
          no: 76,
          name: "隆隆岩",
          img_url: "./images/pokemons/076.png",
          advances_type: ["rock", "ground"],
        },
        {
          no: 77,
          name: "小火馬",
          img_url: "./images/pokemons/077.png",
          advances_type: ["fire"],
        },
        {
          no: 78,
          name: "烈焰馬",
          img_url: "./images/pokemons/078.png",
          advances_type: ["fire"],
        },
        {
          no: 79,
          name: "呆呆獸",
          img_url: "./images/pokemons/079.png",
          advances_type: ["water"],
        },
        {
          no: 80,
          name: "呆殼獸",
          img_url: "./images/pokemons/080.png",
          advances_type: ["water"],
        },
        {
          no: 81,
          name: "小磁怪",
          img_url: "./images/pokemons/081.png",
          advances_type: ["electric"],
        },
        {
          no: 82,
          name: "三合一磁怪",
          img_url: "./images/pokemons/082.png",
          advances_type: ["electric"],
        },
        {
          no: 83,
          name: "大蔥鴨",
          img_url: "./images/pokemons/083.png",
          advances_type: ["normal", "flying"],
        },
        {
          no: 84,
          name: "嘟嘟",
          img_url: "./images/pokemons/084.png",
          advances_type: ["normal", "flying"],
        },
        {
          no: 85,
          name: "嘟嘟利",
          img_url: "./images/pokemons/085.png",
          advances_type: ["normal", "flying"],
        },
        {
          no: 86,
          name: "小海獅",
          img_url: "./images/pokemons/086.png",
          advances_type: ["water"],
        },
        {
          no: 87,
          name: "白海獅",
          img_url: "./images/pokemons/087.png",
          advances_type: ["water", "ice"],
        },
        {
          no: 88,
          name: "臭泥",
          img_url: "./images/pokemons/088.png",
          advances_type: ["poison"],
        },
        {
          no: 89,
          name: "臭臭泥",
          img_url: "./images/pokemons/089.png",
          advances_type: ["poison"],
        },
        {
          no: 90,
          name: "大舌貝",
          img_url: "./images/pokemons/090.png",
          advances_type: ["water"],
        },
        {
          no: 91,
          name: "刺甲貝",
          img_url: "./images/pokemons/091.png",
          advances_type: ["water", "ice"],
        },
        {
          no: 92,
          name: "鬼斯",
          img_url: "./images/pokemons/092.png",
          advances_type: ["ghost", "poison"],
        },
        {
          no: 93,
          name: "鬼斯通",
          img_url: "./images/pokemons/093.png",
          advances_type: ["ghost", "poison"],
        },
        {
          no: 94,
          name: "耿鬼",
          img_url: "./images/pokemons/094.png",
          advances_type: ["ghost", "poison"],
        },
        {
          no: 95,
          name: "大岩蛇",
          img_url: "./images/pokemons/095.png",
          advances_type: ["ground", "rock"],
        },
        {
          no: 96,
          name: "催眠貘",
          img_url: "./images/pokemons/096.png",
          advances_type: ["psychic"],
        },
        {
          no: 97,
          name: "引夢貘人",
          img_url: "./images/pokemons/097.png",
          advances_type: ["psychic"],
        },
        {
          no: 98,
          name: "大鉗蟹",
          img_url: "./images/pokemons/098.png",
          advances_type: ["water"],
        },
        {
          no: 99,
          name: "巨鉗蟹",
          img_url: "./images/pokemons/099.png",
          advances_type: ["water"],
        },
        {
          no: 100,
          name: "霹靂電球",
          img_url: "./images/pokemons/100.png",
          advances_type: ["electric"],
        },
        {
          no: 101,
          name: "頑皮雷彈",
          img_url: "./images/pokemons/101.png",
          advances_type: ["electric"],
        },
        {
          no: 102,
          name: "蛋蛋",
          img_url: "./images/pokemons/102.png",
          advances_type: ["grass", "psychic"],
        },
        {
          no: 103,
          name: "椰蛋樹",
          img_url: "./images/pokemons/103.png",
          advances_type: ["grass", "psychic"],
        },
        {
          no: 104,
          name: "卡拉卡拉",
          img_url: "./images/pokemons/104.png",
          advances_type: ["ground"],
        },
        {
          no: 105,
          name: "嘎拉嘎拉",
          img_url: "./images/pokemons/105.png",
          advances_type: ["ground"],
        },
        {
          no: 106,
          name: "飛腿郎",
          img_url: "./images/pokemons/106.png",
          advances_type: ["fighting"],
        },
        {
          no: 107,
          name: "快拳郎",
          img_url: "./images/pokemons/107.png",
          advances_type: ["fighting"],
        },
        {
          no: 108,
          name: "大舌頭",
          img_url: "./images/pokemons/108.png",
          advances_type: ["normal"],
        },
        {
          no: 109,
          name: "瓦斯彈",
          img_url: "./images/pokemons/109.png",
          advances_type: ["poison"],
        },
        {
          no: 110,
          name: "雙彈瓦斯",
          img_url: "./images/pokemons/110.png",
          advances_type: ["poison"],
        },
        {
          no: 111,
          name: "獨角犀牛",
          img_url: "./images/pokemons/111.png",
          advances_type: ["ground", "rock"],
        },
        {
          no: 112,
          name: "鑽角犀獸",
          img_url: "./images/pokemons/112.png",
          advances_type: ["ground", "rock"],
        },
        {
          no: 113,
          name: "吉利蛋",
          img_url: "./images/pokemons/113.png",
          advances_type: ["normal"],
        },
        {
          no: 114,
          name: "蔓藤怪",
          img_url: "./images/pokemons/114.png",
          advances_type: ["grass"],
        },
        {
          no: 115,
          name: "袋獸",
          img_url: "./images/pokemons/115.png",
          advances_type: ["normal"],
        },
        {
          no: 116,
          name: "墨海馬",
          img_url: "./images/pokemons/116.png",
          advances_type: ["water"],
        },
        {
          no: 117,
          name: "海刺龍",
          img_url: "./images/pokemons/117.png",
          advances_type: ["water"],
        },
        {
          no: 118,
          name: "角金魚",
          img_url: "./images/pokemons/118.png",
          advances_type: ["water"],
        },
        {
          no: 119,
          name: "金魚王",
          img_url: "./images/pokemons/119.png",
          advances_type: ["water"],
        },
        {
          no: 120,
          name: "海星星",
          img_url: "./images/pokemons/120.png",
          advances_type: ["water"],
        },
        {
          no: 121,
          name: "寶石海星",
          img_url: "./images/pokemons/121.png",
          advances_type: ["water", "psychic"],
        },
        {
          no: 122,
          name: "魔牆人偶",
          img_url: "./images/pokemons/122.png",
          advances_type: ["psychic"],
        },
        {
          no: 123,
          name: "飛天螳螂",
          img_url: "./images/pokemons/123.png",
          advances_type: ["bug", "flying"],
        },
        {
          no: 124,
          name: "迷唇姐",
          img_url: "./images/pokemons/124.png",
          advances_type: ["ice", "psychic"],
        },
        {
          no: 125,
          name: "電擊獸",
          img_url: "./images/pokemons/125.png",
          advances_type: ["electric"],
        },
        {
          no: 126,
          name: "鴨嘴火獸",
          img_url: "./images/pokemons/126.png",
          advances_type: ["fire"],
        },
        {
          no: 127,
          name: "凱羅斯",
          img_url: "./images/pokemons/127.png",
          advances_type: ["bug"],
        },
        {
          no: 128,
          name: "肯泰羅",
          img_url: "./images/pokemons/128.png",
          advances_type: ["normal"],
        },
        {
          no: 129,
          name: "鯉魚王",
          img_url: "./images/pokemons/129.png",
          advances_type: ["water"],
        },
        {
          no: 130,
          name: "暴鯉龍",
          img_url: "./images/pokemons/130.png",
          advances_type: ["water", "flying"],
        },
        {
          no: 131,
          name: "拉普拉斯",
          img_url: "./images/pokemons/131.png",
          advances_type: ["water", "ice"],
        },
        {
          no: 132,
          name: "百變怪",
          img_url: "./images/pokemons/132.png",
          advances_type: ["normal"],
        },
        {
          no: 133,
          name: "伊布",
          img_url: "./images/pokemons/133.png",
          advances_type: ["normal"],
        },
        {
          no: 134,
          name: "水伊布",
          img_url: "./images/pokemons/134.png",
          advances_type: ["water"],
        },
        {
          no: 135,
          name: "雷伊布",
          img_url: "./images/pokemons/135.png",
          advances_type: ["electric"],
        },
        {
          no: 136,
          name: "火伊布",
          img_url: "./images/pokemons/136.png",
          advances_type: ["fire"],
        },
        {
          no: 137,
          name: "多邊獸",
          img_url: "./images/pokemons/137.png",
          advances_type: ["normal"],
        },
        {
          no: 138,
          name: "菊石獸",
          img_url: "./images/pokemons/138.png",
          advances_type: ["rock", "water"],
        },
        {
          no: 139,
          name: "多刺菊石獸",
          img_url: "./images/pokemons/139.png",
          advances_type: ["rock", "water"],
        },
        {
          no: 140,
          name: "化石盔",
          img_url: "./images/pokemons/140.png",
          advances_type: ["rock", "water"],
        },
        {
          no: 141,
          name: "鐮刀盔",
          img_url: "./images/pokemons/141.png",
          advances_type: ["rock", "water"],
        },
        {
          no: 142,
          name: "化石翼龍",
          img_url: "./images/pokemons/142.png",
          advances_type: ["rock", "flying"],
        },
        {
          no: 143,
          name: "卡比獸",
          img_url: "./images/pokemons/143.png",
          advances_type: ["normal"],
        },
        {
          no: 144,
          name: "極凍鳥",
          img_url: "./images/pokemons/144.png",
          advances_type: ["ice", "flying"],
        },
        {
          no: 145,
          name: "閃電鳥",
          img_url: "./images/pokemons/145.png",
          advances_type: ["electric", "flying"],
        },
        {
          no: 146,
          name: "火焰鳥",
          img_url: "./images/pokemons/146.png",
          advances_type: ["fire", "flying"],
        },
        {
          no: 147,
          name: "迷你龍",
          img_url: "./images/pokemons/147.png",
          advances_type: ["dragon", "flying"],
        },
        {
          no: 148,
          name: "哈克龍",
          img_url: "./images/pokemons/148.png",
          advances_type: ["dragon", "flying"],
        },
        {
          no: 149,
          name: "快龍",
          img_url: "./images/pokemons/149.png",
          advances_type: ["dragon", "flying"],
        },
        {
          no: 150,
          name: "超夢",
          img_url: "./images/pokemons/150.png",
          advances_type: ["psychic"],
        },
        {
          no: 151,
          name: "夢幻",
          img_url: "./images/pokemons/151.png",
          advances_type: ["psychic"],
        },
      ],
      pokemons_original: [],
      selected_pokemon: {
        no: 1,
        name: "妙蛙種子",
        img_url: "./images/pokemons/001.png",
        advances_type: ["grass", "poison"],
      },
      random_time: true,
      answer: false,
    };
  },
  components: {
    pokemonAdvanceType,
    pokemonCard,
  },
  mounted() {
    this.pokemons_original = JSON.parse(JSON.stringify(this.pokemons));
  },
  methods: {
    reset() {
      this.pokemons = this.pokemons_original;
    },
    filterAdvType(value) {
      this.key_word = null;
      this.reset();
      this.advance_select = value;
      this.pokemons = this.pokemons.filter((pokemon) => {
        return pokemon.advances_type.includes(value);
      });
    },
    search() {
      this.reset();
      this.pokemons = this.pokemons.filter((pokemon) => {
        if (this.key_word == "" || this.key_word == null) {
          return pokemon;
        } else if (!isNaN(this.key_word)) {
          return Number(this.key_word) == pokemon.no;
        } else {
          return pokemon.name.match(this.key_word);
        }
      });
    },
    randomItem() {
      return this.pokemons_original[
        Math.floor(Math.random() * this.pokemons_original.length)
      ];
    },
    created() {
      this.answer = false;
      this.random_time = true;
      let randomStart = setInterval(() => {
        this.selected_pokemon = this.randomItem();
      }, 500);
      setTimeout(() => {
        clearInterval(randomStart);
        this.random_time = false;
      }, 2000);
    },
    openAnwer() {
      this.random_time == false ? (this.answer = true) : (this.answer = false);
    },
  },
};
Vue.createApp(app).mount("#app");
Vue.config.devtools = true;
