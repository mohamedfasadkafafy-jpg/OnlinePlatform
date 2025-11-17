document.getElementById('loginForm').addEventListener('submit', function(e){
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMsg = document.getElementById('errorMsg');

    // Multiple users
    const users = [
        {username: "mohamed farouk", password: "2910mf"},
        {username: "aya hatem", password: "ay5410"},
        {username: "aya mahmoud", password: "ma643"},
        {username: "esraa anwar", password: "ea84521"},
        {username: "amira elsherbini", password: "ae311154"},
        {username: "aya medhat", password: "am84333328"},
        {username: "jana yosri", password: "jy75432198765674"},
        {username: "mahmoud wael", password: "mw6548876665444435"},
        {username: "rafiq mahmoud", password: "rm7777654897654"},
        {username: "mena elsayed", password: "me90856667438977"},
        {username: "rahma ibrahim", password: "ri65487900008765444432"},
        {username: "amr elshorbagy", password: "ae8888888800098965784"},
        {username: "abrar hassouna", password: "ah7666890654478"},
        {username: "zeina hani", password: "zh7654444367595"},
        {username: "fatima walid", password: "fw7531008765"},
        {username: "fatima ezzat", password: "fe80977754321165"},
        {username: "maryam alamir", password: "ma543332786554"},
        {username: "menna allah", password: "mal54322287699421"},
        {username: "haneen wael", password: "hw555438709844"},
        {username: "shahd yasser", password: "sy54447689043"},
    ];

    const validUser = users.find(user => user.username === username && user.password === password);

    if(validUser){
        window.location.href = "https://mohamedfasadkafafy-jpg.github.io/site/"; // Change this to the target URL
    } else {
        errorMsg.textContent = "Could not find your account";
    }
});
document.getElementById('loginForm').addEventListener('submit', function(e){
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMsg = document.getElementById('errorMsg');

    // Multiple users
    const users = [
        {username: "Dana Amr", password: "Da536744"},
        ];

    const validUser = users.find(user => user.username === username && user.password === password);

    if(validUser){
        window.location.href = "https://mohamedfasadkafafy-jpg.github.io/OnlinePlatformda/"; // Change this to the target URL
    } else {
        errorMsg.textContent = "Could not find your account";
    }
});
document.getElementById('loginForm').addEventListener('submit', function(e){
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMsg = document.getElementById('errorMsg');

    // Multiple users
    const users = [
        {username: "Rh", password: "Rh1"},
        ];

    const validUser = users.find(user => user.username === username && user.password === password);

    if(validUser){
        window.location.href = "https://mohamedfasadkafafy-jpg.github.io/OnlinePlatformra/"; // Change this to the target URL
    } else {
        errorMsg.textContent = "Could not find your account";
    }
});

