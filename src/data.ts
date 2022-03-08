import { v4 as uuidv4 } from "uuid";
import { AboutSectionProps } from "./components/AboutSection/AboutSection";
import { CoverSectionProps } from "./components/CoverSection/CoverSection";
import { ExperienceSectionProps } from "./components/ExperienceSection/ExperienceSection";
import { ProjectSectionProps } from "./components/ProjectSection/ProjectSection";

export const cover: CoverSectionProps = {
  strings: ["Front-end Developer", "Joyce Chen"],
};

export const about: AboutSectionProps = {
  content: "Hello World\nJoyce",
  imageOne:
    "https://nationaltoday.com/wp-content/uploads/2020/07/Kitten-640x514.jpg",
  imageTwo:
    "https://media-exp1.licdn.com/dms/image/C4E1BAQEu7nDBxY2KXw/company-background_10000/0/1556122971779?e=2159024400&v=beta&t=-oR_B0gCjXcLUObiGLx7lbA5KwVibKY5xIRsgE_n7b4",
};

export const projects: ProjectSectionProps = {
  main: [
    {
      id: uuidv4(),
      year: "2022",
      title: "番茄鐘 Web APP",
      subtitle: "Side Project",
      intro:
        "番茄鐘 Web APP，可自行新增及編輯番茄鐘任務、檢視每日分析報告，並提供任務完成鈴聲提示功能。",
      cover: require("./images/react-pomodoro_2022.png"),
      skills: [
        "html",
        "typescript",
        "react",
        "styled",
        "rwd",
        "express",
        "mongodb",
        "mongoose",
      ],
      links: [
        {
          icon: "link",
          url: "https://ycjoyce.github.io/react-pomodoro/",
          label: "Demo",
        },
        {
          icon: "github",
          url: "https://github.com/ycjoyce/react-pomodoro",
          label: "Github",
        },
      ],
      more: [
        {
          id: uuidv4(),
          video: require("./images/react-pomodoro_2022-video-01.mov"),
          preview: require("./images/react-pomodoro_2022-image-01.png"),
        },
        {
          id: uuidv4(),
          video: require("./images/react-pomodoro_2022-video-02.mov"),
          preview: require("./images/react-pomodoro_2022-image-01.png"),
        },
      ],
    },
    {
      id: uuidv4(),
      year: "2022",
      title: "音樂播放元件",
      subtitle: "Side Project",
      intro:
        "音樂播放元件，播放每週前十名熱門歌曲，可操作切換曲目、設定定時、播放速度及模式調整（整張專輯單次播放、整張專輯隨機播放、整張專輯循環播放、單曲循環播放）。",
      cover: require("./images/audio-player_2022.png"),
      skills: ["html", "typescript", "react", "styled", "rwd"],
      links: [
        {
          icon: "link",
          url: "https://ycjoyce.github.io/audio-player/",
          label: "Demo",
        },
        {
          icon: "github",
          url: "https://github.com/ycjoyce/audio-player",
          label: "Github",
        },
      ],
      more: [
        {
          id: uuidv4(),
          video: require("./images/audio-player_2022-video-01.mp4"),
          preview: require("./images/audio-player_2022-image-01.png"),
        },
        {
          id: uuidv4(),
          video: require("./images/audio-player_2022-video-02.mov"),
          preview: require("./images/audio-player_2022-image-01.png"),
        },
      ],
    },
  ],
  sub: [
    {
      id: uuidv4(),
      year: "2021",
      title: "瀑布流網站",
      subtitle: "Side Project",
      intro:
        "仿作 Pinterest 的瀑布流圖片呈現，實作關鍵字搜尋、圖片 Lazy Load 及無限滾動。",
      cover: require("./images/image-flow_2022-image-01.jpg"),
      skills: ["html", "typescript", "react", "scss", "bootstrap", "rwd"],
      links: [
        {
          icon: "link",
          label: "Demo",
          url: "https://ycjoyce.github.io/Image-Flow/",
        },
      ],
      more: [
        {
          id: uuidv4(),
          video: require("./images/image-flow_2022-video-01.mov"),
          preview: require("./images/image-flow_2022-image-01.jpg"),
        },
        {
          id: uuidv4(),
          preview: require("./images/image-flow_2022-image-01.jpg"),
        },
        {
          id: uuidv4(),
          preview: require("./images/image-flow_2022-image-02.jpg"),
        },
        {
          id: uuidv4(),
          video: require("./images/image-flow_2022-video-02.mov"),
          preview: require("./images/image-flow_2022-image-01.jpg"),
        },
      ],
    },
    {
      id: uuidv4(),
      year: "2021",
      title: "付款流程網站",
      subtitle: "Side Project",
      intro: "模擬包含表單資料驗證、欄位跳轉等網路付款流程。",
      cover: require("./images/payment_2022-image-01.jpg"),
      skills: ["html", "react", "scss", "bootstrap", "rwd"],
      links: [
        {
          icon: "link",
          label: "Demo",
          url: "https://ycjoyce.github.io/payment/",
        },
      ],
      more: [
        {
          id: uuidv4(),
          video: require("./images/payment_2022-video-01.mov"),
          preview: require("./images/payment_2022-image-01.jpg"),
        },
        {
          id: uuidv4(),
          preview: require("./images/payment_2022-image-01.jpg"),
        },
        {
          id: uuidv4(),
          preview: require("./images/payment_2022-image-02.jpg"),
        },
        {
          id: uuidv4(),
          preview: require("./images/payment_2022-image-03.jpg"),
        },
        {
          id: uuidv4(),
          preview: require("./images/payment_2022-image-04.jpg"),
        },
        {
          id: uuidv4(),
          preview: require("./images/payment_2022-image-05.jpg"),
        },
        {
          id: uuidv4(),
          video: require("./images/payment_2022-video-02.mov"),
          preview: require("./images/payment_2022-image-01.jpg"),
        },
      ],
    },
    {
      id: uuidv4(),
      year: "2021",
      title: "口罩地圖網站",
      subtitle: "Side Project",
      intro:
        "串接口罩地圖 API，渲染藥局地圖標示，並實作關鍵字搜尋及推薦選單功能。",
      cover: require("./images/mask-map_2022-image-01.jpg"),
      skills: ["html", "javascript", "vue", "scss", "rwd"],
      links: [
        {
          icon: "link",
          label: "Demo",
          url: "https://ycjoyce.github.io/mask-map/",
        },
      ],
      more: [
        {
          id: uuidv4(),
          video: require("./images/mask-map_2022-video-01.mov"),
          preview: require("./images/mask-map_2022-image-01.jpg"),
        },
        {
          id: uuidv4(),
          preview: require("./images/mask-map_2022-image-01.jpg"),
        },
        {
          id: uuidv4(),
          preview: require("./images/mask-map_2022-image-02.jpg"),
        },
        {
          id: uuidv4(),
          preview: require("./images/mask-map_2022-image-03.jpg"),
        },
        {
          id: uuidv4(),
          preview: require("./images/mask-map_2022-image-04.jpg"),
        },
        {
          id: uuidv4(),
          preview: require("./images/mask-map_2022-image-05.jpg"),
        },
        {
          id: uuidv4(),
          video: require("./images/mask-map_2022-video-02.mov"),
          preview: require("./images/mask-map_2022-image-01.jpg"),
        },
      ],
    },
    {
      id: uuidv4(),
      year: "2021",
      title: "旅館預約網站",
      subtitle: "Side Project",
      intro: "模擬旅館預約流程，實作房型介紹、訂房日曆及價格計算。",
      cover: require("./images/house-hotel_2022-image-01.jpg"),
      skills: ["html", "javascript", "vue", "scss"],
      links: [
        {
          icon: "link",
          label: "Demo",
          url: "https://ycjoyce.github.io/house-hotel/",
        },
      ],
      more: [
        {
          id: uuidv4(),
          video: require("./images/house-hotel_2022-video-01.mov"),
          preview: require("./images/house-hotel_2022-image-01.jpg"),
        },
        {
          id: uuidv4(),
          preview: require("./images/house-hotel_2022-image-01.jpg"),
        },
        {
          id: uuidv4(),
          preview: require("./images/house-hotel_2022-image-02.jpg"),
        },
        {
          id: uuidv4(),
          preview: require("./images/house-hotel_2022-image-03.jpg"),
        },
        {
          id: uuidv4(),
          preview: require("./images/house-hotel_2022-image-04.jpg"),
        },
        {
          id: uuidv4(),
          preview: require("./images/house-hotel_2022-image-05.jpg"),
        },
        {
          id: uuidv4(),
          preview: require("./images/house-hotel_2022-image-06.jpg"),
        },
      ],
    },
    {
      id: uuidv4(),
      year: "2021",
      title: "影音平台檔案上傳介面",
      subtitle: "Work Project",
      intro:
        "仿製雲端硬碟的拖拉上傳檔案功能，並顯示上傳進度及呈現檔案相關資訊，也可以右鍵開啟選單操作。",
      cover: require("./images/imedia_2022-image-01.png"),
      skills: ["html", "typescript", "react", "scss", "bootstrap", "rwd"],
      more: [
        {
          id: uuidv4(),
          video: require("./images/imedia_2022-video-01.mov"),
          preview: require("./images/imedia_2022-image-01.png"),
        },
        {
          id: uuidv4(),
          video: require("./images/imedia_2022-video-02.mov"),
          preview: require("./images/imedia_2022-image-01.png"),
        },
      ],
    },
    {
      id: uuidv4(),
      year: "2021",
      title: "文化部文化藝術事業分離課稅網站",
      subtitle: "Work Project",
      intro: "前後台網站之網頁切版，內容以表單及資料表格呈現為主。",
      cover: require("./images/tax_2022-image-01.png"),
      skills: ["html", "javascript", "scss", "rwd"],
      more: [
        {
          id: uuidv4(),
          video: require("./images/tax_2022-video-01.mov"),
          preview: require("./images/tax_2022-image-01.png"),
        },
        {
          id: uuidv4(),
          video: require("./images/tax_2022-video-02.mov"),
          preview: require("./images/tax_2022-image-01.png"),
        },
      ],
    },
    {
      id: uuidv4(),
      year: "2021",
      title: "FunPark 圖書館電子書借閱網站",
      subtitle: "Work Project",
      intro:
        "網頁設計與前端網頁切版，內容以圖文呈現為主，並實作頁籤及按鍵點擊切換功能。",
      cover: require("./images/funpark_2022-image-01.png"),
      skills: ["html", "javascript", "scss", "rwd", "webpack"],
      more: [
        {
          id: uuidv4(),
          video: require("./images/funpark_2022-video-01.mp4"),
          preview: require("./images/funpark_2022-image-01.png"),
        },
        {
          id: uuidv4(),
          video: require("./images/funpark_2022-video-02.mp4"),
          preview: require("./images/funpark_2022-image-01.png"),
        },
      ],
    },
    {
      id: uuidv4(),
      year: "2020",
      title: "數位身分證白帽駭客活動網站",
      subtitle: "Work Project",
      intro:
        "網頁設計與前端網頁切版，串接後端資料，並實作報名、登入流程及案件編輯功能。",
      cover: require("./images/idcard_2022-image-01.png"),
      skills: ["html", "javascript", "vue", "scss", "rwd"],
      more: [
        {
          id: uuidv4(),
          video: require("./images/idcard_2022-video-01.mp4"),
          preview: require("./images/idcard_2022-image-01.png"),
        },
        {
          id: uuidv4(),
          video: require("./images/idcard_2022-video-02.mov"),
          preview: require("./images/idcard_2022-image-01.png"),
        },
      ],
    },
    {
      id: uuidv4(),
      year: "2020",
      title: "國家圖書館博碩士線上論文網站",
      subtitle: "Work Project",
      intro: "網頁設計與前端網頁切版，並實作色彩主題切換功能。",
      cover: require("./images/theses_2022-image-01.png"),
      skills: ["html", "javascript", "scss", "rwd", "gulp"],
      more: [
        {
          id: uuidv4(),
          video: require("./images/theses_2022-video-01.mp4"),
          preview: require("./images/theses_2022-image-01.png"),
        },
        {
          id: uuidv4(),
          video: require("./images/theses_2022-video-02.mp4"),
          preview: require("./images/theses_2022-image-01.png"),
        },
      ],
    },
    {
      id: uuidv4(),
      year: "2020",
      title: "NTSO 線上音樂廳網站",
      subtitle: "Work Project",
      intro: "前端網頁切版，內容以影音呈現為主。",
      cover: require("./images/ntso_2022-image-01.png"),
      skills: ["html", "javascript", "scss", "rwd", "gulp"],
      more: [
        {
          id: uuidv4(),
          video: require("./images/ntso_2022-video-01.mp4"),
          preview: require("./images/ntso_2022-image-01.png"),
        },
        {
          id: uuidv4(),
          video: require("./images/ntso_2022-video-02.mp4"),
          preview: require("./images/ntso_2022-image-01.png"),
        },
      ],
    },
    {
      id: uuidv4(),
      year: "2020",
      title: "i 聽聽官方網站",
      subtitle: "Work Project",
      intro:
        "網頁設計與前端網頁切版，內容以圖文呈現為主，並實作點擊專輯封面播放音檔功能。",
      cover: "",
      skills: ["html", "javascript", "vue", "scss", "rwd"],
      more: [],
    },
  ],
};

export const experience: ExperienceSectionProps = {
  items: [
    {
      time: "2020 - present",
      title: "智趣王數位科技股份有限公司",
      content:
        "獨立負責所有前端相關工作\n前端介面優化，增進使用者體驗及無障礙設計\n善用打包與語法檢查工具以提升開發效率及程式碼品質\n與後端工程師協作",
    },
    {
      time: "2019 - 2020",
      title: "資策會 Web App 前端工程課程",
      content:
        "學習網頁版面切版、程式撰寫及資料庫串接，以使用者體驗的思維設計網頁操作及互動流程\n獲選個人專題最佳網站，並擔任團體專題組長與 6 名組員協同開發",
    },
    {
      time: "2017 - 2019",
      title: "雄獅旅行社股份有限公司",
      content:
        "旅遊專案主題包裝之創意發想與設計\n量身訂做企業戶旅遊提案企畫書與提案簡報\n擅於溝通、規劃及整合，多次參與執行千人以上大規模專案",
    },
    {
      time: "2013 - 2017",
      title: "台灣藝術大學圖文傳播學系",
      content:
        "學習設計、印刷、攝影、出版，並活用於作品的製作\n多次設計作品得獎經歷\n擔任論文發表會總召，擅於統籌整合",
    },
  ],
};
