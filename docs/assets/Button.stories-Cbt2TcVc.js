import{B as r}from"./Button-snFKyrCZ.js";const c={title:"Example Button",component:r,parameters:{layout:"centered"},tags:["autodocs"],decorators:[o=>{const n=document.createElement("script");return n.src="/style_setter.js",n.type="module",document.head.appendChild(n),o()}]},e={args:{text:"Button Example",type:"primary",size:"medium",corners:"standard",disabled:!1,cls:"",onClick:()=>console.log("CustomButton")}},s={args:{text:"Exit",type:"secondary",size:"medium",corners:"standard",disabled:!1,cls:"",onClick:()=>console.log("IconButton"),iconPath:"svg/alert-square.svg",labelAlign:"bottom"}},t={args:{onClick:()=>console.log("Icon"),iconPath:"svg/alert-square.svg",type:"transparent",size:"large",corners:"round",disabled:!1,cls:"",staticIcon:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Button Example',
    type: 'primary',
    size: 'medium',
    corners: 'standard',
    disabled: false,
    cls: '',
    onClick: () => console.log('CustomButton')
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Exit',
    type: 'secondary',
    size: 'medium',
    corners: 'standard',
    disabled: false,
    cls: '',
    onClick: () => console.log('IconButton'),
    iconPath: 'svg/alert-square.svg',
    labelAlign: 'bottom'
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    onClick: () => console.log('Icon'),
    iconPath: 'svg/alert-square.svg',
    type: 'transparent',
    size: 'large',
    corners: 'round',
    disabled: false,
    cls: '',
    staticIcon: true
  }
}`,...t.parameters?.docs?.source}}};const l=["CustomButton","IconButton","Icon"];export{e as CustomButton,t as Icon,s as IconButton,l as __namedExportsOrder,c as default};
