(() => {
  const toggle=document.querySelector('.menu-toggle'), nav=document.querySelector('.nav');
  if(toggle&&nav){const close=()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Открыть меню')};toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Закрыть меню':'Открыть меню');nav.classList.toggle('open',open)});nav.addEventListener('click',e=>{if(e.target.closest('a'))close()});document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});document.addEventListener('click',e=>{if(!nav.contains(e.target)&&!toggle.contains(e.target))close()})}
  document.querySelectorAll('[data-year]').forEach(n=>n.textContent=new Date().getFullYear());
  // First-visit cookie notice. It stores only the dismissal preference in localStorage.
  try {
    if (localStorage.getItem('webbest-cookie-notice-dismissed') !== '1') {
      const banner=document.createElement('aside');
      banner.className='cookie-banner';
      banner.setAttribute('aria-label','Уведомление о cookie');
      banner.innerHTML='<p>На сайте не подключены аналитические и рекламные cookie. Мы сохраняем в браузере только отметку о закрытии этого уведомления. <a href=\"cookies.html\">Подробнее о cookie</a>.</p><button type=\"button\">Понятно</button>';
      document.body.appendChild(banner);
      banner.querySelector('button').addEventListener('click',()=>{
        try { localStorage.setItem('webbest-cookie-notice-dismissed','1'); } catch (_) {}
        banner.remove();
      });
    }
  } catch (_) {}
  const current=location.pathname.split('/').pop()||'index.html';document.querySelectorAll('[data-link]').forEach(a=>{if(a.dataset.link===current)a.setAttribute('aria-current','page')});
  const steps=[['Бриф','Собираем контекст, цели и задачи. Хороший сайт начинается не с макета, а с точных вопросов.'],['Прототип','Строим логику будущего сайта и путь пользователя до выбора.'],['Дизайн','Находим характер проекта через сетку, типографику, цвет и детали.'],['Разработка','Превращаем дизайн в быстрый и отзывчивый цифровой опыт.'],['Запуск','Проверяем страницы и выпускаем проект в свет. Домен и хостинг подключаются заказчиком.']];
  const stepButtons=[...document.querySelectorAll('[data-step]')];if(stepButtons.length){const visual=document.querySelector('[data-step-visual]');stepButtons.forEach(btn=>btn.addEventListener('click',()=>{const i=Number(btn.dataset.step),s=steps[i];stepButtons.forEach(x=>x.classList.toggle('active',x===btn));document.querySelector('[data-step-label]').textContent=`STEP 0${i+1}`;document.querySelector('[data-step-title]').textContent=s[0];document.querySelector('[data-step-copy]').textContent=s[1];if(visual){visual.src=`assets/icons/process-${['brief','prototype','design','development','launch'][i]}.svg`;visual.alt=`Иллюстрация этапа: ${s[0].toLowerCase()}`}}))}
  const reviews=[['АС','АННА СОКОЛОВА · LUNAR STUDIO','Очень точное попадание в характер нашего бренда. Процесс был спокойным, ясным и по-настоящему бережным.'],['МК','МИХАИЛ КРАВЦОВ · KRAFT ARCHITECTURE','Сайт выглядит дороже, чем мы могли представить. Получили много тёплых отзывов от клиентов.'],['ЕВ','ЕЛЕНА ВОРОНЦОВА · MORO BEAUTY','Редкий случай, когда эстетика не мешает бизнесу — заявки начали приходить в первую неделю.']];let activeReview=0;const showReview=i=>{activeReview=(i+reviews.length)%reviews.length;const r=reviews[activeReview];document.querySelector('[data-review-avatar]').textContent=r[0];document.querySelector('[data-review-person]').textContent=r[1];document.querySelector('[data-review-text]').textContent=`«${r[2]}»`;document.querySelector('[data-review-count]').textContent=`0${activeReview+1} / 03`;document.querySelectorAll('[data-review-index]').forEach((b,j)=>b.classList.toggle('active',j===activeReview))};document.querySelectorAll('[data-review]').forEach(b=>b.addEventListener('click',()=>showReview(activeReview+(b.dataset.review==='next'?1:-1))));document.querySelectorAll('[data-review-index]').forEach(b=>b.addEventListener('click',()=>showReview(Number(b.dataset.reviewIndex))));if(document.querySelector('.review-card'))showReview(0);
  if('IntersectionObserver'in window){const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('reveal');io.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll('.service-card,.feature-card,.intro-band,.section-head').forEach(el=>{el.style.opacity='0';io.observe(el)})}
})();
