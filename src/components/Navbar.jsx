

function Navbar(props) {
  return (
    <nav
      style={{
        backgroundColor: props.darkMode ? "#0f172a" : "#1e293b",
        color: "white",
        padding: "15px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2>UPSC Dashboard</h2>

      <button
        onClick={() => props.setDarkMode(!props.darkMode)}
        style={{
          padding: "8px",
          border: "none",
          cursor: "pointer",
          borderRadius: "5px",
        }}
      >
        {props.darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
  );
}

export default Navbar;

