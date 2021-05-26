const app = new Vue({
    el: "#app",
    data: {
        navLinksList: [
            {
                text: "home",
                link: "#",
                type: "link",
            },
            {
                text: "about",
                link: "#",
                type: "link",
                ddmenu: departmentsList,
                ddMenuOpen: false,
            },
            {
                text: "departments",
                link: "#",
                type: "link",
                ddmenu: departmentsList,
                ddMenuOpen: false,
            },
            {
                text: "articles",
                link: "#",
                type: "link",
            },
            {
                text: "make appointment",
                link: "#",
                type: "btn",
            },            
        ],
        ourDoctors: ourDoctors,
        healthServices: healthServices,
        clientsList: clientsList,
        socialLinkList: socialLinkList,
        departmentsList: departmentsList,


    },
    computed: {
     
    },
    methods: {
        onLinkClick(link, event) {
            console.log("apre")
            
            if (link.ddmenu) {
                link.ddMenuOpen = !link.ddMenuOpen;
            }

            if (link.ddMenuOpen) {
                event.currentTarget.focus()
            }
        },
        focusLost(link, event) {
            console.log("chiude")
            
            link.ddMenuOpen = false; 
            
        }
    }

})