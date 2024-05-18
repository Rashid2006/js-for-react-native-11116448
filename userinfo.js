function createUserprofiles(names,modifiedNames) {
    return names.map((name,index)=> ({
        originalName:name,
        modifiedName:modifiedNames[index],
        id:index + 1
    }))
    
}

console.log(createUserProfiles(['kwabena','kelvin'],['KWABENA,CLEMENT']));
module.exports = { createUserprofiles }; 