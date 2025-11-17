document.getElementById('loginForm').addEventListener('submit', function(e){
    e.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMsg = document.getElementById('errorMsg');

    // ALL USERS IN ONE ARRAY
    const users = [
        {username: "mohamed farouk", password: "2910mf", link: "https://mohamedfasadkafafy-jpg.github.io/site/"},
        {username: "aya hatem", password: "ay5410", link: "https://mohamedfasadkafafy-jpg.github.io/site/"},
        {username: "aya mahmoud", password: "ma643", link: "https://mohamedfasadkafafy-jpg.github.io/site/"},
        {username: "esraa anwar", password: "ea84521", link: "https://mohamedfasadkafafy-jpg.github.io/site/"},
        {username: "amira elsherbini", password: "ae311154", link: "https://mohamedfasadkafafy-jpg.github.io/site/"},
        {username: "aya medhat", password: "am84333328", link: "https://mohamedfasadkafafy-jpg.github.io/site/"},

        // Dana
        {username: "Dana Amr", password: "Da536744", link: "https://mohamedfasadkafafy-jpg.github.io/OnlinePlatformda/"},

        // Rh
        {username: "Rh", password: "Rh1", link: "https://mohamedfasadkafafy-jpg.github.io/OnlinePlatformra/"}
    ];

    // FIND USER
    const validUser = users.find(user =>
        user.username.toLowerCase() === username.toLowerCase() &&
        user.password === password
    );

    if(validUser){
        window.location.href = validUser.link;
    } else {
        errorMsg.textContent = "Could not find your account";
    }
});
