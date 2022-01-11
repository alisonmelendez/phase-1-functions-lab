// Code your solution in this file!
function distanceFromHqInBlocks(pickupLoc) {
    const headquarters = 42;
    let distance;
    if (pickupLoc > 42) {
        distance = pickupLoc - headquarters;
    } else {
        distance = headquarters - pickupLoc;
    }
    return distance;
}

//distanceFromHqInBlocks(pickupLoc);

function distanceFromHqInFeet(blocks) {
    const numOfBlocks = distanceFromHqInBlocks(blocks);

    const convertToFeet = numOfBlocks * 264;

    return convertToFeet;
}

function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    let solution = (destination - start) * 264

    if (destination < start) {
        solution = (solution) * -1
    }
    return solution;

}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination)
    let fee;
    if (distance <= 400) {
        fee = 0;
    } else if (distance > 400 && distance < 2000) {
        fee = (distance - 400) * .02
    } else if (distance > 2000 && distance < 2500) {
        fee = 25
    } else {
        fee = 'cannot travel that far'
    }
    return fee
}

calculatesFarePrice(50, 60)