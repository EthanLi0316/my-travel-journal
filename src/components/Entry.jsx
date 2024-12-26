export default function Entry({
	img,
	title,
	country,
	googleMapsLink,
	dates,
	text,
}) {
	return (
		<article className="entry">
			<img src={img.src} alt={img.alt} className="entry-image" />
			<div className="entry-content">
				<div className="entry-location">
					<span>📍 {country}</span>
					<a href={googleMapsLink} target="_blank">
						View on Google Maps
					</a>
				</div>
				<h2>{title}</h2>
				<p className="entry-dates">{dates}</p>
				<p>{text}</p>
			</div>
		</article>
	);
}
