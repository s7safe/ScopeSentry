import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-D8TtpZ7e.js";import{d as t,r as a,U as l,o,c as s,e as r,w as i,a as p,H as u,t as m,Z as n,I as d,f as c,Q as j,a4 as _,l as v,i as f}from"./index-C7FJj4Bp.js";import{a as x,E as g}from"./el-tab-pane-DJZrspQd.js";import{a as y,E as b}from"./el-col-CLycMjBT.js";import{_ as h}from"./ProjectList.vue_vue_type_style_index_0_lang-By29L7hP.js";import{_ as A,g as P}from"./AddProject.vue_vue_type_script_setup_true_lang-D74rXuAI.js";import{_ as k}from"./Dialog.vue_vue_type_style_index_0_lang-CEAQr764.js";import{u as D}from"./useIcon-p9zXclCz.js";import"./el-card-Bhf-XVja.js";import"./el-tooltip-l0sNRNKZ.js";import"./el-popper-DYwcpnJt.js";import"./useInput-B9PSdhNo.js";import"./debounce-FYM4CuA0.js";import"./Table.vue_vue_type_script_lang-CTgmk2QX.js";import"./el-checkbox-CPLJJMmd.js";import"./el-tag-BHmHdP98.js";import"./el-pagination-Fvtq0GFD.js";import"./el-image-viewer-DhtUPOdN.js";import"./tsxHelper-CSAh_eRe.js";import"./el-dropdown-item-zcj1wK-o.js";import"./castArray-C6EAQny5.js";import"./refs-Dte5lzrT.js";import"./index-DzV5t0hO.js";import"./raf-BrJref6v.js";/* empty css                          */import"./el-divider-DK9S_Niq.js";import"./el-form-item-DGQT7cXn.js";import"./el-switch-DLGqKmW6.js";import"./el-radio-group-DfAiTKol.js";import"./el-select-v2-BzeNENN_.js";import"./el-input-number-Dj7xeWd9.js";import"./el-text-JBU2hwTl.js";import"./index-DPWgdpfC.js";import"./index-P1b7NQVD.js";import"./index-Cfrs_o4w.js";import"./index-Cme0opYz.js";const w={class:"mb-10px"},L=t({__name:"Project",setup(t){const{t:L}=v();let V={},T=a([]),E={};const I=async(e,t)=>{0===e?(e=Q.value,t=q.value):(Q.value=e,q.value=t);try{const a=await P($.value,e,t);V=a.data.result,T.value=Object.keys(a.data.tag),E=a.data.tag;const l=T.value.indexOf("All");-1!==l&&T.value.splice(l,1)}catch(a){}},U=a(!1),C=async()=>{U.value=!0},H=()=>{U.value=!1},$=a(""),O=D({icon:"iconoir:search"}),Q=a(1),q=a(50),B=()=>{I(Q.value,q.value)};return B(),(t,a)=>{const v=l("ElText");return o(),s(j,null,[r(p(e),null,{default:i((()=>[r(p(y),null,{default:i((()=>[r(p(b),{span:.5},{default:i((()=>[r(v,{class:"mx-1",style:{position:"relative",top:"8px"}},{default:i((()=>[u(m(p(L)("form.input"))+":",1)])),_:1})])),_:1}),r(p(b),{span:5},{default:i((()=>[r(p(n),{modelValue:$.value,"onUpdate:modelValue":a[0]||(a[0]=e=>$.value=e),placeholder:p(L)("common.inputText"),style:{height:"38px"}},null,8,["modelValue","placeholder"])])),_:1}),r(p(b),{span:5,style:{position:"relative",left:"16px"}},{default:i((()=>[r(p(d),{type:"primary",icon:p(O),style:{height:"100%"},onClick:B},null,8,["icon"])])),_:1})])),_:1}),r(p(y),null,{default:i((()=>[r(p(b),{style:{position:"relative",top:"16px"}},{default:i((()=>[c("div",w,[r(p(d),{type:"primary",onClick:C},{default:i((()=>[u(m(p(L)("project.addProject")),1)])),_:1})])])),_:1})])),_:1}),r(p(x),{class:"demo-tabs",style:{position:"relative",top:"10px"}},{default:i((()=>[r(p(g),{label:`All (${p(E).All})`},{default:i((()=>[r(h,{tableDataList:p(V).All,getProjectTag:I,total:p(E).All},null,8,["tableDataList","total"])])),_:1},8,["label"]),(o(!0),s(j,null,_(p(T),(e=>(o(),f(p(g),{label:`${e} (${p(E)[e]})`,key:e},{default:i((()=>[r(h,{tableDataList:p(V)[e],getProjectTag:I,total:p(E)[e]},null,8,["tableDataList","total"])])),_:2},1032,["label"])))),128))])),_:1})])),_:1}),r(p(k),{modelValue:U.value,"onUpdate:modelValue":a[1]||(a[1]=e=>U.value=e),title:p(L)("project.addProject"),center:"",style:{"border-radius":"15px","box-shadow":"5px 5px 10px rgba(0, 0, 0, 0.3)"}},{default:i((()=>[r(A,{closeDialog:H,projectid:"",getProjectData:I,schedule:!1})])),_:1},8,["modelValue","title"])],64)}}});export{L as default};