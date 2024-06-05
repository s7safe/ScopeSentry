import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-CEdmon7H.js";import{_ as o}from"./Dialog.vue_vue_type_style_index_0_lang-D6gcU7dY.js";import{d as t,l,r as a,N as i,U as s,o as r,i as m,w as p,e as n,H as u,t as d,a as c,c as f,Q as _,a4 as j,f as g}from"./index-DW0ls8FD.js";import{u as v,F as b}from"./useForm-BXswD2rq.js";import{u as y}from"./useValidator-CNQWZ5V7.js";import{g as D}from"./index-B-jPJ_z1.js";import"./el-card-DYqFxjB9.js";import"./el-tooltip-l0sNRNKZ.js";import"./el-popper-8DMMW8Fg.js";import"./refs-0-VBVyuG.js";import"./el-form-item-BHyQ5xcb.js";import"./castArray-BIZ_WTxg.js";import"./el-col-zdbRy_CT.js";import"./el-tag-FG6xPbp4.js";import"./el-checkbox-LARa6PUn.js";import"./useInput-CdNe5s2K.js";import"./debounce-GdEfecKx.js";import"./el-radio-group-YGFjSGfi.js";/* empty css                          */import"./el-input-number-Cr8Edy3u.js";import"./el-pagination-DMWg5539.js";import"./el-select-v2-B1hpkJd4.js";import"./raf-BjvSW-8C.js";import"./el-switch-Dk2-BPFc.js";import"./el-divider-q4pJm88E.js";import"./el-progress-V8I8DFGj.js";import"./InputPassword-BdP0bszr.js";import"./style.css_vue_type_style_index_0_src_true_lang-CQzoImxb.js";import"./JsonEditor.vue_vue_type_script_setup_true_lang-B_cqP_tX.js";import"./IconPicker-DoNllUPa.js";/* empty css                   */import"./el-tab-pane-DPQXWGoB.js";import"./tsxHelper-DA3uP4OE.js";import"./index-BVc9bEJE.js";import"./index-Djy9NJ1B.js";const k=t({__name:"Dialog",setup(t){const{required:k}=y(),{t:x}=l(),h=a(!1),C=a(!1),{formRegister:P,formMethods:V}=v(),{getElFormExpose:w}=V,I=i([{field:"field1",label:x("formDemo.input"),component:"Input",formItemProps:{rules:[k()]}},{field:"field2",label:x("formDemo.select"),component:"Select",optionApi:async()=>(await D()).data},{field:"field3",label:x("formDemo.radio"),component:"RadioGroup",componentProps:{options:[{label:"option-1",value:"1"},{label:"option-2",value:"2"}]}},{field:"field4",label:x("formDemo.checkbox"),component:"CheckboxGroup",value:[],componentProps:{options:[{label:"option-1",value:"1"},{label:"option-2",value:"2"}]}},{field:"field5",component:"DatePicker",label:x("formDemo.datePicker"),componentProps:{type:"date"}},{field:"field6",component:"TimeSelect",label:x("formDemo.timeSelect")}]),F=async()=>{const e=await w();null==e||e.validate((e=>{}))};return(t,l)=>{const a=s("BaseButton");return r(),m(c(e),{title:c(x)("dialogDemo.dialog"),message:c(x)("dialogDemo.dialogDes")},{default:p((()=>[n(a,{type:"primary",onClick:l[0]||(l[0]=e=>h.value=!h.value)},{default:p((()=>[u(d(c(x)("dialogDemo.open")),1)])),_:1}),n(a,{type:"primary",onClick:l[1]||(l[1]=e=>C.value=!C.value)},{default:p((()=>[u(d(c(x)("dialogDemo.combineWithForm")),1)])),_:1}),n(c(o),{modelValue:h.value,"onUpdate:modelValue":l[3]||(l[3]=e=>h.value=e),title:c(x)("dialogDemo.dialog")},{footer:p((()=>[n(a,{onClick:l[2]||(l[2]=e=>h.value=!1)},{default:p((()=>[u(d(c(x)("dialogDemo.close")),1)])),_:1})])),default:p((()=>[(r(),f(_,null,j(1e4,(e=>g("div",{key:e},d(e),1))),64))])),_:1},8,["modelValue","title"]),n(c(o),{modelValue:C.value,"onUpdate:modelValue":l[5]||(l[5]=e=>C.value=e),title:c(x)("dialogDemo.dialog")},{footer:p((()=>[n(a,{type:"primary",onClick:F},{default:p((()=>[u(d(c(x)("dialogDemo.submit")),1)])),_:1}),n(a,{onClick:l[4]||(l[4]=e=>C.value=!1)},{default:p((()=>[u(d(c(x)("dialogDemo.close")),1)])),_:1})])),default:p((()=>[n(c(b),{schema:I,onRegister:c(P)},null,8,["schema","onRegister"])])),_:1},8,["modelValue","title"])])),_:1},8,["title","message"])}}});export{k as default};