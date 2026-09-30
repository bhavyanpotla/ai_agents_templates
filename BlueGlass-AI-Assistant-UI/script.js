const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
function toast(msg){const t=$("#toast");t.textContent=msg;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),2200)}

$$(".nav-item").forEach(item=>{
  item.addEventListener("click",()=>{
    $$(".nav-item").forEach(x=>x.classList.remove("active")); item.classList.add("active");
    $$(".page").forEach(p=>p.classList.remove("active-page"));
    $("#page-"+item.dataset.page).classList.add("active-page");
  });
});

function addUserMessage(text){
  const messages=$("#messages");
  const row=document.createElement("div"); row.className="message"; row.style.marginTop="18px";
  row.innerHTML=`<div class="mini-avatar" style="background:linear-gradient(145deg,#dbeaff,#a8cfff);color:#126fe8">HN</div><div><div class="bubble">${escapeHtml(text)}</div><small>You · just now</small></div>`;
  messages.appendChild(row); messages.scrollTop=messages.scrollHeight;
}
function addAssistantMessage(text){
  const messages=$("#messages");
  const row=document.createElement("div"); row.className="message"; row.style.marginTop="18px";
  row.innerHTML=`<div class="mini-avatar">✦</div><div><div class="bubble">${text}</div><small>BlueGlass AI · just now</small></div>`;
  messages.appendChild(row); messages.scrollTop=messages.scrollHeight;
}
function escapeHtml(s){return s.replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));}
function send(){
  const input=$("#messageInput"), text=input.value.trim(); if(!text)return;
  addUserMessage(text); input.value="";
  setTimeout(()=>addAssistantMessage("I can help with that. I’ve understood your request and can break it into steps, use connected tools, analyze files, or create an execution plan. <br><br><strong>Next step:</strong> choose an action or tell me what outcome you want."),550);
}
$("#sendBtn").onclick=send;
$("#messageInput").addEventListener("keydown",e=>{if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();send()}});
$$(".quick-prompts button").forEach(b=>b.onclick=()=>{$("#messageInput").value=b.dataset.prompt;$("#messageInput").focus()});
$("#newChatBtn").onclick=()=>{location.hash="chat";$("#messages").innerHTML=`<div class="message assistant"><div class="mini-avatar">✦</div><div><div class="bubble">New conversation started. What can I help you accomplish?</div><small>BlueGlass AI · just now</small></div></div>`;toast("New conversation created")};
$("#attachBtn").onclick=()=>$("#fileInput").click();
$("#fileInput").onchange=e=>{$("#attachmentPreview").textContent=e.target.files.length+" file(s) attached";toast("Files attached")};
$("#voiceBtn").onclick=()=>toast("Voice input activated");
$("#notificationBtn").onclick=()=>$("#notificationModal").classList.add("show");
$("#closeModal").onclick=()=>$("#notificationModal").classList.remove("show");
$("#notificationModal").onclick=e=>{if(e.target.id==="notificationModal")$("#notificationModal").classList.remove("show")};
$("#globalSearch").addEventListener("keydown",e=>{if(e.key==="Enter"){toast("Searching: "+e.target.value);}});
$$(".connect").forEach(b=>b.onclick=()=>{b.textContent="Connected";b.className="connect";toast("Integration connected")});
$("#uploadKnowledge").onclick=()=>toast("File picker ready");
$$(".toggle").forEach(t=>t.onclick=()=>{t.classList.toggle("on");toast("Setting updated")});
$$(".settings-nav button").forEach(b=>b.onclick=()=>{$$(".settings-nav button").forEach(x=>x.classList.remove("selected"));b.classList.add("selected")});
