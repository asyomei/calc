import{i as g}from"./global-DZtBUK0g.js";function h(t,n,e){return Math.min(e,Math.max(n,t))}function k(t,n,e){if(t=String(t),!/^\-?[0-9A-Z]+(\.[0-9A-Z]*)?$/i.test(t))return{ok:!1,value:"Некорректное число"};let o=t[0]==="-";o&&(t=t.slice(1));let u=0;for(const i of t){let l=i.toUpperCase().charCodeAt(0);if(l-=l<=c+9?c:p-10,l>=n)return{ok:!1,value:"Некорректное число при текущем основании"};u=u*n+l}let r="";do{let i=u%e;i+=i<10?c:p-10,r=String.fromCharCode(i)+r,u=Math.trunc(u/e)}while(u>0);return o&&(r="-"+r),{ok:!0,value:r}}const c=48,p=65;g({title:"Конвертер систем счисления",other:{title:"Калькулятор",path:"/"}});const a=document.getElementById("number-input"),f=document.getElementById("from-base-input"),d=document.getElementById("to-base-input"),s=document.getElementById("output");a.onkeydown=y;a.oninput=m;f.oninput=m;d.oninput=m;function y(t){const n=a.selectionStart,e=a.value;t.key.length>1||t.key==="-"&&n===0&&!e.includes("-")||t.key==="."&&!e.includes(".")||/^[0-9A-Z]$/i.test(t.key)||t.preventDefault()}function m(){const t=a.value,n=v(Number(f.value)),e=v(Number(d.value));if(f.value=String(n),d.value=String(e),t.length===0){s.innerHTML="";return}const o=k(t,n,e);o.ok?(s.className="result",s.innerHTML=`${t}<sub>${n}</sub> = ${o.value}<sub>${e}</sub>`):(s.className="error",s.innerHTML=o.value)}const v=t=>h(t,2,36);
