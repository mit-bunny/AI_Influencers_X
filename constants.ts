import { GraphData } from "./types";

export const INITIAL_DATA: GraphData = {
  nodes: [
    // --- Companies & Labs ---
    { 
      id: "OpenAI", name: "OpenAI", group: "company", role: "AI Research Lab", handle: "OpenAI", associated: "OpenAI",
      verified: "gold", joinedDate: "2015", bioTags: ["AGI", "LLMs", "Generative AI"],
      bio: "AI research and deployment company dedicated to ensuring AGI benefits all of humanity."
    },
    { 
      id: "GoogleDeepMind", name: "Google DeepMind", group: "company", role: "AI Research Lab", handle: "GoogleDeepMind", associated: "Google",
      verified: "gold", joinedDate: "2010", bioTags: ["Deep Learning", "Reinforcement Learning", "Science"],
      bio: "Solving intelligence to advance science and benefit humanity."
    },
    { 
      id: "AnthropicAI", name: "Anthropic", group: "company", role: "AI Safety Lab", handle: "AnthropicAI", associated: "Anthropic",
      verified: "gold", joinedDate: "2021", bioTags: ["AI Safety", "Constitutional AI", "LLMs"],
      bio: "AI research and safety company. We're building reliable, interpretable, and steerable AI systems."
    },
    { 
      id: "xAI", name: "xAI", group: "company", role: "AI Company", handle: "xai", associated: "xAI", 
      verified: "gold", joinedDate: "2023", bioTags: ["TruthGPT", "Universe"],
      bio: "Understand the universe."
    },
    { 
      id: "HuggingFace", name: "Hugging Face", group: "company", role: "AI Platform", handle: "huggingface", associated: "Hugging Face", 
      verified: "gold", joinedDate: "2016", bioTags: ["Open Source", "Transformers", "Community"],
      bio: "The AI community building the future."
    },
    { 
      id: "MetaAI", name: "Meta AI", group: "company", role: "AI Lab", handle: "MetaAI", associated: "Meta", 
      verified: "gold", joinedDate: "2013", bioTags: ["Open Science", "Llama", "PyTorch"],
      bio: "Meta AI's mission is to advance the state-of-the-art in artificial intelligence through open research."
    },
    { 
      id: "NVIDIA", name: "NVIDIA", group: "company", role: "Compute", handle: "nvidia", associated: "NVIDIA", 
      verified: "gold", joinedDate: "2009", bioTags: ["GPUs", "Hardware", "Omniverse"],
      bio: "The engine of AI."
    },
    { 
      id: "Microsoft", name: "Microsoft", group: "company", role: "Tech Giant", handle: "Microsoft", associated: "Microsoft", 
      verified: "gold", joinedDate: "2009", bioTags: ["Cloud", "Productivity", "Copilot"],
      bio: "We believe in what people make possible."
    },
    { 
      id: "Perplexity", name: "Perplexity", group: "company", role: "Search", handle: "perplexity_ai", associated: "Perplexity", 
      verified: "gold", joinedDate: "2022", bioTags: ["Search", "Answers", "LLMs"],
      bio: "Where knowledge begins."
    },
    { 
      id: "Midjourney", name: "Midjourney", group: "company", role: "Generative Art", handle: "midjourney", associated: "Midjourney", 
      verified: "gold", joinedDate: "2022", bioTags: ["Art", "Generative AI", "Design"],
      bio: "Expanding the imaginative powers of the human species."
    },
    { 
      id: "MistralAI", name: "Mistral AI", group: "company", role: "Open Models", handle: "MistralAI", associated: "Mistral", 
      verified: "gold", joinedDate: "2023", bioTags: ["Open Weights", "Efficiency", "Europe"],
      bio: "Frontier AI in your hands."
    },
    { 
      id: "LangChain", name: "LangChain", group: "company", role: "Framework", handle: "LangChainAI", associated: "LangChain", 
      verified: "gold", joinedDate: "2022", bioTags: ["Agents", "Chains", "DevTools"],
      bio: "Building a bridge between LLMs and your data."
    },

    // --- Key Figures (The "Godfathers" & CEOS) ---
    { 
      id: "SamAltman", name: "Sam Altman", group: "person", role: "CEO", handle: "sama", associated: "OpenAI",
      verified: "blue", joinedDate: "2009", bioTags: ["Startups", "Energy", "AGI"],
      bio: "co-founder of OpenAI."
    },
    { 
      id: "ElonMusk", name: "Elon Musk", group: "person", role: "CEO", handle: "elonmusk", associated: "xAI / Tesla",
      verified: "blue", joinedDate: "2009", bioTags: ["Mars", "Cars", "Rockets", "AI"],
      bio: "" 
    },
    { 
      id: "JensenHuang", name: "Jensen Huang", group: "person", role: "CEO", handle: "nvidia", associated: "NVIDIA", 
      verified: "blue", joinedDate: "2009", bioTags: ["Graphics", "Computing", "Leather Jackets"],
      bio: "Founder and CEO of NVIDIA."
    },
    { 
      id: "DemisHassabis", name: "Demis Hassabis", group: "researcher", role: "CEO", handle: "demishassabis", associated: "Google DeepMind",
      verified: "blue", joinedDate: "2011", bioTags: ["Neuroscience", "Chess", "AGI"],
      bio: "Co-founder & CEO, Google DeepMind. Working on AGI to solve the biggest scientific challenges."
    },
    { 
      id: "YannLeCun", name: "Yann LeCun", group: "researcher", role: "Chief AI Scientist", handle: "ylecun", associated: "Meta",
      verified: "blue", joinedDate: "2011", bioTags: ["CNNs", "Self-Supervised Learning", "Open Source"],
      bio: "Chief AI Scientist at Meta, Professor at NYU. Turing Award Laureate."
    },
    { 
      id: "GeoffreyHinton", name: "Geoffrey Hinton", group: "researcher", role: "Turing Award", handle: "geoffreyhinton", associated: "U of Toronto",
      verified: "blue", joinedDate: "2013", bioTags: ["Backpropagation", "Deep Learning", "Safety"],
      bio: "Deep learning researcher. Turing Award Laureate."
    },
    { 
      id: "YoshuaBengio", name: "Yoshua Bengio", group: "researcher", role: "Turing Award", handle: "yoshuabengio", associated: "Mila", 
      verified: "blue", joinedDate: "2015", bioTags: ["Deep Learning", "Consciousness", "Safety"],
      bio: "Professor at UdeM, Scientific Director of Mila. Turing Award Laureate. Concerned about AI safety."
    },
    { 
      id: "FeiFeiLi", name: "Fei-Fei Li", group: "researcher", role: "Professor", handle: "drfeifei", associated: "Stanford HAI", 
      verified: "blue", joinedDate: "2010", bioTags: ["Computer Vision", "ImageNet", "Human-Centered AI"],
      bio: "Prof CS @Stanford, Co-Director @StanfordHAI. Co-Founder/Chair @AI4AllOrg."
    },
    { 
      id: "AndrewNg", name: "Andrew Ng", group: "researcher", role: "Founder", handle: "AndrewYNg", associated: "DeepLearning.AI",
      verified: "blue", joinedDate: "2010", bioTags: ["Education", "AI for Everyone", "Coursera"],
      bio: "Co-Founder of Coursera; Stanford CS adjunct faculty. Former head of Baidu AI Group/Google Brain."
    },
    { 
      id: "AndrejKarpathy", name: "Andrej Karpathy", group: "researcher", role: "Founder", handle: "karpathy", associated: "Eureka Labs",
      verified: "blue", joinedDate: "2010", bioTags: ["CV", "Autopilot", "Education", "LLMs"],
      bio: "Building Eureka Labs. Previously Director of AI at Tesla, Researcher at OpenAI."
    },
    { 
      id: "IlyaSutskever", name: "Ilya Sutskever", group: "researcher", role: "Founder", handle: "ilyasut", associated: "SSI", 
      verified: "blue", joinedDate: "2013", bioTags: ["Superintelligence", "Deep Learning", "Safety"],
      bio: "Co-founder of Safe Superintelligence Inc."
    },
    { 
      id: "GregBrockman", name: "Greg Brockman", group: "person", role: "President", handle: "gdb", associated: "OpenAI", 
      verified: "blue", joinedDate: "2008", bioTags: ["Systems", "Scaling", "Engineering"],
      bio: "Co-founder & President @OpenAI."
    },
    { 
      id: "MiraMurati", name: "Mira Murati", group: "person", role: "CTO", handle: "miramurati", associated: "OpenAI", 
      verified: "blue", joinedDate: "2017", bioTags: ["Product", "Deployment", "Safety"],
      bio: "CTO @OpenAI."
    },
    { 
      id: "DarioAmodei", name: "Dario Amodei", group: "researcher", role: "CEO", handle: "AnthropicAI", associated: "Anthropic", 
      verified: "blue", joinedDate: "2021", bioTags: ["Safety", "Scaling Laws", "Interpretability"],
      bio: "CEO of Anthropic."
    },
    { 
      id: "MustafaSuleyman", name: "Mustafa Suleyman", group: "person", role: "CEO AI", handle: "mustafasuleyman", associated: "Microsoft", 
      verified: "blue", joinedDate: "2009", bioTags: ["Inflection", "Policy", "Ethics"],
      bio: "CEO, Microsoft AI. Co-founder Inflection & DeepMind."
    },
    { 
      id: "ShaneLegg", name: "Shane Legg", group: "researcher", role: "Co-founder", handle: "ShaneLegg", associated: "Google DeepMind", 
      verified: "blue", joinedDate: "2011", bioTags: ["AGI", "Safety", "Prediction"],
      bio: "Co-founder and Chief AGI Scientist, Google DeepMind."
    },

    // --- Influencers / Engineers / Founders ---
    { 
      id: "ClemDelangue", name: "Clem Delangue", group: "person", role: "CEO", handle: "ClementDelangue", associated: "Hugging Face", 
      verified: "blue", joinedDate: "2012", bioTags: ["Open Source", "Community", "Democratization"],
      bio: "Co-founder and CEO @HuggingFace. Fighting for open-source AI."
    },
    { 
      id: "ThomasWolf", name: "Thomas Wolf", group: "researcher", role: "CSO", handle: "Thom_Wolf", associated: "Hugging Face", 
      verified: "blue", joinedDate: "2016", bioTags: ["NLP", "Science", "Open Science"],
      bio: "Co-founder and CSO @HuggingFace. Big Science, Open Source."
    },
    { 
      id: "HarrisonChase", name: "Harrison Chase", group: "person", role: "CEO", handle: "hwchase17", associated: "LangChain", 
      verified: "blue", joinedDate: "2011", bioTags: ["Agents", "LLM Apps", "DevTools"],
      bio: "Co-founder/CEO @LangChainAI."
    },
    { 
      id: "AravSrinivas", name: "Aravind Srinivas", group: "person", role: "CEO", handle: "AravSrinivas", associated: "Perplexity", 
      verified: "blue", joinedDate: "2013", bioTags: ["Search", "Inference", "Research"],
      bio: "CEO @Perplexity_AI."
    },
    { 
      id: "JimFan", name: "Dr. Jim Fan", group: "researcher", role: "Senior Research Scientist", handle: "DrJimFan", associated: "NVIDIA", 
      verified: "blue", joinedDate: "2012", bioTags: ["Robotics", "Agents", "Foundation Models"],
      bio: "Senior Research Scientist @NVIDIA. Agents, Robotics, Foundation Models."
    },
    { 
      id: "LexFridman", name: "Lex Fridman", group: "person", role: "Podcaster", handle: "lexfridman", associated: "MIT", 
      verified: "blue", joinedDate: "2010", bioTags: ["Podcast", "Love", "Robotics"],
      bio: "Host of Lex Fridman Podcast. Research Scientist at MIT."
    },
    { 
      id: "FrancoisChollet", name: "François Chollet", group: "researcher", role: "Creator of Keras", handle: "fchollet", associated: "Google", 
      verified: "blue", joinedDate: "2010", bioTags: ["Keras", "ARC", "Reasoning"],
      bio: "Deep learning researcher at Google. Author of Keras."
    },
    { 
      id: "EmadMostaque", name: "Emad Mostaque", group: "person", role: "Founder", handle: "EMostaque", associated: "Stability AI", 
      verified: "blue", joinedDate: "2010", bioTags: ["Open Models", "Generative AI", "Media"],
      bio: "Founder of Stability AI. Decentralized AI."
    },
    { 
      id: "NatFriedman", name: "Nat Friedman", group: "person", role: "Investor", handle: "natfriedman", associated: "GitHub (Ex)", 
      verified: "blue", joinedDate: "2007", bioTags: ["Investing", "Open Source", "Compute"],
      bio: "Investor. Former CEO of GitHub."
    },
    { 
      id: "GeorgeHotz", name: "George Hotz", group: "researcher", role: "Founder", handle: "comma_ai", associated: "TinyCorp", 
      verified: "blue", joinedDate: "2009", bioTags: ["Hacking", "Self-Driving", "TinyBox"],
      bio: "Founder @comma_ai @tinygrad. Geohot."
    },
    { 
      id: "SantiValdarrama", name: "Santiago", group: "person", role: "ML Educator", handle: "svpino", associated: "Independent", 
      verified: "blue", joinedDate: "2011", bioTags: ["Education", "Tips", "Engineering"],
      bio: "I teach machine learning. Break down complex AI topics."
    },
    { 
      id: "BinduReddy", name: "Bindu Reddy", group: "person", role: "CEO", handle: "bindureddy", associated: "Abacus.AI", 
      verified: "blue", joinedDate: "2009", bioTags: ["Enterprise AI", "Commentary", "GenAI"],
      bio: "CEO @AbacusAI. LLMs and Enterprise AI."
    },
    { 
      id: "RowanCheung", name: "Rowan Cheung", group: "person", role: "Creator", handle: "rowancheung", associated: "The Rundown", 
      verified: "blue", joinedDate: "2022", bioTags: ["News", "Tools", "Newsletter"],
      bio: "Founder @TheRundownAI. Covering the latest in AI."
    },
    { 
      id: "Sully", name: "Sully", group: "person", role: "Creator", handle: "SullyOmarr", associated: "Cognosys", 
      verified: "blue", joinedDate: "2011", bioTags: ["Agents", "Building", "Demos"],
      bio: "Co-founder @CognosysAI. Building AI agents."
    },
    { 
      id: "MckayWrigley", name: "Mckay Wrigley", group: "person", role: "Dev", handle: "mckaywrigley", associated: "Takeoff", 
      verified: "blue", joinedDate: "2014", bioTags: ["Coding", "Education", "AI Tutor"],
      bio: "Building things with AI. Teaching others to do the same."
    },
    { 
      id: "PietroSchirano", name: "Pietro Schirano", group: "person", role: "Designer", handle: "skirano", associated: "EverArt", 
      verified: "blue", joinedDate: "2009", bioTags: ["Design", "Art", "UI/UX"],
      bio: "Founder @EverArtAI. Design + AI."
    },
    { 
      id: "AmjadMasad", name: "Amjad Masad", group: "person", role: "CEO", handle: "amasad", associated: "Replit", 
      verified: "blue", joinedDate: "2010", bioTags: ["Coding", "IDE", "LLMs"],
      bio: "CEO @Replit. AI will build software."
    },
    { 
      id: "GuillermoRauch", name: "Guillermo Rauch", group: "person", role: "CEO", handle: "rauchg", associated: "Vercel", 
      verified: "blue", joinedDate: "2008", bioTags: ["Frontend", "Web", "AI SDK"],
      bio: "CEO @Vercel. Next.js, React, Web."
    },
    { 
      id: "BeffJezos", name: "Beff Jezos", group: "person", role: "e/acc", handle: "BasedBeffJezos", associated: "e/acc", 
      verified: "blue", joinedDate: "2023", bioTags: ["Acceleration", "Physics", "Thermodynamics"],
      bio: "e/acc. Thermodynamics implies life, life implies intelligence."
    },
    { 
      id: "Roon", name: "Roon", group: "person", role: "Researcher", handle: "tszzl", associated: "Unknown", 
      verified: "blue", joinedDate: "2012", bioTags: ["Anon", "Commentary", "SF"],
      bio: "researcher. anon."
    },
    { 
      id: "SiqiChen", name: "Siqi Chen", group: "person", role: "CEO", handle: "blader", associated: "Runway", 
      verified: "blue", joinedDate: "2007", bioTags: ["Product", "Finance", "AI"],
      bio: "CEO @Runway."
    },
    { 
      id: "AlexandrWang", name: "Alexandr Wang", group: "person", role: "CEO", handle: "alexandr_wang", associated: "Scale AI", 
      verified: "blue", joinedDate: "2012", bioTags: ["Data", "Labeling", "Defense"],
      bio: "Founder & CEO @Scale_AI."
    },
    { 
      id: "AidanGomez", name: "Aidan Gomez", group: "researcher", role: "CEO", handle: "aidangomez", associated: "Cohere", 
      verified: "blue", joinedDate: "2017", bioTags: ["Transformers", "Enterprise", "NLP"],
      bio: "Co-founder & CEO @Cohere. Co-author 'Attention Is All You Need'."
    },
    { 
      id: "JeffDean", name: "Jeff Dean", group: "researcher", role: "Chief Scientist", handle: "JeffDean", associated: "Google", 
      verified: "blue", joinedDate: "2010", bioTags: ["Systems", "TPUs", "Gemini"],
      bio: "Chief Scientist, Google DeepMind and Google Research."
    },
    { 
      id: "GaryMarcus", name: "Gary Marcus", group: "person", role: "Critic", handle: "GaryMarcus", associated: "NYU", 
      verified: "blue", joinedDate: "2011", bioTags: ["Cognitive Science", "Skepticism", "Neurosymbolic"],
      bio: "Scientist, Best-selling Author, Founder. AI Skeptic/Realist."
    },
    { 
      id: "PedroDomingos", name: "Pedro Domingos", group: "researcher", role: "Professor", handle: "pmddomingos", associated: "U of Washington", 
      verified: "blue", joinedDate: "2014", bioTags: ["Master Algorithm", "Symbolic AI", "Politics"],
      bio: "Professor of CSE at UW. Author of 'The Master Algorithm'."
    },
    { 
      id: "EliezerYudkowsky", name: "Eliezer Yudkowsky", group: "person", role: "Safety Researcher", handle: "ESYudkowsky", associated: "MIRI", 
      verified: "blue", joinedDate: "2009", bioTags: ["Alignment", "Rationality", "Safety"],
      bio: "Research Fellow at MIRI. Founder of LessWrong."
    },
    { 
      id: "PaulGraham", name: "Paul Graham", group: "person", role: "Founder", handle: "paulg", associated: "Y Combinator", 
      verified: "blue", joinedDate: "2008", bioTags: ["Startups", "Essays", "Lisp"],
      bio: "Y Combinator."
    },
    { 
      id: "GarryTan", name: "Garry Tan", group: "person", role: "CEO", handle: "garrytan", associated: "Y Combinator", 
      verified: "blue", joinedDate: "2008", bioTags: ["Startups", "SF", "Community"],
      bio: "CEO @ycombinator."
    },
    { 
      id: "VinodKhosla", name: "Vinod Khosla", group: "person", role: "Investor", handle: "vkhosla", associated: "Khosla Ventures", 
      verified: "blue", joinedDate: "2009", bioTags: ["VC", "Risk", "Impact"],
      bio: "Founder, Khosla Ventures."
    },
    { 
      id: "MarcAndreessen", name: "Marc Andreessen", group: "person", role: "Investor", handle: "pmarca", associated: "a16z", 
      verified: "blue", joinedDate: "2007", bioTags: ["VC", "Techno-Optimism", "Building"],
      bio: "Marc Andreessen."
    },
    { 
      id: "SatyaNadella", name: "Satya Nadella", group: "person", role: "CEO", handle: "satyanadella", associated: "Microsoft", 
      verified: "blue", joinedDate: "2009", bioTags: ["Cloud", "Leadership", "Cricket"],
      bio: "Chairman and CEO of Microsoft."
    },
    { 
      id: "SundarPichai", name: "Sundar Pichai", group: "person", role: "CEO", handle: "sundarpichai", associated: "Google", 
      verified: "blue", joinedDate: "2009", bioTags: ["Search", "Android", "AI First"],
      bio: "CEO of Google and Alphabet."
    },
    { 
      id: "MarkZuckerberg", name: "Mark Zuckerberg", group: "person", role: "CEO", handle: "finkd", associated: "Meta", 
      verified: "blue", joinedDate: "2009", bioTags: ["Metaverse", "Open Source", "MMA"],
      bio: "Founder and CEO of Meta."
    }, 
    { 
      id: "VitalikButerin", name: "Vitalik Buterin", group: "person", role: "Founder", handle: "VitalikButerin", associated: "Ethereum", 
      verified: "blue", joinedDate: "2011", bioTags: ["Crypto", "Decentralization", "Coordination"],
      bio: "Ethereum."
    },
    { 
      id: "Grimes", name: "Grimes", group: "person", role: "Artist", handle: "Grimezsz", associated: "Music", 
      verified: "blue", joinedDate: "2010", bioTags: ["Art", "Music", "AI Voices"],
      bio: "I create things."
    },
    { 
      id: "Anton", name: "Anton", group: "person", role: "Dev", handle: "abacaj", associated: "Independent", 
      verified: "blue", joinedDate: "2016", bioTags: ["Engineering", "Optimization", "Systems"],
      bio: "Software Engineer."
    },
    { 
      id: "ElvisSaravia", name: "Elvis Saravia", group: "person", role: "Educator", handle: "omarsar0", associated: "DAIR.AI", 
      verified: "blue", joinedDate: "2017", bioTags: ["Papers", "Summaries", "Education"],
      bio: "Co-founder @DAIR_AI. Explaining AI papers."
    },
    { 
      id: "JerryLiu", name: "Jerry Liu", group: "person", role: "CEO", handle: "jerryjliu0", associated: "LlamaIndex", 
      verified: "blue", joinedDate: "2013", bioTags: ["RAG", "Data", "Frameworks"],
      bio: "Co-founder/CEO @LlamaIndex."
    },
    { 
      id: "BalajiSrinivasan", name: "Balaji Srinivasan", group: "person", role: "Investor", handle: "balajis", associated: "The Network State", 
      verified: "blue", joinedDate: "2007", bioTags: ["Crypto", "Truth", "Health"],
      bio: "The Network State."
    },
  ],
  links: [
    // OpenAI Core
    { source: "OpenAI", target: "SamAltman" },
    { source: "OpenAI", target: "GregBrockman" },
    { source: "OpenAI", target: "MiraMurati" },
    { source: "OpenAI", target: "IlyaSutskever" },
    { source: "OpenAI", target: "AndrejKarpathy" }, // Corrected ID
    { source: "SamAltman", target: "Microsoft" },
    { source: "SamAltman", target: "SatyaNadella" },

    // DeepMind / Google
    { source: "GoogleDeepMind", target: "DemisHassabis" },
    { source: "GoogleDeepMind", target: "JeffDean" },
    { source: "GoogleDeepMind", target: "FrancoisChollet" },
    { source: "DemisHassabis", target: "ShaneLegg" },
    { source: "SundarPichai", target: "DemisHassabis" },

    // Meta
    { source: "MetaAI", target: "YannLeCun" },
    { source: "MetaAI", target: "MarkZuckerberg" },
    { source: "YannLeCun", target: "GeoffreyHinton" },
    { source: "YannLeCun", target: "YoshuaBengio" },

    // Anthropic
    { source: "AnthropicAI", target: "DarioAmodei" },
    { source: "AnthropicAI", target: "OpenAI" },

    // xAI
    { source: "xAI", target: "ElonMusk" },
    { source: "ElonMusk", target: "SamAltman" },
    { source: "ElonMusk", target: "AndrejKarpathy" }, // Corrected ID
    { source: "ElonMusk", target: "LexFridman" },

    // Hugging Face
    { source: "HuggingFace", target: "ClemDelangue" },
    { source: "HuggingFace", target: "ThomasWolf" },
    { source: "HuggingFace", target: "MetaAI" },

    // NVIDIA
    { source: "NVIDIA", target: "JensenHuang" },
    { source: "NVIDIA", target: "JimFan" },
    { source: "JimFan", target: "AndrejKarpathy" }, // Corrected ID

    // Perplexity
    { source: "Perplexity", target: "AravSrinivas" },
    { source: "AravSrinivas", target: "SamAltman" },
    { source: "AravSrinivas", target: "YannLeCun" },

    // Research / Education
    { source: "AndrewNg", target: "GeoffreyHinton" },
    { source: "AndrewNg", target: "YannLeCun" },
    { source: "FeiFeiLi", target: "AndrejKarpathy" }, // Corrected ID
    { source: "AndrejKarpathy", target: "LexFridman" }, // Corrected ID

    // VC / Business
    { source: "PaulGraham", target: "SamAltman" },
    { source: "PaulGraham", target: "GarryTan" },
    { source: "VinodKhosla", target: "SamAltman" },
    { source: "MarcAndreessen", target: "ElonMusk" },
    { source: "NatFriedman", target: "AlexandrWang" },

    // Influencers / Devs
    { source: "LangChain", target: "HarrisonChase" },
    { source: "HarrisonChase", target: "AndrewNg" },
    { source: "RowanCheung", target: "SamAltman" },
    { source: "Sully", target: "RowanCheung" },
    { source: "AmjadMasad", target: "SamAltman" },
    { source: "BeffJezos", target: "MarcAndreessen" },
    { source: "Roon", target: "SamAltman" },
    { source: "PedroDomingos", target: "YannLeCun" },
    { source: "GaryMarcus", target: "YannLeCun" },
    { source: "EliezerYudkowsky", target: "SamAltman" },
    { source: "EmadMostaque", target: "ElonMusk" },
    { source: "SiqiChen", target: "SamAltman" },

    // Cross-connections
    { source: "MistralAI", target: "MetaAI" },
    { source: "AidanGomez", target: "GeoffreyHinton" },
    { source: "LexFridman", target: "SamAltman" },
    { source: "LexFridman", target: "YannLeCun" },
    { source: "LexFridman", target: "AravSrinivas" },
    { source: "LexFridman", target: "JeffDean" },
    { source: "Grimes", target: "ElonMusk" },
    { source: "VitalikButerin", target: "BalajiSrinivasan" }
  ]
};