var intro = document.getElementById('author-intro');

// var typewriter = new Typewriter(intro, {
//     loop: true
// });

// typewriter.typeString('Hello Aliens!')
//     .pauseFor(2500)
//     .deleteAll()
//     .typeString(`I am ${data.name}`)
//     .pauseFor(2500)
//     .deleteChars(8)
//     .typeString(`a ${data.designation}`)
//     .pauseFor(2500)
//     .start();

data.technologies.forEach(element => {
    $("#cards-technologies").append(` <div class="technologies-container">
    <img class="technologies-image" src="${element.logo}" >
    <hr>
    <div class="technologies-heading">${element.name}</div>
</div>`)
});
    
