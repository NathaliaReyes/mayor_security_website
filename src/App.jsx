import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import BannerInfo from './components/home/BannerInfo';
import Footer from './components/Footer';
import Banner from '@/components/Banner';
// import NavBar from './components/NavTabs';
import './App.css';
// import Header from './components/Header,';
// import LanguageSwitcher from './components/LanguageSwitcher';

function App() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <BannerInfo />
      {/* <LanguageSwitcher /> */}
      <Header />
      {/* <Banner /> */}

      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
