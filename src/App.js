import './App.css';
import Header from './header/header';
import { Routes } from 'react-router';

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        
        <Routes>
          {/* <Route path="/" element={<ProjectPage/>}/> */}

        </Routes>
      </main>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
