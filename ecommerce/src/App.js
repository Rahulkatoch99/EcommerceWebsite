import './App.css';
import { useState, useRef } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Category } from './components/Category/js/Category';
import { ProductDetails } from './components/ProductDetails/js/ProductDetails';
import { Home } from './Home/home';
import { NavBar } from './Navbar/Navbar';
import { Footer } from './components/footer';
import { searchProductByText } from './api'; // Adjust the path as needed
import { SearchResults } from './components/SearchResult/js/SearchResult';
import { Hourglass } from 'react-loader-spinner';


function Loader() {
  return <div className="loader">Loading...</div>;
}

function App() {
  const [results, setResults] = useState([]);
  const [searchText, setSearchText] = useState('');
  const debounceTimeout = useRef(null);
  const [loading, setLoading] = useState(false);


  const handleSearchChange = (text) => {
    setSearchText(text);

    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }

    debounceTimeout.current = setTimeout(async () => {
      if (text.length > 2) {
        try {
          setLoading(true);
          const response = await searchProductByText(text);
          console.log("djkahs:", response)
          setResults(response);
        } catch (error) {
          console.error('Error during search:', error);
          setResults([]);
        } finally {
          setLoading(false);
        }
      } else {
        setResults([]);
        setLoading(false);
      }
    }, 200);
  };


  return (
    <BrowserRouter>
      <div className="App">
        <NavBar onSearchResults={handleSearchChange} />

        <Routes>
          <Route path="/" element={
            loading ? (
              <Hourglass
                visible={true}
                height="680"
                width="80"
                ariaLabel="hourglass-loading"
                wrapperStyle={{}}
                wrapperClass=""
                colors={['#306cce', '#72a1ed']}
              />
            ) : searchText.length > 2 ? (
              <SearchResults data={results} />
            ) : (
              <section>
                <Home />
              </section>
            )
          } />
          <Route path="/product/:id" element={<ProductDetails result={searchText} />} />
          <Route path="/category/:category" element={<Category />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
