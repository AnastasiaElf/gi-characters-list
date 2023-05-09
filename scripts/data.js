const utils = require("./utils/fileUtils");
const extendedData = require("./../rawData/characters_extended.json");

async function main() {
    try {
        const rawDataArray = await utils.readJSONFiles("rawData/characters/");
        let rawData = {};

        rawDataArray.forEach(([filename, data]) => {
            rawData[filename.slice(0, -5)] = data;
        });

        let processedData = {};
        Object.keys(extendedData).forEach((key) => {
            processedData[key] = {
                ...(({ name, rarity, element, weapontype, gender, body, region }) => ({
                    name,
                    rarity,
                    element,
                    weapontype,
                    gender,
                    body,
                    region,
                }))(rawData[extendedData[key].characterId || key]),
                ...extendedData[key],
                img: extendedData[key].characterId || key,
            };
        });

        utils.saveJSONFile("src/data/", "data", processedData);
    } catch (err) {
        console.error(err);
    }
}

main();
