var graphql = require('graphql');
var GraphQLSchema = graphql.GraphQLSchema;
var GraphQLObjectType = graphql.GraphQLObjectType;
var GraphQLString = graphql.GraphQLString;

var schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      testing: {
        type: GraphQLString,
        resolve() {
          return 'it works!!!';
        }
      }
    }
  })
});

module.exports = schema;
