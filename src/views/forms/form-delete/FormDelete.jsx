import React,{useState} from 'react'
import {

  CCard,
  CButton,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,


  CRow,
} from '@coreui/react'
import {useSelector} from 'react-redux';
import {api,endpoints} from '../../../Lib/Api'
import { getHeaderStructure } from '../../../Lib/helper'
import './FormDelete.css'

const FormControl = () => {
  const auth = useSelector((state)=>state.auth.data);
 
  const [barcode,setBarcode] = useState('');

 
  const [product,setProduct] = useState(true);
  const [data,setData] = useState([]);
  const [response,setResponse] = useState('');
  const config = {
    headers: getHeaderStructure(auth.token),
  }

  const handleSubmit = async(e) =>{
    e.preventDefault();

    console.log(barcode)

  
    const editConfig = {...config};
    const data = {
   
      barcode,
   
    
    }
    editConfig.data = data;
    const result = await api.call(endpoints.findProduct,editConfig);
    console.log(result);
    if(result.data.length>0){
      setData(result.data);

      console.log(result);
      setProduct(false);
    }else{
        setResponse('Produkti nuk ekziston.')
    }


  }
  const handleRemove = async(e)=>{
    e.preventDefault();
    const editConfig = {...config};
    const data ={
        barcode,
    }
    editConfig.data = data;
    const result = await api.call(endpoints.removeProduct,editConfig);
    console.log(result);
    if(result.success){
        setProduct(true);
    }
  }
  return (
    <div className="move-it-top">

   

    <CRow>
          {product ?(
            
      <CCol xs={12}>
      <CCard className="mb-4">
        <CCardHeader>
          <strong>Fshijë produkte</strong>
        </CCardHeader>
        <CCardBody>

            <CForm onSubmit={handleSubmit}>
          
              <div className="mb-3">
                <CFormLabel htmlFor="exampleFormControlInput1">Barkodi:</CFormLabel>
                <CFormInput
                  type="number"
                  id="exampleFormControlInput1"
                  placeholder="Sheno barkodin e produktit:"
                  onChange={(e)=>{setBarcode(e.target.value)}}
                  value={barcode}
                />
              </div>
            

              <CButton type="submit">Submit</CButton>
              {response&&(<>
              <div>
                <br></br>
                <h6>{response}</h6>
              </div>
              </>)}
            </CForm>
   
        </CCardBody>
      </CCard>
    </CCol>

):(
   
 <>
   <div className="products-data-wrapper">
            <div className="products-data-image">
            <img src={process.env.REACT_APP_API_URL + data[0].images[0]} alt="first-img" />
            </div>
            <div className="products-data-title">
                <p>{data[0].title}</p>
            </div>
            <CForm onSubmit={handleRemove}>
                <h6>A jeni i sigurtë që dëshironi ta fshini këtë produkt?</h6>
                <CButton type="submit">Po</CButton>
                <CButton onClick={()=>{setProduct(true)}}>Jo</CButton>
            </CForm>
            </div>
           
 </>


  
)}
</CRow>
</div>

   
     
  )
}

export default FormControl
