export const getGroqMovieSuggestions = async (userQuery) => {
  try {
    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_GROQ_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages: [
            {
              role: "user",
              content: `Suggest 5 movies similar to: ${userQuery}. Only return comma-separated movie titles.`,
            },
          ],
        }),
      }
    );

    const json = await response.json();
    const text = json.choices?.[0]?.message?.content ?? "";

    console.log("Groq says:", text);

    return text.split(",").map((movie) => movie.trim());
  } catch (err) {
    console.error("Groq API Error:", err);
    return [];
  }
};
