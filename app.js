// Exercise 1
console.log("**********");
console.log("Exercise 1");
console.log("**********");
function printOdds(count){
    if (count < 0){
        for (let i = 0; i >= count; i -=2){
            if (i % 2 != 0){
                console.log(i);
            }
        }
    } else {
        for (let i = 0; i <= count; i++){
            if (i % 2 != 0){
                console.log(i);
            }
        }
    }
}
printOdds(10);
printOdds(-10); 

// Exercise 2
console.log("**********");
console.log("Exercise 2");
console.log("**********");
function checkAge(userName = "Brett", age = 31){
    above16 = `Congrats ${userName}, you can drive!`;
    below16 = `Sorry ${userName}, but you need to wait until you're 16.`;
    console.log(age >= 16 ? above16 : below16);
}
checkAge("A", 1);
checkAge("B", 16);
checkAge();

// Exercise 3
console.log("**********");
console.log("Exercise 3");
console.log("**********");
function whichQuadrant(x = 0, y = 0){
    if (x == 0 && y == 0){
        console.log("Point is at the center of the Quadrants.");
    } else if (x == 0 && y > 0){
        console.log("Point is on the Y axis.");
    } else if (x > 0 && y == 0){
        console.log("Point is on the X axis.");
    } else if (x > 0 && y > 0){
        console.log("Point is in Quadrant 1.");
    } else if (x < 0 && y > 0){
        console.log("Point is in Quadrant 2.");
    } else if (x < 0 && y < 0){
        console.log("Point is in Quadrant 3.");
    } else if (x > 0 && y < 0){
        console.log("Point is in Quadrant 4.");
    }
}
whichQuadrant();
whichQuadrant(0, 1);
whichQuadrant(1, 0);
whichQuadrant(1, 1);
whichQuadrant(-1, 1);
whichQuadrant(-1, -1);
whichQuadrant(1, -1);

// Exercise 4
console.log("**********");
console.log("Exercise 4");
console.log("**********");
function triangleType(x = 0, y = 0, z = 0){
    if (x + y > z && x + z > y && y + z > x){
        if (x == y && x == z){
            console.log("Equilateral");
        } else if (x == y || x == z || y == z){
            console.log("Isosceles");
        } else {
            console.log("Scalene");
        }
    } else {
        console.log("Not a valid triangle.");
    }
}
triangleType();
triangleType(1, 1, 1);
triangleType(1, 2, 2);
triangleType(10, 11, 12);

// Exercise 5
console.log("**********");
console.log("Exercise 5");
console.log("**********");
function planStatus(planLimit = 1, day = 1, usage = 1){
    allowedDailyUse = planLimit / 30;
    averageDailyUse = usage / day;
    daysRemaining = 30 - day;
    remainingDailyUse = (planLimit - usage) / daysRemaining;
    belowAvgUse = `You can use ${allowedDailyUse - averageDailyUse} more GB/day.`;
    aboveAvgUse = `You are using ${averageDailyUse - allowedDailyUse} more GB/day than you should.
At this rate, you will use ${((averageDailyUse * daysRemaining + usage) - planLimit)} more GB than your plan allows.`
    console.log(`${day} days used, ${daysRemaining} days left.`);
    console.log(`AVG Daily Use: ${averageDailyUse}.`);
    if (planLimit == averageDailyUse * 30){
        console.log(`You're right on track to use your exact amount of data.`);
    }
    if (planLimit < averageDailyUse * day){
        console.log(`Sorry, you are out of data for this month.`);
    } else if (planLimit > averageDailyUse * day){
        console.log(averageDailyUse > allowedDailyUse ? aboveAvgUse : belowAvgUse);
        console.log(`To stay below your data limit, use no more than ${remainingDailyUse} GB/day.`);
    }
}
planStatus(100, 15, 15);
planStatus(100, 15, 101);
planStatus(100, 15, 90);
planStatus(100, 29, 99);