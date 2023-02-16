module.exports = function check(str, bracketsConfig) {
  let result = '';
  let arr = str.split('');
  if(arr.length % 2 == 0) {
    bracketsConfig.forEach(element => {
      result += element.join('');
    });
    if(result == str) {
      return true;
    } return false;
  } return false;
}
