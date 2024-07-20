import { ApolloServer } from "@apollo/server";
import { User } from "./user";

const createApolloGraphqlServer = async () => {
  const graphqlServer = new ApolloServer({
    typeDefs: `
      type Query {
        hello: String
      }

      type Mutation {
        ${User.mutations}
      }
    `,
    resolvers: {
      Query: {
        ...User.resolvers.queries,
      },
      Mutation: {
        ...User.resolvers.mutations,
      },
    },
  });

  await graphqlServer.start();

  return graphqlServer;
};

export default createApolloGraphqlServer;
