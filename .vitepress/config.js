import { defineConfig } from "vitepress";
import MermaidPlugin from "vitepress-plugin-mermaid"

export default defineConfig({
  title: "7086cmd's notes",
  markdown: {
    config: MermaidPlugin,
  },
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      {
        text: "道德与法治",
        link: "/道德与法治/",
      },
      {
        text: "历史与社会",
        items: [
          { text: "中国历史", link: "/中国历史/" },
          { text: "世界历史", link: "/世界历史/" },
          { text: "人文地理", link: "/人文地理/" },
        ],
      },
      {
        text: "整活资料",
        link: "/整活资料/"
      },
      {
        text: "英语",
        link: "/英语/",
      },
    ],
    sidebar: {
      "/道德与法治/": summary_ml(),
      "/中国历史/": summary_ch(),
      "/世界历史/": summary_hw(),
      "/人文地理/": summary_hg(),
      "/整活资料/": summary_res(),
      "/语文/": summary_chinese(),
      "/英语/": summary_english(),
    },
    algolia: {
      appId: "NJS8433FRA",
      apiKey: "7c80a203400079b048e02bdfe4f555bd",
      indexName: "zsd_summary",
    },
    localeLinks: {
      text: "简体中文",
      items: [],
    },
    footer: {
      message: "These content are followed CC-BY&NC&ND 4.0. So, it is not allowed to edit or use for business unless the author agrees.",
      copyright: "Copyright © 2020-2023 7086cmd",
    },
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/7086cmd/politics-history-summary",
      },
    ],
    editLink: {
      pattern:
        "https://github.com/7086cmd/politics-history-summary/edit/summary/:path",
      text: "编辑页面内容",
    },
    docFooter: {
      prev: "上一章",
      next: "下一章",
    },
    lastUpdatedText: "本文最后更改日期",
    outlineTitle: "本文目录",
  },
  lastUpdated: true,
  lang: "zh-CN",
  ignoreDeadLinks: true,
  cleanUrls: "without-subfolders",
});

