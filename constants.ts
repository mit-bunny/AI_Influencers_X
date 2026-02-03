import { GraphData } from "./types";

export const INITIAL_DATA: GraphData = {
  nodes: [
    // ==================== COMPANIES & LABS ====================
    {
      id: "OpenAI", name: "OpenAI", group: "company", role: "AI Research Lab", handle: "OpenAI", associated: "OpenAI",
      verified: "gold", joinedDate: "Dec 2015", bioTags: ["AGI", "GPT", "ChatGPT"],
      bio: "Creating safe AGI that benefits all of humanity.",
      followers: 4200000, following: 52, location: "San Francisco", website: "openai.com"
    },
    {
      id: "GoogleDeepMind", name: "Google DeepMind", group: "company", role: "AI Research Lab", handle: "GoogleDeepMind", associated: "Google",
      verified: "gold", joinedDate: "Sep 2010", bioTags: ["Gemini", "AlphaFold", "AGI"],
      bio: "Solving intelligence to advance science and benefit humanity.",
      followers: 920000, following: 185, location: "London"
    },
    {
      id: "AnthropicAI", name: "Anthropic", group: "company", role: "AI Safety Lab", handle: "AnthropicAI", associated: "Anthropic",
      verified: "gold", joinedDate: "Feb 2021", bioTags: ["Claude", "Constitutional AI", "Safety"],
      bio: "AI safety company building reliable, interpretable AI systems.",
      followers: 680000, following: 48, location: "San Francisco", website: "anthropic.com"
    },
    {
      id: "xAI", name: "xAI", group: "company", role: "AI Company", handle: "xaboratory", associated: "xAI",
      verified: "gold", joinedDate: "Jul 2023", bioTags: ["Grok", "TruthGPT"],
      bio: "Understand the universe.",
      followers: 1500000, following: 3, location: "Bay Area"
    },
    {
      id: "MetaAI", name: "Meta AI", group: "company", role: "AI Lab", handle: "MetaAI", associated: "Meta",
      verified: "gold", joinedDate: "Sep 2013", bioTags: ["Llama", "Open Source", "PyTorch"],
      bio: "Advancing AI through open research for the benefit of all.",
      followers: 280000, following: 92, location: "Menlo Park"
    },
    {
      id: "HuggingFace", name: "Hugging Face", group: "company", role: "AI Platform", handle: "huggingface", associated: "Hugging Face",
      verified: "gold", joinedDate: "Mar 2016", bioTags: ["Open Source", "Transformers", "Hub"],
      bio: "The AI community building the future. Home to 500k+ models.",
      followers: 520000, following: 1350, location: "New York", website: "huggingface.co"
    },
    {
      id: "NVIDIA", name: "NVIDIA", group: "company", role: "AI Computing", handle: "nvidia", associated: "NVIDIA",
      verified: "gold", joinedDate: "Jun 2009", bioTags: ["GPUs", "CUDA", "AI Infrastructure"],
      bio: "The engine of AI. Pioneering accelerated computing.",
      followers: 2800000, following: 380, location: "Santa Clara", website: "nvidia.com"
    },
    {
      id: "Microsoft", name: "Microsoft", group: "company", role: "Tech Giant", handle: "Microsoft", associated: "Microsoft",
      verified: "gold", joinedDate: "Sep 2009", bioTags: ["Copilot", "Azure", "OpenAI Partner"],
      bio: "Empowering every person and organization to achieve more.",
      followers: 15200000, following: 2950, location: "Redmond", website: "microsoft.com"
    },
    {
      id: "Perplexity", name: "Perplexity", group: "company", role: "AI Search", handle: "peraboratory_ai", associated: "Perplexity",
      verified: "gold", joinedDate: "Aug 2022", bioTags: ["Search", "Answers", "Knowledge"],
      bio: "Where knowledge begins. AI-powered answer engine.",
      followers: 420000, following: 145, location: "San Francisco", website: "perplexity.ai"
    },
    {
      id: "MistralAI", name: "Mistral AI", group: "company", role: "AI Company", handle: "MistralAI", associated: "Mistral",
      verified: "gold", joinedDate: "May 2023", bioTags: ["Open Models", "Efficiency", "Europe"],
      bio: "Frontier AI in your hands. Building efficient open models.",
      followers: 280000, following: 52, location: "Paris", website: "mistral.ai"
    },
    {
      id: "Stability", name: "Stability AI", group: "company", role: "Generative AI", handle: "StabilityAI", associated: "Stability AI",
      verified: "gold", joinedDate: "Aug 2022", bioTags: ["Stable Diffusion", "Open Source", "Images"],
      bio: "AI by the people, for the people. Building open generative AI.",
      followers: 380000, following: 285, location: "London", website: "stability.ai"
    },
    {
      id: "Cohere", name: "Cohere", group: "company", role: "Enterprise AI", handle: "coaboratory", associated: "Cohere",
      verified: "gold", joinedDate: "Nov 2019", bioTags: ["Enterprise", "NLP", "RAG"],
      bio: "Making NLP accessible. Enterprise AI platform.",
      followers: 125000, following: 420, location: "Toronto", website: "cohere.com"
    },
    {
      id: "Midjourney", name: "Midjourney", group: "company", role: "Generative Art", handle: "midjourney", associated: "Midjourney",
      verified: "gold", joinedDate: "Jul 2022", bioTags: ["Art", "Images", "Creativity"],
      bio: "Expanding the imaginative powers of the human species.",
      followers: 420000, following: 18, location: "San Francisco"
    },
    {
      id: "Runway", name: "Runway", group: "company", role: "Creative AI", handle: "runwayml", associated: "Runway",
      verified: "gold", joinedDate: "Mar 2018", bioTags: ["Video", "Gen-2", "Creative Tools"],
      bio: "Applied AI research company. Building the future of creativity.",
      followers: 185000, following: 520, location: "New York", website: "runway.ml"
    },
    {
      id: "ScaleAI", name: "Scale AI", group: "company", role: "Data Platform", handle: "scale_AI", associated: "Scale AI",
      verified: "gold", joinedDate: "Jun 2016", bioTags: ["Data", "Labeling", "Enterprise"],
      bio: "Accelerate AI. The data platform for AI.",
      followers: 145000, following: 285, location: "San Francisco", website: "scale.com"
    },
    {
      id: "Databricks", name: "Databricks", group: "company", role: "Data & AI", handle: "databricks", associated: "Databricks",
      verified: "gold", joinedDate: "Oct 2013", bioTags: ["Data", "Lakehouse", "MLOps"],
      bio: "The Data and AI Company. Unified analytics platform.",
      followers: 195000, following: 680, location: "San Francisco", website: "databricks.com"
    },
    {
      id: "LangChain", name: "LangChain", group: "company", role: "AI Framework", handle: "LangChainAI", associated: "LangChain",
      verified: "gold", joinedDate: "Oct 2022", bioTags: ["Agents", "LLM Apps", "Framework"],
      bio: "Building applications with LLMs through composability.",
      followers: 125000, following: 320, location: "San Francisco", website: "langchain.com"
    },
    {
      id: "Replit", name: "Replit", group: "company", role: "AI Coding", handle: "Replit", associated: "Replit",
      verified: "gold", joinedDate: "Jul 2016", bioTags: ["IDE", "Coding", "AI Assistant"],
      bio: "Build software faster with AI. The collaborative IDE.",
      followers: 285000, following: 1850, location: "San Francisco", website: "replit.com"
    },
    {
      id: "CharacterAI", name: "Character.AI", group: "company", role: "AI Characters", handle: "character_ai", associated: "Character.AI",
      verified: "gold", joinedDate: "Sep 2022", bioTags: ["Characters", "Chat", "Entertainment"],
      bio: "Personalized AI for every moment of your day.",
      followers: 185000, following: 125, location: "Palo Alto", website: "character.ai"
    },
    {
      id: "Inflection", name: "Inflection AI", group: "company", role: "Personal AI", handle: "inflaboratory_ai", associated: "Inflection",
      verified: "gold", joinedDate: "Mar 2022", bioTags: ["Pi", "Personal AI", "Empathy"],
      bio: "Creating a personal AI for everyone.",
      followers: 85000, following: 95, location: "Palo Alto", website: "inflection.ai"
    },
    {
      id: "Together", name: "Together AI", group: "company", role: "AI Infrastructure", handle: "toaboratorywithaboratory", associated: "Together AI",
      verified: "gold", joinedDate: "Jun 2022", bioTags: ["Infrastructure", "Open Source", "Training"],
      bio: "The fastest cloud for AI. Train and run models together.",
      followers: 65000, following: 285, location: "San Francisco", website: "together.ai"
    },
    {
      id: "Groq", name: "Groq", group: "company", role: "AI Hardware", handle: "GroqInc", associated: "Groq",
      verified: "gold", joinedDate: "Apr 2017", bioTags: ["LPU", "Speed", "Inference"],
      bio: "Fast AI inference. Building the LPU Inference Engine.",
      followers: 95000, following: 185, location: "Mountain View", website: "groq.com"
    },
    {
      id: "Weights", name: "Weights & Biases", group: "company", role: "MLOps", handle: "weights_biases", associated: "W&B",
      verified: "gold", joinedDate: "Feb 2018", bioTags: ["MLOps", "Experiment Tracking", "Tools"],
      bio: "The AI developer platform. Track, visualize, and optimize ML.",
      followers: 85000, following: 520, location: "San Francisco", website: "wandb.ai"
    },
    {
      id: "LlamaIndex", name: "LlamaIndex", group: "company", role: "Data Framework", handle: "llama_index", associated: "LlamaIndex",
      verified: "gold", joinedDate: "Nov 2022", bioTags: ["RAG", "Data", "LLM Framework"],
      bio: "Data framework for LLM applications.",
      followers: 52000, following: 285, location: "San Francisco", website: "llamaindex.ai"
    },
    {
      id: "Pinecone", name: "Pinecone", group: "company", role: "Vector Database", handle: "pinaboratory", associated: "Pinecone",
      verified: "gold", joinedDate: "Jan 2021", bioTags: ["Vector DB", "Embeddings", "Search"],
      bio: "The vector database for AI applications.",
      followers: 48000, following: 320, location: "San Francisco", website: "pinecone.io"
    },
    {
      id: "Cursor", name: "Cursor", group: "company", role: "AI Code Editor", handle: "cursor_ai", associated: "Anysphere",
      verified: "gold", joinedDate: "Jan 2023", bioTags: ["Code Editor", "AI Pair Programming"],
      bio: "The AI Code Editor. Build software faster.",
      followers: 125000, following: 85, location: "San Francisco", website: "cursor.sh"
    },
    {
      id: "ElevenLabs", name: "ElevenLabs", group: "company", role: "AI Voice", handle: "elevenlabsio", associated: "ElevenLabs",
      verified: "gold", joinedDate: "Jan 2023", bioTags: ["Voice", "TTS", "Audio"],
      bio: "The most realistic AI voice platform.",
      followers: 165000, following: 185, location: "New York", website: "elevenlabs.io"
    },
    {
      id: "Pika", name: "Pika", group: "company", role: "AI Video", handle: "paboratory_artaboratorysaboratory", associated: "Pika Labs",
      verified: "gold", joinedDate: "Apr 2023", bioTags: ["Video", "Generation", "Creative"],
      bio: "Create and edit videos with AI.",
      followers: 145000, following: 95, location: "Palo Alto", website: "pika.art"
    },
    {
      id: "Suno", name: "Suno", group: "company", role: "AI Music", handle: "saboratory_ai_", associated: "Suno",
      verified: "gold", joinedDate: "Dec 2023", bioTags: ["Music", "Audio", "Generation"],
      bio: "Make any song you can imagine.",
      followers: 85000, following: 65, location: "Boston", website: "suno.ai"
    },

    // ==================== FOUNDERS & EXECUTIVES ====================
    {
      id: "SamAltman", name: "Sam Altman", group: "founder", role: "CEO", handle: "sama", associated: "OpenAI",
      verified: "blue", joinedDate: "Jul 2009", bioTags: ["Startups", "AGI", "YC Alumni"],
      bio: "CEO of OpenAI.",
      followers: 3500000, following: 1320, location: "San Francisco", website: "blog.samaltman.com"
    },
    {
      id: "ElonMusk", name: "Elon Musk", group: "founder", role: "CEO", handle: "elonmusk", associated: "xAI / Tesla / SpaceX",
      verified: "blue", joinedDate: "Jun 2009", bioTags: ["xAI", "Tesla", "SpaceX"],
      bio: "",
      followers: 195000000, following: 920, location: "Texas"
    },
    {
      id: "JensenHuang", name: "Jensen Huang", group: "founder", role: "CEO", handle: "nvidia", associated: "NVIDIA",
      verified: "blue", joinedDate: "Jun 2009", bioTags: ["GPUs", "AI Computing"],
      bio: "Founder and CEO of NVIDIA.",
      followers: 2800000, following: 380, location: "Santa Clara"
    },
    {
      id: "SatyaNadella", name: "Satya Nadella", group: "founder", role: "CEO", handle: "satyanadella", associated: "Microsoft",
      verified: "blue", joinedDate: "Jun 2009", bioTags: ["Cloud", "AI", "Leadership"],
      bio: "Chairman and CEO, Microsoft.",
      followers: 3800000, following: 295, location: "Seattle"
    },
    {
      id: "SundarPichai", name: "Sundar Pichai", group: "founder", role: "CEO", handle: "sundarpichai", associated: "Google / Alphabet",
      verified: "blue", joinedDate: "Mar 2009", bioTags: ["Google", "Gemini", "Search"],
      bio: "CEO of Google and Alphabet.",
      followers: 5800000, following: 195, location: "Bay Area"
    },
    {
      id: "MarkZuckerberg", name: "Mark Zuckerberg", group: "founder", role: "CEO", handle: "finkd", associated: "Meta",
      verified: "blue", joinedDate: "Jan 2009", bioTags: ["Meta", "Llama", "Social"],
      bio: "Building Meta.",
      followers: 1350000, following: 450, location: "Palo Alto"
    },
    {
      id: "DemisHassabis", name: "Demis Hassabis", group: "founder", role: "CEO", handle: "demaboratorysaboratorysaboratorys", associated: "Google DeepMind",
      verified: "blue", joinedDate: "Dec 2011", bioTags: ["AGI", "AlphaFold", "Science"],
      bio: "CEO of Google DeepMind. Nobel Laureate.",
      followers: 420000, following: 485, location: "London"
    },
    {
      id: "DarioAmodei", name: "Dario Amodei", group: "founder", role: "CEO", handle: "DarioAmodei", associated: "Anthropic",
      verified: "blue", joinedDate: "Apr 2021", bioTags: ["Safety", "Claude", "Scaling"],
      bio: "CEO of Anthropic.",
      followers: 185000, following: 125, location: "San Francisco"
    },
    {
      id: "DanielaAmodei", name: "Daniela Amodei", group: "founder", role: "President", handle: "DanielaAmodei", associated: "Anthropic",
      verified: "blue", joinedDate: "Apr 2021", bioTags: ["Safety", "Policy", "Leadership"],
      bio: "President of Anthropic.",
      followers: 48000, following: 285, location: "San Francisco"
    },
    {
      id: "ClemDelangue", name: "Clem Delangue", group: "founder", role: "CEO", handle: "ClementDelangue", associated: "Hugging Face",
      verified: "blue", joinedDate: "Mar 2012", bioTags: ["Open Source", "Democratization"],
      bio: "CEO of Hugging Face. Fighting for open-source AI.",
      followers: 245000, following: 2850, location: "New York"
    },
    {
      id: "AravSrinivas", name: "Aravind Srinivas", group: "founder", role: "CEO", handle: "AravSrinivas", associated: "Perplexity",
      verified: "blue", joinedDate: "Feb 2013", bioTags: ["Search", "AI", "Research"],
      bio: "CEO of Perplexity AI.",
      followers: 420000, following: 1650, location: "San Francisco"
    },
    {
      id: "MustafaSuleyman", name: "Mustafa Suleyman", group: "founder", role: "CEO Microsoft AI", handle: "mustaboratorysulaboratoryeman", associated: "Microsoft",
      verified: "blue", joinedDate: "Dec 2009", bioTags: ["DeepMind Co-founder", "Inflection"],
      bio: "CEO of Microsoft AI. Co-founder of DeepMind & Inflection.",
      followers: 345000, following: 685, location: "San Francisco"
    },
    {
      id: "ArthurMensch", name: "Arthur Mensch", group: "founder", role: "CEO", handle: "arthaboratorumensch", associated: "Mistral AI",
      verified: "blue", joinedDate: "May 2023", bioTags: ["Open Models", "Europe"],
      bio: "CEO and Co-founder of Mistral AI.",
      followers: 85000, following: 420, location: "Paris"
    },
    {
      id: "GregBrockman", name: "Greg Brockman", group: "founder", role: "President", handle: "gdb", associated: "OpenAI",
      verified: "blue", joinedDate: "Nov 2008", bioTags: ["Engineering", "Scaling"],
      bio: "Co-founder and President of OpenAI.",
      followers: 425000, following: 985, location: "San Francisco"
    },
    {
      id: "MiraMurati", name: "Mira Murati", group: "founder", role: "Former CTO", handle: "maboratoryraboratory", associated: "OpenAI Alumni",
      verified: "blue", joinedDate: "Mar 2017", bioTags: ["Product", "Engineering"],
      bio: "Former CTO of OpenAI.",
      followers: 320000, following: 385, location: "San Francisco"
    },
    {
      id: "IlyaSutskever", name: "Ilya Sutskever", group: "founder", role: "Co-founder", handle: "ilyasut", associated: "SSI",
      verified: "blue", joinedDate: "Jun 2013", bioTags: ["Deep Learning", "Superintelligence"],
      bio: "Co-founder of Safe Superintelligence Inc. OpenAI co-founder.",
      followers: 620000, following: 92, location: "Palo Alto"
    },
    {
      id: "AlexandrWang", name: "Alexandr Wang", group: "founder", role: "CEO", handle: "alexandaboratory_wang", associated: "Scale AI",
      verified: "blue", joinedDate: "Sep 2012", bioTags: ["Data", "Enterprise", "Defense"],
      bio: "Founder and CEO of Scale AI.",
      followers: 225000, following: 485, location: "San Francisco"
    },
    {
      id: "NoamShazeer", name: "Noam Shazeer", group: "founder", role: "CEO", handle: "noaboratorymshaboratoryzeer", associated: "Character.AI",
      verified: "blue", joinedDate: "Feb 2023", bioTags: ["Transformers Co-inventor", "LLMs"],
      bio: "CEO of Character.AI. Invented the Transformer architecture.",
      followers: 125000, following: 185, location: "Palo Alto"
    },
    {
      id: "EmadMostaque", name: "Emad Mostaque", group: "founder", role: "Founder", handle: "EMostaque", associated: "Stability AI",
      verified: "blue", joinedDate: "Aug 2010", bioTags: ["Stable Diffusion", "Open Source"],
      bio: "Founder of Stability AI.",
      followers: 320000, following: 4520, location: "London"
    },
    {
      id: "AmjadMasad", name: "Amjad Masad", group: "founder", role: "CEO", handle: "amasad", associated: "Replit",
      verified: "blue", joinedDate: "Feb 2010", bioTags: ["Coding", "AI IDE"],
      bio: "CEO of Replit. AI will build software.",
      followers: 385000, following: 2350, location: "San Francisco"
    },
    {
      id: "AidanGomez", name: "Aidan Gomez", group: "founder", role: "CEO", handle: "aidanwgomez", associated: "Cohere",
      verified: "blue", joinedDate: "Dec 2017", bioTags: ["Transformers Co-author", "Enterprise"],
      bio: "CEO of Cohere. Co-author of 'Attention Is All You Need'.",
      followers: 125000, following: 685, location: "Toronto"
    },
    {
      id: "HarrisonChase", name: "Harrison Chase", group: "founder", role: "CEO", handle: "hwchase17", associated: "LangChain",
      verified: "blue", joinedDate: "Apr 2011", bioTags: ["Agents", "LLM Apps"],
      bio: "CEO of LangChain.",
      followers: 225000, following: 1020, location: "San Francisco"
    },
    {
      id: "JerryLiu", name: "Jerry Liu", group: "founder", role: "CEO", handle: "jeaboratoryaboratoryjliu0", associated: "LlamaIndex",
      verified: "blue", joinedDate: "Aug 2013", bioTags: ["RAG", "Data Frameworks"],
      bio: "Co-founder and CEO of LlamaIndex.",
      followers: 105000, following: 485, location: "San Francisco"
    },
    {
      id: "MatiGreenspan", name: "Mati Greenspan", group: "founder", role: "CEO", handle: "piaboratorykunaboratoryzick", associated: "Pika Labs",
      verified: "blue", joinedDate: "Jun 2023", bioTags: ["Video", "Generation"],
      bio: "CEO of Pika Labs.",
      followers: 65000, following: 285, location: "Palo Alto"
    },
    {
      id: "DavidHolz", name: "David Holz", group: "founder", role: "CEO", handle: "DavidSHolz", associated: "Midjourney",
      verified: "blue", joinedDate: "Aug 2022", bioTags: ["Art", "Generative AI"],
      bio: "Founder of Midjourney.",
      followers: 285000, following: 185, location: "San Francisco"
    },
    {
      id: "CristbalValenzuela", name: "Cristóbal Valenzuela", group: "founder", role: "CEO", handle: "c_valenzuelab", associated: "Runway",
      verified: "blue", joinedDate: "Jan 2018", bioTags: ["Video", "Creative AI"],
      bio: "CEO of Runway.",
      followers: 125000, following: 520, location: "New York"
    },
    {
      id: "BinduReddy", name: "Bindu Reddy", group: "founder", role: "CEO", handle: "bindureddy", associated: "Abacus.AI",
      verified: "blue", joinedDate: "Mar 2009", bioTags: ["Enterprise AI", "MLOps"],
      bio: "CEO of Abacus.AI.",
      followers: 145000, following: 1920, location: "San Francisco"
    },
    {
      id: "GuillermoRauch", name: "Guillermo Rauch", group: "founder", role: "CEO", handle: "rauchg", associated: "Vercel",
      verified: "blue", joinedDate: "Dec 2008", bioTags: ["Web", "AI SDK", "Next.js"],
      bio: "CEO of Vercel.",
      followers: 345000, following: 1580, location: "San Francisco"
    },
    {
      id: "VitalikButerin", name: "Vitalik Buterin", group: "founder", role: "Co-founder", handle: "VitalikButerin", associated: "Ethereum",
      verified: "blue", joinedDate: "Mar 2011", bioTags: ["Crypto", "Decentralization", "AI Safety"],
      bio: "Ethereum.",
      followers: 5600000, following: 395, location: "Global"
    },
    {
      id: "ReKabira", name: "Ahmad Al-Dahle", group: "founder", role: "VP GenAI", handle: "Ahmad_Al_Dahle", associated: "Meta",
      verified: "blue", joinedDate: "Feb 2023", bioTags: ["Llama", "Open Source"],
      bio: "VP of Generative AI at Meta.",
      followers: 45000, following: 385, location: "Bay Area"
    },

    // ==================== RESEARCHERS & ACADEMICS ====================
    {
      id: "YannLeCun", name: "Yann LeCun", group: "researcher", role: "Chief AI Scientist", handle: "ylecun", associated: "Meta",
      verified: "blue", joinedDate: "Oct 2011", bioTags: ["CNNs", "Turing Award", "JEPA"],
      bio: "Chief AI Scientist at Meta. Professor at NYU. Turing Award Laureate.",
      followers: 920000, following: 1950, location: "New York"
    },
    {
      id: "GeoffreyHinton", name: "Geoffrey Hinton", group: "researcher", role: "AI Pioneer", handle: "geoffraboratoryhinton", associated: "University of Toronto",
      verified: "blue", joinedDate: "Mar 2013", bioTags: ["Deep Learning", "Turing Award", "AI Safety"],
      bio: "Godfather of Deep Learning. Turing Award Laureate. Nobel Laureate.",
      followers: 520000, following: 195, location: "Toronto"
    },
    {
      id: "YoshuaBengio", name: "Yoshua Bengio", group: "researcher", role: "Professor", handle: "yoshaboratorybengio", associated: "Mila",
      verified: "blue", joinedDate: "Sep 2015", bioTags: ["Deep Learning", "Turing Award", "Safety"],
      bio: "Professor at UdeM. Scientific Director of Mila. Turing Award Laureate.",
      followers: 225000, following: 585, location: "Montreal"
    },
    {
      id: "AndrejKarpathy", name: "Andrej Karpathy", group: "researcher", role: "Founder", handle: "karpathy", associated: "Eureka Labs",
      verified: "blue", joinedDate: "May 2010", bioTags: ["Education", "LLMs", "Tesla AI Alumni"],
      bio: "Founder of Eureka Labs. Ex-Tesla AI Director, Ex-OpenAI.",
      followers: 1050000, following: 1180, location: "San Francisco", website: "karpathy.ai"
    },
    {
      id: "FeiFeiLi", name: "Fei-Fei Li", group: "researcher", role: "Professor", handle: "drfeifei", associated: "Stanford HAI",
      verified: "blue", joinedDate: "Mar 2010", bioTags: ["ImageNet", "Human-Centered AI"],
      bio: "Professor at Stanford. Co-Director of HAI. ImageNet creator.",
      followers: 620000, following: 720, location: "Stanford"
    },
    {
      id: "AndrewNg", name: "Andrew Ng", group: "researcher", role: "Founder", handle: "AndrewYNg", associated: "DeepLearning.AI",
      verified: "blue", joinedDate: "May 2010", bioTags: ["Education", "Coursera", "AI for All"],
      bio: "Founder of DeepLearning.AI. Co-founder of Coursera. Stanford Professor.",
      followers: 1050000, following: 450, location: "Palo Alto"
    },
    {
      id: "JeffDean", name: "Jeff Dean", group: "researcher", role: "Chief Scientist", handle: "JeffDean", associated: "Google",
      verified: "blue", joinedDate: "Jun 2010", bioTags: ["Systems", "Gemini", "TPUs"],
      bio: "Chief Scientist at Google DeepMind and Google Research.",
      followers: 485000, following: 295, location: "Bay Area"
    },
    {
      id: "FrancoisChollet", name: "François Chollet", group: "researcher", role: "Software Engineer", handle: "fchollet", associated: "Google",
      verified: "blue", joinedDate: "May 2010", bioTags: ["Keras", "ARC", "Reasoning"],
      bio: "Creator of Keras. AI researcher at Google. Author.",
      followers: 720000, following: 420, location: "Bay Area"
    },
    {
      id: "OriolVinyals", name: "Oriol Vinyals", group: "researcher", role: "VP Research", handle: "OriolVinyalsML", associated: "Google DeepMind",
      verified: "blue", joinedDate: "Feb 2015", bioTags: ["Seq2Seq", "AlphaStar"],
      bio: "VP of Research at Google DeepMind.",
      followers: 185000, following: 485, location: "London"
    },
    {
      id: "JasonWei", name: "Jason Wei", group: "researcher", role: "Research Scientist", handle: "_jasonwei", associated: "OpenAI",
      verified: "blue", joinedDate: "Apr 2020", bioTags: ["Chain-of-Thought", "Scaling"],
      bio: "Research Scientist at OpenAI. Previously Google Brain.",
      followers: 145000, following: 520, location: "San Francisco"
    },
    {
      id: "PercyLiang", name: "Percy Liang", group: "researcher", role: "Professor", handle: "percyabolatoryiang", associated: "Stanford",
      verified: "blue", joinedDate: "Aug 2011", bioTags: ["NLP", "Benchmarks", "HELM"],
      bio: "Professor at Stanford. Director of CRFM.",
      followers: 85000, following: 385, location: "Stanford"
    },
    {
      id: "ChrisOlah", name: "Chris Olah", group: "researcher", role: "Co-founder", handle: "ch402", associated: "Anthropic",
      verified: "blue", joinedDate: "Apr 2012", bioTags: ["Interpretability", "Visualization"],
      bio: "Co-founder at Anthropic. Interpretability research.",
      followers: 125000, following: 285, location: "San Francisco"
    },
    {
      id: "JanLeike", name: "Jan Leike", group: "researcher", role: "Head of Alignment", handle: "janleike", associated: "Anthropic",
      verified: "blue", joinedDate: "Sep 2016", bioTags: ["Alignment", "Safety"],
      bio: "Head of Alignment at Anthropic. Ex-OpenAI.",
      followers: 85000, following: 485, location: "San Francisco"
    },
    {
      id: "ShaneLegg", name: "Shane Legg", group: "researcher", role: "Co-founder", handle: "ShaneLegg", associated: "Google DeepMind",
      verified: "blue", joinedDate: "May 2011", bioTags: ["AGI", "Safety"],
      bio: "Co-founder and Chief AGI Scientist at Google DeepMind.",
      followers: 105000, following: 420, location: "London"
    },
    {
      id: "DavidSilver", name: "David Silver", group: "researcher", role: "Principal Scientist", handle: "davidaboratorysilveraboratory", associated: "Google DeepMind",
      verified: "blue", joinedDate: "Jan 2016", bioTags: ["AlphaGo", "RL"],
      bio: "Principal Scientist at DeepMind. Lead of AlphaGo, AlphaZero.",
      followers: 125000, following: 185, location: "London"
    },
    {
      id: "ThomasWolf", name: "Thomas Wolf", group: "researcher", role: "CSO", handle: "Thom_Wolf", associated: "Hugging Face",
      verified: "blue", joinedDate: "Jun 2016", bioTags: ["NLP", "Open Source"],
      bio: "Co-founder and CSO of Hugging Face.",
      followers: 105000, following: 1920, location: "New York"
    },
    {
      id: "JimFan", name: "Dr. Jim Fan", group: "researcher", role: "Sr Research Scientist", handle: "DrJimFan", associated: "NVIDIA",
      verified: "blue", joinedDate: "Aug 2012", bioTags: ["Robotics", "Foundation Models"],
      bio: "Senior Research Scientist at NVIDIA. Foundation Agents.",
      followers: 520000, following: 720, location: "Bay Area"
    },
    {
      id: "NoanBrown", name: "Noam Brown", group: "researcher", role: "Research Scientist", handle: "polyaboratorynoaboratorym", associated: "OpenAI",
      verified: "blue", joinedDate: "Sep 2015", bioTags: ["Game Theory", "Poker AI"],
      bio: "Research Scientist at OpenAI. Created Libratus & Pluribus.",
      followers: 85000, following: 320, location: "San Francisco"
    },
    {
      id: "RishabhPoddar", name: "Jacob Andreas", group: "researcher", role: "Professor", handle: "jda_jacobandaboratoryas", associated: "MIT",
      verified: "blue", joinedDate: "Mar 2016", bioTags: ["NLP", "Language"],
      bio: "Professor at MIT CSAIL.",
      followers: 35000, following: 285, location: "Boston"
    },
    {
      id: "EliezerYudkowsky", name: "Eliezer Yudkowsky", group: "researcher", role: "AI Safety Researcher", handle: "ESYudkowsky", associated: "MIRI",
      verified: "blue", joinedDate: "Feb 2009", bioTags: ["Alignment", "Rationality", "X-Risk"],
      bio: "Research Fellow at MIRI. Founder of LessWrong.",
      followers: 265000, following: 295, location: "Bay Area"
    },
    {
      id: "StuartRussell", name: "Stuart Russell", group: "researcher", role: "Professor", handle: "StuartJRussell", associated: "UC Berkeley",
      verified: "blue", joinedDate: "Apr 2014", bioTags: ["AI Safety", "AIMA Author"],
      bio: "Professor at UC Berkeley. Author of leading AI textbook.",
      followers: 145000, following: 285, location: "Berkeley"
    },
    {
      id: "MaxTegmark", name: "Max Tegmark", group: "researcher", role: "Professor", handle: "tegmark", associated: "MIT",
      verified: "blue", joinedDate: "Jun 2010", bioTags: ["Physics", "FLI", "AI Safety"],
      bio: "Professor at MIT. President of Future of Life Institute.",
      followers: 225000, following: 520, location: "Boston"
    },
    {
      id: "GaryMarcus", name: "Gary Marcus", group: "researcher", role: "Professor Emeritus", handle: "GaryMarcus", associated: "NYU",
      verified: "blue", joinedDate: "Sep 2011", bioTags: ["AI Critic", "Neuroscience"],
      bio: "Scientist, Author, AI Critic/Realist.",
      followers: 345000, following: 1350, location: "New York"
    },
    {
      id: "MelanieMitchell", name: "Melanie Mitchell", group: "researcher", role: "Professor", handle: "MelabichelleAI", associated: "Santa Fe Institute",
      verified: "blue", joinedDate: "May 2009", bioTags: ["Complexity", "AI Understanding"],
      bio: "Professor at Santa Fe Institute. AI author.",
      followers: 125000, following: 720, location: "Santa Fe"
    },
    {
      id: "EmilyBender", name: "Emily M. Bender", group: "researcher", role: "Professor", handle: "emilymbender", associated: "University of Washington",
      verified: "blue", joinedDate: "Aug 2010", bioTags: ["Linguistics", "AI Ethics"],
      bio: "Professor of Linguistics at UW.",
      followers: 185000, following: 1850, location: "Seattle"
    },
    {
      id: "TimnitGebru", name: "Timnit Gebru", group: "researcher", role: "Founder", handle: "timnitGebaboratoryu", associated: "DAIR Institute",
      verified: "blue", joinedDate: "Apr 2014", bioTags: ["AI Ethics", "Fairness"],
      bio: "Founder of DAIR Institute. AI ethics researcher.",
      followers: 185000, following: 2520, location: "Bay Area"
    },
    {
      id: "SamBowman", name: "Sam Bowman", group: "researcher", role: "Professor", handle: "sleaboratorybowman", associated: "NYU / Anthropic",
      verified: "blue", joinedDate: "Sep 2014", bioTags: ["NLP", "Benchmarks"],
      bio: "Professor at NYU. Research at Anthropic.",
      followers: 52000, following: 820, location: "New York"
    },
    {
      id: "KyunghyunCho", name: "Kyunghyun Cho", group: "researcher", role: "Professor", handle: "kaboratoryunghaboratoryun_cho", associated: "NYU / Genentech",
      verified: "blue", joinedDate: "Jul 2014", bioTags: ["Seq2Seq", "NLP"],
      bio: "Professor at NYU. VP of AI at Genentech.",
      followers: 85000, following: 620, location: "New York"
    },
    {
      id: "DouweKiela", name: "Douwe Kiela", group: "researcher", role: "Head of Research", handle: "daboratoryouweaboratoryk", associated: "Contextual AI",
      verified: "blue", joinedDate: "Mar 2016", bioTags: ["NLP", "RAG"],
      bio: "Head of Research at Contextual AI. Ex-Meta, Hugging Face.",
      followers: 48000, following: 520, location: "Bay Area"
    },

    // ==================== INVESTORS & VCs ====================
    {
      id: "MarcAndreessen", name: "Marc Andreessen", group: "investor", role: "Co-founder", handle: "pmarca", associated: "a16z",
      verified: "blue", joinedDate: "Mar 2007", bioTags: ["VC", "Tech Optimism"],
      bio: "Co-founder of a16z. Internet pioneer.",
      followers: 1650000, following: 13520, location: "Bay Area"
    },
    {
      id: "PaulGraham", name: "Paul Graham", group: "investor", role: "Co-founder", handle: "paulg", associated: "Y Combinator",
      verified: "blue", joinedDate: "Aug 2008", bioTags: ["Startups", "Essays"],
      bio: "Co-founder of Y Combinator.",
      followers: 2050000, following: 195, location: "UK"
    },
    {
      id: "GarryTan", name: "Garry Tan", group: "investor", role: "CEO", handle: "garrytan", associated: "Y Combinator",
      verified: "blue", joinedDate: "Mar 2008", bioTags: ["Startups", "SF"],
      bio: "President and CEO of Y Combinator.",
      followers: 720000, following: 5250, location: "San Francisco"
    },
    {
      id: "VinodKhosla", name: "Vinod Khosla", group: "investor", role: "Founder", handle: "vkhosla", associated: "Khosla Ventures",
      verified: "blue", joinedDate: "May 2009", bioTags: ["VC", "Clean Tech", "AI"],
      bio: "Founder of Khosla Ventures.",
      followers: 385000, following: 580, location: "Bay Area"
    },
    {
      id: "NatFriedman", name: "Nat Friedman", group: "investor", role: "Investor", handle: "natfriedman", associated: "AI Grant",
      verified: "blue", joinedDate: "Mar 2007", bioTags: ["Open Source", "GitHub Alumni"],
      bio: "Investor. Former CEO of GitHub.",
      followers: 225000, following: 1350, location: "Bay Area"
    },
    {
      id: "DanielGross", name: "Daniel Gross", group: "investor", role: "Investor", handle: "danielgross", associated: "AI Grant",
      verified: "blue", joinedDate: "Apr 2008", bioTags: ["AI Grant", "Apple Alumni"],
      bio: "Investor. Co-founder of AI Grant. Ex-Apple AI lead.",
      followers: 185000, following: 1850, location: "San Francisco"
    },
    {
      id: "ElAlderson", name: "Elad Gil", group: "investor", role: "Investor", handle: "eladgil", associated: "Independent",
      verified: "blue", joinedDate: "Jul 2007", bioTags: ["Startups", "High Growth"],
      bio: "Investor. Author of High Growth Handbook.",
      followers: 285000, following: 2150, location: "Bay Area"
    },
    {
      id: "ReidHoffman", name: "Reid Hoffman", group: "investor", role: "Partner", handle: "raboratoryeaboratorydaboratoryhoffman", associated: "Greylock",
      verified: "blue", joinedDate: "Sep 2009", bioTags: ["LinkedIn Founder", "VC"],
      bio: "Co-founder of LinkedIn. Partner at Greylock.",
      followers: 2250000, following: 1520, location: "Bay Area"
    },
    {
      id: "SamLessin", name: "Sam Lessin", group: "investor", role: "Partner", handle: "lessin", associated: "Slow Ventures",
      verified: "blue", joinedDate: "Apr 2009", bioTags: ["VC", "Meta Alumni"],
      bio: "Partner at Slow Ventures. Ex-Facebook.",
      followers: 125000, following: 1850, location: "San Francisco"
    },
    {
      id: "SarahGuo", name: "Sarah Guo", group: "investor", role: "Founder", handle: "saranaboratorymaolguo", associated: "Conviction",
      verified: "blue", joinedDate: "May 2011", bioTags: ["AI VC", "No Priors Podcast"],
      bio: "Founding Partner at Conviction. No Priors podcast.",
      followers: 145000, following: 1650, location: "San Francisco"
    },
    {
      id: "MartinCasado", name: "Martin Casado", group: "investor", role: "Partner", handle: "martin_casado", associated: "a16z",
      verified: "blue", joinedDate: "Aug 2010", bioTags: ["Enterprise", "VMware Alumni"],
      bio: "General Partner at a16z.",
      followers: 125000, following: 1250, location: "Bay Area"
    },
    {
      id: "BalajiSrinivasan", name: "Balaji Srinivasan", group: "investor", role: "Angel Investor", handle: "balajis", associated: "Network State",
      verified: "blue", joinedDate: "Sep 2007", bioTags: ["Crypto", "Futurism"],
      bio: "Angel investor. Author of The Network State.",
      followers: 1050000, following: 1950, location: "Global"
    },

    // ==================== MEDIA & CREATORS ====================
    {
      id: "LexFridman", name: "Lex Fridman", group: "media", role: "Podcaster", handle: "lexfridman", associated: "MIT",
      verified: "blue", joinedDate: "Apr 2010", bioTags: ["Podcast", "AI", "Interviews"],
      bio: "Host of Lex Fridman Podcast. Research at MIT.",
      followers: 4850000, following: 560, location: "Boston"
    },
    {
      id: "RowanCheung", name: "Rowan Cheung", group: "media", role: "Creator", handle: "rowancheung", associated: "The Rundown AI",
      verified: "blue", joinedDate: "Mar 2022", bioTags: ["Newsletter", "AI News"],
      bio: "Founder of The Rundown AI. 600K+ subscribers.",
      followers: 820000, following: 1380, location: "Los Angeles"
    },
    {
      id: "LoganKilpatrick", name: "Logan Kilpatrick", group: "media", role: "Developer Relations", handle: "OfficialLoganK", associated: "Google",
      verified: "blue", joinedDate: "Jun 2012", bioTags: ["DevRel", "Community"],
      bio: "Google AI Studio. Ex-OpenAI DevRel lead.",
      followers: 185000, following: 2850, location: "Bay Area"
    },
    {
      id: "SantiValdarrama", name: "Santiago", group: "media", role: "ML Engineer", handle: "svpino", associated: "Independent",
      verified: "blue", joinedDate: "May 2011", bioTags: ["ML Education", "Tips"],
      bio: "Machine Learning educator. Practical AI tips.",
      followers: 620000, following: 420, location: "Miami"
    },
    {
      id: "ElvisSaravia", name: "Elvis Saravia", group: "media", role: "Educator", handle: "omarsar0", associated: "DAIR.AI",
      verified: "blue", joinedDate: "Feb 2017", bioTags: ["Papers", "Education"],
      bio: "Co-founder of DAIR.AI. ML education.",
      followers: 225000, following: 1350, location: "Remote"
    },
    {
      id: "ChrisAlbon", name: "Chris Albon", group: "media", role: "Director ML", handle: "chrisalbon", associated: "Wikimedia",
      verified: "blue", joinedDate: "Mar 2009", bioTags: ["ML Education", "Flashcards"],
      bio: "Director of ML at Wikimedia. Author.",
      followers: 285000, following: 1850, location: "San Francisco"
    },
    {
      id: "ChipHuyen", name: "Chip Huyen", group: "media", role: "Author", handle: "chipro", associated: "Independent",
      verified: "blue", joinedDate: "Jun 2015", bioTags: ["MLOps", "Books"],
      bio: "Author, ML Systems Design. Stanford lecturer.",
      followers: 185000, following: 720, location: "Bay Area"
    },
    {
      id: "SwxyDotAI", name: "swyx", group: "media", role: "Founder", handle: "swyx", associated: "Latent Space",
      verified: "blue", joinedDate: "Aug 2014", bioTags: ["AI News", "Podcast"],
      bio: "Founder of Latent Space. AI analyst.",
      followers: 125000, following: 2850, location: "Bay Area"
    },
    {
      id: "RobertScoble", name: "Robert Scoble", group: "media", role: "Tech Journalist", handle: "Scobleizer", associated: "Independent",
      verified: "blue", joinedDate: "Mar 2007", bioTags: ["Tech", "VR", "AI"],
      bio: "Tech journalist and futurist.",
      followers: 385000, following: 45200, location: "Bay Area"
    },
    {
      id: "Grimes", name: "Grimes", group: "media", role: "Artist", handle: "Grimezsz", associated: "Music / AI",
      verified: "blue", joinedDate: "Jun 2010", bioTags: ["Music", "AI Art"],
      bio: "Artist. AI enthusiast.",
      followers: 1520000, following: 680, location: "Austin"
    },
    {
      id: "BeffJezos", name: "Beff Jezos", group: "media", role: "e/acc", handle: "BasedBeffJezos", associated: "e/acc movement",
      verified: "blue", joinedDate: "Aug 2023", bioTags: ["e/acc", "Acceleration"],
      bio: "e/acc. Effective accelerationism.",
      followers: 285000, following: 420, location: "Bay Area"
    },
    {
      id: "Roon", name: "Roon", group: "media", role: "Researcher", handle: "tszzl", associated: "OpenAI",
      verified: "blue", joinedDate: "Jul 2012", bioTags: ["Commentary", "SF"],
      bio: "Researcher at OpenAI.",
      followers: 225000, following: 580, location: "San Francisco"
    },
    {
      id: "Pieterlevels", name: "Pieter Levels", group: "media", role: "Founder", handle: "levelsio", associated: "Nomad List / Photo AI",
      verified: "blue", joinedDate: "Dec 2009", bioTags: ["Indie Hacker", "AI Products"],
      bio: "Indie maker. Building Photo AI, Nomad List.",
      followers: 620000, following: 1250, location: "Remote"
    },
    {
      id: "MckayWrigley", name: "Mckay Wrigley", group: "media", role: "Founder", handle: "mckaywrigley", associated: "Takeoff",
      verified: "blue", joinedDate: "Aug 2014", bioTags: ["AI Coding", "Education"],
      bio: "Building with AI. Teaching others.",
      followers: 345000, following: 1020, location: "Remote"
    },
    {
      id: "PietroSchirano", name: "Pietro Schirano", group: "media", role: "Designer", handle: "skirano", associated: "EverArt",
      verified: "blue", joinedDate: "Jun 2009", bioTags: ["Design", "AI Art"],
      bio: "Founder of EverArt. Design + AI.",
      followers: 225000, following: 520, location: "San Francisco"
    },
    {
      id: "Sully", name: "Sully", group: "media", role: "Founder", handle: "SullyOmarr", associated: "Cognosys",
      verified: "blue", joinedDate: "Apr 2011", bioTags: ["Agents", "Demos"],
      bio: "Co-founder of Cognosys.",
      followers: 225000, following: 680, location: "Bay Area"
    },
    {
      id: "AiBreakfast", name: "AI Breakfast", group: "media", role: "Newsletter", handle: "aibreakfast", associated: "Newsletter",
      verified: "blue", joinedDate: "Jan 2023", bioTags: ["Newsletter", "News"],
      bio: "Daily AI news digest.",
      followers: 125000, following: 1250, location: "Remote"
    },
    {
      id: "TheAIGRID", name: "TheAiGrid", group: "media", role: "YouTuber", handle: "TheAiGrid", associated: "YouTube",
      verified: "blue", joinedDate: "Feb 2023", bioTags: ["YouTube", "AI News"],
      bio: "AI news and analysis.",
      followers: 185000, following: 520, location: "Remote"
    },
    {
      id: "MatthewBerman", name: "Matthew Berman", group: "media", role: "YouTuber", handle: "MatthewBerman", associated: "YouTube",
      verified: "blue", joinedDate: "Mar 2023", bioTags: ["YouTube", "Tutorials"],
      bio: "AI tutorials and news on YouTube.",
      followers: 145000, following: 720, location: "Remote"
    },
    {
      id: "Altryne", name: "Alex Volkov", group: "media", role: "Host", handle: "altryne", associated: "ThursdAI",
      verified: "blue", joinedDate: "Jul 2012", bioTags: ["ThursdAI", "Community"],
      bio: "Host of ThursdAI. AI community organizer.",
      followers: 85000, following: 2850, location: "San Francisco"
    },

    // ==================== ENGINEERS & BUILDERS ====================
    {
      id: "GeorgeHotz", name: "George Hotz", group: "engineer", role: "Founder", handle: "realgeorgehotz", associated: "TinyGrad",
      verified: "blue", joinedDate: "May 2009", bioTags: ["tinygrad", "comma.ai"],
      bio: "Founder of comma.ai and tinygrad. Geohot.",
      followers: 520000, following: 920, location: "San Diego"
    },
    {
      id: "Anton", name: "Anton", group: "engineer", role: "Engineer", handle: "abacaj", associated: "Independent",
      verified: "blue", joinedDate: "Aug 2016", bioTags: ["Engineering", "Optimization"],
      bio: "ML Engineer. Building things.",
      followers: 105000, following: 320, location: "Remote"
    },
    {
      id: "TheoKatz", name: "Theo", group: "engineer", role: "Founder", handle: "t3dotgg", associated: "Ping Labs",
      verified: "blue", joinedDate: "Sep 2014", bioTags: ["Web Dev", "TypeScript"],
      bio: "CEO of Ping Labs. T3 stack creator.",
      followers: 285000, following: 1620, location: "San Francisco"
    },
    {
      id: "SharkfromTW", name: "Jeremy Howard", group: "engineer", role: "Founder", handle: "jeremyphoward", associated: "fast.ai",
      verified: "blue", joinedDate: "Sep 2009", bioTags: ["fast.ai", "Education"],
      bio: "Founder of fast.ai. Practical deep learning.",
      followers: 285000, following: 520, location: "San Francisco"
    },
    {
      id: "SimonW", name: "Simon Willison", group: "engineer", role: "Creator", handle: "simonw", associated: "Datasette",
      verified: "blue", joinedDate: "Oct 2006", bioTags: ["LLM CLI", "SQLite"],
      bio: "Creator of Datasette, Django co-creator.",
      followers: 145000, following: 2350, location: "Bay Area"
    },
    {
      id: "LucianoSphere", name: "Luciano", group: "engineer", role: "Engineer", handle: "LucianoSphere", associated: "Independent",
      verified: "blue", joinedDate: "Jan 2020", bioTags: ["Tutorials", "LocalAI"],
      bio: "AI engineer. Local LLM enthusiast.",
      followers: 85000, following: 720, location: "Europe"
    },
    {
      id: "BrianRoemmele", name: "Brian Roemmele", group: "engineer", role: "Researcher", handle: "BrianRoemmele", associated: "Independent",
      verified: "blue", joinedDate: "Mar 2009", bioTags: ["Voice AI", "Futurist"],
      bio: "AI researcher and voice technology expert.",
      followers: 385000, following: 45200, location: "Bay Area"
    },
    {
      id: "EmilWallner", name: "Emil Wallner", group: "engineer", role: "ML Engineer", handle: "EmilWallner", associated: "Google",
      verified: "blue", joinedDate: "Jul 2016", bioTags: ["Creative AI", "Education"],
      bio: "ML researcher at Google. Teaching AI creativity.",
      followers: 85000, following: 520, location: "London"
    },
    {
      id: "Teknium", name: "Teknium", group: "engineer", role: "Founder", handle: "Teknium1", associated: "Nous Research",
      verified: "blue", joinedDate: "Feb 2023", bioTags: ["Fine-tuning", "Open Source"],
      bio: "Co-founder of Nous Research. Hermes models.",
      followers: 85000, following: 1250, location: "Remote"
    },
    {
      id: "ThanosTPP", name: "Thanatos", group: "engineer", role: "Engineer", handle: "Th_Pham", associated: "Independent",
      verified: "blue", joinedDate: "Aug 2022", bioTags: ["Local LLMs", "Optimization"],
      bio: "Building local AI tools.",
      followers: 65000, following: 820, location: "Remote"
    },

    // ==================== ADDITIONAL KEY FIGURES ====================
    {
      id: "JohnCarmack", name: "John Carmack", group: "engineer", role: "Engineer", handle: "ID_AA_Carmack", associated: "AGI Research",
      verified: "blue", joinedDate: "Oct 2009", bioTags: ["Games", "VR", "AGI"],
      bio: "Independent AI researcher. Previously Oculus CTO, id Software founder.",
      followers: 820000, following: 185, location: "Dallas"
    },
    {
      id: "PedroDomingos", name: "Pedro Domingos", group: "researcher", role: "Professor Emeritus", handle: "pmddomingos", associated: "UW",
      verified: "blue", joinedDate: "Sep 2014", bioTags: ["Master Algorithm", "ML Theory"],
      bio: "Professor Emeritus at UW. Author of The Master Algorithm.",
      followers: 145000, following: 420, location: "Seattle"
    },
    {
      id: "SebastianRaschka", name: "Sebastian Raschka", group: "researcher", role: "Staff Research", handle: "rasaboratoryt", associated: "Lightning AI",
      verified: "blue", joinedDate: "May 2013", bioTags: ["ML Books", "Education"],
      bio: "Staff Research Engineer at Lightning AI. ML author.",
      followers: 125000, following: 820, location: "Madison"
    },
    {
      id: "JayAlammar", name: "Jay Alammar", group: "media", role: "ML Educator", handle: "JayAlammar", associated: "Cohere",
      verified: "blue", joinedDate: "Apr 2013", bioTags: ["Visualization", "Tutorials"],
      bio: "ML educator. Visual explanations of AI.",
      followers: 125000, following: 720, location: "Remote"
    },
    {
      id: "HarrisonKinsley", name: "Harrison Kinsley", group: "media", role: "Educator", handle: "Sentdex", associated: "YouTube",
      verified: "blue", joinedDate: "Sep 2012", bioTags: ["Python", "Tutorials"],
      bio: "Programming education. Sentdex on YouTube.",
      followers: 185000, following: 420, location: "Remote"
    },
  ],
  links: [
    // OpenAI ecosystem
    { source: "OpenAI", target: "SamAltman" },
    { source: "OpenAI", target: "GregBrockman" },
    { source: "OpenAI", target: "MiraMurati" },
    { source: "OpenAI", target: "IlyaSutskever" },
    { source: "OpenAI", target: "Microsoft" },
    { source: "SamAltman", target: "SatyaNadella" },
    { source: "SamAltman", target: "PaulGraham" },
    { source: "SamAltman", target: "VinodKhosla" },
    { source: "SamAltman", target: "LexFridman" },
    { source: "SamAltman", target: "ElonMusk" },
    { source: "OpenAI", target: "JasonWei" },
    { source: "OpenAI", target: "NoanBrown" },
    { source: "OpenAI", target: "Roon" },

    // Anthropic ecosystem
    { source: "AnthropicAI", target: "DarioAmodei" },
    { source: "AnthropicAI", target: "DanielaAmodei" },
    { source: "AnthropicAI", target: "ChrisOlah" },
    { source: "AnthropicAI", target: "JanLeike" },
    { source: "AnthropicAI", target: "SamBowman" },
    { source: "DarioAmodei", target: "OpenAI" },
    { source: "IlyaSutskever", target: "DarioAmodei" },

    // Google DeepMind ecosystem
    { source: "GoogleDeepMind", target: "DemisHassabis" },
    { source: "GoogleDeepMind", target: "ShaneLegg" },
    { source: "GoogleDeepMind", target: "DavidSilver" },
    { source: "GoogleDeepMind", target: "OriolVinyals" },
    { source: "GoogleDeepMind", target: "JeffDean" },
    { source: "SundarPichai", target: "DemisHassabis" },
    { source: "GoogleDeepMind", target: "FrancoisChollet" },
    { source: "DemisHassabis", target: "LexFridman" },

    // Meta AI ecosystem
    { source: "MetaAI", target: "YannLeCun" },
    { source: "MetaAI", target: "MarkZuckerberg" },
    { source: "MetaAI", target: "ReKabira" },
    { source: "YannLeCun", target: "GeoffreyHinton" },
    { source: "YannLeCun", target: "YoshuaBengio" },
    { source: "YannLeCun", target: "AndrewNg" },
    { source: "YannLeCun", target: "LexFridman" },

    // xAI ecosystem
    { source: "xAI", target: "ElonMusk" },
    { source: "ElonMusk", target: "AndrejKarpathy" },
    { source: "ElonMusk", target: "LexFridman" },
    { source: "ElonMusk", target: "Grimes" },
    { source: "ElonMusk", target: "MarcAndreessen" },

    // Mistral ecosystem
    { source: "MistralAI", target: "ArthurMensch" },
    { source: "MistralAI", target: "MetaAI" },

    // Hugging Face ecosystem
    { source: "HuggingFace", target: "ClemDelangue" },
    { source: "HuggingFace", target: "ThomasWolf" },
    { source: "HuggingFace", target: "MetaAI" },

    // NVIDIA ecosystem
    { source: "NVIDIA", target: "JensenHuang" },
    { source: "NVIDIA", target: "JimFan" },
    { source: "JimFan", target: "AndrejKarpathy" },

    // Perplexity ecosystem
    { source: "Perplexity", target: "AravSrinivas" },
    { source: "AravSrinivas", target: "JeffDean" },
    { source: "AravSrinivas", target: "AndrewNg" },

    // Stability ecosystem
    { source: "Stability", target: "EmadMostaque" },

    // Cohere ecosystem
    { source: "Cohere", target: "AidanGomez" },
    { source: "AidanGomez", target: "GeoffreyHinton" },

    // Scale AI ecosystem
    { source: "ScaleAI", target: "AlexandrWang" },
    { source: "NatFriedman", target: "AlexandrWang" },

    // LangChain ecosystem
    { source: "LangChain", target: "HarrisonChase" },
    { source: "HarrisonChase", target: "AndrewNg" },

    // LlamaIndex ecosystem
    { source: "LlamaIndex", target: "JerryLiu" },

    // Character.AI ecosystem
    { source: "CharacterAI", target: "NoamShazeer" },

    // Microsoft ecosystem
    { source: "Microsoft", target: "SatyaNadella" },
    { source: "Microsoft", target: "MustafaSuleyman" },
    { source: "MustafaSuleyman", target: "DemisHassabis" },

    // Inflection ecosystem
    { source: "Inflection", target: "MustafaSuleyman" },

    // Runway ecosystem
    { source: "Runway", target: "CristbalValenzuela" },

    // Replit ecosystem
    { source: "Replit", target: "AmjadMasad" },
    { source: "AmjadMasad", target: "SamAltman" },

    // Midjourney ecosystem
    { source: "Midjourney", target: "DavidHolz" },

    // Academic connections
    { source: "GeoffreyHinton", target: "YoshuaBengio" },
    { source: "GeoffreyHinton", target: "IlyaSutskever" },
    { source: "AndrewNg", target: "FeiFeiLi" },
    { source: "FeiFeiLi", target: "AndrejKarpathy" },
    { source: "AndrejKarpathy", target: "IlyaSutskever" },
    { source: "AndrejKarpathy", target: "LexFridman" },

    // Safety research connections
    { source: "EliezerYudkowsky", target: "StuartRussell" },
    { source: "EliezerYudkowsky", target: "MaxTegmark" },
    { source: "StuartRussell", target: "MaxTegmark" },
    { source: "MaxTegmark", target: "GeoffreyHinton" },

    // Critics/researchers
    { source: "GaryMarcus", target: "YannLeCun" },
    { source: "EmilyBender", target: "TimnitGebru" },

    // VC connections
    { source: "PaulGraham", target: "GarryTan" },
    { source: "MarcAndreessen", target: "ReidHoffman" },
    { source: "VinodKhosla", target: "MarcAndreessen" },
    { source: "NatFriedman", target: "DanielGross" },
    { source: "SarahGuo", target: "MarcAndreessen" },
    { source: "MartinCasado", target: "MarcAndreessen" },

    // Media connections
    { source: "LexFridman", target: "GeoffreyHinton" },
    { source: "LexFridman", target: "YannLeCun" },
    { source: "LexFridman", target: "DemisHassabis" },
    { source: "LexFridman", target: "AravSrinivas" },
    { source: "LexFridman", target: "JeffDean" },
    { source: "LexFridman", target: "JohnCarmack" },
    { source: "RowanCheung", target: "SamAltman" },
    { source: "Sully", target: "RowanCheung" },
    { source: "SwxyDotAI", target: "Altryne" },

    // Builder connections
    { source: "GeorgeHotz", target: "ElonMusk" },
    { source: "GeorgeHotz", target: "AndrejKarpathy" },
    { source: "SharkfromTW", target: "AndrewNg" },
    { source: "SimonW", target: "HarrisonChase" },
    { source: "JohnCarmack", target: "AndrejKarpathy" },

    // Infrastructure connections
    { source: "Together", target: "HuggingFace" },
    { source: "Groq", target: "NVIDIA" },
    { source: "Cursor", target: "OpenAI" },

    // Cross-company connections
    { source: "VitalikButerin", target: "BalajiSrinivasan" },
    { source: "GuillermoRauch", target: "AmjadMasad" },
    { source: "BeffJezos", target: "MarcAndreessen" },
    { source: "Pieterlevels", target: "MckayWrigley" }
  ]
};
