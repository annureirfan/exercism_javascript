/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(remainingTime) {
  switch (remainingTime) {
    case 0:
      return `Lasagna is done.`;
    case undefined:
      return `You forgot to set the timer.`;
    default:
      return `Not done, please wait.`;
  }
}

export function preparationTime(layers, average) {
  if (layers.length > 0 && average > 0) {
    return layers.length * average;
  } else if (layers.length == 0) {
    return 0;
  } else if (layers.length > 0 && average === undefined) {
    return 2 * layers.length;
  }
}

export function quantities(layers) {
  let quantity = {
    noodles: 0,
    sauce: 0,
  };

  for (let layer in layers) {
    switch (layers[layer]) {
      case "noodles":
        quantity.noodles += 50;
        break;
      case "sauce":
        quantity.sauce += 0.2;
        break;
    }
  }

  return quantity;
}

export function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList[friendsList.length - 1]);
}

export function scaleRecipe(recipe, portion) {
  const newRecipe = Object.assign({}, recipe);

  for (let ingredient in newRecipe) {
    newRecipe[ingredient] = (newRecipe[ingredient] / 2) * portion;
  }

  return newRecipe;
}
