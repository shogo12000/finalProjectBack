const { ApolloServer, gql } = require('apollo-server');
const cors = require('cors'); 
const { typeDefs } = require('./schema');
const { resolvers } = require('./resolvers');
 
const server = new ApolloServer({ typeDefs, resolvers,
    cors: {
        origin: '*',  
        methods: ['GET', 'POST'],
        allowedHeaders: ['Content-Type', 'Authorization'],   
        credentials: true,  
      },
 });
 
server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});



//3c4c2fd278334951a313ac5c153ff4f0
//skai01@mylangara.ca
//youtube a senha

//https://dummyjson.com/docs/recipes