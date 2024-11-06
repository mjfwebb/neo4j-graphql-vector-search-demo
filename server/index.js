import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { Neo4jGraphQL } from "@neo4j/graphql";
import "dotenv/config";
import neo4j from "neo4j-driver";

const typeDefs = `#graphql
    type Movie @node @vector(indexes: [{
        indexName: "moviePlots",
        embeddingProperty: "plotEmbedding",
        provider: OPEN_AI,
        queryName: "searchMoviesByPlot",
    }]) {
        title: String
        actors: [Actor!]! @relationship(type: "ACTED_IN", direction: IN)
    }

    type Actor @node {
        name: String
        movies: [Movie!]! @relationship(type: "ACTED_IN", direction: OUT)
    }
`;

const driver = neo4j.driver(
  process.env.NEO_URL,
  neo4j.auth.basic(process.env.NEO_USER, process.env.NEO_PASSWORD)
);

const neoSchema = new Neo4jGraphQL({
  typeDefs,
  driver,
  features: {
    vector: {
      OpenAI: {
        token: process.env.OPENAI_API_KEY,
        model: "text-embedding-ada-002",
      },
    },
  },
});

const server = new ApolloServer({
  schema: await neoSchema.getSchema(),
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀 Server ready at ${url}`);
