(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{4065:function(e,r,t){Promise.resolve().then(t.bind(t,2424))},2424:function(e,r,t){"use strict";t.d(r,{ImageGenerationForm:function(){return D}});var n=t(7437),s=t(2265),a=t(3590),l=t(1229),i=t(9501),o=t(7053),d=t(7712),c=t(1994),m=t(3335);function u(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,m.m6)((0,c.W)(r))}let x=(0,d.j)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),f=s.forwardRef((e,r)=>{let{className:t,variant:s,size:a,asChild:l=!1,...i}=e,d=l?o.g7:"button";return(0,n.jsx)(d,{className:u(x({variant:s,size:a,className:t})),ref:r,...i})});f.displayName="Button";var h=t(6394);let p=(0,d.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),g=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)(h.f,{ref:r,className:u(p(),t),...s})});g.displayName=h.f.displayName;let j=i.RV,v=s.createContext({}),b=e=>{let{...r}=e;return(0,n.jsx)(v.Provider,{value:{name:r.name},children:(0,n.jsx)(i.Qr,{...r})})},y=()=>{let e=s.useContext(v),r=s.useContext(N),{getFieldState:t,formState:n}=(0,i.Gc)(),a=t(e.name,n);if(!e)throw Error("useFormField should be used within <FormField>");let{id:l}=r;return{id:l,name:e.name,formItemId:"".concat(l,"-form-item"),formDescriptionId:"".concat(l,"-form-item-description"),formMessageId:"".concat(l,"-form-item-message"),...a}},N=s.createContext({}),w=s.forwardRef((e,r)=>{let{className:t,...a}=e,l=s.useId();return(0,n.jsx)(N.Provider,{value:{id:l},children:(0,n.jsx)("div",{ref:r,className:u("space-y-2",t),...a})})});w.displayName="FormItem";let C=s.forwardRef((e,r)=>{let{className:t,...s}=e,{error:a,formItemId:l}=y();return(0,n.jsx)(g,{ref:r,className:u(a&&"text-destructive",t),htmlFor:l,...s})});C.displayName="FormLabel";let R=s.forwardRef((e,r)=>{let{...t}=e,{error:s,formItemId:a,formDescriptionId:l,formMessageId:i}=y();return(0,n.jsx)(o.g7,{ref:r,id:a,"aria-describedby":s?"".concat(l," ").concat(i):"".concat(l),"aria-invalid":!!s,...t})});R.displayName="FormControl";let k=s.forwardRef((e,r)=>{let{className:t,...s}=e,{formDescriptionId:a}=y();return(0,n.jsx)("p",{ref:r,id:a,className:u("text-[0.8rem] text-muted-foreground",t),...s})});k.displayName="FormDescription";let _=s.forwardRef((e,r)=>{let{className:t,children:s,...a}=e,{error:l,formMessageId:i}=y(),o=l?String(null==l?void 0:l.message):s;return o?(0,n.jsx)("p",{ref:r,id:i,className:u("text-[0.8rem] font-medium text-destructive",t),...a,children:o}):null});_.displayName="FormMessage";let F=s.forwardRef((e,r)=>{let{className:t,type:s,...a}=e;return(0,n.jsx)("input",{type:s,className:u("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",t),ref:r,...a})});F.displayName="Input";let I=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("textarea",{className:u("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",t),ref:r,...s})});I.displayName="Textarea";var S=t(1511);let E=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsxs)(S.fC,{ref:r,className:u("relative flex w-full touch-none select-none items-center",t),...s,children:[(0,n.jsx)(S.fQ,{className:"relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20",children:(0,n.jsx)(S.e6,{className:"absolute h-full bg-primary"})}),(0,n.jsx)(S.bU,{className:"block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"})]})});E.displayName=S.fC.displayName;var V=t(721);let z=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)(V.fC,{className:u("peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",t),...s,ref:r,children:(0,n.jsx)(V.bU,{className:u("pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0")})})});z.displayName=V.fC.displayName;let P=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("div",{ref:r,className:u("rounded-xl border bg-card text-card-foreground shadow",t),...s})});P.displayName="Card",s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("div",{ref:r,className:u("flex flex-col space-y-1.5 p-6",t),...s})}).displayName="CardHeader",s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("div",{ref:r,className:u("font-semibold leading-none tracking-tight",t),...s})}).displayName="CardTitle",s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("div",{ref:r,className:u("text-sm text-muted-foreground",t),...s})}).displayName="CardDescription";let U=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("div",{ref:r,className:u("p-6 pt-0",t),...s})});U.displayName="CardContent",s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("div",{ref:r,className:u("flex items-center p-6 pt-0",t),...s})}).displayName="CardFooter";let L=l.Ry({prompt:l.Z_().min(1,{message:"Prompt is required."}),negative_prompt:l.Z_().optional(),height:l.Rx().min(256).max(2048).optional(),width:l.Rx().min(256).max(2048).optional(),num_steps:l.Rx().max(20).default(20),strength:l.Rx().min(0).max(1).default(1),guidance:l.Rx().default(7.5),seed:l.Rx().int().optional()});function D(){let[e,r]=(0,s.useState)(!1),[t,l]=(0,s.useState)(null),[o,d]=(0,s.useState)(!1),c=(0,i.cI)({resolver:(0,a.F)(L),defaultValues:{prompt:"",negative_prompt:"",height:512,width:512,num_steps:20,strength:1,guidance:7.5}});async function m(e){d(!0);try{let r=new URLSearchParams({prompt:e.prompt,size:"".concat(e.width||512,"x").concat(e.height||512),optimization:"1"});e.negative_prompt&&r.append("negative_prompt",e.negative_prompt);let t=await fetch("/generate_img?".concat(r.toString()));if(!t.ok)throw Error("Failed to generate image");let n=await t.blob(),s=URL.createObjectURL(n);l(s)}catch(e){console.error("Error generating image:",e)}finally{d(!1)}}return(0,n.jsx)("div",{className:"container mx-auto p-4 sm:p-6 md:p-8",children:(0,n.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[(0,n.jsxs)("div",{className:"space-y-4 sm:space-y-6",children:[(0,n.jsx)("h2",{className:"text-xl sm:text-2xl font-bold",children:"图像生成表单"}),(0,n.jsx)(j,{...c,children:(0,n.jsxs)("form",{onSubmit:c.handleSubmit(m),className:"space-y-6",children:[(0,n.jsx)(b,{control:c.control,name:"prompt",render:e=>{let{field:r}=e;return(0,n.jsxs)(w,{children:[(0,n.jsx)(C,{children:"提示词"}),(0,n.jsx)(R,{children:(0,n.jsx)(I,{placeholder:"描述你想生成的图像...",...r})}),(0,n.jsx)(k,{children:"用于生成图像的文本描述。"}),(0,n.jsx)(_,{})]})}}),(0,n.jsx)(b,{control:c.control,name:"negative_prompt",render:e=>{let{field:r}=e;return(0,n.jsxs)(w,{children:[(0,n.jsx)(C,{children:"反向提示词"}),(0,n.jsx)(R,{children:(0,n.jsx)(I,{placeholder:"描述要在图像中避免的元素...",...r})}),(0,n.jsx)(k,{children:"描述在生成的图像中要避免的元素。"}),(0,n.jsx)(_,{})]})}}),(0,n.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,n.jsx)(z,{id:"advanced",checked:e,onCheckedChange:r}),(0,n.jsx)(g,{htmlFor:"advanced",children:"显示高级选项"})]}),e&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[(0,n.jsx)(b,{control:c.control,name:"height",render:e=>{let{field:r}=e;return(0,n.jsxs)(w,{children:[(0,n.jsx)(C,{children:"高度"}),(0,n.jsx)(R,{children:(0,n.jsx)(F,{type:"number",min:256,max:2048,...r,onChange:e=>r.onChange(e.target.value?Number(e.target.value):void 0)})}),(0,n.jsx)(k,{children:"图像高度（像素，256-2048）"}),(0,n.jsx)(_,{})]})}}),(0,n.jsx)(b,{control:c.control,name:"width",render:e=>{let{field:r}=e;return(0,n.jsxs)(w,{children:[(0,n.jsx)(C,{children:"宽度"}),(0,n.jsx)(R,{children:(0,n.jsx)(F,{type:"number",min:256,max:2048,...r,onChange:e=>r.onChange(e.target.value?Number(e.target.value):void 0)})}),(0,n.jsx)(k,{children:"图像宽度（像素，256-2048）"}),(0,n.jsx)(_,{})]})}})]}),(0,n.jsx)(b,{control:c.control,name:"num_steps",render:e=>{var r;let{field:t}=e;return(0,n.jsxs)(w,{children:[(0,n.jsx)(C,{children:"步数"}),(0,n.jsx)(R,{children:(0,n.jsx)(E,{min:1,max:20,step:1,value:[null!==(r=t.value)&&void 0!==r?r:0],onValueChange:e=>t.onChange(e[0])})}),(0,n.jsx)(k,{children:"扩散步数（1-20）"}),(0,n.jsx)(_,{})]})}}),(0,n.jsx)(b,{control:c.control,name:"strength",render:e=>{var r;let{field:t}=e;return(0,n.jsxs)(w,{children:[(0,n.jsx)(C,{children:"强度"}),(0,n.jsx)(R,{children:(0,n.jsx)(E,{min:0,max:1,step:.01,value:[null!==(r=t.value)&&void 0!==r?r:0],onValueChange:e=>t.onChange(e[0])})}),(0,n.jsx)(k,{children:"图像到图像转换强度（0-1）"}),(0,n.jsx)(_,{})]})}}),(0,n.jsx)(b,{control:c.control,name:"guidance",render:e=>{var r;let{field:t}=e;return(0,n.jsxs)(w,{children:[(0,n.jsx)(C,{children:"引导比例"}),(0,n.jsx)(R,{children:(0,n.jsx)(E,{min:0,max:20,step:.1,value:[null!==(r=t.value)&&void 0!==r?r:0],onValueChange:e=>t.onChange(e[0])})}),(0,n.jsx)(k,{children:"严格遵循提示词的程度"}),(0,n.jsx)(_,{})]})}}),(0,n.jsx)(b,{control:c.control,name:"seed",render:e=>{let{field:r}=e;return(0,n.jsxs)(w,{children:[(0,n.jsx)(C,{children:"种子"}),(0,n.jsx)(R,{children:(0,n.jsx)(F,{type:"number",...r,onChange:e=>r.onChange(e.target.value?Number(e.target.value):void 0)})}),(0,n.jsx)(k,{children:"用于可重复性的随机种子"}),(0,n.jsx)(_,{})]})}})]}),(0,n.jsx)(f,{type:"submit",className:"w-full sm:w-auto",disabled:o,children:o?"生成中...":"生成图像"})]})})]}),(0,n.jsxs)("div",{className:"space-y-4 sm:space-y-6",children:[(0,n.jsx)("h2",{className:"text-xl sm:text-2xl font-bold",children:"生成的图像"}),(0,n.jsx)(P,{className:"w-full aspect-square",children:(0,n.jsx)(U,{className:"flex items-center justify-center h-full",children:o?(0,n.jsx)("p",{className:"text-muted-foreground",children:"正在生成图像..."}):t?(0,n.jsx)("img",{src:t,alt:"Generated image",className:"max-w-full max-h-full object-contain"}):(0,n.jsx)("p",{className:"text-muted-foreground",children:"您生成的图像将显示在这里"})})})]})]})})}}},function(e){e.O(0,[449,971,117,744],function(){return e(e.s=4065)}),_N_E=e.O()}]);