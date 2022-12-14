import Carousel from 'react-bootstrap/Carousel'
import './HomePage.css'
import {useEffect,useState} from 'react'
import {api,endpoints} from '../../Lib/Api'
import {useNavigate} from 'react-router-dom'
import FooterConad from '../../components/FooterConad/FooterConad'
import sapori from '../../assets/images/sapori.jpg'


const HomePage = () =>{
    const [data,setData] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        const getOffert = async ()=>{
            const result = await api.call(endpoints.getOffertImages);
            console.log(result);
            if(result.success){
                setData(result.data);
            }
        }
        getOffert();

    },[])
    console.log(data);
    return <>
  
    <div className="wrapper">
    {data &&data.map((elem)=>(
                <>
    
    <div className="container-carousel">
        <div className="carousel-description">
            <img src={process.env.REACT_APP_API_URL + elem.images[0]} className="conad-logo" alt="conad-logo"></img>
          
        <div className="carousel-capt">
          <h2>Shije dhe kualitet ne vend</h2>

        </div>

        </div>
        
        <div className="carousel-items">


           
     
     <Carousel className="carousel-containe">
     {elem.images[0]&&( 
          <Carousel.Item>
          <div   className="carousel-conta">
  
          <img
           
          
            src={process.env.REACT_APP_API_URL + elem.images[0]}
            alt="First slide"
          />
          </div>
       
        </Carousel.Item>

      )}
      {elem.images[1]&&( 
          <Carousel.Item>
          <div   className="carousel-conta">
  
          <img
           
          
            src={process.env.REACT_APP_API_URL + elem.images[1]}
            alt="First slide"
          />
          </div>
       
        </Carousel.Item>

      )}
      {elem.images[2]&&( 
          <Carousel.Item>
          <div   className="carousel-conta">
  
          <img
           
          
            src={process.env.REACT_APP_API_URL + elem.images[2]}
            alt="First slide"
          />
          </div>
       
        </Carousel.Item>

      )}
      {elem.images[3]&&( 
          <Carousel.Item>
          <div   className="carousel-conta">
  
          <img
           
          
            src={process.env.REACT_APP_API_URL + elem.images[3]}
            alt="First slide"
          />
          </div>
       
        </Carousel.Item>

      )}
      {elem.images[4]&&( 
          <Carousel.Item>
          <div   className="carousel-conta">
  
          <img
           
          
            src={process.env.REACT_APP_API_URL + elem.images[4]}
            alt="First slide"
          />
          </div>
       
        </Carousel.Item>

      )}
      {elem.images[5]&&( 
          <Carousel.Item>
          <div   className="carousel-conta">
  
          <img
           
          
            src={process.env.REACT_APP_API_URL + elem.images[5]}
            alt="First slide"
          />
          </div>
       
        </Carousel.Item>

      )}
            {elem.images[6]&&( 
          <Carousel.Item>
          <div   className="carousel-conta">
  
          <img
           
          
            src={process.env.REACT_APP_API_URL + elem.images[6]}
            alt="First slide"
          />
          </div>
       
        </Carousel.Item>

      )}
            {elem.images[7]&&( 
          <Carousel.Item>
          <div   className="carousel-conta">
  
          <img
           
          
            src={process.env.REACT_APP_API_URL + elem.images[7]}
            alt="First slide"
          />
          </div>
       
        </Carousel.Item>

      )}
            {elem.images[8]&&( 
          <Carousel.Item>
          <div   className="carousel-conta">
  
          <img
           
          
            src={process.env.REACT_APP_API_URL + elem.images[8]}
            alt="First slide"
          />
          </div>
       
        </Carousel.Item>

      )}
      </Carousel>
               
      
         

 

        </div>
    </div>
    </>
       ))}
       <div className="info-container">
        <div className="logo-cont">
    
        <img className="conad-logo2" src="https://imgur.com/cGZM0Xc.png" alt="alimentum"></img>
        </div>
       Produktet q?? mbajn?? mark??n ton?? i n??nshtohen kontrolleve t?? holl??sishme dhe analizave laboratorike n?? m??nyr?? sistematike q?? i kalojn?? standartet e vendosura. Vet??dija q?? ??do dit?? n?? pikat tona t?? shitjes nj?? n?? tre produkte ??sht?? i mark??s CONAD, na ngarkon me nje p??rgjegj??si t?? shtuar, q?? e ndajm?? me t?? gjith?? furnitor??t tan??, t?? cil??t jan?? p??rzgjedhur p??r eksperienc??n, profesionalizmin, pasionin dhe transparenc??n e tyre. Fakti q?? po i ofrojm?? klient??ve tan?? produkte me mark??n CONAD ??sht?? para s?? gjithash nj?? impenjim q?? rinovohet sa her?? ofrojm?? nj?? produkt t?? ri. Raporti cil??si ??? ??mim ??sht?? avantazhi yn?? konkurues q?? i ofrojm?? klient??ve tan??.
       </div>
    <div className="products-container">
      <div className="title-container">
        <h3>MARKAT TONA</h3>
      </div>
     
    
        <div className="alimentum">
        <div className="alimentum-text">
            <img className="conad-alimentum" src="https://imgur.com/y24HAaT.jpg" alt="alimentum"></img>
            <p>Verso Natura BIO sillet rreth gjith??kaje q?? ??sht?? organike dhe bazohet n?? nj?? kultivim q?? p??rdor burimet natyrore me p??rgjegj??si.</p>
            </div>
            <button className="conad-btn" onClick={()=>{navigate('/VersoNatura-Bio')}}>M?? shum??</button>
        </div>
        <div className="alimentum">
        <div className="alimentum-text">
            <img className="conad-alimentum1" src="https://imgur.com/WakNANh.jpg" alt="alimentum"></img>
            <p>Nj?? zgjedhje e mir??qenies, p??r t?? jetuar me liri dhe fleksibilitet. Eliminimi ose zvog??limi i marrjes s?? proteinave shtazore mund t?? jet?? nj?? zgjedhje etike ose e mir??qenies???</p>
            </div>
            <button className="conad-btn" onClick={()=>{navigate('/VersoNatura-Veg')}}>M?? shum??</button>
        </div>
      
        <div className="alimentum">
          <div className="alimentum-text">

      
            <img className="conad-alimentum" src="https://imgur.com/viaywDN.png" alt="alimentum"></img>
            <p>Linja e produkteve dedikuar atyre q?? jan?? t?? ndjesh??m ndaj konsumit t?? vet??dijsh??m. Kakao, ??okollat??, kafe Verso Natura EQUO etj???</p>
            </div>
            <button className="conad-btn" onClick={()=>{navigate('/VersoNatura-Equo')}}>M?? shum??</button>
        </div>
        <div className="alimentum">
        <div className="alimentum-text">
            <img className="conad-alimentum" src="https://imgur.com/BlTat0c.png" alt="alimentum"></img>
            <p>Nj?? gam?? produktesh q?? respektojn?? ekuilibrin natyror. P??r t?? jetuar n?? harmoni me nj?? ekosistem ??sht?? e nevojshme t?? kujdesesh p??r t??.</p>
            </div>
            <button className="conad-btn" onClick={()=>{navigate('/VersoNatura-Eco')}}>M?? shum??</button>
        </div>
      
        <div className="alimentum">
        <div className="alimentum-text">
            <img className="conad-alimentum" src="https://imgur.com/uhOy8AM.png" alt="alimentum"></img>
            <p>Linja CONAD Alimentum pa Gluten, kushtuar t?? gjith?? njer??zve intolerant ndaj glutenit, t?? cil??t nuk duan t?? heqin dor?? nga shija.</p>
            </div>
            <button className="conad-btn" onClick={()=>{navigate('/Alimentum-PaGluten')}}>M?? shum??</button>
        </div>
     
        <div className="alimentum">
        <div className="alimentum-text">
            <img className="conad-alimentum" src="https://imgur.com/DEK3Apa.png" alt="alimentum"></img>
            <p>Linja CONAD Alimentium pa Laktoz?? ??sht?? e dedikuar p??r t?? gjith?? personat q?? jan?? intolerante ndaj laktoz??s.</p>
            </div>
            <button className="conad-btn" onClick={()=>{navigate('/Alimentum-PaLaktoze')}}>M?? shum??</button>
        </div>
     
        <div className="alimentum">
        <div className="alimentum-text">
            <img className="conad-alimentum" src="https://imgur.com/buwXZ94.png" alt="alimentum"></img>
            <p>Nj?? diet?? e larmishme dhe e ekuilibruar, e lidhur me nj?? m??nyr?? jetese t?? sh??ndetshme dhe aktive, ??sht?? e r??nd??sishme p??r t???u ndier n?? form??.</p>
            </div>
            <button className="conad-btn" onClick={()=>{navigate('/Piacersi')}}>M?? shum??</button>
        </div>
       
        <div className="alimentum">
        <div className="alimentum-text">
            <img className="conad-alimentum" src=" https://imgur.com/Iz7Zo4Z.png" alt="alimentum"></img>
            <p>CONAD Essentiae ??sht?? nj?? linj?? produktesh bukurie q?? kujdeset p??r l??kur??n fal?? ekstraktit natyral t?? p??rb??r??sve.</p>
            </div>
            <button className="conad-btn" onClick={()=>{navigate('/Essentiae')}}>M?? shum??</button>
        </div>
     
        <div className="alimentum">
        <div className="alimentum-text">
            <img className="conad-alimentum" src="https://imgur.com/uLr0S9n.png" alt="alimentum"></img>
            <p>CONAD Baby ??sht?? linja e produkteve p??r kujdesin e f??mij??ve nga 0 deri n?? 6 vje??: peceta, detergjent, vajra dhe kremra mbrojt??s dhe pelena Dry-way</p>
            </div>
            <button className="conad-btn" onClick={()=>{navigate('/Conad-Baby')}}>M?? shum??</button>
        </div>
  
        <div className="alimentum">
        <div className="alimentum-text">
            <img className="conad-alimentum" src="https://imgur.com/UqylS8A.png" alt="alimentum"></img>
            <p>Oferta e CONAD p??r bot??n e kafsh??ve sht??piake pasurohet n?? shum??llojshm??ri dhe receta.</p>
            </div>
            <button className="conad-btn" onClick={()=>{navigate('/Conad-Pet')}}>M?? shum??</button>
        </div>
        <div className="alimentum">
        <div className="alimentum-text">
            <img className="conad-alimentum4" src={sapori} alt="alimentum"></img>
            <p>Linja CONAD Sapori&Dintorni p??rb??het nga nj?? p??rzgjedhje e gjer?? e produktesh t?? paimitueshme sepse ato b??hen me l??nd?? t?? para lokale???</p>
            </div>
            <button className="conad-btn" onClick={()=>{navigate('/Sapori')}}>M?? shum??</button>
        </div>
        <div className="alimentum">
        <div className="alimentum-text">
            <img className="conad-alimentum2" src="https://imgur.com/RcXcor4.png" alt="alimentum"></img>
            <p>Linja e re e birrave 11 Paralele, ??sht?? rezultati i p??rzgjedhjes son?? t?? birrave m?? t?? mira nga Italia dhe bota.</p>
            </div>
            <button className="conad-btn" onClick={()=>{navigate('/11_paralele')}}>M?? shum??</button>
        </div>
      

     
       

    </div>
    </div>
    <div className="footer-cnd">
      <FooterConad />
    </div>
    </>
    
}
export default HomePage;