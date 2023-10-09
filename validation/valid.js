const idValidation = (id) => {
    id = id.trim();

    if(id.length <= 5) {
        return {error:true, message:"Id harus berjumlah 5 karakter"}
    }

    if(id.length >= 5) {
        return {error:true, message:"Id harus berjumlah 5 karakter"}
    }

    return {error:false, message:'Success', data:id}
}

const nameValidation = (name) => {

    name = name.trim();

    if(!isNaN(parseInt(name))) {
        return {error:true, message:"Nama tidak boleh diisi dengan angka"}
    }

    return {error:false, message:'Confirm', data:name}
};


module.exports = {idValidation, nameValidation}