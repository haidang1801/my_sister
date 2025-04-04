import { useState } from "react";
import {fine} from '../components/Assets/le/fine'
import Item from "../components/Item/Item";
import './css/Fine.css'

const itemsPerPage = 9;

const Fine = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(fine.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = fine.slice(startIndex, startIndex + itemsPerPage);

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
    <div className='fine'>
      <h1>TRÁP 5 LỄ</h1>
      <hr></hr>
      <div className="fine-item">
        {currentItems.map((item, index) => (
           <Item key={index} id={item.id} name={item.name} image={item.image}></Item>
        ))}
      </div>
      <div className="fine-page">
        <button 
          onClick={handlePrevPage} 
          disabled={currentPage === 1} 
          className="fine-button-before"
        >
          Trước
        </button>
        <span className="fine-text-page">Trang {currentPage} của {totalPages}</span>
        <button 
          onClick={handleNextPage} 
          disabled={currentPage === totalPages} 
          className="fine-button-after"
        >
          Sau
        </button>
      </div>
    </div>
  )
}
export default Fine;