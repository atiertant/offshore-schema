
/**
 * Module dependencies
 */

var Attributes = require('./offshore-schema/attributes');
var ForeignKeys = require('./offshore-schema/foreignKeys');
var JoinTables = require('./offshore-schema/joinTables');
var References = require('./offshore-schema/references');

/**
 * Used to build a Waterline Schema object from a set of
 * loaded collections. It should turn the attributes into an
 * object that can be sent down to an adapter and understood.
 *
 * @param {Array} collections
 * @param {Object} connections
 * @return {Object}
 * @api public
 */

module.exports = function(collections, connections, defaults) {

  this.schema = {};

  // Transform Collections into a basic schema
  this.schema = new Attributes(collections, connections, defaults);
if (this.schema.post) console.log('schema 1',this.schema.post.attributes);
  // Build Out Foreign Keys
  this.schema = new ForeignKeys(this.schema);
if (this.schema.post) console.log('schema 2',this.schema.post.attributes);
  // Add Join Tables
  this.schema = new JoinTables(this.schema);
if (this.schema.post) console.log('schema 3',this.schema.post.attributes);
  // Add References for Has Many Keys
  this.schema = new References(this.schema);

  return this.schema;

};
