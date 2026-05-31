// Web-Journey-Blueprint/01-foundations-js/03-objects/objects.js

/**
 * Objects: Properties, Methods, Access, and Immutability
 */

const vehicle = {
  // Properties: Data describing the object
  brand: 'Toyota',
  model: 'Camry',
  year: 2026,
  isAvailable: true,

  // Method (ES6 Shorthand): Action that uses 'this' to access internal properties
  getSummary() {
    return `${this.brand} ${this.model} (${this.year})`;
  },

  // Method: Action to toggle availability status
  toggleAvailability: function() {
    return !this.isAvailable;
  }
};

// 1. Accessing via Dot Notation (preferred for known keys)
console.log(vehicle.brand); // "Toyota"

// 2. Accessing via Bracket Notation (useful for dynamic/variable keys)
const dynamicKey = 'model';
console.log(vehicle[dynamicKey]); // "Camry"

// 3. Invoking Methods
console.log(vehicle.getSummary()); // "Toyota Camry (2026)"

// 4. Immutable Update: Creating a new object instead of modifying the original
// We preserve the old data while overriding specific properties
const updatedVehicle = {
  ...vehicle,             // Spread copies all existing properties
  isAvailable: false,     // Overriding property
  lastUpdated: '2026-06-01' // Adding a new property
};

console.log('Original Availability:', vehicle.isAvailable); // true
console.log('Updated Availability:', updatedVehicle.isAvailable); // false
console.log('New Property Added:', updatedVehicle.lastUpdated); // 2026-06-01
