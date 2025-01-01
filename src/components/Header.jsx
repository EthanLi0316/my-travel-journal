import mainLogo from "../assets/world.svg";

export default function Header() {
	return (
		<header className="nav-bar">
			<img src={mainLogo} alt="World" className="nav-logo" />
			<span>mytraveljournal</span>
		</header>
	);
}
