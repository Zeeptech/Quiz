const questions = [
    {
        prompt:"Do you have Down?",
        options:[
            {
                title:"Yes",
                values:[
                    {
                        attribute:"honesty",
                        increase:10,
                    },
                    {
                        attribute:"down",
                        increase:100,
                    }
                ]

            },
            {
                title:"No",
                values:[
                    {
                        attribute:"dishonesty",
                        increase:10
                    }
                ]

            }
        ]
    },
    {
        prompt:"Do you like Pizza?",
        options:[
            {
                title:"Fuck You",
                values:[
                    {
                        attribute:"Fat",
                        increase:10
                    }
                ]

            },
            {
                title:"Knulla mig",
                values:[
                    {
                        attribute:"dishonesty",
                        increase:10
                    }
                ]

            }
        ]
    },
    {
        prompt:"Sååååå, knulla?",
        options:[
            {
                title:"Usch",
                values:[
                    {
                        attribute:"Gay",
                        increase:10
                    }
                ]

            },
            {
                title:"KOM HIT DÅ",
                values:[
                    {
                        attribute:"Gay",
                        increase:10
                    }
                ]

            }
        ]
    },
]
export default questions;