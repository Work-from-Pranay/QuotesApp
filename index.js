
const quotes = document.getElementById("quotes")
const author = document.getElementById("author")
const tweet=document.getElementById("tweetMe")
let realData = "";
let qdata="";
const filterData = () => {
    let str = document.getElementById("author").innerHTML;
    let res = str.replace(", type.fit", "");
    document.getElementById("author").innerHTML = res;
}
const tweetHandler=()=>{

    let twity=`https://twitter.com/intent/tweet?text=${qdata.text}`
    window.open(twity)
}
const getRandom = () => {
    let rnum = Math.floor(Math.random() * 10);
    qdata=realData[rnum];
    quotes.innerText = `${realData[rnum].text}`
    author.innerText = `~${realData[rnum].author}`
    filterData();
}
const getQuotes = async () => {
    const api = "https://type.fit/api/quotes";
    try {
        let data = await fetch(api);
        realData = await data.json();
        // getRandom();
    } catch (error) {

    }
}
tweet.addEventListener('click',tweetHandler)
newQ.addEventListener('click', getRandom)

getQuotes();

