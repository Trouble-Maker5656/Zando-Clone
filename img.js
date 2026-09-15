function changeImg(thumbnail){
    let image = thumbnail.querySelector("img");

    document.getElementById('main-image').src = image.src;

    document.querySelectorAll('.thumbnail').forEach(function(item){
        item.classList.remove("active");
    });
    thumbnail.classList.add("active");
}
function change(size){
    document.querySelector('.size-text').textContent = "Size:"+ size.textContent;

    document.querySelectorAll('.size').forEach(function(item){
        item.classList.remove("active")
    });
    size.classList.add("active");
}
function shoesChange(shoes){
document.querySelectorAll('.shoes').forEach(function(item){
    item.classList.remove("active")
    });
    shoes.classList.add("active");

}