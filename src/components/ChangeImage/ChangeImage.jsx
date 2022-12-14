import { getHeaderStructure } from '../../Lib/helper';
import {api,endpoints} from '../../Lib/Api'
import {useSelector} from 'react-redux'
import {useRef,useState} from 'react';
import {
    CCol,
    CCard,
    CCardBody,
    CFormLabel,
    CFormInput,
    CCardHeader




} from '@coreui/react'
import {useNavigate} from 'react-router-dom';

const ChangeImage =({postId,imgs}) =>{

    console.log(postId);
    const navigate = useNavigate();
    const auth = useSelector((state)=>state.auth.data);
    const fileRef = useRef(null);
    // eslint-disable-next-line
    const [image,setImage] = useState([process.env.REACT_APP_API_URL + imgs[0]]); 

    const handleImageChange = async (e) =>{
        e.preventDefault();
 
   
       changeImage(fileRef.current.files[0])
      
    }
    const changeImage = async(file)=>{
        const formData = new FormData();
        formData.append('product-image',file);
        const editConfig = {
            headers:getHeaderStructure(auth.token),
            params:[postId]
        }
        editConfig.data = formData;
        try{
            const result = await api.call(endpoints.addImage,editConfig);
            console.log(result);
            if(result.success){
                navigate(`/products/${postId}`)

            }
            
        }catch(err){

        }
    }
    return <>
     <CCol xs={12}>
  <CCard className="mb-4">
    <CCardHeader>
      <strong>Shto foto:</strong> <small>File input</small>
    </CCardHeader>
    <CCardBody>

        <div className="mb-3">
          <CFormLabel htmlFor="formFile">Shto foto:</CFormLabel>
          <CFormInput ref={fileRef} type="file"  onChange={handleImageChange} name="product-image" accept="image/png, image/jpeg" />
        </div>
      
     
      
 
    </CCardBody>
  </CCard>
</CCol>

    </>
    

}
export default ChangeImage;