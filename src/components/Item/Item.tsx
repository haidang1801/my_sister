import './Item.css';
const Item = (props: any) => {
  return (
    <div className='item'>
      <img src={props.image} alt='' ></img>
      <div className="item-properties">
        <p className='item-text'>{props.name}</p>
        <button className='item-button'>Gửi ảnh</button>
      </div>
    </div>
  )
}
export default Item;
