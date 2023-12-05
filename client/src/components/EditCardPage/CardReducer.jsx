export default function CardReducer (designState, action) {
  switch(action.type) {
    case "changed_color": {
      // return new state with empty image and new color
      const newDesignState = {
        name: designState.name,
        cardNumberOne: designState.cardNumberOne,
        cardNumberTwo: designState.cardNumberTwo,
        cardNumberThree: designState.cardNumberThree,
        cardNumberFour: designState.cardNumberFour,
        expiration: designState.expiration,
        color: action.newColor,
        image: "",
        cvv: designState.cvv,
        view: designState.view,
      }
      return newDesignState;
    }

    case "changed_image": {
      const newDesignState = {
        name: designState.name,
        cardNumberOne: designState.cardNumberOne,
        cardNumberTwo: designState.cardNumberTwo,
        cardNumberThree: designState.cardNumberThree,
        cardNumberFour: designState.cardNumberFour,
        expiration: designState.expiration,
        color: designState.color,
        image: action.newImage,
        cvv: designState.cvv,
        view: designState.view,
      }
      return newDesignState;
    }

    case "changed_number": {
      if (action.newNumberOne) {
        const newDesignState = {
          name: designState.name,
          cardNumberOne: action.newNumberOne,
          cardNumberTwo: designState.cardNumberTwo,
          cardNumberThree: designState.cardNumberThree,
          cardNumberFour: designState.cardNumberFour,
          expiration: designState.expiration,
          color: designState.color,
          image: designState.image,
          cvv: designState.cvv,
          view: designState.view,
        }
        return newDesignState;
      }

      if (action.newNumberTwo) {
        const newDesignState = {
          name: designState.name,
          cardNumberOne: designState.cardNumberOne,
          cardNumberTwo: action.newNumberTwo,
          cardNumberThree: designState.cardNumberThree,
          cardNumberFour: designState.cardNumberFour,
          expiration: designState.expiration,
          color: designState.color,
          image: designState.image,
          cvv: designState.cvv,
          view: designState.view,
        }
        return newDesignState;
      }

      if (action.newNumberThree) {
        const newDesignState = {
          name: designState.name,
          cardNumberOne: designState.cardNumberOne,
          cardNumberTwo: designState.cardNumberTwo,
          cardNumberThree: action.newNumberThree,
          cardNumberFour: designState.cardNumberFour,
          expiration: designState.expiration,
          color: designState.color,
          image: designState.image,
          cvv: designState.cvv,
          view: designState.view,
        }
        return newDesignState;
      }

       if (action.newNumberFour) {
        const newDesignState = {
          name: designState.name,
          cardNumberOne: designState.cardNumberOne,
          cardNumberTwo: designState.cardNumberTwo,
          cardNumberThree: designState.cardNumberThree,
          cardNumberFour: action.newNumberFour,
          expiration: designState.expiration,
          color: designState.color,
          image: designState.image,
          cvv: designState.cvv,
          view: designState.view,
        }
        return newDesignState;
      }

      break;
    }

    case "changed_name": {
      const newDesignState = {
          name: action.newName,
          cardNumberOne: designState.cardNumberOne,
          cardNumberTwo: designState.cardNumberTwo,
          cardNumberThree: designState.cardNumberThree,
          cardNumberFour: designState.cardNumberFour,
          expiration: designState.expiration,
          color: designState.color,
          image: designState.image,
          cvv: designState.cvv,
          view: designState.view,
        }
        return newDesignState;
    }

    case "changed_date": {
      const newDesignState = {
        name: designState.name,
        cardNumberOne: designState.cardNumberOne,
        cardNumberTwo: designState.cardNumberTwo,
        cardNumberThree: designState.cardNumberThree,
        cardNumberFour: designState.cardNumberFour,
        expiration: action.newExpirationDate,
        color: designState.color,
        image: designState.image,
        cvv: designState.cvv,
        view: designState.view,
      }
      return newDesignState;
    }

    case "changed_cvv": {
      const newDesignState = {
        name: designState.name,
        cardNumberOne: designState.cardNumberOne,
        cardNumberTwo: designState.cardNumberTwo,
        cardNumberThree: designState.cardNumberThree,
        cardNumberFour: designState.cardNumberFour,
        expiration: designState.expiration,
        color: designState.color,
        image: designState.image,
        cvv: action.newCVV,
        view: designState.view,
      }
      return newDesignState;
    }

    case "changed_cvv_focus": {
      const newDesignState = {
        name: designState.name,
        cardNumberOne: designState.cardNumberOne,
        cardNumberTwo: designState.cardNumberTwo,
        cardNumberThree: designState.cardNumberThree,
        cardNumberFour: designState.cardNumberFour,
        expiration: designState.expiration,
        color: designState.color,
        image: designState.image,
        cvv: designState.cvv,
        view: action.newView
      }
      return newDesignState;
    }

    case "changed-card-after-database-fetch": {
      // changes all card info 
      const newDesignState = action.fetchedDesign
      return newDesignState;
    }

    default:
      throw Error('Unknown action: ' + action.type);
  }
}