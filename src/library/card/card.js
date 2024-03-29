import "./card.css";

// const ELEMENT_COLORS = {
//     anemo: "#bbffde",
//     cryo: "#e8ffff",
//     dendro: "#ffa870",
//     electro: "#eadaff",
//     geo: "#f7e272",
//     hydro: "#09ebff",
//     pyro: "#ffa870",
// };

const ELEMENT_BG_COLORS = {
    anemo: "#1bc88e",
    cryo: "#09ebff",
    dendro: "#177e5a",
    electro: "#b64cf9",
    geo: "#f59d00",
    hydro: "#00c2ff",
    pyro: "#d55300",
};

function Card({ data }) {
    const element = data.element.toLowerCase();
    const weapon = data.weapontype.toLowerCase();
    const region = data.region.toLowerCase();

    return (
        <div
            className="card"
            title={data.name}
            style={{
                backgroundImage: `url("assets/characters/${data.img}.png"), url("assets/character_bg/star_${data.rarity}.png")`,
            }}
        >
            <div
                className="element"
                style={{
                    backgroundImage: `url("assets/elements/${element}.png"), radial-gradient(circle, ${ELEMENT_BG_COLORS[element]} 0%, rgba(255,255,255,0) 70%)`,
                }}
            />
            <div
                className="weapon"
                style={{
                    backgroundImage: `url("assets/weapons/${weapon}.png")`,
                }}
            />
            {region && region !== "noregion" ? (
                <div
                    className="region"
                    style={{
                        backgroundImage: `url("assets/region/${region}.png"), radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 70%)`,
                    }}
                />
            ) : null}
        </div>
    );
}

export default Card;
