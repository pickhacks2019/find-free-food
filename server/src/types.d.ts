export type Maybe<T> = T | null;

export interface EventInput {
  name: string;

  description?: Maybe<string>;

  healthRating?: Maybe<number>;

  latitude: number;

  longitude: number;

  building?: Maybe<string>;

  roomNumber?: Maybe<string>;

  time: DateTime;
}

export type DateTime = any;

// ====================================================
// Scalars
// ====================================================

// ====================================================
// Types
// ====================================================

export interface Query {
  hello: string;

  events?: Maybe<(Maybe<Event>)[]>;

  event?: Maybe<Event>;
}

export interface Event {
  id: string;

  healthRating?: Maybe<number>;

  location: Location;

  name: string;

  description: string;

  time: DateTime;
}

export interface Location {
  latitude: number;

  longitude: number;

  building?: Maybe<string>;

  roomNumber?: Maybe<string>;
}

export interface Mutation {
  createEvent?: Maybe<Event>;

  deleteEvent?: Maybe<boolean>;
}

// ====================================================
// Arguments
// ====================================================

export interface EventQueryArgs {
  eventId: string;
}
export interface CreateEventMutationArgs {
  eventData: EventInput;
}
export interface DeleteEventMutationArgs {
  eventId: string;
}
