import { createClient } from "urql";

// const url = "https://simulator-six.vercel.app/graphql";
const url = "http:/localhost:4000/graphql";

export const client = createClient({ url });
