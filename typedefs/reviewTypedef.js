const Review = `#graphql
    type Review{
        id:ID!,
        title:String!,
        description:String!,
        rating:Int!,
        createdAt:String!,
    }
    type Query{
        reviews:[Review]!
    }
`;
module.exports = Review;
