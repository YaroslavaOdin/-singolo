const HEADER = document.getElementById("header");
const MENU = document.getElementById("menu");
const VERTICAL_PHONE = document.getElementById("vertical_phone");
const HORIZONTAL_PHONE = document.getElementById("horizontal_phone");
const VERTICAL_SCREEN = document.getElementById("vertical_screen");
const HORIZONTAL_SCREEN = document.getElementById("horizontal_screen");
const TAGS=document.getElementById("tags");
const PORTFOLIO_IMG = document.getElementById("container_portfolio");
const SUBMIT = document.getElementById("forma");
const MODAL = document.getElementById("modal");
const MODAL_BUTTON = document.getElementById("modal_button")


MENU.addEventListener('click', (event) =>{
    MENU.querySelectorAll('.link').forEach(item => item.classList.remove('menu_active'));
    event.target.classList.add('menu_active');
});

    VERTICAL_PHONE.addEventListener('click', () => {
    VERTICAL_SCREEN.classList.contains('display_none') ? 
    VERTICAL_SCREEN.classList.remove('display_none') :
    VERTICAL_SCREEN.classList.add('display_none');
});

    HORIZONTAL_PHONE.addEventListener('click', () => {
    HORIZONTAL_SCREEN.classList.contains('display_none') ? 
    HORIZONTAL_SCREEN.classList.remove('display_none') :
    HORIZONTAL_SCREEN.classList.add('display_none');
});

TAGS.addEventListener('click', (event)=>{
    if(event.target.tagName == 'BUTTON'){
        TAGS.querySelectorAll('button').forEach(el => el.classList.remove('tag_selected'));
        event.target.classList.add('tag_selected');

    var array = Array.from(PORTFOLIO_IMG.querySelectorAll('img'));
        shuffleArray(array);
        function shuffleArray(array) {
            for (var i = array.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
            return array;
        }
        let array2 = array.splice(11,1);        
        array.forEach(el =>{
            document.querySelector('#container_portfolio').append(el);
        });    
    }
});

PORTFOLIO_IMG.addEventListener('click', (event) =>{
    PORTFOLIO_IMG.querySelectorAll("img").forEach(item => item.classList.remove('image_selected'));
    event.target.classList.add('image_selected');
});


SUBMIT.addEventListener('submit', (event) => {
    event.preventDefault();
    if(document.getElementById('name').value && document.getElementById('email').value) {
        const subject = document.getElementById('subject').value.toString();
        const project = document.getElementById('project').value.toString();
        MODAL.classList.remove('modal_hidden');
        if(subject) {
            document.getElementById('text_subject').innerText = 'Тема: ' + subject;
        } else {
            document.getElementById('text_subject').innerText = 'Без темы';
        }
        if(project) {
            document.getElementById('text_project').innerText = 'Описание: ' + project;
        } else {
            document.getElementById('text_project').innerText = 'Без описания';
        }
    }
});

MODAL_BUTTON.addEventListener('click', () => {
    MODAL.classList.add('display_none');
})

document.querySelector('.slider__button_left').addEventListener('click', (event) => {
    if(document.getElementById('slide_slide1').style.transform == 'translateX(-1020px)') {
            document.getElementById('slide_slide1').style.transform = 'translateX(0px)';
            document.getElementById('slide_slide2').style.transform = 'translateX(1020px)';
        } else {
            document.getElementById('slide_slide1').style.transform = 'translateX(-1020px)';
            document.getElementById('slide_slide2').style.transform = 'translateX(0px)';
        }
});

document.querySelector('.slider__button_right').addEventListener('click', (event) => {
    if(document.getElementById('slide_slide1').style.transform == 'translateX(-1020px)') {
        document.getElementById('slide_slide1').style.transform = 'translateX(0px)';
        document.getElementById('slide_slide2').style.transform = 'translateX(1020px)';
    } else {
        document.getElementById('slide_slide1').style.transform = 'translateX(-1020px)';
        document.getElementById('slide_slide2').style.transform = 'translateX(0px)';
    }
});
