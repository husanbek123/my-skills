import "./App.css";

import { Impress, Step } from "react-impressjs";
import StepCard from "./components/StepCard";
import parse from "html-react-parser";

const Skills = [
  {
    title: "Xush kelibsiz! 🎉🎊",
    description:
      "Bu saytda mening skill larim tasvirlangan. <br /> Ko'rish uchun <kbd>probel</kbd> yoki ➡⬅⬆⬇ yo'nalish tugmalaridan foydalaning! <br/> (Kompyuterdan kirish tafsiya etiladi!)",
    author: "Husan Sobirboyev",
    data: {
      z: "0",
      rotate: "-90",
    },
  },
  {
    title: "Html",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, inventore est. Quibusdam suscipit reprehenderit minus voluptate. Minus amet harum, in labore odio corporis minima placeat quia sequi, nesciunt laborum quo.",
    img: "html.png",

    data: {
      x: 500,
      y: 1000,
      z: -1000,
    },
    color: "#E44D26",
  },
  {
    title: "CSS",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, inventore est. Quibusdam suscipit reprehenderit minus voluptate. Minus amet harum, in labore odio corporis minima placeat quia sequi, nesciunt laborum quo.",
    img: "css.png",

    data: {
      x: 0,
      y: 1500,
      z: -1000,
    },
    color: "#53C1DE",
  },
  {
    title: "JavaScript",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, inventore est. Quibusdam suscipit reprehenderit minus voluptate. Minus amet harum, in labore odio corporis minima placeat quia sequi, nesciunt laborum quo.",
    img: "js.png",
    data: {
      x: 1000,
      y: 1500,
      z: -1000,
    },
    color: "#53C1DE",
  },
  {
    title: "Sass",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, inventore est. Quibusdam suscipit reprehenderit minus voluptate. Minus amet harum, in labore odio corporis minima placeat quia sequi, nesciunt laborum quo.",
    img: "sass.png",
    data: {
      x: 500,
      y: 2000,
      z: -1000,
    },
    color: "#53C1DE",
  },
  {
    title: "React JS",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, inventore est. Quibusdam suscipit reprehenderit minus voluptate. Minus amet harum, in labore odio corporis minima placeat quia sequi, nesciunt laborum quo.",
    img: "react.png",
    data: {
      x: 1500,
      y: 1500,
      rotateY: 85,
    },
    color: "#53C1DE",
  },
  {
    title: "Zustand",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, inventore est. Quibusdam suscipit reprehenderit minus voluptate. Minus amet harum, in labore odio corporis minima placeat quia sequi, nesciunt laborum quo.",
    img: "Zustand",
    data: {
      x: 1500,
      y: 2000,
      z: 500,
      rotateY: 85,
    },
    color: "#53C1DE",
  },
  {
    title: "Redux",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, inventore est. Quibusdam suscipit reprehenderit minus voluptate. Minus amet harum, in labore odio corporis minima placeat quia sequi, nesciunt laborum quo.",
    img: "redux.png",
    data: {
      x: 1500,
      y: 2000,
      z: -500,
      rotateY: 85,
    },
    color: "#53C1DE",
  },
  {
    title: "React Query",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, inventore est. Quibusdam suscipit reprehenderit minus voluptate. Minus amet harum, in labore odio corporis minima placeat quia sequi, nesciunt laborum quo.",
    img: "reactQuery.webp",
    data: {
      x: 1000,
      y: 2500,
      z: 0,
      rotateY: 85,
    },
    color: "#53C1DE",
  },
];

function App() {
  return (
    <div className="App">
      <Impress>
        {Skills.map((skill, index) => (
          <Step key={index} id={"step" + (index + 1)} data={skill.data}>
            {skill.author ? (
              <div className="test greeting-step ">
                <h1>{skill.title}</h1>
                <p>{parse(skill.description)}</p>
                <br />
                <br />
                <h4>{skill.author} 💘💖💗❤♥💔💕❣💚💙♥</h4>
              </div>
            ) : (
              <div
                style={{
                  borderColor: skill.color,
                }}
                className="test"
              >
                {skill.img.includes(".") ? (
                  <img className="img" src={"/assets/" + skill.img} alt="" />
                ) : // <div className="img">{skill.img}</div>
                null}
                <h1>{skill.title}</h1>
                <p>{skill.description}</p>
              </div>
            )}
          </Step>
        ))}
        {/* <Step
          id="step-1"
          data={{
            x: 100,
            y: -100,
            scale: 2,
          }}
          className="step"
        >
          <img src="/assets/react.png" alt="React js logo" />
          <h1>React Js</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam,
            inventore est. Quibusdam suscipit reprehenderit minus voluptate.
            Minus amet harum, in labore odio corporis minima placeat quia sequi,
            nesciunt laborum quo.
          </p>
        </Step>
        <Step
          id="step-2"
          data={{
            x: 1000,
            y: 1000,
            scale: 2,
          }}
          className="step"
        >
          <h1>Hello 2</h1>
        </Step>

        <Step>
          <h1>Bye Bye</h1>
        </Step> */}
      </Impress>
    </div>
  );
}

export default App;
