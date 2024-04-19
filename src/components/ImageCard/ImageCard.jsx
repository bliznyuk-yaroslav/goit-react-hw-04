import { useState } from "react";

export default function ImageCard({items, imgItem}) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen =()=>{
    setIsOpen(!isOpen);
    imgItem(items);
  }
    return (
      <div>
      {isOpen === true && <img src={items.urls.full}
       alt={items.alt_description}
       onClick={toggleOpen} />}
     </div>
    );
  }