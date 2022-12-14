import GoogleMapsCall from "../../components/GoogleMapsCall/GoogleMapsCall";
import conaddragodan from '../../assets/images/conaddragodan.jpg'
import conaddragodan2 from '../../assets/images/conaddragodan2.jpg'
import './Pikat.css'
import FooterConad from "../../components/FooterConad/FooterConad";
import conadbregu from '../../assets/images/conadbregu.jpg'
import conadKurrizi from '../../assets/images/conadKurrizi.jpg'
const Pikat = () =>{
 
    const Dragodan = {
        latitude:'42.656898',
        longitute:'21.146955'
    }
    const Bregu = {
        latitude:'42.655446',
        longitute:'21.180483'
    }
    const Kurrizi = {
        latitude:'42.653759',
        longitute:'21.152604'
    }

    return<>
    <div className="move-location">


    <div className="location-dragodan">
        <div className="title-wrapper-location">
            <p>Arbëri</p>
        </div>
        <div className="image-container-location">
            <div className="first-img">
            <img src={conaddragodan} alt="conad-dragodan" />
                
            </div>
            <div className="two-images">
                <img src={conaddragodan2} alt="conad-dragodan2" />
            </div>
            
        </div>
        
        <div className="google-maps-wrapper">
            <GoogleMapsCall getLatitude={Dragodan} />
        </div>
    </div>
    <div className="location-dragodan">
        <div className="title-wrapper-location">
            <p>Bregu i diellit</p>
        </div>
        <div className="image-container-location">
            <div className="first-img">
            <img src={conadbregu} alt="conad-dragodan" />
                
            </div>
            <div className="two-images">
                <img src={conadbregu} alt="conad-dragodan2" />
            </div>
            
        </div>
        
        <div className="google-maps-wrapper">
            <GoogleMapsCall getLatitude={Bregu} />
        </div>
    </div>
    <div className="location-dragodan">
        <div className="title-wrapper-location">
            <p>Dardani</p>
        </div>
        <div className="image-container-location">
            <div className="first-img">
            <img src={conadKurrizi} alt="conad-dragodan" />
                
            </div>
            <div className="two-images">
                <img src={conadKurrizi} alt="conad-dragodan2" />
            </div>
            
        </div>
        
        <div className="google-maps-wrapper">
            <GoogleMapsCall getLatitude={Kurrizi} />
        </div>
    </div>

    <div className="footer-cnd">
      <FooterConad />
    </div>
    </div>
    </>
}
export default Pikat;