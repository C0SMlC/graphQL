export const Author = `#graphql
    type Author{
        id:ID!,
        name:String!,
        age:Int!,
    }
    type Query{
        authors:[Author]!
    }
`;
