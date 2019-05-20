const League = {
  startDate: new Date(),
  endDate: new Date(),
  players: [...ids],
  storeAdmins: [...ids]
}

const Person = {
  id: 123123123,
  firstName: 'Andy',
  lastName: 'Cousineau',
  superUser: true,
  storeAdmin: true,
  player: true,
  league: [
    {
      id: LeagueId,
      points: 5,
      matches: 3,
      wins: 2,
      losses: 1
    }
  ]
}

const Match = {
  winner: Player,
  loser: Player,
  league: LeagueId
}

// Super User creates League

// Players sign up to Leagues
// Store Admins manages access to Leagues

// Store Admins logs Games between 2 unique Players
// Winner gets 2 Points to league
// Loser gets 1 point toward league

// Players creates Account

// Leagues Registration happens in a for a period of time and then ends

// I approve storeAdmin role

// Game rules
// 2 unique players can't log more than one game per day
// games can only be logged by store admins
// ----- May not be needed --------------
// players can only buy and add to their deck 3 packs per week
