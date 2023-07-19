import './App.css';
import Clients from './components/Clients';
import Header from './components/Header';
import PetStoreBeyond from './components/PetStoreBeyond';
import Videos from './components/Videos';
import Features from './components/Features';
import './index.css';
import UserFeedback from './components/UserFeedback';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App h-fit w-full pt-24 min-h-screen">
<Header/>
<PetStoreBeyond/>
<Videos/>
<Clients/>
<Features/>
<UserFeedback/>
<ContactUs/>
<Footer/>
    </div>
  );
}

export default App;
