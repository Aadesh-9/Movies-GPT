export const getGroqMovieSuggestions = async (userQuery) => {
  try {
    const response = await fetch(
      "https://effortless-jalebi-f2c25f.netlify.app/.netlify/functions/groq",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: userQuery }),
      }
    );

    // Read raw text
    const raw = await response.text();
    console.log("RAW RESPONSE TEXT:", raw);

    // Convert raw text back into JSON
    const json = JSON.parse(raw);

    const text = json?.choices?.[0]?.message?.content || "";

    if (!text.trim()) {
      console.warn("Groq returned empty movie list");
      return [];
    }

    // Convert comma-separated list into array
    return text.split(",").map((movie) => movie.trim());
  } catch (err) {
    console.error("Groq API Error:", err);
    return [];
  }
};
