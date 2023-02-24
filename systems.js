//so the whole reason for making this over again is to start off slower with intentional design choices. I want this to be scalable, so if I wanna make more design choices down the line I can do that. 

//Everything within the basic system constructor is confirmed to work- even the binary systems and their system element priority has been CONFIRMED to work as intended. Everything below testing area is obviously trash. 

class System{
    constructor(){
        this.features        = this.featureGen(this.dX(10));
        this.star            = this.starGen(this.dX(10));
        this.innerElements   = this.innerElemPop(this.systemElem(this.star), this.features);
        this.primaryElements = this.primaryElemPop(this.systemElem(this.star), this.features);
        this.outerElements   = this.outerElemPop(this.systemElem(this.star), this.features);
    }
    dX(number){
        const roll = Math.floor(Math.random()*number)+1
        return roll;
    }
    featureGen(roll){
        if(roll == 1){
            return 'Bountiful';
        }
        if(roll == 2){
            return 'Gravity Tides';
        }
        if(roll == 3){
            return 'Haven';
        }
        if(roll == 4){
            return 'Ill-Omened';
        }
        if(roll == 5){
            return 'Pirate Den';
        }
        if(roll == 6){
            return 'Ruined Empire';
        }
        if(roll == 7){
            return 'StarFarers';
        }
        if(roll == 8){
            return 'Stellar Anomaly';
        }
        if(roll == 9){
            return 'Warp Stasis';
        }
        if(roll == 10){
            return 'Warp Turbulence';
        }
    }
    starGen(roll){
        if(roll==1){
            return 'Mighty'
        };
        if(roll<=4){
            return 'Vigorous'
        }
        if(roll<= 7){
            return 'Luminous'
        }
        if(roll==8){
            return 'Dull'
        }
        if(roll==9){
            return 'Anomalous'
        }
        if(roll==10){
            let starbinary=[];
            let number = this.dX(10);
            if (number < 7){
                starbinary[0] = this.starGen(this.dX(9))
                starbinary[1] = starbinary[0];
                return starbinary;
            }
            else {
            starbinary[0]=this.starGen(this.dX(9));
            starbinary[1]=this.starGen(this.dX(9));
            return starbinary;
            }
            
        }
    }
    systemElem(star){
        let countArr = [];
        if(star === 'Mighty' || star[0] === 'Mighty' || star[1] === 'Mighty'){
            countArr[0] = 7;
            countArr[1] = 5;
            countArr[2] = 3;
        } else if(star === 'Vigorous' || star[0] === 'Vigorous' || star[1] === 'Vigorous'){
            countArr[0] = 5;
            countArr[1] = 5;
            countArr[2] = 5;
        } else if(star === 'Luminous' || star[0] === 'Luminous' || star[1] === 'Luminous'){
            countArr[0] = 3;
            countArr[1] = 5;
            countArr[2] = 5;
        } else if(star === 'Dull' || star[0] === 'Dull' || star[1] === 'Dull'){
            countArr[0] = 5;
            countArr[1] = 5;
            countArr[2] = 7;
        } else {
            countArr[0] = 5;
            countArr[1] = 5;
            countArr[2] = 5;
        }
        return [this.dX(countArr[0]),this.dX(countArr[1]),this.dX(countArr[2])]
    } 
    innerElemPop(count){
        let innerElems = [];
        for(let i=0;i<count[0];i++){
            innerElems.push(this.innerGen(this.dX(100)));
        } return innerElems;
    }
    primaryElemPop(count){
        let primaryElems = [];
        for(let i=0;i<count[1];i++){
            primaryElems.push(this.primaryGen(this.dX(100)));
        } return primaryElems;
    }
    outerElemPop(count){
        let outerElems = [];
        for(let i=0;i<count[2];i++){
            outerElems.push(this.outerGen(this.dX(100)));
        } return outerElems;
    }
    innerGen(initial){
        if(initial >= 89){
            return 'Solar Flares';
        } else if(initial >= 77){
            return 'Radiation Bursts';
        } else if(initial >= 57){
            return 'Planet'; //new Planet();
        } else if(initial >= 46){
            return 'Gravity Riptide'
        } else if(initial >= 42){
            return 'Gas Giant'; //new InnerGiant();
        } else if(initial >= 30){
            return 'Dust Cloud';
        } else if(initial >= 21){
            return 'Asteroid Cluster';
        } else {
            return 'No Feature';
        }
    }
    
