import { gql } from "@apollo/client";

export const QUERY_PROFILES = gql`
  query allProfiles {
    profiles {
      _id
      name
      favorites
    }
  }
`;

export const QUERY_BAKERYITEMS = gql`
  query allBakeryItems {
    bakeryItems {
      _id
      name
      cost
      calories
      img
    }
  }
`;
