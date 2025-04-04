import { useState } from "react";
import {dam_ngo} from '../components/Assets/dam_ngo'
import Item from "../components/Item/Item";
import './css/Dam_ngo.css'

const itemsPerPage = 9;

const Dam_ngo = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(dam_ngo.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = dam_ngo.slice(startIndex, startIndex + itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className='dam-ngo'>
      <h1>LỄ DẠM NGÕ</h1>
      <hr></hr>
      <div className="dam-ngo-item">
        {currentItems.map((item, index) => (
           <Item key={index} id={item.id} name={item.name} image={item.image}></Item>
        ))}
      </div>
      <div className="dam-ngo-page">
        <button 
          onClick={handlePrevPage} 
          disabled={currentPage === 1} 
          className="dam-ngo-button-before"
        >
          Trước
        </button>
        <span className="dam-ngo-text-page">Trang {currentPage} của {totalPages}</span>
        <button 
          onClick={handleNextPage} 
          disabled={currentPage === totalPages} 
          className="dam-ngo-button-after"
        >
          Sau
        </button>
      </div>
    </div>
  )
}
export default Dam_ngo;