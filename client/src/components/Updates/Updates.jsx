import './Updates.css';
import { assets } from '../../../assets/assets'

function Updates() {
  return (
    <div className="updates">
      <h2>Latest Event</h2>
      <div className="image">
            <img src={assets.sunday} alt="sunday poster" />
      </div>
    </div>
  )
}

export default Updates
