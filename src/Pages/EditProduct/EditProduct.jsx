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
  CFormTextarea,
  CFormSelect,
  CRow,
} from '@coreui/react'
import {useSelector} from 'react-redux';
import {api,endpoints} from '../../Lib/Api'
import { getHeaderStructure } from '../../Lib/helper'
import ChangeImage from '../../components/ChangeImage/ChangeImage';
import {useLocation} from 'react-router-dom'
import './EditProduct.css'


const EditProduct = () => {
  const auth = useSelector((state)=>state.auth.data);
  const location = useLocation();
  console.log(location.state);
  const [title,setTitle] = useState(location.state.postData.title);
  const [barcode,setBarcode] = useState(location.state.postData.barcode);
  const [description,setDescription] = useState(location.state.postData.description);
  const [section,setSection] = useState(location.state.postData.section);
  const [product,setProduct] = useState(true);
  const [data,setData] = useState([]);
  const [imgs,setImgs] = useState([]);
  const config = {
    headers: getHeaderStructure(auth.token),
    params:[location.state.postData._id]
  }

  const handleSubmit = async(e) =>{
    e.preventDefault();
    console.log(title)
    console.log(barcode)
    console.log(description)
    console.log(section);
    const editConfig = {...config};
    const data = {
      title,
      barcode,
      section,
      description
    }
    editConfig.data = data;
    const result = await api.call(endpoints.editProduct,editConfig);
    if(result.success){
      setData(result.data);
      setImgs(result.data.images);
      console.log(result);
      setProduct(false);
    }


  }
  return (
    <div className="move-it-from">

 

    <CRow>
          {product ?(
            
      <CCol xs={12}>
      <CCard className="mb-4">
        <CCardHeader>
          <strong>Shto produkte</strong>
        </CCardHeader>
        <CCardBody>

            <CForm onSubmit={handleSubmit}>
              <div className="mb-3">
                <CFormLabel htmlFor="exampleFormControlInput1">Emri i produktit:</CFormLabel>
                <CFormInput
                  type="text"
                  id="exampleFormControlInput1"
                  placeholder="Sheno emrin e produktit:"
                  onChange={(e)=>{setTitle(e.target.value)}}
                  value={title}
                />
              </div>
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
              <div className="mb-3">
              <CFormSelect aria-label="Default select example"
              onChange={(e)=>{setSection(e.target.value)}}
              value={section}>
  <option>Sektori:</option>
  <option value="Jogurta">Jogurta</option>
  <option value="Freskia">Të ngrira</option>
  <option value="Pershuta">Përshuta</option>
  <option value="Fresk_jera">Fresk Tjera</option>
  <option value="Pica">Pica</option>
  <option value="Perime">Perime</option>
  <option value="Mish">Mish</option>
  <option value="Akullore">Akullore</option>
  <option value="Produkte_deti">Produkte deti</option>
  <option value="Pa_Laktoze">Pa Laktozë</option>
  <option value="Pa_Gluten">Pa Gluten</option>
  <option value="Produkte_Bio">Produkte Bio</option>
  <option value="Qumeshta">Qumështa</option>
  <option value="Qumeshta_pa_laktoze">Qumështa pa laktozë</option>
  <option value="Buke">Bukë</option>
  <option value="Te_njelmeta">Të njelmëta</option>
  <option value="Karramele dhe Çokollata">Karramele dhe Çokollata</option>
  <option value="Biskota">Biskota</option>
  <option value="Mjalte_dhe_Recel">Mjaltë dhe Reçel</option>
  <option value="Drithera">Drithëra</option>
  <option value="Te_njelmeta">Përbërës për ëmbëlsira</option>
  <option value="Salce_domatesh">Salcë domatesh</option>
  <option value="Pasta">Pasta</option>
  <option value="Vaj dhe uthull">Vaj dhe uthull</option>
  <option value="Oriz">Oriz</option>
  <option value="Miell">Miell</option>
</CFormSelect>

              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="exampleFormControlTextarea1">Pershkrimi i produktit:</CFormLabel>
                <CFormTextarea id="exampleFormControlTextarea1" rows="3"
                onChange={(e)=>{setDescription(e.target.value)}}
                value={description}></CFormTextarea>
              </div>
              <CButton type="submit">Submit</CButton>
            </CForm>
   
        </CCardBody>
      </CCard>
    </CCol>

):(
   
 <ChangeImage postId={data._id} imgs={imgs} />


  
)}
</CRow>
</div>

   
     
  )
}

export default EditProduct
