function formatTime(time, format) {
    if (null == time || '' == format || '' == time || void 0 == time) return '';
    if (0 === arguments.length) return null;
    'string' == typeof time && (time = time.replace(/-/g, '/'));
    const formateArr = [
        'Y',
        'M',
        'D',
        'h',
        'm',
        's'
    ], arr = [], date = new Date(time);
    arr.push(date.getFullYear());
    arr.push((date.getMonth() + 1).toString().padStart(2, '0'));
    arr.push(date.getDate().toString().padStart(2, '0'));
    arr.push(date.getHours().toString().padStart(2, '0'));
    arr.push(date.getMinutes().toString().padStart(2, '0'));
    arr.push(date.getSeconds().toString().padStart(2, '0'));
    for(let i = 0; i < arr.length; i++)format = format.replace(formateArr[i], arr[i].toString());
    return format;
}
export { formatTime };
