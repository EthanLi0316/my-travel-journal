import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header.jsx";
import Entry from "./components/Entry.jsx";
import data from "./data.js";

function App() {
	const placeData = data.map(place => <Entry key={place.id} {...place} />);
	return (
		<>
			<Header />
			<main>{placeData}</main>
		</>
	);
}

export default App;
