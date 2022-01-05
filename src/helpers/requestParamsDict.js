export const requestParamsDict = {
  smileys_and_people: {
    body: "body",
    cat_face: "cat_face",
    clothing: "clothing",
    creature_face: "creature_face",
    emotion: "emotion",
    face_negative: "face_negative",
    face_positive: "face_positive",
    face_role: "face_role",
    face_sick: "face_sick",
    family: "family",
    monkey_face: "monkey_face",
    person: "person",
    person_activity: "person_activity",
    person_gesture: "person_gesture",
    person_role: "person_role",
    skin_tone: "skin_tone",
  },
  animals_and_nature: {
    animal_amphibian: "animal_amphibian",
    animal_bird: "animal_bird",
    animal_bug: "animal_bug",
    animal_mammal: "animal_mammal",
    animal_marine: "animal_marine",
    animal_reptile: "animal_reptile",
    plant_flower: "plant_flower",
    plant_other: "plant_other",
  },
  food_and_drink: {
    dishware: "dishware",
    drink: "drink",
    food_asian: "food_asian",
    food_fruit: "food_fruit",
    food_prepared: "food_prepared",
    food_sweat: "food_swear",
    food_vegetable: "food_vegetable",
  },
  travel_and_places: {
    travel_and_places: "travel_and_places",
  },
  activities: {
    activities: "activities",
  },
  objects: {
    objects: "objects",
  },
  symbols: {
    symbols: "symbols",
  },
  flags: {
    flags: "flags",
  },
};

export const getCategories = () => Object.keys(requestParamsDict);
export const getGroupsByCategory = (category) =>
  Object.values(requestParamsDict[category]);
