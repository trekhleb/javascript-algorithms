/**
 * 最长不重复子串
 * @param {*} s 
 */
export default function lengthOfLongestSubstring(s) { 
  if(!s){
      return 0;
  }
  let arr = s.split('');// 将s转换成字符数组
  let result = [];// 保存当前不重复字符
  let maxLength = 0;// 当前最大不重复字符
  arr.forEach(char => {
      let currentIndex = result.indexOf(char);
      result.push(char);
      if(currentIndex >= 0){
          // 如果出现重复字符，就截取该字符，保证result始终是不重复字符
          result = result.slice(currentIndex + 1);
      }
      if(maxLength < result.length){
          // 保存当前最长不重复字符
          maxLength = result.length
      }
  });
  
  return maxLength;
}