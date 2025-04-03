import { useState } from "react";
import {nine} from '../components/Assets/le/9_le/9_le'
import Item from "../components/Item/Item";
import './css/Nine.css'

const itemsPerPage = 9;

const Nine = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(nine.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = nine.slice(startIndex, startIndex + itemsPerPage);

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
    <div className='nine'>
      <h1>TRÁP 9 LỄ</h1>
      <hr></hr>
      <div className="nine-item">
        {currentItems.map((item, index) => (
           <Item key={index} id={item.id} name={item.name} image={item.image}></Item>
        ))}
      </div>
      <div className="nine-page">
        <button 
          onClick={handlePrevPage} 
          disabled={currentPage === 1} 
          className="nine-button-before"
        >
          Trước
        </button>
        <span className="nine-text-page">Trang {currentPage} của {totalPages}</span>
        <button 
          onClick={handleNextPage} 
          disabled={currentPage === totalPages} 
          className="nine-button-after"
        >
          Sau
        </button>
      </div>
    </div>
  )
}
export default Nine;