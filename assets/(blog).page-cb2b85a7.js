import{ɵ as d,i as f,a as g,b as s,c as r,d as i,e as c,f as o,g as u,R as _,J as B,h as C,j as b,k as v,l as y,m as p,n as F,o as l,p as k,q as T}from"./index-e11b8e6e.js";const x=(e,n)=>n.filename;function I(e,n){if(e&1&&(s(0,"p"),r(1),i()),e&2){const t=n.$implicit;o(),l(t)}}const h=e=>["/blog","posts",e];function j(e,n){if(e&1&&(s(0,"li"),C(1,"img",0),s(2,"a",1),r(3),i(),c(4,I,2,1,"p",null,b),s(6,"p"),r(7),v(8,"json"),i()()),e&2){const t=n.$implicit;o(),y("src","./img/",t.attributes.coverImage,"",T),p("alt",t.attributes.title),o(),p("routerLink",F(7,h,t.slug)),o(),l(t.attributes.title),o(),u(t.attributes.tags),o(3),l(k(8,5,t))}}let $=(()=>{var e;class n{constructor(){this.posts=f(a=>a.filename.includes("src/content"))}}return e=n,e.ɵfac=function(a){return new(a||e)},e.ɵcmp=d({type:e,selectors:[["afb-blog"]],standalone:!0,features:[g],decls:5,vars:0,consts:[[3,"src","alt"],[3,"routerLink"]],template:function(a,m){a&1&&(s(0,"h1"),r(1,"Blog"),i(),s(2,"ul"),c(3,j,9,9,"li",null,x),i()),a&2&&(o(3),u(m.posts))},dependencies:[_,B],encapsulation:2}),n})();export{$ as default};
