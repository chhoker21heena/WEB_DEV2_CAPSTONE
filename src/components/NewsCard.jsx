

function NewsCard(props) {
  return (
    <div
      style={{
        backgroundColor: "white",
        color: "black",
        padding: "15px",
        marginTop: "20px",
        borderRadius: "10px",
        boxShadow: "0px 2px 5px rgba(0,0,0,0.2)",
      }}
    >
      <img
        src={
          props.image
            ? props.image
            : "https://via.placeholder.com/400"
        }
        alt="news"
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />

      <h2>{props.title}</h2>

      <p>{props.description}</p>

      <button
        onClick={props.addToFavorites}
        style={{
          padding: "10px",
          backgroundColor: "#1e293b",
          color: "white",
          border: "none",
          cursor: "pointer",
          borderRadius: "5px",
          marginTop: "10px",
        }}
      >
        Save Article
      </button>
    </div>
  );
}

export default NewsCard;
