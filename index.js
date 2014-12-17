var Receiver = function() {
  this.chunks = [];
  this.receive = function(chunk) {
    this.chunks.push(chunk);
  }.bind(this);
  this.toString = function() {
    return this.chunks.join('');
  };
};

module.exports = Receiver;
