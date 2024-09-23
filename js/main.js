// Setting Game Options //
let increasePoints      = 5;
//--- Setting Game Options ---//

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

// Variables //
// Images //
const imgWord1          = document.getElementById("imgWordOne");
const imgWord2          = document.getElementById("imgWordTwo");
const imgWord3          = document.getElementById("imgWordThree");
//-- Images --//

// Lists //
const li1               = document.getElementById("listOne");
const li2               = document.getElementById("listTwo");
const li3               = document.getElementById("listThree");
//-- Lists --//

// Checking //
const inpWord           = document.getElementById("inputWord");
const btnWord           = document.getElementById("buttonWord");
const btnReload         = document.getElementById("reload");
//-- Checking --//

// Message //
let mess                = document.getElementById("message");
let titleMess           = document.getElementById("titleMessage")
//-- Message --//

// Sign Out //
const signOut           = document.getElementById("signOut"); 
//-- Sign Out --//
//--- Variables ---//

// ------------------------------------------------------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------------------------------------------------------- //

// Manage Words //
let wordToGuess = "";
const words = ["الرياض", "مكة المكرمة", "المدينة المنورة", "الشرقية", "القصيم", "عسير", "تبوك", "حائل", "جازان",
                "الحدود الشمالية", "نجران", "الباحة", "الجوف"];
wordToGuess = words[Math.floor(Math.random() * words.length)];
let messageArea = document.querySelector(".message");

// Areas information //
if (wordToGuess == "مكة المكرمة") {

    // images //
    imgWord1.src = "images/makkah1.jpg";
    imgWord2.src = "images/makkah2.jpg";
    imgWord3.src = "images/makkah3.jpg";
    //- images -// 
    

    // Lists //
    li1.textContent = "ثاني أكثر مناطق المملكة من حيث الكثافة السكانية";
    li2.textContent = "يزورها سنويا ما يفوق 20 مليون زائر";
    li3.textContent = "تتكون من 10 حروف";
    //- Lists -//
    
} else if (wordToGuess == "المدينة المنورة") {

        // images //
        imgWord1.src = "images/madinah1.jpg";
        imgWord2.src = "images/madinah2.jpg";
        imgWord3.src = "images/madinah3.jpg";
        //- images -// 
        
    
        // Lists //
        li1.textContent = "خامس أكثر مناطق المملكة من حيث الكثافة السكانية";
        li2.textContent = "تحتل المرتبة الثالثة من حيث المساحة";
        li3.textContent = "تتكون من 14 حرف";
        //- Lists -//

} else if (wordToGuess == "الرياض") {
    
    // images //
    imgWord1.src = "images/riy1.jpg";
    imgWord2.src = "images/riy2.jpg";
    imgWord3.src = "images/riy3.jpg";
    //- images -// 
    

    // Lists //
    li1.textContent = "عاصمة المملكة العربية السعودية";
    li2.textContent = "تقع وسط شبه الجزيرة العربية";
    li3.textContent = "تتكون من 6 حروف";
    //- Lists -//

} else if (wordToGuess == "الشرقية") {
    
    // images //
    imgWord1.src = "images/sharqia1.jpg";
    imgWord2.src = "images/sharqia2.jpg";
    imgWord3.src = "images/sharqia3.jpg";
    //- images -// 
    

    // Lists //
    li1.textContent = "أكبر مناطق المملكة العربية السعودية مساحةً";
    li2.textContent = "أكثر منطقة يوجد بها النفط في العالم";
    li3.textContent = "تتكون من 7 حروف";
    //- Lists -//

} else if (wordToGuess == "القصيم") {
    
    // images //
    imgWord1.src = "images/qas1.jpg";
    imgWord2.src = "images/qas2.jpg";
    imgWord3.src = "images/qas3.jpg";
    //- images -// 
    

    // Lists //
    li1.textContent = "سابع أكثر مناطق المملكة من حيث الكثافة السكانية";
    li2.textContent = "تقع وسط المملكة العربية السعودية";
    li3.textContent = "تتكون من 6 حروف";
    //- Lists -//

} else if (wordToGuess == "عسير") {
    
    // images //
    imgWord1.src = "images/asir1.jpg";
    imgWord2.src = "images/asir2.jpg";
    imgWord3.src = "images/asir3.jpg";
    //- images -// 
    

    // Lists //
    li1.textContent = "تقع في الجنوب الغربي من المملكة العربية السعودية";
    li2.textContent = "تتصل بحدود صغيرة مع اليمن جنوبياً كحدود دولية";
    li3.textContent = "تتكون من 4 حروف";
    //- Lists -//

} else if (wordToGuess == "تبوك") {
    
    // images //
    imgWord1.src = "images/tabuk1.jpg";
    imgWord2.src = "images/tabuk2.jpg";
    imgWord3.src = "images/tabuk3.jpg";
    //- images -// 
    

    // Lists //
    li1.textContent = "تقع في شمال غرب المملكة العربية السعودية";
    li2.textContent = "ثامن أكثر مناطق المملكة من حيث الكثافة السكانية";
    li3.textContent = "تتكون من 4 حروف";
    //- Lists -//

} else if (wordToGuess == "حائل") {
    
    // images //
    imgWord1.src = "images/hail1.jpg";
    imgWord2.src = "images/hail2.jpg";
    imgWord3.src = "images/hail3.jpg";
    //- images -// 
    

    // Lists //
    li1.textContent = "تحتل المنطقة الترتيب السابع من ناحية المساحة في المملكة العربية السعودية";
    li2.textContent = "تاسع أكثر مناطق المملكة من حيث الكثافة السكانية";
    li3.textContent = "تتكون من 4 حروف";
    //- Lists -//

} else if (wordToGuess == "جازان") {
    
    // images //
    imgWord1.src = "images/jazan1.jpg";
    imgWord2.src = "images/jazan2.jpg";
    imgWord3.src = "images/jazan3.jpg";
    //- images -// 
    

    // Lists //
    li1.textContent = "تقع جنوب غرب المملكة العربية السعودية";
    li2.textContent = "ثاني أصغر مناطق المملكة العربية السعودية مساحةً";
    li3.textContent = "تتكون من 5 حروف";
    //- Lists -//

} else if (wordToGuess == "الحدود الشمالية") {
    
    // images //
    imgWord1.src = "images/hudsha1.jpg";
    imgWord2.src = "images/hudsha2.jpg";
    imgWord3.src = "images/hudsha3.jpg";
    //- images -// 
    

    // Lists //
    li1.textContent = "تقع شمال المملكة العربية السعودية";
    li2.textContent = "عاصمتها الإدارية هي مدينة عرعر";
    li3.textContent = "تتكون من 14 حرف";
    //- Lists -//

} else if (wordToGuess == "نجران") {
    
    // images //
    imgWord1.src = "images/najran1.jpg";
    imgWord2.src = "images/najran2.jpg";
    imgWord3.src = "images/najran3.jpg";
    //- images -// 
    

    // Lists //
    li1.textContent = "فيها أحد أكبر السدود المقامة في المملكة العربية السعودية";
    li2.textContent = "تشتهر بالزراعة";
    li3.textContent = "تتكون من 5 حرف";
    //- Lists -//

} else if (wordToGuess == "الباحة") {
    
    // images //
    imgWord1.src = "images/baha1.jpg";
    imgWord2.src = "images/baha2.jpg";
    imgWord3.src = "images/baha3.jpg";
    //- images -// 
    

    // Lists //
    li1.textContent =  "أصغر مناطق المملكة العربية السعودية";
    li2.textContent = "تقع على سلسلة جبال الحجاز";
    li3.textContent = "تتكون من 6 حرف";
    //- Lists -//

} else if (wordToGuess == "الجوف") {
    
    // images //
    imgWord1.src = "images/jawf1.jpg";
    imgWord2.src = "images/jawf2.jpg";
    imgWord3.src = "images/jawf3.jpg";
    //- images -// 
    

    // Lists //
    li1.textContent =  "تقع في شمال وسط المملكة العربية السعودية";
    li2.textContent = "تعدّ من أخصب المناطق في المملكة العربية السعودية";
    li3.textContent = "تتكون من 5 حرف";
    //- Lists -//

};

