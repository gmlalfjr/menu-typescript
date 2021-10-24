import users from './usersRoutes/index'
import recipe from './recipe/index'
import ingredients from './ingredients'

export default [
  ...users,
  ...recipe,
  ...ingredients
]