const sectionElement = document.getElementById('section-element')
     , contentbox = document.getElementById('contentbox')
    , getBounding = document.getElementById('get-bounding')
    , getBoundingInfo = document.getElementById('get-bounding-info')
    , pageYOffsetInfo = document.getElementById('page-y-offset-info')
    , pageXOffsetInfo = document.getElementById('page-x-offset-info')
    , getCoordsElement = document.getElementById('get-coords-element')
    , testCoordsEl= document.getElementById('test-coords-el')
    , deClientH = document.getElementById('deClientH')
    , deClientW = document.getElementById('deClientW')
    , deInnerW = document.getElementById('de-inner-w')
    , deInnerH = document.getElementById('de-inner-h')
    , scTo = document.getElementById('sc-to')
    , scDeTo = document.getElementById('sc-de-to')
    , scBy = document.getElementById('sc-by')

;

scBy.addEventListener('click', function(){
    window.scrollBy(0, 50);
}, false);

scDeTo.addEventListener('click', function(){
        document.documentElement.scrollTop = 250;
}, false);

scTo.addEventListener('click', function(){
    window.scrollTo(0, 100);
}, false);


deInnerW.addEventListener('click', function(){
    this.querySelector('span').innerHTML = " = " + window.innerWidth;
}, false);

deInnerH.addEventListener('click', function(){
    this.querySelector('span').innerHTML = " = " + window.innerHeight;
}, false);

deClientH.addEventListener('click', function(){
    this.querySelector('span').innerHTML = " = " + document.documentElement.clientHeight;
}, false);
deClientW.addEventListener('click', function(){
    this.querySelector('span').innerHTML = " = " + document.documentElement.clientWidth;
}, false);

contentbox.addEventListener('change', function(){
    sectionElement.style.boxSizing = this.checked ? 'border-box' : 'content-box';
    this.nextElementSibling.querySelector('span').innerHTML = this.checked ? 'border-box': 'content-box';
},false);

getBoundingInfo.addEventListener('click', function(){
    const coords = getBounding.getBoundingClientRect().toJSON();
    console.log(coords);
    let st = '';
    for(let prop in coords) {
       st += `${prop} = <b>${coords[prop]}</b> , `;
    }
    getBounding.innerHTML = st.trim().slice(0, -1).trim();

}, false);

pageYOffsetInfo.addEventListener('click', function(){
    this.querySelector('span').innerHTML = " = " + window.pageYOffset;
}, false);

pageXOffsetInfo.addEventListener('click', function(){
    this.querySelector('span').innerHTML = " = " +  window.pageXOffset;
}, false);


function getCoords(el) {
    const box = el.getBoundingClientRect();
    const scrollTop  = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft  = window.pageXOffset || document.documentElement.scrollLeft;
    let top = box.top + scrollTop;
    let left = box.left + scrollLeft;
    return {
        top: Math.round(top),
        left: Math.round(left)
    }
}

getCoordsElement.addEventListener('click', function(){
    const res = getCoords(testCoordsEl);
    let st = '';
    for(let prop in res) {
        st += `<b>${prop} =  ${res[prop]}</b> , `;
    }
    testCoordsEl.innerHTML = st.trim().slice(0, -1).trim();
}, false);


//sectionElement.addEventListener('click', handlerCoords, false);