function summary_hg() {
  return [
    {
      text: "第一单元 人在社会中生活",
      items: [
        {
          text: "第一课 我的家在哪里",
          link: "/人文地理/第一单元 人在社会中生活/第一课 我的家在哪里/",
        },
        {
          text: "第二课 乡村与城市",
          link: "/人文地理/第一单元 人在社会中生活/第二课 乡村与城市/",
        },
        {
          text: "综合探究一 从地图上获取信息",
          link: "/人文地理/第一单元 人在社会中生活/综合探究一 从地图上获取信息/",
        },
      ],
      collapsed: true,
      collapsible: true,
    },
    {
      text: "第二单元 人类共同生活的世界",
      items: [
        {
          text: "第一课 大洲和大洋",
          link: "/人文地理/第二单元 人类共同生活的世界/第一课 大洲和大洋/",
        },
        {
          text: "第二课 自然环境",
          link: "/人文地理/第二单元 人类共同生活的世界/第二课 自然环境/",
        },
        {
          text: "第三课 世界大家庭",
          link: "/人文地理/第二单元 人类共同生活的世界/第三课 世界大家庭/",
        },
        {
          text: "综合探究二 从地球仪上看世界",
          link: "/人文地理/第二单元 人类共同生活的世界/综合探究二 从地球仪上看世界/",
        },
      ],
      collapsed: true,
      collapsible: true,
    },
    {
      text: "第三单元 各具特色的区域生活",
      items: [
        {
          text: "第一课 家住平原",
          link: "/人文地理/第三单元 各具特色的区域生活/第一课 家住平原/",
        },
        {
          text: "第二课 与山为邻",
          link: "/人文地理/第三单元 各具特色的区域生活/第二课 与山为邻/",
        },
        {
          text: "第三课 傍水而居",
          link: "/人文地理/第三单元 各具特色的区域生活/第三课 傍水而居/",
        },
        {
          text: "第四课 草原人家",
          link: "/人文地理/第三单元 各具特色的区域生活/第四课 草原人家/",
        },
        {
          text: "第五课 干旱的宝地",
          link: "/人文地理/第三单元 各具特色的区域生活/第五课 干旱的宝地/",
        },
        {
          text: "第六课 不同类型的城市",
          link: "/人文地理/第三单元 各具特色的区域生活/第六课 不同类型的城市/",
        },
        {
          text: "综合探究三 如何认识区域——以南非为例",
          link: "/人文地理/第三单元 各具特色的区域生活/综合探究三 如何认识区域——以南非为例/",
        },
      ],
      collapsed: true,
      collapsible: true,
    },
    {
      text: "第四单元 中国各族人民的家园",
      items: [
        {
          text: "第一课 国土与人民",
          link: "/人文地理/第四单元 中国各族人民的家园/第一课 国土与人民/",
        },
        {
          text: "第二课 山川秀美",
          link: "/人文地理/第四单元 中国各族人民的家园/第二课 山川秀美/",
        },
        {
          text: "第三课 地形差异显著",
          link: "/人文地理/第四单元 中国各族人民的家园/第三课 地形差异显著/",
        },
        {
          text: "综合探究四 走进台湾",
          link: "/人文地理/第四单元 中国各族人民的家园/综合探究四 走进台湾/",
        },
      ],
      collapsed: true,
      collapsible: true,
    },
    {
      text: "第五单元 一方水土养一方人",
      items: [
        {
          text: "第一课 北方地区",
          link: "/人文地理/第五单元 一方水土养一方人/第一课 北方地区/",
        },
        {
          text: "第二课 南方地区",
          link: "/人文地理/第五单元 一方水土养一方人/第二课 南方地区/",
        },
        {
          text: "第三课 西北地区",
          link: "/人文地理/第五单元 一方水土养一方人/第三课 西北地区/",
        },
        {
          text: "第四课 青藏地区",
          link: "/人文地理/第五单元 一方水土养一方人/第四课 青藏地区/",
        },
        {
          text: "综合探究五 如何开展社会调查——以调查家乡为例",
          link: "/人文地理/第五单元 一方水土养一方人/综合探究五 如何开展社会调查——以调查家乡为例/",
        },
      ],
      collapsed: true,
      collapsible: true,
    },
    {
      text: "第六单元 共同面对的全球性问题",
      items: [
        {
          text: "第一课 不断变化的人口问题",
          link: "/人文地理/第六单元 共同面对的全球性问题/第一课 不断变化的人口问题/",
        },
        {
          text: "第二课 日益严峻的资源问题",
          link: "/人文地理/第六单元 共同面对的全球性问题/第二课 日益严峻的资源问题/",
        },
        {
          text: "第三课 共同关注的环境问题",
          link: "/人文地理/第六单元 共同面对的全球性问题/第三课 共同关注的环境问题/",
        },
        {
          text: "第四课 发展的选择",
          link: "/人文地理/第六单元 共同面对的全球性问题/第四课 发展的选择/",
        },
        {
          text: "综合探究六 区域的变化",
          link: "/人文地理/第六单元 共同面对的全球性问题/综合探究六 区域的变化/",
        },
      ],
      collapsed: true,
      collapsible: true,
    },
  ];
}

