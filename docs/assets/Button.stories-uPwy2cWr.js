import{B as r}from"./Button-DBH2W8EG.js";import"./jsx-runtime-u17CrQMm.js";const l={title:"Example Button",component:r,parameters:{layout:"centered"},tags:["autodocs"],decorators:[n=>{const t=document.createElement("script");return t.src="/style_setter.js",t.type="module",document.head.appendChild(t),n()}]},e={args:{text:"Button Example",type:"primary",size:"medium",corners:"standard",disabled:!1,cls:"",onClick:()=>console.log("CustomButton")}},o={args:{text:"Exit",type:"secondary",size:"medium",corners:"standard",disabled:!1,cls:"",onClick:()=>console.log("IconButton"),iconPath:"svg-lib/alert-square.svg",labelAlign:"bottom"}},s={args:{onClick:()=>console.log("Icon"),iconPath:"svg-lib/checkmark-svgrepo-com.svg",type:"transparent",size:"large",corners:"round",disabled:!1,cls:"",staticIcon:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Button Example',
    type: 'primary',
    size: 'medium',
    corners: 'standard',
    disabled: false,
    cls: '',
    onClick: () => console.log('CustomButton')
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Exit',
    type: 'secondary',
    size: 'medium',
    corners: 'standard',
    disabled: false,
    cls: '',
    onClick: () => console.log('IconButton'),
    iconPath: 'svg-lib/alert-square.svg',
    labelAlign: 'bottom'
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    onClick: () => console.log('Icon'),
    iconPath: 'svg-lib/checkmark-svgrepo-com.svg',
    type: 'transparent',
    size: 'large',
    corners: 'round',
    disabled: false,
    cls: '',
    staticIcon: true
  }
}`,...s.parameters?.docs?.source}}};const i=["CustomButton","IconButton","Icon"];export{e as CustomButton,s as Icon,o as IconButton,i as __namedExportsOrder,l as default};
