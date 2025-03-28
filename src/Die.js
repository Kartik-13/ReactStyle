import "./Die.css";

export default function Die() {
  const roll = Math.floor(Math.random() * 6);
  return <h2 className="Die">Die ROll: {roll}</h2>;
}
