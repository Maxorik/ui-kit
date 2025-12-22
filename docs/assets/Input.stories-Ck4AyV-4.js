import{I as o}from"./Input-D117xj27.js";import"./jsx-runtime-u17CrQMm.js";import"./iframe-D7bwIom8.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-DBH2W8EG.js";const d={title:"Example Input",component:o,parameters:{layout:"centered"},tags:["autodocs"],decorators:[a=>{const r=document.createElement("script");return r.src="/style_setter.js",r.type="module",document.head.appendChild(r),a()}]},e={args:{label:"Год вашего рождения",value:"2026",type:"text",bottomText:"Пишите только цифры",placeholder:"Год в формате YYYY",errorText:"Допустимы только цифры",mask:/^[0-9]+$/,width:300}},t={args:{value:"",type:"text",placeholder:"Найти по имени или году",width:250,live:!0,isSearch:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Год вашего рождения',
    value: '2026',
    type: 'text',
    bottomText: 'Пишите только цифры',
    placeholder: 'Год в формате YYYY',
    errorText: 'Допустимы только цифры',
    mask: /^[0-9]+$/,
    width: 300
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    value: '',
    type: 'text',
    placeholder: 'Найти по имени или году',
    width: 250,
    live: true,
    isSearch: true
  }
}`,...t.parameters?.docs?.source}}};const m=["TextField","Search"];export{t as Search,e as TextField,m as __namedExportsOrder,d as default};
