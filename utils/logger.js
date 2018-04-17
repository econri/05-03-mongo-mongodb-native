const MongoClient = require('mongodb').MongoClient;

module.exports = {
  info(message) {
    this.log.insert({ level: 1, message });
  },
  warn(message) {
    this.log.insert({ level: 2, message });
  },
  error(message) {
    this.log.insert({ level: 3, message });
  },
  init(cb) {
    MongoClient.connect('mongodb://localhost:27017', (err, client) => {   
      this.db = client.db('log-test1');
      this.log = this.db.collection('log');
      console.log("Connected successfully to mongo server"); 
      cb();
    });
  }
};