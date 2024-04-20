import  { Toaster, toast } from 'react-hot-toast';
import css from "./SearchBar.module.css"
import { FaSearch } from "react-icons/fa";

export default function SearchBar({onSearch}) {

  const handleSubmit = (event) =>{
    event.preventDefault();
    const form = event.target
    const searchText = form.elements.search.value;
    if (searchText.trim() === '') {
      toast.error('Please enter a search query');
      return;
    }
    onSearch(searchText);
       form.reset();
  }
    return (
        <header className={css.head}>
        <form 
        className={css.formSearch}
        onSubmit={handleSubmit}>
          <input
          className={css.textIn}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="search"
          />
          <button type="submit" className={css.btn}><FaSearch /></button>
        </form>
        <Toaster
        position="top-right"
        reverseOrder={true}/>
      </header>
    );
  }