//-- Areas information --//
//--- Manage Words ---//

// ------------------------------------------------------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------------------------------------------------------- //

// Click (btnWord) //
btnWord.addEventListener("click", () => {
    if (inpWord.value.trim() != "") {
        // True Checking Empty Or Not //
        if (inpWord.value.trim() == wordToGuess) {
            // True Checking (inpWord == (wordToGuess)) //
            inpWord.classList.add("disabled-inputs");
            btnWord.classList.add("disabled-inputs");
            mess.style.display                  = "block";
            titleMess.style.display             = "block";
            titleMess.style.backgroundColor     = "rgb(92, 158, 92)";
            titleMess.textContent               = `الإجابة صحيحة: المنطقة هي {${wordToGuess}}.`
            
            // Put //
            if (sessionStorage.getItem("PointsForUser") !== null) {
                sessionStorage.setItem("PointsForUser", parseInt(sessionStorage.getItem('PointsForUser')) + increasePoints);
                
                fetch(url + sessionStorage.getItem('idForUser'), {
                    method: 'PUT',
                    body: JSON.stringify({
                        points: sessionStorage.getItem('PointsForUser')
                    }),
                    headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    },
                })
                .then((response) => response.json())
                .then((data) => 
                    {
                
                });
            };
            //- Put -//

        } else {
            // False Checking (inpWord == (wordToGuess)) //
            inpWord.classList.add("disabled-inputs");
            btnWord.classList.add("disabled-inputs");
            mess.style.display                  = "block";
            titleMess.style.display             = "block";
            titleMess.style.backgroundColor     = "rgb(240, 128, 128)";
            titleMess.textContent               = `الأجابة خاطئة: المنطقة هي {${wordToGuess}}.`
        };
    } else {
        // False Checking Empty Or Not //
        mess.style.display                      = "block";
        titleMess.style.display                 = "block";
        titleMess.style.backgroundColor         = "rgb(240, 128, 128)";
        titleMess.textContent                   = "لم تكتب اسم المنطقة"
    };
});
//--- Click (btnWord) ---//

// =========================================================================================================================================== //
// =========================================================================================================================================== //
// =========================================================================================================================================== //


// Reload BTN //
btnReload.addEventListener("click", () => {
    window.location.reload();
});
//--- Reload BTN ---//

// =========================================================================================================================================== //
// =========================================================================================================================================== //
// =========================================================================================================================================== //

// Sign Out //
signOut.addEventListener("click", () => {
    sessionStorage.clear();
});
//--- Sign Out ---//