function skillsMember() {
    var member = {
        name: 'John Doe',
        age: 32,
        skills: ['HTML', 'CSS', 'JS'],
        greet: function() {
            console.log('Hello, I am ' + this.name);
        }
    }
    return member;
}