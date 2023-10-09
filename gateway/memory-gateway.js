const { createData } = require("../crud/crudObject");

let dataMemory = [];

const savingData = (name, age) => {
    let id = Math.ceil(Math.random() * 1000);
    dataMemory = createData(dataMemory, {id, name, age});
};

const showAllData = () => {
    return dataMemory;
};

module.exports = {savingData, showAllData};