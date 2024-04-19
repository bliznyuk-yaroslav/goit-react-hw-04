import { useEffect, useState } from "react";
import ImageGallery from "../ImageGallary/ImageGallery";
import SearchBar from "../SearchBar/SearchBar"
import Loader from "../Loader/Loader"
import ErrorMessage from "../ErrorMessage/ErrorMessage"
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn"
import css from "./App.module.css"
import {fetchImages} from "../showImage"

export default function App() {
  const [article, setArticle] = useState([]);
  const [isLoader , setIsLoader] = useState(false)
  const [error, setError]=useState(false)

  
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

  const showImg = (id) => {
    setArticle(id);
    console.log(id)
  };

  const handleSearch =(newQuery)=>{
    setQuery(newQuery);
    setPage(1);
    setArticle([]);
  };

  const hanleLoadMore =()=>{
    setPage(page+1);
  }

  useEffect(()=>{
    if(query===""){
      return;
    }
    async function getNewImages(){
      try {
        setError(false);
        setIsLoader(true);
        const data = await fetchImages(query, page);
        setArticle((prevArticles) => {
          return [...prevArticles, ...data];
        });
      } catch (error) {
        setError(true);
      } finally {
        setIsLoader(false);
      }
    }
    getNewImages();
  },[page,query])

  return (
    <div className={css.cont}>
    
    <SearchBar onSearch ={handleSearch}/>

    {error &&  <ErrorMessage/>}
    {isLoader &&  <Loader/>}
   
    {article.length > 0 && <ImageGallery items={article} imgItem={showImg}/>}
    {article.length > 0 && !isLoader && (<LoadMoreBtn onLoad ={hanleLoadMore}/>)}
    </div>
  );
}