import { combineReducers } from "redux";
import categoriesReducer from "./category";
import ordersReducer from "./order";
import productsReducer from "./product";
import categoryForEditReducer from "./categoryForEdit";
import productForEditReducer from "./productForEdit";
import LastReducer from "./dashboardLast";
import weekReducer from "./dashboardWeek";
import YearReducer from "./dashboardYear";
import dayReducer from "./dashboardDay";
import chartReducer from "./dashboardChart";
import stockReducer from "./stock";

const rootReducer = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  order: ordersReducer,
  categoryForEdit: categoryForEditReducer,
  productForEdit: productForEditReducer,
  last: LastReducer,
  week: weekReducer,
  year: YearReducer,
  day: dayReducer,
  chart: chartReducer,
  stock: stockReducer,
});

export default rootReducer;
