// import { User } from "./User";
// import { Company } from "./Company";

// Instruction to every other class on how they can be an argument to 'addMarker'
export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };

  markerContent(): string;
  color: string;
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(
      document.getElementById(divId) as HTMLElement,
      {
        zoom: 1,
        center: {
          lat: 0,
          lng: 0,
        },
      }
    );
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });

    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      });

      infoWindow.open(this.googleMap, marker);
    });
  }

  //   addComapnyMarker(company: Company): void {
  //     new google.maps.Marker({
  //       map: this.googleMap,
  //       position: {
  //         lat: company.location.lat,
  //         lng: company.location.lng,
  //       },
  //     });
  //   }
}

/*********************** 
// google.maps.Map: This is the type of the googleMap property. It's specifying that the googleMap property will be an instance of the google.maps.Map class, which is part of the Google Maps API. This ensures that TypeScript knows what kind of object is stored in googleMap, enabling type safety and autocompletion features.

// In short, this line declares a private property googleMap in the CustomMap class, which is expected to hold a Google Maps object.
*********************/

/*

Before passing the User object to the addUserMarker() method, an instance of the User class must be created somewhere in the code. Once that instance is created, the object can be passed to the method, allowing the code to access the properties of the User object, like location.lat and location.lng.

Here’s a simple explanation of the process:

    1. Class Definition: The User class defines the blueprint for how the User object should look. It contains properties like name and location, but no actual data until an instance is created.

    export class User {
        name: string;
        location: {
         lat: number;
         lng: number;
    };

  constructor(name: string, lat: number, lng: number) {
    this.name = name;
    this.location = { lat, lng };
  }
}
2. Instance Creation: Somewhere in your code, an actual object (instance) of the User class must be created. This is done using the new keyword and passing appropriate values for the constructor.

// instance
const user = new User("John Doe", 37.7749, -122.4194);

Here, user is an instance of the User class with the name "John Doe" and the coordinates for San Francisco.

3. Passing the Instance: Once the instance is created, it can be passed to a method (like addUserMarker()), which expects a User object.

customMap.addUserMarker(user);

Since the user object is now an actual instance of the User class, the method can access all its properties (like location.lat and location.lng) and use them as needed.

Why This Matters ?

Without creating an instance, you cannot pass a User object because the object doesn't exist yet. Simply importing the class provides the structure and type information, but it doesn't create any actual data. You must create an instance of the class with real data to pass to methods that require it.

In short, the instance creation step (i.e., const user = new User()) is essential before you can work with or pass around the object in your code.

*/
