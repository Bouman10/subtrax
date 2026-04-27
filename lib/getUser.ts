import { supabase } from "./supabase";

export async function getUserId() {
    const { data } = await supabase.auth.getUser()
    return data.user?.id
}