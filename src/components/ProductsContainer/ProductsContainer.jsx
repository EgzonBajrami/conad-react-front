import './ProductsContainer.css'
import {useState} from 'react';
import ReactPaginate from 'react-paginate'
import SingleProduct from '../SingleProduct/SingleProduct';

const ProductsContainer = ({data}) =>{
    console.log(data);
    const [id,setId] = useState('');
    const [modalShow, setModalShow] = useState(false);
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + 18;
    const currentItems = data.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(data.length / 18);
    const handlePageClick = (event) => {
      window.scrollTo(0,0);
      const newOffset = (event.selected * 18) % data.length;
      console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
      );
      setItemOffset(newOffset);
    };
    console.log(id);

  
    return <>
  
    <div className="products-data-container">
  
     {currentItems &&currentItems.map((elem)=>(
        <>
        <div className="products-data-wrapper">
            <div className="products-data-image">
            <img src={process.env.REACT_APP_API_URL + elem.images[0]} alt="first-img" />
            </div>
            <div className="products-data-title">
                <p>{elem.title}</p>
            </div>
            <div className="read-more"
            onClick={()=>{
               
                setId(elem._id)
                setModalShow(!modalShow)}}>
                    <p>Më shumë</p>
           
     {id===elem._id&&(
                   <SingleProduct  show={modalShow}
                   onHide={() => {setModalShow(!modalShow)
                  setId('0')} }
                    data={elem} />

             )}

         
            </div>
        </div>
        </>
     ))}
   

    </div>
    <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={1}
marginPagesDisplayed={1}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />
    </>

}
export default ProductsContainer;