import './FooterConad.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLocationDot} from '@fortawesome/free-solid-svg-icons'
import {faClock} from '@fortawesome/free-regular-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
const FooterConad = () =>{
    return <>
    <div className="footer-wrapper">
        <div className="footer-image-container">
            <img src="https://imgur.com/cGZM0Xc.png" alt="footer-conad" />
           
        </div>
        <div className="artist-cilesi">
                <p>Artistë në cilësi.</p>
                <p>Mjeshtër në levërdi.</p>
            </div>
            <div className="contact-conad">
                <p>Kontakti:</p>
                <div className="location-conad">
                    <FontAwesomeIcon style={{color:"rgb(229,0,29)"}} size="lg" icon={faLocationDot} />
                    <p>Në të gjitha pikat e CONAD.</p>
                </div>
                <div className="location-conad">
                    <FontAwesomeIcon style={{color:"rgb(229,0,29)"}} size="lg" icon={faClock} />
                    <p>08:00 - 22:00</p>
                </div>
                <div className="location-conad">
                    <FontAwesomeIcon style={{color:"rgb(229,0,29)"}} size="lg" icon={faEnvelope} />
                    <p>info@conad-kosova.com</p>
                </div>
                
            </div>
    </div>
    </>
}
export default FooterConad;