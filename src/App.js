import "./App.css";
import React from "react";
import Navbar from "./components/navbar/Navbar";
import Page1 from "./pages/Page1";
function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <section>
          <Page1 />
        </section>
      </main>
    </div>
  );
}

export default App;
