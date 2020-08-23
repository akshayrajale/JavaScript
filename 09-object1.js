
let akshay = {
    day : 'monday',
    meetings:0,
    meetDone:0,

    bracket: function(happy){
        this.meetings= this.meetings + happy
    },

    getSummary: function(happy){
         
        return ` hey there is ${this.meetings} as on today done.`
    }
}

akshay.bracket(10)

console.log(akshay.getSummary())










