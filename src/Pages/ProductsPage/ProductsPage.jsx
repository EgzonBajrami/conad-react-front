import {useLocation} from 'react-router-dom'
import {useEffect,useState,useMemo} from 'react';
import {api,endpoints} from '../../Lib/Api'
import ProductsContainer from '../../components/ProductsContainer/ProductsContainer';
import DropDown from '../../components/DropDown/DropDown';
import SearchBar from '../../components/SearchBar/SearchBar';
import SearchBarBarcode from '../../components/SearchBarBarcode/SearchBarBarcode';
import FooterConad from '../../components/FooterConad/FooterConad';
import conadhand from '../../assets/images/conadhand.jpg'
import artistet from '../../assets/images/artistet.jpg'



import './ProductsPage.css'

const ProductsPage = () =>{
    const location = useLocation();
    let postData = location.pathname.split('/')[2];

    if(postData==='Vaj_dhe_uthull'){
      postData = 'Vaj dhe uthull'
    }

    console.log(postData);
    const [data,setData] = useState([]);
    const [search,setSearch] = useState([]);
    const config = useMemo(()=>{
        return {
  
          params:[postData]
        }
  
      },[postData])
    useEffect(()=>{
        const getData = async () =>{
            const result = await api.call(endpoints.getProducts,config);
            console.log(result);
            if(result.success){
                setData(result.data);
                setSearch(result.data);
            }

        }
        window.scrollTo(0, 0)
        getData();

    },[config])
    const filterSearch = (searchQuery) => {
        if(!searchQuery){
          setData(search)
          return
        }
        const filteredSuperheros = search.filter((elem) => elem.title.toLowerCase().includes(searchQuery.toLowerCase()))
        setData(filteredSuperheros)
      } 
      const filterSearchBarcode = (searchQuery) => {
        if(!searchQuery){
          setData(search)
          return
        }
        const filteredSuperheros = search.filter((elem) => elem.barcode.toString().includes(searchQuery))
        setData(filteredSuperheros)
      } 
    console.log(data);
    return <>
    <div className="wrapper-hand">
    <div className="conad-hand">
      <img src={conadhand} alt="products" />
    </div>
    <div className="conad-artist">
      <img src={artistet} alt="artistet" />
    </div>

    </div>
   
    <div className="filter-div">
        <div className="first-search">

    <SearchBar filterSearch={filterSearch} />
        </div>
        <div className="second-search">

    <SearchBarBarcode filterSearch={filterSearchBarcode} />
        </div>
    </div>
    
    <div className="wrapper-elem2">
   
        <div className="product-dropdown">
            <div className="dropdown-wrappers">
                <DropDown />
            </div>
            <div className="elem-wrapper2">
                <ProductsContainer data={data}/>

            </div>
        </div>
    </div>
    <div className="footer-cnd2">
      <FooterConad />
    </div>
    </>

}
export default ProductsPage;