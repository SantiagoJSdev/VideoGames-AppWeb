

export const validate = (value) => {
    let error = {};
    let regName = /^[a-z ,.'-]+$/i ;

    if (value.name.trim().length === 0 || value.name.trim().length < 3) {
        error.name = "Name require";
        return error
    }
    if (!regName.test(value.name)) {
        error.name = "Name invalid"
        return error 
    };
    return error;
  
    
};
