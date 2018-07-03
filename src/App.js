import React, { Component } from 'react';

import './App.css';
import Header from './Header'
import Content from './Content'
import SideBanner from './SideBanner'
import ClickBait from './ClickBait'
import Footer from './footer'
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
        
      <Header />

    <main className="expanded row">
      <Content />
     <SideBanner />
      <ClickBait />
  
    </main>
  <Footer/>
    
        </div>
        <p className="App-intro">
        
        </p>
      </div>
    );
  }
}

export default App;
