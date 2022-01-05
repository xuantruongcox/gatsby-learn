import * as React from "react";
import { graphql } from "gatsby";
// styles

// markup
const IndexPage = ({ data }) => {
  return (
    <div>
      {data.allUser.nodes.map((user) => {
        return (
          <p>{user.name.last}</p>
        )
      })}
    </div>
  );
};
export const query = graphql`
  query UserQuery {
    allUser {
      nodes {
        name {
          first
          last
          title
        }
      }
    }
  }
`;
export default IndexPage;
