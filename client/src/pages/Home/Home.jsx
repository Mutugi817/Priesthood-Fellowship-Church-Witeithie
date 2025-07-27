import './Home.css';
import Header from '../../components/Header/Header'
import Map from '../../components/Map/Map.jsx';
import Updates from '../../components/Updates/Updates.jsx';

function Home() {
  return (
    <div className="home">
      <Header/>
      <Updates />
    </div>
  )
}

export default Home
