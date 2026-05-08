
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import NewsCard from "./components/NewsCard";
import Loader from "./components/Loader";
import api from "./services/api"; 


function App() {
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchNews();
  }, [page]);

  const fetchNews = async () => {
    setLoading(true);

    try {
      const response = await api.get(
        `/top-headlines?country=us&pageSize=6&page=${page}&apiKey=509fd137ff324f6c97640893f6bc3ce0`
      );

     
  setNewsData([
     {
      title: "UPSC Current Affairs",
      description: "India economy and international relations updates.",
      urlToImage: "https://via.placeholder.com/300",
      url: "https://example.com"
      },
    {
      title: "Parliament Session Updates",
      description: "Important bills and governance news.",
      urlToImage: "https://via.placeholder.com/300",
      url: "https://example.com"
    }
    ]);
        
     
    } catch (error) {
      console.log("error fetching news");
    }

    setLoading(false);
  };
  

  const addToFavorites = (item) => {
    setFavorites([...favorites, item]);
  };

  const filteredNews = newsData.filter((item) =>
    item.title?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#111827" : "#f5f5f5",
        minHeight: "100vh",
        color: darkMode ? "white" : "black",
      }}
    >
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <div style={{ padding: "20px" }}>
        <h1>UPSC Current Affairs Dashboard</h1>

        <p>
          This project helps users track important current affairs and news.
        </p>

        <input
          type="text"
          placeholder="Search news"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "10px",
            width: "300px",
            borderRadius: "5px",
            border: "1px solid gray",
            marginTop: "20px",
          }}
        />

        <p style={{ marginTop: "15px" }}>
          Total Favorites: {favorites.length}
        </p>

        {loading ? (
          <Loader />
        ) : (
          filteredNews.map((item, index) => (
            <NewsCard
              key={index}
              image={item.urlToImage}
              title={item.title}
              description={item.description}
              addToFavorites={() => addToFavorites(item)}
            />
          ))
        )}

        <button
          onClick={() => setPage(page + 1)}
          style={{
            marginTop: "20px",
            padding: "10px",
            border: "none",
            backgroundColor: "#1e293b",
            color: "white",
            cursor: "pointer",
            borderRadius: "5px",
          }}
        >
          Load More
        </button>
      </div>
    </div>
  );
}

export default App;
