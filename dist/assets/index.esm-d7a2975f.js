const ug=()=>{};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yh=function(r){const t=[];let e=0;for(let n=0;n<r.length;n++){let s=r.charCodeAt(n);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(s=65536+((s&1023)<<10)+(r.charCodeAt(++n)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},lg=function(r){const t=[];let e=0,n=0;for(;e<r.length;){const s=r[e++];if(s<128)t[n++]=String.fromCharCode(s);else if(s>191&&s<224){const i=r[e++];t[n++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=r[e++],o=r[e++],c=r[e++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;t[n++]=String.fromCharCode(55296+(u>>10)),t[n++]=String.fromCharCode(56320+(u&1023))}else{const i=r[e++],o=r[e++];t[n++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return t.join("")},Ih={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,t){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let s=0;s<r.length;s+=3){const i=r[s],o=s+1<r.length,c=o?r[s+1]:0,u=s+2<r.length,h=u?r[s+2]:0,f=i>>2,m=(i&3)<<4|c>>4;let p=(c&15)<<2|h>>6,v=h&63;u||(v=64,o||(p=64)),n.push(e[f],e[m],e[p],e[v])}return n.join("")},encodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(r):this.encodeByteArray(yh(r),t)},decodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(r):lg(this.decodeStringToByteArray(r,t))},decodeStringToByteArray(r,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let s=0;s<r.length;){const i=e[r.charAt(s++)],c=s<r.length?e[r.charAt(s)]:0;++s;const h=s<r.length?e[r.charAt(s)]:64;++s;const m=s<r.length?e[r.charAt(s)]:64;if(++s,i==null||c==null||h==null||m==null)throw new hg;const p=i<<2|c>>4;if(n.push(p),h!==64){const v=c<<4&240|h>>2;if(n.push(v),m!==64){const C=h<<6&192|m;n.push(C)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class hg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const dg=function(r){const t=yh(r);return Ih.encodeByteArray(t,!0)},pi=function(r){return dg(r).replace(/\./g,"")},fg=function(r){try{return Ih.decodeString(r,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mg=()=>Eh().__FIREBASE_DEFAULTS__,gg=()=>{if(typeof process>"u"||typeof process.env>"u")return;const r={}.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},pg=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=r&&fg(r[1]);return t&&JSON.parse(t)},Mi=()=>{try{return ug()||mg()||gg()||pg()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},_g=r=>{var t,e;return(e=(t=Mi())==null?void 0:t.emulatorHosts)==null?void 0:e[r]},yg=r=>{const t=_g(r);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const n=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),n]:[t.substring(0,e),n]},Th=()=>{var r;return(r=Mi())==null?void 0:r.config},GT=r=>{var t;return(t=Mi())==null?void 0:t[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,n))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eg(r,t){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},n=t||"demo-project",s=r.iat||0,i=r.sub||r.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${n}`,aud:n,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...r},c="";return[pi(JSON.stringify(e)),pi(JSON.stringify(o)),c].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function KT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Gn())}function wh(){var t;const r=(t=Mi())==null?void 0:t.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function QT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function WT(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function HT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function JT(){const r=Gn();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function Ah(){return!wh()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function vh(){return!wh()&&!!navigator.userAgent&&(navigator.userAgent.includes("Safari")||navigator.userAgent.includes("WebKit"))&&!navigator.userAgent.includes("Chrome")}function bh(){try{return typeof indexedDB=="object"}catch{return!1}}function Tg(){return new Promise((r,t)=>{try{let e=!0;const n="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(n);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(n),r(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var i;t(((i=s.error)==null?void 0:i.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wg="FirebaseError";class fr extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=wg,Object.setPrototypeOf(this,fr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Rh.prototype.create)}}class Rh{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},s=`${this.service}/${t}`,i=this.errors[t],o=i?Ag(i,n):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new fr(s,c,n)}}function Ag(r,t){return r.replace(vg,(e,n)=>{const s=t[n];return s!=null?String(s):`<${n}?>`})}const vg=/\{\$([^}]+)}/g;function YT(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}function ke(r,t){if(r===t)return!0;const e=Object.keys(r),n=Object.keys(t);for(const s of e){if(!n.includes(s))return!1;const i=r[s],o=t[s];if(Bu(i)&&Bu(o)){if(!ke(i,o))return!1}else if(i!==o)return!1}for(const s of n)if(!e.includes(s))return!1;return!0}function Bu(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XT(r){const t=[];for(const[e,n]of Object.entries(r))Array.isArray(n)?n.forEach(s=>{t.push(encodeURIComponent(e)+"="+encodeURIComponent(s))}):t.push(encodeURIComponent(e)+"="+encodeURIComponent(n));return t.length?"&"+t.join("&"):""}function ZT(r,t){const e=new bg(r,t);return e.subscribe.bind(e)}class bg{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(n=>{this.error(n)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,n){let s;if(t===void 0&&e===void 0&&n===void 0)throw new Error("Missing Observer.");Rg(t,["next","error","complete"])?s=t:s={next:t,error:e,complete:n},s.next===void 0&&(s.next=No),s.error===void 0&&(s.error=No),s.complete===void 0&&(s.complete=No);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{e(this.observers[t])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Rg(r,t){if(typeof r!="object"||r===null)return!1;for(const e of t)if(e in r&&typeof r[e]=="function")return!0;return!1}function No(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(r){return r&&r._delegate?r._delegate:r}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ra(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Sh(r){return(await fetch(r,{credentials:"include"})).ok}class us{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sg{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const n=new Ig;if(this.instancesDeferred.set(e,n),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&n.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){const e=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),n=(t==null?void 0:t.optional)??!1;if(this.isInitialized(e)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:e})}catch(s){if(n)return null;throw s}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Vg(t))try{this.getOrInitializeService({instanceIdentifier:nn})}catch{}for(const[e,n]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const i=this.getOrInitializeService({instanceIdentifier:s});n.resolve(i)}catch{}}}}clearInstance(t=nn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=nn){return this.instances.has(t)}getOptions(t=nn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);n===c&&o.resolve(s)}return s}onInit(t,e){const n=this.normalizeInstanceIdentifier(e),s=this.onInitCallbacks.get(n)??new Set;s.add(t),this.onInitCallbacks.set(n,s);const i=this.instances.get(n);return i&&t(i,n),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const s of n)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:Pg(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch{}return n||null}normalizeInstanceIdentifier(t=nn){return this.component?this.component.multipleInstances?t:nn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Pg(r){return r===nn?void 0:r}function Vg(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Sg(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var J;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(J||(J={}));const Dg={debug:J.DEBUG,verbose:J.VERBOSE,info:J.INFO,warn:J.WARN,error:J.ERROR,silent:J.SILENT},xg=J.INFO,Ng={[J.DEBUG]:"log",[J.VERBOSE]:"log",[J.INFO]:"info",[J.WARN]:"warn",[J.ERROR]:"error"},kg=(r,t,...e)=>{if(t<r.logLevel)return;const n=new Date().toISOString(),s=Ng[t];if(s)console[s](`[${n}]  ${r.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Ph{constructor(t){this.name=t,this._logLevel=xg,this._logHandler=kg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in J))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Dg[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,J.DEBUG,...t),this._logHandler(this,J.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,J.VERBOSE,...t),this._logHandler(this,J.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,J.INFO,...t),this._logHandler(this,J.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,J.WARN,...t),this._logHandler(this,J.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,J.ERROR,...t),this._logHandler(this,J.ERROR,...t)}}const Mg=(r,t)=>t.some(e=>r instanceof e);let Uu,qu;function Og(){return Uu||(Uu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Fg(){return qu||(qu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Vh=new WeakMap,Qo=new WeakMap,Ch=new WeakMap,ko=new WeakMap,Sa=new WeakMap;function Lg(r){const t=new Promise((e,n)=>{const s=()=>{r.removeEventListener("success",i),r.removeEventListener("error",o)},i=()=>{e(Ce(r.result)),s()},o=()=>{n(r.error),s()};r.addEventListener("success",i),r.addEventListener("error",o)});return t.then(e=>{e instanceof IDBCursor&&Vh.set(e,r)}).catch(()=>{}),Sa.set(t,r),t}function Bg(r){if(Qo.has(r))return;const t=new Promise((e,n)=>{const s=()=>{r.removeEventListener("complete",i),r.removeEventListener("error",o),r.removeEventListener("abort",o)},i=()=>{e(),s()},o=()=>{n(r.error||new DOMException("AbortError","AbortError")),s()};r.addEventListener("complete",i),r.addEventListener("error",o),r.addEventListener("abort",o)});Qo.set(r,t)}let Wo={get(r,t,e){if(r instanceof IDBTransaction){if(t==="done")return Qo.get(r);if(t==="objectStoreNames")return r.objectStoreNames||Ch.get(r);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Ce(r[t])},set(r,t,e){return r[t]=e,!0},has(r,t){return r instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in r}};function Ug(r){Wo=r(Wo)}function qg(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const n=r.call(Mo(this),t,...e);return Ch.set(n,t.sort?t.sort():[t]),Ce(n)}:Fg().includes(r)?function(...t){return r.apply(Mo(this),t),Ce(Vh.get(this))}:function(...t){return Ce(r.apply(Mo(this),t))}}function jg(r){return typeof r=="function"?qg(r):(r instanceof IDBTransaction&&Bg(r),Mg(r,Og())?new Proxy(r,Wo):r)}function Ce(r){if(r instanceof IDBRequest)return Lg(r);if(ko.has(r))return ko.get(r);const t=jg(r);return t!==r&&(ko.set(r,t),Sa.set(t,r)),t}const Mo=r=>Sa.get(r);function zg(r,t,{blocked:e,upgrade:n,blocking:s,terminated:i}={}){const o=indexedDB.open(r,t),c=Ce(o);return n&&o.addEventListener("upgradeneeded",u=>{n(Ce(o.result),u.oldVersion,u.newVersion,Ce(o.transaction),u)}),e&&o.addEventListener("blocked",u=>e(u.oldVersion,u.newVersion,u)),c.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const $g=["get","getKey","getAll","getAllKeys","count"],Gg=["put","add","delete","clear"],Oo=new Map;function ju(r,t){if(!(r instanceof IDBDatabase&&!(t in r)&&typeof t=="string"))return;if(Oo.get(t))return Oo.get(t);const e=t.replace(/FromIndex$/,""),n=t!==e,s=Gg.includes(e);if(!(e in(n?IDBIndex:IDBObjectStore).prototype)||!(s||$g.includes(e)))return;const i=async function(o,...c){const u=this.transaction(o,s?"readwrite":"readonly");let h=u.store;return n&&(h=h.index(c.shift())),(await Promise.all([h[e](...c),s&&u.done]))[0]};return Oo.set(t,i),i}Ug(r=>({...r,get:(t,e,n)=>ju(t,e)||r.get(t,e,n),has:(t,e)=>!!ju(t,e)||r.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kg{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Qg(e)){const n=e.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(e=>e).join(" ")}}function Qg(r){const t=r.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Ho="@firebase/app",zu="0.14.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ce=new Ph("@firebase/app"),Wg="@firebase/app-compat",Hg="@firebase/analytics-compat",Jg="@firebase/analytics",Yg="@firebase/app-check-compat",Xg="@firebase/app-check",Zg="@firebase/auth",tp="@firebase/auth-compat",ep="@firebase/database",np="@firebase/data-connect",rp="@firebase/database-compat",sp="@firebase/functions",ip="@firebase/functions-compat",op="@firebase/installations",ap="@firebase/installations-compat",cp="@firebase/messaging",up="@firebase/messaging-compat",lp="@firebase/performance",hp="@firebase/performance-compat",dp="@firebase/remote-config",fp="@firebase/remote-config-compat",mp="@firebase/storage",gp="@firebase/storage-compat",pp="@firebase/firestore",_p="@firebase/ai",yp="@firebase/firestore-compat",Ip="firebase",Ep="12.11.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _i="[DEFAULT]",Tp={[Ho]:"fire-core",[Wg]:"fire-core-compat",[Jg]:"fire-analytics",[Hg]:"fire-analytics-compat",[Xg]:"fire-app-check",[Yg]:"fire-app-check-compat",[Zg]:"fire-auth",[tp]:"fire-auth-compat",[ep]:"fire-rtdb",[np]:"fire-data-connect",[rp]:"fire-rtdb-compat",[sp]:"fire-fn",[ip]:"fire-fn-compat",[op]:"fire-iid",[ap]:"fire-iid-compat",[cp]:"fire-fcm",[up]:"fire-fcm-compat",[lp]:"fire-perf",[hp]:"fire-perf-compat",[dp]:"fire-rc",[fp]:"fire-rc-compat",[mp]:"fire-gcs",[gp]:"fire-gcs-compat",[pp]:"fire-fst",[yp]:"fire-fst-compat",[_p]:"fire-vertex","fire-js":"fire-js",[Ip]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yi=new Map,wp=new Map,Jo=new Map;function $u(r,t){try{r.container.addComponent(t)}catch(e){ce.debug(`Component ${t.name} failed to register with FirebaseApp ${r.name}`,e)}}function Ii(r){const t=r.name;if(Jo.has(t))return ce.debug(`There were multiple attempts to register component ${t}.`),!1;Jo.set(t,r);for(const e of yi.values())$u(e,r);for(const e of wp.values())$u(e,r);return!0}function Pa(r,t){const e=r.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),r.container.getProvider(t)}function Ap(r,t,e=_i){Pa(r,t).clearInstance(e)}function vp(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},De=new Rh("app","Firebase",bp);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rp{constructor(t,e,n){this._isDeleted=!1,this._options={...t},this._config={...e},this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new us("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw De.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sp=Ep;function Pp(r,t={}){let e=r;typeof t!="object"&&(t={name:t});const n={name:_i,automaticDataCollectionEnabled:!0,...t},s=n.name;if(typeof s!="string"||!s)throw De.create("bad-app-name",{appName:String(s)});if(e||(e=Th()),!e)throw De.create("no-options");const i=yi.get(s);if(i){if(ke(e,i.options)&&ke(n,i.config))return i;throw De.create("duplicate-app",{appName:s})}const o=new Cg(s);for(const u of Jo.values())o.addComponent(u);const c=new Rp(e,n,o);return yi.set(s,c),c}function Vp(r=_i){const t=yi.get(r);if(!t&&r===_i&&Th())return Pp();if(!t)throw De.create("no-app",{appName:r});return t}function Xr(r,t,e){let n=Tp[r]??r;e&&(n+=`-${e}`);const s=n.match(/\s|\//),i=t.match(/\s|\//);if(s||i){const o=[`Unable to register library "${n}" with version "${t}":`];s&&o.push(`library name "${n}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ce.warn(o.join(" "));return}Ii(new us(`${n}-version`,()=>({library:n,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cp="firebase-heartbeat-database",Dp=1,ls="firebase-heartbeat-store";let Fo=null;function Dh(){return Fo||(Fo=zg(Cp,Dp,{upgrade:(r,t)=>{switch(t){case 0:try{r.createObjectStore(ls)}catch(e){console.warn(e)}}}}).catch(r=>{throw De.create("idb-open",{originalErrorMessage:r.message})})),Fo}async function xp(r){try{const e=(await Dh()).transaction(ls),n=await e.objectStore(ls).get(xh(r));return await e.done,n}catch(t){if(t instanceof fr)ce.warn(t.message);else{const e=De.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});ce.warn(e.message)}}}async function Gu(r,t){try{const n=(await Dh()).transaction(ls,"readwrite");await n.objectStore(ls).put(t,xh(r)),await n.done}catch(e){if(e instanceof fr)ce.warn(e.message);else{const n=De.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});ce.warn(n.message)}}}function xh(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Np=1024,kp=30;class Mp{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Fp(e),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ku();if(((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>kp){const o=Lp(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){ce.warn(n)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ku(),{heartbeatsToSend:n,unsentEntries:s}=Op(this._heartbeatsCache.heartbeats),i=pi(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return ce.warn(e),""}}}function Ku(){return new Date().toISOString().substring(0,10)}function Op(r,t=Np){const e=[];let n=r.slice();for(const s of r){const i=e.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Qu(e)>t){i.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),Qu(e)>t){e.pop();break}n=n.slice(1)}return{heartbeatsToSend:e,unsentEntries:n}}class Fp{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return bh()?Tg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await xp(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const n=await this.read();return Gu(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const n=await this.read();return Gu(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}else return}}function Qu(r){return pi(JSON.stringify({version:2,heartbeats:r})).length}function Lp(r){if(r.length===0)return-1;let t=0,e=r[0].date;for(let n=1;n<r.length;n++)r[n].date<e&&(e=r[n].date,t=n);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bp(r){Ii(new us("platform-logger",t=>new Kg(t),"PRIVATE")),Ii(new us("heartbeat",t=>new Mp(t),"PRIVATE")),Xr(Ho,zu,r),Xr(Ho,zu,"esm2020"),Xr("fire-js","")}Bp("");var Wu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var xe,Nh;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(E,_){function I(){}I.prototype=_.prototype,E.F=_.prototype,E.prototype=new I,E.prototype.constructor=E,E.D=function(w,T,S){for(var y=Array(arguments.length-2),Ot=2;Ot<arguments.length;Ot++)y[Ot-2]=arguments[Ot];return _.prototype[T].apply(w,y)}}function e(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(n,e),n.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,_,I){I||(I=0);const w=Array(16);if(typeof _=="string")for(var T=0;T<16;++T)w[T]=_.charCodeAt(I++)|_.charCodeAt(I++)<<8|_.charCodeAt(I++)<<16|_.charCodeAt(I++)<<24;else for(T=0;T<16;++T)w[T]=_[I++]|_[I++]<<8|_[I++]<<16|_[I++]<<24;_=E.g[0],I=E.g[1],T=E.g[2];let S=E.g[3],y;y=_+(S^I&(T^S))+w[0]+3614090360&4294967295,_=I+(y<<7&4294967295|y>>>25),y=S+(T^_&(I^T))+w[1]+3905402710&4294967295,S=_+(y<<12&4294967295|y>>>20),y=T+(I^S&(_^I))+w[2]+606105819&4294967295,T=S+(y<<17&4294967295|y>>>15),y=I+(_^T&(S^_))+w[3]+3250441966&4294967295,I=T+(y<<22&4294967295|y>>>10),y=_+(S^I&(T^S))+w[4]+4118548399&4294967295,_=I+(y<<7&4294967295|y>>>25),y=S+(T^_&(I^T))+w[5]+1200080426&4294967295,S=_+(y<<12&4294967295|y>>>20),y=T+(I^S&(_^I))+w[6]+2821735955&4294967295,T=S+(y<<17&4294967295|y>>>15),y=I+(_^T&(S^_))+w[7]+4249261313&4294967295,I=T+(y<<22&4294967295|y>>>10),y=_+(S^I&(T^S))+w[8]+1770035416&4294967295,_=I+(y<<7&4294967295|y>>>25),y=S+(T^_&(I^T))+w[9]+2336552879&4294967295,S=_+(y<<12&4294967295|y>>>20),y=T+(I^S&(_^I))+w[10]+4294925233&4294967295,T=S+(y<<17&4294967295|y>>>15),y=I+(_^T&(S^_))+w[11]+2304563134&4294967295,I=T+(y<<22&4294967295|y>>>10),y=_+(S^I&(T^S))+w[12]+1804603682&4294967295,_=I+(y<<7&4294967295|y>>>25),y=S+(T^_&(I^T))+w[13]+4254626195&4294967295,S=_+(y<<12&4294967295|y>>>20),y=T+(I^S&(_^I))+w[14]+2792965006&4294967295,T=S+(y<<17&4294967295|y>>>15),y=I+(_^T&(S^_))+w[15]+1236535329&4294967295,I=T+(y<<22&4294967295|y>>>10),y=_+(T^S&(I^T))+w[1]+4129170786&4294967295,_=I+(y<<5&4294967295|y>>>27),y=S+(I^T&(_^I))+w[6]+3225465664&4294967295,S=_+(y<<9&4294967295|y>>>23),y=T+(_^I&(S^_))+w[11]+643717713&4294967295,T=S+(y<<14&4294967295|y>>>18),y=I+(S^_&(T^S))+w[0]+3921069994&4294967295,I=T+(y<<20&4294967295|y>>>12),y=_+(T^S&(I^T))+w[5]+3593408605&4294967295,_=I+(y<<5&4294967295|y>>>27),y=S+(I^T&(_^I))+w[10]+38016083&4294967295,S=_+(y<<9&4294967295|y>>>23),y=T+(_^I&(S^_))+w[15]+3634488961&4294967295,T=S+(y<<14&4294967295|y>>>18),y=I+(S^_&(T^S))+w[4]+3889429448&4294967295,I=T+(y<<20&4294967295|y>>>12),y=_+(T^S&(I^T))+w[9]+568446438&4294967295,_=I+(y<<5&4294967295|y>>>27),y=S+(I^T&(_^I))+w[14]+3275163606&4294967295,S=_+(y<<9&4294967295|y>>>23),y=T+(_^I&(S^_))+w[3]+4107603335&4294967295,T=S+(y<<14&4294967295|y>>>18),y=I+(S^_&(T^S))+w[8]+1163531501&4294967295,I=T+(y<<20&4294967295|y>>>12),y=_+(T^S&(I^T))+w[13]+2850285829&4294967295,_=I+(y<<5&4294967295|y>>>27),y=S+(I^T&(_^I))+w[2]+4243563512&4294967295,S=_+(y<<9&4294967295|y>>>23),y=T+(_^I&(S^_))+w[7]+1735328473&4294967295,T=S+(y<<14&4294967295|y>>>18),y=I+(S^_&(T^S))+w[12]+2368359562&4294967295,I=T+(y<<20&4294967295|y>>>12),y=_+(I^T^S)+w[5]+4294588738&4294967295,_=I+(y<<4&4294967295|y>>>28),y=S+(_^I^T)+w[8]+2272392833&4294967295,S=_+(y<<11&4294967295|y>>>21),y=T+(S^_^I)+w[11]+1839030562&4294967295,T=S+(y<<16&4294967295|y>>>16),y=I+(T^S^_)+w[14]+4259657740&4294967295,I=T+(y<<23&4294967295|y>>>9),y=_+(I^T^S)+w[1]+2763975236&4294967295,_=I+(y<<4&4294967295|y>>>28),y=S+(_^I^T)+w[4]+1272893353&4294967295,S=_+(y<<11&4294967295|y>>>21),y=T+(S^_^I)+w[7]+4139469664&4294967295,T=S+(y<<16&4294967295|y>>>16),y=I+(T^S^_)+w[10]+3200236656&4294967295,I=T+(y<<23&4294967295|y>>>9),y=_+(I^T^S)+w[13]+681279174&4294967295,_=I+(y<<4&4294967295|y>>>28),y=S+(_^I^T)+w[0]+3936430074&4294967295,S=_+(y<<11&4294967295|y>>>21),y=T+(S^_^I)+w[3]+3572445317&4294967295,T=S+(y<<16&4294967295|y>>>16),y=I+(T^S^_)+w[6]+76029189&4294967295,I=T+(y<<23&4294967295|y>>>9),y=_+(I^T^S)+w[9]+3654602809&4294967295,_=I+(y<<4&4294967295|y>>>28),y=S+(_^I^T)+w[12]+3873151461&4294967295,S=_+(y<<11&4294967295|y>>>21),y=T+(S^_^I)+w[15]+530742520&4294967295,T=S+(y<<16&4294967295|y>>>16),y=I+(T^S^_)+w[2]+3299628645&4294967295,I=T+(y<<23&4294967295|y>>>9),y=_+(T^(I|~S))+w[0]+4096336452&4294967295,_=I+(y<<6&4294967295|y>>>26),y=S+(I^(_|~T))+w[7]+1126891415&4294967295,S=_+(y<<10&4294967295|y>>>22),y=T+(_^(S|~I))+w[14]+2878612391&4294967295,T=S+(y<<15&4294967295|y>>>17),y=I+(S^(T|~_))+w[5]+4237533241&4294967295,I=T+(y<<21&4294967295|y>>>11),y=_+(T^(I|~S))+w[12]+1700485571&4294967295,_=I+(y<<6&4294967295|y>>>26),y=S+(I^(_|~T))+w[3]+2399980690&4294967295,S=_+(y<<10&4294967295|y>>>22),y=T+(_^(S|~I))+w[10]+4293915773&4294967295,T=S+(y<<15&4294967295|y>>>17),y=I+(S^(T|~_))+w[1]+2240044497&4294967295,I=T+(y<<21&4294967295|y>>>11),y=_+(T^(I|~S))+w[8]+1873313359&4294967295,_=I+(y<<6&4294967295|y>>>26),y=S+(I^(_|~T))+w[15]+4264355552&4294967295,S=_+(y<<10&4294967295|y>>>22),y=T+(_^(S|~I))+w[6]+2734768916&4294967295,T=S+(y<<15&4294967295|y>>>17),y=I+(S^(T|~_))+w[13]+1309151649&4294967295,I=T+(y<<21&4294967295|y>>>11),y=_+(T^(I|~S))+w[4]+4149444226&4294967295,_=I+(y<<6&4294967295|y>>>26),y=S+(I^(_|~T))+w[11]+3174756917&4294967295,S=_+(y<<10&4294967295|y>>>22),y=T+(_^(S|~I))+w[2]+718787259&4294967295,T=S+(y<<15&4294967295|y>>>17),y=I+(S^(T|~_))+w[9]+3951481745&4294967295,E.g[0]=E.g[0]+_&4294967295,E.g[1]=E.g[1]+(T+(y<<21&4294967295|y>>>11))&4294967295,E.g[2]=E.g[2]+T&4294967295,E.g[3]=E.g[3]+S&4294967295}n.prototype.v=function(E,_){_===void 0&&(_=E.length);const I=_-this.blockSize,w=this.C;let T=this.h,S=0;for(;S<_;){if(T==0)for(;S<=I;)s(this,E,S),S+=this.blockSize;if(typeof E=="string"){for(;S<_;)if(w[T++]=E.charCodeAt(S++),T==this.blockSize){s(this,w),T=0;break}}else for(;S<_;)if(w[T++]=E[S++],T==this.blockSize){s(this,w),T=0;break}}this.h=T,this.o+=_},n.prototype.A=function(){var E=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);E[0]=128;for(var _=1;_<E.length-8;++_)E[_]=0;_=this.o*8;for(var I=E.length-8;I<E.length;++I)E[I]=_&255,_/=256;for(this.v(E),E=Array(16),_=0,I=0;I<4;++I)for(let w=0;w<32;w+=8)E[_++]=this.g[I]>>>w&255;return E};function i(E,_){var I=c;return Object.prototype.hasOwnProperty.call(I,E)?I[E]:I[E]=_(E)}function o(E,_){this.h=_;const I=[];let w=!0;for(let T=E.length-1;T>=0;T--){const S=E[T]|0;w&&S==_||(I[T]=S,w=!1)}this.g=I}var c={};function u(E){return-128<=E&&E<128?i(E,function(_){return new o([_|0],_<0?-1:0)}):new o([E|0],E<0?-1:0)}function h(E){if(isNaN(E)||!isFinite(E))return m;if(E<0)return x(h(-E));const _=[];let I=1;for(let w=0;E>=I;w++)_[w]=E/I|0,I*=4294967296;return new o(_,0)}function f(E,_){if(E.length==0)throw Error("number format error: empty string");if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(E.charAt(0)=="-")return x(f(E.substring(1),_));if(E.indexOf("-")>=0)throw Error('number format error: interior "-" character');const I=h(Math.pow(_,8));let w=m;for(let S=0;S<E.length;S+=8){var T=Math.min(8,E.length-S);const y=parseInt(E.substring(S,S+T),_);T<8?(T=h(Math.pow(_,T)),w=w.j(T).add(h(y))):(w=w.j(I),w=w.add(h(y)))}return w}var m=u(0),p=u(1),v=u(16777216);r=o.prototype,r.m=function(){if(N(this))return-x(this).m();let E=0,_=1;for(let I=0;I<this.g.length;I++){const w=this.i(I);E+=(w>=0?w:4294967296+w)*_,_*=4294967296}return E},r.toString=function(E){if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(C(this))return"0";if(N(this))return"-"+x(this).toString(E);const _=h(Math.pow(E,6));var I=this;let w="";for(;;){const T=Z(I,_).g;I=B(I,T.j(_));let S=((I.g.length>0?I.g[0]:I.h)>>>0).toString(E);if(I=T,C(I))return S+w;for(;S.length<6;)S="0"+S;w=S+w}},r.i=function(E){return E<0?0:E<this.g.length?this.g[E]:this.h};function C(E){if(E.h!=0)return!1;for(let _=0;_<E.g.length;_++)if(E.g[_]!=0)return!1;return!0}function N(E){return E.h==-1}r.l=function(E){return E=B(this,E),N(E)?-1:C(E)?0:1};function x(E){const _=E.g.length,I=[];for(let w=0;w<_;w++)I[w]=~E.g[w];return new o(I,~E.h).add(p)}r.abs=function(){return N(this)?x(this):this},r.add=function(E){const _=Math.max(this.g.length,E.g.length),I=[];let w=0;for(let T=0;T<=_;T++){let S=w+(this.i(T)&65535)+(E.i(T)&65535),y=(S>>>16)+(this.i(T)>>>16)+(E.i(T)>>>16);w=y>>>16,S&=65535,y&=65535,I[T]=y<<16|S}return new o(I,I[I.length-1]&-2147483648?-1:0)};function B(E,_){return E.add(x(_))}r.j=function(E){if(C(this)||C(E))return m;if(N(this))return N(E)?x(this).j(x(E)):x(x(this).j(E));if(N(E))return x(this.j(x(E)));if(this.l(v)<0&&E.l(v)<0)return h(this.m()*E.m());const _=this.g.length+E.g.length,I=[];for(var w=0;w<2*_;w++)I[w]=0;for(w=0;w<this.g.length;w++)for(let T=0;T<E.g.length;T++){const S=this.i(w)>>>16,y=this.i(w)&65535,Ot=E.i(T)>>>16,pe=E.i(T)&65535;I[2*w+2*T]+=y*pe,j(I,2*w+2*T),I[2*w+2*T+1]+=S*pe,j(I,2*w+2*T+1),I[2*w+2*T+1]+=y*Ot,j(I,2*w+2*T+1),I[2*w+2*T+2]+=S*Ot,j(I,2*w+2*T+2)}for(E=0;E<_;E++)I[E]=I[2*E+1]<<16|I[2*E];for(E=_;E<2*_;E++)I[E]=0;return new o(I,0)};function j(E,_){for(;(E[_]&65535)!=E[_];)E[_+1]+=E[_]>>>16,E[_]&=65535,_++}function q(E,_){this.g=E,this.h=_}function Z(E,_){if(C(_))throw Error("division by zero");if(C(E))return new q(m,m);if(N(E))return _=Z(x(E),_),new q(x(_.g),x(_.h));if(N(_))return _=Z(E,x(_)),new q(x(_.g),_.h);if(E.g.length>30){if(N(E)||N(_))throw Error("slowDivide_ only works with positive integers.");for(var I=p,w=_;w.l(E)<=0;)I=Y(I),w=Y(w);var T=X(I,1),S=X(w,1);for(w=X(w,2),I=X(I,2);!C(w);){var y=S.add(w);y.l(E)<=0&&(T=T.add(I),S=y),w=X(w,1),I=X(I,1)}return _=B(E,T.j(_)),new q(T,_)}for(T=m;E.l(_)>=0;){for(I=Math.max(1,Math.floor(E.m()/_.m())),w=Math.ceil(Math.log(I)/Math.LN2),w=w<=48?1:Math.pow(2,w-48),S=h(I),y=S.j(_);N(y)||y.l(E)>0;)I-=w,S=h(I),y=S.j(_);C(S)&&(S=p),T=T.add(S),E=B(E,y)}return new q(T,E)}r.B=function(E){return Z(this,E).h},r.and=function(E){const _=Math.max(this.g.length,E.g.length),I=[];for(let w=0;w<_;w++)I[w]=this.i(w)&E.i(w);return new o(I,this.h&E.h)},r.or=function(E){const _=Math.max(this.g.length,E.g.length),I=[];for(let w=0;w<_;w++)I[w]=this.i(w)|E.i(w);return new o(I,this.h|E.h)},r.xor=function(E){const _=Math.max(this.g.length,E.g.length),I=[];for(let w=0;w<_;w++)I[w]=this.i(w)^E.i(w);return new o(I,this.h^E.h)};function Y(E){const _=E.g.length+1,I=[];for(let w=0;w<_;w++)I[w]=E.i(w)<<1|E.i(w-1)>>>31;return new o(I,E.h)}function X(E,_){const I=_>>5;_%=32;const w=E.g.length-I,T=[];for(let S=0;S<w;S++)T[S]=_>0?E.i(S+I)>>>_|E.i(S+I+1)<<32-_:E.i(S+I);return new o(T,E.h)}n.prototype.digest=n.prototype.A,n.prototype.reset=n.prototype.u,n.prototype.update=n.prototype.v,Nh=n,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,xe=o}).apply(typeof Wu<"u"?Wu:typeof self<"u"?self:typeof window<"u"?window:{});var Xs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var kh,Wr,Mh,oi,Yo,Oh,Fh,Lh;(function(){var r,t=Object.defineProperty;function e(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Xs=="object"&&Xs];for(var l=0;l<a.length;++l){var d=a[l];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var n=e(this);function s(a,l){if(l)t:{var d=n;a=a.split(".");for(var g=0;g<a.length-1;g++){var b=a[g];if(!(b in d))break t;d=d[b]}a=a[a.length-1],g=d[a],l=l(g),l!=g&&l!=null&&t(d,a,{configurable:!0,writable:!0,value:l})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(l){var d=[],g;for(g in l)Object.prototype.hasOwnProperty.call(l,g)&&d.push([g,l[g]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function c(a){var l=typeof a;return l=="object"&&a!=null||l=="function"}function u(a,l,d){return a.call.apply(a.bind,arguments)}function h(a,l,d){return h=u,h.apply(null,arguments)}function f(a,l){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function m(a,l){function d(){}d.prototype=l.prototype,a.Z=l.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(g,b,P){for(var O=Array(arguments.length-2),G=2;G<arguments.length;G++)O[G-2]=arguments[G];return l.prototype[b].apply(g,O)}}var p=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function v(a){const l=a.length;if(l>0){const d=Array(l);for(let g=0;g<l;g++)d[g]=a[g];return d}return[]}function C(a,l){for(let g=1;g<arguments.length;g++){const b=arguments[g];var d=typeof b;if(d=d!="object"?d:b?Array.isArray(b)?"array":d:"null",d=="array"||d=="object"&&typeof b.length=="number"){d=a.length||0;const P=b.length||0;a.length=d+P;for(let O=0;O<P;O++)a[d+O]=b[O]}else a.push(b)}}class N{constructor(l,d){this.i=l,this.j=d,this.h=0,this.g=null}get(){let l;return this.h>0?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function x(a){o.setTimeout(()=>{throw a},0)}function B(){var a=E;let l=null;return a.g&&(l=a.g,a.g=a.g.next,a.g||(a.h=null),l.next=null),l}class j{constructor(){this.h=this.g=null}add(l,d){const g=q.get();g.set(l,d),this.h?this.h.next=g:this.g=g,this.h=g}}var q=new N(()=>new Z,a=>a.reset());class Z{constructor(){this.next=this.g=this.h=null}set(l,d){this.h=l,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Y,X=!1,E=new j,_=()=>{const a=Promise.resolve(void 0);Y=()=>{a.then(I)}};function I(){for(var a;a=B();){try{a.h.call(a.g)}catch(d){x(d)}var l=q;l.j(a),l.h<100&&(l.h++,a.next=l.g,l.g=a)}X=!1}function w(){this.u=this.u,this.C=this.C}w.prototype.u=!1,w.prototype.dispose=function(){this.u||(this.u=!0,this.N())},w.prototype[Symbol.dispose]=function(){this.dispose()},w.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function T(a,l){this.type=a,this.g=this.target=l,this.defaultPrevented=!1}T.prototype.h=function(){this.defaultPrevented=!0};var S=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,l=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,l),o.removeEventListener("test",d,l)}catch{}return a}();function y(a){return/^[\s\xa0]*$/.test(a)}function Ot(a,l){T.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,l)}m(Ot,T),Ot.prototype.init=function(a,l){const d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=l,l=a.relatedTarget,l||(d=="mouseover"?l=a.fromElement:d=="mouseout"&&(l=a.toElement)),this.relatedTarget=l,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Ot.Z.h.call(this)},Ot.prototype.h=function(){Ot.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var pe="closure_listenable_"+(Math.random()*1e6|0),xm=0;function Nm(a,l,d,g,b){this.listener=a,this.proxy=null,this.src=l,this.type=d,this.capture=!!g,this.ha=b,this.key=++xm,this.da=this.fa=!1}function Fs(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ls(a,l,d){for(const g in a)l.call(d,a[g],g,a)}function km(a,l){for(const d in a)l.call(void 0,a[d],d,a)}function Fc(a){const l={};for(const d in a)l[d]=a[d];return l}const Lc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Bc(a,l){let d,g;for(let b=1;b<arguments.length;b++){g=arguments[b];for(d in g)a[d]=g[d];for(let P=0;P<Lc.length;P++)d=Lc[P],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function Bs(a){this.src=a,this.g={},this.h=0}Bs.prototype.add=function(a,l,d,g,b){const P=a.toString();a=this.g[P],a||(a=this.g[P]=[],this.h++);const O=co(a,l,g,b);return O>-1?(l=a[O],d||(l.fa=!1)):(l=new Nm(l,this.src,P,!!g,b),l.fa=d,a.push(l)),l};function ao(a,l){const d=l.type;if(d in a.g){var g=a.g[d],b=Array.prototype.indexOf.call(g,l,void 0),P;(P=b>=0)&&Array.prototype.splice.call(g,b,1),P&&(Fs(l),a.g[d].length==0&&(delete a.g[d],a.h--))}}function co(a,l,d,g){for(let b=0;b<a.length;++b){const P=a[b];if(!P.da&&P.listener==l&&P.capture==!!d&&P.ha==g)return b}return-1}var uo="closure_lm_"+(Math.random()*1e6|0),lo={};function Uc(a,l,d,g,b){if(g&&g.once)return jc(a,l,d,g,b);if(Array.isArray(l)){for(let P=0;P<l.length;P++)Uc(a,l[P],d,g,b);return null}return d=go(d),a&&a[pe]?a.J(l,d,c(g)?!!g.capture:!!g,b):qc(a,l,d,!1,g,b)}function qc(a,l,d,g,b,P){if(!l)throw Error("Invalid event type");const O=c(b)?!!b.capture:!!b;let G=fo(a);if(G||(a[uo]=G=new Bs(a)),d=G.add(l,d,g,O,P),d.proxy)return d;if(g=Mm(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)S||(b=O),b===void 0&&(b=!1),a.addEventListener(l.toString(),g,b);else if(a.attachEvent)a.attachEvent($c(l.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Mm(){function a(d){return l.call(a.src,a.listener,d)}const l=Om;return a}function jc(a,l,d,g,b){if(Array.isArray(l)){for(let P=0;P<l.length;P++)jc(a,l[P],d,g,b);return null}return d=go(d),a&&a[pe]?a.K(l,d,c(g)?!!g.capture:!!g,b):qc(a,l,d,!0,g,b)}function zc(a,l,d,g,b){if(Array.isArray(l))for(var P=0;P<l.length;P++)zc(a,l[P],d,g,b);else g=c(g)?!!g.capture:!!g,d=go(d),a&&a[pe]?(a=a.i,P=String(l).toString(),P in a.g&&(l=a.g[P],d=co(l,d,g,b),d>-1&&(Fs(l[d]),Array.prototype.splice.call(l,d,1),l.length==0&&(delete a.g[P],a.h--)))):a&&(a=fo(a))&&(l=a.g[l.toString()],a=-1,l&&(a=co(l,d,g,b)),(d=a>-1?l[a]:null)&&ho(d))}function ho(a){if(typeof a!="number"&&a&&!a.da){var l=a.src;if(l&&l[pe])ao(l.i,a);else{var d=a.type,g=a.proxy;l.removeEventListener?l.removeEventListener(d,g,a.capture):l.detachEvent?l.detachEvent($c(d),g):l.addListener&&l.removeListener&&l.removeListener(g),(d=fo(l))?(ao(d,a),d.h==0&&(d.src=null,l[uo]=null)):Fs(a)}}}function $c(a){return a in lo?lo[a]:lo[a]="on"+a}function Om(a,l){if(a.da)a=!0;else{l=new Ot(l,this);const d=a.listener,g=a.ha||a.src;a.fa&&ho(a),a=d.call(g,l)}return a}function fo(a){return a=a[uo],a instanceof Bs?a:null}var mo="__closure_events_fn_"+(Math.random()*1e9>>>0);function go(a){return typeof a=="function"?a:(a[mo]||(a[mo]=function(l){return a.handleEvent(l)}),a[mo])}function Vt(){w.call(this),this.i=new Bs(this),this.M=this,this.G=null}m(Vt,w),Vt.prototype[pe]=!0,Vt.prototype.removeEventListener=function(a,l,d,g){zc(this,a,l,d,g)};function kt(a,l){var d,g=a.G;if(g)for(d=[];g;g=g.G)d.push(g);if(a=a.M,g=l.type||l,typeof l=="string")l=new T(l,a);else if(l instanceof T)l.target=l.target||a;else{var b=l;l=new T(g,a),Bc(l,b)}b=!0;let P,O;if(d)for(O=d.length-1;O>=0;O--)P=l.g=d[O],b=Us(P,g,!0,l)&&b;if(P=l.g=a,b=Us(P,g,!0,l)&&b,b=Us(P,g,!1,l)&&b,d)for(O=0;O<d.length;O++)P=l.g=d[O],b=Us(P,g,!1,l)&&b}Vt.prototype.N=function(){if(Vt.Z.N.call(this),this.i){var a=this.i;for(const l in a.g){const d=a.g[l];for(let g=0;g<d.length;g++)Fs(d[g]);delete a.g[l],a.h--}}this.G=null},Vt.prototype.J=function(a,l,d,g){return this.i.add(String(a),l,!1,d,g)},Vt.prototype.K=function(a,l,d,g){return this.i.add(String(a),l,!0,d,g)};function Us(a,l,d,g){if(l=a.i.g[String(l)],!l)return!0;l=l.concat();let b=!0;for(let P=0;P<l.length;++P){const O=l[P];if(O&&!O.da&&O.capture==d){const G=O.listener,It=O.ha||O.src;O.fa&&ao(a.i,O),b=G.call(It,g)!==!1&&b}}return b&&!g.defaultPrevented}function Fm(a,l){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=h(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(l)>2147483647?-1:o.setTimeout(a,l||0)}function Gc(a){a.g=Fm(()=>{a.g=null,a.i&&(a.i=!1,Gc(a))},a.l);const l=a.h;a.h=null,a.m.apply(null,l)}class Lm extends w{constructor(l,d){super(),this.m=l,this.l=d,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:Gc(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Rr(a){w.call(this),this.h=a,this.g={}}m(Rr,w);var Kc=[];function Qc(a){Ls(a.g,function(l,d){this.g.hasOwnProperty(d)&&ho(l)},a),a.g={}}Rr.prototype.N=function(){Rr.Z.N.call(this),Qc(this)},Rr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var po=o.JSON.stringify,Bm=o.JSON.parse,Um=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Wc(){}function Hc(){}var Sr={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function _o(){T.call(this,"d")}m(_o,T);function yo(){T.call(this,"c")}m(yo,T);var Je={},Jc=null;function qs(){return Jc=Jc||new Vt}Je.Ia="serverreachability";function Yc(a){T.call(this,Je.Ia,a)}m(Yc,T);function Pr(a){const l=qs();kt(l,new Yc(l))}Je.STAT_EVENT="statevent";function Xc(a,l){T.call(this,Je.STAT_EVENT,a),this.stat=l}m(Xc,T);function Mt(a){const l=qs();kt(l,new Xc(l,a))}Je.Ja="timingevent";function Zc(a,l){T.call(this,Je.Ja,a),this.size=l}m(Zc,T);function Vr(a,l){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},l)}function Cr(){this.g=!0}Cr.prototype.ua=function(){this.g=!1};function qm(a,l,d,g,b,P){a.info(function(){if(a.g)if(P){var O="",G=P.split("&");for(let it=0;it<G.length;it++){var It=G[it].split("=");if(It.length>1){const At=It[0];It=It[1];const Xt=At.split("_");O=Xt.length>=2&&Xt[1]=="type"?O+(At+"="+It+"&"):O+(At+"=redacted&")}}}else O=null;else O=P;return"XMLHTTP REQ ("+g+") [attempt "+b+"]: "+l+`
`+d+`
`+O})}function jm(a,l,d,g,b,P,O){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+b+"]: "+l+`
`+d+`
`+P+" "+O})}function Vn(a,l,d,g){a.info(function(){return"XMLHTTP TEXT ("+l+"): "+$m(a,d)+(g?" "+g:"")})}function zm(a,l){a.info(function(){return"TIMEOUT: "+l})}Cr.prototype.info=function(){};function $m(a,l){if(!a.g)return l;if(!l)return null;try{const P=JSON.parse(l);if(P){for(a=0;a<P.length;a++)if(Array.isArray(P[a])){var d=P[a];if(!(d.length<2)){var g=d[1];if(Array.isArray(g)&&!(g.length<1)){var b=g[0];if(b!="noop"&&b!="stop"&&b!="close")for(let O=1;O<g.length;O++)g[O]=""}}}}return po(P)}catch{return l}}var js={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},tu={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},eu;function Io(){}m(Io,Wc),Io.prototype.g=function(){return new XMLHttpRequest},eu=new Io;function Dr(a){return encodeURIComponent(String(a))}function Gm(a){var l=1;a=a.split(":");const d=[];for(;l>0&&a.length;)d.push(a.shift()),l--;return a.length&&d.push(a.join(":")),d}function _e(a,l,d,g){this.j=a,this.i=l,this.l=d,this.S=g||1,this.V=new Rr(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new nu}function nu(){this.i=null,this.g="",this.h=!1}var ru={},Eo={};function To(a,l,d){a.M=1,a.A=$s(Yt(l)),a.u=d,a.R=!0,su(a,null)}function su(a,l){a.F=Date.now(),zs(a),a.B=Yt(a.A);var d=a.B,g=a.S;Array.isArray(g)||(g=[String(g)]),_u(d.i,"t",g),a.C=0,d=a.j.L,a.h=new nu,a.g=Mu(a.j,d?l:null,!a.u),a.P>0&&(a.O=new Lm(h(a.Y,a,a.g),a.P)),l=a.V,d=a.g,g=a.ba;var b="readystatechange";Array.isArray(b)||(b&&(Kc[0]=b.toString()),b=Kc);for(let P=0;P<b.length;P++){const O=Uc(d,b[P],g||l.handleEvent,!1,l.h||l);if(!O)break;l.g[O.key]=O}l=a.J?Fc(a.J):{},a.u?(a.v||(a.v="POST"),l["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,l)):(a.v="GET",a.g.ea(a.B,a.v,null,l)),Pr(),qm(a.i,a.v,a.B,a.l,a.S,a.u)}_e.prototype.ba=function(a){a=a.target;const l=this.O;l&&Ee(a)==3?l.j():this.Y(a)},_e.prototype.Y=function(a){try{if(a==this.g)t:{const G=Ee(this.g),It=this.g.ya(),it=this.g.ca();if(!(G<3)&&(G!=3||this.g&&(this.h.h||this.g.la()||vu(this.g)))){this.K||G!=4||It==7||(It==8||it<=0?Pr(3):Pr(2)),wo(this);var l=this.g.ca();this.X=l;var d=Km(this);if(this.o=l==200,jm(this.i,this.v,this.B,this.l,this.S,G,l),this.o){if(this.U&&!this.L){e:{if(this.g){var g,b=this.g;if((g=b.g?b.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(g)){var P=g;break e}}P=null}if(a=P)Vn(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ao(this,a);else{this.o=!1,this.m=3,Mt(12),Ye(this),xr(this);break t}}if(this.R){a=!0;let At;for(;!this.K&&this.C<d.length;)if(At=Qm(this,d),At==Eo){G==4&&(this.m=4,Mt(14),a=!1),Vn(this.i,this.l,null,"[Incomplete Response]");break}else if(At==ru){this.m=4,Mt(15),Vn(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else Vn(this.i,this.l,At,null),Ao(this,At);if(iu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),G!=4||d.length!=0||this.h.h||(this.m=1,Mt(16),a=!1),this.o=this.o&&a,!a)Vn(this.i,this.l,d,"[Invalid Chunked Response]"),Ye(this),xr(this);else if(d.length>0&&!this.W){this.W=!0;var O=this.j;O.g==this&&O.aa&&!O.P&&(O.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),Do(O),O.P=!0,Mt(11))}}else Vn(this.i,this.l,d,null),Ao(this,d);G==4&&Ye(this),this.o&&!this.K&&(G==4?Du(this.j,this):(this.o=!1,zs(this)))}else ag(this.g),l==400&&d.indexOf("Unknown SID")>0?(this.m=3,Mt(12)):(this.m=0,Mt(13)),Ye(this),xr(this)}}}catch{}finally{}};function Km(a){if(!iu(a))return a.g.la();const l=vu(a.g);if(l==="")return"";let d="";const g=l.length,b=Ee(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Ye(a),xr(a),"";a.h.i=new o.TextDecoder}for(let P=0;P<g;P++)a.h.h=!0,d+=a.h.i.decode(l[P],{stream:!(b&&P==g-1)});return l.length=0,a.h.g+=d,a.C=0,a.h.g}function iu(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function Qm(a,l){var d=a.C,g=l.indexOf(`
`,d);return g==-1?Eo:(d=Number(l.substring(d,g)),isNaN(d)?ru:(g+=1,g+d>l.length?Eo:(l=l.slice(g,g+d),a.C=g+d,l)))}_e.prototype.cancel=function(){this.K=!0,Ye(this)};function zs(a){a.T=Date.now()+a.H,ou(a,a.H)}function ou(a,l){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Vr(h(a.aa,a),l)}function wo(a){a.D&&(o.clearTimeout(a.D),a.D=null)}_e.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(zm(this.i,this.B),this.M!=2&&(Pr(),Mt(17)),Ye(this),this.m=2,xr(this)):ou(this,this.T-a)};function xr(a){a.j.I==0||a.K||Du(a.j,a)}function Ye(a){wo(a);var l=a.O;l&&typeof l.dispose=="function"&&l.dispose(),a.O=null,Qc(a.V),a.g&&(l=a.g,a.g=null,l.abort(),l.dispose())}function Ao(a,l){try{var d=a.j;if(d.I!=0&&(d.g==a||vo(d.h,a))){if(!a.L&&vo(d.h,a)&&d.I==3){try{var g=d.Ba.g.parse(l)}catch{g=null}if(Array.isArray(g)&&g.length==3){var b=g;if(b[0]==0){t:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)Hs(d),Qs(d);else break t;Co(d),Mt(18)}}else d.xa=b[1],0<d.xa-d.K&&b[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=Vr(h(d.Va,d),6e3));uu(d.h)<=1&&d.ta&&(d.ta=void 0)}else Ze(d,11)}else if((a.L||d.g==a)&&Hs(d),!y(l))for(b=d.Ba.g.parse(l),l=0;l<b.length;l++){let it=b[l];const At=it[0];if(!(At<=d.K))if(d.K=At,it=it[1],d.I==2)if(it[0]=="c"){d.M=it[1],d.ba=it[2];const Xt=it[3];Xt!=null&&(d.ka=Xt,d.j.info("VER="+d.ka));const tn=it[4];tn!=null&&(d.za=tn,d.j.info("SVER="+d.za));const Te=it[5];Te!=null&&typeof Te=="number"&&Te>0&&(g=1.5*Te,d.O=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const we=a.g;if(we){const Ys=we.g?we.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ys){var P=g.h;P.g||Ys.indexOf("spdy")==-1&&Ys.indexOf("quic")==-1&&Ys.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(bo(P,P.h),P.h=null))}if(g.G){const xo=we.g?we.g.getResponseHeader("X-HTTP-Session-Id"):null;xo&&(g.wa=xo,at(g.J,g.G,xo))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),g=d;var O=a;if(g.na=ku(g,g.L?g.ba:null,g.W),O.L){lu(g.h,O);var G=O,It=g.O;It&&(G.H=It),G.D&&(wo(G),zs(G)),g.g=O}else Vu(g);d.i.length>0&&Ws(d)}else it[0]!="stop"&&it[0]!="close"||Ze(d,7);else d.I==3&&(it[0]=="stop"||it[0]=="close"?it[0]=="stop"?Ze(d,7):Vo(d):it[0]!="noop"&&d.l&&d.l.qa(it),d.A=0)}}Pr(4)}catch{}}var Wm=class{constructor(a,l){this.g=a,this.map=l}};function au(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function cu(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function uu(a){return a.h?1:a.g?a.g.size:0}function vo(a,l){return a.h?a.h==l:a.g?a.g.has(l):!1}function bo(a,l){a.g?a.g.add(l):a.h=l}function lu(a,l){a.h&&a.h==l?a.h=null:a.g&&a.g.has(l)&&a.g.delete(l)}au.prototype.cancel=function(){if(this.i=hu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function hu(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let l=a.i;for(const d of a.g.values())l=l.concat(d.G);return l}return v(a.i)}var du=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Hm(a,l){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const g=a[d].indexOf("=");let b,P=null;g>=0?(b=a[d].substring(0,g),P=a[d].substring(g+1)):b=a[d],l(b,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function ye(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let l;a instanceof ye?(this.l=a.l,Nr(this,a.j),this.o=a.o,this.g=a.g,kr(this,a.u),this.h=a.h,Ro(this,yu(a.i)),this.m=a.m):a&&(l=String(a).match(du))?(this.l=!1,Nr(this,l[1]||"",!0),this.o=Mr(l[2]||""),this.g=Mr(l[3]||"",!0),kr(this,l[4]),this.h=Mr(l[5]||"",!0),Ro(this,l[6]||"",!0),this.m=Mr(l[7]||"")):(this.l=!1,this.i=new Fr(null,this.l))}ye.prototype.toString=function(){const a=[];var l=this.j;l&&a.push(Or(l,fu,!0),":");var d=this.g;return(d||l=="file")&&(a.push("//"),(l=this.o)&&a.push(Or(l,fu,!0),"@"),a.push(Dr(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Or(d,d.charAt(0)=="/"?Xm:Ym,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Or(d,tg)),a.join("")},ye.prototype.resolve=function(a){const l=Yt(this);let d=!!a.j;d?Nr(l,a.j):d=!!a.o,d?l.o=a.o:d=!!a.g,d?l.g=a.g:d=a.u!=null;var g=a.h;if(d)kr(l,a.u);else if(d=!!a.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var b=l.h.lastIndexOf("/");b!=-1&&(g=l.h.slice(0,b+1)+g)}if(b=g,b==".."||b==".")g="";else if(b.indexOf("./")!=-1||b.indexOf("/.")!=-1){g=b.lastIndexOf("/",0)==0,b=b.split("/");const P=[];for(let O=0;O<b.length;){const G=b[O++];G=="."?g&&O==b.length&&P.push(""):G==".."?((P.length>1||P.length==1&&P[0]!="")&&P.pop(),g&&O==b.length&&P.push("")):(P.push(G),g=!0)}g=P.join("/")}else g=b}return d?l.h=g:d=a.i.toString()!=="",d?Ro(l,yu(a.i)):d=!!a.m,d&&(l.m=a.m),l};function Yt(a){return new ye(a)}function Nr(a,l,d){a.j=d?Mr(l,!0):l,a.j&&(a.j=a.j.replace(/:$/,""))}function kr(a,l){if(l){if(l=Number(l),isNaN(l)||l<0)throw Error("Bad port number "+l);a.u=l}else a.u=null}function Ro(a,l,d){l instanceof Fr?(a.i=l,eg(a.i,a.l)):(d||(l=Or(l,Zm)),a.i=new Fr(l,a.l))}function at(a,l,d){a.i.set(l,d)}function $s(a){return at(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Mr(a,l){return a?l?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Or(a,l,d){return typeof a=="string"?(a=encodeURI(a).replace(l,Jm),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Jm(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var fu=/[#\/\?@]/g,Ym=/[#\?:]/g,Xm=/[#\?]/g,Zm=/[#\?@]/g,tg=/#/g;function Fr(a,l){this.h=this.g=null,this.i=a||null,this.j=!!l}function Xe(a){a.g||(a.g=new Map,a.h=0,a.i&&Hm(a.i,function(l,d){a.add(decodeURIComponent(l.replace(/\+/g," ")),d)}))}r=Fr.prototype,r.add=function(a,l){Xe(this),this.i=null,a=Cn(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(l),this.h+=1,this};function mu(a,l){Xe(a),l=Cn(a,l),a.g.has(l)&&(a.i=null,a.h-=a.g.get(l).length,a.g.delete(l))}function gu(a,l){return Xe(a),l=Cn(a,l),a.g.has(l)}r.forEach=function(a,l){Xe(this),this.g.forEach(function(d,g){d.forEach(function(b){a.call(l,b,g,this)},this)},this)};function pu(a,l){Xe(a);let d=[];if(typeof l=="string")gu(a,l)&&(d=d.concat(a.g.get(Cn(a,l))));else for(a=Array.from(a.g.values()),l=0;l<a.length;l++)d=d.concat(a[l]);return d}r.set=function(a,l){return Xe(this),this.i=null,a=Cn(this,a),gu(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[l]),this.h+=1,this},r.get=function(a,l){return a?(a=pu(this,a),a.length>0?String(a[0]):l):l};function _u(a,l,d){mu(a,l),d.length>0&&(a.i=null,a.g.set(Cn(a,l),v(d)),a.h+=d.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],l=Array.from(this.g.keys());for(let g=0;g<l.length;g++){var d=l[g];const b=Dr(d);d=pu(this,d);for(let P=0;P<d.length;P++){let O=b;d[P]!==""&&(O+="="+Dr(d[P])),a.push(O)}}return this.i=a.join("&")};function yu(a){const l=new Fr;return l.i=a.i,a.g&&(l.g=new Map(a.g),l.h=a.h),l}function Cn(a,l){return l=String(l),a.j&&(l=l.toLowerCase()),l}function eg(a,l){l&&!a.j&&(Xe(a),a.i=null,a.g.forEach(function(d,g){const b=g.toLowerCase();g!=b&&(mu(this,g),_u(this,b,d))},a)),a.j=l}function ng(a,l){const d=new Cr;if(o.Image){const g=new Image;g.onload=f(Ie,d,"TestLoadImage: loaded",!0,l,g),g.onerror=f(Ie,d,"TestLoadImage: error",!1,l,g),g.onabort=f(Ie,d,"TestLoadImage: abort",!1,l,g),g.ontimeout=f(Ie,d,"TestLoadImage: timeout",!1,l,g),o.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else l(!1)}function rg(a,l){const d=new Cr,g=new AbortController,b=setTimeout(()=>{g.abort(),Ie(d,"TestPingServer: timeout",!1,l)},1e4);fetch(a,{signal:g.signal}).then(P=>{clearTimeout(b),P.ok?Ie(d,"TestPingServer: ok",!0,l):Ie(d,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(b),Ie(d,"TestPingServer: error",!1,l)})}function Ie(a,l,d,g,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),g(d)}catch{}}function sg(){this.g=new Um}function So(a){this.i=a.Sb||null,this.h=a.ab||!1}m(So,Wc),So.prototype.g=function(){return new Gs(this.i,this.h)};function Gs(a,l){Vt.call(this),this.H=a,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}m(Gs,Vt),r=Gs.prototype,r.open=function(a,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=l,this.readyState=1,Br(this)},r.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const l={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(l.body=a),(this.H||o).fetch(new Request(this.D,l)).then(this.Pa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Lr(this)),this.readyState=0},r.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Br(this)),this.g&&(this.readyState=3,Br(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Iu(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Iu(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}r.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var l=a.value?a.value:new Uint8Array(0);(l=this.B.decode(l,{stream:!a.done}))&&(this.response=this.responseText+=l)}a.done?Lr(this):Br(this),this.readyState==3&&Iu(this)}},r.Oa=function(a){this.g&&(this.response=this.responseText=a,Lr(this))},r.Na=function(a){this.g&&(this.response=a,Lr(this))},r.ga=function(){this.g&&Lr(this)};function Lr(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Br(a)}r.setRequestHeader=function(a,l){this.A.append(a,l)},r.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],l=this.h.entries();for(var d=l.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=l.next();return a.join(`\r
`)};function Br(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Gs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Eu(a){let l="";return Ls(a,function(d,g){l+=g,l+=":",l+=d,l+=`\r
`}),l}function Po(a,l,d){t:{for(g in d){var g=!1;break t}g=!0}g||(d=Eu(d),typeof a=="string"?d!=null&&Dr(d):at(a,l,d))}function mt(a){Vt.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}m(mt,Vt);var ig=/^https?$/i,og=["POST","PUT"];r=mt.prototype,r.Fa=function(a){this.H=a},r.ea=function(a,l,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);l=l?l.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():eu.g(),this.g.onreadystatechange=p(h(this.Ca,this));try{this.B=!0,this.g.open(l,String(a),!0),this.B=!1}catch(P){Tu(this,P);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var b in g)d.set(b,g[b]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const P of g.keys())d.set(P,g.get(P));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(P=>P.toLowerCase()=="content-type"),b=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(og,l,void 0)>=0)||g||b||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,O]of d)this.g.setRequestHeader(P,O);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(P){Tu(this,P)}};function Tu(a,l){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=l,a.o=5,wu(a),Ks(a)}function wu(a){a.A||(a.A=!0,kt(a,"complete"),kt(a,"error"))}r.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,kt(this,"complete"),kt(this,"abort"),Ks(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ks(this,!0)),mt.Z.N.call(this)},r.Ca=function(){this.u||(this.B||this.v||this.j?Au(this):this.Xa())},r.Xa=function(){Au(this)};function Au(a){if(a.h&&typeof i<"u"){if(a.v&&Ee(a)==4)setTimeout(a.Ca.bind(a),0);else if(kt(a,"readystatechange"),Ee(a)==4){a.h=!1;try{const P=a.ca();t:switch(P){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break t;default:l=!1}var d;if(!(d=l)){var g;if(g=P===0){let O=String(a.D).match(du)[1]||null;!O&&o.self&&o.self.location&&(O=o.self.location.protocol.slice(0,-1)),g=!ig.test(O?O.toLowerCase():"")}d=g}if(d)kt(a,"complete"),kt(a,"success");else{a.o=6;try{var b=Ee(a)>2?a.g.statusText:""}catch{b=""}a.l=b+" ["+a.ca()+"]",wu(a)}}finally{Ks(a)}}}}function Ks(a,l){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,l||kt(a,"ready");try{d.onreadystatechange=null}catch{}}}r.isActive=function(){return!!this.g};function Ee(a){return a.g?a.g.readyState:0}r.ca=function(){try{return Ee(this)>2?this.g.status:-1}catch{return-1}},r.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.La=function(a){if(this.g){var l=this.g.responseText;return a&&l.indexOf(a)==0&&(l=l.substring(a.length)),Bm(l)}};function vu(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function ag(a){const l={};a=(a.g&&Ee(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(y(a[g]))continue;var d=Gm(a[g]);const b=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const P=l[b]||[];l[b]=P,P.push(d)}km(l,function(g){return g.join(", ")})}r.ya=function(){return this.o},r.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ur(a,l,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||l}function bu(a){this.za=0,this.i=[],this.j=new Cr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Ur("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Ur("baseRetryDelayMs",5e3,a),this.Za=Ur("retryDelaySeedMs",1e4,a),this.Ta=Ur("forwardChannelMaxRetries",2,a),this.va=Ur("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new au(a&&a.concurrentRequestLimit),this.Ba=new sg,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}r=bu.prototype,r.ka=8,r.I=1,r.connect=function(a,l,d,g){Mt(0),this.W=a,this.H=l||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.J=ku(this,null,this.W),Ws(this)};function Vo(a){if(Ru(a),a.I==3){var l=a.V++,d=Yt(a.J);if(at(d,"SID",a.M),at(d,"RID",l),at(d,"TYPE","terminate"),qr(a,d),l=new _e(a,a.j,l),l.M=2,l.A=$s(Yt(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(l.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=l.A,d=!0),d||(l.g=Mu(l.j,null),l.g.ea(l.A)),l.F=Date.now(),zs(l)}Nu(a)}function Qs(a){a.g&&(Do(a),a.g.cancel(),a.g=null)}function Ru(a){Qs(a),a.v&&(o.clearTimeout(a.v),a.v=null),Hs(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Ws(a){if(!cu(a.h)&&!a.m){a.m=!0;var l=a.Ea;Y||_(),X||(Y(),X=!0),E.add(l,a),a.D=0}}function cg(a,l){return uu(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=l.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Vr(h(a.Ea,a,l),xu(a,a.D)),a.D++,!0)}r.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const b=new _e(this,this.j,a);let P=this.o;if(this.U&&(P?(P=Fc(P),Bc(P,this.U)):P=this.U),this.u!==null||this.R||(b.J=P,P=null),this.S)t:{for(var l=0,d=0;d<this.i.length;d++){e:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break e}g=void 0}if(g===void 0)break;if(l+=g,l>4096){l=d;break t}if(l===4096||d===this.i.length-1){l=d+1;break t}}l=1e3}else l=1e3;l=Pu(this,b,l),d=Yt(this.J),at(d,"RID",a),at(d,"CVER",22),this.G&&at(d,"X-HTTP-Session-Id",this.G),qr(this,d),P&&(this.R?l="headers="+Dr(Eu(P))+"&"+l:this.u&&Po(d,this.u,P)),bo(this.h,b),this.Ra&&at(d,"TYPE","init"),this.S?(at(d,"$req",l),at(d,"SID","null"),b.U=!0,To(b,d,null)):To(b,d,l),this.I=2}}else this.I==3&&(a?Su(this,a):this.i.length==0||cu(this.h)||Su(this))};function Su(a,l){var d;l?d=l.l:d=a.V++;const g=Yt(a.J);at(g,"SID",a.M),at(g,"RID",d),at(g,"AID",a.K),qr(a,g),a.u&&a.o&&Po(g,a.u,a.o),d=new _e(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),l&&(a.i=l.G.concat(a.i)),l=Pu(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),bo(a.h,d),To(d,g,l)}function qr(a,l){a.H&&Ls(a.H,function(d,g){at(l,g,d)}),a.l&&Ls({},function(d,g){at(l,g,d)})}function Pu(a,l,d){d=Math.min(a.i.length,d);const g=a.l?h(a.l.Ka,a.l,a):null;t:{var b=a.i;let G=-1;for(;;){const It=["count="+d];G==-1?d>0?(G=b[0].g,It.push("ofs="+G)):G=0:It.push("ofs="+G);let it=!0;for(let At=0;At<d;At++){var P=b[At].g;const Xt=b[At].map;if(P-=G,P<0)G=Math.max(0,b[At].g-100),it=!1;else try{P="req"+P+"_"||"";try{var O=Xt instanceof Map?Xt:Object.entries(Xt);for(const[tn,Te]of O){let we=Te;c(Te)&&(we=po(Te)),It.push(P+tn+"="+encodeURIComponent(we))}}catch(tn){throw It.push(P+"type="+encodeURIComponent("_badmap")),tn}}catch{g&&g(Xt)}}if(it){O=It.join("&");break t}}O=void 0}return a=a.i.splice(0,d),l.G=a,O}function Vu(a){if(!a.g&&!a.v){a.Y=1;var l=a.Da;Y||_(),X||(Y(),X=!0),E.add(l,a),a.A=0}}function Co(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Vr(h(a.Da,a),xu(a,a.A)),a.A++,!0)}r.Da=function(){if(this.v=null,Cu(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Vr(h(this.Wa,this),a)}},r.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Mt(10),Qs(this),Cu(this))};function Do(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Cu(a){a.g=new _e(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var l=Yt(a.na);at(l,"RID","rpc"),at(l,"SID",a.M),at(l,"AID",a.K),at(l,"CI",a.F?"0":"1"),!a.F&&a.ia&&at(l,"TO",a.ia),at(l,"TYPE","xmlhttp"),qr(a,l),a.u&&a.o&&Po(l,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=$s(Yt(l)),d.u=null,d.R=!0,su(d,a)}r.Va=function(){this.C!=null&&(this.C=null,Qs(this),Co(this),Mt(19))};function Hs(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Du(a,l){var d=null;if(a.g==l){Hs(a),Do(a),a.g=null;var g=2}else if(vo(a.h,l))d=l.G,lu(a.h,l),g=1;else return;if(a.I!=0){if(l.o)if(g==1){d=l.u?l.u.length:0,l=Date.now()-l.F;var b=a.D;g=qs(),kt(g,new Zc(g,d)),Ws(a)}else Vu(a);else if(b=l.m,b==3||b==0&&l.X>0||!(g==1&&cg(a,l)||g==2&&Co(a)))switch(d&&d.length>0&&(l=a.h,l.i=l.i.concat(d)),b){case 1:Ze(a,5);break;case 4:Ze(a,10);break;case 3:Ze(a,6);break;default:Ze(a,2)}}}function xu(a,l){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*l}function Ze(a,l){if(a.j.info("Error code "+l),l==2){var d=h(a.bb,a),g=a.Ua;const b=!g;g=new ye(g||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Nr(g,"https"),$s(g),b?ng(g.toString(),d):rg(g.toString(),d)}else Mt(2);a.I=0,a.l&&a.l.pa(l),Nu(a),Ru(a)}r.bb=function(a){a?(this.j.info("Successfully pinged google.com"),Mt(2)):(this.j.info("Failed to ping google.com"),Mt(1))};function Nu(a){if(a.I=0,a.ja=[],a.l){const l=hu(a.h);(l.length!=0||a.i.length!=0)&&(C(a.ja,l),C(a.ja,a.i),a.h.i.length=0,v(a.i),a.i.length=0),a.l.oa()}}function ku(a,l,d){var g=d instanceof ye?Yt(d):new ye(d);if(g.g!="")l&&(g.g=l+"."+g.g),kr(g,g.u);else{var b=o.location;g=b.protocol,l=l?l+"."+b.hostname:b.hostname,b=+b.port;const P=new ye(null);g&&Nr(P,g),l&&(P.g=l),b&&kr(P,b),d&&(P.h=d),g=P}return d=a.G,l=a.wa,d&&l&&at(g,d,l),at(g,"VER",a.ka),qr(a,g),g}function Mu(a,l,d){if(l&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return l=a.Aa&&!a.ma?new mt(new So({ab:d})):new mt(a.ma),l.Fa(a.L),l}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ou(){}r=Ou.prototype,r.ra=function(){},r.qa=function(){},r.pa=function(){},r.oa=function(){},r.isActive=function(){return!0},r.Ka=function(){};function Js(){}Js.prototype.g=function(a,l){return new $t(a,l)};function $t(a,l){Vt.call(this),this.g=new bu(l),this.l=a,this.h=l&&l.messageUrlParams||null,a=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(a?a["X-WebChannel-Content-Type"]=l.messageContentType:a={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.sa&&(a?a["X-WebChannel-Client-Profile"]=l.sa:a={"X-WebChannel-Client-Profile":l.sa}),this.g.U=a,(a=l&&l.Qb)&&!y(a)&&(this.g.u=a),this.A=l&&l.supportsCrossDomainXhr||!1,this.v=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!y(l)&&(this.g.G=l,a=this.h,a!==null&&l in a&&(a=this.h,l in a&&delete a[l])),this.j=new Dn(this)}m($t,Vt),$t.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},$t.prototype.close=function(){Vo(this.g)},$t.prototype.o=function(a){var l=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=po(a),a=d);l.i.push(new Wm(l.Ya++,a)),l.I==3&&Ws(l)},$t.prototype.N=function(){this.g.l=null,delete this.j,Vo(this.g),delete this.g,$t.Z.N.call(this)};function Fu(a){_o.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var l=a.__sm__;if(l){t:{for(const d in l){a=d;break t}a=void 0}(this.i=a)&&(a=this.i,l=l!==null&&a in l?l[a]:void 0),this.data=l}else this.data=a}m(Fu,_o);function Lu(){yo.call(this),this.status=1}m(Lu,yo);function Dn(a){this.g=a}m(Dn,Ou),Dn.prototype.ra=function(){kt(this.g,"a")},Dn.prototype.qa=function(a){kt(this.g,new Fu(a))},Dn.prototype.pa=function(a){kt(this.g,new Lu)},Dn.prototype.oa=function(){kt(this.g,"b")},Js.prototype.createWebChannel=Js.prototype.g,$t.prototype.send=$t.prototype.o,$t.prototype.open=$t.prototype.m,$t.prototype.close=$t.prototype.close,Lh=function(){return new Js},Fh=function(){return qs()},Oh=Je,Yo={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},js.NO_ERROR=0,js.TIMEOUT=8,js.HTTP_ERROR=6,oi=js,tu.COMPLETE="complete",Mh=tu,Hc.EventType=Sr,Sr.OPEN="a",Sr.CLOSE="b",Sr.ERROR="c",Sr.MESSAGE="d",Vt.prototype.listen=Vt.prototype.J,Wr=Hc,mt.prototype.listenOnce=mt.prototype.K,mt.prototype.getLastError=mt.prototype.Ha,mt.prototype.getLastErrorCode=mt.prototype.ya,mt.prototype.getStatus=mt.prototype.ca,mt.prototype.getResponseJson=mt.prototype.La,mt.prototype.getResponseText=mt.prototype.la,mt.prototype.send=mt.prototype.ea,mt.prototype.setWithCredentials=mt.prototype.Fa,kh=mt}).apply(typeof Xs<"u"?Xs:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}bt.UNAUTHENTICATED=new bt(null),bt.GOOGLE_CREDENTIALS=new bt("google-credentials-uid"),bt.FIRST_PARTY=new bt("first-party-uid"),bt.MOCK_USER=new bt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mr="12.11.0";function Up(r){mr=r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Me=new Ph("@firebase/firestore");function Ln(){return Me.logLevel}function qp(r){Me.setLogLevel(r)}function D(r,...t){if(Me.logLevel<=J.DEBUG){const e=t.map(Va);Me.debug(`Firestore (${mr}): ${r}`,...e)}}function gt(r,...t){if(Me.logLevel<=J.ERROR){const e=t.map(Va);Me.error(`Firestore (${mr}): ${r}`,...e)}}function zt(r,...t){if(Me.logLevel<=J.WARN){const e=t.map(Va);Me.warn(`Firestore (${mr}): ${r}`,...e)}}function Va(r){if(typeof r=="string")return r;try{return function(e){return JSON.stringify(e)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(r,t,e){let n="Unexpected state";typeof t=="string"?n=t:e=t,Bh(r,n,e)}function Bh(r,t,e){let n=`FIRESTORE (${mr}) INTERNAL ASSERTION FAILED: ${t} (ID: ${r.toString(16)})`;if(e!==void 0)try{n+=" CONTEXT: "+JSON.stringify(e)}catch{n+=" CONTEXT: "+e}throw gt(n),new Error(n)}function L(r,t,e,n){let s="Unexpected state";typeof e=="string"?s=e:n=e,r||Bh(t,s,n)}function jp(r,t){r||F(57014,t)}function M(r,t){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class V extends fr{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class qh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(bt.UNAUTHENTICATED))}shutdown(){}}class zp{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class $p{constructor(t){this.t=t,this.currentUser=bt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){L(this.o===void 0,42304);let n=this.i;const s=u=>this.i!==n?(n=this.i,e(u)):Promise.resolve();let i=new St;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new St,t.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;t.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},c=u=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>c(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new St)}},0),o()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(n=>this.i!==t?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(L(typeof n.accessToken=="string",31837,{l:n}),new Uh(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return L(t===null||typeof t=="string",2055,{h:t}),new bt(t)}}class Gp{constructor(t,e,n){this.P=t,this.T=e,this.I=n,this.type="FirstParty",this.user=bt.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const t=this.A();return t&&this.R.set("Authorization",t),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class Kp{constructor(t,e,n){this.P=t,this.T=e,this.I=n}getToken(){return Promise.resolve(new Gp(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable(()=>e(bt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Xo{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Qp{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,vp(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){L(this.o===void 0,3512);const n=i=>{i.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,D("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?e(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>n(i))};const s=i=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Xo(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(L(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new Xo(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}class Wp{getToken(){return Promise.resolve(new Xo(""))}invalidateToken(){}start(t,e){}shutdown(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hp(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let n=0;n<r;n++)e[n]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const s=Hp(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<e&&(n+=t.charAt(s[i]%62))}return n}}function z(r,t){return r<t?-1:r>t?1:0}function Zo(r,t){const e=Math.min(r.length,t.length);for(let n=0;n<e;n++){const s=r.charAt(n),i=t.charAt(n);if(s!==i)return Lo(s)===Lo(i)?z(s,i):Lo(s)?1:-1}return z(r.length,t.length)}const Jp=55296,Yp=57343;function Lo(r){const t=r.charCodeAt(0);return t>=Jp&&t<=Yp}function Kn(r,t,e){return r.length===t.length&&r.every((n,s)=>e(n,t[s]))}function jh(r){return r+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ta="__name__";class Zt{constructor(t,e,n){e===void 0?e=0:e>t.length&&F(637,{offset:e,range:t.length}),n===void 0?n=t.length-e:n>t.length-e&&F(1746,{length:n,range:t.length-e}),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return Zt.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Zt?t.forEach(n=>{e.push(n)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const i=Zt.compareSegments(t.get(s),e.get(s));if(i!==0)return i}return z(t.length,e.length)}static compareSegments(t,e){const n=Zt.isNumericId(t),s=Zt.isNumericId(e);return n&&!s?-1:!n&&s?1:n&&s?Zt.extractNumericId(t).compare(Zt.extractNumericId(e)):Zo(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return xe.fromString(t.substring(4,t.length-2))}}class K extends Zt{construct(t,e,n){return new K(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new V(R.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(s=>s.length>0))}return new K(e)}static emptyPath(){return new K([])}}const Xp=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ut extends Zt{construct(t,e,n){return new ut(t,e,n)}static isValidIdentifier(t){return Xp.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ut.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ta}static keyField(){return new ut([ta])}static fromServerFormat(t){const e=[];let n="",s=0;const i=()=>{if(n.length===0)throw new V(R.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let o=!1;for(;s<t.length;){const c=t[s];if(c==="\\"){if(s+1===t.length)throw new V(R.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new V(R.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=u,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(n+=c,s++):(i(),s++)}if(i(),o)throw new V(R.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ut(e)}static emptyPath(){return new ut([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(t){this.path=t}static fromPath(t){return new k(K.fromString(t))}static fromName(t){return new k(K.fromString(t).popFirst(5))}static empty(){return new k(K.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&K.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return K.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new k(new K(t.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ca(r,t,e){if(!e)throw new V(R.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function zh(r,t,e,n){if(t===!0&&n===!0)throw new V(R.INVALID_ARGUMENT,`${r} and ${e} cannot be used together.`)}function Hu(r){if(!k.isDocumentKey(r))throw new V(R.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Ju(r){if(k.isDocumentKey(r))throw new V(R.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function $h(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function Fi(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":F(12329,{type:typeof r})}function Q(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new V(R.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Fi(r);throw new V(R.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return r}function Gh(r,t){if(t<=0)throw new V(R.INVALID_ARGUMENT,`Function ${r}() requires a positive number, but it was: ${t}.`)}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(r,t){const e={typeString:r};return t&&(e.value=t),e}function An(r,t){if(!$h(r))throw new V(R.INVALID_ARGUMENT,"JSON must be an object");let e;for(const n in t)if(t[n]){const s=t[n].typeString,i="value"in t[n]?{value:t[n].value}:void 0;if(!(n in r)){e=`JSON missing required field: '${n}'`;break}const o=r[n];if(s&&typeof o!==s){e=`JSON field '${n}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){e=`Expected '${n}' field to equal '${i.value}'`;break}}if(e)throw new V(R.INVALID_ARGUMENT,e);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yu=-62135596800,Xu=1e6;class tt{static now(){return tt.fromMillis(Date.now())}static fromDate(t){return tt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor((t-1e3*e)*Xu);return new tt(e,n)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new V(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new V(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Yu)throw new V(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new V(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Xu}_compareTo(t){return this.seconds===t.seconds?z(this.nanoseconds,t.nanoseconds):z(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:tt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(An(t,tt._jsonSchema))return new tt(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-Yu;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}tt._jsonSchemaVersion="firestore/timestamp/1.0",tt._jsonSchema={type:yt("string",tt._jsonSchemaVersion),seconds:yt("number"),nanoseconds:yt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{static fromTimestamp(t){return new U(t)}static min(){return new U(new tt(0,0))}static max(){return new U(new tt(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qn=-1;class Wn{constructor(t,e,n,s){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=s}}function ea(r){return r.fields.find(t=>t.kind===2)}function rn(r){return r.fields.filter(t=>t.kind!==2)}function Zp(r,t){let e=z(r.collectionGroup,t.collectionGroup);if(e!==0)return e;for(let n=0;n<Math.min(r.fields.length,t.fields.length);++n)if(e=t_(r.fields[n],t.fields[n]),e!==0)return e;return z(r.fields.length,t.fields.length)}Wn.UNKNOWN_ID=-1;class hn{constructor(t,e){this.fieldPath=t,this.kind=e}}function t_(r,t){const e=ut.comparator(r.fieldPath,t.fieldPath);return e!==0?e:z(r.kind,t.kind)}class Hn{constructor(t,e){this.sequenceNumber=t,this.offset=e}static empty(){return new Hn(0,Qt.min())}}function Kh(r,t){const e=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,s=U.fromTimestamp(n===1e9?new tt(e+1,0):new tt(e,n));return new Qt(s,k.empty(),t)}function Qh(r){return new Qt(r.readTime,r.key,Qn)}class Qt{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Qt(U.min(),k.empty(),Qn)}static max(){return new Qt(U.max(),k.empty(),Qn)}}function Da(r,t){let e=r.readTime.compareTo(t.readTime);return e!==0?e:(e=k.comparator(r.documentKey,t.documentKey),e!==0?e:z(r.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wh="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Hh{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ze(r){if(r.code!==R.FAILED_PRECONDITION||r.message!==Wh)throw r;D("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&F(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new A((n,s)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(n,s)},this.catchCallback=i=>{this.wrapFailure(e,i).next(n,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof A?e:A.resolve(e)}catch(e){return A.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):A.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):A.reject(e)}static resolve(t){return new A((e,n)=>{e(t)})}static reject(t){return new A((e,n)=>{n(t)})}static waitFor(t){return new A((e,n)=>{let s=0,i=0,o=!1;t.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&e()},u=>n(u))}),o=!0,i===s&&e()})}static or(t){let e=A.resolve(!1);for(const n of t)e=e.next(s=>s?A.resolve(s):n());return e}static forEach(t,e){const n=[];return t.forEach((s,i)=>{n.push(e.call(this,s,i))}),this.waitFor(n)}static mapArray(t,e){return new A((n,s)=>{const i=t.length,o=new Array(i);let c=0;for(let u=0;u<i;u++){const h=u;e(t[h]).next(f=>{o[h]=f,++c,c===i&&n(o)},f=>s(f))}})}static doWhile(t,e){return new A((n,s)=>{const i=()=>{t()===!0?e().next(()=>{i()},s):n()};i()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gt="SimpleDb";class Li{static open(t,e,n,s){try{return new Li(e,t.transaction(s,n))}catch(i){throw new Zr(e,i)}}constructor(t,e){this.action=t,this.transaction=e,this.aborted=!1,this.S=new St,this.transaction.oncomplete=()=>{this.S.resolve()},this.transaction.onabort=()=>{e.error?this.S.reject(new Zr(t,e.error)):this.S.resolve()},this.transaction.onerror=n=>{const s=xa(n.target.error);this.S.reject(new Zr(t,s))}}get D(){return this.S.promise}abort(t){t&&this.S.reject(t),this.aborted||(D(Gt,"Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}C(){const t=this.transaction;this.aborted||typeof t.commit!="function"||t.commit()}store(t){const e=this.transaction.objectStore(t);return new n_(e)}}class re{static delete(t){return D(Gt,"Removing database:",t),on(Eh().indexedDB.deleteDatabase(t)).toPromise()}static v(){if(!bh())return!1;if(re.F())return!0;const t=Gn(),e=re.M(t),n=0<e&&e<10,s=Jh(t),i=0<s&&s<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||n||i)}static F(){var t;return typeof process<"u"&&((t=process.__PRIVATE_env)==null?void 0:t.__PRIVATE_USE_MOCK_PERSISTENCE)==="YES"}static O(t,e){return t.store(e)}static M(t){const e=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=e?e[1].split("_").slice(0,2).join("."):"-1";return Number(n)}constructor(t,e,n){this.name=t,this.version=e,this.N=n,this.B=null,re.M(Gn())===12.2&&gt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async L(t){return this.db||(D(Gt,"Opening database:",this.name),this.db=await new Promise((e,n)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;e(o)},s.onblocked=()=>{n(new Zr(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?n(new V(R.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?n(new V(R.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):n(new Zr(t,o))},s.onupgradeneeded=i=>{D(Gt,'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.N.k(o,s.transaction,i.oldVersion,this.version).next(()=>{D(Gt,"Database upgrade to version "+this.version+" complete")})}})),this.q&&(this.db.onversionchange=e=>this.q(e)),this.db}K(t){this.q=t,this.db&&(this.db.onversionchange=e=>t(e))}async runTransaction(t,e,n,s){const i=e==="readonly";let o=0;for(;;){++o;try{this.db=await this.L(t);const c=Li.open(this.db,t,i?"readonly":"readwrite",n),u=s(c).next(h=>(c.C(),h)).catch(h=>(c.abort(h),A.reject(h))).toPromise();return u.catch(()=>{}),await c.D,u}catch(c){const u=c,h=u.name!=="FirebaseError"&&o<3;if(D(Gt,"Transaction failed with error:",u.message,"Retrying:",h),this.close(),!h)return Promise.reject(u)}}}close(){this.db&&this.db.close(),this.db=void 0}}function Jh(r){const t=r.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}class e_{constructor(t){this.U=t,this.$=!1,this.W=null}get isDone(){return this.$}get G(){return this.W}set cursor(t){this.U=t}done(){this.$=!0}j(t){this.W=t}delete(){return on(this.U.delete())}}class Zr extends V{constructor(t,e){super(R.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${e}`),this.name="IndexedDbTransactionError"}}function $e(r){return r.name==="IndexedDbTransactionError"}class n_{constructor(t){this.store=t}put(t,e){let n;return e!==void 0?(D(Gt,"PUT",this.store.name,t,e),n=this.store.put(e,t)):(D(Gt,"PUT",this.store.name,"<auto-key>",t),n=this.store.put(t)),on(n)}add(t){return D(Gt,"ADD",this.store.name,t,t),on(this.store.add(t))}get(t){return on(this.store.get(t)).next(e=>(e===void 0&&(e=null),D(Gt,"GET",this.store.name,t,e),e))}delete(t){return D(Gt,"DELETE",this.store.name,t),on(this.store.delete(t))}count(){return D(Gt,"COUNT",this.store.name),on(this.store.count())}J(t,e){const n=this.options(t,e),s=n.index?this.store.index(n.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(n.range);return new A((o,c)=>{i.onerror=u=>{c(u.target.error)},i.onsuccess=u=>{o(u.target.result)}})}{const i=this.cursor(n),o=[];return this.H(i,(c,u)=>{o.push(u)}).next(()=>o)}}Z(t,e){const n=this.store.getAll(t,e===null?void 0:e);return new A((s,i)=>{n.onerror=o=>{i(o.target.error)},n.onsuccess=o=>{s(o.target.result)}})}X(t,e){D(Gt,"DELETE ALL",this.store.name);const n=this.options(t,e);n.Y=!1;const s=this.cursor(n);return this.H(s,(i,o,c)=>c.delete())}ee(t,e){let n;e?n=t:(n={},e=t);const s=this.cursor(n);return this.H(s,e)}te(t){const e=this.cursor({});return new A((n,s)=>{e.onerror=i=>{const o=xa(i.target.error);s(o)},e.onsuccess=i=>{const o=i.target.result;o?t(o.primaryKey,o.value).next(c=>{c?o.continue():n()}):n()}})}H(t,e){const n=[];return new A((s,i)=>{t.onerror=o=>{i(o.target.error)},t.onsuccess=o=>{const c=o.target.result;if(!c)return void s();const u=new e_(c),h=e(c.primaryKey,c.value,u);if(h instanceof A){const f=h.catch(m=>(u.done(),A.reject(m)));n.push(f)}u.isDone?s():u.G===null?c.continue():c.continue(u.G)}}).next(()=>A.waitFor(n))}options(t,e){let n;return t!==void 0&&(typeof t=="string"?n=t:e=t),{index:n,range:e}}cursor(t){let e="next";if(t.reverse&&(e="prev"),t.index){const n=this.store.index(t.index);return t.Y?n.openKeyCursor(t.range,e):n.openCursor(t.range,e)}return this.store.openCursor(t.range,e)}}function on(r){return new A((t,e)=>{r.onsuccess=n=>{const s=n.target.result;t(s)},r.onerror=n=>{const s=xa(n.target.error);e(s)}})}let Zu=!1;function xa(r){const t=re.M(Gn());if(t>=12.2&&t<13){const e="An internal error was encountered in the Indexed Database server";if(r.message.indexOf(e)>=0){const n=new V("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${e}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Zu||(Zu=!0,setTimeout(()=>{throw n},0)),n}}return r}const ts="IndexBackfiller";class r_{constructor(t,e){this.asyncQueue=t,this.ne=e,this.task=null}start(){this.re(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}re(t){D(ts,`Scheduled in ${t}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",t,async()=>{this.task=null;try{const e=await this.ne.ie();D(ts,`Documents written: ${e}`)}catch(e){$e(e)?D(ts,"Ignoring IndexedDB error during index backfill: ",e):await ze(e)}await this.re(6e4)})}}class s_{constructor(t,e){this.localStore=t,this.persistence=e}async ie(t=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",e=>this.se(e,t))}se(t,e){const n=new Set;let s=e,i=!0;return A.doWhile(()=>i===!0&&s>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(t).next(o=>{if(o!==null&&!n.has(o))return D(ts,`Processing collection: ${o}`),this.oe(t,o,s).next(c=>{s-=c,n.add(o)});i=!1})).next(()=>e-s)}oe(t,e,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(t,e).next(s=>this.localStore.localDocuments.getNextDocuments(t,e,s,n).next(i=>{const o=i.changes;return this.localStore.indexManager.updateIndexEntries(t,o).next(()=>this._e(s,i)).next(c=>(D(ts,`Updating offset: ${c}`),this.localStore.indexManager.updateCollectionGroup(t,e,c))).next(()=>o.size)}))}_e(t,e){let n=t;return e.changes.forEach((s,i)=>{const o=Qh(i);Da(o,n)>0&&(n=o)}),new Qt(n.readTime,n.documentKey,Math.max(e.batchId,t.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=n=>this.ae(n),this.ue=n=>e.writeSequenceNumber(n))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}Lt.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ne=-1;function As(r){return r==null}function hs(r){return r===0&&1/r==-1/0}function Yh(r){return typeof r=="number"&&Number.isInteger(r)&&!hs(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ei="";function xt(r){let t="";for(let e=0;e<r.length;e++)t.length>0&&(t=tl(t)),t=i_(r.get(e),t);return tl(t)}function i_(r,t){let e=t;const n=r.length;for(let s=0;s<n;s++){const i=r.charAt(s);switch(i){case"\0":e+="";break;case Ei:e+="";break;default:e+=i}}return e}function tl(r){return r+Ei+""}function ee(r){const t=r.length;if(L(t>=2,64408,{path:r}),t===2)return L(r.charAt(0)===Ei&&r.charAt(1)==="",56145,{path:r}),K.emptyPath();const e=t-2,n=[];let s="";for(let i=0;i<t;){const o=r.indexOf(Ei,i);switch((o<0||o>e)&&F(50515,{path:r}),r.charAt(o+1)){case"":const c=r.substring(i,o);let u;s.length===0?u=c:(s+=c,u=s,s=""),n.push(u);break;case"":s+=r.substring(i,o),s+="\0";break;case"":s+=r.substring(i,o+1);break;default:F(61167,{path:r})}i=o+2}return new K(n)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sn="remoteDocuments",vs="owner",xn="owner",ds="mutationQueues",o_="userId",Wt="mutations",el="batchId",ln="userMutationsIndex",nl=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ai(r,t){return[r,xt(t)]}function Xh(r,t,e){return[r,xt(t),e]}const a_={},Jn="documentMutations",Ti="remoteDocumentsV14",c_=["prefixPath","collectionGroup","readTime","documentId"],ci="documentKeyIndex",u_=["prefixPath","collectionGroup","documentId"],Zh="collectionGroupIndex",l_=["collectionGroup","readTime","prefixPath","documentId"],fs="remoteDocumentGlobal",na="remoteDocumentGlobalKey",Yn="targets",td="queryTargetsIndex",h_=["canonicalId","targetId"],Xn="targetDocuments",d_=["targetId","path"],Na="documentTargetsIndex",f_=["path","targetId"],wi="targetGlobalKey",dn="targetGlobal",ms="collectionParents",m_=["collectionId","parent"],Zn="clientMetadata",g_="clientId",Bi="bundles",p_="bundleId",Ui="namedQueries",__="name",ka="indexConfiguration",y_="indexId",ra="collectionGroupIndex",I_="collectionGroup",es="indexState",E_=["indexId","uid"],ed="sequenceNumberIndex",T_=["uid","sequenceNumber"],ns="indexEntries",w_=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],nd="documentKeyIndex",A_=["indexId","uid","orderedDocumentKey"],qi="documentOverlays",v_=["userId","collectionPath","documentId"],sa="collectionPathOverlayIndex",b_=["userId","collectionPath","largestBatchId"],rd="collectionGroupOverlayIndex",R_=["userId","collectionGroup","largestBatchId"],Ma="globals",S_="name",sd=[ds,Wt,Jn,sn,Yn,vs,dn,Xn,Zn,fs,ms,Bi,Ui],P_=[...sd,qi],id=[ds,Wt,Jn,Ti,Yn,vs,dn,Xn,Zn,fs,ms,Bi,Ui,qi],od=id,Oa=[...od,ka,es,ns],V_=Oa,ad=[...Oa,Ma],C_=ad;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia extends Hh{constructor(t,e){super(),this.le=t,this.currentSequenceNumber=e}}function wt(r,t){const e=M(r);return re.O(e.le,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rl(r){let t=0;for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t++;return t}function Ge(r,t){for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t(e,r[e])}function cd(r,t){const e=[];for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.push(t(r[n],n,r));return e}function ud(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(t,e){this.comparator=t,this.root=e||Pt.EMPTY}insert(t,e){return new ot(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Pt.BLACK,null,null))}remove(t){return new ot(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Pt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(n===0)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return e+n.left.size;s<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Zs(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Zs(this.root,t,this.comparator,!1)}getReverseIterator(){return new Zs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Zs(this.root,t,this.comparator,!0)}}class Zs{constructor(t,e,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Pt{constructor(t,e,n,s,i){this.key=t,this.value=e,this.color=n??Pt.RED,this.left=s??Pt.EMPTY,this.right=i??Pt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,s,i){return new Pt(t??this.key,e??this.value,n??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let s=this;const i=n(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,e,n),null):i===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Pt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return Pt.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Pt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Pt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw F(43730,{key:this.key,value:this.value});if(this.right.isRed())throw F(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw F(27949);return t+(this.isRed()?0:1)}}Pt.EMPTY=null,Pt.RED=!0,Pt.BLACK=!1;Pt.EMPTY=new class{constructor(){this.size=0}get key(){throw F(57766)}get value(){throw F(16141)}get color(){throw F(16727)}get left(){throw F(29726)}get right(){throw F(36894)}copy(t,e,n,s,i){return this}insert(t,e,n){return new Pt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(t){this.comparator=t,this.data=new ot(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let n;for(n=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new sl(this.data.getIterator())}getIteratorFrom(t){return new sl(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(n=>{e=e.add(n)}),e}isEqual(t){if(!(t instanceof rt)||this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,i=n.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new rt(this.comparator);return e.data=t,e}}class sl{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Nn(r){return r.hasNext()?r.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(t){this.fields=t,t.sort(ut.comparator)}static empty(){return new Bt([])}unionWith(t){let e=new rt(ut.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new Bt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Kn(this.fields,t.fields,(e,n)=>e.isEqual(n))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D_(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new ld("Invalid base64 string: "+i):i}}(t);return new ft(e)}static fromUint8Array(t){const e=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(t);return new ft(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return z(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ft.EMPTY_BYTE_STRING=new ft("");const x_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ue(r){if(L(!!r,39018),typeof r=="string"){let t=0;const e=x_.exec(r);if(L(!!e,46558,{timestamp:r}),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:lt(r.seconds),nanos:lt(r.nanos)}}function lt(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function le(r){return typeof r=="string"?ft.fromBase64String(r):ft.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hd="server_timestamp",dd="__type__",fd="__previous_value__",md="__local_write_time__";function ji(r){var e,n;return((n=(((e=r==null?void 0:r.mapValue)==null?void 0:e.fields)||{})[dd])==null?void 0:n.stringValue)===hd}function zi(r){const t=r.mapValue.fields[fd];return ji(t)?zi(t):t}function gs(r){const t=ue(r.mapValue.fields[md].timestampValue);return new tt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(t,e,n,s,i,o,c,u,h,f,m){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=f,this.apiKey=m}}const ps="(default)";class Oe{constructor(t,e){this.projectId=t,this.database=e||ps}static empty(){return new Oe("","")}get isDefaultDatabase(){return this.database===ps}isEqual(t){return t instanceof Oe&&t.projectId===this.projectId&&t.database===this.database}}function k_(r,t){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new V(R.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Oe(r.options.projectId,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fa="__type__",gd="__max__",Pe={mapValue:{fields:{__type__:{stringValue:gd}}}},La="__vector__",tr="value",ui={nullValue:"NULL_VALUE"};function Fe(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?ji(r)?4:pd(r)?9007199254740991:$i(r)?10:11:F(28295,{value:r})}function ie(r,t){if(r===t)return!0;const e=Fe(r);if(e!==Fe(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return gs(r).isEqual(gs(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=ue(s.timestampValue),c=ue(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(r,t);case 5:return r.stringValue===t.stringValue;case 6:return function(s,i){return le(s.bytesValue).isEqual(le(i.bytesValue))}(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return function(s,i){return lt(s.geoPointValue.latitude)===lt(i.geoPointValue.latitude)&&lt(s.geoPointValue.longitude)===lt(i.geoPointValue.longitude)}(r,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return lt(s.integerValue)===lt(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=lt(s.doubleValue),c=lt(i.doubleValue);return o===c?hs(o)===hs(c):isNaN(o)&&isNaN(c)}return!1}(r,t);case 9:return Kn(r.arrayValue.values||[],t.arrayValue.values||[],ie);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(rl(o)!==rl(c))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(c[u]===void 0||!ie(o[u],c[u])))return!1;return!0}(r,t);default:return F(52216,{left:r})}}function _s(r,t){return(r.values||[]).find(e=>ie(e,t))!==void 0}function Le(r,t){if(r===t)return 0;const e=Fe(r),n=Fe(t);if(e!==n)return z(e,n);switch(e){case 0:case 9007199254740991:return 0;case 1:return z(r.booleanValue,t.booleanValue);case 2:return function(i,o){const c=lt(i.integerValue||i.doubleValue),u=lt(o.integerValue||o.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1}(r,t);case 3:return il(r.timestampValue,t.timestampValue);case 4:return il(gs(r),gs(t));case 5:return Zo(r.stringValue,t.stringValue);case 6:return function(i,o){const c=le(i),u=le(o);return c.compareTo(u)}(r.bytesValue,t.bytesValue);case 7:return function(i,o){const c=i.split("/"),u=o.split("/");for(let h=0;h<c.length&&h<u.length;h++){const f=z(c[h],u[h]);if(f!==0)return f}return z(c.length,u.length)}(r.referenceValue,t.referenceValue);case 8:return function(i,o){const c=z(lt(i.latitude),lt(o.latitude));return c!==0?c:z(lt(i.longitude),lt(o.longitude))}(r.geoPointValue,t.geoPointValue);case 9:return ol(r.arrayValue,t.arrayValue);case 10:return function(i,o){var p,v,C,N;const c=i.fields||{},u=o.fields||{},h=(p=c[tr])==null?void 0:p.arrayValue,f=(v=u[tr])==null?void 0:v.arrayValue,m=z(((C=h==null?void 0:h.values)==null?void 0:C.length)||0,((N=f==null?void 0:f.values)==null?void 0:N.length)||0);return m!==0?m:ol(h,f)}(r.mapValue,t.mapValue);case 11:return function(i,o){if(i===Pe.mapValue&&o===Pe.mapValue)return 0;if(i===Pe.mapValue)return 1;if(o===Pe.mapValue)return-1;const c=i.fields||{},u=Object.keys(c),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){const p=Zo(u[m],f[m]);if(p!==0)return p;const v=Le(c[u[m]],h[f[m]]);if(v!==0)return v}return z(u.length,f.length)}(r.mapValue,t.mapValue);default:throw F(23264,{he:e})}}function il(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return z(r,t);const e=ue(r),n=ue(t),s=z(e.seconds,n.seconds);return s!==0?s:z(e.nanos,n.nanos)}function ol(r,t){const e=r.values||[],n=t.values||[];for(let s=0;s<e.length&&s<n.length;++s){const i=Le(e[s],n[s]);if(i)return i}return z(e.length,n.length)}function er(r){return oa(r)}function oa(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(e){const n=ue(e);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(e){return le(e).toBase64()}(r.bytesValue):"referenceValue"in r?function(e){return k.fromName(e).toString()}(r.referenceValue):"geoPointValue"in r?function(e){return`geo(${e.latitude},${e.longitude})`}(r.geoPointValue):"arrayValue"in r?function(e){let n="[",s=!0;for(const i of e.values||[])s?s=!1:n+=",",n+=oa(i);return n+"]"}(r.arrayValue):"mapValue"in r?function(e){const n=Object.keys(e.fields||{}).sort();let s="{",i=!0;for(const o of n)i?i=!1:s+=",",s+=`${o}:${oa(e.fields[o])}`;return s+"}"}(r.mapValue):F(61005,{value:r})}function li(r){switch(Fe(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=zi(r);return t?16+li(t):16;case 5:return 2*r.stringValue.length;case 6:return le(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(n){return(n.values||[]).reduce((s,i)=>s+li(i),0)}(r.arrayValue);case 10:case 11:return function(n){let s=0;return Ge(n.fields,(i,o)=>{s+=i.length+li(o)}),s}(r.mapValue);default:throw F(13486,{value:r})}}function mn(r,t){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${t.path.canonicalString()}`}}function aa(r){return!!r&&"integerValue"in r}function ys(r){return!!r&&"arrayValue"in r}function al(r){return!!r&&"nullValue"in r}function cl(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function hi(r){return!!r&&"mapValue"in r}function $i(r){var e,n;return((n=(((e=r==null?void 0:r.mapValue)==null?void 0:e.fields)||{})[Fa])==null?void 0:n.stringValue)===La}function rs(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const t={mapValue:{fields:{}}};return Ge(r.mapValue.fields,(e,n)=>t.mapValue.fields[e]=rs(n)),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(r.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=rs(r.arrayValue.values[e]);return t}return{...r}}function pd(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===gd}const _d={mapValue:{fields:{[Fa]:{stringValue:La},[tr]:{arrayValue:{}}}}};function M_(r){return"nullValue"in r?ui:"booleanValue"in r?{booleanValue:!1}:"integerValue"in r||"doubleValue"in r?{doubleValue:NaN}:"timestampValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in r?{stringValue:""}:"bytesValue"in r?{bytesValue:""}:"referenceValue"in r?mn(Oe.empty(),k.empty()):"geoPointValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in r?{arrayValue:{}}:"mapValue"in r?$i(r)?_d:{mapValue:{}}:F(35942,{value:r})}function O_(r){return"nullValue"in r?{booleanValue:!1}:"booleanValue"in r?{doubleValue:NaN}:"integerValue"in r||"doubleValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in r?{stringValue:""}:"stringValue"in r?{bytesValue:""}:"bytesValue"in r?mn(Oe.empty(),k.empty()):"referenceValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in r?{arrayValue:{}}:"arrayValue"in r?_d:"mapValue"in r?$i(r)?{mapValue:{}}:Pe:F(61959,{value:r})}function ul(r,t){const e=Le(r.value,t.value);return e!==0?e:r.inclusive&&!t.inclusive?-1:!r.inclusive&&t.inclusive?1:0}function ll(r,t){const e=Le(r.value,t.value);return e!==0?e:r.inclusive&&!t.inclusive?1:!r.inclusive&&t.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(t){this.value=t}static empty(){return new Rt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!hi(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=rs(e)}setAll(t){let e=ut.emptyPath(),n={},s=[];t.forEach((o,c)=>{if(!e.isImmediateParentOf(c)){const u=this.getFieldsMap(e);this.applyChanges(u,n,s),n={},s=[],e=c.popLast()}o?n[c.lastSegment()]=rs(o):s.push(c.lastSegment())});const i=this.getFieldsMap(e);this.applyChanges(i,n,s)}delete(t){const e=this.field(t.popLast());hi(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return ie(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let s=e.mapValue.fields[t.get(n)];hi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,n){Ge(e,(s,i)=>t[s]=i);for(const s of n)delete t[s]}clone(){return new Rt(rs(this.value))}}function yd(r){const t=[];return Ge(r.fields,(e,n)=>{const s=new ut([e]);if(hi(n)){const i=yd(n.mapValue).fields;if(i.length===0)t.push(s);else for(const o of i)t.push(s.child(o))}else t.push(s)}),new Bt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(t,e,n,s,i,o,c){this.key=t,this.documentType=e,this.version=n,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(t){return new ct(t,0,U.min(),U.min(),U.min(),Rt.empty(),0)}static newFoundDocument(t,e,n,s){return new ct(t,1,e,U.min(),n,s,0)}static newNoDocument(t,e){return new ct(t,2,e,U.min(),U.min(),Rt.empty(),0)}static newUnknownDocument(t,e){return new ct(t,3,e,U.min(),U.min(),Rt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(U.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Rt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Rt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=U.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof ct&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new ct(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(t,e){this.position=t,this.inclusive=e}}function hl(r,t,e){let n=0;for(let s=0;s<r.position.length;s++){const i=t[s],o=r.position[s];if(i.field.isKeyField()?n=k.comparator(k.fromName(o.referenceValue),e.key):n=Le(o,e.data.field(i.field)),i.dir==="desc"&&(n*=-1),n!==0)break}return n}function dl(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let e=0;e<r.position.length;e++)if(!ie(r.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(t,e="asc"){this.field=t,this.dir=e}}function F_(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{}class W extends Id{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,n):new L_(t,e,n):e==="array-contains"?new q_(t,n):e==="in"?new bd(t,n):e==="not-in"?new j_(t,n):e==="array-contains-any"?new z_(t,n):new W(t,e,n)}static createKeyFieldInFilter(t,e,n){return e==="in"?new B_(t,n):new U_(t,n)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(Le(e,this.value)):e!==null&&Fe(this.value)===Fe(e)&&this.matchesComparison(Le(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return F(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class et extends Id{constructor(t,e){super(),this.filters=t,this.op=e,this.Pe=null}static create(t,e){return new et(t,e)}matches(t){return nr(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function nr(r){return r.op==="and"}function ca(r){return r.op==="or"}function Ba(r){return Ed(r)&&nr(r)}function Ed(r){for(const t of r.filters)if(t instanceof et)return!1;return!0}function ua(r){if(r instanceof W)return r.field.canonicalString()+r.op.toString()+er(r.value);if(Ba(r))return r.filters.map(t=>ua(t)).join(",");{const t=r.filters.map(e=>ua(e)).join(",");return`${r.op}(${t})`}}function Td(r,t){return r instanceof W?function(n,s){return s instanceof W&&n.op===s.op&&n.field.isEqual(s.field)&&ie(n.value,s.value)}(r,t):r instanceof et?function(n,s){return s instanceof et&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,o,c)=>i&&Td(o,s.filters[c]),!0):!1}(r,t):void F(19439)}function wd(r,t){const e=r.filters.concat(t);return et.create(e,r.op)}function Ad(r){return r instanceof W?function(e){return`${e.field.canonicalString()} ${e.op} ${er(e.value)}`}(r):r instanceof et?function(e){return e.op.toString()+" {"+e.getFilters().map(Ad).join(" ,")+"}"}(r):"Filter"}class L_ extends W{constructor(t,e,n){super(t,e,n),this.key=k.fromName(n.referenceValue)}matches(t){const e=k.comparator(t.key,this.key);return this.matchesComparison(e)}}class B_ extends W{constructor(t,e){super(t,"in",e),this.keys=vd("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class U_ extends W{constructor(t,e){super(t,"not-in",e),this.keys=vd("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function vd(r,t){var e;return(((e=t.arrayValue)==null?void 0:e.values)||[]).map(n=>k.fromName(n.referenceValue))}class q_ extends W{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return ys(e)&&_s(e.arrayValue,this.value)}}class bd extends W{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&_s(this.value.arrayValue,e)}}class j_ extends W{constructor(t,e){super(t,"not-in",e)}matches(t){if(_s(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!_s(this.value.arrayValue,e)}}class z_ extends W{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!ys(e)||!e.arrayValue.values)&&e.arrayValue.values.some(n=>_s(this.value.arrayValue,n))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{constructor(t,e=null,n=[],s=[],i=null,o=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.Te=null}}function la(r,t=null,e=[],n=[],s=null,i=null,o=null){return new $_(r,t,e,n,s,i,o)}function gn(r){const t=M(r);if(t.Te===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(n=>ua(n)).join(","),e+="|ob:",e+=t.orderBy.map(n=>function(i){return i.field.canonicalString()+i.dir}(n)).join(","),As(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>er(n)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>er(n)).join(",")),t.Te=e}return t.Te}function bs(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<r.orderBy.length;e++)if(!F_(r.orderBy[e],t.orderBy[e]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let e=0;e<r.filters.length;e++)if(!Td(r.filters[e],t.filters[e]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!dl(r.startAt,t.startAt)&&dl(r.endAt,t.endAt)}function Ai(r){return k.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function vi(r,t){return r.filters.filter(e=>e instanceof W&&e.field.isEqual(t))}function fl(r,t,e){let n=ui,s=!0;for(const i of vi(r,t)){let o=ui,c=!0;switch(i.op){case"<":case"<=":o=M_(i.value);break;case"==":case"in":case">=":o=i.value;break;case">":o=i.value,c=!1;break;case"!=":case"not-in":o=ui}ul({value:n,inclusive:s},{value:o,inclusive:c})<0&&(n=o,s=c)}if(e!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(t)){const o=e.position[i];ul({value:n,inclusive:s},{value:o,inclusive:e.inclusive})<0&&(n=o,s=e.inclusive);break}}return{value:n,inclusive:s}}function ml(r,t,e){let n=Pe,s=!0;for(const i of vi(r,t)){let o=Pe,c=!0;switch(i.op){case">=":case">":o=O_(i.value),c=!1;break;case"==":case"in":case"<=":o=i.value;break;case"<":o=i.value,c=!1;break;case"!=":case"not-in":o=Pe}ll({value:n,inclusive:s},{value:o,inclusive:c})>0&&(n=o,s=c)}if(e!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(t)){const o=e.position[i];ll({value:n,inclusive:s},{value:o,inclusive:e.inclusive})>0&&(n=o,s=e.inclusive);break}}return{value:n,inclusive:s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(t,e=null,n=[],s=[],i=null,o="F",c=null,u=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=u,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function Rd(r,t,e,n,s,i,o,c){return new de(r,t,e,n,s,i,o,c)}function gr(r){return new de(r)}function gl(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function G_(r){return k.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function Ua(r){return r.collectionGroup!==null}function jn(r){const t=M(r);if(t.Ee===null){t.Ee=[];const e=new Set;for(const i of t.explicitOrderBy)t.Ee.push(i),e.add(i.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new rt(ut.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(t).forEach(i=>{e.has(i.canonicalString())||i.isKeyField()||t.Ee.push(new Is(i,n))}),e.has(ut.keyField().canonicalString())||t.Ee.push(new Is(ut.keyField(),n))}return t.Ee}function Nt(r){const t=M(r);return t.Ie||(t.Ie=Pd(t,jn(r))),t.Ie}function Sd(r){const t=M(r);return t.Re||(t.Re=Pd(t,r.explicitOrderBy)),t.Re}function Pd(r,t){if(r.limitType==="F")return la(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Is(s.field,i)});const e=r.endAt?new Be(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new Be(r.startAt.position,r.startAt.inclusive):null;return la(r.path,r.collectionGroup,t,r.filters,r.limit,e,n)}}function ha(r,t){const e=r.filters.concat([t]);return new de(r.path,r.collectionGroup,r.explicitOrderBy.slice(),e,r.limit,r.limitType,r.startAt,r.endAt)}function K_(r,t){const e=r.explicitOrderBy.concat([t]);return new de(r.path,r.collectionGroup,e,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}function bi(r,t,e){return new de(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,e,r.startAt,r.endAt)}function Q_(r,t){return new de(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,t,r.endAt)}function W_(r,t){return new de(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,r.startAt,t)}function Rs(r,t){return bs(Nt(r),Nt(t))&&r.limitType===t.limitType}function Vd(r){return`${gn(Nt(r))}|lt:${r.limitType}`}function Bn(r){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>Ad(s)).join(", ")}]`),As(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>er(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>er(s)).join(",")),`Target(${n})`}(Nt(r))}; limitType=${r.limitType})`}function Ss(r,t){return t.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):k.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(r,t)&&function(n,s){for(const i of jn(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(r,t)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(r,t)&&function(n,s){return!(n.startAt&&!function(o,c,u){const h=hl(o,c,u);return o.inclusive?h<=0:h<0}(n.startAt,jn(n),s)||n.endAt&&!function(o,c,u){const h=hl(o,c,u);return o.inclusive?h>=0:h>0}(n.endAt,jn(n),s))}(r,t)}function Cd(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function Dd(r){return(t,e)=>{let n=!1;for(const s of jn(r)){const i=H_(s,t,e);if(i!==0)return i;n=n||s.field.isKeyField()}return 0}}function H_(r,t,e){const n=r.field.isKeyField()?k.comparator(t.key,e.key):function(i,o,c){const u=o.data.field(i),h=c.data.field(i);return u!==null&&h!==null?Le(u,h):F(42886)}(r.field,t,e);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return F(19790,{direction:r.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n!==void 0){for(const[s,i]of n)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,e){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return this.inner[n]=[[t,e]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n===void 0)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],t))return n.length===1?delete this.inner[e]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Ge(this.inner,(e,n)=>{for(const[s,i]of n)t(s,i)})}isEmpty(){return ud(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J_=new ot(k.comparator);function Ut(){return J_}const xd=new ot(k.comparator);function Hr(...r){let t=xd;for(const e of r)t=t.insert(e.key,e);return t}function Nd(r){let t=xd;return r.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function ne(){return ss()}function kd(){return ss()}function ss(){return new fe(r=>r.toString(),(r,t)=>r.isEqual(t))}const Y_=new ot(k.comparator),X_=new rt(k.comparator);function $(...r){let t=X_;for(const e of r)t=t.add(e);return t}const Z_=new rt(z);function qa(){return Z_}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ja(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:hs(t)?"-0":t}}function Md(r){return{integerValue:""+r}}function Od(r,t){return Yh(t)?Md(t):ja(r,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(){this._=void 0}}function ty(r,t,e){return r instanceof rr?function(s,i){const o={fields:{[dd]:{stringValue:hd},[md]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&ji(i)&&(i=zi(i)),i&&(o.fields[fd]=i),{mapValue:o}}(e,t):r instanceof pn?Ld(r,t):r instanceof _n?Bd(r,t):function(s,i){const o=Fd(s,i),c=pl(o)+pl(s.Ae);return aa(o)&&aa(s.Ae)?Md(c):ja(s.serializer,c)}(r,t)}function ey(r,t,e){return r instanceof pn?Ld(r,t):r instanceof _n?Bd(r,t):e}function Fd(r,t){return r instanceof sr?function(n){return aa(n)||function(i){return!!i&&"doubleValue"in i}(n)}(t)?t:{integerValue:0}:null}class rr extends Gi{}class pn extends Gi{constructor(t){super(),this.elements=t}}function Ld(r,t){const e=Ud(t);for(const n of r.elements)e.some(s=>ie(s,n))||e.push(n);return{arrayValue:{values:e}}}class _n extends Gi{constructor(t){super(),this.elements=t}}function Bd(r,t){let e=Ud(t);for(const n of r.elements)e=e.filter(s=>!ie(s,n));return{arrayValue:{values:e}}}class sr extends Gi{constructor(t,e){super(),this.serializer=t,this.Ae=e}}function pl(r){return lt(r.integerValue||r.doubleValue)}function Ud(r){return ys(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(t,e){this.field=t,this.transform=e}}function ny(r,t){return r.field.isEqual(t.field)&&function(n,s){return n instanceof pn&&s instanceof pn||n instanceof _n&&s instanceof _n?Kn(n.elements,s.elements,ie):n instanceof sr&&s instanceof sr?ie(n.Ae,s.Ae):n instanceof rr&&s instanceof rr}(r.transform,t.transform)}class ry{constructor(t,e){this.version=t,this.transformResults=e}}class ht{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new ht}static exists(t){return new ht(void 0,t)}static updateTime(t){return new ht(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function di(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class Ki{}function qd(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new _r(r.key,ht.none()):new pr(r.key,r.data,ht.none());{const e=r.data,n=Rt.empty();let s=new rt(ut.comparator);for(let i of t.fields)if(!s.has(i)){let o=e.field(i);o===null&&i.length>1&&(i=i.popLast(),o=e.field(i)),o===null?n.delete(i):n.set(i,o),s=s.add(i)}return new me(r.key,n,new Bt(s.toArray()),ht.none())}}function sy(r,t,e){r instanceof pr?function(s,i,o){const c=s.value.clone(),u=yl(s.fieldTransforms,i,o.transformResults);c.setAll(u),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(r,t,e):r instanceof me?function(s,i,o){if(!di(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=yl(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(jd(s)),u.setAll(c),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(r,t,e):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,e)}function is(r,t,e,n){return r instanceof pr?function(i,o,c,u){if(!di(i.precondition,o))return c;const h=i.value.clone(),f=Il(i.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(r,t,e,n):r instanceof me?function(i,o,c,u){if(!di(i.precondition,o))return c;const h=Il(i.fieldTransforms,u,o),f=o.data;return f.setAll(jd(i)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(r,t,e,n):function(i,o,c){return di(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(r,t,e)}function iy(r,t){let e=null;for(const n of r.fieldTransforms){const s=t.data.field(n.field),i=Fd(n.transform,s||null);i!=null&&(e===null&&(e=Rt.empty()),e.set(n.field,i))}return e||null}function _l(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Kn(n,s,(i,o)=>ny(i,o))}(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class pr extends Ki{constructor(t,e,n,s=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class me extends Ki{constructor(t,e,n,s,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function jd(r){const t=new Map;return r.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const n=r.data.field(e);t.set(e,n)}}),t}function yl(r,t,e){const n=new Map;L(r.length===e.length,32656,{Ve:e.length,de:r.length});for(let s=0;s<e.length;s++){const i=r[s],o=i.transform,c=t.data.field(i.field);n.set(i.field,ey(o,c,e[s]))}return n}function Il(r,t,e){const n=new Map;for(const s of r){const i=s.transform,o=e.data.field(s.field);n.set(s.field,ty(i,o,t))}return n}class _r extends Ki{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class za extends Ki{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(t,e,n,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&sy(i,t,n[s])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=is(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=is(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=kd();return this.mutations.forEach(s=>{const i=t.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=e.has(s.key)?null:c;const u=qd(o,c);u!==null&&n.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(U.min())}),n}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),$())}isEqual(t){return this.batchId===t.batchId&&Kn(this.mutations,t.mutations,(e,n)=>_l(e,n))&&Kn(this.baseMutations,t.baseMutations,(e,n)=>_l(e,n))}}class Ga{constructor(t,e,n,s){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=s}static from(t,e,n){L(t.mutations.length===n.length,58842,{me:t.mutations.length,fe:n.length});let s=function(){return Y_}();const i=t.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,n[o].version);return new Ga(t,e,n,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(t,e,n){this.alias=t,this.aggregateType=e,this.fieldPath=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _t,H;function $d(r){switch(r){case R.OK:return F(64938);case R.CANCELLED:case R.UNKNOWN:case R.DEADLINE_EXCEEDED:case R.RESOURCE_EXHAUSTED:case R.INTERNAL:case R.UNAVAILABLE:case R.UNAUTHENTICATED:return!1;case R.INVALID_ARGUMENT:case R.NOT_FOUND:case R.ALREADY_EXISTS:case R.PERMISSION_DENIED:case R.FAILED_PRECONDITION:case R.ABORTED:case R.OUT_OF_RANGE:case R.UNIMPLEMENTED:case R.DATA_LOSS:return!0;default:return F(15467,{code:r})}}function Gd(r){if(r===void 0)return gt("GRPC error has no .code"),R.UNKNOWN;switch(r){case _t.OK:return R.OK;case _t.CANCELLED:return R.CANCELLED;case _t.UNKNOWN:return R.UNKNOWN;case _t.DEADLINE_EXCEEDED:return R.DEADLINE_EXCEEDED;case _t.RESOURCE_EXHAUSTED:return R.RESOURCE_EXHAUSTED;case _t.INTERNAL:return R.INTERNAL;case _t.UNAVAILABLE:return R.UNAVAILABLE;case _t.UNAUTHENTICATED:return R.UNAUTHENTICATED;case _t.INVALID_ARGUMENT:return R.INVALID_ARGUMENT;case _t.NOT_FOUND:return R.NOT_FOUND;case _t.ALREADY_EXISTS:return R.ALREADY_EXISTS;case _t.PERMISSION_DENIED:return R.PERMISSION_DENIED;case _t.FAILED_PRECONDITION:return R.FAILED_PRECONDITION;case _t.ABORTED:return R.ABORTED;case _t.OUT_OF_RANGE:return R.OUT_OF_RANGE;case _t.UNIMPLEMENTED:return R.UNIMPLEMENTED;case _t.DATA_LOSS:return R.DATA_LOSS;default:return F(39323,{code:r})}}(H=_t||(_t={}))[H.OK=0]="OK",H[H.CANCELLED=1]="CANCELLED",H[H.UNKNOWN=2]="UNKNOWN",H[H.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",H[H.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",H[H.NOT_FOUND=5]="NOT_FOUND",H[H.ALREADY_EXISTS=6]="ALREADY_EXISTS",H[H.PERMISSION_DENIED=7]="PERMISSION_DENIED",H[H.UNAUTHENTICATED=16]="UNAUTHENTICATED",H[H.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",H[H.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",H[H.ABORTED=10]="ABORTED",H[H.OUT_OF_RANGE=11]="OUT_OF_RANGE",H[H.UNIMPLEMENTED=12]="UNIMPLEMENTED",H[H.INTERNAL=13]="INTERNAL",H[H.UNAVAILABLE=14]="UNAVAILABLE",H[H.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let os=null;function ay(r){if(os)throw new Error("a TestingHooksSpi instance is already set");os=r}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kd(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cy=new xe([4294967295,4294967295],0);function El(r){const t=Kd().encode(r),e=new Nh;return e.update(t),new Uint8Array(e.digest())}function Tl(r){const t=new DataView(r.buffer),e=t.getUint32(0,!0),n=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new xe([e,n],0),new xe([s,i],0)]}class Qa{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new Jr(`Invalid padding: ${e}`);if(n<0)throw new Jr(`Invalid hash count: ${n}`);if(t.length>0&&this.hashCount===0)throw new Jr(`Invalid hash count: ${n}`);if(t.length===0&&e!==0)throw new Jr(`Invalid padding when bitmap length is 0: ${e}`);this.ge=8*t.length-e,this.pe=xe.fromNumber(this.ge)}ye(t,e,n){let s=t.add(e.multiply(xe.fromNumber(n)));return s.compare(cy)===1&&(s=new xe([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const e=El(t),[n,s]=Tl(e);for(let i=0;i<this.hashCount;i++){const o=this.ye(n,s,i);if(!this.we(o))return!1}return!0}static create(t,e,n){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),o=new Qa(i,s,e);return n.forEach(c=>o.insert(c)),o}insert(t){if(this.ge===0)return;const e=El(t),[n,s]=Tl(e);for(let i=0;i<this.hashCount;i++){const o=this.ye(n,s,i);this.Se(o)}}Se(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class Jr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(t,e,n,s,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const s=new Map;return s.set(t,Cs.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new Vs(U.min(),s,new ot(z),Ut(),$())}}class Cs{constructor(t,e,n,s,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new Cs(n,e,$(),$(),$())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(t,e,n,s){this.be=t,this.removedTargetIds=e,this.key=n,this.De=s}}class Qd{constructor(t,e){this.targetId=t,this.Ce=e}}class Wd{constructor(t,e,n=ft.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=s}}class wl{constructor(){this.ve=0,this.Fe=Al(),this.Me=ft.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=$(),e=$(),n=$();return this.Fe.forEach((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:n=n.add(s);break;default:F(38017,{changeType:i})}}),new Cs(this.Me,this.xe,t,e,n)}qe(){this.Oe=!1,this.Fe=Al()}Ke(t,e){this.Oe=!0,this.Fe=this.Fe.insert(t,e)}Ue(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}$e(){this.ve+=1}We(){this.ve-=1,L(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class uy{constructor(t){this.Ge=t,this.ze=new Map,this.je=Ut(),this.Je=ti(),this.He=ti(),this.Ze=new ot(z)}Xe(t){for(const e of t.be)t.De&&t.De.isFoundDocument()?this.Ye(e,t.De):this.et(e,t.key,t.De);for(const e of t.removedTargetIds)this.et(e,t.key,t.De)}tt(t){this.forEachTarget(t,e=>{const n=this.nt(e);switch(t.state){case 0:this.rt(e)&&n.Le(t.resumeToken);break;case 1:n.We(),n.Ne||n.qe(),n.Le(t.resumeToken);break;case 2:n.We(),n.Ne||this.removeTarget(e);break;case 3:this.rt(e)&&(n.Qe(),n.Le(t.resumeToken));break;case 4:this.rt(e)&&(this.it(e),n.Le(t.resumeToken));break;default:F(56790,{state:t.state})}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ze.forEach((n,s)=>{this.rt(s)&&e(s)})}st(t){const e=t.targetId,n=t.Ce.count,s=this.ot(e);if(s){const i=s.target;if(Ai(i))if(n===0){const o=new k(i.path);this.et(e,o,ct.newNoDocument(o,U.min()))}else L(n===1,20013,{expectedCount:n});else{const o=this._t(e);if(o!==n){const c=this.ut(t),u=c?this.ct(c,t,o):1;if(u!==0){this.it(e);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(e,h)}os==null||os.o(function(f,m,p,v,C){var B,j,q;const N={localCacheCount:f,existenceFilterCount:m.count,databaseId:p.database,projectId:p.projectId},x=m.unchangedNames;return x&&(N.bloomFilter={applied:C===0,hashCount:(x==null?void 0:x.hashCount)??0,bitmapLength:((j=(B=x==null?void 0:x.bits)==null?void 0:B.bitmap)==null?void 0:j.length)??0,padding:((q=x==null?void 0:x.bits)==null?void 0:q.padding)??0,mightContain:Z=>(v==null?void 0:v.mightContain(Z))??!1}),N}(o,t.Ce,this.Ge.ht(),c,u))}}}}ut(t){const e=t.Ce.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:s=0},hashCount:i=0}=e;let o,c;try{o=le(n).toUint8Array()}catch(u){if(u instanceof ld)return zt("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new Qa(o,s,i)}catch(u){return zt(u instanceof Jr?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.ge===0?null:c}ct(t,e,n){return e.Ce.count===n-this.Pt(t,e.targetId)?0:2}Pt(t,e){const n=this.Ge.getRemoteKeysForTarget(e);let s=0;return n.forEach(i=>{const o=this.Ge.ht(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;t.mightContain(c)||(this.et(e,i,null),s++)}),s}Tt(t){const e=new Map;this.ze.forEach((i,o)=>{const c=this.ot(o);if(c){if(i.current&&Ai(c.target)){const u=new k(c.target.path);this.Et(u).has(o)||this.It(o,u)||this.et(o,u,ct.newNoDocument(u,t))}i.Be&&(e.set(o,i.ke()),i.qe())}});let n=$();this.He.forEach((i,o)=>{let c=!0;o.forEachWhile(u=>{const h=this.ot(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(n=n.add(i))}),this.je.forEach((i,o)=>o.setReadTime(t));const s=new Vs(t,e,this.Ze,this.je,n);return this.je=Ut(),this.Je=ti(),this.He=ti(),this.Ze=new ot(z),s}Ye(t,e){if(!this.rt(t))return;const n=this.It(t,e.key)?2:0;this.nt(t).Ke(e.key,n),this.je=this.je.insert(e.key,e),this.Je=this.Je.insert(e.key,this.Et(e.key).add(t)),this.He=this.He.insert(e.key,this.Rt(e.key).add(t))}et(t,e,n){if(!this.rt(t))return;const s=this.nt(t);this.It(t,e)?s.Ke(e,1):s.Ue(e),this.He=this.He.insert(e,this.Rt(e).delete(t)),this.He=this.He.insert(e,this.Rt(e).add(t)),n&&(this.je=this.je.insert(e,n))}removeTarget(t){this.ze.delete(t)}_t(t){const e=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}$e(t){this.nt(t).$e()}nt(t){let e=this.ze.get(t);return e||(e=new wl,this.ze.set(t,e)),e}Rt(t){let e=this.He.get(t);return e||(e=new rt(z),this.He=this.He.insert(t,e)),e}Et(t){let e=this.Je.get(t);return e||(e=new rt(z),this.Je=this.Je.insert(t,e)),e}rt(t){const e=this.ot(t)!==null;return e||D("WatchChangeAggregator","Detected inactive target",t),e}ot(t){const e=this.ze.get(t);return e&&e.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new wl),this.Ge.getRemoteKeysForTarget(t).forEach(e=>{this.et(t,e,null)})}It(t,e){return this.Ge.getRemoteKeysForTarget(t).has(e)}}function ti(){return new ot(k.comparator)}function Al(){return new ot(k.comparator)}const ly=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),hy=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),dy=(()=>({and:"AND",or:"OR"}))();class fy{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function da(r,t){return r.useProto3Json||As(t)?t:{value:t}}function ir(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Hd(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function my(r,t){return ir(r,t.toTimestamp())}function pt(r){return L(!!r,49232),U.fromTimestamp(function(e){const n=ue(e);return new tt(n.seconds,n.nanos)}(r))}function Wa(r,t){return fa(r,t).canonicalString()}function fa(r,t){const e=function(s){return new K(["projects",s.projectId,"databases",s.database])}(r).child("documents");return t===void 0?e:e.child(t)}function Jd(r){const t=K.fromString(r);return L(of(t),10190,{key:t.toString()}),t}function Es(r,t){return Wa(r.databaseId,t.path)}function se(r,t){const e=Jd(t);if(e.get(1)!==r.databaseId.projectId)throw new V(R.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+r.databaseId.projectId);if(e.get(3)!==r.databaseId.database)throw new V(R.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+r.databaseId.database);return new k(Zd(e))}function Yd(r,t){return Wa(r.databaseId,t)}function Xd(r){const t=Jd(r);return t.length===4?K.emptyPath():Zd(t)}function ma(r){return new K(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function Zd(r){return L(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function vl(r,t,e){return{name:Es(r,t),fields:e.value.mapValue.fields}}function Qi(r,t,e){const n=se(r,t.name),s=pt(t.updateTime),i=t.createTime?pt(t.createTime):U.min(),o=new Rt({mapValue:{fields:t.fields}}),c=ct.newFoundDocument(n,s,i,o);return e&&c.setHasCommittedMutations(),e?c.setHasCommittedMutations():c}function gy(r,t){return"found"in t?function(n,s){L(!!s.found,43571),s.found.name,s.found.updateTime;const i=se(n,s.found.name),o=pt(s.found.updateTime),c=s.found.createTime?pt(s.found.createTime):U.min(),u=new Rt({mapValue:{fields:s.found.fields}});return ct.newFoundDocument(i,o,c,u)}(r,t):"missing"in t?function(n,s){L(!!s.missing,3894),L(!!s.readTime,22933);const i=se(n,s.missing),o=pt(s.readTime);return ct.newNoDocument(i,o)}(r,t):F(7234,{result:t})}function py(r,t){let e;if("targetChange"in t){t.targetChange;const n=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:F(39313,{state:h})}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(L(f===void 0||typeof f=="string",58123),ft.fromBase64String(f||"")):(L(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),ft.fromUint8Array(f||new Uint8Array))}(r,t.targetChange.resumeToken),o=t.targetChange.cause,c=o&&function(h){const f=h.code===void 0?R.UNKNOWN:Gd(h.code);return new V(f,h.message||"")}(o);e=new Wd(n,s,i,c||null)}else if("documentChange"in t){t.documentChange;const n=t.documentChange;n.document,n.document.name,n.document.updateTime;const s=se(r,n.document.name),i=pt(n.document.updateTime),o=n.document.createTime?pt(n.document.createTime):U.min(),c=new Rt({mapValue:{fields:n.document.fields}}),u=ct.newFoundDocument(s,i,o,c),h=n.targetIds||[],f=n.removedTargetIds||[];e=new fi(h,f,u.key,u)}else if("documentDelete"in t){t.documentDelete;const n=t.documentDelete;n.document;const s=se(r,n.document),i=n.readTime?pt(n.readTime):U.min(),o=ct.newNoDocument(s,i),c=n.removedTargetIds||[];e=new fi([],c,o.key,o)}else if("documentRemove"in t){t.documentRemove;const n=t.documentRemove;n.document;const s=se(r,n.document),i=n.removedTargetIds||[];e=new fi([],i,s,null)}else{if(!("filter"in t))return F(11601,{Vt:t});{t.filter;const n=t.filter;n.targetId;const{count:s=0,unchangedNames:i}=n,o=new oy(s,i),c=n.targetId;e=new Qd(c,o)}}return e}function Ts(r,t){let e;if(t instanceof pr)e={update:vl(r,t.key,t.value)};else if(t instanceof _r)e={delete:Es(r,t.key)};else if(t instanceof me)e={update:vl(r,t.key,t.data),updateMask:wy(t.fieldMask)};else{if(!(t instanceof za))return F(16599,{dt:t.type});e={verify:Es(r,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(n=>function(i,o){const c=o.transform;if(c instanceof rr)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof pn)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof _n)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof sr)return{fieldPath:o.field.canonicalString(),increment:c.Ae};throw F(20930,{transform:o.transform})}(0,n))),t.precondition.isNone||(e.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:my(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:F(27497)}(r,t.precondition)),e}function ga(r,t){const e=t.currentDocument?function(i){return i.updateTime!==void 0?ht.updateTime(pt(i.updateTime)):i.exists!==void 0?ht.exists(i.exists):ht.none()}(t.currentDocument):ht.none(),n=t.updateTransforms?t.updateTransforms.map(s=>function(o,c){let u=null;if("setToServerValue"in c)L(c.setToServerValue==="REQUEST_TIME",16630,{proto:c}),u=new rr;else if("appendMissingElements"in c){const f=c.appendMissingElements.values||[];u=new pn(f)}else if("removeAllFromArray"in c){const f=c.removeAllFromArray.values||[];u=new _n(f)}else"increment"in c?u=new sr(o,c.increment):F(16584,{proto:c});const h=ut.fromServerFormat(c.fieldPath);return new Ps(h,u)}(r,s)):[];if(t.update){t.update.name;const s=se(r,t.update.name),i=new Rt({mapValue:{fields:t.update.fields}});if(t.updateMask){const o=function(u){const h=u.fieldPaths||[];return new Bt(h.map(f=>ut.fromServerFormat(f)))}(t.updateMask);return new me(s,i,o,e,n)}return new pr(s,i,e,n)}if(t.delete){const s=se(r,t.delete);return new _r(s,e)}if(t.verify){const s=se(r,t.verify);return new za(s,e)}return F(1463,{proto:t})}function _y(r,t){return r&&r.length>0?(L(t!==void 0,14353),r.map(e=>function(s,i){let o=s.updateTime?pt(s.updateTime):pt(i);return o.isEqual(U.min())&&(o=pt(i)),new ry(o,s.transformResults||[])}(e,t))):[]}function tf(r,t){return{documents:[Yd(r,t.path)]}}function Wi(r,t){const e={structuredQuery:{}},n=t.path;let s;t.collectionGroup!==null?(s=n,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=n.popLast(),e.structuredQuery.from=[{collectionId:n.lastSegment()}]),e.parent=Yd(r,s);const i=function(h){if(h.length!==0)return sf(et.create(h,"and"))}(t.filters);i&&(e.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(f=>function(p){return{field:Re(p.field),direction:Iy(p.dir)}}(f))}(t.orderBy);o&&(e.structuredQuery.orderBy=o);const c=da(r,t.limit);return c!==null&&(e.structuredQuery.limit=c),t.startAt&&(e.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(t.endAt)),{ft:e,parent:s}}function ef(r,t,e,n){const{ft:s,parent:i}=Wi(r,t),o={},c=[];let u=0;return e.forEach(h=>{const f=n?h.alias:"aggregate_"+u++;o[f]=h.alias,h.aggregateType==="count"?c.push({alias:f,count:{}}):h.aggregateType==="avg"?c.push({alias:f,avg:{field:Re(h.fieldPath)}}):h.aggregateType==="sum"&&c.push({alias:f,sum:{field:Re(h.fieldPath)}})}),{request:{structuredAggregationQuery:{aggregations:c,structuredQuery:s.structuredQuery},parent:s.parent},gt:o,parent:i}}function nf(r){let t=Xd(r.parent);const e=r.structuredQuery,n=e.from?e.from.length:0;let s=null;if(n>0){L(n===1,65062);const f=e.from[0];f.allDescendants?s=f.collectionId:t=t.child(f.collectionId)}let i=[];e.where&&(i=function(m){const p=rf(m);return p instanceof et&&Ba(p)?p.getFilters():[p]}(e.where));let o=[];e.orderBy&&(o=function(m){return m.map(p=>function(C){return new Is(Un(C.field),function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(p))}(e.orderBy));let c=null;e.limit&&(c=function(m){let p;return p=typeof m=="object"?m.value:m,As(p)?null:p}(e.limit));let u=null;e.startAt&&(u=function(m){const p=!!m.before,v=m.values||[];return new Be(v,p)}(e.startAt));let h=null;return e.endAt&&(h=function(m){const p=!m.before,v=m.values||[];return new Be(v,p)}(e.endAt)),Rd(t,s,o,i,c,"F",u,h)}function yy(r,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return F(28987,{purpose:s})}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function rf(r){return r.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Un(e.unaryFilter.field);return W.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Un(e.unaryFilter.field);return W.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Un(e.unaryFilter.field);return W.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Un(e.unaryFilter.field);return W.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return F(61313);default:return F(60726)}}(r):r.fieldFilter!==void 0?function(e){return W.create(Un(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return F(58110);default:return F(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(e){return et.create(e.compositeFilter.filters.map(n=>rf(n)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return F(1026)}}(e.compositeFilter.op))}(r):F(30097,{filter:r})}function Iy(r){return ly[r]}function Ey(r){return hy[r]}function Ty(r){return dy[r]}function Re(r){return{fieldPath:r.canonicalString()}}function Un(r){return ut.fromServerFormat(r.fieldPath)}function sf(r){return r instanceof W?function(e){if(e.op==="=="){if(cl(e.value))return{unaryFilter:{field:Re(e.field),op:"IS_NAN"}};if(al(e.value))return{unaryFilter:{field:Re(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(cl(e.value))return{unaryFilter:{field:Re(e.field),op:"IS_NOT_NAN"}};if(al(e.value))return{unaryFilter:{field:Re(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Re(e.field),op:Ey(e.op),value:e.value}}}(r):r instanceof et?function(e){const n=e.getFilters().map(s=>sf(s));return n.length===1?n[0]:{compositeFilter:{op:Ty(e.op),filters:n}}}(r):F(54877,{filter:r})}function wy(r){const t=[];return r.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function of(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}function af(r){return!!r&&typeof r._toProto=="function"&&r._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(t,e,n,s,i=U.min(),o=U.min(),c=ft.EMPTY_BYTE_STRING,u=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(t){return new oe(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new oe(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new oe(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new oe(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(t){this.yt=t}}function Ay(r,t){let e;if(t.document)e=Qi(r.yt,t.document,!!t.hasCommittedMutations);else if(t.noDocument){const n=k.fromSegments(t.noDocument.path),s=In(t.noDocument.readTime);e=ct.newNoDocument(n,s),t.hasCommittedMutations&&e.setHasCommittedMutations()}else{if(!t.unknownDocument)return F(56709);{const n=k.fromSegments(t.unknownDocument.path),s=In(t.unknownDocument.version);e=ct.newUnknownDocument(n,s)}}return t.readTime&&e.setReadTime(function(s){const i=new tt(s[0],s[1]);return U.fromTimestamp(i)}(t.readTime)),e}function bl(r,t){const e=t.key,n={prefixPath:e.getCollectionPath().popLast().toArray(),collectionGroup:e.collectionGroup,documentId:e.path.lastSegment(),readTime:Ri(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument())n.document=function(i,o){return{name:Es(i,o.key),fields:o.data.value.mapValue.fields,updateTime:ir(i,o.version.toTimestamp()),createTime:ir(i,o.createTime.toTimestamp())}}(r.yt,t);else if(t.isNoDocument())n.noDocument={path:e.path.toArray(),readTime:yn(t.version)};else{if(!t.isUnknownDocument())return F(57904,{document:t});n.unknownDocument={path:e.path.toArray(),version:yn(t.version)}}return n}function Ri(r){const t=r.toTimestamp();return[t.seconds,t.nanoseconds]}function yn(r){const t=r.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function In(r){const t=new tt(r.seconds,r.nanoseconds);return U.fromTimestamp(t)}function an(r,t){const e=(t.baseMutations||[]).map(i=>ga(r.yt,i));for(let i=0;i<t.mutations.length-1;++i){const o=t.mutations[i];if(i+1<t.mutations.length&&t.mutations[i+1].transform!==void 0){const c=t.mutations[i+1];o.updateTransforms=c.transform.fieldTransforms,t.mutations.splice(i+1,1),++i}}const n=t.mutations.map(i=>ga(r.yt,i)),s=tt.fromMillis(t.localWriteTimeMs);return new $a(t.batchId,s,e,n)}function Yr(r){const t=In(r.readTime),e=r.lastLimboFreeSnapshotVersion!==void 0?In(r.lastLimboFreeSnapshotVersion):U.min();let n;return n=function(i){return i.documents!==void 0}(r.query)?function(i){const o=i.documents.length;return L(o===1,1966,{count:o}),Nt(gr(Xd(i.documents[0])))}(r.query):function(i){return Nt(nf(i))}(r.query),new oe(n,r.targetId,"TargetPurposeListen",r.lastListenSequenceNumber,t,e,ft.fromBase64String(r.resumeToken))}function uf(r,t){const e=yn(t.snapshotVersion),n=yn(t.lastLimboFreeSnapshotVersion);let s;s=Ai(t.target)?tf(r.yt,t.target):Wi(r.yt,t.target).ft;const i=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:gn(t.target),readTime:e,resumeToken:i,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:n,query:s}}function Hi(r){const t=nf({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?bi(t,t.limit,"L"):t}function Bo(r,t){return new Ka(t.largestBatchId,ga(r.yt,t.overlayMutation))}function Rl(r,t){const e=t.path.lastSegment();return[r,xt(t.path.popLast()),e]}function Sl(r,t,e,n){return{indexId:r,uid:t,sequenceNumber:e,readTime:yn(n.readTime),documentKey:xt(n.documentKey.path),largestBatchId:n.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vy{getBundleMetadata(t,e){return Pl(t).get(e).next(n=>{if(n)return function(i){return{id:i.bundleId,createTime:In(i.createTime),version:i.version}}(n)})}saveBundleMetadata(t,e){return Pl(t).put(function(s){return{bundleId:s.id,createTime:yn(pt(s.createTime)),version:s.version}}(e))}getNamedQuery(t,e){return Vl(t).get(e).next(n=>{if(n)return function(i){return{name:i.name,query:Hi(i.bundledQuery),readTime:In(i.readTime)}}(n)})}saveNamedQuery(t,e){return Vl(t).put(function(s){return{name:s.name,readTime:yn(pt(s.readTime)),bundledQuery:s.bundledQuery}}(e))}}function Pl(r){return wt(r,Bi)}function Vl(r){return wt(r,Ui)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(t,e){this.serializer=t,this.userId=e}static wt(t,e){const n=e.uid||"";return new Ji(t,n)}getOverlay(t,e){return jr(t).get(Rl(this.userId,e)).next(n=>n?Bo(this.serializer,n):null)}getOverlays(t,e){const n=ne();return A.forEach(e,s=>this.getOverlay(t,s).next(i=>{i!==null&&n.set(s,i)})).next(()=>n)}saveOverlays(t,e,n){const s=[];return n.forEach((i,o)=>{const c=new Ka(e,o);s.push(this.St(t,c))}),A.waitFor(s)}removeOverlaysForBatchId(t,e,n){const s=new Set;e.forEach(o=>s.add(xt(o.getCollectionPath())));const i=[];return s.forEach(o=>{const c=IDBKeyRange.bound([this.userId,o,n],[this.userId,o,n+1],!1,!0);i.push(jr(t).X(sa,c))}),A.waitFor(i)}getOverlaysForCollection(t,e,n){const s=ne(),i=xt(e),o=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return jr(t).J(sa,o).next(c=>{for(const u of c){const h=Bo(this.serializer,u);s.set(h.getKey(),h)}return s})}getOverlaysForCollectionGroup(t,e,n,s){const i=ne();let o;const c=IDBKeyRange.bound([this.userId,e,n],[this.userId,e,Number.POSITIVE_INFINITY],!0);return jr(t).ee({index:rd,range:c},(u,h,f)=>{const m=Bo(this.serializer,h);i.size()<s||m.largestBatchId===o?(i.set(m.getKey(),m),o=m.largestBatchId):f.done()}).next(()=>i)}St(t,e){return jr(t).put(function(s,i,o){const[c,u,h]=Rl(i,o.mutation.key);return{userId:i,collectionPath:u,documentId:h,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:Ts(s.yt,o.mutation)}}(this.serializer,this.userId,e))}}function jr(r){return wt(r,qi)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by{bt(t){return wt(t,Ma)}getSessionToken(t){return this.bt(t).get("sessionToken").next(e=>{const n=e==null?void 0:e.value;return n?ft.fromUint8Array(n):ft.EMPTY_BYTE_STRING})}setSessionToken(t,e){return this.bt(t).put({name:"sessionToken",value:e.toUint8Array()})}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(){}Dt(t,e){this.Ct(t,e),e.vt()}Ct(t,e){if("nullValue"in t)this.Ft(e,5);else if("booleanValue"in t)this.Ft(e,10),e.Mt(t.booleanValue?1:0);else if("integerValue"in t)this.Ft(e,15),e.Mt(lt(t.integerValue));else if("doubleValue"in t){const n=lt(t.doubleValue);isNaN(n)?this.Ft(e,13):(this.Ft(e,15),hs(n)?e.Mt(0):e.Mt(n))}else if("timestampValue"in t){let n=t.timestampValue;this.Ft(e,20),typeof n=="string"&&(n=ue(n)),e.xt(`${n.seconds||""}`),e.Mt(n.nanos||0)}else if("stringValue"in t)this.Ot(t.stringValue,e),this.Nt(e);else if("bytesValue"in t)this.Ft(e,30),e.Bt(le(t.bytesValue)),this.Nt(e);else if("referenceValue"in t)this.Lt(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.Ft(e,45),e.Mt(n.latitude||0),e.Mt(n.longitude||0)}else"mapValue"in t?pd(t)?this.Ft(e,Number.MAX_SAFE_INTEGER):$i(t)?this.kt(t.mapValue,e):(this.qt(t.mapValue,e),this.Nt(e)):"arrayValue"in t?(this.Kt(t.arrayValue,e),this.Nt(e)):F(19022,{Ut:t})}Ot(t,e){this.Ft(e,25),this.$t(t,e)}$t(t,e){e.xt(t)}qt(t,e){const n=t.fields||{};this.Ft(e,55);for(const s of Object.keys(n))this.Ot(s,e),this.Ct(n[s],e)}kt(t,e){var o,c;const n=t.fields||{};this.Ft(e,53);const s=tr,i=((c=(o=n[s].arrayValue)==null?void 0:o.values)==null?void 0:c.length)||0;this.Ft(e,15),e.Mt(lt(i)),this.Ot(s,e),this.Ct(n[s],e)}Kt(t,e){const n=t.values||[];this.Ft(e,50);for(const s of n)this.Ct(s,e)}Lt(t,e){this.Ft(e,37),k.fromName(t).path.forEach(n=>{this.Ft(e,60),this.$t(n,e)})}Ft(t,e){t.Mt(e)}Nt(t){t.Mt(2)}}cn.Wt=new cn;/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law | agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES | CONDITIONS OF ANY KIND, either express | implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kn=255;function Ry(r){if(r===0)return 8;let t=0;return r>>4||(t+=4,r<<=4),r>>6||(t+=2,r<<=2),r>>7||(t+=1),t}function Cl(r){const t=64-function(n){let s=0;for(let i=0;i<8;++i){const o=Ry(255&n[i]);if(s+=o,o!==8)break}return s}(r);return Math.ceil(t/8)}class Sy{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Qt(t){const e=t[Symbol.iterator]();let n=e.next();for(;!n.done;)this.Gt(n.value),n=e.next();this.zt()}jt(t){const e=t[Symbol.iterator]();let n=e.next();for(;!n.done;)this.Jt(n.value),n=e.next();this.Ht()}Zt(t){for(const e of t){const n=e.charCodeAt(0);if(n<128)this.Gt(n);else if(n<2048)this.Gt(960|n>>>6),this.Gt(128|63&n);else if(e<"\uD800"||"\uDBFF"<e)this.Gt(480|n>>>12),this.Gt(128|63&n>>>6),this.Gt(128|63&n);else{const s=e.codePointAt(0);this.Gt(240|s>>>18),this.Gt(128|63&s>>>12),this.Gt(128|63&s>>>6),this.Gt(128|63&s)}}this.zt()}Xt(t){for(const e of t){const n=e.charCodeAt(0);if(n<128)this.Jt(n);else if(n<2048)this.Jt(960|n>>>6),this.Jt(128|63&n);else if(e<"\uD800"||"\uDBFF"<e)this.Jt(480|n>>>12),this.Jt(128|63&n>>>6),this.Jt(128|63&n);else{const s=e.codePointAt(0);this.Jt(240|s>>>18),this.Jt(128|63&s>>>12),this.Jt(128|63&s>>>6),this.Jt(128|63&s)}}this.Ht()}Yt(t){const e=this.en(t),n=Cl(e);this.tn(1+n),this.buffer[this.position++]=255&n;for(let s=e.length-n;s<e.length;++s)this.buffer[this.position++]=255&e[s]}nn(t){const e=this.en(t),n=Cl(e);this.tn(1+n),this.buffer[this.position++]=~(255&n);for(let s=e.length-n;s<e.length;++s)this.buffer[this.position++]=~(255&e[s])}rn(){this.sn(kn),this.sn(255)}_n(){this.an(kn),this.an(255)}reset(){this.position=0}seed(t){this.tn(t.length),this.buffer.set(t,this.position),this.position+=t.length}un(){return this.buffer.slice(0,this.position)}en(t){const e=function(i){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,i,!1),new Uint8Array(o.buffer)}(t),n=!!(128&e[0]);e[0]^=n?255:128;for(let s=1;s<e.length;++s)e[s]^=n?255:0;return e}Gt(t){const e=255&t;e===0?(this.sn(0),this.sn(255)):e===kn?(this.sn(kn),this.sn(0)):this.sn(e)}Jt(t){const e=255&t;e===0?(this.an(0),this.an(255)):e===kn?(this.an(kn),this.an(0)):this.an(t)}zt(){this.sn(0),this.sn(1)}Ht(){this.an(0),this.an(1)}sn(t){this.tn(1),this.buffer[this.position++]=t}an(t){this.tn(1),this.buffer[this.position++]=~t}tn(t){const e=t+this.position;if(e<=this.buffer.length)return;let n=2*this.buffer.length;n<e&&(n=e);const s=new Uint8Array(n);s.set(this.buffer),this.buffer=s}}class Py{constructor(t){this.cn=t}Bt(t){this.cn.Qt(t)}xt(t){this.cn.Zt(t)}Mt(t){this.cn.Yt(t)}vt(){this.cn.rn()}}class Vy{constructor(t){this.cn=t}Bt(t){this.cn.jt(t)}xt(t){this.cn.Xt(t)}Mt(t){this.cn.nn(t)}vt(){this.cn._n()}}class zr{constructor(){this.cn=new Sy,this.ascending=new Py(this.cn),this.descending=new Vy(this.cn)}seed(t){this.cn.seed(t)}ln(t){return t===0?this.ascending:this.descending}un(){return this.cn.un()}reset(){this.cn.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(t,e,n,s){this.hn=t,this.Pn=e,this.Tn=n,this.En=s}In(){const t=this.En.length,e=t===0||this.En[t-1]===255?t+1:t,n=new Uint8Array(e);return n.set(this.En,0),e!==t?n.set([0],this.En.length):++n[n.length-1],new un(this.hn,this.Pn,this.Tn,n)}Rn(t,e,n){return{indexId:this.hn,uid:t,arrayValue:mi(this.Tn),directionalValue:mi(this.En),orderedDocumentKey:mi(e),documentKey:n.path.toArray()}}An(t,e,n){const s=this.Rn(t,e,n);return[s.indexId,s.uid,s.arrayValue,s.directionalValue,s.orderedDocumentKey,s.documentKey]}}function Ae(r,t){let e=r.hn-t.hn;return e!==0?e:(e=Dl(r.Tn,t.Tn),e!==0?e:(e=Dl(r.En,t.En),e!==0?e:k.comparator(r.Pn,t.Pn)))}function Dl(r,t){for(let e=0;e<r.length&&e<t.length;++e){const n=r[e]-t[e];if(n!==0)return n}return r.length-t.length}function mi(r){return vh()?function(e){let n="";for(let s=0;s<e.length;s++)n+=String.fromCharCode(e[s]);return n}(r):r}function xl(r){return typeof r!="string"?r:function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(r)}class Nl{constructor(t){this.Vn=new rt((e,n)=>ut.comparator(e.field,n.field)),this.collectionId=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment(),this.dn=t.orderBy,this.mn=[];for(const e of t.filters){const n=e;n.isInequality()?this.Vn=this.Vn.add(n):this.mn.push(n)}}get fn(){return this.Vn.size>1}gn(t){if(L(t.collectionGroup===this.collectionId,49279),this.fn)return!1;const e=ea(t);if(e!==void 0&&!this.pn(e))return!1;const n=rn(t);let s=new Set,i=0,o=0;for(;i<n.length&&this.pn(n[i]);++i)s=s.add(n[i].fieldPath.canonicalString());if(i===n.length)return!0;if(this.Vn.size>0){const c=this.Vn.getIterator().getNext();if(!s.has(c.field.canonicalString())){const u=n[i];if(!this.yn(c,u)||!this.wn(this.dn[o++],u))return!1}++i}for(;i<n.length;++i){const c=n[i];if(o>=this.dn.length||!this.wn(this.dn[o++],c))return!1}return!0}Sn(){if(this.fn)return null;let t=new rt(ut.comparator);const e=[];for(const n of this.mn)if(!n.field.isKeyField())if(n.op==="array-contains"||n.op==="array-contains-any")e.push(new hn(n.field,2));else{if(t.has(n.field))continue;t=t.add(n.field),e.push(new hn(n.field,0))}for(const n of this.dn)n.field.isKeyField()||t.has(n.field)||(t=t.add(n.field),e.push(new hn(n.field,n.dir==="asc"?0:1)));return new Wn(Wn.UNKNOWN_ID,this.collectionId,e,Hn.empty())}pn(t){for(const e of this.mn)if(this.yn(e,t))return!0;return!1}yn(t,e){if(t===void 0||!t.field.isEqual(e.fieldPath))return!1;const n=t.op==="array-contains"||t.op==="array-contains-any";return e.kind===2===n}wn(t,e){return!!t.field.isEqual(e.fieldPath)&&(e.kind===0&&t.dir==="asc"||e.kind===1&&t.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lf(r){var e,n;if(L(r instanceof W||r instanceof et,20012),r instanceof W){if(r instanceof bd){const s=((n=(e=r.value.arrayValue)==null?void 0:e.values)==null?void 0:n.map(i=>W.create(r.field,"==",i)))||[];return et.create(s,"or")}return r}const t=r.filters.map(s=>lf(s));return et.create(t,r.op)}function Cy(r){if(r.getFilters().length===0)return[];const t=ya(lf(r));return L(hf(t),7391),pa(t)||_a(t)?[t]:t.getFilters()}function pa(r){return r instanceof W}function _a(r){return r instanceof et&&Ba(r)}function hf(r){return pa(r)||_a(r)||function(e){if(e instanceof et&&ca(e)){for(const n of e.getFilters())if(!pa(n)&&!_a(n))return!1;return!0}return!1}(r)}function ya(r){if(L(r instanceof W||r instanceof et,34018),r instanceof W)return r;if(r.filters.length===1)return ya(r.filters[0]);const t=r.filters.map(n=>ya(n));let e=et.create(t,r.op);return e=Si(e),hf(e)?e:(L(e instanceof et,64498),L(nr(e),40251),L(e.filters.length>1,57927),e.filters.reduce((n,s)=>Ha(n,s)))}function Ha(r,t){let e;return L(r instanceof W||r instanceof et,38388),L(t instanceof W||t instanceof et,25473),e=r instanceof W?t instanceof W?function(s,i){return et.create([s,i],"and")}(r,t):kl(r,t):t instanceof W?kl(t,r):function(s,i){if(L(s.filters.length>0&&i.filters.length>0,48005),nr(s)&&nr(i))return wd(s,i.getFilters());const o=ca(s)?s:i,c=ca(s)?i:s,u=o.filters.map(h=>Ha(h,c));return et.create(u,"or")}(r,t),Si(e)}function kl(r,t){if(nr(t))return wd(t,r.getFilters());{const e=t.filters.map(n=>Ha(r,n));return et.create(e,"or")}}function Si(r){if(L(r instanceof W||r instanceof et,11850),r instanceof W)return r;const t=r.getFilters();if(t.length===1)return Si(t[0]);if(Ed(r))return r;const e=t.map(s=>Si(s)),n=[];return e.forEach(s=>{s instanceof W?n.push(s):s instanceof et&&(s.op===r.op?n.push(...s.filters):n.push(s))}),n.length===1?n[0]:et.create(n,r.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dy{constructor(){this.bn=new Ja}addToCollectionParentIndex(t,e){return this.bn.add(e),A.resolve()}getCollectionParents(t,e){return A.resolve(this.bn.getEntries(e))}addFieldIndex(t,e){return A.resolve()}deleteFieldIndex(t,e){return A.resolve()}deleteAllFieldIndexes(t){return A.resolve()}createTargetIndexes(t,e){return A.resolve()}getDocumentsMatchingTarget(t,e){return A.resolve(null)}getIndexType(t,e){return A.resolve(0)}getFieldIndexes(t,e){return A.resolve([])}getNextCollectionGroupToUpdate(t){return A.resolve(null)}getMinOffset(t,e){return A.resolve(Qt.min())}getMinOffsetFromCollectionGroup(t,e){return A.resolve(Qt.min())}updateCollectionGroup(t,e,n){return A.resolve()}updateIndexEntries(t,e){return A.resolve()}}class Ja{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e]||new rt(K.comparator),i=!s.has(n);return this.index[e]=s.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e];return s&&s.has(n)}getEntries(t){return(this.index[t]||new rt(K.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ml="IndexedDbIndexManager",ei=new Uint8Array(0);class xy{constructor(t,e){this.databaseId=e,this.Dn=new Ja,this.Cn=new fe(n=>gn(n),(n,s)=>bs(n,s)),this.uid=t.uid||""}addToCollectionParentIndex(t,e){if(!this.Dn.has(e)){const n=e.lastSegment(),s=e.popLast();t.addOnCommittedListener(()=>{this.Dn.add(e)});const i={collectionId:n,parent:xt(s)};return Ol(t).put(i)}return A.resolve()}getCollectionParents(t,e){const n=[],s=IDBKeyRange.bound([e,""],[jh(e),""],!1,!0);return Ol(t).J(s).next(i=>{for(const o of i){if(o.collectionId!==e)break;n.push(ee(o.parent))}return n})}addFieldIndex(t,e){const n=$r(t),s=function(c){return{indexId:c.indexId,collectionGroup:c.collectionGroup,fields:c.fields.map(u=>[u.fieldPath.canonicalString(),u.kind])}}(e);delete s.indexId;const i=n.add(s);if(e.indexState){const o=On(t);return i.next(c=>{o.put(Sl(c,this.uid,e.indexState.sequenceNumber,e.indexState.offset))})}return i.next()}deleteFieldIndex(t,e){const n=$r(t),s=On(t),i=Mn(t);return n.delete(e.indexId).next(()=>s.delete(IDBKeyRange.bound([e.indexId],[e.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([e.indexId],[e.indexId+1],!1,!0)))}deleteAllFieldIndexes(t){const e=$r(t),n=Mn(t),s=On(t);return e.X().next(()=>n.X()).next(()=>s.X())}createTargetIndexes(t,e){return A.forEach(this.vn(e),n=>this.getIndexType(t,n).next(s=>{if(s===0||s===1){const i=new Nl(n).Sn();if(i!=null)return this.addFieldIndex(t,i)}}))}getDocumentsMatchingTarget(t,e){const n=Mn(t);let s=!0;const i=new Map;return A.forEach(this.vn(e),o=>this.Fn(t,o).next(c=>{s&&(s=!!c),i.set(o,c)})).next(()=>{if(s){let o=$();const c=[];return A.forEach(i,(u,h)=>{D(Ml,`Using index ${function(q){return`id=${q.indexId}|cg=${q.collectionGroup}|f=${q.fields.map(Z=>`${Z.fieldPath}:${Z.kind}`).join(",")}`}(u)} to execute ${gn(e)}`);const f=function(q,Z){const Y=ea(Z);if(Y===void 0)return null;for(const X of vi(q,Y.fieldPath))switch(X.op){case"array-contains-any":return X.value.arrayValue.values||[];case"array-contains":return[X.value]}return null}(h,u),m=function(q,Z){const Y=new Map;for(const X of rn(Z))for(const E of vi(q,X.fieldPath))switch(E.op){case"==":case"in":Y.set(X.fieldPath.canonicalString(),E.value);break;case"not-in":case"!=":return Y.set(X.fieldPath.canonicalString(),E.value),Array.from(Y.values())}return null}(h,u),p=function(q,Z){const Y=[];let X=!0;for(const E of rn(Z)){const _=E.kind===0?fl(q,E.fieldPath,q.startAt):ml(q,E.fieldPath,q.startAt);Y.push(_.value),X&&(X=_.inclusive)}return new Be(Y,X)}(h,u),v=function(q,Z){const Y=[];let X=!0;for(const E of rn(Z)){const _=E.kind===0?ml(q,E.fieldPath,q.endAt):fl(q,E.fieldPath,q.endAt);Y.push(_.value),X&&(X=_.inclusive)}return new Be(Y,X)}(h,u),C=this.Mn(u,h,p),N=this.Mn(u,h,v),x=this.xn(u,h,m),B=this.On(u.indexId,f,C,p.inclusive,N,v.inclusive,x);return A.forEach(B,j=>n.Z(j,e.limit).next(q=>{q.forEach(Z=>{const Y=k.fromSegments(Z.documentKey);o.has(Y)||(o=o.add(Y),c.push(Y))})}))}).next(()=>c)}return A.resolve(null)})}vn(t){let e=this.Cn.get(t);return e||(t.filters.length===0?e=[t]:e=Cy(et.create(t.filters,"and")).map(n=>la(t.path,t.collectionGroup,t.orderBy,n.getFilters(),t.limit,t.startAt,t.endAt)),this.Cn.set(t,e),e)}On(t,e,n,s,i,o,c){const u=(e!=null?e.length:1)*Math.max(n.length,i.length),h=u/(e!=null?e.length:1),f=[];for(let m=0;m<u;++m){const p=e?this.Nn(e[m/h]):ei,v=this.Bn(t,p,n[m%h],s),C=this.Ln(t,p,i[m%h],o),N=c.map(x=>this.Bn(t,p,x,!0));f.push(...this.createRange(v,C,N))}return f}Bn(t,e,n,s){const i=new un(t,k.empty(),e,n);return s?i:i.In()}Ln(t,e,n,s){const i=new un(t,k.empty(),e,n);return s?i.In():i}Fn(t,e){const n=new Nl(e),s=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment();return this.getFieldIndexes(t,s).next(i=>{let o=null;for(const c of i)n.gn(c)&&(!o||c.fields.length>o.fields.length)&&(o=c);return o})}getIndexType(t,e){let n=2;const s=this.vn(e);return A.forEach(s,i=>this.Fn(t,i).next(o=>{o?n!==0&&o.fields.length<function(u){let h=new rt(ut.comparator),f=!1;for(const m of u.filters)for(const p of m.getFlattenedFilters())p.field.isKeyField()||(p.op==="array-contains"||p.op==="array-contains-any"?f=!0:h=h.add(p.field));for(const m of u.orderBy)m.field.isKeyField()||(h=h.add(m.field));return h.size+(f?1:0)}(i)&&(n=1):n=0})).next(()=>function(o){return o.limit!==null}(e)&&s.length>1&&n===2?1:n)}kn(t,e){const n=new zr;for(const s of rn(t)){const i=e.data.field(s.fieldPath);if(i==null)return null;const o=n.ln(s.kind);cn.Wt.Dt(i,o)}return n.un()}Nn(t){const e=new zr;return cn.Wt.Dt(t,e.ln(0)),e.un()}qn(t,e){const n=new zr;return cn.Wt.Dt(mn(this.databaseId,e),n.ln(function(i){const o=rn(i);return o.length===0?0:o[o.length-1].kind}(t))),n.un()}xn(t,e,n){if(n===null)return[];let s=[];s.push(new zr);let i=0;for(const o of rn(t)){const c=n[i++];for(const u of s)if(this.Kn(e,o.fieldPath)&&ys(c))s=this.Un(s,o,c);else{const h=u.ln(o.kind);cn.Wt.Dt(c,h)}}return this.$n(s)}Mn(t,e,n){return this.xn(t,e,n.position)}$n(t){const e=[];for(let n=0;n<t.length;++n)e[n]=t[n].un();return e}Un(t,e,n){const s=[...t],i=[];for(const o of n.arrayValue.values||[])for(const c of s){const u=new zr;u.seed(c.un()),cn.Wt.Dt(o,u.ln(e.kind)),i.push(u)}return i}Kn(t,e){return!!t.filters.find(n=>n instanceof W&&n.field.isEqual(e)&&(n.op==="in"||n.op==="not-in"))}getFieldIndexes(t,e){const n=$r(t),s=On(t);return(e?n.J(ra,IDBKeyRange.bound(e,e)):n.J()).next(i=>{const o=[];return A.forEach(i,c=>s.get([c.indexId,this.uid]).next(u=>{o.push(function(f,m){const p=m?new Hn(m.sequenceNumber,new Qt(In(m.readTime),new k(ee(m.documentKey)),m.largestBatchId)):Hn.empty(),v=f.fields.map(([C,N])=>new hn(ut.fromServerFormat(C),N));return new Wn(f.indexId,f.collectionGroup,v,p)}(c,u))})).next(()=>o)})}getNextCollectionGroupToUpdate(t){return this.getFieldIndexes(t).next(e=>e.length===0?null:(e.sort((n,s)=>{const i=n.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:z(n.collectionGroup,s.collectionGroup)}),e[0].collectionGroup))}updateCollectionGroup(t,e,n){const s=$r(t),i=On(t);return this.Wn(t).next(o=>s.J(ra,IDBKeyRange.bound(e,e)).next(c=>A.forEach(c,u=>i.put(Sl(u.indexId,this.uid,o,n)))))}updateIndexEntries(t,e){const n=new Map;return A.forEach(e,(s,i)=>{const o=n.get(s.collectionGroup);return(o?A.resolve(o):this.getFieldIndexes(t,s.collectionGroup)).next(c=>(n.set(s.collectionGroup,c),A.forEach(c,u=>this.Qn(t,s,u).next(h=>{const f=this.Gn(i,u);return h.isEqual(f)?A.resolve():this.zn(t,i,u,h,f)}))))})}jn(t,e,n,s){return Mn(t).put(s.Rn(this.uid,this.qn(n,e.key),e.key))}Jn(t,e,n,s){return Mn(t).delete(s.An(this.uid,this.qn(n,e.key),e.key))}Qn(t,e,n){const s=Mn(t);let i=new rt(Ae);return s.ee({index:nd,range:IDBKeyRange.only([n.indexId,this.uid,mi(this.qn(n,e))])},(o,c)=>{i=i.add(new un(n.indexId,e,xl(c.arrayValue),xl(c.directionalValue)))}).next(()=>i)}Gn(t,e){let n=new rt(Ae);const s=this.kn(e,t);if(s==null)return n;const i=ea(e);if(i!=null){const o=t.data.field(i.fieldPath);if(ys(o))for(const c of o.arrayValue.values||[])n=n.add(new un(e.indexId,t.key,this.Nn(c),s))}else n=n.add(new un(e.indexId,t.key,ei,s));return n}zn(t,e,n,s,i){D(Ml,"Updating index entries for document '%s'",e.key);const o=[];return function(u,h,f,m,p){const v=u.getIterator(),C=h.getIterator();let N=Nn(v),x=Nn(C);for(;N||x;){let B=!1,j=!1;if(N&&x){const q=f(N,x);q<0?j=!0:q>0&&(B=!0)}else N!=null?j=!0:B=!0;B?(m(x),x=Nn(C)):j?(p(N),N=Nn(v)):(N=Nn(v),x=Nn(C))}}(s,i,Ae,c=>{o.push(this.jn(t,e,n,c))},c=>{o.push(this.Jn(t,e,n,c))}),A.waitFor(o)}Wn(t){let e=1;return On(t).ee({index:ed,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(n,s,i)=>{i.done(),e=s.sequenceNumber+1}).next(()=>e)}createRange(t,e,n){n=n.sort((o,c)=>Ae(o,c)).filter((o,c,u)=>!c||Ae(o,u[c-1])!==0);const s=[];s.push(t);for(const o of n){const c=Ae(o,t),u=Ae(o,e);if(c===0)s[0]=t.In();else if(c>0&&u<0)s.push(o),s.push(o.In());else if(u>0)break}s.push(e);const i=[];for(let o=0;o<s.length;o+=2){if(this.Hn(s[o],s[o+1]))return[];const c=s[o].An(this.uid,ei,k.empty()),u=s[o+1].An(this.uid,ei,k.empty());i.push(IDBKeyRange.bound(c,u))}return i}Hn(t,e){return Ae(t,e)>0}getMinOffsetFromCollectionGroup(t,e){return this.getFieldIndexes(t,e).next(Fl)}getMinOffset(t,e){return A.mapArray(this.vn(e),n=>this.Fn(t,n).next(s=>s||F(44426))).next(Fl)}}function Ol(r){return wt(r,ms)}function Mn(r){return wt(r,ns)}function $r(r){return wt(r,ka)}function On(r){return wt(r,es)}function Fl(r){L(r.length!==0,28825);let t=r[0].indexState.offset,e=t.largestBatchId;for(let n=1;n<r.length;n++){const s=r[n].indexState.offset;Da(s,t)<0&&(t=s),e<s.largestBatchId&&(e=s.largestBatchId)}return new Qt(t.readTime,t.documentKey,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ll={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},df=41943040;class Dt{static withCacheSize(t){return new Dt(t,Dt.DEFAULT_COLLECTION_PERCENTILE,Dt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ff(r,t,e){const n=r.store(Wt),s=r.store(Jn),i=[],o=IDBKeyRange.only(e.batchId);let c=0;const u=n.ee({range:o},(f,m,p)=>(c++,p.delete()));i.push(u.next(()=>{L(c===1,47070,{batchId:e.batchId})}));const h=[];for(const f of e.mutations){const m=Xh(t,f.key.path,e.batchId);i.push(s.delete(m)),h.push(f.key)}return A.waitFor(i).next(()=>h)}function Pi(r){if(!r)return 0;let t;if(r.document)t=r.document;else if(r.unknownDocument)t=r.unknownDocument;else{if(!r.noDocument)throw F(14731);t=r.noDocument}return JSON.stringify(t).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Dt.DEFAULT_COLLECTION_PERCENTILE=10,Dt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Dt.DEFAULT=new Dt(df,Dt.DEFAULT_COLLECTION_PERCENTILE,Dt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Dt.DISABLED=new Dt(-1,0,0);class Yi{constructor(t,e,n,s){this.userId=t,this.serializer=e,this.indexManager=n,this.referenceDelegate=s,this.Zn={}}static wt(t,e,n,s){L(t.uid!=="",64387);const i=t.isAuthenticated()?t.uid:"";return new Yi(i,e,n,s)}checkEmpty(t){let e=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return ve(t).ee({index:ln,range:n},(s,i,o)=>{e=!1,o.done()}).next(()=>e)}addMutationBatch(t,e,n,s){const i=qn(t),o=ve(t);return o.add({}).next(c=>{L(typeof c=="number",49019);const u=new $a(c,e,n,s),h=function(v,C,N){const x=N.baseMutations.map(j=>Ts(v.yt,j)),B=N.mutations.map(j=>Ts(v.yt,j));return{userId:C,batchId:N.batchId,localWriteTimeMs:N.localWriteTime.toMillis(),baseMutations:x,mutations:B}}(this.serializer,this.userId,u),f=[];let m=new rt((p,v)=>z(p.canonicalString(),v.canonicalString()));for(const p of s){const v=Xh(this.userId,p.key.path,c);m=m.add(p.key.path.popLast()),f.push(o.put(h)),f.push(i.put(v,a_))}return m.forEach(p=>{f.push(this.indexManager.addToCollectionParentIndex(t,p))}),t.addOnCommittedListener(()=>{this.Zn[c]=u.keys()}),A.waitFor(f).next(()=>u)})}lookupMutationBatch(t,e){return ve(t).get(e).next(n=>n?(L(n.userId===this.userId,48,"Unexpected user for mutation batch",{userId:n.userId,batchId:e}),an(this.serializer,n)):null)}Xn(t,e){return this.Zn[e]?A.resolve(this.Zn[e]):this.lookupMutationBatch(t,e).next(n=>{if(n){const s=n.keys();return this.Zn[e]=s,s}return null})}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return ve(t).ee({index:ln,range:s},(o,c,u)=>{c.userId===this.userId&&(L(c.batchId>=n,47524,{Yn:n}),i=an(this.serializer,c)),u.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(t){const e=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=Ne;return ve(t).ee({index:ln,range:e,reverse:!0},(s,i,o)=>{n=i.batchId,o.done()}).next(()=>n)}getAllMutationBatches(t){const e=IDBKeyRange.bound([this.userId,Ne],[this.userId,Number.POSITIVE_INFINITY]);return ve(t).J(ln,e).next(n=>n.map(s=>an(this.serializer,s)))}getAllMutationBatchesAffectingDocumentKey(t,e){const n=ai(this.userId,e.path),s=IDBKeyRange.lowerBound(n),i=[];return qn(t).ee({range:s},(o,c,u)=>{const[h,f,m]=o,p=ee(f);if(h===this.userId&&e.path.isEqual(p))return ve(t).get(m).next(v=>{if(!v)throw F(61480,{er:o,batchId:m});L(v.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:v.userId,batchId:m}),i.push(an(this.serializer,v))});u.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new rt(z);const s=[];return e.forEach(i=>{const o=ai(this.userId,i.path),c=IDBKeyRange.lowerBound(o),u=qn(t).ee({range:c},(h,f,m)=>{const[p,v,C]=h,N=ee(v);p===this.userId&&i.path.isEqual(N)?n=n.add(C):m.done()});s.push(u)}),A.waitFor(s).next(()=>this.tr(t,n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1,i=ai(this.userId,n),o=IDBKeyRange.lowerBound(i);let c=new rt(z);return qn(t).ee({range:o},(u,h,f)=>{const[m,p,v]=u,C=ee(p);m===this.userId&&n.isPrefixOf(C)?C.length===s&&(c=c.add(v)):f.done()}).next(()=>this.tr(t,c))}tr(t,e){const n=[],s=[];return e.forEach(i=>{s.push(ve(t).get(i).next(o=>{if(o===null)throw F(35274,{batchId:i});L(o.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:o.userId,batchId:i}),n.push(an(this.serializer,o))}))}),A.waitFor(s).next(()=>n)}removeMutationBatch(t,e){return ff(t.le,this.userId,e).next(n=>(t.addOnCommittedListener(()=>{this.nr(e.batchId)}),A.forEach(n,s=>this.referenceDelegate.markPotentiallyOrphaned(t,s))))}nr(t){delete this.Zn[t]}performConsistencyCheck(t){return this.checkEmpty(t).next(e=>{if(!e)return A.resolve();const n=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),s=[];return qn(t).ee({range:n},(i,o,c)=>{if(i[0]===this.userId){const u=ee(i[1]);s.push(u)}else c.done()}).next(()=>{L(s.length===0,56720,{rr:s.map(i=>i.canonicalString())})})})}containsKey(t,e){return mf(t,this.userId,e)}ir(t){return gf(t).get(this.userId).next(e=>e||{userId:this.userId,lastAcknowledgedBatchId:Ne,lastStreamToken:""})}}function mf(r,t,e){const n=ai(t,e.path),s=n[1],i=IDBKeyRange.lowerBound(n);let o=!1;return qn(r).ee({range:i,Y:!0},(c,u,h)=>{const[f,m,p]=c;f===t&&m===s&&(o=!0),h.done()}).next(()=>o)}function ve(r){return wt(r,Wt)}function qn(r){return wt(r,Jn)}function gf(r){return wt(r,ds)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(t){this.sr=t}next(){return this.sr+=2,this.sr}static _r(){return new En(0)}static ar(){return new En(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ny{constructor(t,e){this.referenceDelegate=t,this.serializer=e}allocateTargetId(t){return this.ur(t).next(e=>{const n=new En(e.highestTargetId);return e.highestTargetId=n.next(),this.cr(t,e).next(()=>e.highestTargetId)})}getLastRemoteSnapshotVersion(t){return this.ur(t).next(e=>U.fromTimestamp(new tt(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(t){return this.ur(t).next(e=>e.highestListenSequenceNumber)}setTargetsMetadata(t,e,n){return this.ur(t).next(s=>(s.highestListenSequenceNumber=e,n&&(s.lastRemoteSnapshotVersion=n.toTimestamp()),e>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=e),this.cr(t,s)))}addTargetData(t,e){return this.lr(t,e).next(()=>this.ur(t).next(n=>(n.targetCount+=1,this.hr(e,n),this.cr(t,n))))}updateTargetData(t,e){return this.lr(t,e)}removeTargetData(t,e){return this.removeMatchingKeysForTargetId(t,e.targetId).next(()=>Fn(t).delete(e.targetId)).next(()=>this.ur(t)).next(n=>(L(n.targetCount>0,8065),n.targetCount-=1,this.cr(t,n)))}removeTargets(t,e,n){let s=0;const i=[];return Fn(t).ee((o,c)=>{const u=Yr(c);u.sequenceNumber<=e&&n.get(u.targetId)===null&&(s++,i.push(this.removeTargetData(t,u)))}).next(()=>A.waitFor(i)).next(()=>s)}forEachTarget(t,e){return Fn(t).ee((n,s)=>{const i=Yr(s);e(i)})}ur(t){return Bl(t).get(wi).next(e=>(L(e!==null,2888),e))}cr(t,e){return Bl(t).put(wi,e)}lr(t,e){return Fn(t).put(uf(this.serializer,e))}hr(t,e){let n=!1;return t.targetId>e.highestTargetId&&(e.highestTargetId=t.targetId,n=!0),t.sequenceNumber>e.highestListenSequenceNumber&&(e.highestListenSequenceNumber=t.sequenceNumber,n=!0),n}getTargetCount(t){return this.ur(t).next(e=>e.targetCount)}getTargetData(t,e){const n=gn(e),s=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return Fn(t).ee({range:s,index:td},(o,c,u)=>{const h=Yr(c);bs(e,h.target)&&(i=h,u.done())}).next(()=>i)}addMatchingKeys(t,e,n){const s=[],i=Se(t);return e.forEach(o=>{const c=xt(o.path);s.push(i.put({targetId:n,path:c})),s.push(this.referenceDelegate.addReference(t,n,o))}),A.waitFor(s)}removeMatchingKeys(t,e,n){const s=Se(t);return A.forEach(e,i=>{const o=xt(i.path);return A.waitFor([s.delete([n,o]),this.referenceDelegate.removeReference(t,n,i)])})}removeMatchingKeysForTargetId(t,e){const n=Se(t),s=IDBKeyRange.bound([e],[e+1],!1,!0);return n.delete(s)}getMatchingKeysForTargetId(t,e){const n=IDBKeyRange.bound([e],[e+1],!1,!0),s=Se(t);let i=$();return s.ee({range:n,Y:!0},(o,c,u)=>{const h=ee(o[1]),f=new k(h);i=i.add(f)}).next(()=>i)}containsKey(t,e){const n=xt(e.path),s=IDBKeyRange.bound([n],[jh(n)],!1,!0);let i=0;return Se(t).ee({index:Na,Y:!0,range:s},([o,c],u,h)=>{o!==0&&(i++,h.done())}).next(()=>i>0)}At(t,e){return Fn(t).get(e).next(n=>n?Yr(n):null)}}function Fn(r){return wt(r,Yn)}function Bl(r){return wt(r,dn)}function Se(r){return wt(r,Xn)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ul="LruGarbageCollector",pf=1048576;function ql([r,t],[e,n]){const s=z(r,e);return s===0?z(t,n):s}class ky{constructor(t){this.Pr=t,this.buffer=new rt(ql),this.Tr=0}Er(){return++this.Tr}Ir(t){const e=[t,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(e);else{const n=this.buffer.last();ql(e,n)<0&&(this.buffer=this.buffer.delete(n).add(e))}}get maxValue(){return this.buffer.last()[0]}}class _f{constructor(t,e,n){this.garbageCollector=t,this.asyncQueue=e,this.localStore=n,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(t){D(Ul,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){$e(e)?D(Ul,"Ignoring IndexedDB error during garbage collection: ",e):await ze(e)}await this.Ar(3e5)})}}class My{constructor(t,e){this.Vr=t,this.params=e}calculateTargetCount(t,e){return this.Vr.dr(t).next(n=>Math.floor(e/100*n))}nthSequenceNumber(t,e){if(e===0)return A.resolve(Lt.ce);const n=new ky(e);return this.Vr.forEachTarget(t,s=>n.Ir(s.sequenceNumber)).next(()=>this.Vr.mr(t,s=>n.Ir(s))).next(()=>n.maxValue)}removeTargets(t,e,n){return this.Vr.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.Vr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(D("LruGarbageCollector","Garbage collection skipped; disabled"),A.resolve(Ll)):this.getCacheSize(t).next(n=>n<this.params.cacheSizeCollectionThreshold?(D("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ll):this.gr(t,e))}getCacheSize(t){return this.Vr.getCacheSize(t)}gr(t,e){let n,s,i,o,c,u,h;const f=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(D("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),s=this.params.maximumSequenceNumbersToCollect):s=m,o=Date.now(),this.nthSequenceNumber(t,s))).next(m=>(n=m,c=Date.now(),this.removeTargets(t,n,e))).next(m=>(i=m,u=Date.now(),this.removeOrphanedDocuments(t,n))).next(m=>(h=Date.now(),Ln()<=J.DEBUG&&D("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(u-c)+`ms
	Removed ${m} documents in `+(h-u)+`ms
Total Duration: ${h-f}ms`),A.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:m})))}}function yf(r,t){return new My(r,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oy{constructor(t,e){this.db=t,this.garbageCollector=yf(this,e)}dr(t){const e=this.pr(t);return this.db.getTargetCache().getTargetCount(t).next(n=>e.next(s=>n+s))}pr(t){let e=0;return this.mr(t,n=>{e++}).next(()=>e)}forEachTarget(t,e){return this.db.getTargetCache().forEachTarget(t,e)}mr(t,e){return this.yr(t,(n,s)=>e(s))}addReference(t,e,n){return ni(t,n)}removeReference(t,e,n){return ni(t,n)}removeTargets(t,e,n){return this.db.getTargetCache().removeTargets(t,e,n)}markPotentiallyOrphaned(t,e){return ni(t,e)}wr(t,e){return function(s,i){let o=!1;return gf(s).te(c=>mf(s,c,i).next(u=>(u&&(o=!0),A.resolve(!u)))).next(()=>o)}(t,e)}removeOrphanedDocuments(t,e){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this.yr(t,(o,c)=>{if(c<=e){const u=this.wr(t,o).next(h=>{if(!h)return i++,n.getEntry(t,o).next(()=>(n.removeEntry(o,U.min()),Se(t).delete(function(m){return[0,xt(m.path)]}(o))))});s.push(u)}}).next(()=>A.waitFor(s)).next(()=>n.apply(t)).next(()=>i)}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(t,n)}updateLimboDocument(t,e){return ni(t,e)}yr(t,e){const n=Se(t);let s,i=Lt.ce;return n.ee({index:Na},([o,c],{path:u,sequenceNumber:h})=>{o===0?(i!==Lt.ce&&e(new k(ee(s)),i),i=h,s=u):i=Lt.ce}).next(()=>{i!==Lt.ce&&e(new k(ee(s)),i)})}getCacheSize(t){return this.db.getRemoteDocumentCache().getSize(t)}}function ni(r,t){return Se(r).put(function(n,s){return{targetId:0,path:xt(n.path),sequenceNumber:s}}(t,r.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(){this.changes=new fe(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,ct.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return n!==void 0?A.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fy{constructor(t){this.serializer=t}setIndexManager(t){this.indexManager=t}addEntry(t,e,n){return en(t).put(n)}removeEntry(t,e,n){return en(t).delete(function(i,o){const c=i.path.toArray();return[c.slice(0,c.length-2),c[c.length-2],Ri(o),c[c.length-1]]}(e,n))}updateMetadata(t,e){return this.getMetadata(t).next(n=>(n.byteSize+=e,this.Sr(t,n)))}getEntry(t,e){let n=ct.newInvalidDocument(e);return en(t).ee({index:ci,range:IDBKeyRange.only(Gr(e))},(s,i)=>{n=this.br(e,i)}).next(()=>n)}Dr(t,e){let n={size:0,document:ct.newInvalidDocument(e)};return en(t).ee({index:ci,range:IDBKeyRange.only(Gr(e))},(s,i)=>{n={document:this.br(e,i),size:Pi(i)}}).next(()=>n)}getEntries(t,e){let n=Ut();return this.Cr(t,e,(s,i)=>{const o=this.br(s,i);n=n.insert(s,o)}).next(()=>n)}vr(t,e){let n=Ut(),s=new ot(k.comparator);return this.Cr(t,e,(i,o)=>{const c=this.br(i,o);n=n.insert(i,c),s=s.insert(i,Pi(o))}).next(()=>({documents:n,Fr:s}))}Cr(t,e,n){if(e.isEmpty())return A.resolve();let s=new rt($l);e.forEach(u=>s=s.add(u));const i=IDBKeyRange.bound(Gr(s.first()),Gr(s.last())),o=s.getIterator();let c=o.getNext();return en(t).ee({index:ci,range:i},(u,h,f)=>{const m=k.fromSegments([...h.prefixPath,h.collectionGroup,h.documentId]);for(;c&&$l(c,m)<0;)n(c,null),c=o.getNext();c&&c.isEqual(m)&&(n(c,h),c=o.hasNext()?o.getNext():null),c?f.j(Gr(c)):f.done()}).next(()=>{for(;c;)n(c,null),c=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(t,e,n,s,i){const o=e.path,c=[o.popLast().toArray(),o.lastSegment(),Ri(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],u=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return en(t).J(IDBKeyRange.bound(c,u,!0)).next(h=>{i==null||i.incrementDocumentReadCount(h.length);let f=Ut();for(const m of h){const p=this.br(k.fromSegments(m.prefixPath.concat(m.collectionGroup,m.documentId)),m);p.isFoundDocument()&&(Ss(e,p)||s.has(p.key))&&(f=f.insert(p.key,p))}return f})}getAllFromCollectionGroup(t,e,n,s){let i=Ut();const o=zl(e,n),c=zl(e,Qt.max());return en(t).ee({index:Zh,range:IDBKeyRange.bound(o,c,!0)},(u,h,f)=>{const m=this.br(k.fromSegments(h.prefixPath.concat(h.collectionGroup,h.documentId)),h);i=i.insert(m.key,m),i.size===s&&f.done()}).next(()=>i)}newChangeBuffer(t){return new Ly(this,!!t&&t.trackRemovals)}getSize(t){return this.getMetadata(t).next(e=>e.byteSize)}getMetadata(t){return jl(t).get(na).next(e=>(L(!!e,20021),e))}Sr(t,e){return jl(t).put(na,e)}br(t,e){if(e){const n=Ay(this.serializer,e);if(!(n.isNoDocument()&&n.version.isEqual(U.min())))return n}return ct.newInvalidDocument(t)}}function Ef(r){return new Fy(r)}class Ly extends If{constructor(t,e){super(),this.Mr=t,this.trackRemovals=e,this.Or=new fe(n=>n.toString(),(n,s)=>n.isEqual(s))}applyChanges(t){const e=[];let n=0,s=new rt((i,o)=>z(i.canonicalString(),o.canonicalString()));return this.changes.forEach((i,o)=>{const c=this.Or.get(i);if(e.push(this.Mr.removeEntry(t,i,c.readTime)),o.isValidDocument()){const u=bl(this.Mr.serializer,o);s=s.add(i.path.popLast());const h=Pi(u);n+=h-c.size,e.push(this.Mr.addEntry(t,i,u))}else if(n-=c.size,this.trackRemovals){const u=bl(this.Mr.serializer,o.convertToNoDocument(U.min()));e.push(this.Mr.addEntry(t,i,u))}}),s.forEach(i=>{e.push(this.Mr.indexManager.addToCollectionParentIndex(t,i))}),e.push(this.Mr.updateMetadata(t,n)),A.waitFor(e)}getFromCache(t,e){return this.Mr.Dr(t,e).next(n=>(this.Or.set(e,{size:n.size,readTime:n.document.readTime}),n.document))}getAllFromCache(t,e){return this.Mr.vr(t,e).next(({documents:n,Fr:s})=>(s.forEach((i,o)=>{this.Or.set(i,{size:o,readTime:n.get(i).readTime})}),n))}}function jl(r){return wt(r,fs)}function en(r){return wt(r,Ti)}function Gr(r){const t=r.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function zl(r,t){const e=t.documentKey.path.toArray();return[r,Ri(t.readTime),e.slice(0,e.length-2),e.length>0?e[e.length-1]:""]}function $l(r,t){const e=r.path.toArray(),n=t.path.toArray();let s=0;for(let i=0;i<e.length-2&&i<n.length-2;++i)if(s=z(e[i],n[i]),s)return s;return s=z(e.length,n.length),s||(s=z(e[e.length-2],n[n.length-2]),s||z(e[e.length-1],n[n.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class By{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(t,e,n,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=s}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(n=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(n!==null&&is(n.mutation,s,Bt.empty(),tt.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.getLocalViewOfDocuments(t,n,$()).next(()=>n))}getLocalViewOfDocuments(t,e,n=$()){const s=ne();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,n).next(i=>{let o=Hr();return i.forEach((c,u)=>{o=o.insert(c,u.overlayedDocument)}),o}))}getOverlayedDocuments(t,e){const n=ne();return this.populateOverlays(t,n,e).next(()=>this.computeViews(t,e,n,$()))}populateOverlays(t,e,n){const s=[];return n.forEach(i=>{e.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(t,s).next(i=>{i.forEach((o,c)=>{e.set(o,c)})})}computeViews(t,e,n,s){let i=Ut();const o=ss(),c=function(){return ss()}();return e.forEach((u,h)=>{const f=n.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof me)?i=i.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),is(f.mutation,h,f.mutation.getFieldMask(),tt.now())):o.set(h.key,Bt.empty())}),this.recalculateAndSaveOverlays(t,i).next(u=>(u.forEach((h,f)=>o.set(h,f)),e.forEach((h,f)=>c.set(h,new By(f,o.get(h)??null))),c))}recalculateAndSaveOverlays(t,e){const n=ss();let s=new ot((o,c)=>o-c),i=$();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(o=>{for(const c of o)c.keys().forEach(u=>{const h=e.get(u);if(h===null)return;let f=n.get(u)||Bt.empty();f=c.applyToLocalView(h,f),n.set(u,f);const m=(s.get(c.batchId)||$()).add(u);s=s.insert(c.batchId,m)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),h=u.key,f=u.value,m=kd();f.forEach(p=>{if(!i.has(p)){const v=qd(e.get(p),n.get(p));v!==null&&m.set(p,v),i=i.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(t,h,m))}return A.waitFor(o)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.recalculateAndSaveOverlays(t,n))}getDocumentsMatchingQuery(t,e,n,s){return G_(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Ua(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,s):this.getDocumentsMatchingCollectionQuery(t,e,n,s)}getNextDocuments(t,e,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,s-i.size):A.resolve(ne());let c=Qn,u=i;return o.next(h=>A.forEach(h,(f,m)=>(c<m.largestBatchId&&(c=m.largestBatchId),i.get(f)?A.resolve():this.remoteDocumentCache.getEntry(t,f).next(p=>{u=u.insert(f,p)}))).next(()=>this.populateOverlays(t,h,i)).next(()=>this.computeViews(t,u,h,$())).next(f=>({batchId:c,changes:Nd(f)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new k(e)).next(n=>{let s=Hr();return n.isFoundDocument()&&(s=s.insert(n.key,n)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,n,s){const i=e.collectionGroup;let o=Hr();return this.indexManager.getCollectionParents(t,i).next(c=>A.forEach(c,u=>{const h=function(m,p){return new de(p,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(e,u.child(i));return this.getDocumentsMatchingCollectionQuery(t,h,n,s).next(f=>{f.forEach((m,p)=>{o=o.insert(m,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,e,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,i,s))).next(o=>{i.forEach((u,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,ct.newInvalidDocument(f)))});let c=Hr();return o.forEach((u,h)=>{const f=i.get(u);f!==void 0&&is(f.mutation,h,Bt.empty(),tt.now()),Ss(e,h)&&(c=c.insert(u,h))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uy{constructor(t){this.serializer=t,this.Nr=new Map,this.Br=new Map}getBundleMetadata(t,e){return A.resolve(this.Nr.get(e))}saveBundleMetadata(t,e){return this.Nr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:pt(s.createTime)}}(e)),A.resolve()}getNamedQuery(t,e){return A.resolve(this.Br.get(e))}saveNamedQuery(t,e){return this.Br.set(e.name,function(s){return{name:s.name,query:Hi(s.bundledQuery),readTime:pt(s.readTime)}}(e)),A.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qy{constructor(){this.overlays=new ot(k.comparator),this.Lr=new Map}getOverlay(t,e){return A.resolve(this.overlays.get(e))}getOverlays(t,e){const n=ne();return A.forEach(e,s=>this.getOverlay(t,s).next(i=>{i!==null&&n.set(s,i)})).next(()=>n)}saveOverlays(t,e,n){return n.forEach((s,i)=>{this.St(t,e,i)}),A.resolve()}removeOverlaysForBatchId(t,e,n){const s=this.Lr.get(n);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Lr.delete(n)),A.resolve()}getOverlaysForCollection(t,e,n){const s=ne(),i=e.length+1,o=new k(e.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const u=c.getNext().value,h=u.getKey();if(!e.isPrefixOf(h.path))break;h.path.length===i&&u.largestBatchId>n&&s.set(u.getKey(),u)}return A.resolve(s)}getOverlaysForCollectionGroup(t,e,n,s){let i=new ot((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===e&&h.largestBatchId>n){let f=i.get(h.largestBatchId);f===null&&(f=ne(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const c=ne(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>c.set(h,f)),!(c.size()>=s)););return A.resolve(c)}St(t,e,n){const s=this.overlays.get(n.key);if(s!==null){const o=this.Lr.get(s.largestBatchId).delete(n.key);this.Lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(n.key,new Ka(e,n));let i=this.Lr.get(e);i===void 0&&(i=$(),this.Lr.set(e,i)),this.Lr.set(e,i.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy{constructor(){this.sessionToken=ft.EMPTY_BYTE_STRING}getSessionToken(t){return A.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,A.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(){this.kr=new rt(vt.qr),this.Kr=new rt(vt.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(t,e){const n=new vt(t,e);this.kr=this.kr.add(n),this.Kr=this.Kr.add(n)}$r(t,e){t.forEach(n=>this.addReference(n,e))}removeReference(t,e){this.Wr(new vt(t,e))}Qr(t,e){t.forEach(n=>this.removeReference(n,e))}Gr(t){const e=new k(new K([])),n=new vt(e,t),s=new vt(e,t+1),i=[];return this.Kr.forEachInRange([n,s],o=>{this.Wr(o),i.push(o.key)}),i}zr(){this.kr.forEach(t=>this.Wr(t))}Wr(t){this.kr=this.kr.delete(t),this.Kr=this.Kr.delete(t)}jr(t){const e=new k(new K([])),n=new vt(e,t),s=new vt(e,t+1);let i=$();return this.Kr.forEachInRange([n,s],o=>{i=i.add(o.key)}),i}containsKey(t){const e=new vt(t,0),n=this.kr.firstAfterOrEqual(e);return n!==null&&t.isEqual(n.key)}}class vt{constructor(t,e){this.key=t,this.Jr=e}static qr(t,e){return k.comparator(t.key,e.key)||z(t.Jr,e.Jr)}static Ur(t,e){return z(t.Jr,e.Jr)||k.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zy{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Yn=1,this.Hr=new rt(vt.qr)}checkEmpty(t){return A.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,n,s){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new $a(i,e,n,s);this.mutationQueue.push(o);for(const c of s)this.Hr=this.Hr.add(new vt(c.key,i)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return A.resolve(o)}lookupMutationBatch(t,e){return A.resolve(this.Zr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=this.Xr(n),i=s<0?0:s;return A.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return A.resolve(this.mutationQueue.length===0?Ne:this.Yn-1)}getAllMutationBatches(t){return A.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new vt(e,0),s=new vt(e,Number.POSITIVE_INFINITY),i=[];return this.Hr.forEachInRange([n,s],o=>{const c=this.Zr(o.Jr);i.push(c)}),A.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new rt(z);return e.forEach(s=>{const i=new vt(s,0),o=new vt(s,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([i,o],c=>{n=n.add(c.Jr)})}),A.resolve(this.Yr(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1;let i=n;k.isDocumentKey(i)||(i=i.child(""));const o=new vt(new k(i),0);let c=new rt(z);return this.Hr.forEachWhile(u=>{const h=u.key.path;return!!n.isPrefixOf(h)&&(h.length===s&&(c=c.add(u.Jr)),!0)},o),A.resolve(this.Yr(c))}Yr(t){const e=[];return t.forEach(n=>{const s=this.Zr(n);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){L(this.ei(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.Hr;return A.forEach(e.mutations,s=>{const i=new vt(s.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.Hr=n})}nr(t){}containsKey(t,e){const n=new vt(e,0),s=this.Hr.firstAfterOrEqual(n);return A.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,A.resolve()}ei(t,e){return this.Xr(t)}Xr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Zr(t){const e=this.Xr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $y{constructor(t){this.ti=t,this.docs=function(){return new ot(k.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,s=this.docs.get(n),i=s?s.size:0,o=this.ti(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return A.resolve(n?n.document.mutableCopy():ct.newInvalidDocument(e))}getEntries(t,e){let n=Ut();return e.forEach(s=>{const i=this.docs.get(s);n=n.insert(s,i?i.document.mutableCopy():ct.newInvalidDocument(s))}),A.resolve(n)}getDocumentsMatchingQuery(t,e,n,s){let i=Ut();const o=e.path,c=new k(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||Da(Qh(f),n)<=0||(s.has(f.key)||Ss(e,f))&&(i=i.insert(f.key,f.mutableCopy()))}return A.resolve(i)}getAllFromCollectionGroup(t,e,n,s){F(9500)}ni(t,e){return A.forEach(this.docs,n=>e(n))}newChangeBuffer(t){return new Gy(this)}getSize(t){return A.resolve(this.size)}}class Gy extends If{constructor(t){super(),this.Mr=t}applyChanges(t){const e=[];return this.changes.forEach((n,s)=>{s.isValidDocument()?e.push(this.Mr.addEntry(t,s)):this.Mr.removeEntry(n)}),A.waitFor(e)}getFromCache(t,e){return this.Mr.getEntry(t,e)}getAllFromCache(t,e){return this.Mr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ky{constructor(t){this.persistence=t,this.ri=new fe(e=>gn(e),bs),this.lastRemoteSnapshotVersion=U.min(),this.highestTargetId=0,this.ii=0,this.si=new Ya,this.targetCount=0,this.oi=En._r()}forEachTarget(t,e){return this.ri.forEach((n,s)=>e(s)),A.resolve()}getLastRemoteSnapshotVersion(t){return A.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return A.resolve(this.ii)}allocateTargetId(t){return this.highestTargetId=this.oi.next(),A.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.ii&&(this.ii=e),A.resolve()}lr(t){this.ri.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.oi=new En(e),this.highestTargetId=e),t.sequenceNumber>this.ii&&(this.ii=t.sequenceNumber)}addTargetData(t,e){return this.lr(e),this.targetCount+=1,A.resolve()}updateTargetData(t,e){return this.lr(e),A.resolve()}removeTargetData(t,e){return this.ri.delete(e.target),this.si.Gr(e.targetId),this.targetCount-=1,A.resolve()}removeTargets(t,e,n){let s=0;const i=[];return this.ri.forEach((o,c)=>{c.sequenceNumber<=e&&n.get(c.targetId)===null&&(this.ri.delete(o),i.push(this.removeMatchingKeysForTargetId(t,c.targetId)),s++)}),A.waitFor(i).next(()=>s)}getTargetCount(t){return A.resolve(this.targetCount)}getTargetData(t,e){const n=this.ri.get(e)||null;return A.resolve(n)}addMatchingKeys(t,e,n){return this.si.$r(e,n),A.resolve()}removeMatchingKeys(t,e,n){this.si.Qr(e,n);const s=this.persistence.referenceDelegate,i=[];return s&&e.forEach(o=>{i.push(s.markPotentiallyOrphaned(t,o))}),A.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.si.Gr(e),A.resolve()}getMatchingKeysForTargetId(t,e){const n=this.si.jr(e);return A.resolve(n)}containsKey(t,e){return A.resolve(this.si.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(t,e){this._i={},this.overlays={},this.ai=new Lt(0),this.ui=!1,this.ui=!0,this.ci=new jy,this.referenceDelegate=t(this),this.li=new Ky(this),this.indexManager=new Dy,this.remoteDocumentCache=function(s){return new $y(s)}(n=>this.referenceDelegate.hi(n)),this.serializer=new cf(e),this.Pi=new Uy(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new qy,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this._i[t.toKey()];return n||(n=new zy(e,this.referenceDelegate),this._i[t.toKey()]=n),n}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(t,e,n){D("MemoryPersistence","Starting transaction:",t);const s=new Qy(this.ai.next());return this.referenceDelegate.Ti(),n(s).next(i=>this.referenceDelegate.Ei(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ii(t,e){return A.or(Object.values(this._i).map(n=>()=>n.containsKey(t,e)))}}class Qy extends Hh{constructor(t){super(),this.currentSequenceNumber=t}}class Xi{constructor(t){this.persistence=t,this.Ri=new Ya,this.Ai=null}static Vi(t){return new Xi(t)}get di(){if(this.Ai)return this.Ai;throw F(60996)}addReference(t,e,n){return this.Ri.addReference(n,e),this.di.delete(n.toString()),A.resolve()}removeReference(t,e,n){return this.Ri.removeReference(n,e),this.di.add(n.toString()),A.resolve()}markPotentiallyOrphaned(t,e){return this.di.add(e.toString()),A.resolve()}removeTarget(t,e){this.Ri.Gr(e.targetId).forEach(s=>this.di.add(s.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(i=>this.di.add(i.toString()))}).next(()=>n.removeTargetData(t,e))}Ti(){this.Ai=new Set}Ei(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return A.forEach(this.di,n=>{const s=k.fromPath(n);return this.mi(t,s).next(i=>{i||e.removeEntry(s,U.min())})}).next(()=>(this.Ai=null,e.apply(t)))}updateLimboDocument(t,e){return this.mi(t,e).next(n=>{n?this.di.delete(e.toString()):this.di.add(e.toString())})}hi(t){return 0}mi(t,e){return A.or([()=>A.resolve(this.Ri.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ii(t,e)])}}class Vi{constructor(t,e){this.persistence=t,this.fi=new fe(n=>xt(n.path),(n,s)=>n.isEqual(s)),this.garbageCollector=yf(this,e)}static Vi(t,e){return new Vi(t,e)}Ti(){}Ei(t){return A.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}dr(t){const e=this.pr(t);return this.persistence.getTargetCache().getTargetCount(t).next(n=>e.next(s=>n+s))}pr(t){let e=0;return this.mr(t,n=>{e++}).next(()=>e)}mr(t,e){return A.forEach(this.fi,(n,s)=>this.wr(t,n,s).next(i=>i?A.resolve():e(s)))}removeTargets(t,e,n){return this.persistence.getTargetCache().removeTargets(t,e,n)}removeOrphanedDocuments(t,e){let n=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ni(t,o=>this.wr(t,o,e).next(c=>{c||(n++,i.removeEntry(o,U.min()))})).next(()=>i.apply(t)).next(()=>n)}markPotentiallyOrphaned(t,e){return this.fi.set(e,t.currentSequenceNumber),A.resolve()}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,n)}addReference(t,e,n){return this.fi.set(n,t.currentSequenceNumber),A.resolve()}removeReference(t,e,n){return this.fi.set(n,t.currentSequenceNumber),A.resolve()}updateLimboDocument(t,e){return this.fi.set(e,t.currentSequenceNumber),A.resolve()}hi(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=li(t.data.value)),e}wr(t,e,n){return A.or([()=>this.persistence.Ii(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.fi.get(e);return A.resolve(s!==void 0&&s>n)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wy{constructor(t){this.serializer=t}k(t,e,n,s){const i=new Li("createOrUpgrade",e);n<1&&s>=1&&(function(u){u.createObjectStore(vs)}(t),function(u){u.createObjectStore(ds,{keyPath:o_}),u.createObjectStore(Wt,{keyPath:el,autoIncrement:!0}).createIndex(ln,nl,{unique:!0}),u.createObjectStore(Jn)}(t),Gl(t),function(u){u.createObjectStore(sn)}(t));let o=A.resolve();return n<3&&s>=3&&(n!==0&&(function(u){u.deleteObjectStore(Xn),u.deleteObjectStore(Yn),u.deleteObjectStore(dn)}(t),Gl(t)),o=o.next(()=>function(u){const h=u.store(dn),f={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:U.min().toTimestamp(),targetCount:0};return h.put(wi,f)}(i))),n<4&&s>=4&&(n!==0&&(o=o.next(()=>function(u,h){return h.store(Wt).J().next(m=>{u.deleteObjectStore(Wt),u.createObjectStore(Wt,{keyPath:el,autoIncrement:!0}).createIndex(ln,nl,{unique:!0});const p=h.store(Wt),v=m.map(C=>p.put(C));return A.waitFor(v)})}(t,i))),o=o.next(()=>{(function(u){u.createObjectStore(Zn,{keyPath:g_})})(t)})),n<5&&s>=5&&(o=o.next(()=>this.gi(i))),n<6&&s>=6&&(o=o.next(()=>(function(u){u.createObjectStore(fs)}(t),this.pi(i)))),n<7&&s>=7&&(o=o.next(()=>this.yi(i))),n<8&&s>=8&&(o=o.next(()=>this.wi(t,i))),n<9&&s>=9&&(o=o.next(()=>{(function(u){u.objectStoreNames.contains("remoteDocumentChanges")&&u.deleteObjectStore("remoteDocumentChanges")})(t)})),n<10&&s>=10&&(o=o.next(()=>this.Si(i))),n<11&&s>=11&&(o=o.next(()=>{(function(u){u.createObjectStore(Bi,{keyPath:p_})})(t),function(u){u.createObjectStore(Ui,{keyPath:__})}(t)})),n<12&&s>=12&&(o=o.next(()=>{(function(u){const h=u.createObjectStore(qi,{keyPath:v_});h.createIndex(sa,b_,{unique:!1}),h.createIndex(rd,R_,{unique:!1})})(t)})),n<13&&s>=13&&(o=o.next(()=>function(u){const h=u.createObjectStore(Ti,{keyPath:c_});h.createIndex(ci,u_),h.createIndex(Zh,l_)}(t)).next(()=>this.bi(t,i)).next(()=>t.deleteObjectStore(sn))),n<14&&s>=14&&(o=o.next(()=>this.Di(t,i))),n<15&&s>=15&&(o=o.next(()=>function(u){u.createObjectStore(ka,{keyPath:y_,autoIncrement:!0}).createIndex(ra,I_,{unique:!1}),u.createObjectStore(es,{keyPath:E_}).createIndex(ed,T_,{unique:!1}),u.createObjectStore(ns,{keyPath:w_}).createIndex(nd,A_,{unique:!1})}(t))),n<16&&s>=16&&(o=o.next(()=>{e.objectStore(es).clear()}).next(()=>{e.objectStore(ns).clear()})),n<17&&s>=17&&(o=o.next(()=>{(function(u){u.createObjectStore(Ma,{keyPath:S_})})(t)})),n<18&&s>=18&&vh()&&(o=o.next(()=>{e.objectStore(es).clear()}).next(()=>{e.objectStore(ns).clear()})),o}pi(t){let e=0;return t.store(sn).ee((n,s)=>{e+=Pi(s)}).next(()=>{const n={byteSize:e};return t.store(fs).put(na,n)})}gi(t){const e=t.store(ds),n=t.store(Wt);return e.J().next(s=>A.forEach(s,i=>{const o=IDBKeyRange.bound([i.userId,Ne],[i.userId,i.lastAcknowledgedBatchId]);return n.J(ln,o).next(c=>A.forEach(c,u=>{L(u.userId===i.userId,18650,"Cannot process batch from unexpected user",{batchId:u.batchId});const h=an(this.serializer,u);return ff(t,i.userId,h).next(()=>{})}))}))}yi(t){const e=t.store(Xn),n=t.store(sn);return t.store(dn).get(wi).next(s=>{const i=[];return n.ee((o,c)=>{const u=new K(o),h=function(m){return[0,xt(m)]}(u);i.push(e.get(h).next(f=>f?A.resolve():(m=>e.put({targetId:0,path:xt(m),sequenceNumber:s.highestListenSequenceNumber}))(u)))}).next(()=>A.waitFor(i))})}wi(t,e){t.createObjectStore(ms,{keyPath:m_});const n=e.store(ms),s=new Ja,i=o=>{if(s.add(o)){const c=o.lastSegment(),u=o.popLast();return n.put({collectionId:c,parent:xt(u)})}};return e.store(sn).ee({Y:!0},(o,c)=>{const u=new K(o);return i(u.popLast())}).next(()=>e.store(Jn).ee({Y:!0},([o,c,u],h)=>{const f=ee(c);return i(f.popLast())}))}Si(t){const e=t.store(Yn);return e.ee((n,s)=>{const i=Yr(s),o=uf(this.serializer,i);return e.put(o)})}bi(t,e){const n=e.store(sn),s=[];return n.ee((i,o)=>{const c=e.store(Ti),u=function(m){return m.document?new k(K.fromString(m.document.name).popFirst(5)):m.noDocument?k.fromSegments(m.noDocument.path):m.unknownDocument?k.fromSegments(m.unknownDocument.path):F(36783)}(o).path.toArray(),h={prefixPath:u.slice(0,u.length-2),collectionGroup:u[u.length-2],documentId:u[u.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};s.push(c.put(h))}).next(()=>A.waitFor(s))}Di(t,e){const n=e.store(Wt),s=Ef(this.serializer),i=new Xa(Xi.Vi,this.serializer.yt);return n.J().next(o=>{const c=new Map;return o.forEach(u=>{let h=c.get(u.userId)??$();an(this.serializer,u).keys().forEach(f=>h=h.add(f)),c.set(u.userId,h)}),A.forEach(c,(u,h)=>{const f=new bt(h),m=Ji.wt(this.serializer,f),p=i.getIndexManager(f),v=Yi.wt(f,this.serializer,p,i.referenceDelegate);return new Tf(s,v,m,p).recalculateAndSaveOverlaysForDocumentKeys(new ia(e,Lt.ce),u).next()})})}}function Gl(r){r.createObjectStore(Xn,{keyPath:d_}).createIndex(Na,f_,{unique:!0}),r.createObjectStore(Yn,{keyPath:"targetId"}).createIndex(td,h_,{unique:!0}),r.createObjectStore(dn)}const be="IndexedDbPersistence",Uo=18e5,qo=5e3,jo="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",wf="main";class Za{constructor(t,e,n,s,i,o,c,u,h,f,m=18){if(this.allowTabSynchronization=t,this.persistenceKey=e,this.clientId=n,this.Ci=i,this.window=o,this.document=c,this.Fi=h,this.Mi=f,this.xi=m,this.ai=null,this.ui=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Oi=null,this.inForeground=!1,this.Ni=null,this.Bi=null,this.Li=Number.NEGATIVE_INFINITY,this.ki=p=>Promise.resolve(),!Za.v())throw new V(R.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Oy(this,s),this.qi=e+wf,this.serializer=new cf(u),this.Ki=new re(this.qi,this.xi,new Wy(this.serializer)),this.ci=new by,this.li=new Ny(this.referenceDelegate,this.serializer),this.remoteDocumentCache=Ef(this.serializer),this.Pi=new vy,this.window&&this.window.localStorage?this.Ui=this.window.localStorage:(this.Ui=null,f===!1&&gt(be,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.$i().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new V(R.FAILED_PRECONDITION,jo);return this.Wi(),this.Qi(),this.Gi(),this.runTransaction("getHighestListenSequenceNumber","readonly",t=>this.li.getHighestSequenceNumber(t))}).then(t=>{this.ai=new Lt(t,this.Fi)}).then(()=>{this.ui=!0}).catch(t=>(this.Ki&&this.Ki.close(),Promise.reject(t)))}zi(t){return this.ki=async e=>{if(this.started)return t(e)},t(this.isPrimary)}setDatabaseDeletedListener(t){this.Ki.K(async e=>{e.newVersion===null&&await t()})}setNetworkEnabled(t){this.networkEnabled!==t&&(this.networkEnabled=t,this.Ci.enqueueAndForget(async()=>{this.started&&await this.$i()}))}$i(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",t=>ri(t).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.ji(t).next(e=>{e||(this.isPrimary=!1,this.Ci.enqueueRetryable(()=>this.ki(!1)))})}).next(()=>this.Ji(t)).next(e=>this.isPrimary&&!e?this.Hi(t).next(()=>!1):!!e&&this.Zi(t).next(()=>!0))).catch(t=>{if($e(t))return D(be,"Failed to extend owner lease: ",t),this.isPrimary;if(!this.allowTabSynchronization)throw t;return D(be,"Releasing owner lease after error during lease refresh",t),!1}).then(t=>{this.isPrimary!==t&&this.Ci.enqueueRetryable(()=>this.ki(t)),this.isPrimary=t})}ji(t){return Kr(t).get(xn).next(e=>A.resolve(this.Xi(e)))}Yi(t){return ri(t).delete(this.clientId)}async es(){if(this.isPrimary&&!this.ts(this.Li,Uo)){this.Li=Date.now();const t=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",e=>{const n=wt(e,Zn);return n.J().next(s=>{const i=this.ns(s,Uo),o=s.filter(c=>i.indexOf(c)===-1);return A.forEach(o,c=>n.delete(c.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Ui)for(const e of t)this.Ui.removeItem(this.rs(e.clientId))}}Gi(){this.Bi=this.Ci.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.$i().then(()=>this.es()).then(()=>this.Gi()))}Xi(t){return!!t&&t.ownerId===this.clientId}Ji(t){return this.Mi?A.resolve(!0):Kr(t).get(xn).next(e=>{if(e!==null&&this.ts(e.leaseTimestampMs,qo)&&!this.ss(e.ownerId)){if(this.Xi(e)&&this.networkEnabled)return!0;if(!this.Xi(e)){if(!e.allowTabSynchronization)throw new V(R.FAILED_PRECONDITION,jo);return!1}}return!(!this.networkEnabled||!this.inForeground)||ri(t).J().next(n=>this.ns(n,qo).find(s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,o=!this.inForeground&&s.inForeground,c=this.networkEnabled===s.networkEnabled;if(i||o&&c)return!0}return!1})===void 0)}).next(e=>(this.isPrimary!==e&&D(be,`Client ${e?"is":"is not"} eligible for a primary lease.`),e))}async shutdown(){this.ui=!1,this._s(),this.Bi&&(this.Bi.cancel(),this.Bi=null),this.us(),this.cs(),await this.Ki.runTransaction("shutdown","readwrite",[vs,Zn],t=>{const e=new ia(t,Lt.ce);return this.Hi(e).next(()=>this.Yi(e))}),this.Ki.close(),this.ls()}ns(t,e){return t.filter(n=>this.ts(n.updateTimeMs,e)&&!this.ss(n.clientId))}hs(){return this.runTransaction("getActiveClients","readonly",t=>ri(t).J().next(e=>this.ns(e,Uo).map(n=>n.clientId)))}get started(){return this.ui}getGlobalsCache(){return this.ci}getMutationQueue(t,e){return Yi.wt(t,this.serializer,e,this.referenceDelegate)}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(t){return new xy(t,this.serializer.yt.databaseId)}getDocumentOverlayCache(t){return Ji.wt(this.serializer,t)}getBundleCache(){return this.Pi}runTransaction(t,e,n){D(be,"Starting transaction:",t);const s=e==="readonly"?"readonly":"readwrite",i=function(u){return u===18?C_:u===17?ad:u===16?V_:u===15?Oa:u===14?od:u===13?id:u===12?P_:u===11?sd:void F(60245)}(this.xi);let o;return this.Ki.runTransaction(t,s,i,c=>(o=new ia(c,this.ai?this.ai.next():Lt.ce),e==="readwrite-primary"?this.ji(o).next(u=>!!u||this.Ji(o)).next(u=>{if(!u)throw gt(`Failed to obtain primary lease for action '${t}'.`),this.isPrimary=!1,this.Ci.enqueueRetryable(()=>this.ki(!1)),new V(R.FAILED_PRECONDITION,Wh);return n(o)}).next(u=>this.Zi(o).next(()=>u)):this.Ps(o).next(()=>n(o)))).then(c=>(o.raiseOnCommittedEvent(),c))}Ps(t){return Kr(t).get(xn).next(e=>{if(e!==null&&this.ts(e.leaseTimestampMs,qo)&&!this.ss(e.ownerId)&&!this.Xi(e)&&!(this.Mi||this.allowTabSynchronization&&e.allowTabSynchronization))throw new V(R.FAILED_PRECONDITION,jo)})}Zi(t){const e={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Kr(t).put(xn,e)}static v(){return re.v()}Hi(t){const e=Kr(t);return e.get(xn).next(n=>this.Xi(n)?(D(be,"Releasing primary lease."),e.delete(xn)):A.resolve())}ts(t,e){const n=Date.now();return!(t<n-e)&&(!(t>n)||(gt(`Detected an update time that is in the future: ${t} > ${n}`),!1))}Wi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ni=()=>{this.Ci.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.$i()))},this.document.addEventListener("visibilitychange",this.Ni),this.inForeground=this.document.visibilityState==="visible")}us(){this.Ni&&(this.document.removeEventListener("visibilitychange",this.Ni),this.Ni=null)}Qi(){var t;typeof((t=this.window)==null?void 0:t.addEventListener)=="function"&&(this.Oi=()=>{this._s();const e=/(?:Version|Mobile)\/1[456]/;Ah()&&(navigator.appVersion.match(e)||navigator.userAgent.match(e))&&this.Ci.enterRestrictedMode(!0),this.Ci.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Oi))}cs(){this.Oi&&(this.window.removeEventListener("pagehide",this.Oi),this.Oi=null)}ss(t){var e;try{const n=((e=this.Ui)==null?void 0:e.getItem(this.rs(t)))!==null;return D(be,`Client '${t}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(n){return gt(be,"Failed to get zombied client id.",n),!1}}_s(){if(this.Ui)try{this.Ui.setItem(this.rs(this.clientId),String(Date.now()))}catch(t){gt("Failed to set zombie client id.",t)}}ls(){if(this.Ui)try{this.Ui.removeItem(this.rs(this.clientId))}catch{}}rs(t){return`firestore_zombie_${this.persistenceKey}_${t}`}}function Kr(r){return wt(r,vs)}function ri(r){return wt(r,Zn)}function tc(r,t){let e=r.projectId;return r.isDefaultDatabase||(e+="."+r.database),"firestore/"+t+"/"+e+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(t,e,n,s){this.targetId=t,this.fromCache=e,this.Ts=n,this.Es=s}static Is(t,e){let n=$(),s=$();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new ec(t,e.fromCache,n,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hy{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return Ah()?8:Jh(Gn())>0?6:4}()}initialize(t,e){this.fs=t,this.indexManager=e,this.Rs=!0}getDocumentsMatchingQuery(t,e,n,s){const i={result:null};return this.gs(t,e).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ps(t,e,s,n).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new Hy;return this.ys(t,e,o).next(c=>{if(i.result=c,this.As)return this.ws(t,e,o,c.size)})}).next(()=>i.result)}ws(t,e,n,s){return n.documentReadCount<this.Vs?(Ln()<=J.DEBUG&&D("QueryEngine","SDK will not create cache indexes for query:",Bn(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),A.resolve()):(Ln()<=J.DEBUG&&D("QueryEngine","Query:",Bn(e),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.ds*s?(Ln()<=J.DEBUG&&D("QueryEngine","The SDK decides to create cache indexes for query:",Bn(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Nt(e))):A.resolve())}gs(t,e){if(gl(e))return A.resolve(null);let n=Nt(e);return this.indexManager.getIndexType(t,n).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=bi(e,null,"F"),n=Nt(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next(i=>{const o=$(...i);return this.fs.getDocuments(t,o).next(c=>this.indexManager.getMinOffset(t,n).next(u=>{const h=this.Ss(e,c);return this.bs(e,h,o,u.readTime)?this.gs(t,bi(e,null,"F")):this.Ds(t,h,e,u)}))})))}ps(t,e,n,s){return gl(e)||s.isEqual(U.min())?A.resolve(null):this.fs.getDocuments(t,n).next(i=>{const o=this.Ss(e,i);return this.bs(e,o,n,s)?A.resolve(null):(Ln()<=J.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Bn(e)),this.Ds(t,o,e,Kh(s,Qn)).next(c=>c))})}Ss(t,e){let n=new rt(Dd(t));return e.forEach((s,i)=>{Ss(t,i)&&(n=n.add(i))}),n}bs(t,e,n,s){if(t.limit===null)return!1;if(n.size!==e.size)return!0;const i=t.limitType==="F"?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ys(t,e,n){return Ln()<=J.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",Bn(e)),this.fs.getDocumentsMatchingQuery(t,e,Qt.min(),n)}Ds(t,e,n,s){return this.fs.getDocumentsMatchingQuery(t,n,s).next(i=>(e.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nc="LocalStore",Jy=3e8;class Yy{constructor(t,e,n,s){this.persistence=t,this.Cs=e,this.serializer=s,this.vs=new ot(z),this.Fs=new fe(i=>gn(i),bs),this.Ms=new Map,this.xs=t.getRemoteDocumentCache(),this.li=t.getTargetCache(),this.Pi=t.getBundleCache(),this.Os(n)}Os(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Tf(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.vs))}}function vf(r,t,e,n){return new Yy(r,t,e,n)}async function bf(r,t){const e=M(r);return await e.persistence.runTransaction("Handle user change","readonly",n=>{let s;return e.mutationQueue.getAllMutationBatches(n).next(i=>(s=i,e.Os(t),e.mutationQueue.getAllMutationBatches(n))).next(i=>{const o=[],c=[];let u=$();for(const h of s){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of i){c.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return e.localDocuments.getDocuments(n,u).next(h=>({Ns:h,removedBatchIds:o,addedBatchIds:c}))})})}function Xy(r,t){const e=M(r);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const s=t.batch.keys(),i=e.xs.newChangeBuffer({trackRemovals:!0});return function(c,u,h,f){const m=h.batch,p=m.keys();let v=A.resolve();return p.forEach(C=>{v=v.next(()=>f.getEntry(u,C)).next(N=>{const x=h.docVersions.get(C);L(x!==null,48541),N.version.compareTo(x)<0&&(m.applyToRemoteDocument(N,h),N.isValidDocument()&&(N.setReadTime(h.commitVersion),f.addEntry(N)))})}),v.next(()=>c.mutationQueue.removeMutationBatch(u,m))}(e,n,t,i).next(()=>i.apply(n)).next(()=>e.mutationQueue.performConsistencyCheck(n)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(n,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(c){let u=$();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(u=u.add(c.batch.mutations[h].key));return u}(t))).next(()=>e.localDocuments.getDocuments(n,s))})}function Rf(r){const t=M(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.li.getLastRemoteSnapshotVersion(e))}function Zy(r,t){const e=M(r),n=t.snapshotVersion;let s=e.vs;return e.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=e.xs.newChangeBuffer({trackRemovals:!0});s=e.vs;const c=[];t.targetChanges.forEach((f,m)=>{const p=s.get(m);if(!p)return;c.push(e.li.removeMatchingKeys(i,f.removedDocuments,m).next(()=>e.li.addMatchingKeys(i,f.addedDocuments,m)));let v=p.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(m)!==null?v=v.withResumeToken(ft.EMPTY_BYTE_STRING,U.min()).withLastLimboFreeSnapshotVersion(U.min()):f.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(f.resumeToken,n)),s=s.insert(m,v),function(N,x,B){return N.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=Jy?!0:B.addedDocuments.size+B.modifiedDocuments.size+B.removedDocuments.size>0}(p,v,f)&&c.push(e.li.updateTargetData(i,v))});let u=Ut(),h=$();if(t.documentUpdates.forEach(f=>{t.resolvedLimboDocuments.has(f)&&c.push(e.persistence.referenceDelegate.updateLimboDocument(i,f))}),c.push(Sf(i,o,t.documentUpdates).next(f=>{u=f.Bs,h=f.Ls})),!n.isEqual(U.min())){const f=e.li.getLastRemoteSnapshotVersion(i).next(m=>e.li.setTargetsMetadata(i,i.currentSequenceNumber,n));c.push(f)}return A.waitFor(c).next(()=>o.apply(i)).next(()=>e.localDocuments.getLocalViewOfDocuments(i,u,h)).next(()=>u)}).then(i=>(e.vs=s,i))}function Sf(r,t,e){let n=$(),s=$();return e.forEach(i=>n=n.add(i)),t.getEntries(r,n).next(i=>{let o=Ut();return e.forEach((c,u)=>{const h=i.get(c);u.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),u.isNoDocument()&&u.version.isEqual(U.min())?(t.removeEntry(c,u.readTime),o=o.insert(c,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(t.addEntry(u),o=o.insert(c,u)):D(nc,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",u.version)}),{Bs:o,Ls:s}})}function tI(r,t){const e=M(r);return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(t===void 0&&(t=Ne),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}function or(r,t){const e=M(r);return e.persistence.runTransaction("Allocate target","readwrite",n=>{let s;return e.li.getTargetData(n,t).next(i=>i?(s=i,A.resolve(s)):e.li.allocateTargetId(n).next(o=>(s=new oe(t,o,"TargetPurposeListen",n.currentSequenceNumber),e.li.addTargetData(n,s).next(()=>s))))}).then(n=>{const s=e.vs.get(n.targetId);return(s===null||n.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.vs=e.vs.insert(n.targetId,n),e.Fs.set(t,n.targetId)),n})}async function ar(r,t,e){const n=M(r),s=n.vs.get(t),i=e?"readwrite":"readwrite-primary";try{e||await n.persistence.runTransaction("Release target",i,o=>n.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!$e(o))throw o;D(nc,`Failed to update sequence numbers for target ${t}: ${o}`)}n.vs=n.vs.remove(t),n.Fs.delete(s.target)}function Ci(r,t,e){const n=M(r);let s=U.min(),i=$();return n.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,f){const m=M(u),p=m.Fs.get(f);return p!==void 0?A.resolve(m.vs.get(p)):m.li.getTargetData(h,f)}(n,o,Nt(t)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,n.li.getMatchingKeysForTargetId(o,c.targetId).next(u=>{i=u})}).next(()=>n.Cs.getDocumentsMatchingQuery(o,t,e?s:U.min(),e?i:$())).next(c=>(Cf(n,Cd(t),c),{documents:c,ks:i})))}function Pf(r,t){const e=M(r),n=M(e.li),s=e.vs.get(t);return s?Promise.resolve(s.target):e.persistence.runTransaction("Get target data","readonly",i=>n.At(i,t).next(o=>o?o.target:null))}function Vf(r,t){const e=M(r),n=e.Ms.get(t)||U.min();return e.persistence.runTransaction("Get new document changes","readonly",s=>e.xs.getAllFromCollectionGroup(s,t,Kh(n,Qn),Number.MAX_SAFE_INTEGER)).then(s=>(Cf(e,t,s),s))}function Cf(r,t,e){let n=r.Ms.get(t)||U.min();e.forEach((s,i)=>{i.readTime.compareTo(n)>0&&(n=i.readTime)}),r.Ms.set(t,n)}async function eI(r,t,e,n){const s=M(r);let i=$(),o=Ut();for(const h of e){const f=t.qs(h.metadata.name);h.document&&(i=i.add(f));const m=t.Ks(h);m.setReadTime(t.Us(h.metadata.readTime)),o=o.insert(f,m)}const c=s.xs.newChangeBuffer({trackRemovals:!0}),u=await or(s,function(f){return Nt(gr(K.fromString(`__bundle__/docs/${f}`)))}(n));return s.persistence.runTransaction("Apply bundle documents","readwrite",h=>Sf(h,c,o).next(f=>(c.apply(h),f)).next(f=>s.li.removeMatchingKeysForTargetId(h,u.targetId).next(()=>s.li.addMatchingKeys(h,i,u.targetId)).next(()=>s.localDocuments.getLocalViewOfDocuments(h,f.Bs,f.Ls)).next(()=>f.Bs)))}async function nI(r,t,e=$()){const n=await or(r,Nt(Hi(t.bundledQuery))),s=M(r);return s.persistence.runTransaction("Save named query","readwrite",i=>{const o=pt(t.readTime);if(n.snapshotVersion.compareTo(o)>=0)return s.Pi.saveNamedQuery(i,t);const c=n.withResumeToken(ft.EMPTY_BYTE_STRING,o);return s.vs=s.vs.insert(c.targetId,c),s.li.updateTargetData(i,c).next(()=>s.li.removeMatchingKeysForTargetId(i,n.targetId)).next(()=>s.li.addMatchingKeys(i,e,n.targetId)).next(()=>s.Pi.saveNamedQuery(i,t))})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Df="firestore_clients";function Kl(r,t){return`${Df}_${r}_${t}`}const xf="firestore_mutations";function Ql(r,t,e){let n=`${xf}_${r}_${e}`;return t.isAuthenticated()&&(n+=`_${t.uid}`),n}const Nf="firestore_targets";function zo(r,t){return`${Nf}_${r}_${t}`}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const te="SharedClientState";class Di{constructor(t,e,n,s){this.user=t,this.batchId=e,this.state=n,this.error=s}static $s(t,e,n){const s=JSON.parse(n);let i,o=typeof s=="object"&&["pending","acknowledged","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return o&&s.error&&(o=typeof s.error.message=="string"&&typeof s.error.code=="string",o&&(i=new V(s.error.code,s.error.message))),o?new Di(t,e,s.state,i):(gt(te,`Failed to parse mutation state for ID '${e}': ${n}`),null)}Ws(){const t={state:this.state,updateTimeMs:Date.now()};return this.error&&(t.error={code:this.error.code,message:this.error.message}),JSON.stringify(t)}}class as{constructor(t,e,n){this.targetId=t,this.state=e,this.error=n}static $s(t,e){const n=JSON.parse(e);let s,i=typeof n=="object"&&["not-current","current","rejected"].indexOf(n.state)!==-1&&(n.error===void 0||typeof n.error=="object");return i&&n.error&&(i=typeof n.error.message=="string"&&typeof n.error.code=="string",i&&(s=new V(n.error.code,n.error.message))),i?new as(t,n.state,s):(gt(te,`Failed to parse target state for ID '${t}': ${e}`),null)}Ws(){const t={state:this.state,updateTimeMs:Date.now()};return this.error&&(t.error={code:this.error.code,message:this.error.message}),JSON.stringify(t)}}class xi{constructor(t,e){this.clientId=t,this.activeTargetIds=e}static $s(t,e){const n=JSON.parse(e);let s=typeof n=="object"&&n.activeTargetIds instanceof Array,i=qa();for(let o=0;s&&o<n.activeTargetIds.length;++o)s=Yh(n.activeTargetIds[o]),i=i.add(n.activeTargetIds[o]);return s?new xi(t,i):(gt(te,`Failed to parse client data for instance '${t}': ${e}`),null)}}class rc{constructor(t,e){this.clientId=t,this.onlineState=e}static $s(t){const e=JSON.parse(t);return typeof e=="object"&&["Unknown","Online","Offline"].indexOf(e.onlineState)!==-1&&typeof e.clientId=="string"?new rc(e.clientId,e.onlineState):(gt(te,`Failed to parse online state: ${t}`),null)}}class Ia{constructor(){this.activeTargetIds=qa()}Qs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ws(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class $o{constructor(t,e,n,s,i){this.window=t,this.Ci=e,this.persistenceKey=n,this.zs=s,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.js=this.Js.bind(this),this.Hs=new ot(z),this.started=!1,this.Zs=[];const o=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.Xs=Kl(this.persistenceKey,this.zs),this.Ys=function(u){return`firestore_sequence_number_${u}`}(this.persistenceKey),this.Hs=this.Hs.insert(this.zs,new Ia),this.eo=new RegExp(`^${Df}_${o}_([^_]*)$`),this.no=new RegExp(`^${xf}_${o}_(\\d+)(?:_(.*))?$`),this.ro=new RegExp(`^${Nf}_${o}_(\\d+)$`),this.io=function(u){return`firestore_online_state_${u}`}(this.persistenceKey),this.so=function(u){return`firestore_bundle_loaded_v2_${u}`}(this.persistenceKey),this.window.addEventListener("storage",this.js)}static v(t){return!(!t||!t.localStorage)}async start(){const t=await this.syncEngine.hs();for(const n of t){if(n===this.zs)continue;const s=this.getItem(Kl(this.persistenceKey,n));if(s){const i=xi.$s(n,s);i&&(this.Hs=this.Hs.insert(i.clientId,i))}}this.oo();const e=this.storage.getItem(this.io);if(e){const n=this._o(e);n&&this.ao(n)}for(const n of this.Zs)this.Js(n);this.Zs=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(t){this.setItem(this.Ys,JSON.stringify(t))}getAllActiveQueryTargets(){return this.uo(this.Hs)}isActiveQueryTarget(t){let e=!1;return this.Hs.forEach((n,s)=>{s.activeTargetIds.has(t)&&(e=!0)}),e}addPendingMutation(t){this.co(t,"pending")}updateMutationState(t,e,n){this.co(t,e,n),this.lo(t)}addLocalQueryTarget(t,e=!0){let n="not-current";if(this.isActiveQueryTarget(t)){const s=this.storage.getItem(zo(this.persistenceKey,t));if(s){const i=as.$s(t,s);i&&(n=i.state)}}return e&&this.ho.Qs(t),this.oo(),n}removeLocalQueryTarget(t){this.ho.Gs(t),this.oo()}isLocalQueryTarget(t){return this.ho.activeTargetIds.has(t)}clearQueryState(t){this.removeItem(zo(this.persistenceKey,t))}updateQueryState(t,e,n){this.Po(t,e,n)}handleUserChange(t,e,n){e.forEach(s=>{this.lo(s)}),this.currentUser=t,n.forEach(s=>{this.addPendingMutation(s)})}setOnlineState(t){this.To(t)}notifyBundleLoaded(t){this.Eo(t)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.js),this.removeItem(this.Xs),this.started=!1)}getItem(t){const e=this.storage.getItem(t);return D(te,"READ",t,e),e}setItem(t,e){D(te,"SET",t,e),this.storage.setItem(t,e)}removeItem(t){D(te,"REMOVE",t),this.storage.removeItem(t)}Js(t){const e=t;if(e.storageArea===this.storage){if(D(te,"EVENT",e.key,e.newValue),e.key===this.Xs)return void gt("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Ci.enqueueRetryable(async()=>{if(this.started){if(e.key!==null){if(this.eo.test(e.key)){if(e.newValue==null){const n=this.Io(e.key);return this.Ro(n,null)}{const n=this.Ao(e.key,e.newValue);if(n)return this.Ro(n.clientId,n)}}else if(this.no.test(e.key)){if(e.newValue!==null){const n=this.Vo(e.key,e.newValue);if(n)return this.mo(n)}}else if(this.ro.test(e.key)){if(e.newValue!==null){const n=this.fo(e.key,e.newValue);if(n)return this.po(n)}}else if(e.key===this.io){if(e.newValue!==null){const n=this._o(e.newValue);if(n)return this.ao(n)}}else if(e.key===this.Ys){const n=function(i){let o=Lt.ce;if(i!=null)try{const c=JSON.parse(i);L(typeof c=="number",30636,{yo:i}),o=c}catch(c){gt(te,"Failed to read sequence number from WebStorage",c)}return o}(e.newValue);n!==Lt.ce&&this.sequenceNumberHandler(n)}else if(e.key===this.so){const n=this.wo(e.newValue);await Promise.all(n.map(s=>this.syncEngine.So(s)))}}}else this.Zs.push(e)})}}get ho(){return this.Hs.get(this.zs)}oo(){this.setItem(this.Xs,this.ho.Ws())}co(t,e,n){const s=new Di(this.currentUser,t,e,n),i=Ql(this.persistenceKey,this.currentUser,t);this.setItem(i,s.Ws())}lo(t){const e=Ql(this.persistenceKey,this.currentUser,t);this.removeItem(e)}To(t){const e={clientId:this.zs,onlineState:t};this.storage.setItem(this.io,JSON.stringify(e))}Po(t,e,n){const s=zo(this.persistenceKey,t),i=new as(t,e,n);this.setItem(s,i.Ws())}Eo(t){const e=JSON.stringify(Array.from(t));this.setItem(this.so,e)}Io(t){const e=this.eo.exec(t);return e?e[1]:null}Ao(t,e){const n=this.Io(t);return xi.$s(n,e)}Vo(t,e){const n=this.no.exec(t),s=Number(n[1]),i=n[2]!==void 0?n[2]:null;return Di.$s(new bt(i),s,e)}fo(t,e){const n=this.ro.exec(t),s=Number(n[1]);return as.$s(s,e)}_o(t){return rc.$s(t)}wo(t){return JSON.parse(t)}async mo(t){if(t.user.uid===this.currentUser.uid)return this.syncEngine.bo(t.batchId,t.state,t.error);D(te,`Ignoring mutation for non-active user ${t.user.uid}`)}po(t){return this.syncEngine.Do(t.targetId,t.state,t.error)}Ro(t,e){const n=e?this.Hs.insert(t,e):this.Hs.remove(t),s=this.uo(this.Hs),i=this.uo(n),o=[],c=[];return i.forEach(u=>{s.has(u)||o.push(u)}),s.forEach(u=>{i.has(u)||c.push(u)}),this.syncEngine.Co(o,c).then(()=>{this.Hs=n})}ao(t){this.Hs.get(t.clientId)&&this.onlineStateHandler(t.onlineState)}uo(t){let e=qa();return t.forEach((n,s)=>{e=e.unionWith(s.activeTargetIds)}),e}}class kf{constructor(){this.vo=new Ia,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this.vo.Qs(t),this.Fo[t]||"not-current"}updateQueryState(t,e,n){this.Fo[t]=e}removeLocalQueryTarget(t){this.vo.Gs(t)}isLocalQueryTarget(t){return this.vo.activeTargetIds.has(t)}clearQueryState(t){delete this.Fo[t]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(t){return this.vo.activeTargetIds.has(t)}start(){return this.vo=new Ia,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rI{Mo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wl="ConnectivityMonitor";class Hl{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(t){this.Lo.push(t)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){D(Wl,"Network connectivity changed: AVAILABLE");for(const t of this.Lo)t(0)}Bo(){D(Wl,"Network connectivity changed: UNAVAILABLE");for(const t of this.Lo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let si=null;function Ea(){return si===null?si=function(){return 268435456+Math.round(2147483648*Math.random())}():si++,"0x"+si.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Go="RestConnection",sI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class iI{get qo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ko=e+"://"+t.host,this.Uo=`projects/${n}/databases/${s}`,this.$o=this.databaseId.database===ps?`project_id=${n}`:`project_id=${n}&database_id=${s}`}Wo(t,e,n,s,i){const o=Ea(),c=this.Qo(t,e.toUriEncodedString());D(Go,`Sending RPC '${t}' ${o}:`,c,n);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,s,i);const{host:h}=new URL(c),f=Ra(h);return this.zo(t,c,u,n,f).then(m=>(D(Go,`Received RPC '${t}' ${o}: `,m),m),m=>{throw zt(Go,`RPC '${t}' ${o} failed with error: `,m,"url: ",c,"request:",n),m})}jo(t,e,n,s,i,o){return this.Wo(t,e,n,s,i)}Go(t,e,n){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+mr}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((s,i)=>t[i]=s),n&&n.headers.forEach((s,i)=>t[i]=s)}Qo(t,e){const n=sI[t];let s=`${this.Ko}/v1/${e}:${n}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oI{constructor(t){this.Jo=t.Jo,this.Ho=t.Ho}Zo(t){this.Xo=t}Yo(t){this.e_=t}t_(t){this.n_=t}onMessage(t){this.r_=t}close(){this.Ho()}send(t){this.Jo(t)}i_(){this.Xo()}s_(){this.e_()}o_(t){this.n_(t)}__(t){this.r_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ct="WebChannelConnection",Qr=(r,t,e)=>{r.listen(t,n=>{try{e(n)}catch(s){setTimeout(()=>{throw s},0)}})};class zn extends iI{constructor(t){super(t),this.a_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}static u_(){if(!zn.c_){const t=Fh();Qr(t,Oh.STAT_EVENT,e=>{e.stat===Yo.PROXY?D(Ct,"STAT_EVENT: detected buffering proxy"):e.stat===Yo.NOPROXY&&D(Ct,"STAT_EVENT: detected no buffering proxy")}),zn.c_=!0}}zo(t,e,n,s,i){const o=Ea();return new Promise((c,u)=>{const h=new kh;h.setWithCredentials(!0),h.listenOnce(Mh.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case oi.NO_ERROR:const m=h.getResponseJson();D(Ct,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(m)),c(m);break;case oi.TIMEOUT:D(Ct,`RPC '${t}' ${o} timed out`),u(new V(R.DEADLINE_EXCEEDED,"Request time out"));break;case oi.HTTP_ERROR:const p=h.getStatus();if(D(Ct,`RPC '${t}' ${o} failed with status:`,p,"response text:",h.getResponseText()),p>0){let v=h.getResponseJson();Array.isArray(v)&&(v=v[0]);const C=v==null?void 0:v.error;if(C&&C.status&&C.message){const N=function(B){const j=B.toLowerCase().replace(/_/g,"-");return Object.values(R).indexOf(j)>=0?j:R.UNKNOWN}(C.status);u(new V(N,C.message))}else u(new V(R.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new V(R.UNAVAILABLE,"Connection failed."));break;default:F(9055,{l_:t,streamId:o,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{D(Ct,`RPC '${t}' ${o} completed.`)}});const f=JSON.stringify(s);D(Ct,`RPC '${t}' ${o} sending request:`,s),h.send(e,"POST",f,n,15)})}T_(t,e,n){const s=Ea(),i=[this.Ko,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=this.createWebChannelTransport(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Go(c.initMessageHeaders,e,n),c.encodeInitMessageHeaders=!0;const h=i.join("");D(Ct,`Creating RPC '${t}' stream ${s}: ${h}`,c);const f=o.createWebChannel(h,c);this.E_(f);let m=!1,p=!1;const v=new oI({Jo:C=>{p?D(Ct,`Not sending because RPC '${t}' stream ${s} is closed:`,C):(m||(D(Ct,`Opening RPC '${t}' stream ${s} transport.`),f.open(),m=!0),D(Ct,`RPC '${t}' stream ${s} sending:`,C),f.send(C))},Ho:()=>f.close()});return Qr(f,Wr.EventType.OPEN,()=>{p||(D(Ct,`RPC '${t}' stream ${s} transport opened.`),v.i_())}),Qr(f,Wr.EventType.CLOSE,()=>{p||(p=!0,D(Ct,`RPC '${t}' stream ${s} transport closed`),v.o_(),this.I_(f))}),Qr(f,Wr.EventType.ERROR,C=>{p||(p=!0,zt(Ct,`RPC '${t}' stream ${s} transport errored. Name:`,C.name,"Message:",C.message),v.o_(new V(R.UNAVAILABLE,"The operation could not be completed")))}),Qr(f,Wr.EventType.MESSAGE,C=>{var N;if(!p){const x=C.data[0];L(!!x,16349);const B=x,j=(B==null?void 0:B.error)||((N=B[0])==null?void 0:N.error);if(j){D(Ct,`RPC '${t}' stream ${s} received error:`,j);const q=j.status;let Z=function(E){const _=_t[E];if(_!==void 0)return Gd(_)}(q),Y=j.message;q==="NOT_FOUND"&&Y.includes("database")&&Y.includes("does not exist")&&Y.includes(this.databaseId.database)&&zt(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),Z===void 0&&(Z=R.INTERNAL,Y="Unknown error status: "+q+" with message "+j.message),p=!0,v.o_(new V(Z,Y)),f.close()}else D(Ct,`RPC '${t}' stream ${s} received:`,x),v.__(x)}}),zn.u_(),setTimeout(()=>{v.s_()},0),v}terminate(){this.a_.forEach(t=>t.close()),this.a_=[]}E_(t){this.a_.push(t)}I_(t){this.a_=this.a_.filter(e=>e===t)}Go(t,e,n){super.Go(t,e,n),this.databaseInfo.apiKey&&(t["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Lh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aI(r){return new zn(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mf(){return typeof window<"u"?window:null}function gi(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vn(r){return new fy(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */zn.c_=!1;class sc{constructor(t,e,n=1e3,s=1.5,i=6e4){this.Ci=t,this.timerId=e,this.R_=n,this.A_=s,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(t){this.cancel();const e=Math.floor(this.d_+this.y_()),n=Math.max(0,Date.now()-this.f_),s=Math.max(0,e-n);s>0&&D("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),t())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jl="PersistentStream";class Of{constructor(t,e,n,s,i,o,c,u){this.Ci=t,this.S_=n,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new sc(t,e)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(t){this.K_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.K_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():e&&e.code===R.RESOURCE_EXHAUSTED?(gt(e.toString()),gt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):e&&e.code===R.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.t_(e)}W_(){}auth(){this.state=1;const t=this.Q_(this.D_),e=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,s])=>{this.D_===e&&this.G_(n,s)},n=>{t(()=>{const s=new V(R.UNKNOWN,"Fetching auth token failed: "+n.message);return this.z_(s)})})}G_(t,e){const n=this.Q_(this.D_);this.stream=this.j_(t,e),this.stream.Zo(()=>{n(()=>this.listener.Zo())}),this.stream.Yo(()=>{n(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(s=>{n(()=>this.z_(s))}),this.stream.onMessage(s=>{n(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(t){return D(Jl,`close with error: ${t}`),this.stream=null,this.close(4,t)}Q_(t){return e=>{this.Ci.enqueueAndForget(()=>this.D_===t?e():(D(Jl,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class cI extends Of{constructor(t,e,n,s,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,s,o),this.serializer=i}j_(t,e){return this.connection.T_("Listen",t,e)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const e=py(this.serializer,t),n=function(i){if(!("targetChange"in i))return U.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?U.min():o.readTime?pt(o.readTime):U.min()}(t);return this.listener.H_(e,n)}Z_(t){const e={};e.database=ma(this.serializer),e.addTarget=function(i,o){let c;const u=o.target;if(c=Ai(u)?{documents:tf(i,u)}:{query:Wi(i,u).ft},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=Hd(i,o.resumeToken);const h=da(i,o.expectedCount);h!==null&&(c.expectedCount=h)}else if(o.snapshotVersion.compareTo(U.min())>0){c.readTime=ir(i,o.snapshotVersion.toTimestamp());const h=da(i,o.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,t);const n=yy(this.serializer,t);n&&(e.labels=n),this.q_(e)}X_(t){const e={};e.database=ma(this.serializer),e.removeTarget=t,this.q_(e)}}class uI extends Of{constructor(t,e,n,s,i,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,s,o),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(t,e){return this.connection.T_("Write",t,e)}J_(t){return L(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,L(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){L(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const e=_y(t.writeResults,t.commitTime),n=pt(t.commitTime);return this.listener.na(n,e)}ra(){const t={};t.database=ma(this.serializer),this.q_(t)}ea(t){const e={streamToken:this.lastStreamToken,writes:t.map(n=>Ts(this.serializer,n))};this.q_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lI{}class hI extends lI{constructor(t,e,n,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new V(R.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(t,e,n,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Wo(t,fa(e,n),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new V(R.UNKNOWN,i.toString())})}jo(t,e,n,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.jo(t,fa(e,n),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new V(R.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function dI(r,t,e,n){return new hI(r,t,e,n)}class fI{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(gt(e),this.aa=!1):D("OnlineStateTracker",e)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tn="RemoteStore";class mI{constructor(t,e,n,s,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=i,this.Aa.Mo(o=>{n.enqueueAndForget(async()=>{Ke(this)&&(D(Tn,"Restarting streams for network reachability change."),await async function(u){const h=M(u);h.Ia.add(4),await yr(h),h.Va.set("Unknown"),h.Ia.delete(4),await Ds(h)}(this))})}),this.Va=new fI(n,s)}}async function Ds(r){if(Ke(r))for(const t of r.Ra)await t(!0)}async function yr(r){for(const t of r.Ra)await t(!1)}function Zi(r,t){const e=M(r);e.Ea.has(t.targetId)||(e.Ea.set(t.targetId,t),ac(e)?oc(e):Er(e).O_()&&ic(e,t))}function cr(r,t){const e=M(r),n=Er(e);e.Ea.delete(t),n.O_()&&Ff(e,t),e.Ea.size===0&&(n.O_()?n.L_():Ke(e)&&e.Va.set("Unknown"))}function ic(r,t){if(r.da.$e(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(U.min())>0){const e=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Er(r).Z_(t)}function Ff(r,t){r.da.$e(t),Er(r).X_(t)}function oc(r){r.da=new uy({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),At:t=>r.Ea.get(t)||null,ht:()=>r.datastore.serializer.databaseId}),Er(r).start(),r.Va.ua()}function ac(r){return Ke(r)&&!Er(r).x_()&&r.Ea.size>0}function Ke(r){return M(r).Ia.size===0}function Lf(r){r.da=void 0}async function gI(r){r.Va.set("Online")}async function pI(r){r.Ea.forEach((t,e)=>{ic(r,t)})}async function _I(r,t){Lf(r),ac(r)?(r.Va.ha(t),oc(r)):r.Va.set("Unknown")}async function yI(r,t,e){if(r.Va.set("Online"),t instanceof Wd&&t.state===2&&t.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.Ea.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.Ea.delete(c),s.da.removeTarget(c))}(r,t)}catch(n){D(Tn,"Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Ni(r,n)}else if(t instanceof fi?r.da.Xe(t):t instanceof Qd?r.da.st(t):r.da.tt(t),!e.isEqual(U.min()))try{const n=await Rf(r.localStore);e.compareTo(n)>=0&&await function(i,o){const c=i.da.Tt(o);return c.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=i.Ea.get(h);f&&i.Ea.set(h,f.withResumeToken(u.resumeToken,o))}}),c.targetMismatches.forEach((u,h)=>{const f=i.Ea.get(u);if(!f)return;i.Ea.set(u,f.withResumeToken(ft.EMPTY_BYTE_STRING,f.snapshotVersion)),Ff(i,u);const m=new oe(f.target,u,h,f.sequenceNumber);ic(i,m)}),i.remoteSyncer.applyRemoteEvent(c)}(r,e)}catch(n){D(Tn,"Failed to raise snapshot:",n),await Ni(r,n)}}async function Ni(r,t,e){if(!$e(t))throw t;r.Ia.add(1),await yr(r),r.Va.set("Offline"),e||(e=()=>Rf(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{D(Tn,"Retrying IndexedDB access"),await e(),r.Ia.delete(1),await Ds(r)})}function Bf(r,t){return t().catch(e=>Ni(r,e,t))}async function Ir(r){const t=M(r),e=Ue(t);let n=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:Ne;for(;II(t);)try{const s=await tI(t.localStore,n);if(s===null){t.Ta.length===0&&e.L_();break}n=s.batchId,EI(t,s)}catch(s){await Ni(t,s)}Uf(t)&&qf(t)}function II(r){return Ke(r)&&r.Ta.length<10}function EI(r,t){r.Ta.push(t);const e=Ue(r);e.O_()&&e.Y_&&e.ea(t.mutations)}function Uf(r){return Ke(r)&&!Ue(r).x_()&&r.Ta.length>0}function qf(r){Ue(r).start()}async function TI(r){Ue(r).ra()}async function wI(r){const t=Ue(r);for(const e of r.Ta)t.ea(e.mutations)}async function AI(r,t,e){const n=r.Ta.shift(),s=Ga.from(n,t,e);await Bf(r,()=>r.remoteSyncer.applySuccessfulWrite(s)),await Ir(r)}async function vI(r,t){t&&Ue(r).Y_&&await async function(n,s){if(function(o){return $d(o)&&o!==R.ABORTED}(s.code)){const i=n.Ta.shift();Ue(n).B_(),await Bf(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ir(n)}}(r,t),Uf(r)&&qf(r)}async function Yl(r,t){const e=M(r);e.asyncQueue.verifyOperationInProgress(),D(Tn,"RemoteStore received new credentials");const n=Ke(e);e.Ia.add(3),await yr(e),n&&e.Va.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ia.delete(3),await Ds(e)}async function Ta(r,t){const e=M(r);t?(e.Ia.delete(2),await Ds(e)):t||(e.Ia.add(2),await yr(e),e.Va.set("Unknown"))}function Er(r){return r.ma||(r.ma=function(e,n,s){const i=M(e);return i.sa(),new cI(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(r.datastore,r.asyncQueue,{Zo:gI.bind(null,r),Yo:pI.bind(null,r),t_:_I.bind(null,r),H_:yI.bind(null,r)}),r.Ra.push(async t=>{t?(r.ma.B_(),ac(r)?oc(r):r.Va.set("Unknown")):(await r.ma.stop(),Lf(r))})),r.ma}function Ue(r){return r.fa||(r.fa=function(e,n,s){const i=M(e);return i.sa(),new uI(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(r.datastore,r.asyncQueue,{Zo:()=>Promise.resolve(),Yo:TI.bind(null,r),t_:vI.bind(null,r),ta:wI.bind(null,r),na:AI.bind(null,r)}),r.Ra.push(async t=>{t?(r.fa.B_(),await Ir(r)):(await r.fa.stop(),r.Ta.length>0&&(D(Tn,`Stopping write stream with ${r.Ta.length} pending writes`),r.Ta=[]))})),r.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(t,e,n,s,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new St,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,s,i){const o=Date.now()+n,c=new cc(t,e,o,s,i);return c.start(n),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new V(R.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Tr(r,t){if(gt("AsyncQueue",`${t}: ${r}`),$e(r))return new V(R.UNAVAILABLE,`${t}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{static emptySet(t){return new fn(t.comparator)}constructor(t){this.comparator=t?(e,n)=>t(e,n)||k.comparator(e.key,n.key):(e,n)=>k.comparator(e.key,n.key),this.keyedMap=Hr(),this.sortedSet=new ot(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof fn)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,i=n.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const n=new fn;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(){this.ga=new ot(k.comparator)}track(t){const e=t.doc.key,n=this.ga.get(e);n?t.type!==0&&n.type===3?this.ga=this.ga.insert(e,t):t.type===3&&n.type!==1?this.ga=this.ga.insert(e,{type:n.type,doc:t.doc}):t.type===2&&n.type===2?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):t.type===2&&n.type===0?this.ga=this.ga.insert(e,{type:0,doc:t.doc}):t.type===1&&n.type===0?this.ga=this.ga.remove(e):t.type===1&&n.type===2?this.ga=this.ga.insert(e,{type:1,doc:n.doc}):t.type===0&&n.type===1?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):F(63341,{Vt:t,pa:n}):this.ga=this.ga.insert(e,t)}ya(){const t=[];return this.ga.inorderTraversal((e,n)=>{t.push(n)}),t}}class wn{constructor(t,e,n,s,i,o,c,u,h){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(t,e,n,s,i){const o=[];return e.forEach(c=>{o.push({type:0,doc:c})}),new wn(t,e,fn.emptySet(e),o,n,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Rs(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==n[s].type||!e[s].doc.isEqual(n[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bI{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(t=>t.Da())}}class RI{constructor(){this.queries=Zl(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(e,n){const s=M(e),i=s.queries;s.queries=Zl(),i.forEach((o,c)=>{for(const u of c.Sa)u.onError(n)})})(this,new V(R.ABORTED,"Firestore shutting down"))}}function Zl(){return new fe(r=>Vd(r),Rs)}async function uc(r,t){const e=M(r);let n=3;const s=t.query;let i=e.queries.get(s);i?!i.ba()&&t.Da()&&(n=2):(i=new bI,n=t.Da()?0:1);try{switch(n){case 0:i.wa=await e.onListen(s,!0);break;case 1:i.wa=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(o){const c=Tr(o,`Initialization of query '${Bn(t.query)}' failed`);return void t.onError(c)}e.queries.set(s,i),i.Sa.push(t),t.va(e.onlineState),i.wa&&t.Fa(i.wa)&&hc(e)}async function lc(r,t){const e=M(r),n=t.query;let s=3;const i=e.queries.get(n);if(i){const o=i.Sa.indexOf(t);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=t.Da()?0:1:!i.ba()&&t.Da()&&(s=2))}switch(s){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function SI(r,t){const e=M(r);let n=!1;for(const s of t){const i=s.query,o=e.queries.get(i);if(o){for(const c of o.Sa)c.Fa(s)&&(n=!0);o.wa=s}}n&&hc(e)}function PI(r,t,e){const n=M(r),s=n.queries.get(t);if(s)for(const i of s.Sa)i.onError(e);n.queries.delete(t)}function hc(r){r.Ca.forEach(t=>{t.next()})}var wa,th;(th=wa||(wa={})).Ma="default",th.Cache="cache";class dc{constructor(t,e,n){this.query=t,this.xa=e,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=n||{}}Fa(t){if(!this.options.includeMetadataChanges){const n=[];for(const s of t.docChanges)s.type!==3&&n.push(s);t=new wn(t.query,t.docs,t.oldDocs,n,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),e=!0):this.La(t,this.onlineState)&&(this.ka(t),e=!0),this.Na=t,e}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let e=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),e=!0),e}La(t,e){if(!t.fromCache||!this.Da())return!0;const n=e!=="Offline";return(!this.options.qa||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Ba(t){if(t.docChanges.length>0)return!0;const e=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}ka(t){t=wn.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==wa.Cache}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{constructor(t,e){this.Ka=t,this.byteLength=e}Ua(){return"metadata"in this.Ka}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(t){this.serializer=t}qs(t){return se(this.serializer,t)}Ks(t){return t.metadata.exists?Qi(this.serializer,t.document,!1):ct.newNoDocument(this.qs(t.metadata.name),this.Us(t.metadata.readTime))}Us(t){return pt(t)}}class fc{constructor(t,e){this.$a=t,this.serializer=e,this.Wa=[],this.Qa=[],this.collectionGroups=new Set,this.progress=zf(t)}get queries(){return this.Wa}get documents(){return this.Qa}Ga(t){this.progress.bytesLoaded+=t.byteLength;let e=this.progress.documentsLoaded;if(t.Ka.namedQuery)this.Wa.push(t.Ka.namedQuery);else if(t.Ka.documentMetadata){this.Qa.push({metadata:t.Ka.documentMetadata}),t.Ka.documentMetadata.exists||++e;const n=K.fromString(t.Ka.documentMetadata.name);this.collectionGroups.add(n.get(n.length-2))}else t.Ka.document&&(this.Qa[this.Qa.length-1].document=t.Ka.document,++e);return e!==this.progress.documentsLoaded?(this.progress.documentsLoaded=e,{...this.progress}):null}za(t){const e=new Map,n=new eh(this.serializer);for(const s of t)if(s.metadata.queries){const i=n.qs(s.metadata.name);for(const o of s.metadata.queries){const c=(e.get(o)||$()).add(i);e.set(o,c)}}return e}async ja(t){const e=await eI(t,new eh(this.serializer),this.Qa,this.$a.id),n=this.za(this.documents);for(const s of this.Wa)await nI(t,s,n.get(s.name));return this.progress.taskState="Success",{progress:this.progress,Ja:this.collectionGroups,Ha:e}}}function zf(r){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:r.totalDocuments,totalBytes:r.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{constructor(t){this.key=t}}class Gf{constructor(t){this.key=t}}class Kf{constructor(t,e){this.query=t,this.Za=e,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=$(),this.mutatedKeys=$(),this.eu=Dd(t),this.tu=new fn(this.eu)}get nu(){return this.Za}ru(t,e){const n=e?e.iu:new Xl,s=e?e.tu:this.tu;let i=e?e.mutatedKeys:this.mutatedKeys,o=s,c=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((f,m)=>{const p=s.get(f),v=Ss(this.query,m)?m:null,C=!!p&&this.mutatedKeys.has(p.key),N=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let x=!1;p&&v?p.data.isEqual(v.data)?C!==N&&(n.track({type:3,doc:v}),x=!0):this.su(p,v)||(n.track({type:2,doc:v}),x=!0,(u&&this.eu(v,u)>0||h&&this.eu(v,h)<0)&&(c=!0)):!p&&v?(n.track({type:0,doc:v}),x=!0):p&&!v&&(n.track({type:1,doc:p}),x=!0,(u||h)&&(c=!0)),x&&(v?(o=o.add(v),i=N?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),n.track({type:1,doc:f})}return{tu:o,iu:n,bs:c,mutatedKeys:i}}su(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,s){const i=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const o=t.iu.ya();o.sort((f,m)=>function(v,C){const N=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return F(20277,{Vt:x})}};return N(v)-N(C)}(f.type,m.type)||this.eu(f.doc,m.doc)),this.ou(n),s=s??!1;const c=e&&!s?this._u():[],u=this.Ya.size===0&&this.current&&!s?1:0,h=u!==this.Xa;return this.Xa=u,o.length!==0||h?{snapshot:new wn(this.query,t.tu,i,o,t.mutatedKeys,u===0,h,!1,!!n&&n.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Xl,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{au:[]}}uu(t){return!this.Za.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach(e=>this.Za=this.Za.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Za=this.Za.delete(e)),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Ya;this.Ya=$(),this.tu.forEach(n=>{this.uu(n.key)&&(this.Ya=this.Ya.add(n.key))});const e=[];return t.forEach(n=>{this.Ya.has(n)||e.push(new Gf(n))}),this.Ya.forEach(n=>{t.has(n)||e.push(new $f(n))}),e}cu(t){this.Za=t.ks,this.Ya=$();const e=this.ru(t.documents);return this.applyChanges(e,!0)}lu(){return wn.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const Qe="SyncEngine";class VI{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class CI{constructor(t){this.key=t,this.hu=!1}}class DI{constructor(t,e,n,s,i,o){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new fe(c=>Vd(c),Rs),this.Eu=new Map,this.Iu=new Set,this.Ru=new ot(k.comparator),this.Au=new Map,this.Vu=new Ya,this.du={},this.mu=new Map,this.fu=En.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function xI(r,t,e=!0){const n=to(r);let s;const i=n.Tu.get(t);return i?(n.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await Qf(n,t,e,!0),s}async function NI(r,t){const e=to(r);await Qf(e,t,!0,!1)}async function Qf(r,t,e,n){const s=await or(r.localStore,Nt(t)),i=s.targetId,o=r.sharedClientState.addLocalQueryTarget(i,e);let c;return n&&(c=await mc(r,t,i,o==="current",s.resumeToken)),r.isPrimaryClient&&e&&Zi(r.remoteStore,s),c}async function mc(r,t,e,n,s){r.pu=(m,p,v)=>async function(N,x,B,j){let q=x.view.ru(B);q.bs&&(q=await Ci(N.localStore,x.query,!1).then(({documents:E})=>x.view.ru(E,q)));const Z=j&&j.targetChanges.get(x.targetId),Y=j&&j.targetMismatches.get(x.targetId)!=null,X=x.view.applyChanges(q,N.isPrimaryClient,Z,Y);return Aa(N,x.targetId,X.au),X.snapshot}(r,m,p,v);const i=await Ci(r.localStore,t,!0),o=new Kf(t,i.ks),c=o.ru(i.documents),u=Cs.createSynthesizedTargetChangeForCurrentChange(e,n&&r.onlineState!=="Offline",s),h=o.applyChanges(c,r.isPrimaryClient,u);Aa(r,e,h.au);const f=new VI(t,e,o);return r.Tu.set(t,f),r.Eu.has(e)?r.Eu.get(e).push(t):r.Eu.set(e,[t]),h.snapshot}async function kI(r,t,e){const n=M(r),s=n.Tu.get(t),i=n.Eu.get(s.targetId);if(i.length>1)return n.Eu.set(s.targetId,i.filter(o=>!Rs(o,t))),void n.Tu.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await ar(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),e&&cr(n.remoteStore,s.targetId),ur(n,s.targetId)}).catch(ze)):(ur(n,s.targetId),await ar(n.localStore,s.targetId,!0))}async function MI(r,t){const e=M(r),n=e.Tu.get(t),s=e.Eu.get(n.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),cr(e.remoteStore,n.targetId))}async function OI(r,t,e){const n=yc(r);try{const s=await function(o,c){const u=M(o),h=tt.now(),f=c.reduce((v,C)=>v.add(C.key),$());let m,p;return u.persistence.runTransaction("Locally write mutations","readwrite",v=>{let C=Ut(),N=$();return u.xs.getEntries(v,f).next(x=>{C=x,C.forEach((B,j)=>{j.isValidDocument()||(N=N.add(B))})}).next(()=>u.localDocuments.getOverlayedDocuments(v,C)).next(x=>{m=x;const B=[];for(const j of c){const q=iy(j,m.get(j.key).overlayedDocument);q!=null&&B.push(new me(j.key,q,yd(q.value.mapValue),ht.exists(!0)))}return u.mutationQueue.addMutationBatch(v,h,B,c)}).next(x=>{p=x;const B=x.applyToLocalDocumentSet(m,N);return u.documentOverlayCache.saveOverlays(v,x.batchId,B)})}).then(()=>({batchId:p.batchId,changes:Nd(m)}))}(n.localStore,t);n.sharedClientState.addPendingMutation(s.batchId),function(o,c,u){let h=o.du[o.currentUser.toKey()];h||(h=new ot(z)),h=h.insert(c,u),o.du[o.currentUser.toKey()]=h}(n,s.batchId,e),await ge(n,s.changes),await Ir(n.remoteStore)}catch(s){const i=Tr(s,"Failed to persist write");e.reject(i)}}async function Wf(r,t){const e=M(r);try{const n=await Zy(e.localStore,t);t.targetChanges.forEach((s,i)=>{const o=e.Au.get(i);o&&(L(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?L(o.hu,14607):s.removedDocuments.size>0&&(L(o.hu,42227),o.hu=!1))}),await ge(e,n,t)}catch(n){await ze(n)}}function nh(r,t,e){const n=M(r);if(n.isPrimaryClient&&e===0||!n.isPrimaryClient&&e===1){const s=[];n.Tu.forEach((i,o)=>{const c=o.view.va(t);c.snapshot&&s.push(c.snapshot)}),function(o,c){const u=M(o);u.onlineState=c;let h=!1;u.queries.forEach((f,m)=>{for(const p of m.Sa)p.va(c)&&(h=!0)}),h&&hc(u)}(n.eventManager,t),s.length&&n.Pu.H_(s),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function FI(r,t,e){const n=M(r);n.sharedClientState.updateQueryState(t,"rejected",e);const s=n.Au.get(t),i=s&&s.key;if(i){let o=new ot(k.comparator);o=o.insert(i,ct.newNoDocument(i,U.min()));const c=$().add(i),u=new Vs(U.min(),new Map,new ot(z),o,c);await Wf(n,u),n.Ru=n.Ru.remove(i),n.Au.delete(t),_c(n)}else await ar(n.localStore,t,!1).then(()=>ur(n,t,e)).catch(ze)}async function LI(r,t){const e=M(r),n=t.batch.batchId;try{const s=await Xy(e.localStore,t);pc(e,n,null),gc(e,n),e.sharedClientState.updateMutationState(n,"acknowledged"),await ge(e,s)}catch(s){await ze(s)}}async function BI(r,t,e){const n=M(r);try{const s=await function(o,c){const u=M(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,c).next(m=>(L(m!==null,37113),f=m.keys(),u.mutationQueue.removeMutationBatch(h,m))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,c)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(n.localStore,t);pc(n,t,e),gc(n,t),n.sharedClientState.updateMutationState(t,"rejected",e),await ge(n,s)}catch(s){await ze(s)}}async function UI(r,t){const e=M(r);Ke(e.remoteStore)||D(Qe,"The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const n=await function(o){const c=M(o);return c.persistence.runTransaction("Get highest unacknowledged batch id","readonly",u=>c.mutationQueue.getHighestUnacknowledgedBatchId(u))}(e.localStore);if(n===Ne)return void t.resolve();const s=e.mu.get(n)||[];s.push(t),e.mu.set(n,s)}catch(n){const s=Tr(n,"Initialization of waitForPendingWrites() operation failed");t.reject(s)}}function gc(r,t){(r.mu.get(t)||[]).forEach(e=>{e.resolve()}),r.mu.delete(t)}function pc(r,t,e){const n=M(r);let s=n.du[n.currentUser.toKey()];if(s){const i=s.get(t);i&&(e?i.reject(e):i.resolve(),s=s.remove(t)),n.du[n.currentUser.toKey()]=s}}function ur(r,t,e=null){r.sharedClientState.removeLocalQueryTarget(t);for(const n of r.Eu.get(t))r.Tu.delete(n),e&&r.Pu.yu(n,e);r.Eu.delete(t),r.isPrimaryClient&&r.Vu.Gr(t).forEach(n=>{r.Vu.containsKey(n)||Hf(r,n)})}function Hf(r,t){r.Iu.delete(t.path.canonicalString());const e=r.Ru.get(t);e!==null&&(cr(r.remoteStore,e),r.Ru=r.Ru.remove(t),r.Au.delete(e),_c(r))}function Aa(r,t,e){for(const n of e)n instanceof $f?(r.Vu.addReference(n.key,t),qI(r,n)):n instanceof Gf?(D(Qe,"Document no longer in limbo: "+n.key),r.Vu.removeReference(n.key,t),r.Vu.containsKey(n.key)||Hf(r,n.key)):F(19791,{wu:n})}function qI(r,t){const e=t.key,n=e.path.canonicalString();r.Ru.get(e)||r.Iu.has(n)||(D(Qe,"New document in limbo: "+e),r.Iu.add(n),_c(r))}function _c(r){for(;r.Iu.size>0&&r.Ru.size<r.maxConcurrentLimboResolutions;){const t=r.Iu.values().next().value;r.Iu.delete(t);const e=new k(K.fromString(t)),n=r.fu.next();r.Au.set(n,new CI(e)),r.Ru=r.Ru.insert(e,n),Zi(r.remoteStore,new oe(Nt(gr(e.path)),n,"TargetPurposeLimboResolution",Lt.ce))}}async function ge(r,t,e){const n=M(r),s=[],i=[],o=[];n.Tu.isEmpty()||(n.Tu.forEach((c,u)=>{o.push(n.pu(u,t,e).then(h=>{var f;if((h||e)&&n.isPrimaryClient){const m=h?!h.fromCache:(f=e==null?void 0:e.targetChanges.get(u.targetId))==null?void 0:f.current;n.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(h){s.push(h);const m=ec.Is(u.targetId,h);i.push(m)}}))}),await Promise.all(o),n.Pu.H_(s),await async function(u,h){const f=M(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>A.forEach(h,p=>A.forEach(p.Ts,v=>f.persistence.referenceDelegate.addReference(m,p.targetId,v)).next(()=>A.forEach(p.Es,v=>f.persistence.referenceDelegate.removeReference(m,p.targetId,v)))))}catch(m){if(!$e(m))throw m;D(nc,"Failed to update sequence numbers: "+m)}for(const m of h){const p=m.targetId;if(!m.fromCache){const v=f.vs.get(p),C=v.snapshotVersion,N=v.withLastLimboFreeSnapshotVersion(C);f.vs=f.vs.insert(p,N)}}}(n.localStore,i))}async function jI(r,t){const e=M(r);if(!e.currentUser.isEqual(t)){D(Qe,"User change. New user:",t.toKey());const n=await bf(e.localStore,t);e.currentUser=t,function(i,o){i.mu.forEach(c=>{c.forEach(u=>{u.reject(new V(R.CANCELLED,o))})}),i.mu.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await ge(e,n.Ns)}}function zI(r,t){const e=M(r),n=e.Au.get(t);if(n&&n.hu)return $().add(n.key);{let s=$();const i=e.Eu.get(t);if(!i)return s;for(const o of i){const c=e.Tu.get(o);s=s.unionWith(c.view.nu)}return s}}async function $I(r,t){const e=M(r),n=await Ci(e.localStore,t.query,!0),s=t.view.cu(n);return e.isPrimaryClient&&Aa(e,t.targetId,s.au),s}async function GI(r,t){const e=M(r);return Vf(e.localStore,t).then(n=>ge(e,n))}async function KI(r,t,e,n){const s=M(r),i=await function(c,u){const h=M(c),f=M(h.mutationQueue);return h.persistence.runTransaction("Lookup mutation documents","readonly",m=>f.Xn(m,u).next(p=>p?h.localDocuments.getDocuments(m,p):A.resolve(null)))}(s.localStore,t);i!==null?(e==="pending"?await Ir(s.remoteStore):e==="acknowledged"||e==="rejected"?(pc(s,t,n||null),gc(s,t),function(c,u){M(M(c).mutationQueue).nr(u)}(s.localStore,t)):F(6720,"Unknown batchState",{Su:e}),await ge(s,i)):D(Qe,"Cannot apply mutation batch with id: "+t)}async function QI(r,t){const e=M(r);if(to(e),yc(e),t===!0&&e.gu!==!0){const n=e.sharedClientState.getAllActiveQueryTargets(),s=await rh(e,n.toArray());e.gu=!0,await Ta(e.remoteStore,!0);for(const i of s)Zi(e.remoteStore,i)}else if(t===!1&&e.gu!==!1){const n=[];let s=Promise.resolve();e.Eu.forEach((i,o)=>{e.sharedClientState.isLocalQueryTarget(o)?n.push(o):s=s.then(()=>(ur(e,o),ar(e.localStore,o,!0))),cr(e.remoteStore,o)}),await s,await rh(e,n),function(o){const c=M(o);c.Au.forEach((u,h)=>{cr(c.remoteStore,h)}),c.Vu.zr(),c.Au=new Map,c.Ru=new ot(k.comparator)}(e),e.gu=!1,await Ta(e.remoteStore,!1)}}async function rh(r,t,e){const n=M(r),s=[],i=[];for(const o of t){let c;const u=n.Eu.get(o);if(u&&u.length!==0){c=await or(n.localStore,Nt(u[0]));for(const h of u){const f=n.Tu.get(h),m=await $I(n,f);m.snapshot&&i.push(m.snapshot)}}else{const h=await Pf(n.localStore,o);c=await or(n.localStore,h),await mc(n,Jf(h),o,!1,c.resumeToken)}s.push(c)}return n.Pu.H_(i),s}function Jf(r){return Rd(r.path,r.collectionGroup,r.orderBy,r.filters,r.limit,"F",r.startAt,r.endAt)}function WI(r){return function(e){return M(M(e).persistence).hs()}(M(r).localStore)}async function HI(r,t,e,n){const s=M(r);if(s.gu)return void D(Qe,"Ignoring unexpected query state notification.");const i=s.Eu.get(t);if(i&&i.length>0)switch(e){case"current":case"not-current":{const o=await Vf(s.localStore,Cd(i[0])),c=Vs.createSynthesizedRemoteEventForCurrentChange(t,e==="current",ft.EMPTY_BYTE_STRING);await ge(s,o,c);break}case"rejected":await ar(s.localStore,t,!0),ur(s,t,n);break;default:F(64155,e)}}async function JI(r,t,e){const n=to(r);if(n.gu){for(const s of t){if(n.Eu.has(s)&&n.sharedClientState.isActiveQueryTarget(s)){D(Qe,"Adding an already active target "+s);continue}const i=await Pf(n.localStore,s),o=await or(n.localStore,i);await mc(n,Jf(i),o.targetId,!1,o.resumeToken),Zi(n.remoteStore,o)}for(const s of e)n.Eu.has(s)&&await ar(n.localStore,s,!1).then(()=>{cr(n.remoteStore,s),ur(n,s)}).catch(ze)}}function to(r){const t=M(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=Wf.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=zI.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=FI.bind(null,t),t.Pu.H_=SI.bind(null,t.eventManager),t.Pu.yu=PI.bind(null,t.eventManager),t}function yc(r){const t=M(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=LI.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=BI.bind(null,t),t}function YI(r,t,e){const n=M(r);(async function(i,o,c){try{const u=await o.getMetadata();if(await function(v,C){const N=M(v),x=pt(C.createTime);return N.persistence.runTransaction("hasNewerBundle","readonly",B=>N.Pi.getBundleMetadata(B,C.id)).then(B=>!!B&&B.createTime.compareTo(x)>=0)}(i.localStore,u))return await o.close(),c._completeWith(function(v){return{taskState:"Success",documentsLoaded:v.totalDocuments,bytesLoaded:v.totalBytes,totalDocuments:v.totalDocuments,totalBytes:v.totalBytes}}(u)),Promise.resolve(new Set);c._updateProgress(zf(u));const h=new fc(u,o.serializer);let f=await o.bu();for(;f;){const p=await h.Ga(f);p&&c._updateProgress(p),f=await o.bu()}const m=await h.ja(i.localStore);return await ge(i,m.Ha,void 0),await function(v,C){const N=M(v);return N.persistence.runTransaction("Save bundle","readwrite",x=>N.Pi.saveBundleMetadata(x,C))}(i.localStore,u),c._completeWith(m.progress),Promise.resolve(m.Ja)}catch(u){return zt(Qe,`Loading bundle failed with ${u}`),c._failWith(u),Promise.resolve(new Set)}})(n,t,e).then(s=>{n.sharedClientState.notifyBundleLoaded(s)})}class lr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=vn(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,e){return null}Mu(t,e){return null}vu(t){return vf(this.persistence,new Af,t.initialUser,this.serializer)}Cu(t){return new Xa(Xi.Vi,this.serializer)}Du(t){return new kf}async terminate(){var t,e;(t=this.gcScheduler)==null||t.stop(),(e=this.indexBackfillerScheduler)==null||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}lr.provider={build:()=>new lr};class Ic extends lr{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,e){L(this.persistence.referenceDelegate instanceof Vi,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new _f(n,t.asyncQueue,e)}Cu(t){const e=this.cacheSizeBytes!==void 0?Dt.withCacheSize(this.cacheSizeBytes):Dt.DEFAULT;return new Xa(n=>Vi.Vi(n,e),this.serializer)}}class Ec extends lr{constructor(t,e,n){super(),this.xu=t,this.cacheSizeBytes=e,this.forceOwnership=n,this.kind="persistent",this.synchronizeTabs=!1}async initialize(t){await super.initialize(t),await this.xu.initialize(this,t),await yc(this.xu.syncEngine),await Ir(this.xu.remoteStore),await this.persistence.zi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}vu(t){return vf(this.persistence,new Af,t.initialUser,this.serializer)}Fu(t,e){const n=this.persistence.referenceDelegate.garbageCollector;return new _f(n,t.asyncQueue,e)}Mu(t,e){const n=new s_(e,this.persistence);return new r_(t.asyncQueue,n)}Cu(t){const e=tc(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey),n=this.cacheSizeBytes!==void 0?Dt.withCacheSize(this.cacheSizeBytes):Dt.DEFAULT;return new Za(this.synchronizeTabs,e,t.clientId,n,t.asyncQueue,Mf(),gi(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Du(t){return new kf}}class Yf extends Ec{constructor(t,e){super(t,e,!1),this.xu=t,this.cacheSizeBytes=e,this.synchronizeTabs=!0}async initialize(t){await super.initialize(t);const e=this.xu.syncEngine;this.sharedClientState instanceof $o&&(this.sharedClientState.syncEngine={bo:KI.bind(null,e),Do:HI.bind(null,e),Co:JI.bind(null,e),hs:WI.bind(null,e),So:GI.bind(null,e)},await this.sharedClientState.start()),await this.persistence.zi(async n=>{await QI(this.xu.syncEngine,n),this.gcScheduler&&(n&&!this.gcScheduler.started?this.gcScheduler.start():n||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(n&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():n||this.indexBackfillerScheduler.stop())})}Du(t){const e=Mf();if(!$o.v(e))throw new V(R.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=tc(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey);return new $o(e,t.asyncQueue,n,t.clientId,t.initialUser)}}class qe{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>nh(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=jI.bind(null,this.syncEngine),await Ta(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new RI}()}createDatastore(t){const e=vn(t.databaseInfo.databaseId),n=aI(t.databaseInfo);return dI(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(n,s,i,o,c){return new mI(n,s,i,o,c)}(this.localStore,this.datastore,t.asyncQueue,e=>nh(this.syncEngine,e,0),function(){return Hl.v()?new Hl:new rI}())}createSyncEngine(t,e){return function(s,i,o,c,u,h,f){const m=new DI(s,i,o,c,u,h);return f&&(m.gu=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const i=M(s);D(Tn,"RemoteStore shutting down."),i.Ia.add(5),await yr(i),i.Aa.shutdown(),i.Va.set("Unknown")}(this.remoteStore),(t=this.datastore)==null||t.terminate(),(e=this.eventManager)==null||e.terminate()}}qe.provider={build:()=>new qe};function sh(r,t=10240){let e=0;return{async read(){if(e<r.byteLength){const n={value:r.slice(e,e+t),done:!1};return e+=t,n}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):gt("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XI{constructor(t,e){this.Bu=t,this.serializer=e,this.metadata=new St,this.buffer=new Uint8Array,this.Lu=function(){return new TextDecoder("utf-8")}(),this.ku().then(n=>{n&&n.Ua()?this.metadata.resolve(n.Ka.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(n==null?void 0:n.Ka)}`))},n=>this.metadata.reject(n))}close(){return this.Bu.cancel()}async getMetadata(){return this.metadata.promise}async bu(){return await this.getMetadata(),this.ku()}async ku(){const t=await this.qu();if(t===null)return null;const e=this.Lu.decode(t),n=Number(e);isNaN(n)&&this.Ku(`length string (${e}) is not valid number`);const s=await this.Uu(n);return new jf(JSON.parse(s),t.length+n)}$u(){return this.buffer.findIndex(t=>t==="{".charCodeAt(0))}async qu(){for(;this.$u()<0&&!await this.Wu(););if(this.buffer.length===0)return null;const t=this.$u();t<0&&this.Ku("Reached the end of bundle when a length string is expected.");const e=this.buffer.slice(0,t);return this.buffer=this.buffer.slice(t),e}async Uu(t){for(;this.buffer.length<t;)await this.Wu()&&this.Ku("Reached the end of bundle when more is expected.");const e=this.Lu.decode(this.buffer.slice(0,t));return this.buffer=this.buffer.slice(t),e}Ku(t){throw this.Bu.cancel(),new Error(`Invalid bundle format: ${t}`)}async Wu(){const t=await this.Bu.read();if(!t.done){const e=new Uint8Array(this.buffer.length+t.value.length);e.set(this.buffer),e.set(t.value,this.buffer.length),this.buffer=e}return t.done}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZI{constructor(t,e){this.bundleData=t,this.serializer=e,this.cursor=0,this.elements=[];let n=this.bu();if(!n||!n.Ua())throw new Error(`The first element of the bundle is not a metadata object, it is
         ${JSON.stringify(n==null?void 0:n.Ka)}`);this.metadata=n;do n=this.bu(),n!==null&&this.elements.push(n);while(n!==null)}getMetadata(){return this.metadata}Qu(){return this.elements}bu(){if(this.cursor===this.bundleData.length)return null;const t=this.qu(),e=this.Uu(t);return new jf(JSON.parse(e),t)}Uu(t){if(this.cursor+t>this.bundleData.length)throw new V(R.INTERNAL,"Reached the end of bundle when more is expected.");return this.bundleData.slice(this.cursor,this.cursor+=t)}qu(){const t=this.cursor;let e=this.cursor;for(;e<this.bundleData.length;){if(this.bundleData[e]==="{"){if(e===t)throw new Error("First character is a bracket and not a number");return this.cursor=e,Number(this.bundleData.slice(t,e))}e++}throw new Error("Reached the end of bundle when more is expected.")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tE=class{constructor(t){this.datastore=t,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(t){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new V(R.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const e=await async function(s,i){const o=M(s),c={documents:i.map(m=>Es(o.serializer,m))},u=await o.jo("BatchGetDocuments",o.serializer.databaseId,K.emptyPath(),c,i.length),h=new Map;u.forEach(m=>{const p=gy(o.serializer,m);h.set(p.key.toString(),p)});const f=[];return i.forEach(m=>{const p=h.get(m.toString());L(!!p,55234,{key:m}),f.push(p)}),f}(this.datastore,t);return e.forEach(n=>this.recordVersion(n)),e}set(t,e){this.write(e.toMutation(t,this.precondition(t))),this.writtenDocs.add(t.toString())}update(t,e){try{this.write(e.toMutation(t,this.preconditionForUpdate(t)))}catch(n){this.lastTransactionError=n}this.writtenDocs.add(t.toString())}delete(t){this.write(new _r(t,this.precondition(t))),this.writtenDocs.add(t.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const t=this.readVersions;this.mutations.forEach(e=>{t.delete(e.key.toString())}),t.forEach((e,n)=>{const s=k.fromPath(n);this.mutations.push(new za(s,this.precondition(s)))}),await async function(n,s){const i=M(n),o={writes:s.map(c=>Ts(i.serializer,c))};await i.Wo("Commit",i.serializer.databaseId,K.emptyPath(),o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(t){let e;if(t.isFoundDocument())e=t.version;else{if(!t.isNoDocument())throw F(50498,{Gu:t.constructor.name});e=U.min()}const n=this.readVersions.get(t.key.toString());if(n){if(!e.isEqual(n))throw new V(R.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(t.key.toString(),e)}precondition(t){const e=this.readVersions.get(t.toString());return!this.writtenDocs.has(t.toString())&&e?e.isEqual(U.min())?ht.exists(!1):ht.updateTime(e):ht.none()}preconditionForUpdate(t){const e=this.readVersions.get(t.toString());if(!this.writtenDocs.has(t.toString())&&e){if(e.isEqual(U.min()))throw new V(R.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return ht.updateTime(e)}return ht.exists(!0)}write(t){this.ensureCommitNotCalled(),this.mutations.push(t)}ensureCommitNotCalled(){}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eE{constructor(t,e,n,s,i){this.asyncQueue=t,this.datastore=e,this.options=n,this.updateFunction=s,this.deferred=i,this.zu=n.maxAttempts,this.M_=new sc(this.asyncQueue,"transaction_retry")}ju(){this.zu-=1,this.Ju()}Ju(){this.M_.p_(async()=>{const t=new tE(this.datastore),e=this.Hu(t);e&&e.then(n=>{this.asyncQueue.enqueueAndForget(()=>t.commit().then(()=>{this.deferred.resolve(n)}).catch(s=>{this.Zu(s)}))}).catch(n=>{this.Zu(n)})})}Hu(t){try{const e=this.updateFunction(t);return!As(e)&&e.catch&&e.then?e:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}Zu(t){this.zu>0&&this.Xu(t)?(this.zu-=1,this.asyncQueue.enqueueAndForget(()=>(this.Ju(),Promise.resolve()))):this.deferred.reject(t)}Xu(t){if((t==null?void 0:t.name)==="FirebaseError"){const e=t.code;return e==="aborted"||e==="failed-precondition"||e==="already-exists"||!$d(e)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const je="FirestoreClient";class nE{constructor(t,e,n,s,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this._databaseInfo=s,this.user=bt.UNAUTHENTICATED,this.clientId=Oi.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,async o=>{D(je,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(n,o=>(D(je,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new St;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Tr(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function Ko(r,t){r.asyncQueue.verifyOperationInProgress(),D(je,"Initializing OfflineComponentProvider");const e=r.configuration;await t.initialize(e);let n=e.initialUser;r.setCredentialChangeListener(async s=>{n.isEqual(s)||(await bf(t.localStore,s),n=s)}),t.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=t}async function ih(r,t){r.asyncQueue.verifyOperationInProgress();const e=await Tc(r);D(je,"Initializing OnlineComponentProvider"),await t.initialize(e,r.configuration),r.setCredentialChangeListener(n=>Yl(t.remoteStore,n)),r.setAppCheckTokenChangeListener((n,s)=>Yl(t.remoteStore,s)),r._onlineComponents=t}async function Tc(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){D(je,"Using user provided OfflineComponentProvider");try{await Ko(r,r._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(s){return s.name==="FirebaseError"?s.code===R.FAILED_PRECONDITION||s.code===R.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(e))throw e;zt("Error using user provided cache. Falling back to memory cache: "+e),await Ko(r,new lr)}}else D(je,"Using default OfflineComponentProvider"),await Ko(r,new Ic(void 0));return r._offlineComponents}async function no(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(D(je,"Using user provided OnlineComponentProvider"),await ih(r,r._uninitializedComponentsProvider._online)):(D(je,"Using default OnlineComponentProvider"),await ih(r,new qe))),r._onlineComponents}function Xf(r){return Tc(r).then(t=>t.persistence)}function wr(r){return Tc(r).then(t=>t.localStore)}function Zf(r){return no(r).then(t=>t.remoteStore)}function wc(r){return no(r).then(t=>t.syncEngine)}function tm(r){return no(r).then(t=>t.datastore)}async function hr(r){const t=await no(r),e=t.eventManager;return e.onListen=xI.bind(null,t.syncEngine),e.onUnlisten=kI.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=NI.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=MI.bind(null,t.syncEngine),e}function rE(r){return r.asyncQueue.enqueue(async()=>{const t=await Xf(r),e=await Zf(r);return t.setNetworkEnabled(!0),function(s){const i=M(s);return i.Ia.delete(0),Ds(i)}(e)})}function sE(r){return r.asyncQueue.enqueue(async()=>{const t=await Xf(r),e=await Zf(r);return t.setNetworkEnabled(!1),async function(s){const i=M(s);i.Ia.add(0),await yr(i),i.Va.set("Offline")}(e)})}function iE(r,t,e,n){const s=new eo(n),i=new dc(t,s,e);return r.asyncQueue.enqueueAndForget(async()=>uc(await hr(r),i)),()=>{s.Nu(),r.asyncQueue.enqueueAndForget(async()=>lc(await hr(r),i))}}function oE(r,t){const e=new St;return r.asyncQueue.enqueueAndForget(async()=>async function(s,i,o){try{const c=await function(h,f){const m=M(h);return m.persistence.runTransaction("read document","readonly",p=>m.localDocuments.getDocument(p,f))}(s,i);c.isFoundDocument()?o.resolve(c):c.isNoDocument()?o.resolve(null):o.reject(new V(R.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(c){const u=Tr(c,`Failed to get document '${i} from cache`);o.reject(u)}}(await wr(r),t,e)),e.promise}function em(r,t,e={}){const n=new St;return r.asyncQueue.enqueueAndForget(async()=>function(i,o,c,u,h){const f=new eo({next:p=>{f.Nu(),o.enqueueAndForget(()=>lc(i,m));const v=p.docs.has(c);!v&&p.fromCache?h.reject(new V(R.UNAVAILABLE,"Failed to get document because the client is offline.")):v&&p.fromCache&&u&&u.source==="server"?h.reject(new V(R.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(p)},error:p=>h.reject(p)}),m=new dc(gr(c.path),f,{includeMetadataChanges:!0,qa:!0});return uc(i,m)}(await hr(r),r.asyncQueue,t,e,n)),n.promise}function aE(r,t){const e=new St;return r.asyncQueue.enqueueAndForget(async()=>async function(s,i,o){try{const c=await Ci(s,i,!0),u=new Kf(i,c.ks),h=u.ru(c.documents),f=u.applyChanges(h,!1);o.resolve(f.snapshot)}catch(c){const u=Tr(c,`Failed to execute query '${i} against cache`);o.reject(u)}}(await wr(r),t,e)),e.promise}function nm(r,t,e={}){const n=new St;return r.asyncQueue.enqueueAndForget(async()=>function(i,o,c,u,h){const f=new eo({next:p=>{f.Nu(),o.enqueueAndForget(()=>lc(i,m)),p.fromCache&&u.source==="server"?h.reject(new V(R.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(p)},error:p=>h.reject(p)}),m=new dc(c,f,{includeMetadataChanges:!0,qa:!0});return uc(i,m)}(await hr(r),r.asyncQueue,t,e,n)),n.promise}function cE(r,t,e){const n=new St;return r.asyncQueue.enqueueAndForget(async()=>{try{const s=await tm(r);n.resolve(async function(o,c,u){var N;const h=M(o),{request:f,gt:m,parent:p}=ef(h.serializer,Sd(c),u);h.connection.qo||delete f.parent;const v=(await h.jo("RunAggregationQuery",h.serializer.databaseId,p,f,1)).filter(x=>!!x.result);L(v.length===1,64727);const C=(N=v[0].result)==null?void 0:N.aggregateFields;return Object.keys(C).reduce((x,B)=>(x[m[B]]=C[B],x),{})}(s,t,e))}catch(s){n.reject(s)}}),n.promise}function uE(r,t){const e=new St;return r.asyncQueue.enqueueAndForget(async()=>OI(await wc(r),t,e)),e.promise}function lE(r,t){const e=new eo(t);return r.asyncQueue.enqueueAndForget(async()=>function(s,i){M(s).Ca.add(i),i.next()}(await hr(r),e)),()=>{e.Nu(),r.asyncQueue.enqueueAndForget(async()=>function(s,i){M(s).Ca.delete(i)}(await hr(r),e))}}function hE(r,t,e){const n=new St;return r.asyncQueue.enqueueAndForget(async()=>{const s=await tm(r);new eE(r.asyncQueue,s,e,t,n).ju()}),n.promise}function dE(r,t,e,n){const s=function(o,c){let u;return u=typeof o=="string"?Kd().encode(o):o,function(f,m){return new XI(f,m)}(function(f,m){if(f instanceof Uint8Array)return sh(f,m);if(f instanceof ArrayBuffer)return sh(new Uint8Array(f),m);if(f instanceof ReadableStream)return f.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(u),c)}(e,vn(t));r.asyncQueue.enqueueAndForget(async()=>{YI(await wc(r),s,n)})}function fE(r,t){return r.asyncQueue.enqueue(async()=>function(n,s){const i=M(n);return i.persistence.runTransaction("Get named query","readonly",o=>i.Pi.getNamedQuery(o,s))}(await wr(r),t))}function rm(r,t){return function(n,s){return new ZI(n,s)}(r,t)}function mE(r,t){return r.asyncQueue.enqueue(async()=>async function(n,s){const i=M(n),o=i.indexManager,c=[];return i.persistence.runTransaction("Configure indexes","readwrite",u=>o.getFieldIndexes(u).next(h=>function(m,p,v,C,N){m=[...m],p=[...p],m.sort(v),p.sort(v);const x=m.length,B=p.length;let j=0,q=0;for(;j<B&&q<x;){const Z=v(m[q],p[j]);Z<0?N(m[q++]):Z>0?C(p[j++]):(j++,q++)}for(;j<B;)C(p[j++]);for(;q<x;)N(m[q++])}(h,s,Zp,f=>{c.push(o.addFieldIndex(u,f))},f=>{c.push(o.deleteFieldIndex(u,f))})).next(()=>A.waitFor(c)))}(await wr(r),t))}function gE(r,t){return r.asyncQueue.enqueue(async()=>function(n,s){M(n).Cs.As=s}(await wr(r),t))}function pE(r){return r.asyncQueue.enqueue(async()=>function(e){const n=M(e),s=n.indexManager;return n.persistence.runTransaction("Delete All Indexes","readwrite",i=>s.deleteAllFieldIndexes(i))}(await wr(r)))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sm(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _E="ComponentProvider",oh=new Map;function yE(r,t,e,n,s){return new N_(r,t,e,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,sm(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const im="firestore.googleapis.com",ah=!0;class ch{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new V(R.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=im,this.ssl=ah}else this.host=t.host,this.ssl=t.ssl??ah;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=df;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<pf)throw new V(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}zh("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=sm(t.experimentalLongPollingOptions??{}),function(n){if(n.timeoutSeconds!==void 0){if(isNaN(n.timeoutSeconds))throw new V(R.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (must not be NaN)`);if(n.timeoutSeconds<5)throw new V(R.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (minimum allowed value is 5)`);if(n.timeoutSeconds>30)throw new V(R.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(n,s){return n.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class xs{constructor(t,e,n,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ch({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new V(R.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new V(R.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ch(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new qh;switch(n.type){case"firstParty":return new Kp(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new V(R.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=oh.get(e);n&&(D(_E,"Removing Datastore"),oh.delete(e),n.terminate())}(this),Promise.resolve()}}function om(r,t,e,n={}){var h;r=Q(r,xs);const s=Ra(t),i=r._getSettings(),o={...i,emulatorOptions:r._getEmulatorOptions()},c=`${t}:${e}`;s&&Sh(`https://${c}`),i.host!==im&&i.host!==c&&zt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:c,ssl:s,emulatorOptions:n};if(!ke(u,o)&&(r._setSettings(u),n.mockUserToken)){let f,m;if(typeof n.mockUserToken=="string")f=n.mockUserToken,m=bt.MOCK_USER;else{f=Eg(n.mockUserToken,(h=r._app)==null?void 0:h.options.projectId);const p=n.mockUserToken.sub||n.mockUserToken.user_id;if(!p)throw new V(R.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new bt(p)}r._authCredentials=new zp(new Uh(f,m))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Tt(this.firestore,t,this._query)}}class nt{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ht(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new nt(this.firestore,t,this._key)}toJSON(){return{type:nt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,n){if(An(e,nt._jsonSchema))return new nt(t,n||null,new k(K.fromString(e.referencePath)))}}nt._jsonSchemaVersion="firestore/documentReference/1.0",nt._jsonSchema={type:yt("string",nt._jsonSchemaVersion),referencePath:yt("string")};class Ht extends Tt{constructor(t,e,n){super(t,e,gr(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new nt(this.firestore,null,new k(t))}withConverter(t){return new Ht(this.firestore,t,this._path)}}function IE(r,t,...e){if(r=Et(r),Ca("collection","path",t),r instanceof xs){const n=K.fromString(t,...e);return Ju(n),new Ht(r,null,n)}{if(!(r instanceof nt||r instanceof Ht))throw new V(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(K.fromString(t,...e));return Ju(n),new Ht(r.firestore,null,n)}}function EE(r,t){if(r=Q(r,xs),Ca("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new V(R.INVALID_ARGUMENT,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Tt(r,null,function(n){return new de(K.emptyPath(),n)}(t))}function am(r,t,...e){if(r=Et(r),arguments.length===1&&(t=Oi.newId()),Ca("doc","path",t),r instanceof xs){const n=K.fromString(t,...e);return Hu(n),new nt(r,null,new k(n))}{if(!(r instanceof nt||r instanceof Ht))throw new V(R.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(K.fromString(t,...e));return Hu(n),new nt(r.firestore,r instanceof Ht?r.converter:null,new k(n))}}function TE(r,t){return r=Et(r),t=Et(t),(r instanceof nt||r instanceof Ht)&&(t instanceof nt||t instanceof Ht)&&r.firestore===t.firestore&&r.path===t.path&&r.converter===t.converter}function Ac(r,t){return r=Et(r),t=Et(t),r instanceof Tt&&t instanceof Tt&&r.firestore===t.firestore&&Rs(r._query,t._query)&&r.converter===t.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uh="AsyncQueue";class lh{constructor(t=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new sc(this,"async_queue_retry"),this._c=()=>{const n=gi();n&&D(uh,"Visibility state changed to "+n.visibilityState),this.M_.w_()},this.ac=t;const e=gi();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const e=gi();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise(()=>{});const e=new St;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Yu.push(t),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(t){if(!$e(t))throw t;D(uh,"Operation failed with retryable error: "+t)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(t){const e=this.ac.then(()=>(this.rc=!0,t().catch(n=>{throw this.nc=n,this.rc=!1,gt("INTERNAL UNHANDLED ERROR: ",hh(n)),n}).then(n=>(this.rc=!1,n))));return this.ac=e,e}enqueueAfterDelay(t,e,n){this.uc(),this.oc.indexOf(t)>-1&&(e=0);const s=cc.createAndSchedule(this,t,e,n,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&F(47125,{Pc:hh(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ec(t){for(const e of this.tc)if(e.timerId===t)return!0;return!1}Ic(t){return this.Tc().then(()=>{this.tc.sort((e,n)=>e.targetTimeMs-n.targetTimeMs);for(const e of this.tc)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Tc()})}Rc(t){this.oc.push(t)}hc(t){const e=this.tc.indexOf(t);this.tc.splice(e,1)}}function hh(r){let t=r.message||"";return r.stack&&(t=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm{constructor(){this._progressObserver={},this._taskCompletionResolver=new St,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(t,e,n){this._progressObserver={next:t,error:e,complete:n}}catch(t){return this._taskCompletionResolver.promise.catch(t)}then(t,e){return this._taskCompletionResolver.promise.then(t,e)}_completeWith(t){this._updateProgress(t),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(t)}_failWith(t){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(t),this._taskCompletionResolver.reject(t)}_updateProgress(t){this._lastProgress=t,this._progressObserver.next&&this._progressObserver.next(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wE=-1;class st extends xs{constructor(t,e,n,s){super(t,e,n,s),this.type="firestore",this._queue=new lh,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new lh(t),this._firestoreClient=void 0,await t}}}function AE(r,t,e){e||(e=ps);const n=Pa(r,"firestore");if(n.isInitialized(e)){const s=n.getImmediate({identifier:e}),i=n.getOptions(e);if(ke(i,t))return s;throw new V(R.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(t.cacheSizeBytes!==void 0&&t.localCache!==void 0)throw new V(R.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(t.cacheSizeBytes!==void 0&&t.cacheSizeBytes!==-1&&t.cacheSizeBytes<pf)throw new V(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return t.host&&Ra(t.host)&&Sh(t.host),n.initialize({options:t,instanceIdentifier:e})}function vE(r,t){const e=typeof r=="object"?r:Vp(),n=typeof r=="string"?r:t||ps,s=Pa(e,"firestore").getImmediate({identifier:n});if(!s._initialized){const i=yg("firestore");i&&om(s,...i)}return s}function dt(r){if(r._terminated)throw new V(R.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||um(r),r._firestoreClient}function um(r){var n,s,i,o;const t=r._freezeSettings(),e=yE(r._databaseId,((n=r._app)==null?void 0:n.options.appId)||"",r._persistenceKey,(s=r._app)==null?void 0:s.options.apiKey,t);r._componentsProvider||(i=t.localCache)!=null&&i._offlineComponentProvider&&((o=t.localCache)!=null&&o._onlineComponentProvider)&&(r._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),r._firestoreClient=new nE(r._authCredentials,r._appCheckCredentials,r._queue,e,r._componentsProvider&&function(u){const h=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(h),_online:h}}(r._componentsProvider))}function bE(r,t){zt("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const e=r._freezeSettings();return lm(r,qe.provider,{build:n=>new Ec(n,e.cacheSizeBytes,t==null?void 0:t.forceOwnership)}),Promise.resolve()}async function RE(r){zt("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=r._freezeSettings();lm(r,qe.provider,{build:e=>new Yf(e,t.cacheSizeBytes)})}function lm(r,t,e){if((r=Q(r,st))._firestoreClient||r._terminated)throw new V(R.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(r._componentsProvider||r._getSettings().localCache)throw new V(R.FAILED_PRECONDITION,"SDK cache is already specified.");r._componentsProvider={_online:t,_offline:e},um(r)}function SE(r){if(r._initialized&&!r._terminated)throw new V(R.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const t=new St;return r._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(n){if(!re.v())return Promise.resolve();const s=n+wf;await re.delete(s)}(tc(r._databaseId,r._persistenceKey)),t.resolve()}catch(e){t.reject(e)}}),t.promise}function PE(r){return function(e){const n=new St;return e.asyncQueue.enqueueAndForget(async()=>UI(await wc(e),n)),n.promise}(dt(r=Q(r,st)))}function VE(r){return rE(dt(r=Q(r,st)))}function CE(r){return sE(dt(r=Q(r,st)))}function DE(r){return Ap(r.app,"firestore",r._databaseId.database),r._delete()}function va(r,t){const e=dt(r=Q(r,st)),n=new cm;return dE(e,r._databaseId,t,n),n}function hm(r,t){return fE(dt(r=Q(r,st)),t).then(e=>e?new Tt(r,null,e.query):null)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ft(ft.fromBase64String(t))}catch(e){throw new V(R.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Ft(ft.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Ft._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(An(t,Ft._jsonSchema))return Ft.fromBase64String(t.bytes)}}Ft._jsonSchemaVersion="firestore/bytes/1.0",Ft._jsonSchema={type:yt("string",Ft._jsonSchemaVersion),bytes:yt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new V(R.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ut(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}function xE(){return new bn(ta)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new V(R.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new V(R.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return z(this._lat,t._lat)||z(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Jt._jsonSchemaVersion}}static fromJSON(t){if(An(t,Jt._jsonSchema))return new Jt(t.latitude,t.longitude)}}Jt._jsonSchemaVersion="firestore/geoPoint/1.0",Jt._jsonSchema={type:yt("string",Jt._jsonSchemaVersion),latitude:yt("number"),longitude:yt("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(n,s){if(n.length!==s.length)return!1;for(let i=0;i<n.length;++i)if(n[i]!==s[i])return!1;return!0}(this._values,t._values)}toJSON(){return{type:Kt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(An(t,Kt._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every(e=>typeof e=="number"))return new Kt(t.vectorValues);throw new V(R.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Kt._jsonSchemaVersion="firestore/vectorValue/1.0",Kt._jsonSchema={type:yt("string",Kt._jsonSchemaVersion),vectorValues:yt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NE=/^__.*__$/;class kE{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return this.fieldMask!==null?new me(t,this.data,this.fieldMask,e,this.fieldTransforms):new pr(t,this.data,e,this.fieldTransforms)}}class dm{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new me(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function fm(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw F(40011,{dataSource:r})}}class ro{constructor(t,e,n,s,i,o){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=s,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(t){return new ro({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(t){var s;const e=(s=this.path)==null?void 0:s.child(t),n=this.i({path:e,arrayElement:!1});return n.mc(t),n}fc(t){var s;const e=(s=this.path)==null?void 0:s.child(t),n=this.i({path:e,arrayElement:!1});return n.Ac(),n}gc(t){return this.i({path:void 0,arrayElement:!0})}yc(t){return ki(t,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Ac(){if(this.path)for(let t=0;t<this.path.length;t++)this.mc(this.path.get(t))}mc(t){if(t.length===0)throw this.yc("Document fields must not be empty");if(fm(this.dataSource)&&NE.test(t))throw this.yc('Document fields cannot begin and end with "__"')}}class ME{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||vn(t)}A(t,e,n,s=!1){return new ro({dataSource:t,methodName:e,targetDoc:n,path:ut.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Rn(r){const t=r._freezeSettings(),e=vn(r._databaseId);return new ME(r._databaseId,!!t.ignoreUndefinedProperties,e)}function so(r,t,e,n,s,i={}){const o=r.A(i.merge||i.mergeFields?2:0,t,e,s);Cc("Data must be an object, but it was:",o,n);const c=pm(n,o);let u,h;if(i.merge)u=new Bt(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const m of i.mergeFields){const p=he(t,m,e);if(!o.contains(p))throw new V(R.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);ym(f,p)||f.push(p)}u=new Bt(f),h=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,h=o.fieldTransforms;return new kE(new Rt(c),u,h)}class Ns extends We{_toFieldTransform(t){if(t.dataSource!==2)throw t.dataSource===1?t.yc(`${this._methodName}() can only appear at the top level of your update data`):t.yc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Ns}}function mm(r,t,e){return new ro({dataSource:3,targetDoc:t.settings.targetDoc,methodName:r._methodName,arrayElement:e},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class vc extends We{_toFieldTransform(t){return new Ps(t.path,new rr)}isEqual(t){return t instanceof vc}}class bc extends We{constructor(t,e){super(t),this.Sc=e}_toFieldTransform(t){const e=mm(this,t,!0),n=this.Sc.map(i=>Sn(i,e)),s=new pn(n);return new Ps(t.path,s)}isEqual(t){return t instanceof bc&&ke(this.Sc,t.Sc)}}class Rc extends We{constructor(t,e){super(t),this.Sc=e}_toFieldTransform(t){const e=mm(this,t,!0),n=this.Sc.map(i=>Sn(i,e)),s=new _n(n);return new Ps(t.path,s)}isEqual(t){return t instanceof Rc&&ke(this.Sc,t.Sc)}}class Sc extends We{constructor(t,e){super(t),this.bc=e}_toFieldTransform(t){const e=new sr(t.serializer,Od(t.serializer,this.bc));return new Ps(t.path,e)}isEqual(t){return t instanceof Sc&&this.bc===t.bc}}function Pc(r,t,e,n){const s=r.A(1,t,e);Cc("Data must be an object, but it was:",s,n);const i=[],o=Rt.empty();Ge(n,(u,h)=>{const f=Dc(t,u,e);h=Et(h);const m=s.fc(f);if(h instanceof Ns)i.push(f);else{const p=Sn(h,m);p!=null&&(i.push(f),o.set(f,p))}});const c=new Bt(i);return new dm(o,c,s.fieldTransforms)}function Vc(r,t,e,n,s,i){const o=r.A(1,t,e),c=[he(t,n,e)],u=[s];if(i.length%2!=0)throw new V(R.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<i.length;p+=2)c.push(he(t,i[p])),u.push(i[p+1]);const h=[],f=Rt.empty();for(let p=c.length-1;p>=0;--p)if(!ym(h,c[p])){const v=c[p];let C=u[p];C=Et(C);const N=o.fc(v);if(C instanceof Ns)h.push(v);else{const x=Sn(C,N);x!=null&&(h.push(v),f.set(v,x))}}const m=new Bt(h);return new dm(f,m,o.fieldTransforms)}function gm(r,t,e,n=!1){return Sn(e,r.A(n?4:3,t))}function Sn(r,t){if(_m(r=Et(r)))return Cc("Unsupported field value:",t,r),pm(r,t);if(r instanceof We)return function(n,s){if(!fm(s.dataSource))throw s.yc(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.yc(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.arrayElement&&t.dataSource!==4)throw t.yc("Nested arrays are not supported");return function(n,s){const i=[];let o=0;for(const c of n){let u=Sn(c,s.gc(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(r,t)}return function(n,s){if((n=Et(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Od(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=tt.fromDate(n);return{timestampValue:ir(s.serializer,i)}}if(n instanceof tt){const i=new tt(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:ir(s.serializer,i)}}if(n instanceof Jt)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Ft)return{bytesValue:Hd(s.serializer,n._byteString)};if(n instanceof nt){const i=s.databaseId,o=n.firestore._databaseId;if(!o.isEqual(i))throw s.yc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Wa(n.firestore._databaseId||s.databaseId,n._key.path)}}if(n instanceof Kt)return function(o,c){const u=o instanceof Kt?o.toArray():o;return{mapValue:{fields:{[Fa]:{stringValue:La},[tr]:{arrayValue:{values:u.map(f=>{if(typeof f!="number")throw c.yc("VectorValues must only contain numeric values.");return ja(c.serializer,f)})}}}}}}(n,s);if(af(n))return n._toProto(s.serializer);throw s.yc(`Unsupported field value: ${Fi(n)}`)}(r,t)}function pm(r,t){const e={};return ud(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Ge(r,(n,s)=>{const i=Sn(s,t.dc(n));i!=null&&(e[n]=i)}),{mapValue:{fields:e}}}function _m(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof tt||r instanceof Jt||r instanceof Ft||r instanceof nt||r instanceof We||r instanceof Kt||af(r))}function Cc(r,t,e){if(!_m(e)||!$h(e)){const n=Fi(e);throw n==="an object"?t.yc(r+" a custom object"):t.yc(r+" "+n)}}function he(r,t,e){if((t=Et(t))instanceof bn)return t._internalPath;if(typeof t=="string")return Dc(r,t);throw ki("Field path arguments must be of type string or ",r,!1,void 0,e)}const OE=new RegExp("[~\\*/\\[\\]]");function Dc(r,t,e){if(t.search(OE)>=0)throw ki(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,e);try{return new bn(...t.split("."))._internalPath}catch{throw ki(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,e)}}function ki(r,t,e,n,s){const i=n&&!n.isEmpty(),o=s!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${n}`),o&&(u+=` in document ${s}`),u+=")"),new V(R.INVALID_ARGUMENT,c+r+u)}function ym(r,t){return r.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{convertValue(t,e="none"){switch(Fe(t)){case 0:return null;case 1:return t.booleanValue;case 2:return lt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(le(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw F(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return Ge(t,(s,i)=>{n[s]=this.convertValue(i,e)}),n}convertVectorValue(t){var n,s,i;const e=(i=(s=(n=t.fields)==null?void 0:n[tr].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>lt(o.doubleValue));return new Kt(e)}convertGeoPoint(t){return new Jt(lt(t.latitude),lt(t.longitude))}convertArray(t,e){return(t.values||[]).map(n=>this.convertValue(n,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=zi(t);return n==null?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(gs(t));default:return null}}convertTimestamp(t){const e=ue(t);return new tt(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=K.fromString(t);L(of(n),9688,{name:t});const s=new Oe(n.get(1),n.get(3)),i=new k(n.popFirst(5));return s.isEqual(e)||gt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He extends xc{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ft(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new nt(this.firestore,null,e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FE(){return new Ns("deleteField")}function LE(){return new vc("serverTimestamp")}function BE(...r){return new bc("arrayUnion",r)}function UE(...r){return new Rc("arrayRemove",r)}function qE(r){return new Sc("increment",r)}function jE(r){return new Kt(r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zE(r){var n;const t=dt(Q(r.firestore,st)),e=(n=t._onlineComponents)==null?void 0:n.datastore.serializer;return e===void 0?null:Wi(e,Nt(r._query)).ft}function $E(r,t){var i;const e=cd(t,(o,c)=>new zd(c,o.aggregateType,o._internalFieldPath)),n=dt(Q(r.firestore,st)),s=(i=n._onlineComponents)==null?void 0:i.datastore.serializer;return s===void 0?null:ef(s,Sd(r._query),e,!0).request}const dh="@firebase/firestore",fh="4.13.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(r){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(r,["next","error","complete"])}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(t="count",e){this._internalFieldPath=e,this.type="AggregateField",this.aggregateType=t}}class Im{constructor(t,e,n){this._userDataWriter=e,this._data=n,this.type="AggregateQuerySnapshot",this.query=t}data(){return this._userDataWriter.convertObjectMap(this._data)}_fieldsProto(){return new Rt({mapValue:{fields:this._data}}).clone().value.mapValue.fields}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(t,e,n,s,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new nt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new GE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var t;return((t=this._document)==null?void 0:t.data.clone().value.mapValue.fields)??void 0}get(t){if(this._document){const e=this._document.data.field(he("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class GE extends ws{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Em(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new V(R.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Nc{}class Ar extends Nc{}function KE(r,t,...e){let n=[];t instanceof Nc&&n.push(t),n=n.concat(e),function(i){const o=i.filter(u=>u instanceof Pn).length,c=i.filter(u=>u instanceof vr).length;if(o>1||o>0&&c>0)throw new V(R.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n);for(const s of n)r=s._apply(r);return r}class vr extends Ar{constructor(t,e,n){super(),this._field=t,this._op=e,this._value=n,this.type="where"}static _create(t,e,n){return new vr(t,e,n)}_apply(t){const e=this._parse(t);return wm(t._query,e),new Tt(t.firestore,t.converter,ha(t._query,e))}_parse(t){const e=Rn(t.firestore);return function(i,o,c,u,h,f,m){let p;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new V(R.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){gh(m,f);const C=[];for(const N of m)C.push(mh(u,i,N));p={arrayValue:{values:C}}}else p=mh(u,i,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||gh(m,f),p=gm(c,o,m,f==="in"||f==="not-in");return W.create(h,f,p)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function QE(r,t,e){const n=t,s=he("where",r);return vr._create(s,n,e)}class Pn extends Nc{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new Pn(t,e)}_parse(t){const e=this._queryConstraints.map(n=>n._parse(t)).filter(n=>n.getFilters().length>0);return e.length===1?e[0]:et.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(s,i){let o=s;const c=i.getFlattenedFilters();for(const u of c)wm(o,u),o=ha(o,u)}(t._query,e),new Tt(t.firestore,t.converter,ha(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function WE(...r){return r.forEach(t=>Am("or",t)),Pn._create("or",r)}function HE(...r){return r.forEach(t=>Am("and",t)),Pn._create("and",r)}class io extends Ar{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new io(t,e)}_apply(t){const e=function(s,i,o){if(s.startAt!==null)throw new V(R.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new V(R.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Is(i,o)}(t._query,this._field,this._direction);return new Tt(t.firestore,t.converter,K_(t._query,e))}}function JE(r,t="asc"){const e=t,n=he("orderBy",r);return io._create(n,e)}class ks extends Ar{constructor(t,e,n){super(),this.type=t,this._limit=e,this._limitType=n}static _create(t,e,n){return new ks(t,e,n)}_apply(t){return new Tt(t.firestore,t.converter,bi(t._query,this._limit,this._limitType))}}function YE(r){return Gh("limit",r),ks._create("limit",r,"F")}function XE(r){return Gh("limitToLast",r),ks._create("limitToLast",r,"L")}class Ms extends Ar{constructor(t,e,n){super(),this.type=t,this._docOrFields=e,this._inclusive=n}static _create(t,e,n){return new Ms(t,e,n)}_apply(t){const e=Tm(t,this.type,this._docOrFields,this._inclusive);return new Tt(t.firestore,t.converter,Q_(t._query,e))}}function ZE(...r){return Ms._create("startAt",r,!0)}function tT(...r){return Ms._create("startAfter",r,!1)}class Os extends Ar{constructor(t,e,n){super(),this.type=t,this._docOrFields=e,this._inclusive=n}static _create(t,e,n){return new Os(t,e,n)}_apply(t){const e=Tm(t,this.type,this._docOrFields,this._inclusive);return new Tt(t.firestore,t.converter,W_(t._query,e))}}function eT(...r){return Os._create("endBefore",r,!1)}function nT(...r){return Os._create("endAt",r,!0)}function Tm(r,t,e,n){if(e[0]=Et(e[0]),e[0]instanceof ws)return function(i,o,c,u,h){if(!u)throw new V(R.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${c}().`);const f=[];for(const m of jn(i))if(m.field.isKeyField())f.push(mn(o,u.key));else{const p=u.data.field(m.field);if(ji(p))throw new V(R.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+m.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(p===null){const v=m.field.canonicalString();throw new V(R.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${v}' (used as the orderBy) does not exist.`)}f.push(p)}return new Be(f,h)}(r._query,r.firestore._databaseId,t,e[0]._document,n);{const s=Rn(r.firestore);return function(o,c,u,h,f,m){const p=o.explicitOrderBy;if(f.length>p.length)throw new V(R.INVALID_ARGUMENT,`Too many arguments provided to ${h}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const v=[];for(let C=0;C<f.length;C++){const N=f[C];if(p[C].field.isKeyField()){if(typeof N!="string")throw new V(R.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${h}(), but got a ${typeof N}`);if(!Ua(o)&&N.indexOf("/")!==-1)throw new V(R.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${h}() must be a plain document ID, but '${N}' contains a slash.`);const x=o.path.child(K.fromString(N));if(!k.isDocumentKey(x))throw new V(R.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${h}() must result in a valid document path, but '${x}' is not because it contains an odd number of segments.`);const B=new k(x);v.push(mn(c,B))}else{const x=gm(u,h,N);v.push(x)}}return new Be(v,m)}(r._query,r.firestore._databaseId,s,t,e,n)}}function mh(r,t,e){if(typeof(e=Et(e))=="string"){if(e==="")throw new V(R.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ua(t)&&e.indexOf("/")!==-1)throw new V(R.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const n=t.path.child(K.fromString(e));if(!k.isDocumentKey(n))throw new V(R.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return mn(r,new k(n))}if(e instanceof nt)return mn(r,e._key);throw new V(R.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Fi(e)}.`)}function gh(r,t){if(!Array.isArray(r)||r.length===0)throw new V(R.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function wm(r,t){const e=function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(r.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new V(R.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new V(R.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}function Am(r,t){if(!(t instanceof vr||t instanceof Pn))throw new V(R.INVALID_ARGUMENT,`Function ${r}() requires AppliableConstraints created with a call to 'where(...)', 'or(...)', or 'and(...)'.`)}function oo(r,t,e){let n;return n=r?e&&(e.merge||e.mergeFields)?r.toFirestore(t,e):r.toFirestore(t):t,n}class kc extends xc{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ft(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new nt(this.firestore,null,e)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rT(r){return new dr("sum",he("sum",r))}function sT(r){return new dr("avg",he("average",r))}function vm(){return new dr("count")}function iT(r,t){var e,n;return r instanceof dr&&t instanceof dr&&r.aggregateType===t.aggregateType&&((e=r._internalFieldPath)==null?void 0:e.canonicalString())===((n=t._internalFieldPath)==null?void 0:n.canonicalString())}function oT(r,t){return Ac(r.query,t.query)&&ke(r.data(),t.data())}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aT(r){return bm(r,{count:vm()})}function bm(r,t){const e=Q(r.firestore,st),n=dt(e),s=cd(t,(i,o)=>new zd(o,i.aggregateType,i._internalFieldPath));return cE(n,r._query,s).then(i=>function(c,u,h){const f=new He(c);return new Im(u,f,h)}(e,r,i))}class cT{constructor(t){this.kind="memory",this._onlineComponentProvider=qe.provider,this._offlineComponentProvider=t!=null&&t.garbageCollector?t.garbageCollector._offlineComponentProvider:{build:()=>new Ic(void 0)}}toJSON(){return{kind:this.kind}}}class uT{constructor(t){let e;this.kind="persistent",t!=null&&t.tabManager?(t.tabManager._initialize(t),e=t.tabManager):(e=Rm(void 0),e._initialize(t)),this._onlineComponentProvider=e._onlineComponentProvider,this._offlineComponentProvider=e._offlineComponentProvider}toJSON(){return{kind:this.kind}}}class lT{constructor(){this.kind="memoryEager",this._offlineComponentProvider=lr.provider}toJSON(){return{kind:this.kind}}}class hT{constructor(t){this.kind="memoryLru",this._offlineComponentProvider={build:()=>new Ic(t)}}toJSON(){return{kind:this.kind}}}function dT(){return new lT}function fT(r){return new hT(r==null?void 0:r.cacheSizeBytes)}function mT(r){return new cT(r)}function gT(r){return new uT(r)}class pT{constructor(t){this.forceOwnership=t,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(t){this._onlineComponentProvider=qe.provider,this._offlineComponentProvider={build:e=>new Ec(e,t==null?void 0:t.cacheSizeBytes,this.forceOwnership)}}}class _T{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(t){this._onlineComponentProvider=qe.provider,this._offlineComponentProvider={build:e=>new Yf(e,t==null?void 0:t.cacheSizeBytes)}}}function Rm(r){return new pT(r==null?void 0:r.forceOwnership)}function yT(){return new _T}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sm="NOT SUPPORTED";class ae{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class qt extends ws{constructor(t,e,n,s,i,o){super(t,e,n,s,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new cs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(he("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new V(R.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=qt._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}function IT(r,t,e){if(An(t,qt._jsonSchema)){if(t.bundle===Sm)throw new V(R.INVALID_ARGUMENT,"The provided JSON object was created in a client environment, which is not supported.");const n=vn(r._databaseId),s=rm(t.bundle,n),i=s.Qu(),o=new fc(s.getMetadata(),n);for(const f of i)o.Ga(f);const c=o.documents;if(c.length!==1)throw new V(R.INVALID_ARGUMENT,`Expected bundle data to contain 1 document, but it contains ${c.length} documents.`);const u=Qi(n,c[0].document),h=new k(K.fromString(t.bundleName));return new qt(r,new kc(r),h,u,new ae(!1,!1),e||null)}}qt._jsonSchemaVersion="firestore/documentSnapshot/1.0",qt._jsonSchema={type:yt("string",qt._jsonSchemaVersion),bundleSource:yt("string","DocumentSnapshot"),bundleName:yt("string"),bundle:yt("string")};class cs extends qt{data(t={}){return super.data(t)}}class jt{constructor(t,e,n,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new ae(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new cs(this._firestore,this._userDataWriter,n.key,n,new ae(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new V(R.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const u=new cs(s._firestore,s._userDataWriter,c.doc.key,c.doc,new ae(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const u=new cs(s._firestore,s._userDataWriter,c.doc.key,c.doc,new ae(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return c.type!==0&&(h=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:TT(c.type),doc:u,oldIndex:h,newIndex:f}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new V(R.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=jt._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=Oi.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],n=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(e.push(i._document),n.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function ET(r,t,e){if(An(t,jt._jsonSchema)){if(t.bundle===Sm)throw new V(R.INVALID_ARGUMENT,"The provided JSON object was created in a client environment, which is not supported.");const n=vn(r._databaseId),s=rm(t.bundle,n),i=s.Qu(),o=new fc(s.getMetadata(),n);for(const p of i)o.Ga(p);if(o.queries.length!==1)throw new V(R.INVALID_ARGUMENT,`Snapshot data expected 1 query but found ${o.queries.length} queries.`);const c=Hi(o.queries[0].bundledQuery),u=o.documents;let h=new fn;u.map(p=>{const v=Qi(n,p.document);h=h.add(v)});const f=wn.fromInitialDocuments(c,h,$(),!1,!1),m=new Tt(r,e||null,c);return new jt(r,new kc(r),m,f)}}function TT(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return F(61501,{type:r})}}function wT(r,t){return r instanceof qt&&t instanceof qt?r._firestore===t._firestore&&r._key.isEqual(t._key)&&(r._document===null?t._document===null:r._document.isEqual(t._document))&&r._converter===t._converter:r instanceof jt&&t instanceof jt&&r._firestore===t._firestore&&Ac(r.query,t.query)&&r.metadata.isEqual(t.metadata)&&r._snapshot.isEqual(t._snapshot)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */jt._jsonSchemaVersion="firestore/querySnapshot/1.0",jt._jsonSchema={type:yt("string",jt._jsonSchemaVersion),bundleSource:yt("string","QuerySnapshot"),bundleName:yt("string"),bundle:yt("string")};const AT={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pm{constructor(t,e){this._firestore=t,this._commitHandler=e,this._mutations=[],this._committed=!1,this._dataReader=Rn(t)}set(t,e,n){this._verifyNotCommitted();const s=Ve(t,this._firestore),i=oo(s.converter,e,n),o=so(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,n);return this._mutations.push(o.toMutation(s._key,ht.none())),this}update(t,e,n,...s){this._verifyNotCommitted();const i=Ve(t,this._firestore);let o;return o=typeof(e=Et(e))=="string"||e instanceof bn?Vc(this._dataReader,"WriteBatch.update",i._key,e,n,s):Pc(this._dataReader,"WriteBatch.update",i._key,e),this._mutations.push(o.toMutation(i._key,ht.exists(!0))),this}delete(t){this._verifyNotCommitted();const e=Ve(t,this._firestore);return this._mutations=this._mutations.concat(new _r(e._key,ht.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new V(R.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Ve(r,t){if((r=Et(r)).firestore!==t)throw new V(R.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vT{constructor(t,e){this._firestore=t,this._transaction=e,this._dataReader=Rn(t)}get(t){const e=Ve(t,this._firestore),n=new kc(this._firestore);return this._transaction.lookup([e._key]).then(s=>{if(!s||s.length!==1)return F(24041);const i=s[0];if(i.isFoundDocument())return new ws(this._firestore,n,i.key,i,e.converter);if(i.isNoDocument())return new ws(this._firestore,n,e._key,null,e.converter);throw F(18433,{doc:i})})}set(t,e,n){const s=Ve(t,this._firestore),i=oo(s.converter,e,n),o=so(this._dataReader,"Transaction.set",s._key,i,s.converter!==null,n);return this._transaction.set(s._key,o),this}update(t,e,n,...s){const i=Ve(t,this._firestore);let o;return o=typeof(e=Et(e))=="string"||e instanceof bn?Vc(this._dataReader,"Transaction.update",i._key,e,n,s):Pc(this._dataReader,"Transaction.update",i._key,e),this._transaction.update(i._key,o),this}delete(t){const e=Ve(t,this._firestore);return this._transaction.delete(e._key),this}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm extends vT{constructor(t,e){super(t,e),this._firestore=t}get(t){const e=Ve(t,this._firestore),n=new He(this._firestore);return super.get(t).then(s=>new qt(this._firestore,n,e._key,s._document,new ae(!1,!1),e.converter))}}function bT(r,t,e){r=Q(r,st);const n={...AT,...e};(function(o){if(o.maxAttempts<1)throw new V(R.INVALID_ARGUMENT,"Max attempts must be at least 1")})(n);const s=dt(r);return hE(s,i=>t(new Vm(r,i)),n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RT(r){r=Q(r,nt);const t=Q(r.firestore,st),e=dt(t);return em(e,r._key).then(n=>Mc(t,r,n))}function ST(r){r=Q(r,nt);const t=Q(r.firestore,st),e=dt(t),n=new He(t);return oE(e,r._key).then(s=>new qt(t,n,r._key,s,new ae(s!==null&&s.hasLocalMutations,!0),r.converter))}function PT(r){r=Q(r,nt);const t=Q(r.firestore,st),e=dt(t);return em(e,r._key,{source:"server"}).then(n=>Mc(t,r,n))}function VT(r){r=Q(r,Tt);const t=Q(r.firestore,st),e=dt(t),n=new He(t);return Em(r._query),nm(e,r._query).then(s=>new jt(t,n,r,s))}function CT(r){r=Q(r,Tt);const t=Q(r.firestore,st),e=dt(t),n=new He(t);return aE(e,r._query).then(s=>new jt(t,n,r,s))}function DT(r){r=Q(r,Tt);const t=Q(r.firestore,st),e=dt(t),n=new He(t);return nm(e,r._query,{source:"server"}).then(s=>new jt(t,n,r,s))}function xT(r,t,e){r=Q(r,nt);const n=Q(r.firestore,st),s=oo(r.converter,t,e),i=Rn(n);return br(n,[so(i,"setDoc",r._key,s,r.converter!==null,e).toMutation(r._key,ht.none())])}function NT(r,t,e,...n){r=Q(r,nt);const s=Q(r.firestore,st),i=Rn(s);let o;return o=typeof(t=Et(t))=="string"||t instanceof bn?Vc(i,"updateDoc",r._key,t,e,n):Pc(i,"updateDoc",r._key,t),br(s,[o.toMutation(r._key,ht.exists(!0))])}function kT(r){return br(Q(r.firestore,st),[new _r(r._key,ht.none())])}function MT(r,t){const e=Q(r.firestore,st),n=am(r),s=oo(r.converter,t),i=Rn(r.firestore);return br(e,[so(i,"addDoc",n._key,s,r.converter!==null,{}).toMutation(n._key,ht.exists(!1))]).then(()=>n)}function ba(r,...t){var h,f,m;r=Et(r);let e={includeMetadataChanges:!1,source:"default"},n=0;typeof t[n]!="object"||$n(t[n])||(e=t[n++]);const s={includeMetadataChanges:e.includeMetadataChanges,source:e.source};if($n(t[n])){const p=t[n];t[n]=(h=p.next)==null?void 0:h.bind(p),t[n+1]=(f=p.error)==null?void 0:f.bind(p),t[n+2]=(m=p.complete)==null?void 0:m.bind(p)}let i,o,c;if(r instanceof nt)o=Q(r.firestore,st),c=gr(r._key.path),i={next:p=>{t[n]&&t[n](Mc(o,r,p))},error:t[n+1],complete:t[n+2]};else{const p=Q(r,Tt);o=Q(p.firestore,st),c=p._query;const v=new He(o);i={next:C=>{t[n]&&t[n](new jt(o,v,p,C))},error:t[n+1],complete:t[n+2]},Em(r._query)}const u=dt(o);return iE(u,c,s,i)}function OT(r,t,...e){const n=Et(r),s=function(u){const h={bundle:"",bundleName:"",bundleSource:""},f=["bundle","bundleName","bundleSource"];for(const m of f){if(!(m in u)){h.error=`snapshotJson missing required field: ${m}`;break}const p=u[m];if(typeof p!="string"){h.error=`snapshotJson field '${m}' must be a string.`;break}if(p.length===0){h.error=`snapshotJson field '${m}' cannot be an empty string.`;break}m==="bundle"?h.bundle=p:m==="bundleName"?h.bundleName=p:m==="bundleSource"&&(h.bundleSource=p)}return h}(t);if(s.error)throw new V(R.INVALID_ARGUMENT,s.error);let i,o=0;if(typeof e[o]!="object"||$n(e[o])||(i=e[o++]),s.bundleSource==="QuerySnapshot"){let c=null;if(typeof e[o]=="object"&&$n(e[o])){const u=e[o++];c={next:u.next,error:u.error,complete:u.complete}}else c={next:e[o++],error:e[o++],complete:e[o++]};return function(h,f,m,p,v){let C,N=!1;return va(h,f.bundle).then(()=>hm(h,f.bundleName)).then(B=>{B&&!N&&(v&&B.withConverter(v),C=ba(B,m||{},p))}).catch(B=>(p.error&&p.error(B),()=>{})),()=>{N||(N=!0,C&&C())}}(n,s,i,c,e[o])}if(s.bundleSource==="DocumentSnapshot"){let c=null;if(typeof e[o]=="object"&&$n(e[o])){const u=e[o++];c={next:u.next,error:u.error,complete:u.complete}}else c={next:e[o++],error:e[o++],complete:e[o++]};return function(h,f,m,p,v){let C,N=!1;return va(h,f.bundle).then(()=>{if(!N){const B=new nt(h,v||null,k.fromPath(f.bundleName));C=ba(B,m||{},p)}}).catch(B=>(p.error&&p.error(B),()=>{})),()=>{N||(N=!0,C&&C())}}(n,s,i,c,e[o])}throw new V(R.INVALID_ARGUMENT,`unsupported bundle source: ${s.bundleSource}`)}function FT(r,t){r=Q(r,st);const e=dt(r),n=$n(t)?t:{next:t};return lE(e,n)}function br(r,t){const e=dt(r);return uE(e,t)}function Mc(r,t,e){const n=e.docs.get(t._key),s=new He(r);return new qt(r,s,t._key,n,new ae(e.hasPendingWrites,e.fromCache),t.converter)}function LT(r){return r=Q(r,st),dt(r),new Pm(r,t=>br(r,t))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BT(r,t){r=Q(r,st);const e=dt(r);if(!e._uninitializedComponentsProvider||e._uninitializedComponentsProvider._offline.kind==="memory")return zt("Cannot enable indexes when persistence is disabled"),Promise.resolve();const n=function(i){const o=typeof i=="string"?function(h){try{return JSON.parse(h)}catch(f){throw new V(R.INVALID_ARGUMENT,"Failed to parse JSON: "+(f==null?void 0:f.message))}}(i):i,c=[];if(Array.isArray(o.indexes))for(const u of o.indexes){const h=ph(u,"collectionGroup"),f=[];if(Array.isArray(u.fields))for(const m of u.fields){const p=ph(m,"fieldPath"),v=Dc("setIndexConfiguration",p);m.arrayConfig==="CONTAINS"?f.push(new hn(v,2)):m.order==="ASCENDING"?f.push(new hn(v,0)):m.order==="DESCENDING"&&f.push(new hn(v,1))}c.push(new Wn(Wn.UNKNOWN_ID,h,f,Hn.empty()))}return c}(t);return mE(e,n)}function ph(r,t){if(typeof r[t]!="string")throw new V(R.INVALID_ARGUMENT,"Missing string value for: "+t);return r[t]}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{constructor(t){this._firestore=t,this.type="PersistentCacheIndexManager"}}function UT(r){var s;r=Q(r,st);const t=_h.get(r);if(t)return t;if(((s=dt(r)._uninitializedComponentsProvider)==null?void 0:s._offline.kind)!=="persistent")return null;const n=new Cm(r);return _h.set(r,n),n}function qT(r){Dm(r,!0)}function jT(r){Dm(r,!1)}function zT(r){const t=dt(r._firestore);pE(t).then(e=>D("deleting all persistent cache indexes succeeded")).catch(e=>zt("deleting all persistent cache indexes failed",e))}function Dm(r,t){const e=dt(r._firestore);gE(e,t).then(n=>D(`setting persistent cache index auto creation isEnabled=${t} succeeded`)).catch(n=>zt(`setting persistent cache index auto creation isEnabled=${t} failed`,n))}const _h=new WeakMap;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $T{constructor(){throw new Error("instances of this class should not be created")}static onExistenceFilterMismatch(t){return Oc.instance.onExistenceFilterMismatch(t)}}class Oc{constructor(){this.t=new Map}static get instance(){return ii||(ii=new Oc,ay(ii)),ii}o(t){this.t.forEach(e=>e(t))}onExistenceFilterMismatch(t){const e=Symbol(),n=this.t;return n.set(e,t),()=>n.delete(e)}}let ii=null;(function(t,e=!0){Up(Sp),Ii(new us("firestore",(n,{instanceIdentifier:s,options:i})=>{const o=n.getProvider("app").getImmediate(),c=new st(new $p(n.getProvider("auth-internal")),new Qp(o,n.getProvider("app-check-internal")),k_(o,s),o);return i={useFetchStreams:e,...i},c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),Xr(dh,fh,t),Xr(dh,fh,"esm2020")})();const nw=Object.freeze(Object.defineProperty({__proto__:null,AbstractUserDataWriter:xc,AggregateField:dr,AggregateQuerySnapshot:Im,Bytes:Ft,CACHE_SIZE_UNLIMITED:wE,CollectionReference:Ht,DocumentReference:nt,DocumentSnapshot:qt,FieldPath:bn,FieldValue:We,Firestore:st,FirestoreError:V,GeoPoint:Jt,LoadBundleTask:cm,PersistentCacheIndexManager:Cm,Query:Tt,QueryCompositeFilterConstraint:Pn,QueryConstraint:Ar,QueryDocumentSnapshot:cs,QueryEndAtConstraint:Os,QueryFieldFilterConstraint:vr,QueryLimitConstraint:ks,QueryOrderByConstraint:io,QuerySnapshot:jt,QueryStartAtConstraint:Ms,SnapshotMetadata:ae,Timestamp:tt,Transaction:Vm,VectorValue:Kt,WriteBatch:Pm,_AutoId:Oi,_ByteString:ft,_DatabaseId:Oe,_DocumentKey:k,_EmptyAppCheckTokenProvider:Wp,_EmptyAuthCredentialsProvider:qh,_FieldPath:ut,_TestingHooks:$T,_cast:Q,_debugAssert:jp,_internalAggregationQueryToProtoRunAggregationQueryRequest:$E,_internalQueryToProtoQueryTarget:zE,_isBase64Available:D_,_logWarn:zt,_validateIsNotUsedTogether:zh,addDoc:MT,aggregateFieldEqual:iT,aggregateQuerySnapshotEqual:oT,and:HE,arrayRemove:UE,arrayUnion:BE,average:sT,clearIndexedDbPersistence:SE,collection:IE,collectionGroup:EE,connectFirestoreEmulator:om,count:vm,deleteAllPersistentCacheIndexes:zT,deleteDoc:kT,deleteField:FE,disableNetwork:CE,disablePersistentCacheIndexAutoCreation:jT,doc:am,documentId:xE,documentSnapshotFromJSON:IT,enableIndexedDbPersistence:bE,enableMultiTabIndexedDbPersistence:RE,enableNetwork:VE,enablePersistentCacheIndexAutoCreation:qT,endAt:nT,endBefore:eT,ensureFirestoreConfigured:dt,executeWrite:br,getAggregateFromServer:bm,getCountFromServer:aT,getDoc:RT,getDocFromCache:ST,getDocFromServer:PT,getDocs:VT,getDocsFromCache:CT,getDocsFromServer:DT,getFirestore:vE,getPersistentCacheIndexManager:UT,increment:qE,initializeFirestore:AE,limit:YE,limitToLast:XE,loadBundle:va,memoryEagerGarbageCollector:dT,memoryLocalCache:mT,memoryLruGarbageCollector:fT,namedQuery:hm,onSnapshot:ba,onSnapshotResume:OT,onSnapshotsInSync:FT,or:WE,orderBy:JE,persistentLocalCache:gT,persistentMultipleTabManager:yT,persistentSingleTabManager:Rm,query:KE,queryEqual:Ac,querySnapshotFromJSON:ET,refEqual:TE,runTransaction:bT,serverTimestamp:LE,setDoc:xT,setIndexConfiguration:BT,setLogLevel:qp,snapshotEqual:wT,startAfter:tT,startAt:ZE,sum:rT,terminate:DE,updateDoc:NT,vector:jE,waitForPendingWrites:PE,where:QE,writeBatch:LT},Symbol.toStringTag,{value:"Module"}));export{us as C,Rh as E,fr as F,J as L,Sp as S,Ii as _,HT as a,Pa as b,_g as c,Vp as d,WT as e,vp as f,GT as g,Et as h,KT as i,ZT as j,ke as k,Ra as l,Gn as m,Ph as n,fg as o,Sh as p,JT as q,Xr as r,XT as s,QT as t,YT as u,Pp as v,vE as w,nw as x};
