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
        Object.keys(extendedData).forEach((elemId) => {
            let elemExtendedData = extendedData[elemId];
            let elemRawId = elemExtendedData.characterId || elemId;
            let elemRawData = rawData[elemRawId];

            processedData[elemId] = {
                ...(({ name, rarity, element, weapontype, gender, region }) => ({
                    name,
                    rarity,
                    element,
                    weapontype,
                    gender,
                    region,
                }))(elemRawData),
                ...elemExtendedData,
                id: elemId,
                img: elemRawId,
                body:
                    elemRawData.body === "BOY" || elemRawData.body === "GIRL"
                        ? "medium"
                        : elemRawData.body === "LADY" || elemRawData.body === "MALE"
                        ? "large"
                        : "small",
            };
        });

        utils.saveJSONFile("src/data/", "data", processedData);
    } catch (err) {
        console.error(err);
    }
}

main();
