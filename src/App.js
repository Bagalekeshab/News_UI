

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewsPages from "./Components/Newspage/Psmnepal";
import Pages from "./Components/UI/Pages";
function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path="/" element={<NewsPages/>}></Route>
          <Route path="page" element={<Pages/>}></Route>
        </Routes>
      </Router>
      

      
      
        
      
    </div>
  );
}

export default App;
