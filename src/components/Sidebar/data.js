export  const sideMenuItems= 
    [
        {label:"Home",to:"/"},
        {
            label:"profile",
            to:"/profile",
            children:[
              {  label:"Detail",to :"/detail",  children:[
                {  label:"Location",to :"/location"}
              ]}
            ]
        },
        {
            label:"setting",
            to:"/setting",
            children:[
            {label:"account",to:"/Account"},
            {label:"security",to:"/Security",children:[
                {label:"login",to:"/Login"},{label:"register",to:"/Register"}
            ]}

            ]
        }

    ]
