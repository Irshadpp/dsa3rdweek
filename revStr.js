function revStr(str){
    if(str === ''){
        return str;
    }
    return str.charAt(str.length-1) + revStr(str.substring(0, str.length-1))
}

console.log(revStr('malayalamm'));