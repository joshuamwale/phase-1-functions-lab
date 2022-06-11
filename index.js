function distanceFromHqInBlocks(blockNumber) {
    if distanceFromHqInBlocks(43);
    return 1;
    if distanceFromHqInBlocks(50);
    return 8;
    else if distanceFromHqInBlocks(34);
    console.log(blockNumber - 34)
    return 8;
};

function distanceFromHqInFeet(43){
return (43-42) * 264;
//=> 264 feet;
};
distanceFromHqInFeet(50){
return (50 -42)* 264;
//=> 2112 feet;
};
distanceFromHqInFeet(34){
return (42-34)* 264;
//=> 2112 feet;
};

function distanceTravelledInFeet(start, destination){

distanceTravelledInFeet(43, 48) { 
    return (48-43)* 264;
    //=> 1320;
}


distanceTravelledInFeet(50, 60) {
return (60-10)*264
//=> 2640;
}

distanceTravelledInFeet(34, 28) {
return (34-28)* 264;
//=> 1584;
}
}
function calculateFarePrice(start, destination){
    const distance = distanceTravelledInFeet(start, destination);
    if (distance<= 400) {
        return 0;
    }
else if (distance > 400 && distance <= 2000) {
    return .02 * (distance - 400);
}
else if (distance > 2000 && distance <2500){
    return 25;
}
else {
    return 'cannot travel that far';
}
}