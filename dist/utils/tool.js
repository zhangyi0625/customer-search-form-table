function filterKeys(source, keys, invert) {
    return Object.keys(source).filter((key)=>invert ? keys.includes(key) : !keys.includes(key)).reduce((res, key)=>{
        res[key] = source[key];
        return res;
    }, {});
}
function replaceObjectName(arr, wishName, newName) {
    if (wishName.length !== newName.length || !arr.length) return;
    let refreshArr = [];
    arr.map((obj)=>{
        wishName.map((name, index)=>{
            if (obj[name]) Reflect.set(obj, newName[index], obj[name]);
        });
    });
    refreshArr = JSON.parse(JSON.stringify(arr));
    return refreshArr;
}
export { filterKeys, replaceObjectName };
