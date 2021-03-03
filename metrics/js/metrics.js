const el = document.getElementById('testel')
    , wrapOut = document.querySelector('#res-metrics')
    , ovf =document.getElementById('ovf')
    , contentbox =document.getElementById('contentbox')
    , resetOut = document.getElementById('reset-out')
    , scrollBtn = document.getElementById('scrollBtn')
    , stopScrollBtn = document.getElementById('stopScrollBtn')
;
let hndl;
let n = 0;

function getMetrics(e) {
    const target = e.target;
    const action = target.dataset.action;
    if(!action) {
        return false;
    }
    e.stopPropagation();
    let out = target.querySelector('span');
    if(action === 'offsetParent') {
        const parEl = el[action];
        out.innerHTML = parEl.nodeName + ( parEl.classList.length ? "." + parEl.classList : '' );
        return;
    }
    out.innerHTML = el[action];

}



wrapOut.addEventListener('click', getMetrics, false);

ovf.addEventListener('change', function(){
    el.style.overflow = this.checked ? 'hidden' : '';
    this.nextElementSibling.querySelector('span').innerHTML = this.checked ? 'hidden': 'none';
},false);

contentbox.addEventListener('change', function(){
    el.style.boxSizing = this.checked ? 'border-box' : 'content-box';
    this.nextElementSibling.querySelector('span').innerHTML = this.checked ? 'border-box': 'content-box';
},false);

resetOut.addEventListener('click', function(){
    wrapOut.querySelectorAll('span').forEach(item => item.innerHTML = '');
}, false);

scrollBtn.addEventListener('click', function(){
    const clH = el.scrollHeight - el.clientHeight;
    hndl = setInterval(function(){
        console.log(el.scrollTop, clH);
        if(el.scrollTop >= clH ) {
            clearInterval(hndl);
            return false;
        }
        el.scrollTop++;
     }, 10);
}, false);

stopScrollBtn.addEventListener('click', function(){
    clearInterval(hndl);
}, false);