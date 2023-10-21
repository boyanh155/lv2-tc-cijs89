import React from "react";
import "./App.css";
import Header from "./components/shared/Header";
import Content from "./pages/Content";
import Footer from "./components/shared/Footer";
//


const App = () => {
  return (
    <div className="app">
      {/* Header */}
      <Header/>
      {/* Content */}
      <Content/>
      {/* Footer */}
     <Footer/>
    </div>
  );
};

export default App;
