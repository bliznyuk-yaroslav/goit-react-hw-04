import css from "./ImageGallery.module.css"
import ImageCard from "../ImageCard/ImageCard"
export default function ImageGallery({items, imgItem}) {

  const handleImageClick = (id) => {
    imgItem(id);
  };
    return (
      <div >
      <ul className={css.cont}>
      {items.map((item)=>(
      <li key={item.id} className={css.item}>
        <div className={css.elements}>
          <img
          src={item.urls.small} 
          alt="" 
          className={css.photo}
          onClick={() => imgItem(item.id)}/>
        </div>
        <ImageCard items ={item} imgItem={imgItem}/>
      </li>))}
    </ul>
    
    </div>
    );
  }