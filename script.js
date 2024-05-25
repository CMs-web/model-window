'use strict';

const btnShowModel = document.querySelectorAll('.show-modal');
const overley = document.querySelector('.overlay');
const model = document.querySelector('.modal');
const btnCloseModel = document.querySelector('.close-modal');

const openModel = function(){
    model.classList.remove('hidden');
    overley.classList.remove('hidden');
};

const closeModel = function(){
    model.classList.add('hidden');
    overley.classList.add('hidden');
};

for(let i=0; i<btnShowModel.length; i++)
 btnShowModel[i].addEventListener('click', openModel);



btnCloseModel.addEventListener('click',closeModel);
overley.addEventListener('click',closeModel);

document.querySelector('body').addEventListener('keydown',function(e){
    if(e.key==='Escape'){
        closeModel();
    }
})