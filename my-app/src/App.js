/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import SharedButton from "./components/Button/Button";
import Header from "./components/Header/Header";
import Headline from "./components/Headline/Headline";
import ListItem from "./components/ListItem/ListItem";
import { getPosts } from "./redux/posts/postsSlice";
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
  const dispatch = useDispatch();

  useEffect(() => {
    // setTimeout(() => {
    //   dispatch(getPosts());
    // }, 3000);
    // console.log("Actions:", fetchPosts(posts));
  }, []);

  const configButton = {
    buttonText: "Get Posts",
    emitEvent: getPosts,
  };

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
        <SharedButton {...configButton} />
      </Section>
    </div>
  );
}

export default App;
