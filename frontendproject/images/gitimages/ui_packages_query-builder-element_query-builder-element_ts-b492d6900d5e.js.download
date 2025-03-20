"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["ui_packages_query-builder-element_query-builder-element_ts"],{26196:(t,e,i)=>{i.d(e,{XX:()=>s.XX,_3:()=>s._3,qy:()=>s.qy});var s=i(31143)},80528:(t,e,i)=>{function s(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}i.d(e,{CN:()=>SearchItem,P$:()=>QueryEvent,VJ:()=>h,dS:()=>FetchDataEvent,k8:()=>r,m4:()=>l,nM:()=>n,o7:()=>a,qi:()=>FilterItem,yk:()=>o});let a={DIRECTORY:"Search in this directory",ORG:"Search in this organization",OWNER:"Search in this owner",REPO:"Search in this repository",GITHUB:"Search all of GitHub",GENERAL:"Submit search",COMMAND:"Run command",COPILOT_CHAT:"Start a new Copilot thread",COPILOT_SEARCH:"Search with Copilot",EXPLORE:"Learn More",DEFAULT:"Jump to"},r="Autocomplete";let FilterItem=class FilterItem extends Event{constructor({filter:t,value:e,name:i="",description:a="",inlineDescription:r=!1,priority:n=1/0,icon:l,avatar:o,action:h}){super("filter-item"),s(this,"name",void 0),s(this,"filter",void 0),s(this,"value",void 0),s(this,"description",void 0),s(this,"inlineDescription",!1),s(this,"action",void 0),s(this,"priority",void 0),s(this,"icon",void 0),s(this,"avatar",void 0),this.filter=t,this.value=e,this.name=i,this.description=a,this.inlineDescription=r,this.priority=n,this.icon=l,this.avatar=o,this.action=h}};function n(t){return t instanceof Object}let l={Apps:"apps",Archived:"archived",Book:"book",Bookmark:"bookmark",Branch:"branch",Calendar:"calendar",Circle:"circle",Code:"code",CodeReview:"code-review",CodeSquare:"code-square",Comment:"comment",CommentDiscussion:"comment-discussion",Copilot:"copilot",CopilotError:"copilot-error",Codespaces:"codespaces",CreditCard:"credit-card",Default:"default",DeviceDesktop:"device-desktop",DeviceMobile:"device-mobile",Discussion:"discussion",Draft:"draft",FileCode:"file-code",Filter:"filter",Forbidden:"forbidden",Gift:"gift",Globe:"globe",Heart:"heart",History:"history",Issue:"issue",IssueOpened:"issue-opened",IssueClosed:"issueClosed",Iterations:"iterations",Mention:"mention",Merged:"merged",Milestone:"milestone",No:"no",Not:"not",Organization:"organization",Package:"package",Pencil:"pencil",Person:"person",Play:"play",PlusCircle:"plus-circle",Project:"project",PullRequest:"pullRequest",Question:"question",Reaction:"reaction",Repo:"repo",Rocket:"rocket",Search:"search",Server:"server",ShieldCheck:"shield-check",SingleSelect:"single-select",Sort:"sort",Tag:"tag",Team:"team",Telescope:"telescope",Trash:"trash",Workflow:"workflow"},o={Entity:"--color-prettylights-syntax-entity",Constant:"--color-prettylights-syntax-constant",Keyword:"--color-prettylights-syntax-keyword",Variable:"--color-prettylights-syntax-variable",String:"--color-prettylights-syntax-string"};let SearchItem=class SearchItem extends Event{constructor({id:t,priority:e,value:i,action:a,description:r="",icon:n,scope:l="DEFAULT",prefixText:o,prefixColor:h,isFallbackSuggestion:u,isUpdate:c}){super(c?"update-item":"search-item"),s(this,"id",void 0),s(this,"priority",void 0),s(this,"value",void 0),s(this,"action",void 0),s(this,"description",void 0),s(this,"icon",void 0),s(this,"scope",void 0),s(this,"prefixText",void 0),s(this,"prefixColor",void 0),s(this,"isFallbackSuggestion",void 0),this.id=t,this.priority=e,this.value=i,this.prefixText=o,this.prefixColor=h,this.action=a,this.description=r,this.icon=n,this.scope=l,this.isFallbackSuggestion=u||!1}};let h={Normal:"normal",Entity:"entity",Constant:"constant",FilterValue:"filter-value"};let FetchDataEvent=class FetchDataEvent extends Event{constructor(t){super("fetch-data"),this.fetchPromise=t}};let QueryEvent=class QueryEvent extends Event{toString(){return this.rawQuery}constructor(t,e,i){super("query"),this.parsedQuery=t,this.rawQuery=e,this.parsedMetadata=i}};Event},62596:(t,e,i)=>{i.d(e,{CN:()=>l.CN,MK:()=>QueryBuilderElement,dS:()=>l.dS,m4:()=>l.m4,qi:()=>l.qi});var s=i(39595),a=i(35908),r=i(26196),n=i(46988),l=i(80528);function o(t,e){if(e.has(t))throw TypeError("Cannot initialize the same private elements twice on an object")}function h(t,e,i){if(!e.has(t))throw TypeError("attempted to "+i+" private field on non-instance");return e.get(t)}function u(t,e){var i=h(t,e,"get");return i.get?i.get.call(t):i.value}function c(t,e,i){o(t,e),e.set(t,i)}function d(t,e,i){var s=h(t,e,"set");return!function(t,e,i){if(e.set)e.set.call(t,i);else{if(!e.writable)throw TypeError("attempted to set read only private field");e.value=i}}(t,s,i),i}function p(t,e,i){if(!e.has(t))throw TypeError("attempted to get private field on non-instance");return i}function y(t,e){o(t,e),e.add(t)}function m(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function v(t,e,i,s){var a,r=arguments.length,n=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n}let FeedbackEvent=class FeedbackEvent extends Event{constructor(t,e,i){super("query-builder-feedback",{bubbles:!0,cancelable:!0}),this.key=t,this.text=e,this.data=i}};let f=(t,e)=>t.priority-e.priority;var b=new WeakMap,g=new WeakMap,w=new WeakMap,$=new WeakMap,L=new WeakMap,I=new WeakMap,C=new WeakMap,A=new WeakMap,k=new WeakMap,q=new WeakMap,E=new WeakMap,S=new WeakMap,x=new WeakMap,W=new WeakMap,F=new WeakMap,M=new WeakMap,B=new WeakMap,T=new WeakMap,P=new WeakMap,Q=new WeakMap,R=new WeakMap,O=new WeakMap,V=new WeakMap,D=new WeakSet,N=new WeakSet,z=new WeakSet,j=new WeakSet,_=new WeakSet,J=new WeakSet,U=new WeakSet,X=new WeakSet,H=new WeakSet,K=new WeakSet,G=new WeakSet,Y=new WeakSet,Z=new WeakSet;let QueryBuilderElement=class QueryBuilderElement extends HTMLElement{get input(){return(0,s.FB)(this,"input")}get styledInputContent(){return(0,s.FB)(this,"styledInputContent")}get styledInputContainer(){return(0,s.FB)(this,"styledInputContainer")}get styledInput(){return(0,s.FB)(this,"styledInput")}get overlay(){return(0,s.FB)(this,"overlay")}get sizer(){return(0,s.FB)(this,"sizer")}get clearButton(){return(0,s.FB)(this,"clearButton")}get resultsList(){return(0,s.FB)(this,"resultsList")}get screenReaderFeedback(){return(0,s.FB)(this,"screenReaderFeedback")}get query(){return this.input.value}get i18n(){return{suggestion:"suggestion",suggestions:"suggestions",clear_search:"Input cleared."}}navigate(t){let e=t?.target?.closest("a")?.getAttribute("href");e&&((0,n.BI)("query-builder-element.click",{url:e}),this.dispatchEvent(new CustomEvent("query-builder:navigate",{bubbles:!0,detail:{url:e}})))}get closed(){return this.overlay&&this.overlay.hasAttribute("hidden")}set closed(t){if(t)this.closed||(this.overlay&&(this.overlay.hidden=!0),this.input.setAttribute("aria-expanded","false"),u(this,b)?.clearSelection());else{if(!this.closed)return;this.overlay&&(this.overlay.hidden=!1),this.input.setAttribute("aria-expanded","true")}}show(){this.closed=!1,this.overlay?.scrollIntoView?.({behavior:"smooth",block:"nearest"})}hide(){"false"===this.resultsList.getAttribute("data-persist-list")&&(this.closed=!0)}initialize(t,e){for(let i of(this.parser=t,d(this,R,!0),d(this,P,!0),e))this.attachProvider(i);d(this,P,!1),d(this,$,e.reduce((t,e)=>({...t,[e.value]:e}),{}))}detachElementDefinitionReadyForProviders(){this.removeEventListener("query-builder:ready-to-request-provider",this.elementDefinitionReadyForProviders)}connectedCallback(){u(this,I)?.abort();let{signal:t}=d(this,I,new AbortController);t.addEventListener("abort",()=>{d(this,$,{})}),d(this,x,this.input.getAttribute("id")),this.hasAttribute("defer-request-providers")||(document.addEventListener("query-builder:ready-to-request-provider",this.elementDefinitionReadyForProviders,!0),this.readyForRequestProviders())}readyForRequestProviders(){p(this,Z,td).call(this)>0&&u(this,Q)||(d(this,b,u(this,b)||new a.A(this.input,this.resultsList,{tabInsertsSuggestions:!1})),this.requestProviders())}async requestProviders(){d(this,Q,!0),await Promise.resolve(),d(this,P,!0),this.dispatchEvent(new Event("query-builder:request-provider",{bubbles:!0})),d(this,P,!1),d(this,F,new Map);let t=this.parseInputValue();this.styleInputText(t),this.toggleClearButtonVisibility()}parseInputValue(){return this.parsedMetadata=this.parser.parse(this.input.value,this.input.selectionStart||0),this.parser.flatten(this.parsedMetadata)}attachProvider(t){if(!u(this,I))return;let{signal:e}=u(this,I);if(!u(this,P))throw Error("Can't attach providers after the query builder has been connected");u(this,$)[t.value]||(u(this,$)[t.value]=t,"filter"===t.type?(u(this,L).add(t.value),t.addEventListener("filter-item",e=>{u(this,O).call(this,u(this,S),t),u(this,S).get(t)?.push(e),p(this,D,tt).call(this)},{signal:e}),t.addEventListener("show",()=>{u(this,E).add(t),p(this,D,tt).call(this)},{signal:e}),t.addEventListener("fetch-data",async t=>{let e=new Promise(t=>setTimeout(t,u(this,B)));d(this,T,Promise.race([Promise.all([u(this,T),t.fetchPromise]),e]));let i=u(this,T);try{await i}catch(t){if("AbortError"!==t.name)throw d(this,T,!1),t}i===u(this,T)&&(d(this,T,!1),p(this,D,tt).call(this),this.updateVisibility())},{signal:e})):(t.addEventListener("fetch-data",async e=>{u(this,q).delete(t),await e.fetchPromise,u(this,A).set(t,u(this,k).get(t)||[]),u(this,k).delete(t),p(this,D,tt).call(this)}),t.addEventListener("search-item",e=>{u(this,O).call(this,u(this,A),t),u(this,k).has(t)?u(this,k).get(t)?.push(e):(u(this,q).has(t)&&(u(this,A).set(t,[]),u(this,q).delete(t)),u(this,A).get(t)?.push(e),p(this,D,tt).call(this))},{signal:e}),t.addEventListener("update-item",e=>{let i=u(this,A).get(t);if(!i)return;let s=i.findIndex(t=>t.id===e.id);s<0||(i[s]=e,p(this,D,tt).call(this))},{signal:e})))}disconnectedCallback(){u(this,I)?.abort()}comboboxCommit(t){let e=t.target,i=e?.getAttribute("data-type"),s=e?.getAttribute("data-value")||"",a=e?.getAttribute("data-replace-query-with")||"",r=parseInt(e?.getAttribute("data-move-caret-to")||"0")||0,n=this.parseInputValue();if("url-result"===i);else if("filter-result"===i)n.pop(),n.push({type:"filter",filter:s,value:""});else if("command-result"===i){let t=e.getAttribute("data-command-name")||"",i=JSON.parse(e.getAttribute("data-command-payload")||"{}");this.dispatchEvent(new CustomEvent(t,{detail:i}))}else if("query-result"===i){if(a)this.input.value=a,this.input.focus(),n=void 0;else{let t=this.parser.flatten(this.parser.parse(s,0));n.push(...t),n.push({type:"text",value:""})}}else"filter-item"===i&&(a?(this.input.value=a,this.input.focus(),n=void 0):this.addSelectedItemToFilter(s,n));if(this.parseQuery(n),a){let t=-1===r?this.input.value.length:r;this.input.setSelectionRange(t,t)}this.input.removeAttribute("aria-activedescendant")}addSelectedItemToFilter(t,e){let i=/\s/.test(t),s=e.pop();if(s?.type==="filter"){let a=s.value.split(",");a.pop(),a.push(i?`"${t}"`:t),e.push({type:"filter",filter:s?.filter,value:a.join(",")}),e.push({type:"text",value:""})}else s&&e.push(s)}async inputChange(){await this.parseQuery()}inputBlur(){if(clearTimeout(this.focusTimeout),u(this,g)){d(this,g,!1);return}this.styledInput.classList.remove(u(this,W)),this.input.removeAttribute("aria-activedescendant"),this.hide()}resultsMousedown(){d(this,g,!0)}async inputFocus(){this.styledInput.classList.add(u(this,W)),this.readyForRequestProviders(),u(this,b).start();let t=this.input.value;this.lastParsedQuery&&this.lastParsedQuery===this.input.value||await this.parseQuery(),this.closed&&this.input.value===t&&this.input.setSelectionRange(0,this.input.value.length),this.focusTimeout?clearTimeout(this.focusTimeout):this.focusTimeout=setTimeout(()=>{this.input.focus()},this.FOCUS_TIMEOUT_VALUE)}moveCaretToEndOfInput(){this.input.setSelectionRange(this.input.value.length,this.input.value.length)}hasFocus(){return this.styledInput.classList.contains(u(this,W))}inputKeydown(t){let e=t.key;if("Escape"===e)this.hide();else if("Enter"===e){let e=this.resultsList.querySelector('[aria-selected="true"], [data-combobox-option-default="true"]');if(!e||"true"===e.getAttribute("aria-disabled"))return;let i=e.querySelector("a");i&&(t.ctrlKey||t.metaKey?window.open(i.getAttribute("href")||"","_blank"):i.click())}}inputSubmit(){this.hide()}clearButtonFocus(t){let e=t.relatedTarget;e&&e===this.input&&this.show()}clearButtonBlur(){this.hide()}toggleClearButtonVisibility(){this.clearButton&&(""!==this.input.value?!1!==this.clearButton.hidden&&(this.clearButton.hidden=!1):this.clearButton.hidden=!0)}updateVisibility(){this.hasFocus()&&(u(this,S).size>0||u(this,A).size>0||u(this,E).size>0?this.show():u(this,T)||this.hide())}getLeadingVisual(t,e){if(e){let t="org"===e.type?"avatar avatar-1 avatar-small":"avatar avatar-1 avatar-small circle";return(0,r.qy)`<img src="${e.url}" alt="" role="presentation" class="${t}" />`}if(t&&(0,l.nM)(t))return(0,r.qy)([t.html]);let i=document.getElementById(`${t}-icon`);return(0,r.qy)([i?.innerHTML])}updateScreenReaderFeedback(t){let e=new FeedbackEvent("NEW_RESULTS",t,{});this.dispatchEvent(e),this.screenReaderFeedback.textContent=e.text}async clear(){this.dispatchEvent(new CustomEvent("query-builder:clear",{bubbles:!0,cancelable:!0}))&&await this.clearInput()}async clearInput({focusInput:t=!0}={}){await this.parseQuery([],t),d(this,w,!0)}async parseQuery(t,e=!0){u(this,C)?.abort();let{signal:i}=d(this,C,new AbortController);if(t){let e=t.map(t=>"filter"===t.type?`${t.filter}:${t.value}`:t.value).join(u(this,R)?"":" "),i=Object.getOwnPropertyDescriptor(Object.getPrototypeOf(this.input),"value")?.set;i?i?.call(this.input,e):this.input.value=e,this.input.dispatchEvent(new Event("change",{bubbles:!0}))}else t=this.parseInputValue();if(this.lastParsedQuery=this.input.value,await new Promise(t=>requestAnimationFrame(t)),i.aborted||(this.styleInputText(t),e&&this.input.focus(),await new Promise(t=>setTimeout(t,100)),i.aborted))return;for(let t of u(this,A).keys())u(this,q).add(t);u(this,S).clear(),u(this,E).clear();let s=new l.P$(t,this.input.value,this.parsedMetadata);this.dispatchEvent(s);let a=!1;for(let t of u(this,q).keys())u(this,A).delete(t),u(this,q).delete(t),a=!0;a&&p(this,D,tt).call(this),this.updateVisibility()}styleInputText(t){p(this,G,tu).call(this,this.input.value);let e=document.createDocumentFragment();for(let i of t){let t=document.createElement("span"),s=document.createElement("span");s.textContent=" ";let a=!u(this,R);if("filter"===i.type){let{filter:e,value:r}=i,n=document.createElement("span");t.setAttribute("data-type","filter-expression"),n.setAttribute("data-type","filter"),n.textContent=e;let l=document.createElement("span");l.textContent=this.filterKey;let o=document.createElement("span");o.setAttribute("data-type","filter-value"),o.textContent=r,t.appendChild(n),t.appendChild(l),t.appendChild(o),a&&t.appendChild(s)}else a?t.textContent=`${i.value} `:t.textContent=i.value,i.style===l.VJ.Constant?t.classList.add("qb-constant"):i.style===l.VJ.Entity?t.classList.add("qb-entity"):i.style===l.VJ.FilterValue&&t.classList.add("qb-filter-value");e.append(t),p(this,Y,tc).call(this)}this.styledInputContent.replaceChildren(e)}constructor(...t){super(...t),y(this,D),y(this,N),y(this,z),y(this,j),y(this,_),y(this,J),y(this,U),y(this,X),y(this,H),y(this,K),y(this,G),y(this,Y),y(this,Z),c(this,b,{writable:!0,value:void 0}),c(this,g,{writable:!0,value:!1}),c(this,w,{writable:!0,value:!1}),c(this,$,{writable:!0,value:{}}),c(this,L,{writable:!0,value:new Set}),c(this,I,{writable:!0,value:null}),c(this,C,{writable:!0,value:null}),c(this,A,{writable:!0,value:new Map}),c(this,k,{writable:!0,value:new Map}),c(this,q,{writable:!0,value:new Set}),c(this,E,{writable:!0,value:new Set}),c(this,S,{writable:!0,value:new Map}),c(this,x,{writable:!0,value:void 0}),c(this,W,{writable:!0,value:"QueryBuilder-focus"}),c(this,F,{writable:!0,value:new Map}),c(this,M,{writable:!0,value:150}),c(this,B,{writable:!0,value:3e3}),c(this,T,{writable:!0,value:!1}),c(this,P,{writable:!0,value:!1}),c(this,Q,{writable:!0,value:!1}),m(this,"parser",{parse:p(this,K,th).bind(this),flatten:t=>t}),m(this,"parsedMetadata",void 0),m(this,"renderSingularItemNames",!1),c(this,R,{writable:!0,value:!1}),m(this,"lastParsedQuery",void 0),m(this,"FOCUS_TIMEOUT_VALUE",100),m(this,"minWidth",300),m(this,"elementDefinitionReadyForProviders",t=>{t.detail.id===u(this,x)&&(this.readyForRequestProviders(),t.stopImmediatePropagation())}),c(this,O,{writable:!0,value:(t,e)=>{t.has(e)||t.set(e,[])}}),c(this,V,{writable:!0,value:!1})}};function tt(){u(this,V)||(d(this,V,!0),this.toggleClearButtonVisibility(),d(this,V,!1),p(this,j,ts).call(this))}function te(){if(0!==u(this,E).size)return(0,r.qy)`<li role="presentation" class="ActionList-sectionDivider">
      <h3 role="presentation" class="ActionList-sectionDivider-title p-2 text-left" aria-hidden="true">
        Suggested filters
      </h3>
      <ul role="presentation">
        ${[...u(this,E)].sort(f).map(t=>p(this,X,tl).call(this,t))}
      </ul>
    </li>`}function ti(t,e=!1){let i=[],s=this.parseInputValue().at(-1);if("filter"===t.type?t.manuallyDetermineFilterEligibility?i=u(this,S).get(t)?.sort(f).map(t=>p(this,H,to).call(this,t))||[]:s?.type==="filter"&&(i=u(this,S).get(t)?.filter(t=>t.filter===s.filter).sort(f).map(t=>p(this,H,to).call(this,t))||[]):i=[...u(this,A).get(t)||[]].filter(t=>t.isFallbackSuggestion===e).sort(f).map(t=>p(this,J,tr).call(this,t)),i.length)return""===t.name?(0,r.qy)`<li role="presentation" class="ActionList-sectionDivider">
        <ul role="presentation">
          ${i}
        </ul>
      </li>`:(0,r.qy)`<li role="presentation" class="ActionList-sectionDivider">
        <h3
          role="presentation"
          class="ActionList-sectionDivider-title QueryBuilder-sectionTitle p-2 text-left"
          aria-hidden="true"
        >
          ${t.name}
        </h3>
        <ul role="presentation">
          ${i}
        </ul>
      </li>`}function ts(){let t,e=Object.values(u(this,$)).sort((t,e)=>t.priority-e.priority).map(t=>p(this,z,ti).call(this,t)).filter(t=>void 0!==t);u(this,T)||0!==e.length||(e=Object.values(u(this,$)).sort((t,e)=>t.priority-e.priority).map(t=>p(this,z,ti).call(this,t,!0)).filter(t=>void 0!==t));let i=p(this,N,te).call(this);i&&e.push(i),0===e.length?u(this,T)||(this.resultsList.textContent="",(0,r.XX)((0,r.qy)``,this.resultsList)):(0,r.XX)((0,r.qy)`${e.map((t,i)=>i===e.length-1?t:(0,r.qy)`${t}
                <li aria-hidden="true" class="ActionList-sectionDivider"></li>`)}`,this.resultsList);let s=this.resultsList.querySelectorAll('[role="option"]').length,a=1===s?this.i18n.suggestion:this.i18n.suggestions;t=`${s} ${a}.`,u(this,w)&&(t=`${this.i18n.clear_search} ${t}`,d(this,w,!1)),this.screenReaderFeedback.textContent===t&&(t+="\xa0"),setTimeout(()=>this.updateScreenReaderFeedback(t),u(this,M))}function ta(t){if(t)return t.replace(/\s/g,"-").toLowerCase()}function tr({value:t,prefixText:e,prefixColor:i,target:s,action:a,description:n,icon:o,scope:h}){if("url"in a){let c="GENERAL"===h?`${l.o7[h]}`:`jump to this ${s.singularItemName}`,d=n?`, ${n}`:"",y=`${e?`${e} `:""}${t}${d}, ${c}`,m=null;return e&&(m=(0,r.qy)`
          <span>
            <div class="d-inline-flex position-relative">
              <div
                class="position-absolute rounded-1 flex-items-stretch height-full width-full"
                style="opacity: 0.1; background-color: var(${i})"
              ></div>
              <div class="px-1" style="color: var(${i})">${e}</div>
            </div>
            ${p(this,U,tn).call(this,t)}
          </span>
        `),(0,r.qy)`<li
        role="option"
        class="ActionListItem"
        data-type="url-result"
        id="${u(this,x)||"search-item"}-result-${p(this,_,ta).call(this,t)}"
        data-value="${t}"
        aria-label="${y}"
      >
        <a
          href="${a.url}"
          data-action="click:query-builder#navigate"
          tabindex="-1"
          class="QueryBuilder-ListItem-link ActionListContent ActionListContent--visual16 QueryBuilder-ListItem"
        >
          ${o?(0,r.qy)`<span
                id="${u(this,x)||"search-item"}-result-${p(this,_,ta).call(this,t)}--leading"
                class="ActionListItem-visual ActionListItem-visual--leading"
              >
                ${this.getLeadingVisual(o)}
              </span>`:null}
          <span class="ActionListItem-descriptionWrap">
            <span class="ActionListItem-label text-normal"> ${m||p(this,U,tn).call(this,t)} </span>
            ${n?(0,r.qy)`<span class="ActionListItem-description">${n}</span>`:null}
          </span>

          <span aria-hidden="true" class="ActionListItem-description QueryBuilder-ListItem-trailing"
            >${l.o7[h]}</span
          >
        </a>
      </li>`}if("commandName"in a){let e=l.o7[h]||l.o7.COMMAND,i=n?`, ${n}`:"",s=`${t}${i}, ${e}`;return(0,r.qy)`<li
        role="option"
        class="ActionListItem"
        data-type="command-result"
        id="${u(this,x)||"search-item"}-result-${p(this,_,ta).call(this,t)}"
        data-value="${t}"
        data-command-name="${a.commandName}"
        data-command-payload="${JSON.stringify(a.data)}"
        aria-label="${s}"
      >
        <span class="ActionListContent ActionListContent--visual16 QueryBuilder-ListItem">
          ${o?(0,r.qy)`<span
                id="${u(this,x)||"search-item"}-result-${p(this,_,ta).call(this,t)}--leading"
                class="ActionListItem-visual ActionListItem-visual--leading"
              >
                ${this.getLeadingVisual(o)}
              </span>`:null}
          <span class="ActionListItem-descriptionWrap">
            <span class="ActionListItem-label text-normal"> ${p(this,U,tn).call(this,t)} </span>
            ${n?(0,r.qy)`<span class="ActionListItem-description">${n}</span>`:null}
          </span>

          <span aria-hidden="true" class="ActionListItem-description QueryBuilder-ListItem-trailing"
            >${e}</span
          >
        </span>
      </li>`}{let e="",i=0;"replaceQueryWith"in a&&(e=a.replaceQueryWith,i=a.moveCaretTo);let s="query"in a?l.o7[h]:l.k8;return(0,r.qy)` <li
        role="option"
        class="ActionListItem"
        data-type="query-result"
        data-value="${t}"
        aria-label="${t}${n?`, ${n}`:""}"
        data-replace-query-with="${e}"
        data-move-caret-to="${i}"
        id="${u(this,x)||"search-item"}-result-${p(this,_,ta).call(this,t)}"
      >
        <span class="ActionListContent ActionListContent--visual16 QueryBuilder-ListItem">
          ${o?(0,r.qy)`<span
                id="${u(this,x)||"search-item"}-result-${p(this,_,ta).call(this,t)}--leading"
                class="ActionListItem-visual ActionListItem-visual--leading"
              >
                ${this.getLeadingVisual(o)}
              </span>`:null}
          <span class="ActionListItem-descriptionWrap">
            <span class="ActionListItem-label text-normal">${p(this,U,tn).call(this,t)}</span>
            ${n?(0,r.qy)`<span class="ActionListItem-description">${n}</span>`:null}
          </span>

          ${u(this,A).size>0?(0,r.qy)`<span aria-hidden="true" class="ActionListItem-description QueryBuilder-ListItem-trailing"
                >${s}</span
              >`:(0,r.qy)``}
        </span>
      </li>`}}function tn(t){let e=this.parser.flatten(this.parser.parse(t,0)),i=!u(this,R),s=[];for(let t of e)if("filter"===t.type)s.push((0,r.qy)`<span>${t.filter}:</span
            ><span data-type="filter-value">${t.value}${i?" ":""}</span>`);else{let e="";t.style===l.VJ.Constant?e="qb-constant":t.style===l.VJ.Entity?e="qb-entity":t.style===l.VJ.FilterValue&&(e="qb-filter-value"),s.push((0,r.qy)`<span class="${e}">${t.value}${i?" ":""}</span>`)}return s}function tl({singularItemName:t,icon:e,description:i,value:s}){let a=i?`, ${i}`:"",n=`${this.renderSingularItemNames?t:s}${a}`;return(0,r.qy)` <li
      role="option"
      class="ActionListItem"
      data-type="filter-result"
      data-value="${s}"
      id="${u(this,x)||"filter"}-result-${p(this,_,ta).call(this,s)}"
      aria-label="${n}, filter"
    >
      <span class="ActionListContent ActionListContent--visual16 QueryBuilder-ListItem">
        ${e?(0,r.qy)`<span
              id="${u(this,x)||"filter"}-result-${p(this,_,ta).call(this,s)}--leading"
              class="ActionListItem-visual ActionListItem-visual--leading"
            >
              ${this.getLeadingVisual(e)}
            </span>`:null}
        <span class="ActionListItem-descriptionWrap">
          <span class="ActionListItem-label text-normal">
            ${this.renderSingularItemNames?t:`${s}:`}
          </span>
          ${i?(0,r.qy)`<span class="ActionListItem-description">${i}</span>`:null}
        </span>

        ${u(this,A).size>0?(0,r.qy)`<span aria-hidden="true" class="ActionListItem-description QueryBuilder-ListItem-trailing"
              >${l.k8}</span
            >`:(0,r.qy)``}
      </span>
    </li>`}function to({name:t,value:e,target:i,icon:s,avatar:a,description:n,inlineDescription:o,action:h}){let c=t&&t.length>0?t:e,d=n?`, ${n}`:"",y=i.singularItemName?`${c}${d}, autocomplete this ${i.singularItemName}`:`${c}${d}, ${i.name}`,m="",v=0;return h&&"replaceQueryWith"in h&&(m=h.replaceQueryWith,v=h.moveCaretTo),(0,r.qy)` <li
      role="option"
      class="ActionListItem"
      data-type="filter-item"
      data-replace-query-with="${m}"
      data-move-caret-to="${v}"
      data-value="${e}"
      id="${u(this,x)||"filter-item"}-result-${p(this,_,ta).call(this,e)}"
      aria-label="${y}"
    >
      <span class="ActionListContent ActionListContent--visual16 QueryBuilder-ListItem">
        ${s?(0,r.qy)`<span
              id="${u(this,x)||"filter-item"}-result-${p(this,_,ta).call(this,e)}--leading"
              class="ActionListItem-visual ActionListItem-visual--leading"
            >
              ${this.getLeadingVisual(s,a)}
            </span>`:null}
        <span class="${o?"ActionListItem-descriptionWrap-inline":"ActionListItem-descriptionWrap"}">
          <span class="ActionListItem-label text-normal">${c}</span>
          ${n?(0,r.qy)`<span class="ActionListItem-description">${n}</span>`:null}
        </span>

        ${u(this,A).size>0?(0,r.qy)`<span aria-hidden="true" class="ActionListItem-description QueryBuilder-ListItem-trailing"
              >${l.k8}</span
            >`:(0,r.qy)``}
      </span>
    </li>`}function th(t){let e=u(this,F).get(t);if(e)return e.slice();{let e=[];for(let i of t.split(/\s(?=(?:[^"]*"[^"]*")*[^"]*$)/g)){let t=i.indexOf(this.filterKey);if(t>0){let s=i.substring(0,t),a=i.substring(t+1);e.push(u(this,L).has(s)?{type:"filter",filter:s,value:a}:{type:"text",value:i})}else e.push({type:"text",value:i})}return u(this,F).set(t,[...e]),e}}function tu(t){if(this.sizer.textContent="",null!==this.input.selectionStart&&this.input.selectionStart===this.input.selectionEnd){let e=this.input.selectionStart,i=document.createElement("span");this.sizer.append(t.substring(0,e),i,t.substring(e))}else this.sizer.textContent=t}function tc(){let t=this.minWidth;requestAnimationFrame(()=>{let e=this.sizer.querySelector("span");e&&(e.offsetLeft<this.styledInputContainer.scrollLeft?this.styledInputContainer.scrollLeft=e.offsetLeft-t:e.offsetLeft>this.styledInputContainer.scrollLeft+this.styledInputContainer.clientWidth&&(this.styledInputContainer.scrollLeft=e.offsetLeft-this.styledInputContainer.clientWidth+t));let i=Math.max(this.sizer.scrollWidth+2,""===this.input.value?2:0,t);this.input.style.width=`${i}px`})}function td(){return Object.keys(u(this,$)).length}v([s.CF],QueryBuilderElement.prototype,"filterKey",void 0),v([s.CF],QueryBuilderElement.prototype,"minWidth",void 0),QueryBuilderElement=v([s.p_],QueryBuilderElement)}}]);
//# sourceMappingURL=ui_packages_query-builder-element_query-builder-element_ts-a0a22167fd20.js.map