export default function convertQueryParamsToQueryString(query: any) {
  const availableTypeOfTags = [
    "selectedTypeOfProducts",
    "selectedSkinConcern",
    "selectedHairConcern",
    "selectedNutrionAndDiet",
    "selectedPediatric",
    "selectedIngredents",
  ];

  let shopifyQuery = "";

  for (const tag of availableTypeOfTags) {
    let miniQuery = "";
    const selectedTags = ifStringMakeArray(query[tag]);
    if (selectedTags.length === 0) continue;
    for (let i = 0; i < selectedTags.length; i++) {
      miniQuery += `(tag:${selectedTags[i]})`;
      if (i < selectedTags.length - 1) miniQuery += " OR ";
    }

    shopifyQuery += miniQuery + " AND ";
  }

  return shopifyQuery;
}
