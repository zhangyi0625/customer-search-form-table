/**
 * 时间格式化
 * @param time
 * @param format
 * @returns
 */
export function formatTime(time: string | number, format: string) {
  if (time == null || format == '' || time == '' || time == undefined) {
    return '';
  }
  if (arguments.length === 0) {
    return null;
  }
  'string' == typeof time && (time = time.replace(/-/g, '/'));
  const formateArr = ['Y', 'M', 'D', 'h', 'm', 's'],
    arr = [],
    date = new Date(time);
  arr.push(date.getFullYear()); //Y
  arr.push((date.getMonth() + 1).toString().padStart(2, '0')); //M
  arr.push(date.getDate().toString().padStart(2, '0')); //D
  arr.push(date.getHours().toString().padStart(2, '0')); //h
  arr.push(date.getMinutes().toString().padStart(2, '0')); //m
  arr.push(date.getSeconds().toString().padStart(2, '0')); //s
  for (let i = 0; i < arr.length; i++) {
    format = format.replace(formateArr[i], arr[i].toString());
  }
  return format;
}
