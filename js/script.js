/*============================== continues typing animation ======================================*/
/* ".typing" is class written in html h4 tag where we want continous typing */
var typed = new Typed(".typing",{
    strings:["","Python Developer","Django Developer","Data Scientist","Web Developer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

/*============================== Aside ======================================*/
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length;
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;
    for(let i=0;i<totalNavList;i++){
        const a = navList[i].querySelector("a");
        /* clickListener on a tag */
        a.addEventListener("click",function(){
            /* removing back-section tag  */
            removeBackSection();
            /* remove active tag from current */
            for(let j=0;j<totalNavList; j++){
                /* getting prev open section by adding back-section tag  */
                if(navList[j].querySelector("a").classList.contains("active")){
                    /* add back section */
                    addbackSection(j);
                }
                navList[j].querySelector("a").classList.remove("active");
            }
            /* give active tag from current */
            this.classList.add("active");
            showSection(this);

            if(window.innerWidth < 1200){
                asideSectionTogglerBtn();
            }
        })
    }
    /* show section above */
    function showSection(element){
        /* remove active from section */
        for(let i=0; i<totalSection;i++){
            allSection[i].classList.remove("active");
        }
        const target = element.getAttribute("href").split("#")[1];
        /* adding active by id of section to display the section up*/
        document.querySelector("#"+target).classList.add("active");
    }

    /* remove back section */
    function removeBackSection(){
        for(let i=0; i<totalSection;i++){
            allSection[i].classList.remove("back-section");
        }
    }

    function addbackSection(j){
        allSection[j].classList.add("back-section");
    }


/*============================== Nav Toggler ======================================*/
const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");
    navTogglerBtn.addEventListener("click",() => {
        asideSectionTogglerBtn();
    })
    function asideSectionTogglerBtn(){
        aside.classList.toggle("open");
        navTogglerBtn.classList.toggle("open");
        for(let i=0; i<totalSection;i++){
            allSection[i].classList.toggle("open");
        }
    }

/*============================== Hire Me button to reach contact page ======================================*/
document.querySelector(".hire-me").addEventListener("click",function(){
    const sectionIndex = this.getAttribute("data-section-index");
    showSection(this);
    updateNav(this);
    removeBackSection();
    addbackSection();
})

function updateNav(element){
    for(let i=0;i<totalNavList;i++){
        navList[i].querySelector("a").classList.remove('active');
        const target = element.getAttribute("href").split("#")[1];
        if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1]){
            navList[i].querySelector("a").classList.add('active');
        }
    }
}





