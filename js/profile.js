// URL For The API Database //
const url               = "https://66f16df8415379191550df7c.mockapi.io/users/";
//-- URL For The API Database --//

// Profile User Section //
let welUser             = document.getElementById("welUser");
if (sessionStorage.getItem("nameForUser") === null) {
    welUser.textContent = "مرحباً";
} else {
    welUser.textContent = `مرحباً ${sessionStorage.getItem("nameForUser")}`;
};

let point               = document.getElementById("points");
if (sessionStorage.getItem('nameForUser') === null) {
    point.textContent   = 0;
} else {
    point.textContent   = sessionStorage.getItem('PointsForUser');
};
//-- Profile User Section --//

// =========================================================================================================================================== //
// =========================================================================================================================================== //

// Update Profile //
let nameProf            = document.getElementById("nameProf");
let nameUpdateInp       = document.getElementById("nameUpdate");
let passNameUpdate      = document.getElementById("passNameUpdate");
let messName            = document.getElementById("messName");
let btnNameUpdate       = document.getElementById("btnNameUpdate");

let usernameProf        = document.getElementById("usernameProf");
let usernameUpdateInp   = document.getElementById("usernameUpdate");
let passUsernameUpdate  = document.getElementById("passUsernameUpdate");
let messUsername        = document.getElementById("messUsername");
let btnUsernameUpdate   = document.getElementById("btnUsernameUpdate");

let emailProf           = document.getElementById("emailProf");
let emailUpdateInp      = document.getElementById("emailUpdate");
let passEmailUpdate     = document.getElementById("passEmailUpdate");
let messEmail           = document.getElementById("messEmail");
let btnEmailUpdate      = document.getElementById("btnEmailUpdate");

let passwordProf        = document.getElementById("passwordProf");
let passUpdateInp       = document.getElementById("passUpdate");
let passPasswordUpdate  = document.getElementById("passPasswordUpdate");
let messPass            = document.getElementById("messPass");
let btnPassUpdate       = document.getElementById("btnPassUpdate");

// Name //
nameProf.textContent    = sessionStorage.getItem("nameForUser");

btnNameUpdate.addEventListener("click", () => {

    if (passNameUpdate.value == sessionStorage.getItem("passForUser")) {
        sessionStorage.setItem("nameForUser", nameUpdateInp.value);

        fetch(url + sessionStorage.getItem('idForUser'), {
            method: 'PUT',
            body: JSON.stringify({
                name: sessionStorage.getItem("nameForUser")
            }),
            headers: {
            'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json())
        .then((data) => 
            {
                messName.style.display          = "block";
                messName.style.backgroundColor  = "rgb(92, 158, 92)";
                messName.textContent            = "تم تغيير اسمك";

                setTimeout(() => {
                    window.location.reload();
                }, 3000);
            });

    } else {
        messName.style.display          = "block";
        messName.style.backgroundColor  = "rgb(240, 128, 128)";
        messName.textContent            = "كلمة المرور غير صحيحة";

        setTimeout(() => {
            messName.style.display      = "none";
        }, 3000)
    };
});
//-- Name --//


// Username //
usernameProf.textContent    = sessionStorage.getItem("usernameForUser");

btnUsernameUpdate.addEventListener("click", () => {

    if (passUsernameUpdate.value == sessionStorage.getItem("passForUser")) {
        sessionStorage.setItem("usernameForUser", usernameUpdateInp.value);

        fetch(url + sessionStorage.getItem('idForUser'), {
            method: 'PUT',
            body: JSON.stringify({
                username: sessionStorage.getItem("usernameForUser")
            }),
            headers: {
            'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json())
        .then((data) => 
            {
                messUsername.style.display          = "block";
                messUsername.style.backgroundColor  = "rgb(92, 158, 92)";
                messUsername.textContent            = "تم تغيير اسم المستخدم";

                setTimeout(() => {
                    window.location.reload();
                }, 3000);
            });

    } else {
        messUsername.style.display          = "block";
        messUsername.style.backgroundColor  = "rgb(240, 128, 128)";
        messUsername.textContent            = "كلمة المرور غير صحيحة";

        setTimeout(() => {
            messUsername.style.display      = "none";
        }, 3000)
    };
});
//-- Username --//


// Email //
emailProf.textContent    = sessionStorage.getItem("emailForUser");

btnEmailUpdate.addEventListener("click", () => {

    if (passEmailUpdate.value == sessionStorage.getItem("passForUser")) {
        sessionStorage.setItem("emailForUser", emailUpdateInp.value);

        fetch(url + sessionStorage.getItem('idForUser'), {
            method: 'PUT',
            body: JSON.stringify({
                email: sessionStorage.getItem("emailForUser")
            }),
            headers: {
            'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json())
        .then((data) => 
            {
                messEmail.style.display          = "block";
                messEmail.style.backgroundColor  = "rgb(92, 158, 92)";
                messEmail.textContent            = "تم تغيير البريد الإلكتروني";

                setTimeout(() => {
                    window.location.reload();
                }, 3000);
            });

    } else {
        messEmail.style.display          = "block";
        messEmail.style.backgroundColor  = "rgb(240, 128, 128)";
        messEmail.textContent            = "كلمة المرور غير صحيحة";

        setTimeout(() => {
            messEmail.style.display      = "none";
        }, 3000)
    };
});
//-- Email --//


// Password //
passwordProf.textContent    = "**********";

btnPassUpdate.addEventListener("click", () => {

    if (passPasswordUpdate.value == sessionStorage.getItem("passForUser")) {
        sessionStorage.setItem("passForUser", passUpdateInp.value);

        fetch(url + sessionStorage.getItem('idForUser'), {
            method: 'PUT',
            body: JSON.stringify({
                password: sessionStorage.getItem("passForUser")
            }),
            headers: {
            'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json())
        .then((data) => 
            {
                messPass.style.display          = "block";
                messPass.style.backgroundColor  = "rgb(92, 158, 92)";
                messPass.textContent            = "تم تغيير كلمة المرور";

                setTimeout(() => {
                    window.location.reload();
                }, 3000);
            });

    } else {
        messPass.style.display          = "block";
        messPass.style.backgroundColor  = "rgb(240, 128, 128)";
        messPass.textContent            = "كلمة المرور غير صحيحة";

        setTimeout(() => {
            messPass.style.display      = "none";
        }, 3000)
    };
});
//-- Password --//
//--- Update Profile ---/// 

// =========================================================================================================================================== //
// =========================================================================================================================================== //

// Delete The Account //
const del = document.getElementById("delete");

del.addEventListener("click", () => {
    let answer = confirm(`هل أنت متأكد؟
        ما رأيك في إعادة التفكير في ذلك ؟`);

    if (answer) {
        fetch(url + sessionStorage.getItem('idForUser'), {
            method: 'DELETE',
        });

        // Go To Sign in Page //
        window.location.href = "signIn.html";
    };
});
//--- Delete The Account ---//