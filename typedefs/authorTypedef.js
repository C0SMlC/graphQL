export const Author = `#graphql
    type Author{
        id:ID!,
        name:String!,
        verified:Boolean!,
    }
    type Query{
        authors:[Author]!
    }
`;
