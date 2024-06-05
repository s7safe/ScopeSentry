import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-DrNfIFWG.js";import{d as t,r as a,N as o,O as s,X as l,e as i,Q as n,Y as r,o as u,c as d,w as c,a as p,H as m,t as g,Z as f,I as v,f as y,$ as h,a0 as k,l as S}from"./index-CD5z-L2p.js";import{a as _,E as b}from"./el-col-Cat2GRqi.js";import{E as w}from"./el-text-CilhT5JB.js";import{E as j}from"./el-progress-4HyxI6zy.js";import{E as x}from"./el-tag-l9P6F3bC.js";import{_ as T}from"./Table.vue_vue_type_script_lang-kikzg7Gy.js";import{u as I}from"./useTable-CD6z3NBi.js";import{u as C}from"./useIcon-D8J_96up.js";import{a as N,d as P,r as E,g as A}from"./index-C6kHfOB3.js";import{_ as L}from"./Dialog.vue_vue_type_style_index_0_lang-GTofo2ER.js";import{_ as V}from"./AddTask.vue_vue_type_script_setup_true_lang-yvyd-Vfo.js";import{_ as U}from"./ProgressInfo.vue_vue_type_script_setup_true_lang-pgHAxIiP.js";import"./el-card-BSi8b6QZ.js";import"./el-tooltip-l0sNRNKZ.js";import"./el-popper-DZWDgZ8T.js";import"./el-checkbox-CSYOfx66.js";import"./useInput-C5WeYUR4.js";import"./debounce-BQFtq4AG.js";import"./el-pagination-D8F1T4Jn.js";import"./el-image-viewer-Cro4p8GN.js";import"./tsxHelper-CG14TR21.js";import"./el-dropdown-item-DuGKGSIn.js";import"./castArray-mNLLonyd.js";import"./refs-Cpmhc2B7.js";import"./index-ajI7YjOc.js";import"./raf-CfzBOZZn.js";import"./index-BZommXV1.js";/* empty css                          */import"./el-divider-BqiFvRo_.js";import"./el-form-item-DMczFwFk.js";import"./el-switch-CfMEB_VU.js";import"./el-radio-group-eBjY_ehg.js";import"./el-select-v2-6RS1ZV2R.js";import"./el-input-number-CPg7IL_L.js";import"./index-DS0APOyv.js";import"./index-BBhwX1eC.js";import"./index-ByzqBSpM.js";const z={class:"mb-10px"},D={style:{position:"relative",top:"12px"}};function M(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!k(e)}const W=t({__name:"Task",setup(t){const k=C({icon:"iconoir:search"}),{t:W}=S(),H=a(""),R=()=>{te()},F=o([{field:"selection",type:"selection",width:"55"},{field:"name",label:W("task.taskName"),minWidth:30},{field:"taskNum",label:W("task.taskCount"),minWidth:15,formatter:(e,t,a)=>s(x,{type:"info"},(()=>a))},{field:"progress",label:W("task.taskProgress"),minWidth:40,formatter:(e,t,a)=>s(j,{percentage:a,type:"line",striped:!0,status:a<100?"":"success",stripedFlow:a<100})},{field:"creatTime",label:W("task.createTime"),minWidth:30},{field:"endTime",label:W("task.endTime"),minWidth:30,formatter:(e,t,a)=>""==a?"-":a},{field:"action",label:W("tableDemo.action"),minWidth:50,formatter:(e,t,a)=>{let o,r,u;const d=s(l,{type:"warning",onClick:()=>ye(e)},W("task.retest"));return i(n,null,[i(l,{type:"success",onClick:()=>de(e)},M(o=W("common.view"))?o:{default:()=>[o]}),d,i(l,{type:"danger",onClick:()=>pe(e)},M(r=W("common.delete"))?r:{default:()=>[r]}),i(l,{type:"primary",onClick:()=>J(e.id)},M(u=W("task.taskProgress"))?u:{default:()=>[u]})])}}]),O=a(!1);let B="";const J=async e=>{B=e,O.value=!0},Q=()=>{O.value=!1},{tableRegister:q,tableState:G,tableMethods:K}=I({fetchDataApi:async()=>{const{currentPage:e,pageSize:t}=G,a=await A(H.value,e.value,t.value);return{list:a.data.list,total:a.data.total}},immediate:!1}),{loading:X,dataList:Y,total:Z,currentPage:$,pageSize:ee}=G;ee.value=20;const{getList:te,getElTableExpose:ae}=K;function oe(){return{background:"var(--el-fill-color-light)"}}const se=a(!1),le=async()=>{ie=W("task.addTask"),ue.value=!0,re.name="",re.target="",re.node=[],re.subdomainScan=!0,re.duplicates="None",re.subdomainConfig=[],re.urlScan=!0,re.sensitiveInfoScan=!0,re.pageMonitoring="JS",re.crawlerScan=!0,re.vulScan=!1,re.vulList=[],re.portScan=!1,re.ports="",re.dirScan=!0,re.waybackurl=!0,re.scheduledTasks=!0,re.hour=24,re.allNode=!1,se.value=!0};let ie=W("task.addTask");const ne=()=>{se.value=!1};let re=o({name:"",target:"",node:[],subdomainScan:!0,duplicates:"None",subdomainConfig:[],urlScan:!0,sensitiveInfoScan:!0,pageMonitoring:"JS",crawlerScan:!0,vulScan:!1,vulList:[],portScan:!1,ports:"",dirScan:!0,waybackurl:!0,scheduledTasks:!0,hour:24,allNode:!1}),ue=a(!0);const de=async e=>{const t=await N(e.id);if(200===t.code){const e=t.data;re.name=e.name,re.target=e.target,re.node=e.node,re.subdomainScan=e.subdomainScan,re.subdomainConfig=e.subdomainConfig,re.urlScan=e.urlScan,re.sensitiveInfoScan=e.sensitiveInfoScan,re.pageMonitoring=e.pageMonitoring,re.crawlerScan=e.crawlerScan,re.vulScan=e.vulScan,re.vulList=e.vulList,re.portScan=e.portScan,re.ports=e.ports,re.dirScan=e.dirScan,re.waybackurl=e.waybackurl,re.scheduledTasks=e.scheduledTasks,re.hour=e.hour,re.allNode=e.allNode,re.duplicates=e.duplicates}se.value=!0,ue.value=!1,ie=W("common.view")},ce=async()=>{window.confirm("Are you sure you want to delete the selected data?")&&await ve()},pe=async e=>{window.confirm("Are you sure you want to delete the selected data?")&&await ge(e)},me=a(!1),ge=async e=>{me.value=!0;try{await P([e.id]);me.value=!1,te()}catch(t){me.value=!1,te()}},fe=a([]),ve=async()=>{const e=await ae(),t=(null==e?void 0:e.getSelectionRows())||[];fe.value=t.map((e=>e.id)),me.value=!0;try{await P(fe.value);me.value=!1,te()}catch(a){me.value=!1,te()}},ye=async e=>{window.confirm("Are you sure you want to retest?")&&await he(e)},he=async e=>{try{await E(e.id),te()}catch(t){te()}};r((()=>{Se(),window.addEventListener("resize",Se)}));const ke=a(0),Se=()=>{const e=window.innerHeight||document.documentElement.clientHeight;ke.value=.75*e};return(t,a)=>(u(),d(n,null,[i(p(e),null,{default:c((()=>[i(p(_),null,{default:c((()=>[i(p(b),{span:1},{default:c((()=>[i(p(w),{class:"mx-1",style:{position:"relative",top:"8px"}},{default:c((()=>[m(g(p(W)("task.taskName"))+":",1)])),_:1})])),_:1}),i(p(b),{span:5},{default:c((()=>[i(p(f),{modelValue:H.value,"onUpdate:modelValue":a[0]||(a[0]=e=>H.value=e),placeholder:p(W)("common.inputText"),style:{height:"38px"}},null,8,["modelValue","placeholder"])])),_:1}),i(p(b),{span:5,style:{position:"relative",left:"16px"}},{default:c((()=>[i(p(v),{type:"primary",icon:p(k),style:{height:"100%"},onClick:R},{default:c((()=>[m("Search")])),_:1},8,["icon"])])),_:1})])),_:1}),i(p(_),null,{default:c((()=>[i(p(b),{style:{position:"relative",top:"16px"}},{default:c((()=>[y("div",z,[i(p(l),{type:"primary",onClick:le},{default:c((()=>[m(g(p(W)("task.addTask")),1)])),_:1}),i(p(l),{type:"danger",loading:me.value,onClick:ce},{default:c((()=>[m(g(p(W)("task.delTask")),1)])),_:1},8,["loading"])])])),_:1})])),_:1}),y("div",D,[i(p(T),{"tooltip-options":{offset:1,showArrow:!1,effect:"dark",enterable:!1,showAfter:0,popperOptions:{},popperClass:"test",placement:"bottom",hideAfter:0,disabled:!0},pageSize:p(ee),"onUpdate:pageSize":a[1]||(a[1]=e=>h(ee)?ee.value=e:null),currentPage:p($),"onUpdate:currentPage":a[2]||(a[2]=e=>h($)?$.value=e:null),columns:F,data:p(Y),stripe:"",border:!0,loading:p(X),"max-height":ke.value,resizable:!0,pagination:{total:p(Z),pageSizes:[20,30,50,100,200,500,1e3]},onRegister:p(q),headerCellStyle:oe,style:{fontFamily:"-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"}},null,8,["pageSize","currentPage","columns","data","loading","max-height","pagination","onRegister"])])])),_:1}),i(p(L),{modelValue:se.value,"onUpdate:modelValue":a[3]||(a[3]=e=>se.value=e),title:p(ie),center:"",style:{"border-radius":"15px","box-shadow":"5px 5px 10px rgba(0, 0, 0, 0.3)"}},{default:c((()=>[i(V,{closeDialog:ne,getList:p(te),vTaskForm:p(re),create:p(ue),taskid:"",schedule:!1},null,8,["getList","vTaskForm","create"])])),_:1},8,["modelValue","title"]),i(p(L),{modelValue:O.value,"onUpdate:modelValue":a[4]||(a[4]=e=>O.value=e),title:p(W)("task.taskProgress"),center:"",style:{"border-radius":"15px","box-shadow":"5px 5px 10px rgba(0, 0, 0, 0.3)"},width:"70%","max-height":"700"},{default:c((()=>[i(U,{closeDialog:Q,getProgressInfoID:p(B),getProgressInfotype:"scan",getProgressInforunnerid:""},null,8,["getProgressInfoID"])])),_:1},8,["modelValue","title"])],64))}});export{W as default};