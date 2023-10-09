const { showAllData, savingData } = require('../gateway/memory-gateway');
const { nameValidation } = require('../validation/valid');


const postDataUserHandler = async (req,res) => {
    console.log(req.body)
    try {
        if(!req.body.name) {
            res.status(400)
            return res.send({error:true, message:'tidak memiliki parameter nama'});
        };
    
        if(!req.body.age) {
            res.status(400)
            return res.send({error:true, message:'tidak memiliki parameter umur'});
        };

        // Mengambil data 
        let realNameRes = nameValidation(name);
        let realDate = newDate();
        console.log("Terjadi keselahan: ",realNameRes.data)
        await savingData(realNameRes.data,realDate)
        res.send({data: await showAllData()});
    } catch(error) {
        res.send({ error: true, message: error.message });
    }
};

module.exports = {postDataUserHandler}