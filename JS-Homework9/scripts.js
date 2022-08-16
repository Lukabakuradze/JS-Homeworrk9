let MainPostWrapper = document.getElementById('post-wrapper')
let overlay = document.getElementById('overlay');
let content = document.getElementById('content');
let close = document.getElementById('close');

function ajax(url, callback) {
    let requist = new XMLHttpRequest();
    requist.open('GET', 'url');
    requist.addEventListener('load', function () {
        let data = JSON.parse(requist.responseText);
        callback(data);

    });

    requist.send();
}
ajax('https://jsonplaceholder.typicode.com/posts', function (data) {
    printData(data);
});


function printData(data) {
    data.forEach(element => {
        CreatePost(element);
    });
}
function CreatePost(item) {
    let DivWrapper = document.createElement('div');
    DivWrapper.classList.add('posts');
    DivWrapper.setAttribute('data-id', item.id);

    let h3Tag = document.createElement('h3');
    h3Tag.textContent = item.id;
    h3Tag.classList.add('h3-from-js')

    let h2Tag = document.createElement('h2');
    h2Tag.textContent = item.title;
    h2Tag.classList.add('h2-from-js')

    DivWrapper.appendChild(h3Tag);
    DivWrapper.appendChild(h2Tag);

    DivWrapper.addEventListener('click', function (event) {
        let id = event.target.getAttribute('data-id');

        openOverlay(id);
    });

    MainPostWrapper.appendChild(DivWrapper);

    console.log(DivWrapper);

}

function openOverlay(id) {
    overlay.classList.add('active');
    let url = 'https://jsonplaceholder.typicode.com/posts/${id}'
    ajax(url, function (data) {
        console.log(data);
    });
    console.log(id);
}

close.addEventListener('click', function () {
    overlay.classList.remove('active');
})





