/* github Link:

https://github.com/Jobayer9641/assignment_3

*/





// 1st Problem Kilometer to meter conversion:-
function kilometerToMeter(num) {
    if (num >= 0) {
        var meter = num * 1000;
    }
    else {
        var meter = "Sorry Dear! How can a distance be negative!😇"
    }

    return meter;
}
var result1 = kilometerToMeter(5);
console.log(result1);










// Problem-2 : The budget calculator:-
function budgetCalculator(watch, phone, laptop) {
    if (watch >= 0 && phone >= 0 && laptop >= 0) {
        var total = 0;
        var sumWatch = 50 * watch;    //total cost of watch
        var sumPhone = 100 * phone;    //total cost of phone
        var sumLaptop = 500 * laptop;   //total cost of laptop
        var total = sumWatch + sumPhone + sumLaptop; //total cost of all
    }
    else {
        var total = "Sorry my dear! you cannot buy negative amount of things. Can You now?"
    }
    return total;
}
var result2 = budgetCalculator(5, 2, 5);
console.log(result2);






// Problem 3 : Hotel Cost Management:-
function hotelCost(days) {
    if (days >= 0) {
        var totalCost = 0;
        //between 1-10 days
        if (days <= 10) {
            totalCost = 100 * days;
        }
        //between 11-20 days
        else if (days <= 20) {
            var firstCost = 100 * 10;    // first 10 days
            var remaining = days - 10;   // remaining after 10 days 
            var secondCost = remaining * 80;  // calculation after first 10 days
            totalCost = firstCost + secondCost;
        }
        // after 20 days
        else {
            var firstCost = 100 * 10;     //first 10 days * 100
            var secondCost = 80 * 10;     // 2nd 10 days * 80
            var remaining = days - 20;     // remaining days after 20
            var thirdCost = remaining * 50;    //remaining days * 50
            totalCost = firstCost + secondCost + thirdCost;
        }
        return totalCost;
    }
    else {
        // for invalid inputs
        totalCost = "Sorry dear! Days cannot be negative! Can it now?";
        return totalCost
    }
}
var result3 = hotelCost(71);
console.log(result3);







// Problem-4: Mega friend Detection:-
function megaFriend(str) {
    var max = '';
    for (var i = 0; i < str.length; i++) {
        if (str[i].length > max.length) {
            max = str[i];
        }
    }
    return max;

}
var result = megaFriend(['zuba', 'zubayeralmasud', 'rupok', 'vulu', 'khobish!']);
console.log(result);