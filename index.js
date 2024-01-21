let name = "Aquiles"
let rank = "nothing"
function classification(wins, loses){
    let balance = wins - loses
    if(balance > 10 && balance <= 20){
        rank = "Bronze"
    } else if(balance > 20 && balance <= 50){
        rank = "Silver"
    } else if(balance > 50 && balance <= 80){
        rank = "Gold"
    } else if(balance > 80 && balance <= 90){
        rank = "Diamond"
    } else if(balance > 90 && balance <= 100){
        rank = "Legend"
    } else if(balance > 100){
        rank = "Imortal"
    } else{
        rank = "Iron"
    }
    return balance
    
}

classification(50, 20)
console.log(rank)
