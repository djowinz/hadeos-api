import { gql } from 'apollo-server';

export default gql`
  type User {
      id: String!
      accountType: String
      email: String!
      createdAt: Int!
      updatedAt: Int
      devices: [Device]
      scripts: [Script]
  }
  type Device {
      id: String!
      deviceId: String!
      ownerId: String!
      owner: User
      lastActivity: Int
      createdAt: Int
      updatedAt: Int
  }
  type Script {
      id: String!
      ownerId: String!
      owner: User
      name: String!
      description: String
      functionBody: String!
      createdAt: Int!
      updatedAt: Int
      sharable: Boolean
      favorites: Int
  }
  type ScriptExecution {
      id: String!
      scriptId: String!
      script: Script
      state: String
      createdAt: Int!
      deviceId: String
      device: Device
  }
  type Query {
    user(id: String!): User
    users: [User]
    admins: [User]
    script(id: String!): Script
    scripts(ownerId: String!): [Script]
    device(id: String!): Device
    devices(ownerId: String!): [Device]
    executions(scriptId: String!): [ScriptExecution]
  }
`;