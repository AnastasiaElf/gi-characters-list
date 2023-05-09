const fs = require("fs/promises");

async function readJSONFiles(path) {
    const filenames = await fs.readdir(path);
    try {
        const filePromises = filenames.map(async function (filename) {
            const file = await fs.readFile(path + filename, "utf-8");
            const obj = JSON.parse(file);

            return [filename, obj];
        });
        return Promise.all(filePromises);
    } catch (err) {
        return err;
    }
}

function saveJSONFile(path, fileName, data) {
    try {
        fs.writeFile(path + fileName + ".json", JSON.stringify(data));
    } catch (err) {
        return err;
    }
}

module.exports = { readJSONFiles, saveJSONFile };
