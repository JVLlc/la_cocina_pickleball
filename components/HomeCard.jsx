import { useRouter } from "next/navigation";

export function HomeCard({ title, image, imageHover, position,route }) {
  const router=useRouter()
  return (
    <div className={position == "first" ? "home-element": position=="middle" ? "home-element middle-element": "home-element last-element"}>
      <h2 className="event">{title}</h2>
      <div className="image-home">
        <img className="image-no-hover" src={image} />
        <img className="image-hover" src={imageHover} onClick={()=>{router.push(route)}}/>
        {position == "first" &&
        <img className="grafitti2" src="./images/grafitti2.webp" />}
      </div>
    </div>
  );
}
