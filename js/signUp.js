// Variables //
// URL For The API Database //
const url               = "https://66e8036bb17821a9d9daf500.mockapi.io/users/";

// All About Name //
let uName               = document.getElementById('name');
let chechNameDiv        = document.getElementById('checkUserRegName');
let pragName            = document.getElementById('paragName');

// All About Username //
let uUsername           = document.getElementById('username');
let checkUserDiv        = document.getElementById('checkUserRegUser');
let pragUsername        = document.getElementById('paragUsername');

// All About Email //
let uEmail              = document.getElementById('email');
let checkEmailDiv       = document.getElementById('checEmailReg');
let pragEmailName       = document.getElementById('paragEmail');
let validEmail          = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// All About Password //
let uPass               = document.getElementById('password');
let checkPassDiv        = document.getElementById('checkPassReg');
let pragPass            = document.getElementById('paragPass');

// All About Confirm Password //
let uConfPass           = document.getElementById('confirmPassword');
let checkConfPassDiv    = document.getElementById('checkConfPassReg');
let pragConfPass        = document.getElementById('paragConfPass');

// All About Accept Account //
let registerDiv         = document.getElementById('right');
let registerPrag        = document.getElementById('pragRight');

// Button For The Form //
let uResBtn             = document.getElementById('regBtn');

// ------------------------------------------------------------------------------------------------------------------------------------------- //

// Click On Button Form //
uResBtn.addEventListener("click", (e) => {
    e.preventDefault();

    // Variables Arrays //
    let namesArry   = [];
    let usernames   = [];
    let emailsArry  = [];
    let passsArry   = [];

    // Get Fetch To Test Data That Exist In Database //
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        data.map((item) => {
            namesArry.push(item.name);

            usernames.push(item.username);

            emailsArry.push(item.email);

            passsArry.push(item.password);
        });
    
        // Test Data Come From The Form //
        if (typeof(uName.value) === 'string' && uName.value.length > 3) {
            // True Name //
            if (typeof(uUsername.value) === 'string' && !usernames.includes(uUsername.value)) {
                // True Username part-1 //
                if (uUsername.value.length > 5) {
                    // True Uswername Part-2 //
                    if (typeof(uEmail.value) === 'string' && !emailsArry.includes(uEmail.value)) {
                        // True Email Part-1 //
                        if (uEmail.value.match(validEmail)) {
                            // True Email Part-2 //
                            if (typeof(uPass.value) === 'string' && uPass.value.match(/^[0-9]+$/) != null) {
                                // True Password Part-1 //
                                if (uPass.value.length > 7) {
                                    // True Password Part-2 //
                                    if (uPass.value === uConfPass.value) {
                                        // True Confirm Password //
                                        fetch(url, {
                                            method: 'POST',
                                            body: JSON.stringify({
                                                name: uName.value,
                                                username: uUsername.value,
                                                email: uEmail.value,
                                                password: uPass.value
                                            }),
                                            headers: {
                                            'Content-type': 'application/json; charset=UTF-8',
                                            },
                                        })
                                        .then((response) => response.json())
                                        .then((json) => {
                                            registerDiv.style.display   = "block";
                                            registerPrag.textContent    = "لقد تم تسجيلك، الآن";
                
                                            setTimeout(() => {
                                                // Go To Sign In Page //
                                                window.location.href = "SignIn.html";
                                            }, 3000);
                                        });
                                    } else {
                                        // False Confirm Password //
                                        checkConfPassDiv.style.display  = "block";
                                        pragConfPass.textContent        = "كلمات المرور لا تتطابق";

                                        setTimeout(() => {
                                            checkConfPassDiv.style.display  = "none";
                                        }, 3000);
                                    };
                                } else {
                                    // False Password Part-2 //
                                    checkPassDiv.style.display  = "block";
                                    pragPass.textContent        = "كلمة المرور يجب أن تكون أكثر من 7 أرقام";

                                    setTimeout(() => {
                                        checkPassDiv.style.display  = "none";
                                    }, 3000);
                                };
                            } else {
                                // False Password Part-1 //
                                checkPassDiv.style.display  = "block";
                                pragPass.textContent        = "كلمة المرور يجب أن تحتوي على أرقام";
                            
                                setTimeout(() => {
                                    checkPassDiv.style.display  = "none";
                                }, 3000);
                            };
                        } else {
                            // False Email Part-2 //
                            checkEmailDiv.style.display = "block";
                            pragEmailName.textContent   = "صيغة البريد الإلكتروني غير صحيحة";

                            setTimeout(() => {
                                checkEmailDiv.style.display  = "none";
                            }, 3000);
                        };
                    } else {
                        // False Email Part-1 //
                        checkEmailDiv.style.display = "block";
                        pragEmailName.textContent   = "البريد الإلكتروني موجود بالفعل";

                        setTimeout(() => {
                            checkEmailDiv.style.display  = "none";
                        }, 3000);
                    };
                } else {
                    // False Uswername Part-2 //
                    checkUserDiv.style.display  = "block";
                    pragUsername.textContent    = "اسم المستخدم يجب أن يكون أكثر من 5 أحرف";

                    setTimeout(() => {
                        checkUserDiv.style.display  = "none";
                    }, 3000);
                };
            } else {
                // False Username part-1 //
                checkUserDiv.style.display  = "block";
                pragUsername.textContent    = "اسم المستخدم موجود بالفعل";

                setTimeout(() => {
                    checkUserDiv.style.display  = "none";
                }, 3000);
            };
        } else {
            // False Name //
            chechNameDiv.style.display  = "block";
            pragName.textContent        = "الاسم يجب أن يكون أكثر من 3 أحرف";
            
            setTimeout(() => {
            chechNameDiv.style.display  = "none";
            }, 3000);
        };
    });
});