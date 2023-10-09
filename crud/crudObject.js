const createData = (bank, data) => {
    bank.push(data);
    return bank;
};

const addObj = (bank, data) => {
    bank.push(data);
    return bank;
};

module.exports = { createData, addObj };