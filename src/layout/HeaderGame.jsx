export default function HeaderGame() {
  return (
    <>
      <header
        style={{
          backgroundColor: "brown",
          color: "white",
          padding: "20px 0",
          textAlign: "center",
          marginBottom: "20px",
          width: "100%",
          borderTop: "1px solid #ddd",
        }}
      >
        <div>
          <h2>Header Game</h2>
          <>Player-X:   Score: </>
          <>Player-O:   Score: </>
        </div>
      </header>
    </>
  );
}
