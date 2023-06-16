import rawData from "./data.json";

const data = Object.values(rawData).map((value) => {
    return {
        ...value,
        releasedate: new Date(value.releasedate),
    };
});

export default data;
