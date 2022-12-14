const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type ChatLog {
    from: ID!
    text: String
  }

   
  type Player {
    username: String!
    rewards: [String]
    hand: [String]
    played: String
    discarded: [String]
    survived: Boolean
    won: Boolean
    selectMe: String!
    who: String!
  }

  type PlayerView {
    gameId: String!
    rewards: [String]
    hand: [String]
    played: String
    discarded: [String]
    opponentPlayed: String
    rewardsInPlay: [String]
    opponentRewards: [String]
  }

  type GameResults {
    username: String!
    goldWon: String
    gameId: ID!
    oppGoldWon: String
    won: Boolean!
  }

  type RoundLog {
    player: [Player]
    monsterDeck: [ID]
    rewardDeck: [ID]
    reward: [ID]
  }

  type GameSession {
    _id: ID!
    player: [Player]
    deck: [ID]
    rewardsDeck: [ID]
    rewardsInPlay: [ID]
    chatLog: [ChatLog]
    roundLog: [RoundLog]
    ongoing: Boolean
    openGame: Boolean
  }

  type User {
    _id: ID!
    username: String!
    password: String!
    friends: [String]
    friendInvites: [String]
    sentFriendInvites: [String]
    gameSessions: [ID]
    gameInvites: [String]
    sentGameInvites: [String]
    avatar: String
    admin: Boolean!
    loggedIn: Boolean!
  }

  type UserAuthObj {
    username: String!
    _id: ID!
  }

  type Auth {
    token: ID!
    user: UserAuthObj
  }

  type CombatMod {
    _id: ID!
    name: String
    image: String
    color: String
    description: String
    effectId: String
  }

  type MonsterMod {
    _id: ID!
    name: String
    image: String
    color: String
    description: String
    effectId: String
  }

  type Monster {
    _id: ID!
    name: String
    flavorText: String
    attack: String
    defense: String
    mods: [MonsterMod]
    image: String
    background: String
    color: String
    texture: String
  }

  type Reward {
    _id: ID!
    name: String
    gold: String
    mods: [CombatMod]
    image: String
    background: String
    color: String
    texture: String
  }

  input LoginInfo {
    username: String!
    password: String!
  }

  input NewGameInfo {
    username: String!
    opponent: String
  }

  input AddFriendInfo {
    username: String!
    newFriend: String!
  }

  type Query {
    users: [User]
    userByName(username: String): User
    userById(_id: String!): User
    gamesOngoing: [GameSession]
    gamesByUserId: [GameSession]
    monsters: [Monster]
    monsterMods: [MonsterMod]
    rewards: [Reward]
    combatMods: [CombatMod]
    playerView(gameId: String!): PlayerView
    userGold(username: String!): String
  }

  type Mutation {
    addUser(username: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
    inviteFriend(username: String!, newFriend: String!): String
    acceptFriend(username: String!, newFriend: String!): String
    sendGameInvite(username: String!, otherUsername: String!): String
    acceptGameInvite(username: String!, otherUsername:String!): ID
    newOpenGameSession(username: String!): ID
    joinOpenGameSession(username: String!, gameId: ID!): ID
    startGame(username: String!): PlayerView
    dealHands(gameId: String!): PlayerView
    drawCards(gameId: String!): PlayerView
  }
`;

module.exports = typeDefs;
