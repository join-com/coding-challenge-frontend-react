import React from "react";
import Header from "./components/Header";
import FinderBar from './components/FinderBar';
const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <FinderBar />
    </div>
  );
};

export default App;
