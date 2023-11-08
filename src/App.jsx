import InfoCard from "./components/InfoCard";

const App = () => {
  const backgroundStyle = {
    backgroundImage: 'url("/background.png")',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "100vw",
    height: "100vh",
  };

  return (
    <div style={backgroundStyle}>
      <InfoCard />
    </div>
  );
};

export default App;
