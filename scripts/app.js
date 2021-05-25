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
        ],
        ourDoctors: [
            {
                name: "Jon Snow",
                department: "Anesthesiologist",
                description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.",
                photo: "doctor-1.jpg",
                socialLinks: [
                    {
                        text: "facebook-f", 
                        link: "#"
                    },
                    {
                        text: "twitter", 
                        link: "#"
                    },
                    {
                        text: "instagram", 
                        link: "#"
                    },
                ]
            },
            {
                name: "Toni Stark",
                department: "Cardiologist",
                description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.",
                photo: "doctor-2.jpg",
                socialLinks: [
                    {
                        text: "facebook-f", 
                        link: "#"
                    },
                    {
                        text: "twitter", 
                        link: "#"
                    },
                    {
                        text: "instagram", 
                        link: "#"
                    },
                ]
            },
            {
                name: "Anna Smith",
                department: "Nurse Practitioner",
                description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.",
                photo: "doctor-3.jpg",
                socialLinks: [
                    {
                        text: "facebook-f", 
                        link: "#"
                    },
                    {
                        text: "twitter", 
                        link: "#"
                    },
                    {
                        text: "instagram", 
                        link: "#"
                    },
                ]
            },
        ],

    },
    methods: {


    }

})