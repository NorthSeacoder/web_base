const path = require('path');
const fs = require('fs');

const docPath = path.resolve(__dirname, '../'); //docs

const getSingleConfig = (name, config, filePath) => {
    const {title} = config[name];
    const files = fs.readdirSync(filePath);
    const children = getChildren(name, config[name], files);
    return {
        title,
        collapsable: false,
        children,
    };
};

const getChildren = (name, map, files) => {
    const target = [`${name}/`, '本章目标'];
    const others = files
        .filter((item) => item !== 'README.md')
        .map((file) => {
            const fileName = file.split('.')[0];
            return [`${name}/${fileName}`, map[fileName]];
        });
    return [target, ...others];
};

exports.getSidebarConfig = (aimPath) => {
    const aimDirPath = path.resolve(docPath, aimPath);
    const config = require(path.resolve(aimDirPath, './config'));
    return fs.readdirSync(aimDirPath).reduce((arr, fileName) => {
        const filePath = `${aimDirPath}/${fileName}`;
        const file = fs.statSync(filePath);
        if (file.isDirectory()) {
            arr.push(getSingleConfig(fileName, config, filePath));
        }
        return arr;
    }, []);
};


