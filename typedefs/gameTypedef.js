const gameTypedef = `#graphql
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

module.exports = gameTypedef;
