import{bS as e,bT as a,bU as l,bV as n,aM as t,a9 as u,ac as o,ab as s,b6 as i,af as d,B as r,aX as c,aB as v,aN as b,aZ as m,a3 as h,aP as p,aO as f,r as x,ad as k,by as g,ay as y,bW as C,aS as L,bg as V,bX as S,d as B,bl as I,A as E,o as F,i as z,w as N,f as w,n as O,a as D,W as U,c as _,$ as j,aj as G,bY as $,J as R,Q as A,H as M,t as P,j as W,G as X,L as H,F as J,s as K,a7 as Q,ae as T,bw as Y,M as Z,al as q}from"./index-C7FJj4Bp.js";import{h as ee,i as ae}from"./useInput-B9PSdhNo.js";function le(n,t){return function(n,t,u){for(var o=-1,s=t.length,i={};++o<s;){var d=t[o],r=e(n,d);u(r,d)&&a(i,l(d,n),r)}return i}(n,t,(function(e,a){return ee(n,a)}))}var ne=n((function(e,a){return null==e?{}:le(e,a)}));const te={modelValue:{type:[Number,String,Boolean],default:void 0},label:{type:[String,Boolean,Number,Object],default:void 0},value:{type:[String,Boolean,Number,Object],default:void 0},indeterminate:Boolean,disabled:Boolean,checked:Boolean,name:{type:String,default:void 0},trueValue:{type:[String,Number],default:void 0},falseValue:{type:[String,Number],default:void 0},trueLabel:{type:[String,Number],default:void 0},falseLabel:{type:[String,Number],default:void 0},id:{type:String,default:void 0},controls:{type:String,default:void 0},border:Boolean,size:t,tabindex:[String,Number],validateEvent:{type:Boolean,default:!0}},ue={[u]:e=>o(e)||s(e)||i(e),change:e=>o(e)||s(e)||i(e)},oe=Symbol("checkboxGroupContextKey"),se=(e,{model:a,isLimitExceeded:l,hasOwnLabel:n,isDisabled:t,isLabeledByFormItem:u})=>{const o=d(oe,void 0),{formItem:s}=b(),{emit:i}=m();function c(a){var l,n,t,u;return[!0,e.trueValue,e.trueLabel].includes(a)?null==(n=null!=(l=e.trueValue)?l:e.trueLabel)||n:null!=(u=null!=(t=e.falseValue)?t:e.falseLabel)&&u}const v=r((()=>(null==o?void 0:o.validateEvent)||e.validateEvent));return h((()=>e.modelValue),(()=>{v.value&&(null==s||s.validate("change").catch((e=>p())))})),{handleChange:function(e){if(l.value)return;const a=e.target;i("change",c(a.checked),e)},onClickRoot:async function(o){if(!l.value&&!n.value&&!t.value&&u.value){o.composedPath().some((e=>"LABEL"===e.tagName))||(a.value=c([!1,e.falseValue,e.falseLabel].includes(a.value)),await f(),function(e,a){i("change",c(e),a)}(a.value,o))}}}},ie=(e,a)=>{const{formItem:l}=b(),{model:n,isGroup:t,isLimitExceeded:o}=(e=>{const a=x(!1),{emit:l}=m(),n=d(oe,void 0),t=r((()=>!1===c(n))),o=x(!1),s=r({get(){var l,u;return t.value?null==(l=null==n?void 0:n.modelValue)?void 0:l.value:null!=(u=e.modelValue)?u:a.value},set(e){var i,d;t.value&&k(e)?(o.value=void 0!==(null==(i=null==n?void 0:n.max)?void 0:i.value)&&e.length>(null==n?void 0:n.max.value)&&e.length>s.value.length,!1===o.value&&(null==(d=null==n?void 0:n.changeEvent)||d.call(n,e))):(l(u,e),a.value=e)}});return{model:s,isGroup:t,isLimitExceeded:o}})(e),{isFocused:s,isChecked:h,checkboxButtonSize:p,checkboxSize:f,hasOwnLabel:B,actualValue:I}=((e,a,{model:l})=>{const n=d(oe,void 0),t=x(!1),u=r((()=>g(e.value)?e.label:e.value)),o=r((()=>{const a=l.value;return i(a)?a:k(a)?y(u.value)?a.map(C).some((e=>ae(e,u.value))):a.map(C).includes(u.value):null!=a?a===e.trueValue||a===e.trueLabel:!!a}));return{checkboxButtonSize:L(r((()=>{var e;return null==(e=null==n?void 0:n.size)?void 0:e.value})),{prop:!0}),isChecked:o,isFocused:t,checkboxSize:L(r((()=>{var e;return null==(e=null==n?void 0:n.size)?void 0:e.value}))),hasOwnLabel:r((()=>!!a.default||!g(u.value))),actualValue:u}})(e,a,{model:n}),{isDisabled:E}=(({model:e,isChecked:a})=>{const l=d(oe,void 0),n=r((()=>{var n,t;const u=null==(n=null==l?void 0:l.max)?void 0:n.value,o=null==(t=null==l?void 0:l.min)?void 0:t.value;return!c(u)&&e.value.length>=u&&!a.value||!c(o)&&e.value.length<=o&&a.value}));return{isDisabled:v(r((()=>(null==l?void 0:l.disabled.value)||n.value))),isLimitDisabled:n}})({model:n,isChecked:h}),{inputId:F,isLabeledByFormItem:z}=V(e,{formItemContext:l,disableIdGeneration:B,disableIdManagement:t}),{handleChange:N,onClickRoot:w}=se(e,{model:n,isLimitExceeded:o,hasOwnLabel:B,isDisabled:E,isLabeledByFormItem:z});var O,D;return e.checked&&(k(n.value)&&!n.value.includes(I.value)?n.value.push(I.value):n.value=null==(D=null!=(O=e.trueValue)?O:e.trueLabel)||D),S({from:"label act as value",replacement:"value",version:"3.0.0",scope:"el-checkbox",ref:"https://element-plus.org/en-US/component/checkbox.html"},r((()=>t.value&&g(e.value)))),S({from:"true-label",replacement:"true-value",version:"3.0.0",scope:"el-checkbox",ref:"https://element-plus.org/en-US/component/checkbox.html"},r((()=>!!e.trueLabel))),S({from:"false-label",replacement:"false-value",version:"3.0.0",scope:"el-checkbox",ref:"https://element-plus.org/en-US/component/checkbox.html"},r((()=>!!e.falseLabel))),{inputId:F,isLabeledByFormItem:z,isChecked:h,isDisabled:E,isFocused:s,checkboxButtonSize:p,checkboxSize:f,hasOwnLabel:B,model:n,actualValue:I,handleChange:N,onClickRoot:w}},de=["id","indeterminate","name","tabindex","disabled","true-value","false-value"],re=["id","indeterminate","disabled","value","name","tabindex"],ce=B({name:"ElCheckbox"});var ve=H(B({...ce,props:te,emits:ue,setup(e){const a=e,l=I(),{inputId:n,isLabeledByFormItem:t,isChecked:u,isDisabled:o,isFocused:s,checkboxSize:i,hasOwnLabel:d,model:c,actualValue:v,handleChange:b,onClickRoot:m}=ie(a,l),h=E("checkbox"),p=r((()=>[h.b(),h.m(i.value),h.is("disabled",o.value),h.is("bordered",a.border),h.is("checked",u.value)])),f=r((()=>[h.e("input"),h.is("disabled",o.value),h.is("checked",u.value),h.is("indeterminate",a.indeterminate),h.is("focus",s.value)]));return(e,a)=>(F(),z(X(!D(d)&&D(t)?"span":"label"),{class:O(D(p)),"aria-controls":e.indeterminate?e.controls:null,onClick:D(m)},{default:N((()=>{var l,t;return[w("span",{class:O(D(f))},[e.trueValue||e.falseValue||e.trueLabel||e.falseLabel?U((F(),_("input",{key:0,id:D(n),"onUpdate:modelValue":a[0]||(a[0]=e=>j(c)?c.value=e:null),class:O(D(h).e("original")),type:"checkbox",indeterminate:e.indeterminate,name:e.name,tabindex:e.tabindex,disabled:D(o),"true-value":null!=(l=e.trueValue)?l:e.trueLabel,"false-value":null!=(t=e.falseValue)?t:e.falseLabel,onChange:a[1]||(a[1]=(...e)=>D(b)&&D(b)(...e)),onFocus:a[2]||(a[2]=e=>s.value=!0),onBlur:a[3]||(a[3]=e=>s.value=!1),onClick:a[4]||(a[4]=G((()=>{}),["stop"]))},null,42,de)),[[$,D(c)]]):U((F(),_("input",{key:1,id:D(n),"onUpdate:modelValue":a[5]||(a[5]=e=>j(c)?c.value=e:null),class:O(D(h).e("original")),type:"checkbox",indeterminate:e.indeterminate,disabled:D(o),value:D(v),name:e.name,tabindex:e.tabindex,onChange:a[6]||(a[6]=(...e)=>D(b)&&D(b)(...e)),onFocus:a[7]||(a[7]=e=>s.value=!0),onBlur:a[8]||(a[8]=e=>s.value=!1),onClick:a[9]||(a[9]=G((()=>{}),["stop"]))},null,42,re)),[[$,D(c)]]),w("span",{class:O(D(h).e("inner"))},null,2)],2),D(d)?(F(),_("span",{key:0,class:O(D(h).e("label"))},[R(e.$slots,"default"),e.$slots.default?W("v-if",!0):(F(),_(A,{key:0},[M(P(e.label),1)],64))],2)):W("v-if",!0)]})),_:3},8,["class","aria-controls","onClick"]))}}),[["__file","checkbox.vue"]]);const be=["name","tabindex","disabled","true-value","false-value"],me=["name","tabindex","disabled","value"],he=B({name:"ElCheckboxButton"});var pe=H(B({...he,props:te,emits:ue,setup(e){const a=e,l=I(),{isFocused:n,isChecked:t,isDisabled:u,checkboxButtonSize:o,model:s,actualValue:i,handleChange:c}=ie(a,l),v=d(oe,void 0),b=E("checkbox"),m=r((()=>{var e,a,l,n;const t=null!=(a=null==(e=null==v?void 0:v.fill)?void 0:e.value)?a:"";return{backgroundColor:t,borderColor:t,color:null!=(n=null==(l=null==v?void 0:v.textColor)?void 0:l.value)?n:"",boxShadow:t?`-1px 0 0 0 ${t}`:void 0}})),h=r((()=>[b.b("button"),b.bm("button",o.value),b.is("disabled",u.value),b.is("checked",t.value),b.is("focus",n.value)]));return(e,a)=>{var l,o;return F(),_("label",{class:O(D(h))},[e.trueValue||e.falseValue||e.trueLabel||e.falseLabel?U((F(),_("input",{key:0,"onUpdate:modelValue":a[0]||(a[0]=e=>j(s)?s.value=e:null),class:O(D(b).be("button","original")),type:"checkbox",name:e.name,tabindex:e.tabindex,disabled:D(u),"true-value":null!=(l=e.trueValue)?l:e.trueLabel,"false-value":null!=(o=e.falseValue)?o:e.falseLabel,onChange:a[1]||(a[1]=(...e)=>D(c)&&D(c)(...e)),onFocus:a[2]||(a[2]=e=>n.value=!0),onBlur:a[3]||(a[3]=e=>n.value=!1),onClick:a[4]||(a[4]=G((()=>{}),["stop"]))},null,42,be)),[[$,D(s)]]):U((F(),_("input",{key:1,"onUpdate:modelValue":a[5]||(a[5]=e=>j(s)?s.value=e:null),class:O(D(b).be("button","original")),type:"checkbox",name:e.name,tabindex:e.tabindex,disabled:D(u),value:D(i),onChange:a[6]||(a[6]=(...e)=>D(c)&&D(c)(...e)),onFocus:a[7]||(a[7]=e=>n.value=!0),onBlur:a[8]||(a[8]=e=>n.value=!1),onClick:a[9]||(a[9]=G((()=>{}),["stop"]))},null,42,me)),[[$,D(s)]]),e.$slots.default||e.label?(F(),_("span",{key:2,class:O(D(b).be("button","inner")),style:J(D(t)?D(m):void 0)},[R(e.$slots,"default",{},(()=>[M(P(e.label),1)]))],6)):W("v-if",!0)],2)}}}),[["__file","checkbox-button.vue"]]);const fe=K({modelValue:{type:Q(Array),default:()=>[]},disabled:Boolean,min:Number,max:Number,size:t,label:String,fill:String,textColor:String,tag:{type:String,default:"div"},validateEvent:{type:Boolean,default:!0}}),xe={[u]:e=>k(e),change:e=>k(e)},ke=B({name:"ElCheckboxGroup"});var ge=H(B({...ke,props:fe,emits:xe,setup(e,{emit:a}){const l=e,n=E("checkbox"),{formItem:t}=b(),{inputId:o,isLabeledByFormItem:s}=V(l,{formItemContext:t}),i=async e=>{a(u,e),await f(),a("change",e)},d=r({get:()=>l.modelValue,set(e){i(e)}});return T(oe,{...ne(Y(l),["size","min","max","disabled","validateEvent","fill","textColor"]),modelValue:d,changeEvent:i}),h((()=>l.modelValue),(()=>{l.validateEvent&&(null==t||t.validate("change").catch((e=>p())))})),(e,a)=>{var l;return F(),z(X(e.tag),{id:D(o),class:O(D(n).b("group")),role:"group","aria-label":D(s)?void 0:e.label||"checkbox-group","aria-labelledby":D(s)?null==(l=D(t))?void 0:l.labelId:void 0},{default:N((()=>[R(e.$slots,"default")])),_:3},8,["id","class","aria-label","aria-labelledby"])}}}),[["__file","checkbox-group.vue"]]);const ye=Z(ve,{CheckboxButton:pe,CheckboxGroup:ge}),Ce=q(pe),Le=q(ge);export{ye as E,Le as a,Ce as b,ne as p};