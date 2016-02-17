import PostsList from './posts';

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

const post = new GraphQLObjectType({
  name: "Post",
  description: "This is an example blog post object",
  fields: () => ({
    _id: {type: new GraphQLNonNull(GraphQLString)},
    title: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: function(post) {
        return post.title || "Does not exists";
      }
    },
    content: {type: GraphQLString},
  })
});

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
    },
    posts: {
      type: new GraphQLList(post),
      resolve: function() {
        return PostsList;
      }
    }
  })
});

const schema = new GraphQLSchema({
  query
});

module.exports = schema;
