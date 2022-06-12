function distanceFromHqInBlocks(blockNumber) {
    if (blockNumber = 43){
    return "1";
}
    else if (blockNumber = 50) {
    return "8";
}
    else if (blockNumber = 34) {
    console.log(42 - 34);
    return "8";
}
};

function distanceFromHqInFeet(blockNumber){
    if (blockNumber = 43){
return (43-42) * 264;
//=> 264 feet;
};

else if (blockNumber = 50){
return (50 -42)* 264;
//=> 2112 feet;
};
if else (blockNumber = 34){
return (42-34)* 264;
//=> 2112 feet;
};
};

function distanceTravelledInFeet(start, destination){

if (43, 48) { 
    return (48-43)* 264;
    //=> 1320;
}
else if (50, 60) {
return (60-10)*264
//=> 2640;
}

else if (34, 28) {
return (34-28)* 264;
//=> 1584;
};
};

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