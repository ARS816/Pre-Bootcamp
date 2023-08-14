const reward = (time,day) => {
    if(time < 1000){  //I want a latte if it's before 10 am//
        return 'Latte'
    } else if( time < 1400 && time > 1000) { //I want a hot chocolate it's between 10 am and 2 pm//
        return 'Hot Chocolate'
    } else if (time > 1500 && time <1800){ //options for the 3 pm - 6 pm slot to be a random selection//
        if( (time/100) % 2 == 0) { //time is even, I want my selections to be ice cream, cookies, or candy//
        let arr = ['ice cream', 'cookie', 'candy' ]
            return arr[Math.floor(Math.random() * arr.length)]
        } 
            else {
                var arr2 = ['hot chocolate', 'tea', 'cake'] //time is odd, I want my selections to be hot chocolate, tea, or cake.//

                return arr2[Math.floor(Math.random() * arr2.length)]
            }
    }
    
    else if( time > 1900 && time < 2200){ //I want ice cream between 7 pm - 10 pm.// 

        if(day == 'Wednesday') //I want strawberry - but only if it's Wednesday//
        return 'Strawberry Ice Cream' 
            else return 'Vanilla Ice Cream'
        
    } else { //If it's after 10 pm, I don't want anything other than sleep!//
        return 'Time to sleep!'
    }
}
console.log(reward(1300, 'Friday'))