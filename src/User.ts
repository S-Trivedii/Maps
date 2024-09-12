import { faker } from "@faker-js/faker";
import { Mappable } from "./customMaps";

// implements - it means all the instance created by the 'User' class must have all the properties and behaviour of Mappable.
export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  // this constructor will initliase the value of latitude and longitude
  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `User name: ${this.name}`;
  }

  color: string = "red";
}

// Download this, - type definition file
// npm install @types/faker
