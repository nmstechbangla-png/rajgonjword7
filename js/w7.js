// ডেমো: "ভোটার স্লিপ" টাইল চ্যাট খুলে সরাসরি স্লিপ মোডে নিয়ে যায়
(function(){const t=document.getElementById('slipT');if(!t)return;
t.onclick=()=>{const cb=document.getElementById('cb'),cp=document.getElementById('cp');if(cp&&cp.hidden!==false&&cb)cb.click();
setTimeout(()=>{const i=document.getElementById('ci'),s=document.getElementById('cs');if(i&&s){i.value='স্লিপ চাই';s.click()}},500)}})();
