import{d as i,u as l,r as c,c as n,a as e,w as _,v as m,b as o,e as p,F as u,f as g,g as a,h,i as w,t as v}from"./index-b3a684a3.js";const f={class:"ingredients"},y={class:"container-lg py-5"},x=e("h1",{class:"display-3 fw-bold mb-4 text-danger"},"Ingredients",-1),b={key:0,class:"row"},k=e("div",{class:"d-flex align-items-center"},[e("strong",{role:"status"},"Loading..."),e("div",{class:"spinner-border ms-auto","aria-hidden":"true"})],-1),I=[k],L={key:1,class:"row row-cols-1 row-cols-md-2 row-cols-lg-3"},S={class:"card rounded-4 overflow-hidden shadow"},V={class:"card-body p-4"},B={class:"card-text"},D=i({__name:"IngredientsView",setup(C){const s=l();return s.getIngredients(),(M,r)=>{const d=c("RouterLink");return a(),n("main",null,[e("section",f,[e("div",y,[x,_(e("input",{type:"text",class:"form-control py-3 ps-3 fs-3 mb-4 shadow-sm",placeholder:"Search for Ingredients","onUpdate:modelValue":r[0]||(r[0]=t=>o(s).ingredient=t),onKeydown:r[1]||(r[1]=p(t=>o(s).getNameMeals(o(s).name),["enter"]))},null,544),[[m,o(s).ingredient]]),o(s).loading?(a(),n("div",b,I)):(a(),n("div",L,[(a(!0),n(u,null,g(o(s).computedIngredients,t=>(a(),n("div",{class:"col mb-4",key:t},[h(d,{to:{name:"ingredient",params:{id:t}},class:"text-decoration-none"},{default:w(()=>[e("div",S,[e("div",V,[e("h3",B,v(t),1)])])]),_:2},1032,["to"])]))),128))]))])])])}}});export{D as default};