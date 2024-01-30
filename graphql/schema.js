export const typeDefs = `#graphql

## From local file 
    type Game{
        id:ID!,
        title:String!,
        platform:[String!]!
    }

    type Review{
        id:ID!,
        rating:Int!,
        content:String!
    }

    type Author{
        id:ID!,
        name:String!,
        verified:Boolean!
    }

    type Query {
        reviews:[Review]
        review(id:ID!):Review
        games:[Game]
        game(id:ID!):Game
        authors:[Author]
        author(id:ID!):Author
    }


    type Mutation{
        addGame(game:AddGameInput!):Game
        deleteGame(id:ID!):[Game]
        updateGame(id:ID!, edits:AddGameInput!):Game
    }

    input AddGameInput{
        title:String!,
        platform:[String]
    }
## from api

    type contact {
        id: ID!
        name: String
        email: String
       
    }


  type Query {
    contacts:[contact]
    contact(id: ID!): contact
  }

`