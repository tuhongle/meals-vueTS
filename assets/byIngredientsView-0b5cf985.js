import{d as l,k as _,u,r as h,c as t,a as s,t as n,b as d,F as m,f as p,g as o,h as g,i as f}from"./index-e19ca018.js";const v={class:"meals"},w={class:"container-lg py-5"},y={class:"display-4 fw-bold mb-4 text-danger"},b={key:0,class:"row"},M=s("div",{class:"d-flex align-items-center"},[s("strong",{role:"status"},"Loading..."),s("div",{class:"spinner-border ms-auto","aria-hidden":"true"})],-1),k=[M],x={key:1,class:"row row-cols-1 row-cols-md-2 row-cols-lg-3"},B={class:"card rounded-4 overflow-hidden shadow"},L={class:"card-top overflow-hidden"},R=["src","alt"],C={class:"card-body p-4"},I={class:"h3 card-title lh-base"},E=l({__name:"byIngredientsView",setup(S){const r=_().params.id.toLowerCase().replace(" ","_"),a=u();return a.getMealsByIngredient(r),(i,F)=>{const c=h("RouterLink");return o(),t("main",null,[s("section",v,[s("div",w,[s("h1",y,"Meals for "+n(i.$route.params.id),1),d(a).loading?(o(),t("div",b,k)):(o(),t("div",x,[(o(!0),t(m,null,p(d(a).MealsByIngredient,e=>(o(),t("div",{class:"col mb-4",key:e.idMeal},[g(c,{to:{name:"mealDetail",params:{id:e.idMeal}},class:"text-decoration-none"},{default:f(()=>[s("div",B,[s("div",L,[s("img",{src:e.strMealThumb,alt:e.strMeal,class:"card-img-top img-fluid"},null,8,R)]),s("div",C,[s("p",I,n(e.strMeal),1)])])]),_:2},1032,["to"])]))),128))]))])])])}}});export{E as default};