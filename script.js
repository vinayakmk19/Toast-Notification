let toastBox  = document.getElementById('toastBox');

let success = '<i class="fa-solid fa-circle-check"></i> Successfully submitted';
let error = '<i class="fa-solid fa-circle-xmark"></i> Please fix the Error';
let invalid = '<i class="fa-solid fa-circle-exclamation"></i> Invalid input check again';

function showToast(msg){
    let toast = document.createElement('div');
    toast.innerHTML = msg;
    toast.classList.add('toast');
    toastBox.appendChild(toast);

    if(msg.includes('Error')){
        toast.classList.add('error');
    }else if(msg.includes('Invalid')){
        toast.classList.add('invalid');
    }

    setTimeout(()=>{
        toast.remove();
    },5000);
}