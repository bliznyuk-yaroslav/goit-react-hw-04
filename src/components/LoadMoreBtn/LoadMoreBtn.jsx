import css from "./LoadMoreBtn.module.css"
export default function LoadMoreBtn({onLoad}) {

  
    return (
      <button className={css.btn} onClick={onLoad}>Load more</button>
    );
  }