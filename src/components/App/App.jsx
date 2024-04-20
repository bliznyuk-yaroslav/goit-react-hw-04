import { useEffect, useState } from "react";

import ImageGallery from "../ImageGallary/ImageGallery";
import SearchBar from "../SearchBar/SearchBar"
import Loader from "../Loader/Loader"
import ErrorMessage from "../ErrorMessage/ErrorMessage"
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn"
import ImageLoad from "../ImageModal/ImageModal"

import css from "./App.module.css"
import {fetchImages} from "../showImage"

export default function App() {
  const [article, setArticle] = useState([]);
  const [isLoader , setIsLoader] = useState(false)
  const [error, setError]=useState(false)

  
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

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


  // ===========================Modal=====================================
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null);
  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setSelectedImage(null);
    setModalIsOpen(false);
  };




  return (
    <div className={css.cont}>
    
    <SearchBar onSearch ={handleSearch}/>
    {article.length > 0 && <ImageGallery items={article} openModal={openModal} />}
    {article.length > 0 && <ImageLoad
    images={article}
    open ={modalIsOpen}
    closeModal={closeModal}
    selectedImage={selectedImage}/>}
    
    {error &&  <ErrorMessage/>}
    {isLoader &&  <Loader/>}
    {article.length > 0 && !isLoader && (<LoadMoreBtn onLoad ={hanleLoadMore}/>)}
    </div>
  );
}