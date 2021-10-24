export default interface RecipeStepAttributes {
  id?: any;
  recipe_id: number;
  step_number: number
  description?: string
  timer?: number
  image?: string
}