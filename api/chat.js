export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { message } = req.body;

  const systemPrompt = `
You are an AI portfolio assistant for Faizan Ahmed, a Software Engineer.

Answer like a real human in an interview.
Explain projects, skills, services, experience, and contact info.

Projects:
TruthKeep AI
Seller Margin CRM
Rabbit Hole Admin Panel
Fitness Gym Website
Lumina Xpert
Joint Office Detector
Image Classification using CNN
EFAMILY
Real Estate Website
Nexcent Onepage Website
Foodi Onepage Website

Skills:
React, Next.js, TypeScript, Redux, Tailwind, Bootstrap,
React Hook Form, Zod, Axios, React Query,
React Native, Git, GitHub.

Services:
Frontend Development, Admin Panels,
Figma to Code, API Integration,
Dashboard Development, Performance Optimization.

Contact:
Email: khawajfaizan258@gmail.com
LinkedIn: linkedin.com/in/faizan-ahmed258

Always respond professionally, clearly, and confidently.
`;

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: message },
        ],
        temperature: 0.6,
      }),
    });

    const data = await response.json();
    res.status(200).json({ reply: data.choices[0].message.content });
  } catch (error) {
    res.status(500).json({ error: "AI error" });
  }
}
