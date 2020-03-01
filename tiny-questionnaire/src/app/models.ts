export class Contact {
  constructor(public firstName: string, public lastName: string, address: Address, public phone1: string, 
    public phone2?: string, public phone3?: string, email?: string) {
 
  }
}

export class Address {
  constructor(public line1: string, public line2: string, public street: string, 
    public zip: string, public city: string, public country: string) {

    }
}

export class Person {
  constructor(public firstName: string, public lastName: string, public address: Address, public phone1: string,
    public phone2?: string, public phone3?: string, email?: string) {

    } 
}

export class Company {
  constructor(public name1: string, public name2: string, public address: Address, public contact: Contact) {

  }
}

export class Flight {
  constructor(public flightDate: Date, public flightNumber: string, public origin: string, public destination: string, seat: string) {

  }
}

export class Train {
  constructor(public origin: string, public destination: string, public number?: string, public seat?: string) {

  }
}

export class Hotel {
  constructor(public name: string, public address: Address, public room: string, public startedAt: Date, public endedAt: Date) {

  }
}

export class Event {
  constructor(public name: string, public startedAt: Date, public endedAt: Date, public additionalInformation?: string) {

  }
}

export class Symptom {
  constructor(public description: string, public startedAt: Date, public endedAt?: Date, 
    public observations?: Array<Observation>, public additionalInformation?: string) {

    }
}

export class Trip {
  constructor(public description: string, public startedAt: Date, public endedAt: Date, public visits: Array<Visit>) {

  }
}

export class Visit {
  constructor(public description: string, public startedAt: Date, public endedAt: Date, public address: Address, public additionalInformation?: string) {

  }
}

export class Observation {
  constructor(public description: string, public value: string, public startedAt: Date, public endedAt?: Date) {
    
  }
}