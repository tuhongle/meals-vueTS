export type meals = { [key: string]: string };

export type Response = { data: {meals: [ meals ]}} ;

export type ResponseArray = { data: { meals:  meals[]}};

export type ResponseIngredients = { data: { meals: {strIngredient: string}[] }};