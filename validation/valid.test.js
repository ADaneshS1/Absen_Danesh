const { idValidation,nameValidation } = require("./valid");

describe('testing validation', () => {
    test('when input id less 5 character should be error', ()=> {
        let result = idValidation("053");
        expect(result).toEqual(
            {error:true, message:'Id harus berjumlah 5 karakter'}
        );
    });

    test('when input id more than 5 character should be error', ()=> {
        let result = idValidation("053");
        expect(result).toEqual(
            {error:true, message:'Id harus berjumlah 5 karakter'}
        );
    });

    test('should succes', ()=> {
        let result = nameValidation("Danesh");
        expect(result).toEqual(
            {error:false, message:'Confirm', data:'Danesh'}
        );
    });
})