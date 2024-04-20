import { useState } from "react";
import css from "./ImageCard.module.css"

export default function ImageCard({item, openModal}) {

    return (
      <div className={css.elements}>
         <img
         
          src={item.urls.small} 
          alt="{item.alt_description}" 
          className={css.photo}
          onClick={()=>openModal(item)}
          />
     </div>
    );
  }
  // onClick={() => imgItem(item)}