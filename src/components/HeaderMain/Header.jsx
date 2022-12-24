import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {useSelector,useDispatch} from 'react-redux'
import {logout} from '../../Lib/store/slices/auth'


import './Header.css'

function Header() {
  const auth = useSelector((state)=>state.auth.data);
  const dispatcher = useDispatch();


  return (
    <Navbar className="color-navbar"  expand="lg">
      <Container>
        <Navbar.Brand className="change-color" href="/">
          <img src="https://imgur.com/UO9BQn8.jpg" 

          className="navImage"
          alt="Conad logo"/></Navbar.Brand>
        <Navbar.Toggle className="change-background" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav id="#add-overflow" className="me-auto moveNavBar" >
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown  title="Produktet" id="basic-nav-dropdown">
              <div className="add-overflow">
              <NavDropdown title="Gastronomi" id="basic-nav-dropdown">
              <div className="move-left">
              <NavDropdown.Item href="/produktet/Gastronomi_Djath">Djathëra</NavDropdown.Item>
              <NavDropdown.Item href="/produktet/Gastronomi_Pershuta">Përshuta</NavDropdown.Item>
              <NavDropdown.Item href="/produktet/Gastronomi_Tjera">Tjera</NavDropdown.Item>
              </div>
                </NavDropdown>

             
            <NavDropdown title="Të freskëkta" id="basic-nav-dropdown">
              <div className="move-left">
              <NavDropdown.Item href="/produktet/Jogurta">Jogurta</NavDropdown.Item>
              <NavDropdown.Item href="/produktet/Djathe">
                Djathë
              </NavDropdown.Item>
              <NavDropdown.Item href="/produktet/Pershuta">Përshuta</NavDropdown.Item>
              <NavDropdown.Item href="/produktet/Fresk_Tjera">Fresk Tjera</NavDropdown.Item>
              

              </div>
             
          
            </NavDropdown>
            <NavDropdown title="Të ngrira" id="basic-nav-dropdown">
              <div className="move-left">
              <NavDropdown.Item href="/produktet/Pica">Pica</NavDropdown.Item>
              <NavDropdown.Item href="/produktet/Perime">
                Perime
              </NavDropdown.Item>
              <NavDropdown.Item href="/produktet/Mish">Mish</NavDropdown.Item>
              <NavDropdown.Item href="/produktet/Akullore">Akullore</NavDropdown.Item>
              <NavDropdown.Item href="/produktet/Produkte_deti">Produkte Deti</NavDropdown.Item>
              


              </div>
             
          
            </NavDropdown>
            <NavDropdown.Item href='/produktet/Pa_Laktoze'>Pa Laktozë</NavDropdown.Item>
            <NavDropdown.Item href='/produktet/Pa_Gluten'>Pa Gluten</NavDropdown.Item>
            <NavDropdown.Item href='/produktet/Produkte_Bio'>Produkte Bio</NavDropdown.Item>
            <NavDropdown title="Bukë dhe qumështa" id="basic-nav-dropdown">
              <div className="move-left">
              <NavDropdown.Item href="/produktet/Qumeshta">Qumështa</NavDropdown.Item>
              <NavDropdown.Item href="/produktet/Qumeshta_pa_laktoze">
                Qumështa pa laktozë
              </NavDropdown.Item>
              <NavDropdown.Item href="/produktet/Buke">Bukë</NavDropdown.Item>

              
             

              </div>
             
          
            </NavDropdown>

            <NavDropdown title="Të ëmbla" id="basic-nav-dropdown">
              <div className="move-left">
              <NavDropdown.Item href="/produktet/Karramele_dhe_Cokollata">Karramele dhe Çokollata</NavDropdown.Item>
              <NavDropdown.Item href="/produktet/Biskota">
              Biskota
              </NavDropdown.Item>
              <NavDropdown.Item href="/produktet/Mjalte_dhe_Recel">Mjaltë dhe Reçel</NavDropdown.Item>
              <NavDropdown.Item href="/produktet/Drithera">Drithëra</NavDropdown.Item>
              <NavDropdown.Item href="/produktet/Caj_dhe_kafe">Çaj dhe kafe</NavDropdown.Item>
              <NavDropdown.Item href="/produktet/Perberes_per_embelsira">Përbërës për ëmbëlsira</NavDropdown.Item>

              
          

              </div>
             
          
            </NavDropdown>
            <NavDropdown.Item href="/produktet/Te_njelmeta">Të njelmëta</NavDropdown.Item>
            <NavDropdown title="Ushqimore" id="basic-nav-dropdown">
              <div className="move-left">
              <NavDropdown.Item href="/produktet/Salsa">Salsa</NavDropdown.Item>
              <NavDropdown.Item href="/produktet/Pasta">
              Pasta
              </NavDropdown.Item>
              <NavDropdown.Item href="/produktet/Peshk">
              Peshk
              </NavDropdown.Item>
              <NavDropdown.Item href="/produktet/Perime">
              Perime
              </NavDropdown.Item>
              <NavDropdown.Item href="/produktet/Vaj_dhe_uthull">Vaj dhe uthull</NavDropdown.Item>
              <NavDropdown.Item href="/produktet/Oriz">Oriz</NavDropdown.Item>
              <NavDropdown.Item href="/produktet/Miell">Miell</NavDropdown.Item>
      

              
              

              </div>
             
          
            </NavDropdown>
            <NavDropdown title="Higjena" id="basic-nav-dropdown">
              <div className="move-left">
              <NavDropdown.Item href="/produktet/Higjena_shtepiake">Higjena shtëpiake</NavDropdown.Item>
              <NavDropdown.Item href="/produktet/Higjena_personale">
              Higjena personale
              </NavDropdown.Item>
              <NavDropdown.Item href="/produktet/Produkte_kafshe">Produkte kafshe</NavDropdown.Item>

      

              
           

              </div>
             
          
            </NavDropdown>
            <NavDropdown title="Pije jo alkolike" id="basic-nav-dropdown">
              <div className="move-left">
              <NavDropdown.Item href="/produktet/Te_gazuara">Të gazuara</NavDropdown.Item>
              <NavDropdown.Item href="/produktet/Energjetike">
              Energjetike
              </NavDropdown.Item>
              <NavDropdown.Item href="/produktet/Lengje_frutash">Lëngje Frutash</NavDropdown.Item>
              <NavDropdown.Item href="/produktet/Caj_i_ftohte">Çaj i ftohtë</NavDropdown.Item>
              <NavDropdown.Item href="/produktet/Uje">Uje</NavDropdown.Item>
      

              
      

              </div>
             
          
            </NavDropdown>
            <NavDropdown title="Pije alkolike" id="basic-nav-dropdown">
              <div className="move-left">
              <NavDropdown.Item href="/produktet/Vera">Vera</NavDropdown.Item>
              <NavDropdown.Item href="/produktet/Birra">
              Birra
              </NavDropdown.Item>
              <NavDropdown.Item href="/produktet/Pije_alkolike">Pije alkolike</NavDropdown.Item>

      

              
      

              </div>
             
          
            </NavDropdown>
            </div>
   
            </NavDropdown>
            <NavDropdown title="Markat tona" id="basic-nav-dropdown">
            <div className="add-overflow1">
              
            <NavDropdown title="VersoNatura" id="basic-nav-dropdown">
              <div className="move-left">
              <NavDropdown.Item href="/VersoNatura-Bio">VersoNatura Bio</NavDropdown.Item>
              <NavDropdown.Item href="/VersoNatura-Eco">
              VersoNatura Eco
              </NavDropdown.Item>
              <NavDropdown.Item href="/VersoNatura-Equo">VersoNatura Equo</NavDropdown.Item>
              <NavDropdown.Item href="/VersoNatura-Eco">VersoNatura Eco</NavDropdown.Item>
             
      

              
      

              </div>
             
          
            </NavDropdown>
            <NavDropdown title="Alimentum" id="basic-nav-dropdown">
              <div className="move-left">
              <NavDropdown.Item href="/Alimentum-PaGluten">Alimentum Senza Glutine</NavDropdown.Item>
              <NavDropdown.Item href="/Alimentum-PaLaktoze">
              Alimentum Senza Lattosio
              </NavDropdown.Item>


              
      

              </div>
             
          
            </NavDropdown>
                          <NavDropdown.Item href="/Piacersi">Conad Piacersi</NavDropdown.Item>
                          <NavDropdown.Item href="/Essentiae">Conad Essentiae</NavDropdown.Item>
                          <NavDropdown.Item href="/Conad-Baby">Conad Baby</NavDropdown.Item>
                          <NavDropdown.Item href="/Conad-Pet">Conad Petfriends</NavDropdown.Item>
                          <NavDropdown.Item href="/Sapori">Sapori Dintorni</NavDropdown.Item>

              
        </div>
            </NavDropdown>
            <Nav.Link className="add-cursor" href="/pikat">Pikat Tona</Nav.Link>
            <Nav.Link className="add-cursor" href="/komente">Komente</Nav.Link>
            {(auth!==null) ? (<>
            <Nav.Link className="add-cursor" onClick={()=>{
              dispatcher(logout());
            }} href="">Log out</Nav.Link>
            </>):(<>
            <Nav.Link className="add-cursor" href="/login">Login</Nav.Link>
            </>)}
         
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;