import { gql, useQuery } from "@apollo/client";

const SEARCH_MOVIE_BY_PHRASE = `
  query SearchByPhrase($phrase: String!) {
    searchMoviesByPlot(phrase: $phrase) {
      edges {
        node {
          title
          actors {
            name
          }
        }
        score
      }
    }
  }
`;

export function Search({ phrase }: { phrase: string }) {
  const { loading, error, data } = useQuery(
    gql`
      ${SEARCH_MOVIE_BY_PHRASE}
    `,
    {
      variables: {
        phrase,
      },
    }
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div>
      <h2>Executing query:</h2>
      <div className="query-code">{SEARCH_MOVIE_BY_PHRASE}</div>
      <div>
        <h2>Results:</h2>
        {data.searchMoviesByPlot.edges.map((edge: any) => (
          <div className="search-result-edge" key={edge.node.title}>
            <h3>{edge.node.title}</h3>
            <p>Similarity score: {edge.score}</p>
            <p>
              Actors:{" "}
              {edge.node.actors.map((actor: any) => actor.name).join(", ")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
