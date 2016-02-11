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
  name: 'SiteSchema',
  description: 'example root schema',
  fields: () => ({
    testing: {
      type: GraphQLString,
      description: 'just a code test',
      args: {
        input: {
          type: GraphQLString,
          description: 'test input you want to show',
        }
      },
      resolve: (root, args) => {
        return `OMG! It's an input!! ==> ${args.input}!!!`;
      }
    }
  })
});

const schema = new GraphQLSchema({
  query
});

module.exports = schema;