    primaryGen(initial){
        if(initial >= 94){
            return 'Starship Graveyard';
        } else if(initial >= 65){
            return 'Planet'; //new Planet();
        } else if(initial >= 59){
            return 'Gravity Riptide';
        } else if(initial >= 48){
            return 'Dust Cloud'
        } else if(initial >= 42){
            return 'Derelict Station';
        } else if(initial >= 31){
            return 'Asteroid Cluster';
        } else if(initial >= 21){
            return 'Asteroid Belt';
        } else {
            return 'No Feature';
        }
    }
    
    outerGen(initial){
        if(initial >= 94){
            return 'Starship Graveyard';
        } else if(initial >= 81){
            return 'Planet'; //new Planet();
        } else if(initial >= 74){
            return 'Gravity Riptide';
        } else if(initial >= 56){
            return 'Gas Giant'; //new OuterGiant();
        } else if(initial >= 47){
            return 'Dust Cloud';
        } else if(initial >= 41){
            return 'Derelict Station'
        }else if(initial >= 30){
            return 'Asteroid Cluster';
        } else if(initial >= 21){
            return 'Asteroid Belt';
        } else {
            return 'No Feature';
        }
    }
}

const system = new System;
console.log(system);

/////////////////////////////////////////////////////////
//                 TESTING AREA
/////////////////////////////////////////////////////////

// const getSystemFeatures = function(num) {
//     if(num = 10) {
//         //Code block for Warp Turbulence
//     } else if(num = 9) {
//         //Code block for Warp Stasis
//     } else if(num = 8) {
//         //Code block for Stellar Anomaly
//     } else if(num = 7) {
//         //Code block for StarFarers
//     } else if(num = 6) {
//         //Code block for Ruined Empire
//     } else if(num = 5) {
//         //Code block for Pirate Den
//     } else if(num = 4) {
//         //Code block for Ill-Omened
//     } else if(num = 3) {
//         //Code block for Haven
//     } else if(num = 2) {
//         //Code block for Gravity Tides
//     } else  {
//         //Code block for Bountiful
//     }
// }

//SAMPLE SYSTEM FOR TESTING

const sysTest = {
    features: 'StarFarers', 
    star: 'Anomalous',
    innerElements: ['Radiation Bursts'],
    outerElements: ['Asteroid Belt', 'Planet', 'No Feature', {'type': 'rocky', 'gravity': 'high'}],
    primaryElements: ['Derelict Station', 'Derelict Station', 'Planet', 'No Feature', {'type': 'rocky', 'gravity': 'high'}]
}
// console.log(sysTest);

//1. Asked it for a function to search an object with mixed data types for a specific entry and replace it
// The function
// const replace = function(obj, searchValue, replaceValue) {
//   for (var key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       var value = obj[key];
//       if (typeof value === "object") {
//         replace(value, searchValue, replaceValue);
//       } else if (value === searchValue) {
//         obj[key] = replaceValue;
//       }
//     }
//   }
// }


// replace(sysTest, 'Planet', 'KA-BANG!');

//Utility function to find a given entry in system elements
// const getItemCount = function(obj, param){
//     let itemCount = 0;
//     let arr = obj.innerElements.concat(obj.outerElements, obj.primaryElements);
//     for(let i= 0; i< arr.length; i++){
//         if(arr[i] === param){
//             itemCount++;
//         }
//     }
//     console.log(arr);
//     return itemCount;
// }
// let searchItem= 'Dust Cloud';
// console.log('Number of '+ searchItem +': ' + getItemCount(system, searchItem));

// find number of object literals (planets) in total system
const getPlanetCount = function(obj){
    let planetCount = 0;
    let arr = obj.innerElements.concat(obj.outerElements, obj.primaryElements);
    for(let i= 0; i< arr.length; i++){
        if(typeof arr[i] === 'object'){
            planetCount++;
        }
    }
    console.log(arr);
    return planetCount;
}
console.log('Number of Planets: ' + getPlanetCount(sysTest));