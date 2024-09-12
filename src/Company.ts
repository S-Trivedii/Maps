import { faker } from "@faker-js/faker";
import { Mappable } from "./customMaps";

// implements - it means all the instance created by the 'Company' class must have all the properties and behaviour of Mappable.
export class Company implements Mappable {
  companyName: string;
  catchPrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companyName = faker.company.name();
    this.catchPrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `
    <div>
     <h1>Company Name: ${this.companyName}</h1>
     <h3>Catch Prase: ${this.catchPrase}</h3>
    </div>
    `;
  }

  color: string = "yellow";
}
