
import {useState} from 'react';
import {Form,Button} from 'react-bootstrap'
import {api,endpoints} from '../../Lib/Api'
import './JobApplication.css'
const JobApplication = () =>{
    const [firstPage,setFirstPage] = useState(true);
    const [secondPage,setSecondPage] = useState(false);
    const [thirdPage,setThirdPage] = useState(false);
    const [position,setPosition] = useState('');
    const [name,setName] = useState('');
    const [surname,setSurname] = useState('');
    const [date,setDate] = useState();
    const [birthplace,setBirthplace] = useState('');
    const [married,setMarried] = useState('');
    const [children,setChildren] = useState();
    const [personalId,setPersonalId] = useState();
    const [address,setAddress] = useState('');
    const [telephone,setTelephone] = useState('');
    const [email,setEmail] = useState('');
    const [albanianW,setAlbanianW] = useState('');
    const [serbeW,setSerbeW] = useState('');
    const [englishW,setEnglishW] = useState('');
    const [italianW,setItalianW] = useState('');
    const [albanianR,setAlbanianR] = useState('');
    const [serbeR,setSerbeR] = useState('');
    const [englishR,setEnglishR] = useState('');
    const [italianR,setItalianR] = useState('');
    const [word,setWord] = useState('');
    const [excel,setExcel] = useState('');
    const[powerpoint,setPowerpoint] = useState('');
    const [access,setAccess] = useState('');
    const [windows,setWindows] = useState('');
    const [internetexp,setInternetExp] = useState('');
    const [outlook,setOutlook] = useState('');
    const [visualbasic,setVisualBasic] = useState('');
    const [school,setSchool] = useState('');
    const [university,setUniversity] = useState('');
    const [training,setTraining] = useState('');
    const [tjera,setTjera] = useState('');
    const [puna1,setPuna1] = useState('');
    const [inst1,setInst1] = useState('');
    const [pershk1,setPershk1] = useState('');
    const [datap1,setDatap1] = useState('');
    const [dataf1,setDataf1] = useState('');
    const [puna2,setPuna2] = useState('');
    const [inst2,setInst2] = useState('');
    const [pershk2,setPershk2] = useState('');
    const [datap2,setDatap2] = useState('');
    const [dataf2,setDataf2] = useState('');
    
    const handleSubmit = async(e)=>{
        e.preventDefault();
    
            setFirstPage(!firstPage)
            setSecondPage(!secondPage);
      
    }
    const handleSubmit2 = async(e) =>{
        e.preventDefault();
        setSecondPage(false);
        setThirdPage(true);
    }
    const handleSubmit3 = async(e) =>{
        e.preventDefault();
        const config = {

        }
        const data = {
            position,
            name,
            surname,
            date,
            birthplace,
            married,
            children,
            personalId,
            address,
            telephone,
            email,
            albanianW,
            serbeW,
            englishW,
            italianW,
            albanianR,
            serbeR,
            englishR,
            italianR,
            word,
            excel,
            powerpoint,
            access,
            windows,
            internetexp,
            outlook,
            visualbasic,
            school,
            university,
            training,
            tjera,
            puna1,
            inst1,
            pershk1,
            datap1,
            dataf1,
            puna2,
            inst2,
            pershk2,
            datap2,
            dataf2

        }
        config.data = data;
        const result = await api.call(endpoints.createApplication,config);
        console.log(result);

    }
    return <>
    <div className="wrapper-app">



    {firstPage &&(<>
        <Form className="align-form" onSubmit={handleSubmit}>
    <div className="heading-form">

    </div>
        <Form.Group className="mb-3">
                <Form.Label>
                    Pozita për të cilën aplikoni:
                </Form.Label>
                <input 
                type="text"
                required
                className="form-control"
                value={position}
                onChange={(e)=>{
                    setPosition(e.target.value)
                }}
                placeholder="Pozita"
                />
            </Form.Group>
            <div className="personalInfo">
                <div className="personalInfo-title">
                    <p>Informacione personale</p>
                </div>

            <div className="personalInfo-body">

         
            <Form.Group className="mb-3">
                <Form.Label>
                    Emri:
                </Form.Label>
                <input 
                type="text"
                required
                className="form-control"
                value={name}
                onChange={(e)=>{
                    setName(e.target.value)
                }}
                placeholder="Emri"
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>
                    Mbiemri:
                </Form.Label>
                <input 
                type="text"
                required
                className="form-control"
                value={surname}
                onChange={(e)=>{
                    setSurname(e.target.value)
                }}
                placeholder="Mbiemri"
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>
                    Data e lindjes:
                </Form.Label>
                <input 
                type="date"
                required
                className="form-control"
                value={date}
                onChange={(e)=>{
                    setDate(e.target.value)
                }}
                placeholder="Data e lindjes"
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>
                    Vendi i lindjes:
                </Form.Label>
                <input 
                type="text"
                required
                className="form-control"
                value={birthplace}
                onChange={(e)=>{
                    setBirthplace(e.target.value)
                }}
                placeholder="Vendi i lindjes"
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>
                    Statusi martesor:
                </Form.Label>
                <input 
                type="text"
                required
                className="form-control"
                value={married}
                onChange={(e)=>{
                    setMarried(e.target.value)
                }}
                placeholder="Statusi martesor"
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>
                    Numri i fëmijëve nën moshën 18 vjeç:
                </Form.Label>
                <input 
                type="number"
                required
                className="form-control"
                value={children}
                onChange={(e)=>{
                    setChildren(e.target.value)
                }}
                placeholder="Numri i fëmijëve nën moshën 18 vjeç"
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>
                    Numri i ID:
                </Form.Label>
                <input 
                type="number"
                required
                className="form-control"
                value={personalId}
                onChange={(e)=>{
                    setPersonalId(e.target.value)
                }}
                placeholder="Numri personal i letërnjoftimit:"
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>
                   Adresa:
                </Form.Label>
                <input 
                type="text"
                required
                className="form-control"
                value={address}
                onChange={(e)=>{
                    setAddress(e.target.value)
                }}
                placeholder="Adresa:"
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>
                   Numri i telefonit:
                </Form.Label>
                <input 
                type="text"
                required
                className="form-control"
                value={telephone}
                onChange={(e)=>{
                    setTelephone(e.target.value)
                }}
                placeholder="Numri i telefonit:"
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>
                   Email:
                </Form.Label>
                <input 
                type="email"
                required
                className="form-control"
                value={email}
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}
                placeholder="Email:"
                />
            </Form.Group>
            </div>
            <div className="personalInfo-title"><p>Gjuhet</p></div>
            <div className="personalInfo-title"><p>E shkruarë</p></div>

            <div className="personalInfo-body">
                
            <Form.Group className="mb-3">
                <Form.Label>
                   Shqipe:
                </Form.Label>
                <Form.Select
                      value={albanianW}
                      required
                      onChange={(e)=>{setAlbanianW(e.target.value)}} aria-label="Default select example">
      <option>Shqipe</option>
      <option value="Shkëlqyeshëm">Shkëlqyeshëm</option>
      <option value="Mirë">Mirë</option>
      <option value="Fillestar">Fillestar</option>
      <option value="Jo">Jo</option>
      
    </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>
                   Serbe:
                </Form.Label>
                <Form.Select 
                                      value={serbeW}
                                      required
                                      onChange={(e)=>{setSerbeW(e.target.value)}}
                aria-label="Default select example">
      <option>Serbe</option>
      <option value="Shkëlqyeshëm">Shkëlqyeshëm</option>
      <option value="Mirë">Mirë</option>
      <option value="Fillestar">Fillestar</option>
      <option value="Jo">Jo</option>
      
    </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>
                   Angleze:
                </Form.Label>
                <Form.Select
                                                      value={englishW}
                                                      required
                                                      onChange={(e)=>{setEnglishW(e.target.value)}}
                 aria-label="Default select example">
      <option>Angleze</option>
      <option value="Shkëlqyeshëm">Shkëlqyeshëm</option>
      <option value="Mirë">Mirë</option>
      <option value="Fillestar">Fillestar</option>
      <option value="Jo">Jo</option>
      
    </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>
                   Italiane:
                </Form.Label>
                <Form.Select
                
                value={italianW}
                required
                onChange={(e)=>{setItalianW(e.target.value)}}
                 aria-label="Default select example">
      <option>Italiane</option>
      <option value="Shkëlqyeshëm">Shkëlqyeshëm</option>
      <option value="Mirë">Mirë</option>
      <option value="Fillestar">Fillestar</option>
      <option value="Jo">Jo</option>
      
    </Form.Select>
            </Form.Group>

            </div>

            <div className="personalInfo-title"><p>E folur</p></div>

            <div className="personalInfo-body">
                
                        
            <Form.Group className="mb-3">
                <Form.Label>
                   Shqipe:
                </Form.Label>
                <Form.Select
                      value={albanianR}
                      required
                      onChange={(e)=>{setAlbanianR(e.target.value)}} aria-label="Default select example">
      <option>Shqipe</option>
      <option value="Shkëlqyeshëm">Shkëlqyeshëm</option>
      <option value="Mirë">Mirë</option>
      <option value="Fillestar">Fillestar</option>
      <option value="Jo">Jo</option>
      
    </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>
                   Serbe:
                </Form.Label>
                <Form.Select 
                                      value={serbeR}
                                      required
                                      onChange={(e)=>{setSerbeR(e.target.value)}}
                aria-label="Default select example">
      <option>Serbe</option>
      <option value="Shkëlqyeshëm">Shkëlqyeshëm</option>
      <option value="Mirë">Mirë</option>
      <option value="Fillestar">Fillestar</option>
      <option value="Jo">Jo</option>
      
    </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>
                   Angleze:
                </Form.Label>
                <Form.Select
                                                      value={englishR}
                                                      required
                                                      onChange={(e)=>{setEnglishR(e.target.value)}}
                 aria-label="Default select example">
      <option>Angleze</option>
      <option value="Shkëlqyeshëm">Shkëlqyeshëm</option>
      <option value="Mirë">Mirë</option>
      <option value="Fillestar">Fillestar</option>
      <option value="Jo">Jo</option>
      
    </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>
                   Italiane:
                </Form.Label>
                <Form.Select
                
                value={italianR}
                required
                onChange={(e)=>{setItalianR(e.target.value)}}
                 aria-label="Default select example">
      <option>Italiane</option>
      <option value="Shkëlqyeshëm">Shkëlqyeshëm</option>
      <option value="Mirë">Mirë</option>
      <option value="Fillestar">Fillestar</option>
      <option value="Jo">Jo</option>
      
    </Form.Select>
            </Form.Group>
            </div>
            <Button type="submit" >Next</Button>
            </div>
            </Form>
     </>)
    }
    {secondPage &&(<>
        <Form className="align-form" onSubmit={handleSubmit2}>
        <div className="personalInfo">
                <div className="personalInfo-title">
                    <p>Njohuri kompjuterike</p>
                </div>

            <div className="personalInfo-body">
            <Form.Group className="mb-3">
                <Form.Label>
                   Word:
                </Form.Label>
                <Form.Select
                                value={word}
                                required
                                onChange={(e)=>{setWord(e.target.value)}}
                 aria-label="Default select example">
      <option>Word</option>
      <option value="Shkëlqyeshëm">Përparuar</option>
      <option value="Mirë">Njohuri për të punuar</option>
      <option value="Fillestar">Fillestar</option>
      <option value="Jo">Jo</option>
      
    </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>
                   Excel:
                </Form.Label>
                <Form.Select
                                value={excel}
                                required
                                onChange={(e)=>{setExcel(e.target.value)}}
                 aria-label="Default select example">
      <option>Excel</option>
      <option value="Shkëlqyeshëm">Përparuar</option>
      <option value="Mirë">Njohuri për të punuar</option>
      <option value="Fillestar">Fillestar</option>
      <option value="Jo">Jo</option>
      
    </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>
                   PowerPoint:
                </Form.Label>
                <Form.Select
                                value={powerpoint}
                                required
                                onChange={(e)=>{setPowerpoint(e.target.value)}}
                 aria-label="Default select example">
      <option>PowerPoint</option>
      <option value="Shkëlqyeshëm">Përparuar</option>
      <option value="Mirë">Njohuri për të punuar</option>
      <option value="Fillestar">Fillestar</option>
      <option value="Jo">Jo</option>
      
    </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>
                   Access:
                </Form.Label>
                <Form.Select
                                value={access}
                                required
                                onChange={(e)=>{setAccess(e.target.value)}}
                 aria-label="Default select example">
      <option>Access</option>
      <option value="Shkëlqyeshëm">Përparuar</option>
      <option value="Mirë">Njohuri për të punuar</option>
      <option value="Fillestar">Fillestar</option>
      <option value="Jo">Jo</option>
      
    </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>
                   Windows:
                </Form.Label>
                <Form.Select
                                value={windows}
                                required
                                onChange={(e)=>{setWindows(e.target.value)}} aria-label="Default select example">
      <option>Windows</option>
      <option value="Shkëlqyeshëm">Përparuar</option>
      <option value="Mirë">Njohuri për të punuar</option>
      <option value="Fillestar">Fillestar</option>
      <option value="Jo">Jo</option>
      
    </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>
                   Internet Explorer:
                </Form.Label>
                <Form.Select
                                value={internetexp}
                                required
                                onChange={(e)=>{setInternetExp(e.target.value)}}
                 aria-label="Default select example">
      <option>Internet Explorer</option>
      <option value="Shkëlqyeshëm">Përparuar</option>
      <option value="Mirë">Njohuri për të punuar</option>
      <option value="Fillestar">Fillestar</option>
      <option value="Jo">Jo</option>
      
    </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>
                   Outlook Express:
                </Form.Label>
                <Form.Select
                                value={outlook}
                                required
                                onChange={(e)=>{setOutlook(e.target.value)}}
                 aria-label="Default select example">
      <option>Outlook Express</option>
      <option value="Shkëlqyeshëm">Përparuar</option>
      <option value="Mirë">Njohuri për të punuar</option>
      <option value="Fillestar">Fillestar</option>
      <option value="Jo">Jo</option>
      
    </Form.Select>
            </Form.Group>
             <Form.Group className="mb-3">
                <Form.Label>
                   Visual Basic:
                </Form.Label>
                <Form.Select
                                value={visualbasic}
                                required
                                onChange={(e)=>{setVisualBasic(e.target.value)}}
                
                aria-label="Default select example">
      <option>Visual Basic</option>
      <option value="Shkëlqyeshëm">Përparuar</option>
      <option value="Mirë">Njohuri për të punuar</option>
      <option value="Fillestar">Fillestar</option>
      <option value="Jo">Jo</option>
      
    </Form.Select>
            </Form.Group>
 

            
                </div>
                </div>
                <div className="personalInfo">
                <div className="personalInfo-title">
                    <p>Shëno shkollën dhe vendin, vitet e përfunduara,drejtimin dhe certifikatat apo diplomat e marrura.</p>
                </div>

                <div className="personalInfo-body">

                
                <Form.Group className="mb-3">
                <Form.Label>
                   Shkolla e mesme:
                </Form.Label>
                <input 
                type="text"
                required
                className="form-control"
                value={school}
                onChange={(e)=>{
                    setSchool(e.target.value)
                }}
                placeholder="Shkolla e mesme:"
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>
                   Universiteti:
                </Form.Label>
                <input 
                type="text"
                required
                className="form-control"
                value={university}
                onChange={(e)=>{
                    setUniversity(e.target.value)
                }}
                placeholder="Universiteti:"
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>
                   Trajnimet:
                </Form.Label>
                <input 
                type="text"
                required
                className="form-control"
                value={training}
                onChange={(e)=>{
                    setTraining(e.target.value)
                }}
                placeholder="Trajnimet e kryera:"
                />

            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>
                   Tjera:
                </Form.Label>
                <input 
                type="text"
                required
                className="form-control"
                value={tjera}
                onChange={(e)=>{
                    setTjera(e.target.value)
                }}
                placeholder="Tjera:"
                />
            </Form.Group>
            </div>
          
            </div>
            <div className="btns-container">

           
            <Button onClick={()=>{
                setFirstPage(!firstPage)
                setSecondPage(!secondPage)
            }}>Previous</Button>
            <Button type="submit">Next</Button>

            </div>
           
            </Form>
            
     </>)
    }
    {thirdPage &&(<>
        <Form className="align-form" onSubmit={handleSubmit3}>
        <div className="personalInfo">
                <div className="personalInfo-title">
                    <p>Pervoja pune</p>
                </div>

            <div className="personalInfo-body">
            <Form.Group className="mb-3">
                <Form.Label>
                   Titulli i pozites:
                </Form.Label>
                <input 
                type="text"
                required
                className="form-control"
                value={puna1}
                onChange={(e)=>{
                    setPuna1(e.target.value)
                }}
                placeholder="Titulli i pozites:"
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>
                   Institucioni:
                </Form.Label>
                <input 
                type="text"
                required
                className="form-control"
                value={inst1}
                onChange={(e)=>{
                    setInst1(e.target.value)
                }}
                placeholder="Institucioni:"
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>
                   Përshkrimi i detyrave:
                </Form.Label>
                <input 
                type="text"
                required
                className="form-control"
                value={pershk1}
                onChange={(e)=>{
                    setPershk1(e.target.value)
                }}
                placeholder="Përshkrimi i detyrave:"
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>
                   Data e punësimit:
                </Form.Label>
                <input 
                type="date"
                required
                className="form-control"
                value={datap1}
                onChange={(e)=>{
                    setDatap1(e.target.value)
                }}
                placeholder="Data e punësimit:"
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>
                 Data e përfundimit:
                </Form.Label>
                <input 
                type="date"
                required
                className="form-control"
                value={dataf1}
                onChange={(e)=>{
                    setDataf1(e.target.value)
                }}
                placeholder="Data e përfundimit:"
                />
            </Form.Group>
                </div>
                <div className="personalInfo-body">
            <Form.Group className="mb-3">
                <Form.Label>
                   Titulli i pozites:
                </Form.Label>
                <input 
                type="text"
                required
                className="form-control"
                value={puna2}
                onChange={(e)=>{
                    setPuna2(e.target.value)
                }}
                placeholder="Titulli i pozites:"
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>
                   Institucioni:
                </Form.Label>
                <input 
                type="text"
                required
                className="form-control"
                value={inst2}
                onChange={(e)=>{
                    setInst2(e.target.value)
                }}
                placeholder="Institucioni:"
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>
                   Përshkrimi i detyrave:
                </Form.Label>
                <input 
                type="text"
                required
                className="form-control"
                value={pershk2}
                onChange={(e)=>{
                    setPershk2(e.target.value)
                }}
                placeholder="Përshkrimi i detyrave:"
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>
                   Data e punësimit:
                </Form.Label>
                <input 
                type="date"
                required
                className="form-control"
                value={datap2}
                onChange={(e)=>{
                    setDatap2(e.target.value)
                }}
                placeholder="Data e punësimit:"
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>
                 Data e përfundimit:
                </Form.Label>
                <input 
                type="date"
                required
                className="form-control"
                value={dataf2}
                onChange={(e)=>{
                    setDataf2(e.target.value)
                }}
                placeholder="Data e përfundimit:"
                />
            </Form.Group>
                </div>
                <Button type="submit">Dërgo</Button>
         
                </div>


            </Form>
     </>)
    }
   
        </div>
    </>
}
export default JobApplication;