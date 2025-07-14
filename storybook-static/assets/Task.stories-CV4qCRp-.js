import{j as t}from"./jsx-runtime-DplfuxOl.js";function A({task:{id:e,title:i,state:r},onArchiveTask:h,onPinTask:v}){return t.jsxs("div",{className:`list-item ${r}`,children:[t.jsxs("label",{htmlFor:`archiveTask-${e}`,"aria-label":`archiveTask-${e}`,className:"checkbox",children:[t.jsx("input",{type:"checkbox",disabled:!0,name:"checked",id:`archiveTask-${e}`,checked:r==="TASK_ARCHIVED"}),t.jsx("span",{className:"checkbox-custom",onClick:()=>h(e)})]}),t.jsx("label",{htmlFor:`title-${e}`,"aria-label":i,className:"title",children:t.jsx("input",{type:"text",value:i,readOnly:!0,name:"title",id:`title-${e}`,placeholder:"Input title"})}),r!=="TASK_ARCHIVED"&&t.jsx("button",{className:"pin-button",onClick:()=>v(e),id:`pinTask-${e}`,"aria-label":`pinTask-${e}`,children:t.jsx("span",{className:"icon-star"})},`pinTask-${e}`)]})}A.__docgenInfo={description:"",methods:[],displayName:"Task",props:{task:{required:!0,tsType:{name:"signature",type:"object",raw:`{\r
  id: string;\r
  title: string;\r
  state: 'TASK_ARCHIVED' | 'TASK_INBOX' | 'TASK_PINNED';\r
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"title",value:{name:"string",required:!0}},{key:"state",value:{name:"union",raw:"'TASK_ARCHIVED' | 'TASK_INBOX' | 'TASK_PINNED'",elements:[{name:"literal",value:"'TASK_ARCHIVED'"},{name:"literal",value:"'TASK_INBOX'"},{name:"literal",value:"'TASK_PINNED'"}],required:!0}}]}},description:"Composition of the task"},onArchiveTask:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:"Event to change the task to archived"},onPinTask:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:"Event to change the task to pinned"}}};const{fn:o}=__STORYBOOK_MODULE_TEST__,_={onArchiveTask:o(),onPinTask:o()},S={component:A,title:"Task",tags:["autodocs"],excludeStories:/.*Data$/,args:{..._}},a={args:{task:{id:"1",title:"My Task",state:"TASK_INBOX"}}},s={args:{task:{id:"2",title:"My Pinned Task",state:"TASK_PINNED"}}},n={args:{task:{id:"3",title:"My Archived Task",state:"TASK_ARCHIVED"}}};var c,l,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    task: {
      id: "1",
      title: "My Task",
      state: "TASK_INBOX"
    }
  }
}`,...(d=(l=a.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var u,m,p;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    task: {
      id: "2",
      title: "My Pinned Task",
      state: "TASK_PINNED"
    }
  }
}`,...(p=(m=s.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var T,k,g;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    task: {
      id: "3",
      title: "My Archived Task",
      state: "TASK_ARCHIVED"
    }
  }
}`,...(g=(k=n.parameters)==null?void 0:k.docs)==null?void 0:g.source}}};const y=["ActionsData","Default","Pinned","Archived"],D=Object.freeze(Object.defineProperty({__proto__:null,ActionsData:_,Archived:n,Default:a,Pinned:s,__namedExportsOrder:y,default:S},Symbol.toStringTag,{value:"Module"}));export{a as D,A as T,D as a};
