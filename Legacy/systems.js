////////////////////////////////////////////////////////////Block Scoped Functions

//block level rolling function
const dX = function(num) {
    const roll = Math.floor(Math.random()*num)+1
    return roll;
}
//determines if a zone has a planet, true/false
const hasPlanet = function(arr) {
    const isPlanet = (el) => typeof el != 'string';
    return arr.findIndex(isPlanet) > 0;
}
//counts planets
const countPlanets = function(obj){
    let arr = obj.innerElements.concat(obj.outerElements, obj.primaryElements);
    let planetCount = 0;
    for(i=0; i<arr.length; i++){
        if(typeof arr[i] !== 'string'){
            planetCount++;
        }
    } return planetCount;
}

//deletes 1 planet from any zone you want
const deletePlanet = function(arr){
    const isPlanet = (el) => typeof el != 'string';
    if(arr.findIndex(isPlanet) > 0){
        arr[arr.findIndex(isPlanet)] = 'deleted'
    }
}

//adds 1 element of our choosing
const addElement = function(arr, el){
    arr.push(el);
}

const cleanUp = function(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 'No Feature'){
            arr.splice(i, 1);
        }
    }
}

////////////////////////////////////////////////////////////Feature Generator Functions
//1.Bountiful feature
const featureBountifulMod = function(obj){
    obj.feature = 'Bountiful'
    obj.fluff = 'ALERT: This system has high concentrations of valuable mineral resources'
    rand = dX(3);
    if(rand = 1){addElement(obj.innerElements, 'Asteroid Belt')}
    else if(rand = 2){addElement(obj.primaryElements, 'Asteroid Belt')}
    else {addElement(obj.outerElements, 'Asteroid Belt')}
}
//2.Gravity Tides feature
const featureGravityTidesMod = function(obj){
    obj.feature = 'Gravity Tides'
    obj.fluff = 'WARNING: GRAVITATIONAL ANOMALIES PRESENT'
    roll = dX(5);
    for(i=0; i<roll; i++){
        rand = dX(3);
        if(rand === 1){addElement(obj.innerElements, 'Gravity Tides')}
        else if(rand === 2){addElement(obj.primaryElements, 'Gravity Tides')}
        else if(rand ===3){addElement(obj.outerElements, 'Gravity Tides')}
        else {console.log('MAJOR ERROR HAS OCCURED')}
    }
}
//3.Haven feature
const featureHavenMod = function(obj) {
    obj.feature = 'Haven'
    obj.fluff = 'ALERT: planetary ecosystems condusive to human life'
    addElement(obj.innerElements, new Planet(1,0,0,-6,2));
    for(i=0;i<obj.innerElements.length; i++){
        if(typeof obj.innerElements[i] != 'string'){
            obj.innerElements[i] = new Planet(1,0,0,-6,2);
        }
    }
    addElement(obj.primaryElements, new Planet(2,1,2,0,2));
    for(i=0;i<obj.primaryElements.length; i++){
        if(typeof obj.primaryElements[i] != 'string'){
            obj.primaryElements[i] = new Planet(2,1,2,0,2);
        }
    }
    addElement(obj.outerElements, new Planet(3,0,0,6,2));
    for(i=0;i<obj.outerElements.length; i++){
        if(typeof obj.outerElements[i] != 'string'){
            obj.outerElements[i] = new Planet(3,0,0,6,2);
        }
    }
}
//4.Ill Omened feature
const featureIllOmenedMod = function(obj){
    obj.feature = 'Ill Omened'
    obj.fluff = 'WARNING: CREW CORTISOL LEVELS REACHING CRITICAL'
}
//5.Pirate Den feature
const featurePirateDen = function(obj){
    obj.feature = 'Pirate Den'
    obj.fluff = 'WARNING: Multiple Unknown Vessels Detected'
    rand = dX(3);
    roll = dX(2);
    if(rand === 1){addElement(obj.innerElements, 'Pirate Den')}
    else if(rand === 2){addElement(obj.primaryElements, 'Pirate Den')}
    else if(rand === 3){addElement(obj.outerElements, 'Pirate Den')}

    if(roll>1){
        rand1 = dX(3);
        if(rand1 === 1){addElement(obj.innerElements, 'Pirate Base')}
        else if(rand1 === 2){addElement(obj.primaryElements, 'Pirate Base')}
        else if (rand1 === 3){addElement(obj.outerElements, 'Pirate Base')}
    }
}
//6.Ruined Empire feature
const featureRuinedEmpire = function(obj){
    obj.feature = 'Xenos Ruins'
    obj.fluff = 'Alert: Non-STC Technology detected in system'
}
//7.StarFarers feature
const featureStarFarers = function(obj){
    obj.feature = 'Star Farers'
    obj.fluff = 'Alert: Vox indicates technoligically proficient human life in this system'
    if(countPlanets(obj) < 4){
        count = 4 - countPlanets(obj)
        for(i=0; i<count; i++){
            rand1 = dX(3);
            if      (rand1 === 1){addElement(obj.innerElements, new Planet(1,0,0,-6,0))}
            else if (rand1 === 2){addElement(obj.primaryElements, new Planet(2,0,0,0,0))}
            else if (rand1 === 3){addElement(obj.outerElements, new Planet(3,0,0,6,0))}
        }
    } 
}
//8.Stellar Anomaly feature
const featureStellarAnomaly = function(obj){
    obj.feature = 'Stellar Anomaly'
    obj.fluff   = 'WARNING: STELLAR PROFILE OUTSIDE NORMS'
    planetCount = countPlanets(obj)
    if(planetCount<=2) {
        deletePlanet(obj.innerElements)
        deletePlanet(obj.primaryElements)
        deletePlanet(obj.outerElements)
    }   else {
        let deleteCount = 2
        while(deleteCount > 0){
            if (hasPlanet(obj.innerElements)){
                deletePlanet(obj.innerElements)
                deleteCount--;
            } else if (hasPlanet(obj.outerElements)){
                deletePlanet(obj.outerElements)
                deleteCount--;
            } else if (hasPlanet(obj.primaryElements)){
                deletePlanet(obj.primaryElements)
                deleteCount--;
            }
        }
    }
}
//9.Warp Stasis feature
const featureWarpStasis = function(obj){
    obj.feature = 'Warp Stasis'
    obj.fluff = 'Alert: new message, designated URGENT, from navigator spire.'
}
//10.Warp Turbulence feature
const featureWarpTurbulence = function(obj){
    obj.feature = 'Warp Turbulence'
    obj.fluff = 'WARNING: Gellar Field Generators at 150% capacity. Failure imminent'
}

