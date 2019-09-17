module.exports = class extends think.Model {
  getAll(){
    return this.select();
  };
  addBread(obj){
    obj.create_time = new Date().getTime();
    console.log('$ins==  :',obj);
    return this.thenAdd(obj, {name: obj.name});
  }
};
