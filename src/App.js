import './App.css';
import Header from './header/header';
import ProjectPage from './projectPage/projectPage.js';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        
        <Routes>
          <Route path="/" element={<ProjectPage/>}/>

        </Routes>
      </main>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
