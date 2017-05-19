var exports = module.exports = {};

//use this prototype to create the other functions
exports.kineticEnergy = function(m,v){
    return (m*v^2)/2
};

exports.mass = function(ke,v){
    return (ke*2)/(v^2)
}

exports.velocity = function(ke,m){
    return Math.sqrt((2*ke)/m)
}
