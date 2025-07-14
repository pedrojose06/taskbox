import{j as a}from"./jsx-runtime-BL5t43oT.js";function I({task:{id:e,title:c,state:o},onArchiveTask:D,onPinTask:E}){return a.jsxs("div",{className:`list-item ${o}`,children:[a.jsxs("label",{htmlFor:`archiveTask-${e}`,"aria-label":`archiveTask-${e}`,className:"checkbox",children:[a.jsx("input",{type:"checkbox",disabled:!0,name:"checked",id:`archiveTask-${e}`,checked:o==="TASK_ARCHIVED"}),a.jsx("span",{className:"checkbox-custom",onClick:()=>D(e)})]}),a.jsx("label",{htmlFor:`title-${e}`,"aria-label":c,className:"title",children:a.jsx("input",{type:"text",value:c,readOnly:!0,name:"title",id:`title-${e}`,placeholder:"Input title"})}),o!=="TASK_ARCHIVED"&&a.jsx("button",{className:"pin-button",onClick:()=>E(e),id:`pinTask-${e}`,"aria-label":`pinTask-${e}`,children:a.jsx("span",{className:"icon-star"})},`pinTask-${e}`)]})}I.__docgenInfo={description:"",methods:[],displayName:"Task",props:{task:{required:!0,tsType:{name:"signature",type:"object",raw:`{\r
  id: string;\r
  title: string;\r
  state: 'TASK_ARCHIVED' | 'TASK_INBOX' | 'TASK_PINNED';\r
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"title",value:{name:"string",required:!0}},{key:"state",value:{name:"union",raw:"'TASK_ARCHIVED' | 'TASK_INBOX' | 'TASK_PINNED'",elements:[{name:"literal",value:"'TASK_ARCHIVED'"},{name:"literal",value:"'TASK_INBOX'"},{name:"literal",value:"'TASK_PINNED'"}],required:!0}}]}},description:"Composition of the task"},onArchiveTask:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:"Event to change the task to archived"},onPinTask:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:"Event to change the task to pinned"}}};const{fn:l}=__STORYBOOK_MODULE_TEST__,K={onArchiveTask:l(),onPinTask:l()},x={component:I,title:"Task",tags:["autodocs"],excludeStories:/.*Data$/,args:{...K}},t={args:{task:{id:"1",title:"My Task",state:"TASK_INBOX"}}},s={args:{task:{id:"2",title:"My Pinned Task",state:"TASK_PINNED"}}},r={args:{task:{id:"3",title:"My Archived Task",state:"TASK_ARCHIVED"}}},n={args:{task:{id:"1",title:"My Taskaaaa",state:"TASK_INBOX"}}},i={args:{task:{id:"2",title:"bbbbbb",state:"TASK_PINNED"}}};var d,u,m;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    task: {
      id: "1",
      title: "My Task",
      state: "TASK_INBOX"
    }
  }
}`,...(m=(u=t.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var p,T,k;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    task: {
      id: "2",
      title: "My Pinned Task",
      state: "TASK_PINNED"
    }
  }
}`,...(k=(T=s.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var g,A,_;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    task: {
      id: "3",
      title: "My Archived Task",
      state: "TASK_ARCHIVED"
    }
  }
}`,...(_=(A=r.parameters)==null?void 0:A.docs)==null?void 0:_.source}}};var b,S,h;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    task: {
      "id": "1",
      "title": "My Taskaaaa",
      "state": "TASK_INBOX"
    }
  }
}`,...(h=(S=n.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var N,v,y;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    task: {
      "id": "2",
      "title": "bbbbbb",
      "state": "TASK_PINNED"
    }
  }
}`,...(y=(v=i.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};const O=["ActionsData","Default","Pinned","Archived","Aaaa","Bbbbb"],j=Object.freeze(Object.defineProperty({__proto__:null,Aaaa:n,ActionsData:K,Archived:r,Bbbbb:i,Default:t,Pinned:s,__namedExportsOrder:O,default:x},Symbol.toStringTag,{value:"Module"}));export{t as D,I as T,j as a};
