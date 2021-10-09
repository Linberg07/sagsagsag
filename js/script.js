window.addEventListener('load',windowLoad);

function windowLoad(){
let rowButton = document.querySelectorAll(".content-row__button");
let popupBg = document.querySelectorAll(".popup-bg");
let popupClose = document.querySelectorAll(".popup-close");
let typeBtn = document.querySelectorAll(".type__btn");
let checkbox = document.querySelectorAll(".checkbox");

for (let i = 0; i < rowButton.length; i++) {
  rowButton[i].addEventListener('click',rowButtonClick);
  function rowButtonClick(){
    document.getElementById('popupBtn').classList.add('active');
	document.getElementsByTagName('body')[0].classList.add('lock');
  };
}

for (let i = 0; i < typeBtn.length; i++) {
  typeBtn[i].addEventListener('click',typeBtnClick);
  function typeBtnClick(){
    document.getElementById('popupType').classList.add('active');
	document.getElementsByTagName('body')[0].classList.add('lock');
  };
}

for (let i = 0; i < popupBg.length; i++) {
  popupBg[i].addEventListener('click',popupBgClick);
  function popupBgClick(){
  	let popup = popupBg[i].parentNode;
  	let allPopup = document.querySelectorAll(".popup");
  	popup.classList.remove('active');
  	document.getElementsByTagName('body')[0].classList.remove('lock');
  };
}

for (let i = 0; i < popupClose.length; i++) {
  popupClose[i].addEventListener('click',popupCloseClick); 
  function popupCloseClick(){
  	let body = popupClose[i].parentNode;
  	let popup = body.parentNode;
  	
    popup.classList.remove('active');
  	document.getElementsByTagName('body')[0].classList.remove('lock');
  };
}

for (let i = 0; i < checkbox.length; i++) {
  checkbox[i].addEventListener('click',checkboxClick);
  function checkboxClick(){
  	let input = checkbox[i].querySelector('input');
    checkbox[i].classList.toggle('active');
    if(checkbox[i].classList.contains('active')){
    	input.setAttribute('checked',true);
    }else{
    	input.setAttribute('checked',false);
    }
  };
}




}


