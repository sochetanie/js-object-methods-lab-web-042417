// code solution here


function President (name, politicalParty, yearsInOffice, homeState) {
    this.name = name
    this.politicalParty  = politicalParty
    this.yearsInOffice = yearsInOffice
    this.homeState = homeState


this.veto = () => {return 'NO!'}
this.passBill = () => {return 'You can do that!'}
this.doCharity = () => {return 'I like to help people.'}
this.conductPressInterview = () => {return 'I am proud to be an American.'}
this.sayHi = () => {return `Hi, my name is ${this.name}. I am from ${this.homeState}. I represent the ${this.politicalParty}s, and was in office ${this.yearsInOffice}.`}
}

