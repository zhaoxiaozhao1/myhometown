import{_ as k,u as C,r as h,t as g,a as d,o as A,c as b,g as a,w as i,i as m,T as l,n as w}from"./index-Vbm28vnM.js";/* empty css              */const x="/myhometown/assets/6-foYXSRvw.jpg",E={name:"",setup(){const t=C(),e=h({text:"请选择地址",showPopupExist:!1,addressList:[{testid:3,testaddressName:"姓名",phone:"123****4567",defaultAddress:!1,fullAddress:"北京市通州区测试测试测试测试测试测试测试测试测试"},{testid:4,testaddressName:"姓名",phone:"123****4567",defaultAddress:!0,fullAddress:"北京市通州区测试测试测试测试测试测试测试测试测试"}],dataMapOptions:{id:"testid",addressDetail:"testaddressDetail",addressName:"testaddressName"}}),c=()=>{l.text("Click To Address")},s=()=>{l.text("Click To Delete")},r=()=>{l.text("Click To Edit")},p=()=>{e.showPopupExist=!0},o=()=>{localStorage.removeItem("isLogin"),t.push({name:"login"})},n=()=>{e.addressList.push({testid:5,testaddressName:"姓名",phone:"123****4567",defaultAddress:!1,fullAddress:"北京市通州区测试测试测试测试测试测试测试测试测试"})};return{...g(e),showAddressExist:p,signout:o,itemClick:c,delClick:s,editClick:r,addAddress:n}}},I={class:"page-my"},N=w('<div class="user_info" data-v-536a3e3d><div class="user_img" data-v-536a3e3d><img src="'+x+'" alt="" data-v-536a3e3d></div><div class="user_name" data-v-536a3e3d><div class="name" data-v-536a3e3d>赵勇波</div><div class="phone" data-v-536a3e3d>176****0000</div></div></div>',1);function T(t,e,c,s,r,p){const o=d("nut-navbar"),n=d("nut-cell"),_=d("nut-addresslist"),u=d("nut-button"),v=d("nut-popup");return A(),b("div",I,[a(o,{title:"我的家乡"}),N,a(n,{title:"我的收货地址",desc:t.text,"is-link":"",onClick:s.showAddressExist},null,8,["desc","onClick"]),a(v,{position:"bottom",visible:t.showPopupExist,"onUpdate:visible":e[0]||(e[0]=f=>t.showPopupExist=f)},{default:i(()=>[a(_,{data:t.addressList,onDelIcon:s.delClick,onEditIcon:s.editClick,onItemClick:s.itemClick,"show-bottom-button":!1,dataMapOptions:t.dataMapOptions},null,8,["data","onDelIcon","onEditIcon","onItemClick","dataMapOptions"]),a(u,{size:"large",type:"primary",class:"addAddress",onClick:s.addAddress},{default:i(()=>[m("新增地址")]),_:1},8,["onClick"])]),_:1},8,["visible"]),a(u,{class:"out",size:"large",type:"danger",onClick:s.signout},{default:i(()=>[m("退出登录")]),_:1},8,["onClick"])])}const M=k(E,[["render",T],["__scopeId","data-v-536a3e3d"]]);export{M as default};
