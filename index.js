// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers){
    const driver = [];
    for(let i = 0 ; i <2 ; i++){
        driver[i] = drivers[i];
    }
  return driver
};


const returnLastTwoDrivers = function(drivers){
    const driver = drivers.slice(-2);
    return driver

}


const selectingDrivers = [returnFirstTwoDrivers , returnLastTwoDrivers] ;

const createFareMultiplier = function(number){
    const returnFare = function(fare){
        return fare * number;
    }
    return returnFare
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);


const selectDifferentDrivers = function(drivers , returnFirstTwoDrivers){
    return  returnFirstTwoDrivers(drivers);
    
} 


