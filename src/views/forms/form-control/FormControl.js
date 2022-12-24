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
import {api,endpoints} from '../../../Lib/Api'
import { getHeaderStructure } from '../../../Lib/helper'
import ChangeImage from '../../../components/ChangeImage/ChangeImage';


const FormControl = () => {
  const auth = useSelector((state)=>state.auth.data);
  const [title,setTitle] = useState('');
  const [barcode,setBarcode] = useState('');
  const [description,setDescription] = useState('');
  const [section,setSection] = useState('');
  const [product,setProduct] = useState(true);
  const [data,setData] = useState([]);
  const [imgs,setImgs] = useState([]);

  const config = {
    headers: getHeaderStructure(auth.token),
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
    const result = await api.call(endpoints.addProduct,editConfig);
    if(result.success){
      setData(result.data);
      setImgs(result.data.images);
      console.log(result);
      setProduct(false);
    }


  }
  return (

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
  <option value="Gastronomi_Djath">Banak - djath</option>
  <option value="Gastronomi_Pershuta">Banak - pershuta</option>
  <option value="Gastronomi_Tjera">Banak - tjera</option>
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
  <option value="Caj_dhe_kafe">Çaj dhe kafe</option>
  <option value="Drithera">Drithëra</option>
  <option value="Te_njelmeta">Përbërës për ëmbëlsira</option>
  <option value="Salsa">Salsa</option>
  <option value="Peshk">Peshk</option>
  <option value="Pasta">Pasta</option>
  <option value="Vaj dhe uthull">Vaj dhe uthull</option>
  <option value="Oriz">Oriz</option>
  <option value="Miell">Miell</option>
  <option value="Higjena_personale">Higjena personale</option>
  <option value="Higjena_shtepiake">Higjena shtëpiake</option>
  <option value="Produkte_kafshe">Produkte kafshe</option>
  <option value="Te_gazuara">Te gazuara</option>
  <option value="Caj_i_ftohte">Caj i ftohte</option>
  <option value="Energjetike">Energjetike</option>
  <option value="Lengje_frutash">Lengje frutash</option>
  <option value="Uje">Uje</option>
  <option value="Vera">Vera</option>
  <option value="Birra">Birra</option>
  <option value="Pije_alkolike">Pije Alkolike</option>
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

   
     
  )
}

export default FormControl