function summary_ml() {
  return [
    {
      text: "七年级上册",
      items: [
        {
          text: "第一单元 成长的节拍",
          link: "/道德与法治/七年级上册/第一单元 成长的节拍/",
        },
        {
          text: "第二单元 友谊的天空",
          link: "/道德与法治/七年级上册/第二单元 友谊的天空/",
        },
        {
          text: "第三单元 师长情谊",
          link: "/道德与法治/七年级上册/第三单元 师长情谊/",
        },
        {
          text: "第四单元 生命的思考",
          link: "/道德与法治/七年级上册/第四单元 生命的思考/",
        },
      ],
      collapsed: true,
      collapsible: true,
    },
    {
      text: "七年级下册",
      items: [
        {
          text: "第一单元 青春时光",
          link: "/道德与法治/七年级下册/第一单元 青春时光/",
        },
        {
          text: "第二单元 做情感情绪的主人",
          link: "/道德与法治/七年级下册/第二单元 做情感情绪的主人/",
        },
        {
          text: "第三单元 在集体中成长",
          link: "/道德与法治/七年级下册/第三单元 在集体中成长/",
        },
        {
          text: "第四单元 走进法治天地",
          link: "/道德与法治/七年级下册/第四单元 走进法治天地/",
        },
      ],
      collapsed: true,
      collapsible: true,
    },
    {
      text: "八年级上册",
      items: [
        {
          text: "第一单元 走进社会生活",
          link: "/道德与法治/八年级上册/第一单元 走进社会生活/",
        },
        {
          text: "第二单元 遵守社会规则",
          link: "/道德与法治/八年级上册/第二单元 遵守社会规则/",
        },
        {
          text: "第三单元 勇担社会责任",
          link: "/道德与法治/八年级上册/第三单元 勇担社会责任/",
        },
        {
          text: "第四单元 维护国家利益",
          link: "/道德与法治/八年级上册/第四单元 维护国家利益/",
        },
        {
          text: "《习近平新时代中国特色社会主义思想学生读本》",
          link: "/道德与法治/八年级上册/《习近平新时代中国特色社会主义思想学生读本》/",
        }
      ],
      collapsed: true,
      collapsible: true,
    },
    {
      text: "八年级下册",
      items: [
        {
          text: "第一单元 坚持宪法至上",
          link: "/道德与法治/八年级下册/第一单元 坚持宪法至上/",
        },
        {
          text: "第二单元 理解权利义务",
          link: "/道德与法治/八年级下册/第二单元 理解权利义务/",
        },
        {
          text: "第三单元 人民当家作主",
          link: "/道德与法治/八年级下册/第三单元 人民当家作主/",
        },
        {
          text: "第四单元 崇尚法治精神",
          link: "/道德与法治/八年级下册/第四单元 崇尚法治精神/",
        },
      ],
      collapsed: true,
      collapsible: true,
    },
    {
      text: "九年级上册",
      items: [
        {
          text: "第一单元 富强与创新",
          link: "/道德与法治/九年级上册/第一单元 富强与创新/",
        },
        {
          text: "第二单元 民主与法治",
          link: "/道德与法治/九年级上册/第二单元 民主与法治/",
        },
        {
          text: "第三单元 文明与家园",
          link: "/道德与法治/九年级上册/第三单元 文明与家园/",
        },
        {
          text: "第四单元 和谐与梦想",
          link: "/道德与法治/九年级上册/第四单元 和谐与梦想/",
        },
        {
          text: "默写与整理",
          link: "/道德与法治/九年级上册/默写与整理/",
        }
      ],
      collapsed: true,
      collapsible: true,
    },
    {
      text: "九年级下册",
      items: [
        {
          text: "第一单元 我们共同的世界",
          link: "/道德与法治/九年级下册/第一单元 我们共同的世界/",
        },
        {
          text: "第二单元 世界舞台上的中国",
          link: "/道德与法治/九年级下册/第二单元 世界舞台上的中国/",
        },
        {
          text: "第三单元 走向未来的少年",
          link: "/道德与法治/九年级下册/第三单元 走向未来的少年/",
        },
      ],
      collapsed: true,
      collapsible: true,
    },
  ];
}

