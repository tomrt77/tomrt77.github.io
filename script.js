
/* let data = {
    photo : "images/Blossoming tree on spring.jpg",
    title : "Blossoming tree on spring",
    description : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi nostrum asperiores nam, a vel blanditiis ipsum quo eius placeat"
};
*/

let imagesData = [
    {photo : "images/Blossoming tree on spring.jpg", title : "Blossoming tree on spring", description : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi nostrum asperiores nam, a vel blanditiis ipsum quo eius placeat"},
    {photo : "images/Elephant family by the water.jpg", title : "Elephant family by the water", description : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi nostrum asperiores nam, a vel blanditiis ipsum quo eius placeat"},
    {photo : "images/Lighthouse on the island.jpg", title : "Lighthouse on the island", description : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi nostrum asperiores nam, a vel blanditiis ipsum quo eius placeat"},
    {photo : "images/Little bird.jpg", title : "Little bird", description : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi nostrum asperiores nam, a vel blanditiis ipsum quo eius placeat"},
    {photo : "images/Little daisy flower.jpg", title : "Little daisy flower", description : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi nostrum asperiores nam, a vel blanditiis ipsum quo eius placeat"},
    {photo : "images/Lonlely lighthouse.jpg", title : "Lonlely lighthouse", description : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi nostrum asperiores nam, a vel blanditiis ipsum quo eius placeat"},
    {photo : "images/Riverside.jpg", title : "Riverside", description : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi nostrum asperiores nam, a vel blanditiis ipsum quo eius placeat"},
    {photo : "images/Sunset by the pier.jpg", title : "Sunset by the pier", description : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi nostrum asperiores nam, a vel blanditiis ipsum quo eius placeat"}
];

let currentPhoto = 4;

function loadPhoto(photoNumber){
    clearThumbnailClass();
    console.log(currentPhoto);
    console.log(typeof currentPhoto);
    $('#photo').attr("src",imagesData[currentPhoto].photo);
    $('#photo-title').text(imagesData[currentPhoto].title);
    $(`#photo-description`).text(imagesData[currentPhoto].description);
    $(`#${photoNumber}`).addClass('active-thumb-image');
}

function clearThumbnailClass() {
    for (let i=0; i<imagesData.length; i++){
        $(`#${i}`).attr('class','thumb-image');
    }
}


$('.left-arrow').click(() => {
    if (currentPhoto == 0){
        currentPhoto = imagesData.length-1;
    } else {
        currentPhoto--;
    }
    loadPhoto(currentPhoto);
})

$('.right-arrow').click(() => {
    if (currentPhoto === imagesData.length-1){
        currentPhoto = 0;
    } else {
        currentPhoto++;
    }
    loadPhoto(currentPhoto);
})


for (let i=0; i<imagesData.length; i++) {
    $('#thumb-container').append(`
        <div class="thumbnail">
            <img class="thumb-image" id="${i}" src="${imagesData[i].photo}">
            <p class="title">${imagesData[i].title}</p>
        </div>`);
};



$('#thumb-container').on('click','img', function() {
    currentPhoto = parseInt(($(this).attr('id')));
    loadPhoto(currentPhoto);
});

loadPhoto(currentPhoto);