export const Game = `#graphql
  type Game{
    id:ID!,
    title:String!,
    genre:String!,
    platform:[String]!,
  }
  type Query{
    games:[Game]!
  }
`;


