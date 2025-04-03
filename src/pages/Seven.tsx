import { useState } from "react";
import {seven} from '../components/Assets/le/7_le/7_le'
import Item from "../components/Item/Item";
import './css/Seven.css'

const itemsPerPage = 9;

const Seven = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(seven.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = seven.slice(startIndex, startIndex + itemsPerPage);

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
    <div className='seven'>
      <h1>TRÁP 7 LỄ</h1>
      <hr></hr>
      <div className="seven-item">
        {currentItems.map((item, index) => (
           <Item key={index} id={item.id} name={item.name} image={item.image}></Item>
        ))}
      </div>
      <div className="seven-page">
        <button 
          onClick={handlePrevPage} 
          disabled={currentPage === 1} 
          className="seven-button-before"
        >
          Trước
        </button>
        <span className="seven-text-page">Trang {currentPage} của {totalPages}</span>
        <button 
          onClick={handleNextPage} 
          disabled={currentPage === totalPages} 
          className="seven-button-after"
        >
          Sau
        </button>
      </div>
    </div>
  )
}
export default Seven;