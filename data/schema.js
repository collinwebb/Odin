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
  description: 'First GraphQL Server Config — Yay!',
  fields: () => ({
    testing: {
      type: GraphQLString,
      description: 'just a code test',
      args: {
        input: {
          type: new GraphQLNonNull(GraphQLString),
          description: 'enter anything ^_^',
        }
      },
      resolve: (_,args) => {
        return `OMG! look! an input! ==> ${args.input}!!!`;
      }
    }
  })
});

module.exports = schema;
