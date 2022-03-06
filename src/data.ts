import { v4 as uuidv4 } from "uuid";
import { ProjectProps } from "./components/Project/Project";

export const projects: { main: ProjectProps[]; sub: ProjectProps[] } = {
  main: [
    {
      id: uuidv4(),
      year: "2022",
      title: "番茄鐘 Web APP",
      intro:
        "番茄鐘 Web APP，可自行新增及編輯番茄鐘任務、檢視每日分析報告，並提供任務完成鈴聲提示功能。",
      cover: require("./images/react-pomodoro_2022.png"),
      skills: [
        "html",
        "typescript",
        "react",
        "styled",
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
    },
    {
      id: uuidv4(),
      year: "2022",
      title: "音樂播放元件",
      intro: "",
      cover: "",
      skills: ["html", "typescript", "react", "styled"],
      links: [
        { icon: "link", url: "", label: "Demo" },
        {
          icon: "github",
          url: "https://github.com/ycjoyce/audio-player",
          label: "Github",
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
      intro: "",
      cover: require("./images/image-flow_2022-image-01.jpg"),
      skills: ["html", "typescript", "react", "scss", "bootstrap", "rwd"],
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
      intro: "",
      cover: require("./images/payment_2022-image-01.jpg"),
      skills: ["html", "react", "scss", "bootstrap", "rwd"],
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
      intro: "",
      cover: require("./images/mask-map_2022-image-01.jpg"),
      skills: ["html", "javascript", "vue", "scss"],
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
      intro: "",
      cover: require("./images/house-hotel_2022-image-01.jpg"),
      skills: ["html", "javascript", "vue", "scss"],
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
      title: "FunPark 圖書館電子書借閱網站",
      intro: "",
      cover: "",
      skills: ["html", "javascript", "scss", "webpack"],
      more: [],
    },
    {
      id: uuidv4(),
      year: "2020",
      title: "NTSO 線上音樂廳網站",
      intro: "",
      cover: "",
      skills: ["html", "javascript", "scss", "gulp"],
      more: [],
    },
    {
      id: uuidv4(),
      year: "2020",
      title: "i 聽聽官方網站",
      intro: "",
      cover: "",
      skills: ["html", "javascript", "vue", "scss", "bootstrap", "rwd"],
      more: [],
    },
  ],
};
