import React from 'react';
import AppBar from './AppBar';
import Cards from './card';
import Footer from './Footer';
import SubscribeForm from './SubscribeForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="d-flex">
          <div className="logo-holder">
            <h2 className="logo">Sports $ Casino</h2>
          </div>
          <a href="#" className="card-btn join-btn">Sign up!</a>
        </div>
      </header>
      <main>
        <AppBar />
        <SubscribeForm />
        <Cards />
        <Footer />
      </main>
    </div>
  );
}

export default App;
