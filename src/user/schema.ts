import { gql } from 'apollo-server-micro';

export const schema = gql`
input DeviceInput {
	id: ID!
}
type User {
	id: ID
}
type Device {
	id: ID
	secret: String
}
type Location {
	id: ID
	latitude: Float
	longitude: Float
	accuracy: Float
	altitude: Float
	altitude_accuracy: Float
	heading: Float
	speed: Float
	created_at: ID
}

type LocationAlert {
	user: User
	device: Device
	location: Location
}


type Query {
	register(email:String!,password:String!): User
	addDevice: Device
	deactivateDevice(device:DeviceInput): Device
}

`;

export default schema;
