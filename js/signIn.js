// Variables //
// URL For The API Database //
const url               = "https://66f16df8415379191550df7c.mockapi.io/users/";

// All About User Or Email //
let uUsernameEmail      = document.getElementById('nameEmail');
let chechUserEmailDiv   = document.getElementById('checkUserLo');
let pragUserEmail       = document.getElementById('checkPragLo');

// All About Password //
let uPassword           = document.getElementById('password');
let checkPassDiv        = document.getElementById('checkPassLo');
let pragPass            = document.getElementById('checkPragPassLo');

// Button For The Form //
let uLogBtn             = document.getElementById('logBtn');

// ------------------------------------------------------------------------------------------------------------------------------------------- //

// Click On Button Form //
uLogBtn.addEventListener("click", (e) => {
    e.preventDefault();

    // Variable For User //
    let findUser    = [];

    // Get Fetch To Test Data That Exist In Database //
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        data.find((item) => {
            if (typeof(uUsernameEmail.value) === 'string' && uUsernameEmail.value == item.username ||
                typeof(uUsernameEmail.value) === 'string' && uUsernameEmail.value == item.email) {
                    findUser.push(item);
            };
        });
            
        // Test Data Come From The Form //
        if (findUser.length != 0) {
            // Finduser Variable != 0 //
            if (typeof(uUsernameEmail.value) === 'string' && uUsernameEmail.value == findUser[0].username ||
                typeof(uUsernameEmail.value) === 'string' && uUsernameEmail.value == findUser[0].email) {
                // True Username Or Email //
                if (typeof(uPassword.value) === 'string' && uPassword.value == findUser[0].password) {
                    // True Password //
                    // sessionStorage //
                    sessionStorage.setItem("idForUser", findUser[0].id);
                    sessionStorage.setItem("nameForUser", findUser[0].name);
                    sessionStorage.setItem("usernameForUser", findUser[0].username);
                    sessionStorage.setItem("emailForUser", findUser[0].email);
                    sessionStorage.setItem("passForUser", findUser[0].password);
                    sessionStorage.setItem("PointsForUser", findUser[0].points);
                    
                    // Go To Home Page //
                    window.location.href = "index.html";
                } else {
                    // False Password //
                    checkPassDiv.style.display      = "block";
                    pragPass.textContent            = "كلمة المرور غير صحيحة";

                    setTimeout(() => {
                        checkPassDiv.style.display  = "none";
                    }, 3000);
                };
            } else {
                // False Username Or Email //
                chechUserEmailDiv.style.display     = "block";
                pragUserEmail.textContent           = "اسم المستخدم أو البريد الإلكتروني غير صحيح";
                
                setTimeout(() => {
                    chechUserEmailDiv.style.display = "none";
                }, 3000);
            };
        } else {
            // False Username Or Email //
            chechUserEmailDiv.style.display     = "block";
            pragUserEmail.textContent           = "اسم المستخدم أو البريد الإلكتروني غير صحيح";
            
            setTimeout(() => {
                chechUserEmailDiv.style.display = "none";
            }, 3000);
        };
    });
});