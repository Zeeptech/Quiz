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
                title:"Yes",
                values:[
                    {
                        attribute:"Fat",
                        increase:10
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
]
export default questions;