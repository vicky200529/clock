const time = () => {
    const now = new Date();

    let hor = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();
    let dayIndex = now.getDay(); 

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[dayIndex];

    hor = hor < 10 ? "0" + hor : hor;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    const timing = `${hor}:${min}:${sec}`+"<br><br>"+`TODAY IS: ${day}`;

    document.querySelector(".display").innerHTML = timing;
};

time();
setInterval(time, 1000);
