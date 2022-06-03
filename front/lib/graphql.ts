import { createClient } from "urql";

const url = "https://simulator-six.vercel.app/graphql";

export const client = createClient({ url });
