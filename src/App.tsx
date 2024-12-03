import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import ReadyToDive from "./components/ReadyToDive";
import PostRequirements from "./components/PostRequirements";

type AppProps = {};

const App: React.FC<AppProps> = () => {
  return (
      <div className="App">
          <Header />
          <HeroSection />
          <ReadyToDive />
          <PostRequirements />
          <HowItWorks />
          <Footer />
      </div>
  );
};

export default App;
