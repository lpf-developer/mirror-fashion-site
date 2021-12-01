let btn = document.querySelector("#back-to-top");

btn.addEventListener("click", function() {
    window.scrollTo(0, 0);
});

const home_item = 
document.querySelector('#home_item') .addEventListener("click", 

function(){
    document.querySelector('#home_item').classList.add('active')
    remove("#about_item")
})

const about_item = 
document.querySelector('#about_item') .addEventListener("click", 

function(){
    document.querySelector('#about_item').classList.add('active')
    remove("#home_item")
})

const remove = (id) => {
    document.querySelector(id).classList.remove('active')
}

