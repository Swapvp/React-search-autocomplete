import "./styles.css";

export default function Suggestions({ data, handleClick }) {
  return (
    <ul>
      {data && data.length
        ? data.map((item, index) => (
            <li className="list-item" onClick={handleClick} key={index}>
              {item}
            </li>
          ))
        : null}
    </ul>
  );
}
