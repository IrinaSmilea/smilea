import {createClient} from "@supabase/supabase-js";
import {supabaseAuthProvider, supabaseDataProvider} from "ra-supabase";

const apiPath = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

const supabaseClient = createClient(apiPath, anonKey);

export const sbDataProvider = supabaseDataProvider({
    instanceUrl: apiPath,
    apiKey: anonKey,
    supabaseClient,
});

export const sbAuthProvider = supabaseAuthProvider(supabaseClient, {
    getIdentity: async (user) => {
        const {data, error} = await supabaseClient
            .from("userProfiles")
            .select("id, first_name, last_name")
            .match({email: user.email});

        if (!data || error) {
            throw new Error();
        }

        console.log(data);

        return {
            id: data[0].id,
            fullName: `${data[0].first_name} ${data[0].last_name}`,
        };
    },
});