function summary_ch() {
  return [
    {
      text: "七年级上册",
      items: [
        {
          text: "第一单元 史前时期：中国境内早期人类与文明的起源",
          link: "/中国历史/七年级上册/第一单元 史前时期：中国境内早期人类与文明的起源/",
        },
        {
          text: "第二单元 夏商周时期：早期国家与社会变革",
          link: "/中国历史/七年级上册/第二单元 夏商周时期：早期国家与社会变革/",
        },
        {
          text: "第三单元 秦汉时期：统一多民族国家的建立和巩固",
          link: "/中国历史/七年级上册/第三单元 秦汉时期：统一多民族国家的建立和巩固/",
        },
        {
          text: "第四单元 三国两晋南北朝时期：政权分立与民族交融",
          link: "/中国历史/七年级上册/第四单元 三国两晋南北朝时期：政权分立与民族交融/",
        },
      ],
      collapsed: true,
      collapsible: true,
    },
    {
      text: "七年级下册",
      items: [
        {
          text: "第一单元 隋唐时期：繁荣与开放的时代",
          link: "/中国历史/七年级下册/第一单元 隋唐时期：繁荣与开放的时代/",
        },
        {
          text: "第二单元 辽宋夏金元时期：民族关系发展和社会变化",
          link: "/中国历史/七年级下册/第二单元 辽宋夏金元时期：民族关系发展和社会变化/",
        },
        {
          text: "第三单元 明清时期：统一多民族国家的巩固与发展",
          link: "/中国历史/七年级下册/第三单元 明清时期：统一多民族国家的巩固与发展/",
        },
      ],
      collapsed: true,
      collapsible: true,
    },
    {
      text: "八年级上册",
      items: [
        {
          text: "第一单元 中国开始沦为半殖民地半封建社会",
          link: "/中国历史/八年级上册/第一单元 中国开始沦为半殖民地半封建社会/",
        },
        {
          text: "第二单元 近代化的早期探索与民族危机的加剧",
          link: "/中国历史/八年级上册/第二单元 近代化的早期探索与民族危机的加剧/",
        },
        {
          text: "第三单元 资产阶级民主革命与中华民国的建立",
          link: "/中国历史/八年级上册/第三单元 资产阶级民主革命与中华民国的建立/",
        },
        {
          text: "第四单元 新民主主义革命的开始",
          link: "/中国历史/八年级上册/第四单元 新民主主义革命的开始/",
        },
        {
          text: "第五单元 从国共合作到国共对立",
          link: "/中国历史/八年级上册/第五单元 从国共合作到国共对立/",
        },
        {
          text: "第六单元 中华民族的抗日战争",
          link: "/中国历史/八年级上册/第六单元 中华民族的抗日战争/",
        },
        {
          text: "第七单元 人民解放战争",
          link: "/中国历史/八年级上册/第七单元 人民解放战争/",
        },
        {
          text: "第八单元 近代经济、社会生活与教育文化事业的发展",
          link: "/中国历史/八年级上册/第八单元 近代经济、社会生活与教育文化事业的发展/",
        },
      ],
      collapsed: true,
      collapsible: true,
    },
    {
      text: "八年级下册",
      items: [
        {
          text: "第一单元 中华人民共和国的成立和巩固",
          link: "/中国历史/八年级下册/第一单元 中华人民共和国的成立和巩固/",
        },
        {
          text: "第二单元 社会主义制度的建立与社会主义建设的探索",
          link: "/中国历史/八年级下册/第二单元 社会主义制度的建立与社会主义建设的探索/",
        },
        {
          text: "第三单元 中国特色社会主义道路",
          link: "/中国历史/八年级下册/第三单元 中国特色社会主义道路/",
        },
        {
          text: "第四单元 民族团结与祖国统一",
          link: "/中国历史/八年级下册/第四单元 民族团结与祖国统一/",
        },
        {
          text: "第五单元 国防建设与外交成就",
          link: "/中国历史/八年级下册/第五单元 国防建设与外交成就/",
        },
        {
          text: "第六单元 科技文化与社会生活",
          link: "/中国历史/八年级下册/第六单元 科技文化与社会生活/",
        },
      ],
      collapsed: true,
      collapsible: true,
    },
  ];
}

