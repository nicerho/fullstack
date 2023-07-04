import FirstComponent from "./FirstComponent";
import SecComponent from "./SecondComponent";
import ThirdComponent from "./ThirdComponent";
import AnotherComponent from "./FourthComponent";
import LearningJavascript from "./LearningJavascript";

export default function LearningComponent() {
  return (
    <div className="App">
      <FirstComponent></FirstComponent>
      <SecComponent></SecComponent>
      <ThirdComponent></ThirdComponent>
      <AnotherComponent></AnotherComponent>
      <LearningJavascript />
    </div>
  );
}
