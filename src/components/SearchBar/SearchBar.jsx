import  { Toaster, toast } from 'react-hot-toast';
import css from "./SearchBar.module.css"


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
        onSubmit={handleSubmit}>
          <input
          className={css.textIn}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="search"
          />
          <button type="submit">Search</button>
        </form>
        <Toaster
        position="top-right"
        reverseOrder={true}/>
      </header>
    );
  }