let myObject = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
};


for (key in myObject){
    
    let value = myObject[key];

    let type = typeof value;

    console.log(`key:${key} | types:${type}`);
}