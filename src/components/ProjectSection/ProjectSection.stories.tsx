import { Story } from "@storybook/react/types-6-0";
import { v4 as uuidv4 } from "uuid";
import ProjectSection, { ProjectSectionProps } from "./ProjectSection";

export default {
  title: "Sections/ProjectSection",
  component: ProjectSection,
};

const Template: Story<ProjectSectionProps> = (args) => (
  <ProjectSection {...args} />
);

export const Default = Template.bind({});
Default.args = {
  main: [
    {
      id: uuidv4(),
      year: "2022",
      title: "First",
      intro:
        "美國前國務卿蓬佩奧今天上午在臉書發文指出，他認為美國應該立刻在外交上承認中華民國（台灣）是一個主權獨立且享有自由的國家。蓬佩奧今天在台北發表專題演說時則表示，美國應外交承認中華民國台灣是自由主權國家，這無涉台灣未來的獨立，而是承認明確且早已存在的事實。",
      cover: "https://picsum.photos/300/200",
      skills: ["css", "scss", "nodejs", "javascript"],
      onClick() {},
    },
    {
      id: uuidv4(),
      year: "2022",
      title: "First",
      intro:
        "美國前國務卿蓬佩奧今天上午在臉書發文指出，他認為美國應該立刻在外交上承認中華民國（台灣）是一個主權獨立且享有自由的國家。蓬佩奧今天在台北發表專題演說時則表示，美國應外交承認中華民國台灣是自由主權國家，這無涉台灣未來的獨立，而是承認明確且早已存在的事實。",
      cover: "https://picsum.photos/300/200",
      skills: ["css", "scss", "nodejs", "javascript"],
      onClick() {},
    },
    {
      id: uuidv4(),
      year: "2022",
      title: "First",
      intro:
        "美國前國務卿蓬佩奧今天上午在臉書發文指出，他認為美國應該立刻在外交上承認中華民國（台灣）是一個主權獨立且享有自由的國家。蓬佩奧今天在台北發表專題演說時則表示，美國應外交承認中華民國台灣是自由主權國家，這無涉台灣未來的獨立，而是承認明確且早已存在的事實。",
      cover: "https://picsum.photos/300/200",
      skills: ["css", "scss", "nodejs", "javascript"],
      onClick() {},
    },
  ],
  sub: [
    {
      id: uuidv4(),
      year: "2022",
      title: "First",
      intro:
        "美國前國務卿蓬佩奧今天上午在臉書發文指出，他認為美國應該立刻在外交上承認中華民國（台灣）是一個主權獨立且享有自由的國家。蓬佩奧今天在台北發表專題演說時則表示，美國應外交承認中華民國台灣是自由主權國家，這無涉台灣未來的獨立，而是承認明確且早已存在的事實。",
      cover: "https://picsum.photos/300/200",
      skills: ["css", "scss", "nodejs", "javascript"],
      more: [
        {
          id: uuidv4(),
          video:
            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
          preview: "https://picsum.photos/300/200",
        },
        {
          id: uuidv4(),
          video:
            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
          preview: "https://picsum.photos/300/200",
        },
        {
          id: uuidv4(),
          video:
            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
          preview: "https://picsum.photos/300/200",
        },
        {
          id: uuidv4(),
          preview: "https://picsum.photos/300/200",
        },
      ],
      onClick() {},
    },
    {
      id: uuidv4(),
      year: "2012",
      title: "Second",
      intro:
        "美國前國務卿蓬佩奧今天上午在臉書發文指出，他認為美國應該立刻在外交上承認中華民國（台灣）是一個主權獨立且享有自由的國家。蓬佩奧今天在台北發表專題演說時則表示，美國應外交承認中華民國台灣是自由主權國家，這無涉台灣未來的獨立，而是承認明確且早已存在的事實。",
      cover: "https://picsum.photos/300/200",
      skills: ["css", "scss", "nodejs", "javascript"],
      more: [
        {
          id: uuidv4(),
          video:
            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
          preview: "https://picsum.photos/300/200",
        },
        {
          id: uuidv4(),
          video:
            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
          preview: "https://picsum.photos/300/200",
        },
        {
          id: uuidv4(),
          video:
            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
          preview: "https://picsum.photos/300/200",
        },
        {
          id: uuidv4(),
          preview: "https://picsum.photos/300/200",
        },
      ],
      onClick() {},
    },
    {
      id: uuidv4(),
      year: "2032",
      title: "Third",
      intro:
        "美國前國務卿蓬佩奧今天上午在臉書發文指出，他認為美國應該立刻在外交上承認中華民國（台灣）是一個主權獨立且享有自由的國家。蓬佩奧今天在台北發表專題演說時則表示，美國應外交承認中華民國台灣是自由主權國家，這無涉台灣未來的獨立，而是承認明確且早已存在的事實。",
      cover: "https://picsum.photos/300/200",
      skills: ["css", "scss", "nodejs", "javascript"],
      more: [
        {
          id: uuidv4(),
          video:
            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
          preview: "https://picsum.photos/300/200",
        },
        {
          id: uuidv4(),
          video:
            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
          preview: "https://picsum.photos/300/200",
        },
        {
          id: uuidv4(),
          video:
            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
          preview: "https://picsum.photos/300/200",
        },
        {
          id: uuidv4(),
          preview: "https://picsum.photos/300/200",
        },
      ],
      onClick() {},
    },
    {
      id: uuidv4(),
      year: "2020",
      title: "Fourth",
      intro:
        "美國前國務卿蓬佩奧今天上午在臉書發文指出，他認為美國應該立刻在外交上承認中華民國（台灣）是一個主權獨立且享有自由的國家。蓬佩奧今天在台北發表專題演說時則表示，美國應外交承認中華民國台灣是自由主權國家，這無涉台灣未來的獨立，而是承認明確且早已存在的事實。",
      cover: "https://picsum.photos/300/200",
      skills: ["css", "scss", "nodejs", "javascript"],
      more: [
        {
          id: uuidv4(),
          video:
            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
          preview: "https://picsum.photos/300/200",
        },
        {
          id: uuidv4(),
          video:
            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
          preview: "https://picsum.photos/300/200",
        },
        {
          id: uuidv4(),
          video:
            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
          preview: "https://picsum.photos/300/200",
        },
        {
          id: uuidv4(),
          preview: "https://picsum.photos/300/200",
        },
      ],
      onClick() {},
    },
    {
      id: uuidv4(),
      year: "2019",
      title: "Fifth",
      intro:
        "美國前國務卿蓬佩奧今天上午在臉書發文指出，他認為美國應該立刻在外交上承認中華民國（台灣）是一個主權獨立且享有自由的國家。蓬佩奧今天在台北發表專題演說時則表示，美國應外交承認中華民國台灣是自由主權國家，這無涉台灣未來的獨立，而是承認明確且早已存在的事實。",
      cover: "https://picsum.photos/300/200",
      skills: ["css", "scss", "nodejs", "javascript"],
      more: [
        {
          id: uuidv4(),
          video:
            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
          preview: "https://picsum.photos/300/200",
        },
        {
          id: uuidv4(),
          video:
            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
          preview: "https://picsum.photos/300/200",
        },
        {
          id: uuidv4(),
          video:
            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
          preview: "https://picsum.photos/300/200",
        },
        {
          id: uuidv4(),
          preview: "https://picsum.photos/300/200",
        },
      ],
      onClick() {},
    },
    {
      id: uuidv4(),
      year: "2022",
      title: "Sixth",
      intro:
        "美國前國務卿蓬佩奧今天上午在臉書發文指出，他認為美國應該立刻在外交上承認中華民國（台灣）是一個主權獨立且享有自由的國家。蓬佩奧今天在台北發表專題演說時則表示，美國應外交承認中華民國台灣是自由主權國家，這無涉台灣未來的獨立，而是承認明確且早已存在的事實。",
      cover: "https://picsum.photos/300/200",
      skills: ["css", "scss", "nodejs", "javascript"],
      more: [
        {
          id: uuidv4(),
          video:
            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
          preview: "https://picsum.photos/300/200",
        },
        {
          id: uuidv4(),
          video:
            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
          preview: "https://picsum.photos/300/200",
        },
        {
          id: uuidv4(),
          video:
            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
          preview: "https://picsum.photos/300/200",
        },
        {
          id: uuidv4(),
          preview: "https://picsum.photos/300/200",
        },
      ],
      onClick() {},
    },
  ],
};
