import {
 GraphQLSchema,
 GraphQLObjectType,
 GraphQLInt,
 GraphQLString,
 GraphQLList,
 GraphQLNonNull,
 GraphQLID,
 GraphQLBoolean,
 GraphQLFloat
} from 'graphql';

const query = new GraphQLObjectType({
  name: 'Query',
  description: 'example schema',
  fields: () => ({
    testing: {
      type: GraphQLString,
      description: 'just a code test',
      args: {
        input: {
          type: new GraphQLNonNull(GraphQLString),
          description: 'test input you want to show',
        }
      },
      resolve: (_,args) => {
        return `OMG! It's an input!! ==> ${args.input}!!!`;
      }
    }
  })
});

var schema = new GraphQLSchema({
  query
});

module.exports = schema;