/////////////////////////////////////////////////////////////The System Class Constructor
class System{
    constructor(){
        this.designation     = 'designation';
        this.nickname        = 'nickname';
        this.feature         = 'features';
        this.fluff           = 'fluff';
        this.star            = this.starGen(this.dX(10));
        this.innerElements   = this.innerElemPop(this.systemElem(this.star), this.features);
        this.primaryElements = this.primaryElemPop(this.systemElem(this.star), this.features);
        this.outerElements   = this.outerElemPop(this.systemElem(this.star), this.features);
    }
    dX(number){
        const roll = Math.floor(Math.random()*number)+1
        return roll;
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
            return new Planet(1,0,0,-6,0);
        } else if(initial >= 46){
            return 'Gravity Riptide'
        } else if(initial >= 42){
            return 'Gas Giant'; //new Giant();
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
            // return 'Planet'; //new Planet();
            return new Planet(2,0,0,0,0);
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
            return new Planet(3,0,0,6,0);
        } else if(initial >= 74){
            return 'Gravity Riptide';
        } else if(initial >= 56){
            return 'Gas Giant'; //new Giant();
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

//////////////////////////////////////////////////////////////The Planet class constructor

//modArray cheat sheet, modArray was implemented to lower number of key:value pairs and increase readability, must remain at the TOP of the constructor or it will break
//[0] - Modifier for Atmospheric Presense
//[1] - Modifier for Atmospheric Composition
//[2] - Modifier for Climate
//[3] - Modifier for Habitablitiy
//[4] - Modifier for Gravity
//[5] - Modifier for Orbital Features roll
//[6] - Number of Orbital Features
//[7] - Boolean for Atmospheric Presence
//[8] - Boolean for Atmospheric Purity

class Planet{
    constructor(zone, atmoPresMod, atmoCompMod, atmoClimateMod, atmoHabMod){
        this.modArray = [atmoPresMod, atmoCompMod, atmoClimateMod, atmoHabMod];
        this.type = 'rocky';
        this.zone = zone;
        this.body = this.bodyGen(this.dX(10));
        this.gravity = this.gravGen(this.dX(10), this.modArray[4])
        this.orbitalFeatures = this.orbFeatGen(this.modArray[5], this.modArray[6])
        this.atmosphere = this.atmoPresGen(this.dX(10), this.modArray[0])
        this.composition = this.atmoCompGen(this.dX(10), this.modArray[1], this.modArray[7])
        this.climate = this.atmoClimateGen(this.zone, this.modArray[2], this.modArray[7])
        this.habitability = this.atmoHabGen(this.dX(10), this.modArray[8], this.modArray[3])
    }
    dX(number){
        const roll = Math.floor(Math.random()*number)+1
        return roll;
    }
    bodyGen(roll){
        // this.modArray[4] = 2;
        // return 'great'
        if(roll >= 9){
            this.modArray[4] = 4;
            return 'Vast';
        } else if(roll ===8){
            this.modArray[4] = 5;
            return 'Large and Dense';
        } else if(roll > 4) {
            this.modArray[4] = 0;
            return 'Large'
        } else if(roll === 4){
            this.modArray[4] = 0;
            return 'Small and Dense'
        } else if(roll > 1){
            this.modArray[4] = -5;
            return 'small'
        } else {
            this.modArray[4] =-7;;
            return 'low mass';
        }

    }
    gravGen(roll, mod){
        const sum = roll + mod;
        if(sum >= 9){
            // atmospheric presence mods
            this.modArray[0] += 1 
            // orbital feature mod
            this.modArray[5] = 10 
            // number of orbital features mod
            this.modArray[6] = (dX(4))
            return 'High Gravity'
       } else if(sum >=3){
            this.modArray[5] = 0
            this.modArray[6] = (dX(3))
            return 'Normal Gravity'
       } else {
            this.modArray[0] += -2
            this.modArray[5] = -10
            this.modArray[6] = (dX(2))
            return 'Low Gravity'
       }
    }
    orbFeatGen(mod, num){
        let orbitals = [];
        for(let i=0;i<num;i++){
            let roll = dX(100) + mod;
            if(roll > 90){
                orbitals.push('Moon')
            } else if(roll > 60) {
                orbitals.push('Lesser Moon')
            } else if(roll > 45) {
                orbitals.push('Large Asteroid')
            } else {
                orbitals.push('No Feature')
            }
        } return orbitals;
    }
    atmoPresGen(roll, mod){
        let sum = roll + mod;
        if(sum > 9) {
            this.modArray[7] = true;
            return 'Heavy Atmosphere'
        } else if (sum > 4) {
            this.modArray[7] = true;
            return 'Moderate Atmosphere'
        } else if (sum > 1) {
            this.modArray[7] = true;
            return 'Thin Atmosphere'
        } else {
            this.modArray[7] = false;
            return 'No Atmosphere'
        }
    }
    atmoCompGen(roll, mod, boo) {
        let sum = roll + mod
        if(boo === false) {
            this.modArray[8] = false
            return 'None'
        } else if(sum > 8){
            this.modArray[8] = true
            return 'Pure'
        } else if(sum > 5){
            this.modArray[8] = true
            return 'Tainted'
        } else if(sum > 1){
            this.modArray[8] = false
            return 'Corrosive'
        } else {
            this.modArray[8] = false
            return 'Deadly'
        }
    }
    atmoClimateGen(zone, mod, boo){
        if(boo === false){
            if(zone = 1){return 'Burning World'}
            else if(zone = 2){return 'Ice World'}
            else {
                rand = dX(2)
                if(rand = 1){return 'Burning World'}
                else {return 'Ice World'}
            }
        } else {
            let sum = dX(10)+mod
            if(zone = 1){sum - 6}
            else if(zone = 3){sum + 6}
            if(sum > 10){
                this.modArray[3] += 7
                return 'Ice World'
            }
            else if(sum > 7){
                this.modArray[3] += 2
                return 'Cold World'
            }
            else if(sum > 3){
                this.modArray[3] += 0
                return 'Temperate World'
            }
            else if(sum > 0){
                this.modArray[3] += -2
                return 'Hot World'
            }
            else {
                this.modArray[3] += -7
                return 'Burning World'
            }
        }
    }
    atmoHabGen(roll, boo, mod){
        if(boo === false){
            return 'Inhospitable'
        } else {
            let sum = roll + mod
            if(sum > 7){
                return 'Verdant'
            } else if(sum > 3) {
                return 'Liquid Water'
            } else if(sum > 1) {
                return 'Trapped Water'
            } else {
                return 'Inhospitable'
            }
        }

    }
}

//////////////////////////////////////////////////////////////initializing function
const init = function(obj) {
    let num = dX(10);
    if(num === 10) {
        //Code block for Warp Turbulence
        cleanUp(obj.innerElements);
        cleanUp(obj.primaryElements);
        cleanUp(obj.outerElements);
        return featureWarpTurbulence(obj);
    } else if(num === 9) {
        //Code block for Warp Stasis
        cleanUp(obj.innerElements);
        cleanUp(obj.primaryElements);
        cleanUp(obj.outerElements);
        return featureWarpStasis(obj)
    } else if(num === 8) {
        //Code block for Stellar Anomaly
        cleanUp(obj.innerElements);
        cleanUp(obj.primaryElements);
        cleanUp(obj.outerElements);
        return featureStellarAnomaly(obj);
    } else if(num === 7) {
        //Code block for StarFarers
        cleanUp(obj.innerElements);
        cleanUp(obj.primaryElements);
        cleanUp(obj.outerElements);
        return featureStarFarers(obj)
    } else if(num === 6) {
        //Code block for Ruined Empire
        cleanUp(obj.innerElements);
        cleanUp(obj.primaryElements);
        cleanUp(obj.outerElements);
        return featureRuinedEmpire(obj)
    } else if(num === 5) {
        //Code block for Pirate Den
        cleanUp(obj.innerElements);
        cleanUp(obj.primaryElements);
        cleanUp(obj.outerElements);
        return featurePirateDen(obj)
    } else if(num === 4) {
        //Code block for Ill-Omened
        cleanUp(obj.innerElements);
        cleanUp(obj.primaryElements);
        cleanUp(obj.outerElements);
        return featureIllOmenedMod(obj)
    } else if(num === 3) {
        //Code block for Haven
        cleanUp(obj.innerElements);
        cleanUp(obj.primaryElements);
        cleanUp(obj.outerElements);
        return featureHavenMod(obj)
    } else if(num === 2) {
        //Code block for Gravity Tides
        cleanUp(obj.innerElements);
        cleanUp(obj.primaryElements);
        cleanUp(obj.outerElements);
        return featureGravityTidesMod(obj)
    } else  {
        //Code block for Bountiful
        cleanUp(obj.innerElements);
        cleanUp(obj.primaryElements);
        cleanUp(obj.outerElements);
        return featureBountifulMod(obj)
    }
}
const rtSys = new System();
init(rtSys);
console.log(rtSys)
console.log(JSON.stringify(rtSys))



/////////////////////////////////////////////////////////
//                 TESTING AREA
/////////////////////////////////////////////////////////

//SAMPLE SYSTEM FOR TESTING








