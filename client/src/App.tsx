import React from "react";
import Header from "./components/Header";
import FinderBar from './components/FinderBar';
import CasesContainer from "./components/CasesContainer";
const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <FinderBar />
      <CasesContainer />
    </div>
  );
};

export default App;
