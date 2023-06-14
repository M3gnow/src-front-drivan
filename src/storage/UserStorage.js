export const setUserStorage = function(user){
    localStorage.setItem('user',JSON.stringify(user))
}

export const deleteUserStorage = function(){
    localStorage.removeItem('user');
}

export const getUserStorage = function(){
    return JSON.parse(localStorage.getItem('user'));
}