function Airport() {
this._planes = [];
};

Airport.prototype.planes = function() {
  return this._planes;
};

Airport.prototype.checkPlaneLanded = function(plane) {
   this._planes.push(plane); 
};




