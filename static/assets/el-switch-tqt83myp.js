import{U as e,cf as a,bo as t,V as i,X as l,b2 as n,$ as o,Z as c,Y as s,ap as r,d as v,aV as u,aI as d,aN as f,a2 as p,bd as y,at as b,a3 as m,r as h,b9 as g,O as k,aK as I,H as x,o as S,c as C,f as V,a as w,n as T,a9 as _,i as B,w as A,aO as N,a8 as E,j as P,t as K,e as $,ax as j,R as O,aw as U,aa as z,a4 as F,cg as H,aJ as J,b3 as R,aA as X,ac as Y}from"./index-KWTKF9N9.js";const Z=e({modelValue:{type:[Boolean,String,Number],default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},size:{type:String,validator:a},width:{type:[String,Number],default:""},inlinePrompt:{type:Boolean,default:!1},inactiveActionIcon:{type:t},activeActionIcon:{type:t},activeIcon:{type:t},inactiveIcon:{type:t},activeText:{type:String,default:""},inactiveText:{type:String,default:""},activeValue:{type:[Boolean,String,Number],default:!0},inactiveValue:{type:[Boolean,String,Number],default:!1},activeColor:{type:String,default:""},inactiveColor:{type:String,default:""},borderColor:{type:String,default:""},name:{type:String,default:""},validateEvent:{type:Boolean,default:!0},beforeChange:{type:i(Function)},id:String,tabindex:{type:[String,Number]},value:{type:[Boolean,String,Number],default:!1},label:{type:String,default:void 0}}),q={[l]:e=>n(e)||o(e)||c(e),[s]:e=>n(e)||o(e)||c(e),[r]:e=>n(e)||o(e)||c(e)},D=["onClick"],G=["id","aria-checked","aria-disabled","aria-label","name","true-value","false-value","disabled","tabindex","onKeydown"],L=["aria-hidden"],M=["aria-hidden"],Q=["aria-hidden"],W="ElSwitch",ee=v({name:W});const ae=Y(F(v({...ee,props:Z,emits:q,setup(e,{expose:a,emit:t}){const i=e,o=u(),{formItem:c}=d(),v=f(),F=p("switch");[['"value"','"model-value" or "v-model"',"value"],['"active-color"',"CSS var `--el-switch-on-color`","activeColor"],['"inactive-color"',"CSS var `--el-switch-off-color`","inactiveColor"],['"border-color"',"CSS var `--el-switch-border-color`","borderColor"]].forEach((e=>{H({from:e[0],replacement:e[1],scope:W,version:"2.3.0",ref:"https://element-plus.org/en-US/component/switch.html#attributes",type:"Attribute"},m((()=>{var a;return!!(null==(a=o.vnode.props)?void 0:a[e[2]])})))}));const{inputId:Y}=y(i,{formItemContext:c}),Z=b(m((()=>i.loading))),q=h(!1!==i.modelValue),ee=h(),ae=h(),te=m((()=>[F.b(),F.m(v.value),F.is("disabled",Z.value),F.is("checked",ce.value)])),ie=m((()=>[F.e("label"),F.em("label","left"),F.is("active",!ce.value)])),le=m((()=>[F.e("label"),F.em("label","right"),F.is("active",ce.value)])),ne=m((()=>({width:g(i.width)})));k((()=>i.modelValue),(()=>{q.value=!0})),k((()=>i.value),(()=>{q.value=!1}));const oe=m((()=>q.value?i.modelValue:i.value)),ce=m((()=>oe.value===i.activeValue));[i.activeValue,i.inactiveValue].includes(oe.value)||(t(l,i.inactiveValue),t(s,i.inactiveValue),t(r,i.inactiveValue)),k(ce,(e=>{var a;ee.value.checked=e,i.validateEvent&&(null==(a=null==c?void 0:c.validate)||a.call(c,"change").catch((e=>I())))}));const se=()=>{const e=ce.value?i.inactiveValue:i.activeValue;t(l,e),t(s,e),t(r,e),J((()=>{ee.value.checked=ce.value}))},re=()=>{if(Z.value)return;const{beforeChange:e}=i;if(!e)return void se();const a=e();[R(a),n(a)].includes(!0)||X(W,"beforeChange must return type `Promise<boolean>` or `boolean`"),R(a)?a.then((e=>{e&&se()})).catch((e=>{})):a&&se()},ve=m((()=>F.cssVarBlock({...i.activeColor?{"on-color":i.activeColor}:null,...i.inactiveColor?{"off-color":i.inactiveColor}:null,...i.borderColor?{"border-color":i.borderColor}:null})));return x((()=>{ee.value.checked=ce.value})),a({focus:()=>{var e,a;null==(a=null==(e=ee.value)?void 0:e.focus)||a.call(e)},checked:ce}),(e,a)=>(S(),C("div",{class:T(w(te)),style:U(w(ve)),onClick:z(re,["prevent"])},[V("input",{id:w(Y),ref_key:"input",ref:ee,class:T(w(F).e("input")),type:"checkbox",role:"switch","aria-checked":w(ce),"aria-disabled":w(Z),"aria-label":e.label,name:e.name,"true-value":e.activeValue,"false-value":e.inactiveValue,disabled:w(Z),tabindex:e.tabindex,onChange:se,onKeydown:_(re,["enter"])},null,42,G),e.inlinePrompt||!e.inactiveIcon&&!e.inactiveText?P("v-if",!0):(S(),C("span",{key:0,class:T(w(ie))},[e.inactiveIcon?(S(),B(w(E),{key:0},{default:A((()=>[(S(),B(N(e.inactiveIcon)))])),_:1})):P("v-if",!0),!e.inactiveIcon&&e.inactiveText?(S(),C("span",{key:1,"aria-hidden":w(ce)},K(e.inactiveText),9,L)):P("v-if",!0)],2)),V("span",{ref_key:"core",ref:ae,class:T(w(F).e("core")),style:U(w(ne))},[e.inlinePrompt?(S(),C("div",{key:0,class:T(w(F).e("inner"))},[e.activeIcon||e.inactiveIcon?(S(),B(w(E),{key:0,class:T(w(F).is("icon"))},{default:A((()=>[(S(),B(N(w(ce)?e.activeIcon:e.inactiveIcon)))])),_:1},8,["class"])):e.activeText||e.inactiveText?(S(),C("span",{key:1,class:T(w(F).is("text")),"aria-hidden":!w(ce)},K(w(ce)?e.activeText:e.inactiveText),11,M)):P("v-if",!0)],2)):P("v-if",!0),V("div",{class:T(w(F).e("action"))},[e.loading?(S(),B(w(E),{key:0,class:T(w(F).is("loading"))},{default:A((()=>[$(w(j))])),_:1},8,["class"])):w(ce)?O(e.$slots,"active-action",{key:1},(()=>[e.activeActionIcon?(S(),B(w(E),{key:0},{default:A((()=>[(S(),B(N(e.activeActionIcon)))])),_:1})):P("v-if",!0)])):w(ce)?P("v-if",!0):O(e.$slots,"inactive-action",{key:2},(()=>[e.inactiveActionIcon?(S(),B(w(E),{key:0},{default:A((()=>[(S(),B(N(e.inactiveActionIcon)))])),_:1})):P("v-if",!0)]))],2)],6),e.inlinePrompt||!e.activeIcon&&!e.activeText?P("v-if",!0):(S(),C("span",{key:1,class:T(w(le))},[e.activeIcon?(S(),B(w(E),{key:0},{default:A((()=>[(S(),B(N(e.activeIcon)))])),_:1})):P("v-if",!0),!e.activeIcon&&e.activeText?(S(),C("span",{key:1,"aria-hidden":!w(ce)},K(e.activeText),9,Q)):P("v-if",!0)],2))],14,D))}}),[["__file","switch.vue"]]));export{ae as E};