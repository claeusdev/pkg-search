import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import RepoList from "./components/RepoList";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <section>
        <h1>Search for a package</h1>
        <RepoList />
      </section>
    </Provider>
  );
}

export default App;
