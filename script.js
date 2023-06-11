//menu hamburguesa
let icon = document.querySelector('.menu-icon');
let iconClose= document.querySelector('.close-icon');
let backModal = document.querySelector('.background-black-modal')

icon.addEventListener('click', ()=>{
    backModal.classList.toggle('test')
})
iconClose.addEventListener('click', ()=>{
    backModal.classList.toggle('test')
})


//black modal menu desplegable
let arrows = document.querySelectorAll('.content-click')

arrows.forEach(arrow =>{
    arrow.addEventListener('click', ()=>{
        arrow.classList.toggle('arrow');

        let height=0;
        let menu=arrow.nextElementSibling;
        if(menu.clientHeight=="0"){
            height=menu.scrollHeight;
        }
        menu.style.height= `${height}px`;
    })
})

// menu desplegable desktop
let arrowsDesk = document.querySelectorAll('.content-click-desk');
let listFeatureDesk = document.querySelector('.options-features-desk');
// let listCompanyDesk = document.querySelector('.options-company-desk');

arrowsDesk.forEach(arrowDesk => {
    arrowDesk.addEventListener('click', ()=>{
        arrowDesk.classList.toggle('arrowDesk')
        
        let menuDesk=arrowDesk.nextElementSibling;
        menuDesk.classList.toggle('showFeatures');
    })
    
});
