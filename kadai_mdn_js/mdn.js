const d = new Date();
const year = d.getFullYear();
const month = String(d.getMonth() + 1).padStart(2, '0'); 
const day = String(d.getDate()).padStart(2, '0');
const formattedDate = `${year}年${month}月${day}日`;
console.log(formattedDate); 