function summary_hw() {
  return [
    {
      text: "九年级上册",
      items: [
        {
          text: "第一单元 古代亚非文明",
          link: "/世界历史/九年级上册/第一单元 古代亚非文明/",
        },
        {
          text: "第二单元 古代欧洲文明",
          link: "/世界历史/九年级上册/第二单元 古代欧洲文明/",
        },
        {
          text: "第三单元 封建时代的欧洲",
          link: "/世界历史/九年级上册/第三单元 封建时代的欧洲/",
        },
        {
          text: "第四单元 封建时代的亚洲国家",
          link: "/世界历史/九年级上册/第四单元 封建时代的亚洲国家/",
        },
        {
          text: "第五单元 走向近代",
          link: "/世界历史/九年级上册/第五单元 走向近代/",
        },
        {
          text: "第六单元 资本主义制度的初步确立",
          link: "/世界历史/九年级上册/第六单元 资本主义制度的初步确立/",
        },
        {
          text: "第七单元 工业革命和共产主义运动的兴起",
          link: "/世界历史/九年级上册/第七单元 工业革命和共产主义运动的兴起/",
        },
      ],
      collapsed: true,
      collapsible: true,
    },
    {
      text: "九年级下册",
      items: [
        {
          text: "第一单元 殖民地人民的反抗与资本主义制度的扩展",
          link: "/世界历史/九年级下册/第一单元 殖民地人民的反抗与资本主义制度的扩展/",
        },
        {
          text: "第二单元 第二次工业革命和近代科学文化",
          link: "/世界历史/九年级下册/第二单元 第二次工业革命和近代科学文化/",
        },
        {
          text: "第三单元 第一次世界大战和战后初期的世界",
          link: "/世界历史/九年级下册/第三单元 第一次世界大战和战后初期的世界/",
        },
        {
          text: "第四单元 经济大危机和第二次世界大战",
          link: "/世界历史/九年级下册/第四单元 经济大危机和第二次世界大战/",
        },
        {
          text: "第五单元 二战后的世界变化",
          link: "/世界历史/九年级下册/第五单元 二战后的世界变化/",
        },
        {
          text: "第六单元 走向和平发展的世界",
          link: "/世界历史/九年级下册/第六单元 走向和平发展的世界/",
        },
      ],
      collapsed: true,
      collapsible: true,
    },
  ];
}

function summary_res() {
  return [
    {
      text: "道德与法治",
      items: [
        {
          text: "九上1-3课默写",
          link: "/整活资料/道德与法治/九上1-3课默写",
        },
        {
          text: "PRED 问题",
          link: "/整活资料/道德与法治/PRED问题",
        }
      ],
    },
    {
      text: "历史与社会",
      items: [
        {
          text: "七上历史期末重点题目",
          link: "/整活资料/历史与社会/七上历史期末重点题目",
        },
        {
          text: "八上一、二单元默写",
          link: "/整活资料/历史与社会/八上一、二单元默写",
        },
        {
          text: "八上期中历史押题",
          link: "/整活资料/历史与社会/八上期中历史押题",
        },
        {
          text: "人文地理第四单元默写提纲",
          link: "/整活资料/历史与社会/人文地理第四单元默写提纲",
        },
        {
          text: "八上中国历史终极默写",
          link: "/整活资料/历史与社会/八上中国历史终极默写",
        },
        {
          text: "八下历史与社会复习提纲",
          link: "/整活资料/历史与社会/八下历史与社会复习提纲",
        },
      ],
    }
  ]
}

function summary_chinese() {
  return [
    {
      text: "名著阅读",
      items: [
        {
          text: "《艾青诗选》",
          link: "/语文/名著阅读/艾青诗选/",
        }
      ]
    }
  ]
}

function summary_english() {
  return [
    {
      text: "九年级全一册",
      items: [
        {
          text: "Unit 1 How can we become good learners?",
          link: "/英语/九年级全一册/Unit 1 How can we become good learners/",
        },
        {
          text: "Unit 2 I think that mooncakes are delicious!",
          link: "/英语/九年级全一册/Unit 2 I think that mooncakes are delicious/",
        },
        {
          text: "Unit 3 Could you please tell me where are the restrooms are?",
          link: "/英语/九年级全一册/Unit 3 Could you please tell me where are the restrooms are/",
        },
        {
          text: "Unit 4 I used to be afraid of the dark.",
          link: "/英语/九年级全一册/Unit 4 I used to be afraid of the dark/",
        },
        {
          text: "Unit 5 What are the shirts made of?",
          link: "/英语/九年级全一册/Unit 5 What are the shirts made of/",
        }
      ],
      collapsed: true,
      collapsible: true,
    }
  ]
}
