import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { Author } from "./typedefs/authorTypedef.js";
import { Game } from "./typedefs/gameTypedef.js";
import { Review } from "./typedefs/reviewTypedef.js";

import db from "./_db.js";

const resolvers = {
  Query: {
    games() {
      return db.games;
    },
    reviews() {
      return db.reviews;
    },
    authors() {
      return db.authors;
    },
  },
};

//Server Setup
const server = new ApolloServer({
  typeDefs: [Author, Game, Review],
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  cors: true,
  port: 4000,
});

console.log(`🚀 Server ready at ${url}`);
