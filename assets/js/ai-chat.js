const toggleBtn = document.getElementById("chat-toggle");
const chatBox = document.getElementById("chat-box");
const closeChat = document.getElementById("close-chat");
const sendBtn = document.getElementById("send-btn");
const userInput = document.getElementById("user-input");
const chatMessages = document.getElementById("chat-messages");

toggleBtn.onclick = () => chatBox.classList.toggle("d-none");
closeChat.onclick = () => chatBox.classList.add("d-none");

sendBtn.onclick = async () => {
  const question = userInput.value;
  if (!question) return;

  chatMessages.innerHTML += `<div class="user-msg">${question}</div>`;
  userInput.value = "";

  const response = await getAIResponse(question);
  chatMessages.innerHTML += `<div class="ai-msg">${response}</div>`;
  chatMessages.scrollTop = chatMessages.scrollHeight;
};

async function getAIResponse(question) {
  const q = question.toLowerCase();

  /* ===== INTRO / ABOUT ===== */
  if (
    q.includes("who are you") ||
    q.includes("introduce") ||
     q.includes("introduce your self") ||
      q.includes("Tell me about yourself") ||
      q.includes("who is faizan ahmed") ||
        q.includes("tell me about faizan") ||
          q.includes("faizan ahmed") ||
    q.includes("about yourself")
  ) {
    return `
Hi 👋 I’m Faizan Ahmed, a Software Engineer with 1+ year of hands-on experience.
I specialize in building modern, responsive, and high-performance web applications.
I work mainly with React, Next.js, TypeScript, and modern UI frameworks like Tailwind and Bootstrap.
My focus is clean code, performance, and real-world business impact.
`;
  }

  /* ===== SKILLS ===== */
  if (q.includes("skills") || q.includes("tech stack") || q.includes("technologies")) {
    return `
Faizan’s core skills include:
• Frontend: React.js, Next.js, TypeScript, JavaScript
• State Management: Redux, Context API, TanStack Query
• Styling: Tailwind CSS, Bootstrap
• Forms & Validation: React Hook Form + Zod
• API Integration: Axios, Fetch
• Mobile: React Native, Native Base
• Tools: Git, GitHub, REST APIs

He has strong experience converting Figma designs into pixel-perfect UIs.
`;
  }

  /* ===== EDUCATION ===== */
  if (q.includes("education") || q.includes("study") || q.includes("degree")) {
    return `
Faizan has a strong academic background in computer-related studies
and continuously improves his skills through hands-on projects,
real-world applications, and modern frontend frameworks.
`;
  }

  /* ===== SERVICES ===== */
  if (q.includes("services") || q.includes("offer") || q.includes("what do you do")) {
    return `
Faizan offers the following services:
• Frontend Web Development (React / Next.js)
• Figma to Pixel-Perfect UI Conversion
• Dashboard & Admin Panel Development
• API Integration & State Management
• Performance Optimization
• Responsive Website Development
• Bug Fixing & UI Improvements
`;
  }

  /* ===== PROJECTS (SMART MATCHING) ===== */
  if (q.includes("project") || q.includes("work")) {
    return `
Faizan has worked on multiple real-world projects including:
• TruthKeep AI – AI-based platform
• Seller Margin CRM Website
• Rabbit Hole – Admin Panel Dashboard
• Fitness Gym Website
• Lumina Xpert
• Joint Office Detector
• Image Classification using CNN
• EFAMILY Platform
• Real Estate Website
• Nexcent Onepage Website
• Foodi Onepage Website

Ask me about any specific project to get details.
`;
  }

  /* ===== SPECIFIC PROJECT DETAILS ===== */
  if (q.includes("truthkeep")) {
  return `
TruthKeep AI is an AI-powered fact verification platform developed by Faizan Ahmed.

• Uses Large Language Models (LLMs) to analyze and verify information
• Focuses on misinformation detection and trust-based insights
• Demonstrates API integration, AI logic, and clean UI design
`;
}

if (q.includes("medimind")) {
  return `
MediMind-AI is a medical diagnosis and precautions web application.

• Built using Python, Streamlit, and LLM APIs
• Analyzes medical inputs and suggests follow-up tests
• Focuses on AI-assisted healthcare decision support
`;
}

if (q.includes("joint office")) {
  return `
Joint Office Detector is a coworking space discovery platform.

• Allows users to find workspaces based on pricing and availability
• Includes support ticketing, community feed, and event modules
• Designed with scalable frontend architecture and user roles
`;
}

if (q.includes("seller") || q.includes("crm")) {
  return `
Seller Margin is a CRM-based website designed for business management.

• Helps track sales, margins, and customer data
• Focuses on dashboard-based UI and usability
• Demonstrates structured frontend development
`;
}

if (q.includes("rabbit")) {
  return `
Rabbit Hole is an Admin Panel Dashboard project.

• Built with focus on data visualization and admin workflows
• Includes role-based UI and clean layout structure
• Demonstrates dashboard and enterprise UI experience
`;
}

if (q.includes("efamily")) {
  return `
EFAMILY Platform is a web-based solution focused on user management and interaction.

• Designed for structured information handling
• Emphasizes usability and modular frontend design
• Shows experience with scalable UI components
`;
}

if (q.includes("cnn") || q.includes("image classification")) {
  return `
Image Classification using CNN is an AI/ML project.

• Uses Convolutional Neural Networks for image recognition
• Demonstrates understanding of machine learning fundamentals
• Shows practical implementation of AI concepts
`;
}

if (q.includes("lumina")) {
  return `
Lumina Xpert is a professional business website.

• Focuses on clean UI and modern web layout
• Built using HTML, CSS, JavaScript, and Bootstrap
• Demonstrates strong frontend fundamentals
`;
}

if (q.includes("real estate")) {
  return `
Real Estate Website project focuses on property listing platforms.

• Designed to showcase properties and services
• Clean layout and responsive design
• Demonstrates business-oriented UI development
`;
}

if (q.includes("fitness") || q.includes("gym")) {
  return `
Fitness Gym Website is a marketing-focused web project.

• Showcases gym services, plans, and trainers
• Responsive and visually engaging UI
• Built using modern frontend practices
`;
}

if (q.includes("nexcent")) {
  return `
Nexcent is a one-page business website.

• Clean and minimal landing page design
• Focus on layout, spacing, and responsiveness
• Demonstrates attention to UI detail
`;
}

if (q.includes("foodi")) {
  return `
Foodi is a one-page restaurant website.

• Designed to showcase menu and brand identity
• Uses clean visuals and responsive layout
• Highlights frontend styling and UX skills
`;
}

  /* ===== CONTACT ===== */
  if (q.includes("contact") || q.includes("hire") || q.includes("email")) {
    return `
You can contact Faizan via:
📧 Email: khawajfaizan258@gmail.com
🔗 LinkedIn: linkedin.com/in/faizan-ahmed258
📞 Phone: +92-337-9241973

He is open to full-time, remote, and freelance opportunities.
`;
  }

  /* ===== EXPERIENCE ===== */
  if (q.includes("experience") || q.includes("years")) {
    return `
Faizan has 1+ year of hands-on experience working on
real projects including dashboards, websites, admin panels,
and AI-integrated applications.
`;
  }

  /* ===== DEFAULT SMART ANSWER ===== */
  return `
That’s a good question 🙂
You can ask about:
• About Faizan
• Projects
• Skills
• Services
• Experience
• Education
• How to contact Faizan

I’ll answer like a real portfolio assistant.
`;
}
