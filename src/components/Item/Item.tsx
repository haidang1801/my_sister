import './Item.css';
const Item = (props: any) => {

  const sendImage = () => {
    var imageLink = `https://hoang-ngan-wedding.vercel.app/${props.image}`;
    var appId = "2493083654376489";
    var redirectUri = `https://hoang-ngan-wedding.vercel.app/${props.image}`;

    var messengerUrl = `https://www.facebook.com/dialog/send?
        app_id=${appId}
        &link=${encodeURIComponent(imageLink)}
        &redirect_uri=${encodeURIComponent(redirectUri)}`;

        window.open(messengerUrl, "_blank");
        
  }

  return (
    <div className='item'>
      <img src={props.image} alt={props.name} ></img>
      <div className="item-properties">
        <p className='item-text'>{props.name}</p>
        <button className='item-button' onClick={sendImage}>Gửi ảnh</button>
      </div>
    </div>
  )
}
export default Item;
