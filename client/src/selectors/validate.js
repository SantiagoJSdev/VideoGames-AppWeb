

export const validate = (value) => {
    let error = {};
    let regName = /^[a-z ,.'-]+$/i ;
    if (value.name.trim().length === 0 || value.name.trim().length < 3) {
     return error.name = "Name require";
    }
    if (!regName.test(value.name)) return error.name = "Name invalid";
    return error;
  
    
};
