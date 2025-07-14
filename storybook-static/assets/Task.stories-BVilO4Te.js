import{j as a}from"./jsx-runtime-WpklEt9D.js";function v({task:{id:e,title:o,state:i},onArchiveTask:N,onPinTask:I}){return a.jsxs("div",{className:`list-item ${i}`,children:[a.jsxs("label",{htmlFor:`archiveTask-${e}`,"aria-label":`archiveTask-${e}`,className:"checkbox",children:[a.jsx("input",{type:"checkbox",disabled:!0,name:"checked",id:`archiveTask-${e}`,checked:i==="TASK_ARCHIVED"}),a.jsx("span",{className:"checkbox-custom",onClick:()=>N(e)})]}),a.jsx("label",{htmlFor:`title-${e}`,"aria-label":o,className:"title",children:a.jsx("input",{type:"text",value:o,readOnly:!0,name:"title",id:`title-${e}`,placeholder:"Input title"})}),i!=="TASK_ARCHIVED"&&a.jsx("button",{className:"pin-button",onClick:()=>I(e),id:`pinTask-${e}`,"aria-label":`pinTask-${e}`,children:a.jsx("span",{className:"icon-star"})},`pinTask-${e}`)]})}v.__docgenInfo={description:"",methods:[],displayName:"Task",props:{task:{required:!0,tsType:{name:"signature",type:"object",raw:`{\r
  id: string;\r
  title: string;\r
  state: 'TASK_ARCHIVED' | 'TASK_INBOX' | 'TASK_PINNED';\r
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"title",value:{name:"string",required:!0}},{key:"state",value:{name:"union",raw:"'TASK_ARCHIVED' | 'TASK_INBOX' | 'TASK_PINNED'",elements:[{name:"literal",value:"'TASK_ARCHIVED'"},{name:"literal",value:"'TASK_INBOX'"},{name:"literal",value:"'TASK_PINNED'"}],required:!0}}]}},description:"Composition of the task"},onArchiveTask:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:"Event to change the task to archived"},onPinTask:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:"Event to change the task to pinned"}}};const{fn:c}=__STORYBOOK_MODULE_TEST__,y={onArchiveTask:c(),onPinTask:c()},K={component:v,title:"Task",tags:["autodocs"],excludeStories:/.*Data$/,args:{...y}},t={args:{task:{id:"1",title:"My Task",state:"TASK_INBOX"}}},s={args:{task:{id:"2",title:"My Pinned Task",state:"TASK_PINNED"}}},r={args:{task:{id:"3",title:"My Archived Task",state:"TASK_ARCHIVED"}}},n={args:{task:{id:"1",title:"My Taskaaaa",state:"TASK_INBOX"}}};var l,d,u;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    task: {
      id: "1",
      title: "My Task",
      state: "TASK_INBOX"
    }
  }
}`,...(u=(d=t.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var m,p,T;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    task: {
      id: "2",
      title: "My Pinned Task",
      state: "TASK_PINNED"
    }
  }
}`,...(T=(p=s.parameters)==null?void 0:p.docs)==null?void 0:T.source}}};var k,A,g;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    task: {
      id: "3",
      title: "My Archived Task",
      state: "TASK_ARCHIVED"
    }
  }
}`,...(g=(A=r.parameters)==null?void 0:A.docs)==null?void 0:g.source}}};var _,h,S;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    task: {
      "id": "1",
      "title": "My Taskaaaa",
      "state": "TASK_INBOX"
    }
  }
}`,...(S=(h=n.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};const D=["ActionsData","Default","Pinned","Archived","Aaaa"],x=Object.freeze(Object.defineProperty({__proto__:null,Aaaa:n,ActionsData:y,Archived:r,Default:t,Pinned:s,__namedExportsOrder:D,default:K},Symbol.toStringTag,{value:"Module"}));export{t as D,v as T,x as a};
