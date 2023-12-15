export function HomeCard({ title, image, imageHover, position }) {
  return (
    <div className={position == "first" ? "home-element": position=="middle" ? "home-element middle-element": "home-element last-element"}>
      <h2 className="event">{title}</h2>
      <div className="image-home">
        <img className="image-no-hover" src={image} />
        <img className="image-hover" src={imageHover} />
        {position == "first" &&
        <img className="grafitti2" src="./images/grafitti2.png" />}
      </div>
    </div>
  );
}
