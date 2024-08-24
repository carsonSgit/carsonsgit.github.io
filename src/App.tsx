import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Content from './Components/Content/Content';
import Footer from './Components/Footer/Footer';
import './App.scss';

const App: React.FC = () => {
  return (
    <div className="App" role="document">
      <Navbar />
      <main>
        <Content />
      </main>
      <Footer />
    </div>
  );
};

export default App;
