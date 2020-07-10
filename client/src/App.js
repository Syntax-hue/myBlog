import React from "react";
import { Switch, Route } from "react-router-dom";

// components
import Navbar from "./components/Navbar";
import Posts from "./components/Posts";
import CreatePost from "./components/CreatePost";
import Chat from "./components/Chat";

// containers
import Pomodoro from "./containers/Pomodoro";

export default function App() {
  return (
    <div>
      <Navbar />

      <Switch>
        <Route path="/posts">
          <Posts />
        </Route>
        <Route path="/create">
          <CreatePost />
        </Route>
        <Route path="/chat">
          <Chat />
        </Route>
        <Route path="/pomodoro">
          <Pomodoro />
        </Route>
      </Switch>
    </div>
  );
}
