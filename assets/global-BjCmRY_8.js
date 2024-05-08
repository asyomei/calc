(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))c(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();const s="/calc/";function d(i){const e=document.getElementById("header"),t=l(s,i.other.path);e.innerHTML=`
    <h1 id="title">${i.title}</h1>
    <div id="text-row">
      <a id="url" href="${t}">${i.other.title}</a>
      <p id="watermark-text">Сделал Вадим Абгалимов для итогового проекта</p>
    </div>
  `}const l=(...i)=>{const e=[...i];for(let t=0;t<e.length;t++)e[t].at(-1)==="/"&&(e[t]=e[t].slice(0,-1));for(let t=1;t<e.length;t++)e[t][0]==="/"&&(e[t]=e[t].slice(1));return e.join("/")};export{d as i};
