import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import BannerInfo from './components/home/BannerInfo';
import Footer from './components/Footer';
// import NavBar from './components/NavTabs';
import './App.css';
// import Header from './components/Header,';

function App() {
  return (
    <div className="flex flex-col min-h-screen max-w-full">
      <BannerInfo />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
