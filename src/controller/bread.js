const BaseRest = require('./rest.js');

module.exports = class extends BaseRest {
  async indexAction() {
    /*const data = await this.model('bread').getAll();
     console.log(data);
     return this.display();*/
    const data = await this.model('bread').addBread({name: "test0"});
    console.log(data);
    return this.success(data);
  }
  async addAction() {
    /*const data = await this.model('bread').getAll();
     console.log(data);
     return this.display();*/
    const name = this.get('name');
    console.log('$ins==  :',name);
    const data = await this.model('bread').addBread({id: null, name: name});
    console.log(data);
    return this.success(data);
  }
};
