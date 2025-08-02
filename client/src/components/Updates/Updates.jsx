import './Updates.css';
import { assets } from '../../../assets/assets'

function Updates() {
  return (
    <div className="updates">
      <h2>Upcoming Events</h2>
      <div className="image">
        <img src={assets.bible_study} alt="Bible study" />
      </div>
      <div className="image">
        <img src={assets.sunday1} alt="sunday poster" />
      </div>
    </div>
  )
}

export default Updates;
