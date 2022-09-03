import { ApolloServer, gql } from 'apollo-server-micro';
import { makeExecutableSchema } from 'graphql-tools';

import {Query} from './Query';
import {config} from '../../Config';
import typeDefs from './schema';

import {context} from './Context';

export const resolvers = {
	Query:{
		updateLocation:Query.updateLocation
	}
};

export const schema = makeExecutableSchema({
	typeDefs,
	resolvers
});

export const apolloServer = new ApolloServer({
	schema,
	playground: config.apollo.playground,
	introspection: true,
	context
})
