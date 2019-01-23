import gql from "graphql-tag";
import { makePromise, execute } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import fetch from "node-fetch";

const actionTypes = {
  SET_CURRENT_IMAGE: "SET_CURRENT_IMAGE",
  TOGGLE_FULL_DESCRIPTION: "TOGGLE_FULL_DESCRIPTION",
  SET_NEW_RATING: "SET_NEW_RATING",
  SET_CURRENT_PRODUCT: "SET_CURRENT_PRODUCT",
  UPDATE_STRAIN: "UPDATE_STRAIN",
  MODIFY_REVIEW: "MODIFY_REVIEW"
};

const getActions = uri => {
  const objects = {
    setCurrentProduct: input => {
      let _product = input.product;
      return {
        type: actionTypes.SET_CURRENT_PRODUCT,
        input: {
          ..._product,
          images: [_product.strainImg, _product.packageImg]
        }
      };
    },
    setCurrentImage: index => {
      return {
        type: actionTypes.SET_CURRENT_IMAGE,
        index: index
      };
    },
    toggleFullDescription: () => {
      return {
        type: actionTypes.TOGGLE_FULL_DESCRIPTION
      };
    },
    updateStrain: input => {
      return async dispatch => {
        const link = new HttpLink({ uri, fetch: fetch });
        const operation = {
          query: mutation.updateStrain,
          variables: { ...input }
        };

        await makePromise(execute(link, operation))
          .then(data => {
            let strain = data.data.updateStrain;
            dispatch(objects.setCurrentProduct({ product: strain }));
            dispatch({
              type: actionTypes.UPDATE_STRAIN
            });
          })
          .catch(error => console.log(error));
      };
    },
    modifyReview: input => {
      let _review = input.review;
      let _key = input.key;
      let _value = input.value;
      if (_key != null) _review[_key] = _value;

      if (input.clear) _review = {};

      return {
        type: actionTypes.MODIFY_REVIEW,
        input: _review
      };
    },
    setNewRating: index => {
      return { type: actionTypes.SET_NEW_RATING, index: index };
    }
  };

  return { ...objects };
};
const query = {};

const mutation = {
  updateStrain: gql`
    mutation($sotiId: String, $review: String) {
      updateStrain(input: { sotiId: $sotiId, review: $review }) {
        _id
        name
        price
        strainImg
        packageImg
        description
        effect
        genetic
        yield
        flowerTime
        difficulty
        type
        og
        pthc
        pcbd
        pcbn
        country
        sotiId
        env
        sativa
        indica
        ruderalis
        rating
        reviews
        ratingQuantity
      }
    }
  `
};

export default uri => {
  const actions = getActions(uri);
  return {
    // TYPES
    ...actionTypes,
    // ACTIONS
    ...actions
  };
};
