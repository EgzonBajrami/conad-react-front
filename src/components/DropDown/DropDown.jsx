import {useState} from 'react';
import {useNavigate} from 'react-router-dom'
import './DropDown.css'
const DropDown = () =>{
    const [sweet,setSweet] = useState(false);
    const [foods,setFoods] = useState(false);
    const [fresk,setFresk] = useState(false);
    const [ngrira,setNgrira] = useState(false);
    const [bread,setBread] = useState(false);
    const [higjena,setHigjena] = useState(false);
    const [drinks,setDrinks] = useState(false);
    const [alcohol,setAlcohol] = useState(false);
    const [gastro, setGastro] = useState(false);
    const navigate = useNavigate();
   
    return<>
       <div className="conad-dropdown" ><div className="products-title"
       ><h6>
        PRODUKTET TONA
        </h6></div>
        <div className="products-conad" onClick={()=>{ setHigjena(false);
        setGastro(!gastro);
        setSweet(false);
        setFoods(false);
        setFresk(false);
        setDrinks(false);
        setNgrira(false);
        setBread(false);}}><p>Gastronomia </p></div>
        {gastro &&(<>
            <div className="sub-wrapper">

<div className="sub-products" onClick={()=>{navigate('/produktet/Gastronomi_Djath',{state:{postData:"Djathera"}})}}>Djathëra</div>
<div className="sub-products" onClick={()=>{navigate('/produktet/Gastronomi_Pershuta',{state:{postData:"Pershuta"}})}}>Përshuta</div>
<div className="sub-products" onClick={()=>{navigate('/produktet/Gastronomi_Tjera',{state:{postData:"Tjera"}})}}>Tjera</div>


</div>
        </>)}
        <div className="products-conad" onClick={()=>{ setHigjena(false);
        setGastro(false);
        setSweet(false);
        setFoods(false);
        setFresk(!fresk);
        setDrinks(false);
        setNgrira(false);
        setBread(false);}}><p>Të freskëta </p></div>
        {fresk &&(<>
            <div className="sub-wrapper">

<div className="sub-products" onClick={()=>{navigate('/produktet/Jogurta',{state:{postData:"Jogurta"}})}}>Jogurta</div>
<div className="sub-products" onClick={()=>{navigate('/produktet/Djathe',{state:{postData:"Djathë"}})}}>Djathë</div>
<div className="sub-products" onClick={()=>{navigate('/produktet/Pershuta',{state:{postData:"Përshuta"}})}}>Përshuta</div>
<div className="sub-products" onClick={()=>{navigate('/produktet/Fresk_Tjera',{state:{postData:"Fresk Tjera"}})}}>Tjera</div>

</div>
        </>)}
        <div className="products-conad" onClick={()=>{ setHigjena(false);
        setSweet(false);
        setGastro(false);
        setFoods(false);
        setFresk(false);
        setDrinks(false);
        setAlcohol(false);
        setNgrira(!ngrira);
        setBread(false);}} ><p>Të ngrira </p></div>
        {ngrira &&(<>
            <div className="sub-wrapper">

<div className="sub-products" onClick={()=>{navigate('/produktet/Pica',{state:{postData:"Pica"}})}}>Pica</div>
<div className="sub-products" onClick={()=>{navigate('/produktet/Ngrira_Perime',{state:{postData:"Perime"}})}}>Perime</div>
<div className="sub-products" onClick={()=>{navigate('/produktet/Mish',{state:{postData:"Mish"}})}}>Mish</div>
<div className="sub-products" onClick={()=>{navigate('/produktet/Akullore',{state:{postData:"Akullore"}})}}>Akullore</div>
<div className="sub-products" onClick={()=>{navigate('/produktet/Produkte_deti',{state:{postData:"Produkte deti"}})}}>Produkte deti</div>

</div>
        </>)}
        <div className="products-conad" onClick={()=>{navigate('/produktet/Pa_Laktoze',{state:{postData:"Të freskëta"}})}}><p>Pa Laktozë </p></div>
       <div className="products-conad"onClick={()=>{navigate('/produktet/Pa_Gluten',{state:{postData:"Pa Gluten"}})}}><p>Pa Gluten </p></div>
       <div className="products-conad" onClick={()=>{navigate('/produktet/Produkte_Bio',{state:{postData:"Produkte Bio"}})}}><p>Produkte Bio </p></div>
       <div className="products-conad" onClick={()=>{ setHigjena(false);
        setSweet(false);
        setGastro(false);
        setFoods(false);
        setFresk(false);
        setDrinks(false);
        setAlcohol(false);
        setNgrira(false);
        setBread(!bread);}}><p>Bukë dhe qumeshta </p></div>
       {bread &&(<>
        <div className="sub-wrapper">

<div className="sub-products" onClick={()=>{navigate('/produktet/Qumeshta',{state:{postData:"Qumështa"}})}}>Qumështa</div>
<div className="sub-products" onClick={()=>{navigate('/produktet/Qumeshta_pa_laktoze',{state:{postData:"Qumështa pa laktozë"}})}}>Qumështa pa laktozë</div>
<div className="sub-products" onClick={()=>{navigate('/produktet/Buke',{state:{postData:"Bukë"}})}}>Bukë</div>


</div>
       </>)}
       <div className="products-conad" onClick={()=>{navigate('/produktet/Te_njelmeta',{state:{postData:"Të njelmëta "}})}}><p>Të njelmëta </p></div>

       <div className="products-conad" onClick={()=>{ setHigjena(false);
        setSweet(!sweet);
        setGastro(false);
        setFoods(false);
        setFresk(false);
        setDrinks(false);
        setAlcohol(false);
        setNgrira(false);
        setBread(false);}}><p>Te embla </p></div>
       {sweet &&(<>
       <div className="sub-wrapper">

       <div className="sub-products" onClick={()=>{navigate('/produktet/Karramele_dhe_Cokollata',{state:{postData:"Karramele dhe Çokollata"}})}}>Karramele dhe Çokollata</div>
       <div className="sub-products" onClick={()=>{navigate('/produktet/Biskota',{state:{postData:"Biskota"}})}}>Biskota</div>
       <div className="sub-products" onClick={()=>{navigate('/produktet/Mjalte_dhe_Recel',{state:{postData:"Mjaltë dhe Reçel"}})}}>Mjaltë dhe Reçel</div>
       <div className="sub-products" onClick={()=>{navigate('/produktet/Drithera',{state:{postData:"Drithëra"}})}}>Drithëra</div>
       <div className="sub-products" onClick={()=>{navigate('/produktet/Caj_dhe_kafe',{state:{postData:"Çaj dhe kafe"}})}}>Çaj dhe kafe</div>
       <div className="sub-products" onClick={()=>{navigate('/produktet/Perberes_per_emberlsira',{state:{postData:"Përbërës për ëmbërlsira"}})}}>Përbërës për ëmbërlsira</div>
       </div>
       </>)}
       <div className="products-conad" onClick={()=>{ setHigjena(false);
        setSweet(false);
        setGastro(false);
        setFoods(false);
        setFresk(false);
        setNgrira(false);
        setBread(false);
        setAlcohol(false);
        setDrinks(!drinks)}}><p>Pije jo alkolike </p></div>
        {drinks&&(<>
            <div className="sub-wrapper">

<div className="sub-products" onClick={()=>{navigate('/produktet/Te_gazuara',{state:{postData:"Të gazuara"}})}}>Të gazuara</div>
<div className="sub-products" onClick={()=>{navigate('/produktet/Energjetike',{state:{postData:"Energjetike"}})}}>Energjetike</div>
<div className="sub-products" onClick={()=>{navigate('/produktet/Lengje_frutash',{state:{postData:"Lëngje frutash"}})}}>Lëngje frutash</div>
<div className="sub-products" onClick={()=>{navigate('/produktet/Caj_i_ftohte',{state:{postData:"Çaj i ftohtë"}})}}>Çaj i ftohtë</div>
<div className="sub-products" onClick={()=>{navigate('/produktet/Uje',{state:{postData:"Uje"}})}}>Ujë</div>
</div>
        </>)}
        <div className="products-conad" onClick={()=>{ setHigjena(false);
        setSweet(false);
        setGastro(false);
        setFoods(false);
        setFresk(false);
        setNgrira(false);
        setBread(false);
        setAlcohol(!alcohol);
        setDrinks(false)}}><p>Pije Alkolike </p></div>
        {alcohol&&(<>
            <div className="sub-wrapper">

<div className="sub-products" onClick={()=>{navigate('/produktet/Vera',{state:{postData:"Vera"}})}}>Vera</div>
<div className="sub-products" onClick={()=>{navigate('/produktet/Birra',{state:{postData:"Birra"}})}}>Birra</div>
<div className="sub-products" onClick={()=>{navigate('/produktet/Pije_alkolike',{state:{postData:"Pije alkolike"}})}}>Pije alkolike</div>

</div>
        </>)}
       <div className="products-conad" onClick={()=>{ setHigjena(false);
        setSweet(false);
        setGastro(false);
        setDrinks(false);
        setFoods(!foods);
        setAlcohol(false);
        setFresk(false);
        setNgrira(false);
        setBread(false);}}><p>Ushqimore </p></div>
       {foods &&(<>
       <div className="sub-wrapper">

       <div className="sub-products" onClick={()=>{navigate('/produktet/Salsa',{state:{postData:"Salcë domatesh"}})}}>Salca</div>
       <div className="sub-products" onClick={()=>{navigate('/produktet/Pasta',{state:{postData:"Pasta"}})}}>Pasta</div>
       <div className="sub-products" onClick={()=>{navigate('/produktet/Peshk',{state:{postData:"Pasta"}})}}>Peshk</div>
       <div className="sub-products" onClick={()=>{navigate('/produktet/Perime',{state:{postData:"Pasta"}})}}>Perime</div>
       <div className="sub-products" onClick={()=>{navigate('/produktet/Supa',{state:{postData:"Pasta"}})}}>Supa</div>
       <div className="sub-products" onClick={()=>{navigate('/produktet/Vaj_dhe_uthull',{state:{postData:"Vaj dhe uthull"}})}}>Vaj dhe uthull</div>
       <div className="sub-products" onClick={()=>{navigate('/produktet/Oriz',{state:{postData:"Oriz"}})}}>Oriz</div>
       <div className="sub-products" onClick={()=>{navigate('/produktet/Miell',{state:{postData:"Miell"}})}}>Miell</div>
       </div>
       </>)}
       <div className="products-conad" onClick={()=>{
        setHigjena(!higjena);
        setGastro(false);
        setSweet(false);
        setFoods(false);
        setFresk(false);
        setNgrira(false);
        setDrinks(false);
        setAlcohol(false);
        setBread(false);
       }}><p>Higjena </p></div>
       {higjena&&(<>
        <div className="sub-wrapper">

       <div className="sub-products" onClick={()=>{navigate('/produktet/Higjena_shtepiake',{state:{postData:"Higjena shtëpiake"}})}}>Higjena shtëpiake</div>
       <div className="sub-products" onClick={()=>{navigate('/produktet/Higjena_personale',{state:{postData:"Higjena personale"}})}}>Higjena personale</div>
       <div className="sub-products" onClick={()=>{navigate('/produktet/Produkte_kafshe',{state:{postData:"Produkte kafshe"}})}}>Produkte kafshe</div>

       </div>
       </>)}
       


</div>

    </>
}
export default DropDown;