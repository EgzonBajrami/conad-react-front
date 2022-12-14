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
import ChangeImageOffert from '../../../components/ChangeImageOffert/ChangeImageOffert';


const FormControl = () => {
  const auth = useSelector((state)=>state.auth.data);
  const [title,setTitle] = useState('');
  const [end,setEnd] = useState('');

  const [product,setProduct] = useState(true);
  const [data,setData] = useState([]);
  const [imgs,setImgs] = useState([]);
  const config = {
    headers: getHeaderStructure(auth.token),
  }

  const handleSubmit = async(e) =>{
    e.preventDefault();
    console.log(title)
    console.log(end);
  
    const editConfig = {...config};
    const data = {
      title,
      end
    
    }
    editConfig.data = data;
    const result = await api.call(endpoints.addOffert,editConfig);
    console.log(result);
    if(result.success){
      setData(result.data);
      setImgs(result.data.images)
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
          <strong>Oferta</strong>
        </CCardHeader>
        <CCardBody>

            <CForm onSubmit={handleSubmit}>
              <div className="mb-3">
                <CFormLabel htmlFor="exampleFormControlInput1">Data e fillimit:</CFormLabel>
                <CFormInput
                  type="date"
                  id="exampleFormControlInput1"
                  placeholder="Sheno daten e fillimit te ofertes:"
                  onChange={(e)=>{setTitle(e.target.value)}}
                  value={title}
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="exampleFormControlInput1">Data e Mbarimit:</CFormLabel>
                <CFormInput
                  type="date"
                  id="exampleFormControlInput1"
                  placeholder="Sheno daten e mbarimit te ofertes:"
                  onChange={(e)=>{setEnd(e.target.value)}}
                  value={end}
                />
              </div>
              
            
          
            
              <CButton type="submit">Submit</CButton>
            </CForm>
   
        </CCardBody>
      </CCard>
    </CCol>

):(
   
 <ChangeImageOffert postId={data._id} imgs={imgs} />


  
)}
</CRow>

   
     
  )
}

export default FormControl
