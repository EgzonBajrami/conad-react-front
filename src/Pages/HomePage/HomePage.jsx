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
       Produktet që mbajnë markën tonë i nënshtohen kontrolleve të hollësishme dhe analizave laboratorike në mënyrë sistematike që i kalojnë standartet e vendosura. Vetëdija që çdo ditë në pikat tona të shitjes një në tre produkte është i markës CONAD, na ngarkon me nje përgjegjësi të shtuar, që e ndajmë me të gjithë furnitorët tanë, të cilët janë përzgjedhur për eksperiencën, profesionalizmin, pasionin dhe transparencën e tyre. Fakti që po i ofrojmë klientëve tanë produkte me markën CONAD është para së gjithash një impenjim që rinovohet sa herë ofrojmë një produkt të ri. Raporti cilësi – çmim është avantazhi ynë konkurues që i ofrojmë klientëve tanë.
       </div>
    <div className="products-container">
      <div className="title-container">
        <h3>MARKAT TONA</h3>
      </div>
     
    
        <div className="alimentum">
        <div className="alimentum-text">
            <img className="conad-alimentum" src="https://imgur.com/y24HAaT.jpg" alt="alimentum"></img>
            <p>Verso Natura BIO sillet rreth gjithçkaje që është organike dhe bazohet në një kultivim që përdor burimet natyrore me përgjegjësi.</p>
            </div>
            <button className="conad-btn" onClick={()=>{navigate('/VersoNatura-Bio')}}>Më shumë</button>
        </div>
        <div className="alimentum">
        <div className="alimentum-text">
            <img className="conad-alimentum1" src="https://imgur.com/WakNANh.jpg" alt="alimentum"></img>
            <p>Një zgjedhje e mirëqenies, për të jetuar me liri dhe fleksibilitet. Eliminimi ose zvogëlimi i marrjes së proteinave shtazore mund të jetë një zgjedhje etike ose e mirëqenies…</p>
            </div>
            <button className="conad-btn" onClick={()=>{navigate('/VersoNatura-Veg')}}>Më shumë</button>
        </div>
      
        <div className="alimentum">
          <div className="alimentum-text">

      
            <img className="conad-alimentum" src="https://imgur.com/viaywDN.png" alt="alimentum"></img>
            <p>Linja e produkteve dedikuar atyre që janë të ndjeshëm ndaj konsumit të vetëdijshëm. Kakao, çokollatë, kafe Verso Natura EQUO etj…</p>
            </div>
            <button className="conad-btn" onClick={()=>{navigate('/VersoNatura-Equo')}}>Më shumë</button>
        </div>
        <div className="alimentum">
        <div className="alimentum-text">
            <img className="conad-alimentum" src="https://imgur.com/BlTat0c.png" alt="alimentum"></img>
            <p>Një gamë produktesh që respektojnë ekuilibrin natyror. Për të jetuar në harmoni me një ekosistem është e nevojshme të kujdesesh për të.</p>
            </div>
            <button className="conad-btn" onClick={()=>{navigate('/VersoNatura-Eco')}}>Më shumë</button>
        </div>
        <div className="alimentum">
        <div className="alimentum-text">
            <img className="conad-alimentum2" src="https://imgur.com/opDAUqZ.png" alt="alimentum"></img>
            <p>CONAD Alimentium është një markë e përshtatshme për ata që kanë nevoja specifike ushqimore. Një ndihmë e përditshme për mirëqënien e të gjithë familjes.</p>
            </div>
            <button className="conad-btn" onClick={()=>{navigate('/')}}>Më shumë</button>
        </div>
        <div className="alimentum">
        <div className="alimentum-text">
            <img className="conad-alimentum" src="https://imgur.com/uhOy8AM.png" alt="alimentum"></img>
            <p>Linja CONAD Alimentum pa Gluten, kushtuar të gjithë njerëzve intolerant ndaj glutenit, të cilët nuk duan të heqin dorë nga shija.</p>
            </div>
            <button className="conad-btn" onClick={()=>{navigate('/Alimentum-PaGluten')}}>Më shumë</button>
        </div>
     
        <div className="alimentum">
        <div className="alimentum-text">
            <img className="conad-alimentum" src="https://imgur.com/DEK3Apa.png" alt="alimentum"></img>
            <p>Linja CONAD Alimentium pa Laktozë është e dedikuar për të gjithë personat që janë intolerante ndaj laktozës.</p>
            </div>
            <button className="conad-btn" onClick={()=>{navigate('/Alimentum-PaLaktoze')}}>Më shumë</button>
        </div>
     
        <div className="alimentum">
        <div className="alimentum-text">
            <img className="conad-alimentum" src="https://imgur.com/buwXZ94.png" alt="alimentum"></img>
            <p>Një dietë e larmishme dhe e ekuilibruar, e lidhur me një mënyrë jetese të shëndetshme dhe aktive, është e rëndësishme për t’u ndier në formë.</p>
            </div>
            <button className="conad-btn" onClick={()=>{navigate('/Piacersi')}}>Më shumë</button>
        </div>
       
        <div className="alimentum">
        <div className="alimentum-text">
            <img className="conad-alimentum" src=" https://imgur.com/Iz7Zo4Z.png" alt="alimentum"></img>
            <p>CONAD Essentiae është një linjë produktesh bukurie që kujdeset për lëkurën falë ekstraktit natyral të përbërësve.</p>
            </div>
            <button className="conad-btn" onClick={()=>{navigate('/Essentiae')}}>Më shumë</button>
        </div>
     
        <div className="alimentum">
        <div className="alimentum-text">
            <img className="conad-alimentum" src="https://imgur.com/uLr0S9n.png" alt="alimentum"></img>
            <p>CONAD Baby është linja e produkteve për kujdesin e fëmijëve nga 0 deri në 6 vjeç: peceta, detergjent, vajra dhe kremra mbrojtës dhe pelena Dry-way</p>
            </div>
            <button className="conad-btn" onClick={()=>{navigate('/Conad-Baby')}}>Më shumë</button>
        </div>
  
        <div className="alimentum">
        <div className="alimentum-text">
            <img className="conad-alimentum" src="https://imgur.com/UqylS8A.png" alt="alimentum"></img>
            <p>Oferta e CONAD për botën e kafshëve shtëpiake pasurohet në shumëllojshmëri dhe receta.</p>
            </div>
            <button className="conad-btn" onClick={()=>{navigate('/Conad-Pet')}}>Më shumë</button>
        </div>
        <div className="alimentum">
        <div className="alimentum-text">
            <img className="conad-alimentum4" src={sapori} alt="alimentum"></img>
            <p>Linja CONAD Sapori&Dintorni përbëhet nga një përzgjedhje e gjerë e produktesh të paimitueshme sepse ato bëhen me lëndë të para lokale…</p>
            </div>
            <button className="conad-btn" onClick={()=>{navigate('/Sapori')}}>Më shumë</button>
        </div>
      

     
       

    </div>
    </div>
    <div className="footer-cnd">
      <FooterConad />
    </div>
    </>
    
}
export default HomePage;