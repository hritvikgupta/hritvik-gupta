import { PortfolioData } from './types';

export const PORTFOLIO_DATA: PortfolioData = {
  name: "Hritvik Gupta",
  title: "AI Engineer & Researcher",
  location: "San Francisco, CA",
  email: "hritvik2920@gmail.com",
  about: `I am an AI Engineer specializing in Large Language Models (LLMs), RAG systems, and multimodal pipelines. Currently at Penn Medicine, I build scalable voice and chat systems that impact patient care.

  My background spans building large-scale NLP pipelines for scientific analysis, optimizing RAG retrieval accuracy, and developing complex data engineering workflows. I am passionate about bridging the gap between cutting-edge AI research and practical, high-impact applications in healthcare and productivity tools.`,
  socials: [
    { platform: "GitHub", url: "https://github.com/hritvikgupta" },
    { platform: "LinkedIn", url: "https://www.linkedin.com/in/hritvik-gupta-link/" }
  ],
  skills: [
    {
      category: "AI & Systems",
      items: ["LLMs", "RAG", "Retrieval Optimization", "Multilingual NLP", "Vector Search", "ML Training Pipelines"]
    },
    {
      category: "Programming",
      items: ["Python", "JavaScript", "C++", "SQL", "Postgres", "NoSQL"]
    },
    {
      category: "Frameworks",
      items: ["PyTorch", "TensorFlow", "Scikit-learn", "LangChain", "LlamaIndex"]
    },
    {
      category: "Backend & DevOps",
      items: ["FastAPI", "Docker", "Kubernetes", "CI/CD", "AWS (EC2, S3, Lambda)"]
    },
    {
      category: "Data Engineering",
      items: ["Spark", "Delta Lake", "ETL", "Feature Engineering", "Data Modeling"]
    }
  ],
  experience: [
    {
      id: "exp-1",
      role: "AI Engineer",
      company: "Penn Medicine",
      period: "Jul 2024 - Present",
      description: [
        "Built an AI Voice & Chat system for Perception Care used by 100K+ West Coast patients; designed multilingual speech → RAG → LLM pipeline using LlamaIndex, FAISS, LangChain, FastAPI, and Docker.",
        "Engineered data generation for speech and language models retrieval, vector search, and prompt-routing workflows, reducing response latency by ~28% and improving clinical-text retrieval accuracy by 22%.",
        "Enhanced PLATLAS genomics platform with ML-based variant ranking and phenotype-similarity scoring; collaborated with Argonne National Lab to run 27M-SNP Nextflow pipelines on Aurora supercomputer.",
        "Developed PySpark + Delta Lake pipelines standardizing 30+ clinical datasets into OMOP, enabling real-time cohort building and disease-trend dashboards."
      ]
    },
    {
      id: "exp-2",
      role: "Graduate Researcher (NLP)",
      company: "University of California, Riverside",
      period: "Oct 2022 – Dec 2023",
      description: [
        "Built large-scale NLP pipelines (Python, Spark, SQL) for 10M+ multilingual research documents, improving tokenization + embedding generation speed by ~40%.",
        "Optimized RAG systems using LlamaIndex + LangChain, raising scientific text retrieval accuracy by 22% and reducing context-window failures through improved chunking + prompt-routing."
      ]
    },
    {
      id: "exp-3",
      role: "Data Analyst",
      company: "Cognizant",
      period: "Aug 2021 – Aug 2022",
      description: [
        "Built Python + SQL ETL pipelines processing 20K+ HR, payroll, and marketing records across 50 operational datasets, improving data accuracy by ~35%.",
        "Developed Scikit-learn + SAS predictive models for attrition and hiring demand, improving workforce planning accuracy for 5,000+ employees."
      ]
    }
  ],
  projects: [
    {
      id: "proj-1",
      title: "Motion Excel",
      description: [
        "Next-generation AI-powered spreadsheet and agentic framework enabling natural-language data workflows and intelligent automation",
        "Built-in Data Scientist Agent that runs advanced ML models (forecasting, classification, anomaly detection) and delivers interactive dashboards with actionable insights",
        "Built-in Python & SQL code editor allowing direct code execution within the spreadsheet interface for advanced analytics and data transformation",
        "Multi-agent orchestration system that intelligently routes user requests to specialized agents for accuracy and contextual understanding",
        "Natural language commands to build and manipulate spreadsheets using plain English instructions",
        "Research Agent integration that automatically gathers and integrates data from web sources",
        "Comprehensive spreadsheet features: formulas, conditional formatting, data validation, filtering, charts, and collaborative editing",
        "Isomorphic architecture running seamlessly on browsers and Node.js with consistent API",
        "High-performance platform optimized for large datasets, achieving ≈68% accuracy on SpreadsheetBench benchmark",
        "Extensible plugin architecture and fully customizable appearance with themes and configuration options",
        "Modern tech stack built with Next.js 15, React 18, TypeScript, Docker service for secure code execution, and WebSocket support for real-time synchronization"
      ],
      technologies: ["Next.js 15", "React 18", "TypeScript", "Python", "SQL", "Docker", "AWS", "Kubernetes", "PostgreSQL", "Redis", "WebSocket", "RAG", "AI Agents"],
      link: "https://motionexcel.co",
      media: [
        { type: 'image', url: '/assets/motionexcel/motionexcel.png' },
        { type: 'image', url: '/assets/motionexcel/dashboard.gif' },
        { type: 'image', url: '/assets/motionexcel/524357756-c072878e-58d0-469a-8b71-43abf9141174.png' },
        { type: 'video', url: '/assets/motionexcel/524346306-58f37535-2943-4058-a4ba-7a0f6fc32729.mp4', thumbnail: '/assets/motionexcel/motionexcel.png' }
      ]
    },
    {
      id: "proj-2",
      title: "MotionNote",
      description: [
        "AI-powered word processor transforming educational content and documentation creation",
        "Generate images directly from selected text and convert notes into charts and diagrams",
        "Automatically produce high-quality explainer videos with voice-overs from structured notes",
        "Built with microservices architecture using FastAPI and RAG technology for intelligent content understanding",
        "Leverages CopilotKit for seamless AI-assisted editing workflows",
        "Supports multilingual content generation for global accessibility",
        "Features AI avatar creation for personalized educational delivery",
        "Trusted by leading institutions including MIT, UCLA, and companies like OpenAI and NVIDIA",
        "Streamlines content creation pipeline from note-taking to professional video production",
        "Supabase backend ensures scalable data management and real-time collaboration"
      ],
      technologies: ["FastAPI", "React", "TypeScript", "Supabase", "PostgreSQL", "Docker", "AWS", "RAG", "CopilotKit", "Redis", "WebSocket", "Microservices"],
      link: "https://motionnote.com",
      media: [
        { type: 'image', url: '/assets/motionnote/motionnotedemo.png' },
        { type: 'video', url: '/assets/motionnote/usecase2%20(1).mp4', thumbnail: '/assets/motionnote/motionnotedemo.png' },
        { type: 'video', url: '/assets/motionnote/usecase3%20(1).mp4', thumbnail: '/assets/motionnote/motionnotedemo.png' },
        { type: 'video', url: '/assets/motionnote/usecase4%20(1).mp4', thumbnail: '/assets/motionnote/motionnotedemo.png' }
      ]
    },
    {
      id: "proj-3",
      title: "Storyborrd",
      description: [
        "AI-powered research and creative canvas combining Figma-style design with 200+ integrated AI models",
        "Comprehensive workspace for researchers, content creators, and creative professionals",
        "Graph memory architecture builds and visualizes connections between ideas, documents, and research findings",
        "Creates a living knowledge graph that evolves with your work",
        "Integrates document RAG for deep semantic understanding of research materials",
        "Multimodal reasoning capabilities enable seamless interaction with text, images, audio, and video",
        "Perform guided research pathways and automatically build connections between information sources",
        "Generate visual narratives including storyboards, mood boards, and technical documentation",
        "Intelligent context tracking ensures all creative elements remain cohesive and relevant",
        "Ideal for complex research projects, educational content development, and visual storytelling"
      ],
      technologies: ["React", "TypeScript", "GraphQL", "PostgreSQL", "Neo4j", "Vector DB", "Docker", "AWS", "Kubernetes", "Multimodal AI", "Graph Memory", "Document RAG", "Redis"],
      link: "https://storyborrd.com",
      media: [
        { type: 'image', url: '/assets/storyborrd/image.webp' },
        { type: 'image', url: '/assets/storyborrd/image%20(1).webp' },
        { type: 'image', url: '/assets/storyborrd/image%20(2).webp' }
      ]
    },
    {
      id: "proj-4",
      title: "Learning Software",
      description: [
        "Interactive learning platform designed to help developers master software engineering concepts through hands-on practice",
        "Comprehensive library covering Data Structures & Algorithms, System Design, Machine Learning, LLMs, NLP, Computer Vision, and DevOps",
        "Code & Learn feature with built-in sandbox environment for writing, running, and testing code with instant feedback",
        "LeetCode-style problem solving with real-time code execution and test case validation",
        "Interactive Jupyter-style notebooks directly in the browser for experimentation and data visualization",
        "Course creation tools allowing experts to publish and share their knowledge with learners worldwide",
        "Advanced LLM curriculum including Transformers, BERT, GPT, LLaMA, RAG, PEFT, and latest models like DeepSeek and Claude",
        "System Design deep dives covering Netflix, YouTube, Instagram, Uber, Spotify, and other major tech architectures",
        "Smart note-taking system integrated with courses for building a personal knowledge base",
        "Seamless simulations, executable code, and deep explanations — all in one place"
      ],
      technologies: ["React", "TypeScript", "Python", "FastAPI", "Docker", "AWS", "PostgreSQL", "Redis", "WebSocket", "Kubernetes", "Code Execution Engine"],
      link: "https://www.learningsoftwares.com",
      media: [
        { type: 'image', url: '/assets/learningsoftwares/diversecoursesoftwareengineering.png' },
        { type: 'image', url: '/assets/learningsoftwares/codeandlearn.png' },
        { type: 'image', url: '/assets/learningsoftwares/createcourse.png' },
        { type: 'image', url: '/assets/learningsoftwares/notebook.png' },
        { type: 'image', url: '/assets/learningsoftwares/notes.png' }
      ]
    }
  ],
  education: [
    {
      degree: "Masters In Computer Engineering",
      institution: "University Of California - Riverside",
      period: "Sep 2022 – Dec 2023"
    }
  ],
  awards: [
    "Health-Tech Innovation Accelerator Award – Penn Health-Tech (2025): CIRCA Voice-AI For General Healthcare Services to patients"
  ],
  publications: [
    { citation: "Levin, M.G., et al. (including Gupta, H.) Genome-Wide Assessment of Pleiotropy Across >1000 Traits from Global Biobanks. medRxiv, 2025." },
    { citation: "Patel, M., & Gupta, H. Extractive Text Summarization Using Elmo. I-SMAC Conference, 2020." },
    { citation: "Gupta, S., & Kal, H. Microstate EEG Analysis via RNN. i-PACT Conference, 2021." },
    { citation: "Gupta, H., & Patel, M. Text Summarization: LSA Topic Modelling with BERT. AI Smart Systems Conference, 2021." }
  ]
};

export const GEMINI_SYSTEM_INSTRUCTION = `
You are an AI assistant living on the portfolio website of Hritvik Gupta. 
Your goal is to answer visitor questions about Hritvik based strictly on the provided JSON data.

Here is the context about Hritvik:
${JSON.stringify(PORTFOLIO_DATA, null, 2)}

Guidelines:
1. Be professional, polite, and concise.
2. Use the "Playfair Display" tone—elegant, intelligent, and sophisticated.
3. If asked about something not in the data, politely decline.
4. Highlight his expertise in AI, RAG, and Healthcare Tech.
5. Keep answers relatively short (under 3 sentences) unless asked for details.
`;