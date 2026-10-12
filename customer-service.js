(()=>{
  const wrapper=document.createElement('div');
  wrapper.className='customer-service';
  wrapper.innerHTML=`
    <section class="service-bubble" id="service-bubble" aria-label="Mercury客户服务中心" aria-hidden="true">
      <div class="service-heading">
        <div class="service-avatar" aria-hidden="true">
          <svg viewBox="0 0 24 24"><path d="M5 13v-2a7 7 0 0 1 14 0v2"/><path d="M5 12H4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2v-6H5Zm14 0h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2v-6h1Z"/><path d="M18 18c0 2-2 3-5 3"/></svg>
        </div>
        <div><strong>Mercury客户服务中心</strong><span>为您提供产品使用支持</span></div>
        <button class="service-close" type="button" aria-label="关闭客服联系方式">×</button>
      </div>
      <div class="service-content">
        <div class="service-qr-wrap">
          <img src="assets/customer-service-qr.svg" alt="Mercury客户服务中心二维码占位图">
          <span>客服二维码</span>
        </div>
        <div class="service-contact">
          <span class="service-label">客服电话</span>
          <strong>400-XXX-XXXX</strong>
          <small>工作日 09:00–18:00</small>
        </div>
      </div>
      <p class="service-placeholder-note">正式上线前请替换二维码与客服电话</p>
    </section>
    <button class="service-launcher" type="button" aria-expanded="false" aria-controls="service-bubble">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 13v-2a7 7 0 0 1 14 0v2"/><path d="M5 12H4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2v-6H5Zm14 0h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2v-6h1Z"/><path d="M18 18c0 2-2 3-5 3"/></svg>
      <span>联系客服</span>
    </button>`;
  document.body.append(wrapper);
  const bubble=wrapper.querySelector('.service-bubble');
  const launcher=wrapper.querySelector('.service-launcher');
  const close=wrapper.querySelector('.service-close');
  function setOpen(open){
    wrapper.classList.toggle('open',open);
    bubble.setAttribute('aria-hidden',String(!open));
    launcher.setAttribute('aria-expanded',String(open));
    if(open)close.focus();
  }
  launcher.addEventListener('click',()=>setOpen(!wrapper.classList.contains('open')));
  close.addEventListener('click',()=>{setOpen(false);launcher.focus()});
  document.addEventListener('click',event=>{if(wrapper.classList.contains('open')&&!wrapper.contains(event.target))setOpen(false)});
  document.addEventListener('keydown',event=>{if(event.key==='Escape'&&wrapper.classList.contains('open')){setOpen(false);launcher.focus()}});
})();
