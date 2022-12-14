import './ConadPages.css'
import DropDown from '../DropDown/DropDown';
const ConadPages = ({data}) =>{
    console.log(data.image.toString());
    return <>
 

   <div className="content-here">

    <div className="image-containers">
        <img className="img-container" src={data.image} alt="alimentum" />
     
    </div>
    <div className="dropdown-wrapper">
    <div className="dropdown-here">
        <DropDown />
    </div>
    <div className="grid-container">
    <div className="second-image-container">
        <img className="second-image" src={data.secondImage} alt="second" />
    </div>

    <div className="description-container">
        {data.description}
    </div>
   
    </div>
   </div>
    </div>
    </>
}
export default ConadPages;