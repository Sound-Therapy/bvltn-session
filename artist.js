// ===============================
// BVLTNE Artist v0.5
// ===============================

// ---------- Supabase ----------

const SUPABASE_URL = "https://mipxgufdyykcudfwsijy.supabase.co";

const SUPABASE_KEY =
"sb_publishable_YJcYWUZqfXZ-vrnAI4DUjw_ZEkhpmoR";

const db = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

// ---------- Events ----------

document
    .getElementById("loadBtn")
    .addEventListener("click", loadSession);

window.addEventListener("DOMContentLoaded", () => {

    const params = new URLSearchParams(window.location.search);

    const session = params.get("session");

    if (session) {

        document.getElementById("sessionInput").value = session;

        loadSession();

    }

});

// ---------- Load Session ----------

async function loadSession() {

    const sessionName =
        document.getElementById("sessionInput").value.trim();

    if (!sessionName) {

        alert("Please enter a Session Name.");

        return;

    }

    const { data, error } = await db
        .from("sessions")
        .select("*")
        .eq("session_name", sessionName)
        .single();

    if (error) {

        alert(error.message);

        return;

    }

    // Lyrics

    document.getElementById("lyrics").textContent =
        data.lyrics ?? "";

    // Instrumental

    const {
        data: instSigned,
        error: instErr
    } = await db.storage
        .from("instrumentals")
        .createSignedUrl(
            data.instrumental_path,
            3600
        );

    if (instErr) {

        alert(instErr.message);

        return;

    }

    // Guide

    const {
        data: guideSigned,
        error: guideErr
    } = await db.storage
        .from("guides")
        .createSignedUrl(
            data.guide_path,
            3600
        );

    if (guideErr) {

        alert(guideErr.message);

        return;

    }

    document.getElementById("instrumentalPlayer").src =
        instSigned.signedUrl;

    document.getElementById("guidePlayer").src =
        guideSigned.signedUrl;

}
