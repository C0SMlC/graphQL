import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import Author from "./typedefs/authorTypedef";
import Game from "./typedefs/gameTypedef";
import Review from "./typedefs/reviewTypedef";

//Server Setup
const server = new ApolloServer({});

const { url } = await startStandaloneServer(server, {
  cors: true,
  port: 4000,
});

console.log(`🚀 Server ready at ${url}`);
