import "reflect-metadata";
import { GraphQLServer } from "graphql-yoga";
import { createConnection } from "typeorm";
import { Event } from "./entity/event";
import {
  CreateEventMutationArgs,
  DeleteEventMutationArgs,
  EventQueryArgs
} from "./types";

createConnection({
  type: "sqlite",
  database: `../findfreefood.sqlite`,
  logging: true,
  synchronize: true,
  entities: [Event]
})
  .then(async connection => {
    // const event = new Event();

    // event.name = "Co-ed Volleyball Tournament";
    // event.description = "Free Food from Walmart";
    // event.healthRating = 4;
    // event.time = new Date();
    // event.latitude =  37.954825;
    // event.longitude = -91.773491;

    // await connection.manager.save(event);

    const server = new GraphQLServer({
      typeDefs,
      resolvers
    });

    server.start(({ port }) => console.log(`Server running on port ${port}`));
  })
  .catch(err => {
    console.log("Error starting sqlite", err);
  });

const typeDefs = `
  scalar DateTime

  type Query {
    hello: String!
    events: [Event]
    event(eventId: ID!): Event
  }

  input EventInput {
    name: String!
    description: String
    healthRating: Int
    latitude: Float!
    longitude: Float!
    building: String
    roomNumber: String
    time: DateTime!
  }

  type Mutation {
    createEvent(eventData: EventInput!): Event
    deleteEvent(eventId: ID!): Boolean
  }

  type Location {
    latitude: Float!
    longitude: Float!
    building: String
    roomNumber: String
  }

  type Event {
    id: ID!
    healthRating: Int
    location: Location!
    name: String!
    description: String!
    time: DateTime!
  }
`;

const resolvers = {
  Mutation: {
    createEvent: async (
      _,
      { eventData }: CreateEventMutationArgs
    ): Promise<Event> => {
      const event = await Event.create(eventData).save();

      return event;
    },
    deleteEvent: async (_, { eventId }: DeleteEventMutationArgs) => {
      const event = await Event.findOne({ where: { id: eventId } });

      if (event) {
        await event.remove();
        return true;
      }

      return false;
    }
  },
  Query: {
    hello: () => "Hello World!",
    events: async () => {
      const events = await Event.find();

      return events.map(event => ({
        id: event.id,
        healthRating: event.healthRating,
        name: event.name,
        description: event.description,
        time: event.time,
        location: {
          latitude: event.latitude,
          longitude: event.longitude,
          building: event.building,
          roomNumber: event.roomNumber
        }
      }));
    },
    event: async (_, { eventId }: EventQueryArgs) => {
      const event = await Event.findOne({ where: { id: eventId } });

      return event;
    }
  }
};
