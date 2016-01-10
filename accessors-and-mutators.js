//ES5 Getters and Setters - The Short Way

var puppyDog =  {
    breed: "Poodle",
    dogName: [],
    
    get name (){
        if(this.dogName.length == 0) return undefined;
        return this.dogName;
    },
    
    set name (dogName) {
        this.dogName = dogName;
    }
    
    
    
}

//This will output second because of the window.onload
window.onload = function() {
    console.log("Dog Breed: " + puppyDog.breed);
    
    //You've acquired a dog, and now it's time to name it!
    puppyDog.name = "Poochie";
    console.log("Dog Name: " + puppyDog.name);
    
}

//ES5 Getters and Setters - The longer, more verbose but also more functional way

var kittyCat = {
    breed: "Tabby"    
}

Object.defineProperty(kittyCat, 'name', {
    get: function() {
        if(name.length == 0) return undefined;
        return name;
    },
    set: function(newName) {
        name = newName;
    }
});

console.log("Cat Breed: "+ kittyCat.breed);
kittyCat.name = "Pablo";
console.log("Cat Name: "+ kittyCat.name);
