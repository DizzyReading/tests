import React from "react";
import Header from "./components/Header/Header";
import Headline from "./components/Headline/Headline";
import { Section } from "./styles/GlobalComps";

const tempArr = [
  {
    fName: "Jane",
    lName: "Doe",
    email: "janedoe@gmail.com",
    age: 23,
    onlineStatus: false,
  },
];

function App() {
  const props = {
    header: "Posts",
    description: "Click the button to render posts!",
    tempArr,
  };
  return (
    <div className="App">
      <Header />
      <Section className="main">
        <Headline {...props} />
      </Section>
    </div>
  );
}

export default App;
