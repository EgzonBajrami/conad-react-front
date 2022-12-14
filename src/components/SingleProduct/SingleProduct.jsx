import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './SingleProduct.css'

import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'


const SingleProduct = (props) =>{
  console.log(props);
  const navigate = useNavigate();
  const auth = useSelector((state)=>state.auth.data)



  return (
    <>
     
  



     <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      
   <div className="modal-wrapper">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.data.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <div className="go-to-edit"> 
          {(auth!==null)&&auth.role==='ADMIN'&&(<button onClick={()=>{navigate(`/produktet/edit/${props.data._id}`,{state:{postData:props.data}})}}>Edit</button>)}



          </div>
        <div className="center-modal">
        <div className="products-data-image1">
            <img src={process.env.REACT_APP_API_URL + props.data.images[0]} alt="first-img" />
            </div>
            <div className="products-data-description">
                <p>{props.data.description}</p>
            </div>

        </div>
   
      </Modal.Body>
      <Modal.Footer>
      {(auth!==null)&&auth.role==='ADMIN'&&(<>{props.data.barcode} </>)}
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
      </div>
    </Modal>
    
    </>
  );
}

export default SingleProduct;