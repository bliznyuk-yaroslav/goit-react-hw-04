import css from "./ImageGallery.module.css"
import ImageCard from "../ImageCard/ImageCard"
export default function ImageGallery({items, openModal}) {


    return (
      <div >
      <ul className={css.cont}>
      {items.map((item)=>(
      <li key={item.id} className={css.item}>
    <ImageCard item ={item} openModal={openModal} />
      </li>))}
    </ul>
    
    </div>
    );
  }