const Base = require('./base.js');

module.exports = class extends Base {
  async indexAction() {
    /*const data = await this.model('bread').getAll();
    console.log(data);
    return this.display();*/
    const data = await this.model('bread').addBread({name: "test0"});
    console.log(data);
    return this.display();
  }
};
