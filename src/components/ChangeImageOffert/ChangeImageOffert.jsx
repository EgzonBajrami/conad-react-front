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


const ChangeImageOffert =({postId}) =>{

    console.log(postId);
  
    const auth = useSelector((state)=>state.auth.data);
    const fileRef = useRef(null);
    const fileRef2 = useRef(null);
    const fileRef3 = useRef(null);
    const fileRef4 = useRef(null);
    const fileRef5 = useRef(null);
    const fileRef6 = useRef(null);
    const fileRef7 = useRef(null);
    const fileRef8 = useRef(null);
    const [index,setIndex] = useState();


    const handleImageChange = async (e) =>{
        e.preventDefault();
 
   
       changeImage(fileRef.current.files[0])
      
    }
    const handleImageChange2 = async (e) =>{
        e.preventDefault();
 
   
       changeImage(fileRef2.current.files[0])
      
    }
    const handleImageChange3 = async (e) =>{
        e.preventDefault();
 
   
       changeImage(fileRef3.current.files[0])
      
    }
    const handleImageChange4 = async (e) =>{
        e.preventDefault();
 
   
       changeImage(fileRef4.current.files[0])
      
    }
    const handleImageChange5 = async (e) =>{
        e.preventDefault();
 
   
       changeImage(fileRef5.current.files[0])
      
    }
    const handleImageChange6 = async (e) =>{
        e.preventDefault();
 
   
       changeImage(fileRef6.current.files[0])
      
    }
    const handleImageChange7 = async (e) =>{
        e.preventDefault();
 
   
       changeImage(fileRef7.current.files[0])
      
    }
    const handleImageChange8 = async (e) =>{
        e.preventDefault();
 
   
       changeImage(fileRef8.current.files[0])
      
    }
    const changeImage = async(file)=>{
        const formData = new FormData();
        formData.append('offert-image',file);
        console.log(index);
        const editConfig = {
            headers:getHeaderStructure(auth.token),
            params:[postId,index]
        }
        editConfig.data = formData;
        try{
            const result = await api.call(endpoints.addOffertImage,editConfig);
            console.log(result);
          
            
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
          <CFormLabel htmlFor="formFile">Foto kryesore:</CFormLabel>
          <CFormInput ref={fileRef} type="file"
            onChange={handleImageChange}
            onClick={()=>{setIndex('1')}}
             name="offert-image" accept="image/png, image/jpeg" />
        </div>
        <div className="mb-3">
          <CFormLabel htmlFor="formFile">Foto 2:</CFormLabel>
          <CFormInput ref={fileRef2} type="file"
            onChange={handleImageChange2}
            onClick={()=>{setIndex('2')}}
             name="offert-image" accept="image/png, image/jpeg" />
        </div>
        <div className="mb-3">
          <CFormLabel htmlFor="formFile">Foto 3:</CFormLabel>
          <CFormInput ref={fileRef3} type="file"
            onChange={handleImageChange3}
            onClick={()=>{setIndex('3')}}
             name="offert-image" accept="image/png, image/jpeg" />
        </div>
        <div className="mb-3">
          <CFormLabel htmlFor="formFile">Foto 4:</CFormLabel>
          <CFormInput ref={fileRef4} type="file"
            onChange={handleImageChange4}
            onClick={()=>{setIndex('4')}}
             name="offert-image" accept="image/png, image/jpeg" />
        </div>
        <div className="mb-3">
          <CFormLabel htmlFor="formFile">Foto 5:</CFormLabel>
          <CFormInput ref={fileRef5} type="file"
            onChange={handleImageChange5}
            onClick={()=>{setIndex('5')}}
             name="offert-image" accept="image/png, image/jpeg" />
        </div>
        <div className="mb-3">
          <CFormLabel htmlFor="formFile">Foto 6:</CFormLabel>
          <CFormInput ref={fileRef6} type="file"
            onChange={handleImageChange6}
            onClick={()=>{setIndex('6')}}
             name="offert-image" accept="image/png, image/jpeg" />
        </div>
        <div className="mb-3">
          <CFormLabel htmlFor="formFile">Foto 7:</CFormLabel>
          <CFormInput ref={fileRef7} type="file"
            onChange={handleImageChange7}
            onClick={()=>{setIndex('7')}}
             name="offert-image" accept="image/png, image/jpeg" />
        </div>
        <div className="mb-3">
          <CFormLabel htmlFor="formFile">Foto 8:</CFormLabel>
          <CFormInput ref={fileRef8} type="file"
            onChange={handleImageChange8}
            onClick={()=>{setIndex('8')}}
             name="offert-image" accept="image/png, image/jpeg" />
        </div>
      
     
      
 
    </CCardBody>
  </CCard>
</CCol>

    </>
    

}
export default ChangeImageOffert;