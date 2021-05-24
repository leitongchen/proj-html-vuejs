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
            },
            {
                text: "departments",
                link: "#",
                type: "link",
                childs: [
                    {
                        text: "general practice",
                        link: "#",
                        type: "link",
                    },
                    {
                        text: "cardiology",
                        link: "#",
                        type: "link",
                    },
                    {
                        text: "pediatrics",
                        link: "#",
                        type: "link",
                    },
                ]
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
        ]

    },
    methods: {


    }

})