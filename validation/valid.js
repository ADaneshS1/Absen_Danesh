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

module.exports = {idValidation}