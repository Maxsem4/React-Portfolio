import React from "react";
import Container from "./components/Container/Container";
import './App.css';

import { Page } from "./page/page";

function App() {
  return (
    <Page>
      <div className="App">
        <Container />
      </div>
    </Page>
  );
}

export default App;