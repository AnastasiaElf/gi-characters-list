import "./card.css";

function Card({ data }) {
    return (
        <div className="card" title={data.name}>
            {data.name}
        </div>
    );
}

export default Card;
