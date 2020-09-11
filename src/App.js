import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Acquaintance from './components/Acquaintance/Acquaintance';
import Users from './components/Users/Users';
import Registration from './components/Registration/Registration';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Acquaintance />
      <Users />
      <Registration />
      <Footer />
    </div>
  );
}

export default App;
