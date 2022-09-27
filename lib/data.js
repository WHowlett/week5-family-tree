import fs from "fs";
import path from "path";

const dataDir = path.join(process.cwd(), 'data');

export function getAllIds() {
    const filePath = path.join(dataDir, 'person-about.json');
    const joinString = fs.readFileSync(filePath, 'utf8');
    const jsonObj = JSON.parse(joinString);
    return jsonObj.map(item => {
        return {
            params: {
                id: item.id.toString()
            }
        }
    });
}

export function getSortedList() {
    const filePath = path.join(dataDir, 'person-about.json');
    const jsonString = fs.readFileSync(filePath, 'utf8');
    const jsonObj = JSON.parse(jsonString);
    jsonObj.sort(function (a, b) {
        return a.name.localeCompare(b.name);
    });

    return jsonObj.map(item => {
        return {
            id: item.id.toString(),
            name: item.name
        }
    });
}

export function getData(idRequest) {
    const filePath = path.join(dataDir, 'person-about.json');
    const filePath2 = path.join(dataDir, 'person-family.json');
    const jsonString = fs.readFileSync(filePath, 'utf8');
    const jsonString2 = fs.readFileSync(filePath2, 'utf8');
    const jsonObj = JSON.parse(jsonString);
    const jsonObj2 = JSON.parse(jsonString2);

    const objMatch = jsonObj.filter(obj => {
        return obj.id.toString() === idRequest;
    });

    let objReturn;
    if (objMatch.length > 0) {
        objReturn = objMatch[0];

        const objMatch2 = jsonObj2.filter(obj => {
            return obj.owner_id.toString() === idRequest;
        });
        if (objMatch2.length > 0) {
            const objMatch3 = jsonObj.filter(obj => {
                return objMatch2[0].family_id.includes(obj.id);
            });
            if (objMatch3.length > 0) {
                objReturn.family = objMatch3;
            }
        }
    } else {
        objReturn = {};

    }
    return objReturn
}