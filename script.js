const generator = document.getElementsByClassName('generator_button')[0];
const soundButton = document.getElementsByClassName('sound_button')[0];
const copy = document.getElementsByClassName('copy_button')[0];
const myfunction = () => {
    generator.addEventListener("click", async () => {
        const response = await fetch("https://api.quotable.io/random")
        let quotes = await response.json()
        // document.querySelector('.quote_container h1').innerHTML=`${quotes.content}`
        myquote.innerText = quotes.content
        // document.querySelector('.quote_container p').innerHTML=`${quotes.author}`
        myauthor.innerText = quotes.author



    })


}
myfunction();

copy.addEventListener('click', () => {
    navigator.clipboard.writeText(myquote.innerHTML)
})

soundButton.addEventListener('click', () => {
    const quote = document.querySelector('.quote_container h1').innerText;
    const author = document.querySelector('.quote_container p').innerText;
    const speech = `${quote} by ${author}`;
    const speak = new SpeechSynthesisUtterance(speech);
    speechSynthesis.speak(speak);
});

