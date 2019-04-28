import React from 'react';
import SearchList from './components/search-form';
function App() {
  // Declare a new state variable, which we'll call "count"
  // const [count, setCount] = useState(0);

  return (
    <div className="joinApp">
    <div className="container">
      <SearchList />
    </div>
    </div>
  );
}

export default App;