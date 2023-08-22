import{d as l,u as c,o as _,r as h,c as o,a as s,w as m,v as u,b as n,e as p,F as b,f as g,g as a,h as y,i as v,t as d,j as f}from"./index-b3a684a3.js";const w={class:"meals"},M={class:"container-lg py-5"},k=s("h1",{class:"display-3 fw-bold mb-4 text-danger"},"Search Meals by Name",-1),x={key:0},N=s("p",{class:"display-6"},"There are no meals",-1),S=[N],V={key:1},C={key:0,class:"row"},L=s("div",{class:"d-flex align-items-center"},[s("strong",{role:"status"},"Loading..."),s("div",{class:"spinner-border ms-auto","aria-hidden":"true"})],-1),B=[L],D={key:1,class:"row row-cols-1 row-cols-md-2 row-cols-lg-3"},T={class:"card rounded-4 overflow-hidden shadow"},F={class:"card-top overflow-hidden"},K=["src","alt"],R={class:"card-body p-4"},U={class:"card-title"},Y={key:0},j={class:"card-text"},E={class:"btn btn-danger"},I=["href"],A=l({__name:"byNameView",setup($){const t=c();return _(()=>{t.name="",t.byNameMeals=[]}),(q,r)=>{const i=h("RouterLink");return a(),o("main",null,[s("section",w,[s("div",M,[k,m(s("input",{type:"text",class:"form-control py-3 ps-3 fs-3 mb-4 shadow-sm",placeholder:"Search for Meals","onUpdate:modelValue":r[0]||(r[0]=e=>n(t).name=e),onKeydown:r[1]||(r[1]=p(e=>n(t).getNameMeals(n(t).name),["enter"]))},null,544),[[u,n(t).name]]),n(t).byNameMeals.length?(a(),o("div",V,[n(t).loading?(a(),o("div",C,B)):(a(),o("div",D,[(a(!0),o(b,null,g(n(t).byNameMeals,e=>(a(),o("div",{class:"col mb-4",key:e.idMeal},[y(i,{to:{name:"mealDetail",params:{id:e.idMeal}},class:"text-decoration-none"},{default:v(()=>[s("div",T,[s("div",F,[s("img",{src:e.strMealThumb,alt:e.strMeal,class:"card-img-top img-fluid"},null,8,K)]),s("div",R,[s("h3",U,[s("span",null,d(e.strMeal.substring(0,20)),1),e.strMeal.length>20?(a(),o("span",Y,"...")):f("",!0)]),s("p",j,d(e.strInstructions.substring(0,100))+"...",1),s("button",E,[s("a",{href:e.strYoutube,class:"text-light text-decoration-none",target:"_blank"},"Youtube",8,I)])])])]),_:2},1032,["to"])]))),128))]))])):(a(),o("div",x,S))])])])}}});export{A as default};
