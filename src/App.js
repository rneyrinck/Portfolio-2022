import './App.css';
import Header from './header/header';
import ProjectPage from './projectPage/projectPage.js';
import { Route, Routes } from 'react-router';
import About from './about/about';

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        
        <Routes>
          <Route path="/" element={<ProjectPage/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </main>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
