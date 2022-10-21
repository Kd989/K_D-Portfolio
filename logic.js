// typing animation

var typed = new Typed(".typing", {
    strings: ["Web Designer", "Web Developer", "Photographer","Web Designer"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
})

// aside
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavlist = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;
for (let i = 0; i < totalNavlist; i++) {
    // console.log(navList[i]);
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function () {
        // console.log(this);

        removeBackSection();
        for (let j = 0; j < totalNavlist; j++) {
            if (navList[j].querySelector("a").classList.contains("active")) {

                // console.log("back-section" + navList[j].querySelector('a'));

                addBackSection(j);
            }
            navList[j].querySelector("a").classList.remove("active")
        }
        this.classList.add("active")
        showSection(this);
        if (window.innerWidth < 1200) {
            asideSectionTogglerBtn()
        }
    })

}
function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active")
    }
    // console.log(element.getAttribute("href").split("#"));
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active")
    // target =  href[1]
    // console.log(target);

}

function removeBackSection() {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("back-section")
    }
}

function addBackSection(num) {
    allSection[num].classList.add("back-section")
}

function updateNav(element) {
    // console.log(element.getAttribute("href").split("#")[1]);
    for (let i = 0; i < totalNavlist; i++) {
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
            navList[i].querySelector("a").classList.add("active");
        }
    }
}




document.querySelector(".hire-me").addEventListener("click", function () {
    const sectionIndex = this.getAttribute("data-section-index")
    // console.log(sectionIndex);
    // console.log(this);
    showSection(this)
    updateNav(this)
    removeBackSection();
    addBackSection(sectionIndex);
})
const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn();
})
function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open")
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.toggle("open")
    }
}



// form email.js

function Sendemail() {
    var params = {
        name: document.getElementById("fullName").value,
        email: document.getElementById("email_id").value,
        subject:document.getElementById("subject").value,
        message: document.getElementById("text_area")

    };
    emailjs.send("service_uuvjt64","template_qag1dxg",params).then(function(res){
        alert("success!"+res.status)
    })
   
}





// const serviceID = "service_uuvjt64";
// const templateID = "template_qag1dxg"
// emailjs
//     .send(serviceID, templateID, params)
//     .then((res) => {
//         document.getElementById("fullName").value = "";
//         document.getElementById("email_id").value = "";
//         document.getElementById("subject").value = "";
//         document.getElementById("text_area") = "";
//         console.log(res);
//         alert("your message sent successfully")
//     })
//     .catch((err) => console.log(err))