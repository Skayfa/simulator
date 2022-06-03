import { createClient } from "urql";

const url = "https://simulator-nu.vercel.app/graphql";

export const client = createClient({ url });
