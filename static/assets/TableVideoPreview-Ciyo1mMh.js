import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-C2BgKTlV.js";import{d as t,l as i,r as a,o as l,i as o,w as r,e as s,a as p}from"./index-BmBszaKw.js";import{_ as m}from"./Table.vue_vue_type_script_lang-BfS5MC1e.js";import{a as d}from"./index-Don1nwU8.js";import"./el-card-BTjtgoDB.js";import"./el-tooltip-l0sNRNKZ.js";import"./el-popper-CDt_5DMM.js";import"./el-checkbox-Dt5IkAwT.js";import"./useInput-JfBKPWny.js";import"./debounce-IVspRZ1y.js";import"./el-tag-BXas1KOi.js";import"./el-pagination--WOPMWV5.js";import"./el-image-viewer-EpZWKLO8.js";import"./tsxHelper-DUpfS5t_.js";import"./el-dropdown-item-C93eagGB.js";import"./castArray-BGHTiuG_.js";import"./refs-C7dx0T3U.js";import"./index-CqLS9K7C.js";import"./raf-zIht-B71.js";import"./index-BMmnha-_.js";const n=t({__name:"TableVideoPreview",setup(t){const{t:n}=i(),u=[{field:"title",label:n("tableDemo.title")},{field:"video_uri",label:n("tableDemo.videoPreview")},{field:"author",label:n("tableDemo.author")},{field:"display_time",label:n("tableDemo.displayTime")},{field:"pageviews",label:n("tableDemo.pageviews")}],j=a(!0);let _=a([]);return(async e=>{const t=await d(e||{pageIndex:1,pageSize:10}).catch((()=>{})).finally((()=>{j.value=!1}));t&&(_.value=t.data.list)})(),(t,i)=>(l(),o(p(e),{title:p(n)("router.PicturePreview")},{default:r((()=>[s(p(m),{columns:u,data:p(_),loading:j.value,preview:["image_uri","video_uri"]},null,8,["data","loading"])])),_:1},8,["title"]))}});export{n as default};