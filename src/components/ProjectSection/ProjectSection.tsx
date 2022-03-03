import React, { FC } from "react";
import ProjectList from "../ProjectList/ProjectList";
import Project from "../Project/Project";
import Title from "../Title/Title";

export interface ProjectSectionProps {}

const ProjectSection: FC<ProjectSectionProps> = () => {
  return (
    <section>
      <div>
        <Title primary>Projects</Title>
        <ProjectList
          options={{
            classes: {
              arrows: "splide__arrows primary-arrows",
            },
            type: "loop",
            autoplay: true,
            pauseOnHover: true,
            pagination: true,
          }}
        >
          {[
            <Project
              primary
              id="project1"
              year="2022"
              title="Project1"
              intro="這是第一個案件"
              cover={require("../../images/mac.png")}
              skills={["css", "express", "mongodb"]}
            />,
            <Project
              primary
              id="project2"
              year="2022"
              title="Project2"
              intro="這是第二個案件"
              cover={require("../../images/mac.png")}
              skills={["css", "express", "mongodb"]}
            />,
            <Project
              primary
              id="project3"
              year="2022"
              title="Project3"
              intro="這是第三個案件"
              cover={require("../../images/mac.png")}
              skills={["css", "express", "mongodb"]}
            />,
            <Project
              primary
              id="project4"
              year="2022"
              title="Project4"
              intro="這是第四個案件"
              cover={require("../../images/mac.png")}
              skills={["css", "express", "mongodb"]}
            />,
            <Project
              primary
              id="project5"
              year="2022"
              title="Project5"
              intro="這是第五個案件"
              cover={require("../../images/mac.png")}
              skills={["css", "express", "mongodb"]}
            />,
          ]}
        </ProjectList>
      </div>

      <div>
        <Title level={2}>More Projects</Title>
        <ProjectList
          progress
          options={{
            classes: {
              arrows: "splide__arrows secondary-arrows",
            },
            perPage: 3,
            perMove: 1,
            rewind: true,
            rewindSpeed: 1000,
            gap: "2rem",
            autoplay: true,
            pauseOnHover: true,
            pagination: false,
          }}
        >
          {[
            <Project
              id="project1"
              year="2018"
              title="Project1"
              intro="這是第一個案件"
              cover="https://media-exp1.licdn.com/dms/image/C4E1BAQEu7nDBxY2KXw/company-background_10000/0/1556122971779?e=2159024400&v=beta&t=-oR_B0gCjXcLUObiGLx7lbA5KwVibKY5xIRsgE_n7b4"
              skills={["css", "express", "mongodb"]}
            />,
            <Project
              id="project2"
              year="2022"
              title="Project2"
              intro="這是第二個案件"
              cover="https://www.petage.com/wp-content/uploads/2019/09/Depositphotos_74974941_xl-2015-e1569443284386.jpg"
              skills={["css", "express", "mongodb"]}
            />,
            <Project
              id="project3"
              year="2022"
              title="Project3"
              intro="這是第三個案件"
              cover="https://www.vets4pets.com/siteassets/species/cat/kitten/cat-and-kitten-snuggling.jpg?width=1040"
              skills={["css", "express", "mongodb"]}
            />,
            <Project
              id="project4"
              year="2019"
              title="Project4"
              intro="這是第四個案件"
              cover="https://valevets.com/wp-content/uploads/2014/08/kitten1.jpg"
              skills={["css", "express", "mongodb"]}
            />,
            <Project
              id="project5"
              year="2019"
              title="Project5"
              intro="這是第五個案件"
              cover="https://media.istockphoto.com/photos/gray-british-cat-kitten-picture-id1086004080?k=20&m=1086004080&s=612x612&w=0&h=tvQKNjBGIsfCmUPR8YVJYfjLrTZ9JINbisKRjMj87IY="
              skills={["css", "express", "mongodb"]}
            />,
          ]}
        </ProjectList>
      </div>
    </section>
  );
};

export default ProjectSection;
