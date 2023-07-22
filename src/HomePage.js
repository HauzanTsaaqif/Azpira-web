import './homepage.css';
import FootBar from './component/Footbar1';
import NavBar from './component/Navbar1';

function HomePage() {
  return (
    <div className="homepage">
      <NavBar />
      <div className='contain'></div>
      <FootBar />
    </div>
  );
}

export default HomePage;
