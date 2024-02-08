const quoteText =document.querySelector(".quote"),
authorName=document.querySelector(".name"),
quoteBtn=document.querySelector("button"),
soundBtn=document.querySelector(".sound");
copyBtn=document.querySelector(".copy");
tweetBtn=document.querySelector(".twitter");

function randomQuote(){
    quoteBtn.innerText="loading Quote...";
    quoteBtn.classList.add("loading");
    fetch("https://api.quotable.io/random").then(res =>res.json()).then(result =>{
        console.log(result);
        quoteText.innerText = result.content;
        authorName.innerText = result.author;
        quoteBtn.innerText="New Quote";
        quoteBtn.classList.remove("loading");
    });
}
soundBtn.addEventListener("click",()=>{
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText}  by ${authorName.innerText}`);
    speechSynthesis.speak(utterance);

    // if ('speechSynthesis' in window) {
    //     let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText}`);
    //     // Use 'speechSynthesis' instead of 'SpeechSynthesis'
    //     window.speechSynthesis.speak(utterance);
    // } else {
    //     console.error('Speech synthesis not supported in this browser.');
    // }
});

copyBtn.addEventListener("click",()=>{
   navigator.clipboard.writeText(quoteText.innerText);
});

tweetBtn.addEventListener("click",()=>{
    let tweetUrl=`https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
    window.open(tweetUrl,"_blank");
 });

quoteBtn.addEventListener("click",randomQuote);