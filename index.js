const { ApolloServer } = require ('apollo-server');
const  mongoose  = require ( 'mongoose' )

const MONGODB = "mongodb+srv://hadewunmi10:ely_dev@cluster0.xxg5d1e.mongodb.net/"

//Apollo server takes in two parameter i.e the 
//typeDef
// resolver: Hoe do we request query/mutation

const typeDef = require ('./grapql/typeDefs');
const resolver = require ('./graphql/resolver')

const server = new ApolloServer({
    typeDefs, 
    resolvers
});

mongoose.connect( MONGODB, {useNewUrlParser: true})
.then(() => {
    console.log('db connected successfully');
    return server.listen({ port: 3000})
})
.then((res) => {
    console.log('Server runing at ${res.url}')
})