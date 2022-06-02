import { createClient } from "urql";

const url = "http://localhost:4000/graphql";

export const client = createClient({ url });
