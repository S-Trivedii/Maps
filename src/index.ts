import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./customMaps";

// instance
const user = new User();
// console.log(user);

const company = new Company();
// console.log(company);

const customMap = new CustomMap("map");

customMap.addMarker(user);
customMap.addMarker(company);
// customMap.addComapnyMarker(company);
