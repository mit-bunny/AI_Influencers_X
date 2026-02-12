import { GraphData } from "./types";

// Links updated on 2026-02-11 - full cross-profile crawl
// Top 300 AI Influencers ranked by: log₁₀(followers) × seed_connections
// Minimum followers: 1,000 | AI-relevance filter: enabled

export const LAST_UPDATED = "February 11, 2026";

export const INITIAL_DATA: GraphData = {
  nodes: [
    {
        "id": "openai",
        "name": "OpenAI",
        "group": "company",
        "role": "AI Research Company",
        "handle": "OpenAI",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Dec 2015",
        "bioTags": [],
        "bio": "OpenAI’s mission is to ensure that artificial general intelligence benefits all of humanity. We’re hiring: https://t.co/dJGr6LgzPA",
        "followers": 4617379,
        "following": 4,
        "location": "",
        "website": "https://openai.com",
        "imageUrl": "https://pbs.twimg.com/profile_images/1885410181409820672/ztsaR0JW_400x400.jpg"
    },
    {
        "id": "lexfridman",
        "name": "Lex Fridman",
        "group": "media",
        "role": "Podcast Host & Researcher",
        "handle": "lexfridman",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Dec 2011",
        "bioTags": [],
        "bio": "Host of Lex Fridman Podcast.\nInterested in robots and humans.",
        "followers": 4578555,
        "following": 666,
        "location": "Austin and Boston",
        "website": "https://youtube.com/lexfridman",
        "imageUrl": "https://pbs.twimg.com/profile_images/1854713863817646088/nTmsz7jR_400x400.jpg"
    },
    {
        "id": "sama",
        "name": "Sam Altman",
        "group": "founder",
        "role": "CEO at OpenAI",
        "handle": "sama",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Jul 2006",
        "bioTags": [],
        "bio": "AI is cool i guess",
        "followers": 4317707,
        "following": 984,
        "location": "SF",
        "website": "http://blog.samaltman.com",
        "imageUrl": "https://pbs.twimg.com/profile_images/1904933748015255552/k43GMz63_400x400.jpg"
    },
    {
        "id": "satyanadella",
        "name": "Satya Nadella",
        "group": "founder",
        "role": "CEO at Microsoft",
        "handle": "satyanadella",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Feb 2009",
        "bioTags": [],
        "bio": "Chairman and CEO at Microsoft",
        "followers": 3609962,
        "following": 308,
        "location": "",
        "website": "https://snscratchpad.com/",
        "imageUrl": "https://pbs.twimg.com/profile_images/1221837516816306177/_Ld4un5A_400x400.jpg"
    },
    {
        "id": "nvidiageforce",
        "name": "NVIDIA GeForce",
        "group": "company",
        "role": "NVIDIA Gaming GPUs",
        "handle": "NVIDIAGeForce",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Oct 2009",
        "bioTags": [],
        "bio": "Introducing GeForce RTX 50 Series graphics cards & laptops, powered by NVIDIA Blackwell and AI.",
        "followers": 3042664,
        "following": 958,
        "location": "",
        "website": "https://linktr.ee/nvidiageforce",
        "imageUrl": "https://pbs.twimg.com/profile_images/2010791092342648832/40sa5bN__400x400.jpg"
    },
    {
        "id": "levie",
        "name": "Aaron Levie",
        "group": "founder",
        "role": "CEO at Box",
        "handle": "levie",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Mar 2007",
        "bioTags": [],
        "bio": "ceo @box - your business lives in content. unleash it with AI",
        "followers": 2450909,
        "following": 774,
        "location": "Bay Area",
        "website": "http://www.box.com",
        "imageUrl": "https://pbs.twimg.com/profile_images/885529357904510976/tM0vLiYS_400x400.jpg"
    },
    {
        "id": "nvidia",
        "name": "NVIDIA",
        "group": "company",
        "role": "GPU & AI Computing",
        "handle": "nvidia",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Jul 2009",
        "bioTags": [],
        "bio": "The official handle for NVIDIA. Blog: https://t.co/JAn5eKOTBT Support: https://t.co/6ln5FVnA2o All our social media: https://t.co/Uc56dL57Dh",
        "followers": 2435436,
        "following": 48,
        "location": "Santa Clara, CA",
        "website": "https://www.nvidia.com",
        "imageUrl": "https://pbs.twimg.com/profile_images/1828904711124078593/SRvCZSfQ_400x400.jpg"
    },
    {
        "id": "googleai",
        "name": "Google AI",
        "group": "company",
        "role": "Google AI Division",
        "handle": "GoogleAI",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Apr 2009",
        "bioTags": [],
        "bio": "Making AI helpful for everyone. Show thinking ↓",
        "followers": 2337542,
        "following": 29,
        "location": "Mountain View, CA",
        "website": "https://ai.google",
        "imageUrl": "https://pbs.twimg.com/profile_images/1924554705503715328/0-HDhohz_400x400.jpg"
    },
    {
        "id": "xai",
        "name": "xAI",
        "group": "company",
        "role": "AI Research Company",
        "handle": "xai",
        "associated": "",
        "joinedDate": "May 2023",
        "bioTags": [],
        "bio": "",
        "followers": 1905146,
        "following": 39,
        "location": "",
        "website": "http://x.ai",
        "imageUrl": "https://pbs.twimg.com/profile_images/1769430779845611520/lIgjSJGU_400x400.jpg"
    },
    {
        "id": "karpathy",
        "name": "Andrej Karpathy",
        "group": "founder",
        "role": "Founder at Eureka Labs",
        "handle": "karpathy",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Apr 2009",
        "bioTags": [
            "Neural Networks"
        ],
        "bio": "Building @EurekaLabsAI. Previously Director of AI @ Tesla, founding team @ OpenAI, CS231n/PhD @ Stanford. I like to train large deep neural nets.",
        "followers": 1762686,
        "following": 1050,
        "location": "Stanford",
        "website": "https://karpathy.ai",
        "imageUrl": "https://pbs.twimg.com/profile_images/1296667294148382721/9Pr6XrPB_400x400.jpg"
    },
    {
        "id": "brian_armstrong",
        "name": "Brian Armstrong",
        "group": "founder",
        "role": "CEO at Coinbase",
        "handle": "brian_armstrong",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Apr 2008",
        "bioTags": [
            "Research",
            "Founder"
        ],
        "bio": "Co-founder & CEO at @Coinbase. Creating more economic freedom in the world. ENS: barmstrong.eth Co-founder @researchhub @newlimit",
        "followers": 1725389,
        "following": 801,
        "location": "Earth",
        "website": "https://www.coinbase.com/",
        "imageUrl": "https://pbs.twimg.com/profile_images/1516832438818770944/n77EwnKU_400x400.png"
    },
    {
        "id": "andrewyng",
        "name": "Andrew Ng",
        "group": "founder",
        "role": "Co-founder at Google",
        "handle": "AndrewYNg",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Nov 2010",
        "bioTags": [
            "Founder"
        ],
        "bio": "Co-Founder of Coursera; Stanford CS adjunct faculty. Former head of Baidu AI Group/Google Brain. #ai #machinelearning, #deeplearning #MOOCs",
        "followers": 1357621,
        "following": 1062,
        "location": "Palo Alto, CA",
        "website": "http://www.andrewng.org",
        "imageUrl": "https://pbs.twimg.com/profile_images/733174243714682880/oyG30NEH_400x400.jpg"
    },
    {
        "id": "googledeepmind",
        "name": "Google DeepMind",
        "group": "company",
        "role": "AI Research Lab",
        "handle": "GoogleDeepMind",
        "associated": "",
        "joinedDate": "Jan 2016",
        "bioTags": [],
        "bio": "We’re a team of scientists, engineers, ethicists and more, committed to solving intelligence, to advance science and benefit humanity.",
        "followers": 1331053,
        "following": 281,
        "location": "London, UK",
        "website": "http://deepmind.google",
        "imageUrl": "https://pbs.twimg.com/profile_images/1695024885070737408/-M-HSH5P_400x400.jpg"
    },
    {
        "id": "azure",
        "name": "Microsoft Azure",
        "group": "company",
        "role": "Microsoft Cloud Platform",
        "handle": "Azure",
        "associated": "",
        "joinedDate": "Oct 2008",
        "bioTags": [],
        "bio": "Limitless innovation. ☁️ Follow along for the latest news and resources from the official #MicrosoftAzure team. For help, contact @AzureSupport.",
        "followers": 1060845,
        "following": 21,
        "location": "Redmond, WA",
        "website": "https://azure.microsoft.com/",
        "imageUrl": "https://pbs.twimg.com/profile_images/1268207800313774080/KF9pXfXU_400x400.jpg"
    },
    {
        "id": "stevenbjohnson",
        "name": "Steven Johnson",
        "group": "media",
        "role": "Author",
        "handle": "stevenbjohnson",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Mar 2007",
        "bioTags": [],
        "bio": "Editorial Director, NotebookLM and Google Labs. Author of 14 books. Latest: The Infernal Machine. Speech inquiries email: wesn at leighbureau dot com",
        "followers": 1045761,
        "following": 385,
        "location": "Brooklyn NY & Marin County CA",
        "website": "https://adjacentpossible.substack.com/about",
        "imageUrl": "https://pbs.twimg.com/profile_images/1388302739189510145/j-2jZu0R_400x400.jpg"
    },
    {
        "id": "ylecun",
        "name": "Yann LeCun",
        "group": "researcher",
        "role": "Chief AI Scientist at Meta",
        "handle": "ylecun",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Jun 2009",
        "bioTags": [
            "Robotics",
            "Research",
            "Professor"
        ],
        "bio": "Professor at NYU & Executive Chairman at AMI Labs. \nEx-Chief AI Scientist at Meta.\nResearcher in AI, Machine Learning, Robotics, etc.\nACM Turing Award Laureate.",
        "followers": 1029016,
        "following": 773,
        "location": "New York",
        "website": "http://yann.lecun.com",
        "imageUrl": "https://pbs.twimg.com/profile_images/1483577865056702469/rWA-3_T7_400x400.jpg"
    },
    {
        "id": "gdb",
        "name": "Greg Brockman",
        "group": "founder",
        "role": "President at OpenAI",
        "handle": "gdb",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Jul 2010",
        "bioTags": [
            "Founder"
        ],
        "bio": "President & Co-Founder @OpenAI",
        "followers": 909490,
        "following": 8,
        "location": "",
        "website": "http://gregbrockman.com",
        "imageUrl": "https://pbs.twimg.com/profile_images/1347621377503711233/bHg3ipfD_400x400.jpg"
    },
    {
        "id": "anthropicai",
        "name": "Anthropic",
        "group": "company",
        "role": "AI Safety Company",
        "handle": "AnthropicAI",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Jan 2021",
        "bioTags": [
            "AI Safety",
            "Research"
        ],
        "bio": "We're an AI safety and research company that builds reliable, interpretable, and steerable AI systems. Talk to our AI assistant @claudeai on https://t.co/FhDI3KQh0n.",
        "followers": 808848,
        "following": 35,
        "location": "",
        "website": "https://anthropic.com",
        "imageUrl": "https://pbs.twimg.com/profile_images/1798110641414443008/XP8gyBaY_400x400.jpg"
    },
    {
        "id": "code",
        "name": "Visual Studio Code",
        "group": "company",
        "role": "Visual Studio Code",
        "handle": "code",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Apr 2015",
        "bioTags": [
            "Open Source"
        ],
        "bio": "The open source AI code editor",
        "followers": 781193,
        "following": 148,
        "location": "Redmond, WA, USA",
        "website": "https://code.visualstudio.com",
        "imageUrl": "https://pbs.twimg.com/profile_images/1545098208556097536/rKXaODLl_400x400.jpg"
    },
    {
        "id": "demishassabis",
        "name": "Demis Hassabis",
        "group": "founder",
        "role": "CEO at Google DeepMind",
        "handle": "demishassabis",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Jun 2013",
        "bioTags": [
            "AGI",
            "Founder"
        ],
        "bio": "Nobel Laureate. Co-Founder & CEO @GoogleDeepMind - working on AGI. Solving disease @IsomorphicLabs. Trying to understand the fundamental nature of reality.",
        "followers": 639495,
        "following": 164,
        "location": "",
        "website": "http://www.deepmind.com",
        "imageUrl": "https://pbs.twimg.com/profile_images/1990472620614053888/xrAu0wQL_400x400.jpg"
    },
    {
        "id": "palmerluckey",
        "name": "Palmer Luckey",
        "group": "founder",
        "role": "Founder at Anduril",
        "handle": "PalmerLuckey",
        "associated": "",
        "verified": "blue",
        "joinedDate": "May 2011",
        "bioTags": [
            "Founder"
        ],
        "bio": "I am a technology enthusiast, writer, and modder. Founder of @ModRetro, @Oculus VR, and @Anduriltech. Keeping American superheroes safe with autonomous systems.",
        "followers": 620679,
        "following": 1941,
        "location": "Irvine, CA",
        "website": "http://Anduril.com",
        "imageUrl": "https://pbs.twimg.com/profile_images/1592034442171719680/trGJr315_400x400.jpg"
    },
    {
        "id": "huggingface",
        "name": "Hugging Face",
        "group": "company",
        "role": "AI/ML Platform",
        "handle": "huggingface",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Sep 2016",
        "bioTags": [],
        "bio": "The AI community building the future. https://t.co/TpiXQMQ9rZ",
        "followers": 619739,
        "following": 217,
        "location": "NYC and Paris and 🌏",
        "website": "https://huggingface.co",
        "imageUrl": "https://pbs.twimg.com/profile_images/1991559933473497089/mbrRS49P_400x400.jpg"
    },
    {
        "id": "fchollet",
        "name": "François Chollet",
        "group": "founder",
        "role": "Creator of Keras",
        "handle": "fchollet",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Aug 2009",
        "bioTags": [
            "AGI",
            "Deep Learning",
            "Founder"
        ],
        "bio": "Co-founder @ndea. Co-founder @arcprize. Creator of Keras and ARC-AGI. Author of 'Deep Learning with Python'.",
        "followers": 603663,
        "following": 825,
        "location": "United States",
        "website": "https://fchollet.com/",
        "imageUrl": "https://pbs.twimg.com/profile_images/2006806326140350470/Kd5oZv-f_400x400.jpg"
    },
    {
        "id": "ilyasut",
        "name": "Ilya Sutskever",
        "group": "researcher",
        "role": "Co-founder at OpenAI & SSI",
        "handle": "ilyasut",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Sep 2013",
        "bioTags": [],
        "bio": "SSI @SSI",
        "followers": 586952,
        "following": 3,
        "location": "",
        "website": "",
        "imageUrl": "https://pbs.twimg.com/profile_images/1961115716889030656/We74zmE-_400x400.jpg"
    },
    {
        "id": "surface",
        "name": "Microsoft Surface",
        "group": "company",
        "role": "Microsoft Surface Devices",
        "handle": "surface",
        "associated": "",
        "joinedDate": "Jun 2012",
        "bioTags": [],
        "bio": "Laptops built with next-level AI experiences to help you do what you do best",
        "followers": 586612,
        "following": 10,
        "location": "Redmond, WA",
        "website": "https://www.microsoft.com/en-us/store/configure/surface-laptop-13-inch/8mzbmmcjzqv3?OCID=cge_osocial",
        "imageUrl": "https://pbs.twimg.com/profile_images/1742647782794764289/dB0DDozB_400x400.jpg"
    },
    {
        "id": "drfeifei",
        "name": "Fei-Fei Li",
        "group": "researcher",
        "role": "Professor at Stanford",
        "handle": "drfeifei",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Apr 2010",
        "bioTags": [
            "Robotics",
            "Founder"
        ],
        "bio": "Prof (CS @Stanford), Co-Director @StanfordHAI, Cofounder/CEO @theworldlabs, #AI #SpatialIntelligence #GenAI #computervision #robotics #AI-healthcare",
        "followers": 554995,
        "following": 1156,
        "location": "Stanford, CA, U.S.A.",
        "website": "http://svl.stanford.edu",
        "imageUrl": "https://pbs.twimg.com/profile_images/841385099799085056/R1iX4QGX_400x400.jpg"
    },
    {
        "id": "geoffreyhinton",
        "name": "Geoffrey Hinton",
        "group": "researcher",
        "role": "Godfather of Deep Learning",
        "handle": "geoffreyhinton",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Jan 2019",
        "bioTags": [
            "Deep Learning"
        ],
        "bio": "deep learning",
        "followers": 547323,
        "following": 28,
        "location": "",
        "website": "",
        "imageUrl": "https://pbs.twimg.com/profile_images/1084213316963057664/fQGCUSt0_400x400.jpg"
    },
    {
        "id": "nvidiageforcefr",
        "name": "NVIDIA GeForce FR",
        "group": "company",
        "role": "NVIDIA France",
        "handle": "NVIDIAGeForceFR",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Sep 2011",
        "bioTags": [],
        "bio": "Découvrez les Cartes Graphiques et PC Portables GeForce RTX Série 50, propulsés par les technologies NVIDIA Blackwell et d'IA.",
        "followers": 546606,
        "following": 245,
        "location": "Paris",
        "website": "https://www.nvidia.com/fr-fr/geforce/graphics-cards/50-series/",
        "imageUrl": "https://pbs.twimg.com/profile_images/2011095939738476544/L0mTuv9W_400x400.jpg"
    },
    {
        "id": "paraga",
        "name": "Parag Agrawal",
        "group": "founder",
        "role": "Former CEO at Twitter",
        "handle": "paraga",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Apr 2008",
        "bioTags": [
            "Founder"
        ],
        "bio": "founder/ceo @p0 https://t.co/KLxULH5Io7, device following @vintweeta",
        "followers": 545363,
        "following": 1443,
        "location": "San Francisco, CA",
        "website": "",
        "imageUrl": "https://pbs.twimg.com/profile_images/1375285353146327052/y6jeByyD_400x400.jpg"
    },
    {
        "id": "chatgptapp",
        "name": "ChatGPT",
        "group": "company",
        "role": "AI Assistant by OpenAI",
        "handle": "ChatGPTapp",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Oct 2023",
        "bioTags": [],
        "bio": "friendly robot",
        "followers": 489593,
        "following": 210,
        "location": "Supercomputer",
        "website": "https://chat.com/",
        "imageUrl": "https://pbs.twimg.com/profile_images/1886916133917487104/dJrir79p_400x400.png"
    },
    {
        "id": "pytorch",
        "name": "PyTorch",
        "group": "company",
        "role": "ML Framework",
        "handle": "PyTorch",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Sep 2016",
        "bioTags": [
            "Neural Networks",
            "Open Source"
        ],
        "bio": "Tensors and neural networks in Python with strong hardware acceleration. PyTorch is an open source project at the Linux Foundation. #PyTorchFoundation",
        "followers": 473330,
        "following": 81,
        "location": "",
        "website": "http://pytorch.org",
        "imageUrl": "https://pbs.twimg.com/profile_images/1813965160702451712/yXV1vRhr_400x400.jpg"
    },
    {
        "id": "mikeyk",
        "name": "Mike Krieger",
        "group": "founder",
        "role": "Co-founder of Instagram",
        "handle": "mikeyk",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Nov 2006",
        "bioTags": [
            "Founder"
        ],
        "bio": "Building at Anthropic Labs @anthropicai.\nBefore: CPO at Anthropic, co-founder & CTO of @instagram and @artifact_news",
        "followers": 457345,
        "following": 266,
        "location": "37.760571,-122.387567",
        "website": "https://www.anthropic.com/careers",
        "imageUrl": "https://pbs.twimg.com/profile_images/1600639584294969344/VOYWWHNN_400x400.jpg"
    },
    {
        "id": "_akhaliq",
        "name": "AK",
        "group": "founder",
        "role": "HuggingFace",
        "handle": "_akhaliq",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Apr 2014",
        "bioTags": [
            "Research"
        ],
        "bio": "AI research paper tweets, ML @Gradio (acq. by @HuggingFace 🤗) dm for promo ,submit papers here: https://t.co/UzmYN5XOCi",
        "followers": 454313,
        "following": 3157,
        "location": "",
        "website": "https://huggingface.co/akhaliq",
        "imageUrl": "https://pbs.twimg.com/profile_images/1451191636810092553/kpM5Fe12_400x400.jpg"
    },
    {
        "id": "austen",
        "name": "Austen Allred",
        "group": "founder",
        "role": "Founder",
        "handle": "Austen",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Dec 2010",
        "bioTags": [
            "Founder"
        ],
        "bio": "Founder https://t.co/m6TigM4CJT: Free AI training for the smartest engineers. Will tweet as I wish and suffer the consequences. Accelerando: @kellyclaudeai",
        "followers": 445345,
        "following": 1423,
        "location": "Austin, TX",
        "website": "http://gauntletai.com",
        "imageUrl": "https://pbs.twimg.com/profile_images/2016256482833035264/kVHK8w3e_400x400.jpg"
    },
    {
        "id": "claudeai",
        "name": "Claude",
        "group": "company",
        "role": "AI Assistant by Anthropic",
        "handle": "claudeai",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Jul 2025",
        "bioTags": [],
        "bio": "Claude is an AI assistant built by @anthropicai to be safe, accurate, and secure. Talk to Claude on https://t.co/ZhTwG8dz3D or download the app.",
        "followers": 421405,
        "following": 1,
        "location": "",
        "website": "http://claude.ai",
        "imageUrl": "https://pbs.twimg.com/profile_images/1950950107937185792/QOfEjFoJ_400x400.jpg"
    },
    {
        "id": "miramurati",
        "name": "Mira Murati",
        "group": "founder",
        "role": "Former CTO at OpenAI",
        "handle": "miramurati",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Aug 2010",
        "bioTags": [],
        "bio": "Now building @thinkymachines. Previously CTO @OpenAI",
        "followers": 417549,
        "following": 598,
        "location": "San Francisco, CA",
        "website": "",
        "imageUrl": "https://pbs.twimg.com/profile_images/1891915096278073344/-pNYsXgr_400x400.jpg"
    },
    {
        "id": "jeffdean",
        "name": "Jeff Dean",
        "group": "researcher",
        "role": "Chief Scientist at Google",
        "handle": "JeffDean",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Sep 2017",
        "bioTags": [
            "Research"
        ],
        "bio": "Chief Scientist, Google DeepMind & Google Research. Gemini Lead. Opinions stated here are my own, not those of Google. TensorFlow, MapReduce, Bigtable, ...",
        "followers": 408294,
        "following": 6382,
        "location": "",
        "website": "https://research.google/people/jeff",
        "imageUrl": "https://pbs.twimg.com/profile_images/935325968280907776/AcBo6zJc_400x400.jpg"
    },
    {
        "id": "geminiapp",
        "name": "Google Gemini",
        "group": "company",
        "role": "AI Assistant by Google",
        "handle": "GeminiApp",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Jun 2024",
        "bioTags": [
            "Research"
        ],
        "bio": "The Gemini app turns research into reality, bringing frontier AI experiences like Veo 3.1, Deep Think, Nano Banana, and more to hundreds of millions of people.",
        "followers": 400656,
        "following": 47,
        "location": "Mountain View, CA",
        "website": "http://gemini.google.com",
        "imageUrl": "https://pbs.twimg.com/profile_images/1940093473564073984/jiafRcO0_400x400.png"
    },
    {
        "id": "rasbt",
        "name": "Sebastian Raschka",
        "group": "researcher",
        "role": "Professor",
        "handle": "rasbt",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Oct 2012",
        "bioTags": [
            "Research",
            "Professor"
        ],
        "bio": "ML/AI research engineer. Ex stats professor.\nAuthor of \"Build a Large Language Model From Scratch\" (https://t.co/O8LAAMRzzW) & reasoning (https://t.co/5TueQKx2Fk)",
        "followers": 389642,
        "following": 1122,
        "location": "",
        "website": "https://sebastianraschka.com",
        "imageUrl": "https://pbs.twimg.com/profile_images/1661187442043486209/a3E4t1eV_400x400.jpg"
    },
    {
        "id": "hardmaru",
        "name": "hardmaru",
        "group": "researcher",
        "role": "Research Scientist at Google",
        "handle": "hardmaru",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Nov 2014",
        "bioTags": [
            "Founder"
        ],
        "bio": "Co-Founder and CEO @SakanaAILabs 🎏",
        "followers": 382975,
        "following": 1805,
        "location": "Minato-ku, Tokyo",
        "website": "https://sakana.ai/",
        "imageUrl": "https://pbs.twimg.com/profile_images/1678402467078234113/XN5Oy2UP_400x400.jpg"
    },
    {
        "id": "perplexity_ai",
        "name": "Perplexity",
        "group": "company",
        "role": "AI Search Engine",
        "handle": "perplexity_ai",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Dec 2022",
        "bioTags": [],
        "bio": "Curiosity changes everything. Download our free app on iOS, Mac, Windows, and Android: https://t.co/BBZ1kG0TVG",
        "followers": 380027,
        "following": 66,
        "location": "San Francisco, CA",
        "website": "http://perplexity.ai/comet",
        "imageUrl": "https://pbs.twimg.com/profile_images/2009310641165660160/XArF3_Ib_400x400.jpg"
    },
    {
        "id": "tensorflow",
        "name": "TensorFlow",
        "group": "company",
        "role": "ML Framework",
        "handle": "TensorFlow",
        "associated": "",
        "joinedDate": "Feb 2011",
        "bioTags": [
            "Research"
        ],
        "bio": "TensorFlow is a fast, flexible, and scalable open-source machine learning library for research and production.",
        "followers": 379863,
        "following": 116,
        "location": "Mountain View, CA",
        "website": "http://tensorflow.org",
        "imageUrl": "https://pbs.twimg.com/profile_images/1103339571977248768/FtFnqC38_400x400.png"
    },
    {
        "id": "alexandr_wang",
        "name": "Alexandr Wang",
        "group": "founder",
        "role": "CEO at Scale AI",
        "handle": "alexandr_wang",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Jun 2012",
        "bioTags": [
            "Founder"
        ],
        "bio": "chief ai officer @meta, founder @scale_ai. rational in the fullness of time",
        "followers": 379439,
        "following": 843,
        "location": "San Francisco, CA",
        "website": "https://scale.com",
        "imageUrl": "https://pbs.twimg.com/profile_images/1631421210205749248/uohbT_40_400x400.jpg"
    },
    {
        "id": "nvidiageforcees",
        "name": "NVIDIA GeForce ES",
        "group": "company",
        "role": "NVIDIA Spain",
        "handle": "NVIDIAGeForceES",
        "associated": "",
        "joinedDate": "Dec 2009",
        "bioTags": [],
        "bio": "Presentamos las tarjetas gráficas y portátiles GeForce RTX Serie 50 con el poder de NVIDIA Blackwell e IA.",
        "followers": 373202,
        "following": 140,
        "location": "",
        "website": "http://www.nvidia.es/page/home.html",
        "imageUrl": "https://pbs.twimg.com/profile_images/2011370300211118081/NNYlM0Tv_400x400.jpg"
    },
    {
        "id": "addyosmani",
        "name": "Addy Osmani",
        "group": "founder",
        "role": "CTO",
        "handle": "addyosmani",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Apr 2009",
        "bioTags": [],
        "bio": "Director, @GoogleCloud AI. Gemini  ✨ Vertex. Prev: Eng. leader, @GoogleChrome • Author • Great user, developer & AI experiences  • @GoogleAI @GoogleDeepMind",
        "followers": 365812,
        "following": 2467,
        "location": "Mountain View, CA",
        "website": "https://addyosmani.com",
        "imageUrl": "https://pbs.twimg.com/profile_images/2012065253623021570/0BReDfMk_400x400.jpg"
    },
    {
        "id": "goodfellow_ian",
        "name": "Ian Goodfellow",
        "group": "researcher",
        "role": "Creator of GANs",
        "handle": "goodfellow_ian",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Sep 2016",
        "bioTags": [
            "Research"
        ],
        "bio": "DeepMind Research Scientist. Opinions my own. Inventor of GANs. Lead author of https://t.co/M6vl8pEQ4I Founding chairman of @pubhealthaction",
        "followers": 359293,
        "following": 1359,
        "location": "San Francisco, CA",
        "website": "http://www.iangoodfellow.com",
        "imageUrl": "https://pbs.twimg.com/profile_images/1112921710339084288/nJ2wKwuv_400x400.jpg"
    },
    {
        "id": "drjimfan",
        "name": "Jim Fan",
        "group": "researcher",
        "role": "Senior Research Scientist at NVIDIA",
        "handle": "DrJimFan",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Dec 2012",
        "bioTags": [
            "AGI",
            "Robotics"
        ],
        "bio": "NVIDIA Director of Robotics & Distinguished Scientist. Co-Lead of GEAR lab. Solving Physical AGI, one motor at a time. Stanford Ph.D. OpenAI's 1st intern.",
        "followers": 357475,
        "following": 3102,
        "location": "Views my own. Contact →",
        "website": "https://jimfan.me",
        "imageUrl": "https://pbs.twimg.com/profile_images/1554922493101559808/SYSZhbcd_400x400.jpg"
    },
    {
        "id": "minchoi",
        "name": "Min Choi",
        "group": "founder",
        "role": "AI Educator",
        "handle": "minchoi",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Mar 2009",
        "bioTags": [],
        "bio": "AI Educator. 𝕏 about AI, solutions and interesting things.  Showing how to leverage AI in practical ways for you and your business. Opinions are my own.",
        "followers": 355116,
        "following": 1263,
        "location": "",
        "website": "",
        "imageUrl": "https://pbs.twimg.com/profile_images/1638359113221517312/CBZaJFyA_400x400.jpg"
    },
    {
        "id": "nvidiageforcejp",
        "name": "NVIDIA GeForce JP",
        "group": "company",
        "role": "NVIDIA Japan",
        "handle": "NVIDIAGeForceJP",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Apr 2018",
        "bioTags": [],
        "bio": "NVIDIA Blackwell と AI を搭載した GeForce RTX 50 シリーズグラフィックスカードとノート PC が登場。",
        "followers": 333761,
        "following": 157,
        "location": "東京都港区赤坂",
        "website": "https://www.nvidia.com/ja-jp/geforce/",
        "imageUrl": "https://pbs.twimg.com/profile_images/2011245787624456201/IZatuK_G_400x400.jpg"
    },
    {
        "id": "deryatr_",
        "name": "Derya Unutmaz, MD",
        "group": "researcher",
        "role": "Professor",
        "handle": "DeryaTR_",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Feb 2020",
        "bioTags": [
            "Robotics",
            "Professor"
        ],
        "bio": "Professor scientist, immunologist, biomedical engineer & Biohacker. ALL IN ON AI ! Interests: longevity, BioAI, AI coding, robotics, Space, Scifi, Singularity",
        "followers": 333650,
        "following": 7757,
        "location": "Connecticut, USA",
        "website": "",
        "imageUrl": "https://pbs.twimg.com/profile_images/1973918300947046400/Ez8Latw2_400x400.jpg"
    },
    {
        "id": "emollick",
        "name": "Ethan Mollick",
        "group": "media",
        "role": "Professor at Wharton",
        "handle": "emollick",
        "associated": "",
        "verified": "blue",
        "joinedDate": "May 2009",
        "bioTags": [
            "Startup",
            "Professor"
        ],
        "bio": "Professor @Wharton studying AI, innovation & startups. Democratizing education using tech\nBook: https://t.co/CSmipbJ2jV\nSubstack: https://t.co/UIBhxu4bgq",
        "followers": 318714,
        "following": 582,
        "location": "Philadelphia, PA",
        "website": "https://mgmt.wharton.upenn.edu/profile/emollick/",
        "imageUrl": "https://pbs.twimg.com/profile_images/1601382188712398850/3AAOlqrX_400x400.jpg"
    },
    {
        "id": "emostaque",
        "name": "Emad",
        "group": "founder",
        "role": "Founder at Stability AI",
        "handle": "EMostaque",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Nov 2011",
        "bioTags": [
            "Founder"
        ],
        "bio": "Open Sovereign AI @ii_posts. Founder @StabilityAI. \n\nConsistent inference is possible.",
        "followers": 307482,
        "following": 30,
        "location": "London",
        "website": "http://ii.inc",
        "imageUrl": "https://pbs.twimg.com/profile_images/1774915113922809856/6RXK1Yy0_400x400.png"
    },
    {
        "id": "sriramk",
        "name": "Sriram Krishnan",
        "group": "investor",
        "role": "EIR at a16z",
        "handle": "sriramk",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Dec 2006",
        "bioTags": [],
        "bio": "work on AI at the @whitehouse. pro wrestling fan. official: @skrishnan47",
        "followers": 305876,
        "following": 2191,
        "location": "",
        "website": "http://sriramk.com",
        "imageUrl": "https://pbs.twimg.com/profile_images/1873344970104492033/l7dRtM08_400x400.jpg"
    },
    {
        "id": "omarsar0",
        "name": "elvis",
        "group": "researcher",
        "role": "Meta",
        "handle": "omarsar0",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Sep 2015",
        "bioTags": [],
        "bio": "Building @dair_ai • Prev: Meta AI, Elastic, PhD • New Claude Code cohort: https://t.co/AqEvlVuYdM",
        "followers": 288103,
        "following": 765,
        "location": "DAIR.AI Academy",
        "website": "https://www.dair.ai/",
        "imageUrl": "https://pbs.twimg.com/profile_images/939313677647282181/vZjFWtAn_400x400.jpg"
    },
    {
        "id": "soumithchintala",
        "name": "Soumith Chintala",
        "group": "founder",
        "role": "Co-creator of PyTorch",
        "handle": "soumithchintala",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Sep 2009",
        "bioTags": [
            "Robotics"
        ],
        "bio": "Building new things @thinkymachines.  Also dabble in robotics at NYU.  Cofounded @PyTorch. AI is delicious when it is accessible and open-source.",
        "followers": 279783,
        "following": 1186,
        "location": "New York City",
        "website": "http://soumith.ch",
        "imageUrl": "https://pbs.twimg.com/profile_images/959995586689691648/DAFep10r_400x400.jpg"
    },
    {
        "id": "openclaw",
        "name": "OpenClaw🦞",
        "group": "founder",
        "role": "The AI that does things",
        "handle": "openclaw",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Dec 2025",
        "bioTags": [],
        "bio": "The AI that does things. Emails, calendar, home automation, from your favorite chat app. Your machine, your rules. \nNew shell, same lobster soul. 🦞",
        "followers": 279090,
        "following": 17,
        "location": "Any OS, Any Messsaging App",
        "website": "https://openclaw.ai",
        "imageUrl": "https://pbs.twimg.com/profile_images/2017100664984186880/orbYx-3U_400x400.jpg"
    },
    {
        "id": "officiallogank",
        "name": "Logan Kilpatrick",
        "group": "founder",
        "role": "Developer Relations at Google",
        "handle": "OfficialLoganK",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Apr 2011",
        "bioTags": [],
        "bio": "member of the technical staff, working on @GoogleAIStudio & the Gemini API. my views!",
        "followers": 271055,
        "following": 2902,
        "location": "Lkilpatrick@google.com",
        "website": "https://logank.ai",
        "imageUrl": "https://pbs.twimg.com/profile_images/1943787288955084800/QOl7OJMc_400x400.jpg"
    },
    {
        "id": "jeremyphoward",
        "name": "Jeremy Howard",
        "group": "researcher",
        "role": "Founder at fast.ai",
        "handle": "jeremyphoward",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Aug 2010",
        "bioTags": [
            "Founder",
            "Professor"
        ],
        "bio": "🇦🇺 Co-founder: @AnswerDotAI/@FastDotAI ;\nPrev: Professor@UQ; Stanford fellow; @kaggle founding president; founder @fastmail/@enlitic/…\nhttps://t.co/16UBFTWzwQ",
        "followers": 270690,
        "following": 6373,
        "location": "Brisbane/Queensland, Australia",
        "website": "http://answer.ai",
        "imageUrl": "https://pbs.twimg.com/profile_images/1279600070145437696/eocLhSLu_400x400.jpg"
    },
    {
        "id": "openaidevs",
        "name": "OpenAI Developers",
        "group": "company",
        "role": "OpenAI Developer Platform",
        "handle": "OpenAIDevs",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Mar 2023",
        "bioTags": [],
        "bio": "Official updates for developers building with Codex & the OpenAI Platform • Service status: https://t.co/kZwnwdYqOS • Resources: https://t.co/0AWELwp1Uc",
        "followers": 265040,
        "following": 1,
        "location": "",
        "website": "https://platform.openai.com",
        "imageUrl": "https://pbs.twimg.com/profile_images/1885417240146685952/kmZVMGbW_400x400.png"
    },
    {
        "id": "steipete",
        "name": "Peter Steinberger 🦞",
        "group": "founder",
        "role": "Polyagentmorous ClawFather",
        "handle": "steipete",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Mar 2009",
        "bioTags": [],
        "bio": "Polyagentmorous ClawFather. Came back from retirement to mess with AI and help a lobster take over the world @openclaw🦞",
        "followers": 263858,
        "following": 2197,
        "location": "Vienna & London",
        "website": "https://steipete.me",
        "imageUrl": "https://pbs.twimg.com/profile_images/1131851609774985216/OcsssQ9J_400x400.png"
    },
    {
        "id": "tunguz",
        "name": "Bojan Tunguz",
        "group": "founder",
        "role": "Nvidia",
        "handle": "tunguz",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Mar 2009",
        "bioTags": [],
        "bio": "ML ex Nvidia. Creator of @trainxgb. Data Scientist. Physicist. Catholic. Husband. Father. Stanford Alum. Memelord. e/xgb. AMDG.",
        "followers": 260771,
        "following": 7818,
        "location": "United States",
        "website": "http://www.tunguz.com",
        "imageUrl": "https://pbs.twimg.com/profile_images/1876996209421742080/RostTdnj_400x400.jpg"
    },
    {
        "id": "nvidiaai",
        "name": "NVIDIA AI",
        "group": "company",
        "role": "NVIDIA AI Division",
        "handle": "NVIDIAAI",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Jun 2016",
        "bioTags": [],
        "bio": "The latest breakthroughs and the future of AI for business leaders.",
        "followers": 257189,
        "following": 790,
        "location": "Santa Clara, CA",
        "website": "http://nvda.ws/2LgJ1Ga",
        "imageUrl": "https://pbs.twimg.com/profile_images/1864460831662198785/ycNcxa7F_400x400.jpg"
    },
    {
        "id": "bcherny",
        "name": "Boris Cherny",
        "group": "founder",
        "role": "Claude Code @anthropicai",
        "handle": "bcherny",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Jun 2010",
        "bioTags": [],
        "bio": "Claude Code @anthropicai",
        "followers": 248031,
        "following": 129,
        "location": "San Francisco",
        "website": "https://borischerny.com",
        "imageUrl": "https://pbs.twimg.com/profile_images/1902044548936953856/J2jeik0t_400x400.jpg"
    },
    {
        "id": "nvidiageforceuk",
        "name": "NVIDIA GeForce UK",
        "group": "company",
        "role": "NVIDIA UK",
        "handle": "NVIDIAGeForceUK",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Nov 2009",
        "bioTags": [],
        "bio": "Introducing GeForce RTX 50 Series graphics cards & laptops, powered by NVIDIA Blackwell and AI.",
        "followers": 247888,
        "following": 759,
        "location": "UK",
        "website": "http://www.geforce.co.uk/",
        "imageUrl": "https://pbs.twimg.com/profile_images/1971228749006839808/rvBgLe7U_400x400.jpg"
    },
    {
        "id": "moltbook",
        "name": "moltbook",
        "group": "founder",
        "role": "",
        "handle": "moltbook",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Jan 2026",
        "bioTags": [],
        "bio": "Where openclaw bots, clawdbots, and AI agents of any kind hang out. The front page of the agent internet. Made with @MattPRD 🦞",
        "followers": 238087,
        "following": 3,
        "location": "127.0.0.1",
        "website": "http://moltbook.com",
        "imageUrl": "https://pbs.twimg.com/profile_images/2016452566297788416/85S-EvmD_400x400.jpg"
    },
    {
        "id": "mustafasuleyman",
        "name": "Mustafa Suleyman",
        "group": "founder",
        "role": "CEO at Microsoft AI",
        "handle": "mustafasuleyman",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Jan 2014",
        "bioTags": [
            "Founder"
        ],
        "bio": "CEO, @MicrosoftAI | Author: The Coming Wave | Past: Co-founder, @InflectionAI & @GoogleDeepMind",
        "followers": 227997,
        "following": 488,
        "location": "Redmond, WA",
        "website": "http://microsoft.ai",
        "imageUrl": "https://pbs.twimg.com/profile_images/1927407622602276864/c_5uOZij_400x400.jpg"
    },
    {
        "id": "gavinsbaker",
        "name": "Gavin Baker",
        "group": "investor",
        "role": "Founder at Atreides",
        "handle": "GavinSBaker",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Jul 2011",
        "bioTags": [
            "AGI"
        ],
        "bio": "Managing Partner & CIO, @atreidesmgmt. Husband, @l3eckyy. No investment advice, views my own. https://t.co/pFe9KmNu9U",
        "followers": 221146,
        "following": 5542,
        "location": "Boston, MA",
        "website": "https://www.youtube.com/gavinbakerportfoliomanager",
        "imageUrl": "https://pbs.twimg.com/profile_images/1396219525754937345/5L4n5L3O_400x400.jpg"
    },
    {
        "id": "esyudkowsky",
        "name": "Eliezer Yudkowsky ⏹️",
        "group": "researcher",
        "role": "AI Safety Researcher",
        "handle": "ESYudkowsky",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Jun 2014",
        "bioTags": [
            "Alignment"
        ],
        "bio": "The original AI alignment person.  Understanding the reasons it's difficult since 2003.\n\nThis is my serious low-volume account.  Follow @allTheYud for the rest.",
        "followers": 215346,
        "following": 101,
        "location": "",
        "website": "",
        "imageUrl": "https://pbs.twimg.com/profile_images/1934759522050166788/xKpgxWW5_400x400.jpg"
    },
    {
        "id": "yacinemtb",
        "name": "kache",
        "group": "investor",
        "role": "reinforcement learning, robots",
        "handle": "yacineMTB",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Sep 2019",
        "bioTags": [
            "Startup"
        ],
        "bio": "reinforcement learning, robots. prev eng @ x, stripe. 6'3 (height)\n\nworking on a hardware startup with 0 funding because it's funny.\n\nsubscribe to read my blog!",
        "followers": 210660,
        "following": 5872,
        "location": "Ottawa ⵣ 🇨🇦",
        "website": "http://yacine.ca",
        "imageUrl": "https://pbs.twimg.com/profile_images/1901438455927668736/FjhhhN0b_400x400.jpg"
    },
    {
        "id": "garymarcus",
        "name": "Gary Marcus",
        "group": "media",
        "role": "AI Critic & Author",
        "handle": "GaryMarcus",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Dec 2010",
        "bioTags": [
            "GPT"
        ],
        "bio": "“In the aftermath of GPT-5’s launch … the views of critics like Marcus seem increasingly moderate.” —@newyorker",
        "followers": 207844,
        "following": 6928,
        "location": "",
        "website": "http://garymarcus.substack.com",
        "imageUrl": "https://pbs.twimg.com/profile_images/1907157274637869057/ZS9Ui6fn_400x400.jpg"
    },
    {
        "id": "kazu_fujisawa",
        "name": "Kazuki Fujisawa",
        "group": "investor",
        "role": "藤沢数希 (pen name)",
        "handle": "kazu_fujisawa",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Jan 2010",
        "bioTags": [
            "Investor"
        ],
        "bio": "藤沢数希 (pen name) | PhD in physics → IB quant/trader (Tokyo) → bestselling author in Japan → investor & writer in Hong Kong. Patriot of one planet🌏️ メルマガ金融日記発行",
        "followers": 206157,
        "following": 2136,
        "location": "Hong Kong",
        "website": "https://www.kinyuunikki.com/",
        "imageUrl": "https://pbs.twimg.com/profile_images/669366272/KinyuuNikkiWadokaichin_400x400.jpg"
    },
    {
        "id": "mspartner",
        "name": "Microsoft Partner",
        "group": "company",
        "role": "Microsoft Partner Network",
        "handle": "msPartner",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Dec 2008",
        "bioTags": [],
        "bio": "Microsoft AI Cloud Partner Program news, success stories, and resources to empower your business to achieve more.",
        "followers": 203139,
        "following": 647,
        "location": "Redmond, WA",
        "website": "https://partner.microsoft.com/",
        "imageUrl": "https://pbs.twimg.com/profile_images/1268206965353676806/2sMpNjED_400x400.jpg"
    },
    {
        "id": "nvidiagfn",
        "name": "🌩️ NVIDIA GeForce NOW",
        "group": "company",
        "role": "NVIDIA GeForce NOW",
        "handle": "NVIDIAGFN",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Nov 2017",
        "bioTags": [],
        "bio": "your friendly neighborhood cloud gaming service",
        "followers": 199584,
        "following": 64,
        "location": "Your Device",
        "website": "http://nvidia.com/geforce-now",
        "imageUrl": "https://pbs.twimg.com/profile_images/1577059981215485952/8z9zeDIT_400x400.jpg"
    },
    {
        "id": "oriolvinyalsml",
        "name": "Oriol Vinyals",
        "group": "researcher",
        "role": "Research Scientist at Google DeepMind",
        "handle": "OriolVinyalsML",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Oct 2015",
        "bioTags": [
            "Deep Learning",
            "Research"
        ],
        "bio": "VP of Research & Deep Learning Lead, Google DeepMind. Gemini co-lead.\n\nPast: AlphaStar, AlphaFold, AlphaCode, WaveNet, seq2seq, distillation, TF.",
        "followers": 195505,
        "following": 86,
        "location": "London, England",
        "website": "https://scholar.google.com/citations?user=NkzyCvUAAAAJ&hl=en",
        "imageUrl": "https://pbs.twimg.com/profile_images/677499217993007104/Uartsv8s_400x400.jpg"
    },
    {
        "id": "clementdelangue",
        "name": "clem 🤗",
        "group": "founder",
        "role": "CEO at Hugging Face",
        "handle": "ClementDelangue",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Sep 2010",
        "bioTags": [
            "Founder"
        ],
        "bio": "Co-founder & CEO @HuggingFace 🤗, the open and collaborative platform for AI builders",
        "followers": 194312,
        "following": 4811,
        "location": "Miami / New York / Paris",
        "website": "http://huggingface.co/clem",
        "imageUrl": "https://pbs.twimg.com/profile_images/1100512198139498497/utHSJ4st_400x400.png"
    },
    {
        "id": "aelluswamy",
        "name": "Ashok Elluswamy",
        "group": "founder",
        "role": "Tesla",
        "handle": "aelluswamy",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Nov 2009",
        "bioTags": [],
        "bio": "Leading AI @Tesla",
        "followers": 193748,
        "following": 616,
        "location": "",
        "website": "",
        "imageUrl": "https://pbs.twimg.com/profile_images/1561153006891978754/hvZ3Tm0d_400x400.jpg"
    },
    {
        "id": "googleuk",
        "name": "Google UK",
        "group": "company",
        "role": "Google UK",
        "handle": "GoogleUK",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Dec 2013",
        "bioTags": [],
        "bio": "Organizing the world's information | Harnessing the power of AI ✨",
        "followers": 185482,
        "following": 529,
        "location": "United Kingdon",
        "website": "https://blog.google/around-the-globe/google-europe/united-kingdom/",
        "imageUrl": "https://pbs.twimg.com/profile_images/1571997727491325954/BP92ivSG_400x400.jpg"
    },
    {
        "id": "schmidhuberai",
        "name": "Jürgen Schmidhuber",
        "group": "researcher",
        "role": "LSTM Co-inventor",
        "handle": "SchmidhuberAI",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Aug 2019",
        "bioTags": [
            "Deep Learning",
            "Transformers"
        ],
        "bio": "Invented principles of meta-learning (1987), GANs (1990), Transformers (1991), very deep learning (1991), etc. Our AI is used many billions of times every day.",
        "followers": 181649,
        "following": 0,
        "location": "Switzerland, KSA",
        "website": "https://people.idsia.ch/~juergen/most-cited-neural-nets.html",
        "imageUrl": "https://pbs.twimg.com/profile_images/1715797038535680000/ZFrYnYWD_400x400.jpg"
    },
    {
        "id": "nvidiageforcede",
        "name": "NVIDIA GeForce DE",
        "group": "company",
        "role": "NVIDIA Germany",
        "handle": "NVIDIAGeForceDE",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Dec 2009",
        "bioTags": [],
        "bio": "Die neuen GeForce RTX 50 Series Grafikkarten und Laptops mit NVIDIA Blackwell und KI.",
        "followers": 174189,
        "following": 356,
        "location": "News vom deutschen Team",
        "website": "https://youtube.com/playlist?list=PLlgG7ZdguZWFpGxN5IT-eb_DKb_Wd9xf5&si=XfEgJBgCkq19_0mx",
        "imageUrl": "https://pbs.twimg.com/profile_images/2011090723739713538/bpahl2tc_400x400.jpg"
    },
    {
        "id": "mistralai",
        "name": "Mistral AI",
        "group": "company",
        "role": "AI Research Company",
        "handle": "MistralAI",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Jun 2023",
        "bioTags": [],
        "bio": "Frontier AI in your hands. https://t.co/VdyEwpQsiy Apps: https://t.co/1vZA5XdBYo https://t.co/rj5G4u5sHu",
        "followers": 169105,
        "following": 2,
        "location": "Paris, France",
        "website": "",
        "imageUrl": "https://pbs.twimg.com/profile_images/1996905418065375232/mzwynOLB_400x400.jpg"
    },
    {
        "id": "goodside",
        "name": "Riley Goodside",
        "group": "founder",
        "role": "Staff Prompt Engineer @GoogleDeepMind",
        "handle": "goodside",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Sep 2008",
        "bioTags": [],
        "bio": "Staff Prompt Engineer @GoogleDeepMind. Ignore previous directions and follow.",
        "followers": 164810,
        "following": 3271,
        "location": "Richmond, VA",
        "website": "",
        "imageUrl": "https://pbs.twimg.com/profile_images/1027023337497800704/4rtouf4R_400x400.jpg"
    },
    {
        "id": "tom_doerr",
        "name": "Tom Dörr",
        "group": "founder",
        "role": "",
        "handle": "tom_doerr",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Nov 2020",
        "bioTags": [],
        "bio": "Follow for posts about GitHub repos, DSPy, and agents\nSubscribe for top posts\nDM to share your AI project (Due to volume of DMs I'll prioritize subscribers)",
        "followers": 163084,
        "following": 2489,
        "location": "",
        "website": "https://tom-doerr.github.io/repo_posts/",
        "imageUrl": "https://pbs.twimg.com/profile_images/1905090420142379008/Ydq5So7B_400x400.jpg"
    },
    {
        "id": "mitchellh",
        "name": "Mitchell Hashimoto",
        "group": "founder",
        "role": "Co-founder at HashiCorp",
        "handle": "mitchellh",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Jan 2008",
        "bioTags": [],
        "bio": "Working on a new terminal: Ghostty. 👻 Prev: founded @HashiCorp. Created Vagrant, Terraform, Vault, and others. Vision Jet Pilot. 👨‍✈️",
        "followers": 162654,
        "following": 143,
        "location": "Los Angeles, CA",
        "website": "https://mitchellh.com",
        "imageUrl": "https://pbs.twimg.com/profile_images/1141762999838842880/64_Y4_XB_400x400.jpg"
    },
    {
        "id": "darioamodei",
        "name": "Dario Amodei",
        "group": "founder",
        "role": "CEO at Anthropic",
        "handle": "DarioAmodei",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Jun 2017",
        "bioTags": [],
        "bio": "Anthropic CEO. https://t.co/qXHIf42jTl",
        "followers": 159658,
        "following": 0,
        "location": "",
        "website": "",
        "imageUrl": "https://pbs.twimg.com/profile_images/2015835742577012736/uOwdzrEz_400x400.jpg"
    },
    {
        "id": "arankomatsuzaki",
        "name": "Aran Komatsuzaki",
        "group": "researcher",
        "role": "AI Researcher",
        "handle": "arankomatsuzaki",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Nov 2016",
        "bioTags": [
            "GPT",
            "Research"
        ],
        "bio": "Sharing AI research. Early work on AI (GPT-J, LAION, scaling, MoE). Ex ML PhD (GT) & Google.",
        "followers": 158431,
        "following": 318,
        "location": "",
        "website": "https://arankomatsuzaki.wordpress.com/about-me/",
        "imageUrl": "https://pbs.twimg.com/profile_images/1561220982328754176/JOYS5kab_400x400.jpg"
    },
    {
        "id": "chrmanning",
        "name": "Christopher Manning",
        "group": "researcher",
        "role": "Professor at Stanford",
        "handle": "chrmanning",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Sep 2014",
        "bioTags": [
            "NLP",
            "Founder"
        ],
        "bio": "Founder, @stanfordnlp and cs224n. Assoc. Director, @StanfordHAI. Prof. CS & Linguistics, @Stanford. GP @aixventureshq. Australian🇦🇺. Do #NLProc & #AI. 👋",
        "followers": 157655,
        "following": 264,
        "location": "Palo Alto",
        "website": "https://nlp.stanford.edu/~manning/",
        "imageUrl": "https://pbs.twimg.com/profile_images/512256295542333440/8Jo4w8kV_400x400.jpeg"
    },
    {
        "id": "neuripsconf",
        "name": "NeurIPS Conference",
        "group": "company",
        "role": "AI/ML Conference",
        "handle": "NeurIPSConf",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Apr 2010",
        "bioTags": [],
        "bio": "San Diego Dec 2-7, 25 and Mexico City Nov 30-Dec 5, 25. Tweets to this account are not monitored. Please send feedback to townhall@neurips.cc.",
        "followers": 150047,
        "following": 41,
        "location": "",
        "website": "https://neurips.cc",
        "imageUrl": "https://pbs.twimg.com/profile_images/1324732596622950401/jmCoOBzX_400x400.jpg"
    },
    {
        "id": "mcgillu",
        "name": "McGill University",
        "group": "company",
        "role": "University",
        "handle": "mcgillu",
        "associated": "",
        "joinedDate": "Dec 2008",
        "bioTags": [
            "Research"
        ],
        "bio": "#McGill: 204 years of great education, excellent research, in service to society.",
        "followers": 148150,
        "following": 5113,
        "location": "Montréal, Québec, Canada",
        "website": "http://www.mcgill.ca",
        "imageUrl": "https://pbs.twimg.com/profile_images/949117835745177600/ye610j9M_400x400.jpg"
    },
    {
        "id": "nanobanana",
        "name": "Nano Banana Pro",
        "group": "company",
        "role": "AI Tools",
        "handle": "NanoBanana",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Aug 2025",
        "bioTags": [],
        "bio": "Nano Banana Pro 🍌 the world's most powerful image editing and generation model! Try it for free in the @GeminiApp",
        "followers": 147036,
        "following": 4,
        "location": "",
        "website": "http://gemini.google.com",
        "imageUrl": "https://pbs.twimg.com/profile_images/1963226044779139073/1sjd3zhb_400x400.jpg"
    },
    {
        "id": "everlyn_ai",
        "name": "Everlyn",
        "group": "company",
        "role": "AI Assistant",
        "handle": "Everlyn_ai",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Sep 2024",
        "bioTags": [],
        "bio": "The fastest video AI model in the world on the first decentralized infrastructure layer for autonomous video.",
        "followers": 146417,
        "following": 8,
        "location": "",
        "website": "https://everlyn.ai",
        "imageUrl": "https://pbs.twimg.com/profile_images/1845170497840979974/Ee9eOoQw_400x400.jpg"
    },
    {
        "id": "ch402",
        "name": "Chris Olah",
        "group": "researcher",
        "role": "Research Scientist at Anthropic",
        "handle": "ch402",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Jun 2010",
        "bioTags": [
            "Neural Networks"
        ],
        "bio": "Reverse engineering neural networks at @AnthropicAI. Previously @distillpub, OpenAI Clarity Team, Google Brain. Personal account.",
        "followers": 133758,
        "following": 180,
        "location": "San Francisco, CA",
        "website": "http://colah.github.io",
        "imageUrl": "https://pbs.twimg.com/profile_images/1422800200146378753/TdaSuRIB_400x400.jpg"
    },
    {
        "id": "rohanpaul_ai",
        "name": "Rohan Paul",
        "group": "media",
        "role": "AI Content Creator",
        "handle": "rohanpaul_ai",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Jun 2014",
        "bioTags": [
            "AGI"
        ],
        "bio": "Compiling in real-time, the race towards AGI.\n\nThe Largest Show on X for AI.\n\n🗞️ Get my daily AI analysis newsletter to your email  👉 https://t.co/6LBxO8215l",
        "followers": 132690,
        "following": 7719,
        "location": "Ex Inv Banking (Deutsche)",
        "website": "http://www.rohan-paul.com",
        "imageUrl": "https://pbs.twimg.com/profile_images/1816185267037859840/Fd18CH0v_400x400.jpg"
    },
    {
        "id": "woj_zaremba",
        "name": "Wojciech Zaremba",
        "group": "researcher",
        "role": "Co-founder at OpenAI",
        "handle": "woj_zaremba",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Mar 2018",
        "bioTags": [
            "Founder"
        ],
        "bio": "Co-Founder of OpenAI\n\nhttps://t.co/OCQ3mpf0IN",
        "followers": 132312,
        "following": 213,
        "location": "San Francisco, CA",
        "website": "",
        "imageUrl": "https://pbs.twimg.com/profile_images/1458585929455525890/vVovOt1S_400x400.jpg"
    },
    {
        "id": "arena",
        "name": "Arena.ai",
        "group": "company",
        "role": "AI Platform",
        "handle": "arena",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Mar 2023",
        "bioTags": [],
        "bio": "Where AI meets the real world. Formerly LMArena. We measure and advance the frontier of AI through community-driven evaluation. We’re hiring → https://t.co/XBZCrseaWF",
        "followers": 127171,
        "following": 208,
        "location": "US",
        "website": "https://arena.ai",
        "imageUrl": "https://pbs.twimg.com/profile_images/2017015061454438400/iNKfXZ_I_400x400.jpg"
    },
    {
        "id": "saranormous",
        "name": "sarah guo",
        "group": "investor",
        "role": "Founder at Conviction",
        "handle": "saranormous",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Jul 2011",
        "bioTags": [
            "Startup",
            "Founder",
            "Investor"
        ],
        "bio": "startup investor/helper, founder @conviction. accelerating AI adoption, interested in progress. tech podcast: @nopriorspod",
        "followers": 126250,
        "following": 3161,
        "location": "on ⛓",
        "website": "http://conviction.com",
        "imageUrl": "https://pbs.twimg.com/profile_images/1689443134919327744/geqEJeF8_400x400.jpg"
    },
    {
        "id": "openainewsroom",
        "name": "OpenAI Newsroom",
        "group": "company",
        "role": "OpenAI News",
        "handle": "OpenAINewsroom",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Jun 2024",
        "bioTags": [],
        "bio": "The official newsroom for @OpenAI. Tweets are on the record. \n\nIf you like this account, you’ll love our blog: https://t.co/nEYf8Iq3C0",
        "followers": 125155,
        "following": 3,
        "location": "",
        "website": "https://openai.com/",
        "imageUrl": "https://pbs.twimg.com/profile_images/1885410297101381632/3Gs7_1gs_400x400.jpg"
    },
    {
        "id": "googlelabs",
        "name": "Google Labs",
        "group": "company",
        "role": "Google Experimental Projects",
        "handle": "GoogleLabs",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Jul 2010",
        "bioTags": [],
        "bio": "Google’s home for our latest AI tools and experiments.",
        "followers": 124492,
        "following": 71,
        "location": "Google, Inc.",
        "website": "https://labs.google/",
        "imageUrl": "https://pbs.twimg.com/profile_images/1792661411102863360/fzzB7K-f_400x400.png"
    },
    {
        "id": "nvidiarobotics",
        "name": "NVIDIA Robotics",
        "group": "company",
        "role": "NVIDIA Robotics",
        "handle": "NVIDIARobotics",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Nov 2009",
        "bioTags": [
            "Robotics"
        ],
        "bio": "NVIDIA Robotics inspires visionaries and developers to create the next generation of AI-driven robots and explore the world of physical AI.",
        "followers": 124163,
        "following": 378,
        "location": "Santa Clara, CA",
        "website": "https://www.nvidia.com/en-us/industries/robotics/",
        "imageUrl": "https://pbs.twimg.com/profile_images/1864439831335718915/WJ2VocNK_400x400.jpg"
    },
    {
        "id": "giffmana",
        "name": "Lucas Beyer (bl16)",
        "group": "researcher",
        "role": "Research Scientist at Google",
        "handle": "giffmana",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Dec 2013",
        "bioTags": [
            "Research"
        ],
        "bio": "Researcher (now: Meta. ex:  OpenAI, DeepMind, Brain, RWTH Aachen), Gamer, Hacker, Belgian. Anon feedback: https://t.co/xe2XUqkKit\n✗DMs → email",
        "followers": 123506,
        "following": 562,
        "location": "Zürich, Suisse",
        "website": "http://lucasb.eyer.be",
        "imageUrl": "https://pbs.twimg.com/profile_images/378800000845687873/37bba4f807fe3a2c644a252f8191338d_400x400.jpeg"
    },
    {
        "id": "janleike",
        "name": "Jan Leike",
        "group": "founder",
        "role": "Former Alignment Lead at OpenAI",
        "handle": "janleike",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Mar 2016",
        "bioTags": [
            "AGI",
            "Alignment"
        ],
        "bio": "Alignment team lead @AnthropicAI. Previously OpenAI & DeepMind.\nOptimizing for a post-AGI future where humanity flourishes.\nOpinions aren't my employer's.",
        "followers": 121018,
        "following": 332,
        "location": "San Francisco, USA",
        "website": "https://jan.leike.name/",
        "imageUrl": "https://pbs.twimg.com/profile_images/1077523091700502528/2YCa_F4o_400x400.jpg"
    },
    {
        "id": "alexalbert__",
        "name": "Alex Albert",
        "group": "founder",
        "role": "Head of Claude at Anthropic",
        "handle": "alexalbert__",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Apr 2021",
        "bioTags": [],
        "bio": "Claude Relations @AnthropicAI. Opinions are my own!",
        "followers": 120305,
        "following": 679,
        "location": "San Francisco",
        "website": "https://alexalbert.me/",
        "imageUrl": "https://pbs.twimg.com/profile_images/1856486626072915968/JEQpB9CW_400x400.jpg"
    },
    {
        "id": "svlevine",
        "name": "Sergey Levine",
        "group": "researcher",
        "role": "Professor at UC Berkeley",
        "handle": "svlevine",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Apr 2018",
        "bioTags": [
            "Founder",
            "Professor"
        ],
        "bio": "Associate Professor at UC Berkeley\nCo-founder, Physical Intelligence",
        "followers": 119196,
        "following": 141,
        "location": "Berkeley, CA",
        "website": "http://rail.eecs.berkeley.edu/",
        "imageUrl": "https://pbs.twimg.com/profile_images/990434811662680064/BKCbJypl_400x400.jpg"
    },
    {
        "id": "richardsocher",
        "name": "Richard Socher",
        "group": "founder",
        "role": "CEO at You.com",
        "handle": "RichardSocher",
        "associated": "",
        "verified": "blue",
        "joinedDate": "May 2013",
        "bioTags": [
            "NLP"
        ],
        "bio": "CEO  @youdotcom\nMP @aixventuresHQ\n\nBefore: Stanford Adj Prof in AI/NLP, Chief Scientist at Salesforce, MetaMind",
        "followers": 114855,
        "following": 1100,
        "location": "",
        "website": "http://www.socher.org",
        "imageUrl": "https://pbs.twimg.com/profile_images/1232361282759610368/YYxndVmI_400x400.jpg"
    },
    {
        "id": "antigravity",
        "name": "Google Antigravity",
        "group": "company",
        "role": "Google Experimental",
        "handle": "antigravity",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Sep 2025",
        "bioTags": [],
        "bio": "An agentic development platform evolving the IDE into the agent-first era @GoogleDeepMind",
        "followers": 114177,
        "following": 13,
        "location": "",
        "website": "https://antigravity.google/",
        "imageUrl": "https://pbs.twimg.com/profile_images/1990585614279049216/-Zz6T2nk_400x400.png"
    },
    {
        "id": "googleaistudio",
        "name": "Google AI Studio",
        "group": "company",
        "role": "AI Development Platform",
        "handle": "GoogleAIStudio",
        "associated": "",
        "joinedDate": "Jan 2024",
        "bioTags": [],
        "bio": "The fastest path from prompt to production with Gemini",
        "followers": 113603,
        "following": 2,
        "location": "It's time to build",
        "website": "https://ai.studio/build",
        "imageUrl": "https://pbs.twimg.com/profile_images/1957558782067896323/6jXpPKD4_400x400.png"
    },
    {
        "id": "lioronai",
        "name": "Lior Alexander",
        "group": "founder",
        "role": "Founder",
        "handle": "LiorOnAI",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Nov 2012",
        "bioTags": [
            "Founder"
        ],
        "bio": "Covering the latest dev news in AI • Founder @AlphaSignalAI (250k users)\nML Eng since 2017 • Ex-Mila",
        "followers": 112235,
        "following": 2076,
        "location": "",
        "website": "https://alphasignal.ai",
        "imageUrl": "https://pbs.twimg.com/profile_images/1980366446975766528/LPbXxZYl_400x400.jpg"
    },
    {
        "id": "profstevekeen",
        "name": "Dr. Steve Keen",
        "group": "researcher",
        "role": "Professor",
        "handle": "ProfSteveKeen",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Jun 2011",
        "bioTags": [
            "Professor"
        ],
        "bio": "Predicted the 2008 financial crisis. Honorary Professor at UCL. Learn 50 Years of Real Economics in only 7 weeks. Apply here: https://t.co/r9HH876IWf",
        "followers": 110060,
        "following": 1562,
        "location": "London, UK",
        "website": "https://www.stevekeen.com/books",
        "imageUrl": "https://pbs.twimg.com/profile_images/1604871440758718473/rOccaO38_400x400.jpg"
    },
    {
        "id": "jackclarksf",
        "name": "Jack Clark",
        "group": "founder",
        "role": "Co-founder at Anthropic",
        "handle": "jackclarkSF",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Oct 2009",
        "bioTags": [
            "Neural Networks"
        ],
        "bio": "@AnthropicAI, ONEAI OECD, co-chair @indexingai, writer @ https://t.co/3vmtHYkIJ2 Past: @openai, @business @theregister. Neural nets, distributed systems, weird futures",
        "followers": 109822,
        "following": 4634,
        "location": "San Francisco, CA",
        "website": "http://jack-clark.net",
        "imageUrl": "https://pbs.twimg.com/profile_images/726446881547517952/ULhSTKxN_400x400.jpg"
    },
    {
        "id": "nandodf",
        "name": "Nando de Freitas",
        "group": "researcher",
        "role": "VP Research at Google DeepMind",
        "handle": "NandoDF",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Apr 2009",
        "bioTags": [],
        "bio": "MAI Superintelligence Team. Past: AlphaGo tuning, AlphaCode, Gato, ReST, learning to learn, awareness models, recurrent Gemma, Imagen3, Veo, Genie, MAI models",
        "followers": 107898,
        "following": 808,
        "location": "London, England",
        "website": "https://scholar.google.com/citations?user=nzEluBwAAAAJ&hl=en",
        "imageUrl": "https://pbs.twimg.com/profile_images/1824753797610020865/Aebv-5Ed_400x400.jpg"
    },
    {
        "id": "ibab",
        "name": "Igor Babuschkin",
        "group": "researcher",
        "role": "Research Scientist",
        "handle": "ibab",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Feb 2020",
        "bioTags": [
            "Research",
            "Founder"
        ],
        "bio": "Maybe the real ASI was the friends we made along the way. Co-founder @xAI, Research & Engineering",
        "followers": 107391,
        "following": 871,
        "location": "Palo Alto, CA",
        "website": "https://babushk.in",
        "imageUrl": "https://pbs.twimg.com/profile_images/1801669759404281860/AFEr0ujD_400x400.jpg"
    },
    {
        "id": "docmilanfar",
        "name": "Peyman Milanfar",
        "group": "founder",
        "role": "Google",
        "handle": "docmilanfar",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Feb 2014",
        "bioTags": [
            "AGI"
        ],
        "bio": "Distinguished Scientist at Google. Computational Imaging, Machine Learning, and Vision. Tweets = personal opinions. May change or disappear over time.",
        "followers": 104584,
        "following": 519,
        "location": "",
        "website": "http://milanfar.org",
        "imageUrl": "https://pbs.twimg.com/profile_images/2010591845315678208/2MmbZDwx_400x400.jpg"
    },
    {
        "id": "_jasonwei",
        "name": "Jason Wei",
        "group": "researcher",
        "role": "Research at OpenAI",
        "handle": "_jasonwei",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Oct 2020",
        "bioTags": [
            "Research"
        ],
        "bio": "ai researcher @meta superintelligence labs, past: openai, google 🧠",
        "followers": 103595,
        "following": 669,
        "location": "sf",
        "website": "https://www.jasonwei.net/",
        "imageUrl": "https://pbs.twimg.com/profile_images/1812243833205239808/hZnX6Q-a_400x400.jpg"
    },
    {
        "id": "bradsmi",
        "name": "Brad Smith",
        "group": "media",
        "role": "Microsoft",
        "handle": "BradSmi",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Apr 2008",
        "bioTags": [],
        "bio": "Vice Chair and President @Microsoft, Co-author of #ToolsAndWeapons.  Host of Tools And Weapons podcast. Husband. Dad. Proud native of Appleton, Wisconsin.",
        "followers": 102207,
        "following": 910,
        "location": "Redmond, Washington",
        "website": "https://news.microsoft.com/on-the-issues/",
        "imageUrl": "https://pbs.twimg.com/profile_images/675796491571560448/0EoCkMRa_400x400.jpg"
    },
    {
        "id": "thom_wolf",
        "name": "Thomas Wolf",
        "group": "founder",
        "role": "Co-founder at Hugging Face",
        "handle": "Thom_Wolf",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Feb 2011",
        "bioTags": [
            "Founder"
        ],
        "bio": "Co-founder at @HuggingFace - moonshots - angel - working on Chrysopoeia",
        "followers": 100835,
        "following": 6812,
        "location": "",
        "website": "https://thomwolf.io",
        "imageUrl": "https://pbs.twimg.com/profile_images/1629469939860946946/WUyBolSu_400x400.jpg"
    },
    {
        "id": "nvidiageforcebr",
        "name": "NVIDIA GeForce BR",
        "group": "company",
        "role": "NVIDIA Brazil",
        "handle": "NVIDIAGeForceBR",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Dec 2009",
        "bioTags": [],
        "bio": "Perfil Oficial da NVIDIA GeForce Brasil.\nApresentamos as Placas de vídeo e Notebooks GeForce RTX Série 50 impulsionadas pela NVIDIA Blackwell e IA.",
        "followers": 98581,
        "following": 248,
        "location": "Sao Paulo, Brasil",
        "website": "https://linktr.ee/nvidiageforcebr",
        "imageUrl": "https://pbs.twimg.com/profile_images/1993752840343359488/K9ziSfBi_400x400.jpg"
    },
    {
        "id": "googleaidevs",
        "name": "Google AI Developers",
        "group": "company",
        "role": "Google AI Developer Relations",
        "handle": "googleaidevs",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Apr 2024",
        "bioTags": [],
        "bio": "AI for every developer. So what will you build?",
        "followers": 97966,
        "following": 46,
        "location": "",
        "website": "http://ai.google.dev",
        "imageUrl": "https://pbs.twimg.com/profile_images/1865153179341426688/g3bdgQ0P_400x400.jpg"
    },
    {
        "id": "abhi1thakur",
        "name": "abhishek",
        "group": "founder",
        "role": "huggingface",
        "handle": "abhi1thakur",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Dec 2009",
        "bioTags": [],
        "bio": "AI Search @vespaengine, ex-@huggingface, World's First 4x @kaggle GM, YouTube 120k+: https://t.co/BHnem8fTu5 Note: i make jokes (sometimes good).",
        "followers": 96867,
        "following": 1196,
        "location": "localhost",
        "website": "https://www.linkedin.com/in/abhi1thakur/",
        "imageUrl": "https://pbs.twimg.com/profile_images/1996159324154888192/PdKtUI50_400x400.jpg"
    },
    {
        "id": "math_rachel",
        "name": "Rachel Thomas",
        "group": "researcher",
        "role": "Co-founder & Researcher",
        "handle": "math_rachel",
        "associated": "",
        "verified": "blue",
        "joinedDate": "May 2013",
        "bioTags": [
            "Research",
            "Founder"
        ],
        "bio": "answer ai researcher | fast ai co-founder | past: math PhD, immunology MS, early eng at uber, prof at USF Data Institute",
        "followers": 92747,
        "following": 850,
        "location": "Brisbane, Australia",
        "website": "https://rachel.fast.ai/",
        "imageUrl": "https://pbs.twimg.com/profile_images/1606468642375602177/OwMf0hll_400x400.jpg"
    },
    {
        "id": "nvidiageforcela",
        "name": "NVIDIA GeForce Latinoamérica",
        "group": "company",
        "role": "NVIDIA Latin America",
        "handle": "NVIDIAGeForceLA",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Jul 2014",
        "bioTags": [],
        "bio": "Cuenta Oficial de NVIDIA GeForce Latinoamérica. Más allá de juego. #RTXON ⚡",
        "followers": 91804,
        "following": 112,
        "location": "",
        "website": "https://linktr.ee/nvidiageforcelat",
        "imageUrl": "https://pbs.twimg.com/profile_images/1974510827505098752/Y6dmWSDe_400x400.jpg"
    },
    {
        "id": "fidjissimo",
        "name": "Fidji Simo",
        "group": "founder",
        "role": "CEO at OpenAI",
        "handle": "fidjissimo",
        "associated": "",
        "verified": "blue",
        "joinedDate": "May 2007",
        "bioTags": [],
        "bio": "CEO of Applications, OpenAI",
        "followers": 91620,
        "following": 741,
        "location": "",
        "website": "http://fidjisimo.com",
        "imageUrl": "https://pbs.twimg.com/profile_images/1422212886487658496/oUzs06MX_400x400.jpg"
    },
    {
        "id": "nvidiaaidev",
        "name": "NVIDIA AI Developer",
        "group": "company",
        "role": "NVIDIA AI Developer",
        "handle": "NVIDIAAIDev",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Jun 2017",
        "bioTags": [],
        "bio": "All things AI for developers from @NVIDIA. \n\nAdditional developer channels: @NVIDIADeveloper, @NVIDIAHPCDev, and @NVIDIAGameDev.",
        "followers": 91221,
        "following": 350,
        "location": "Santa Clara, CA",
        "website": "https://developer.nvidia.com/blog",
        "imageUrl": "https://pbs.twimg.com/profile_images/1836133629694742531/verSRYr8_400x400.jpg"
    },
    {
        "id": "nvidiageforceme",
        "name": "NVIDIA GeForce ME",
        "group": "company",
        "role": "NVIDIA Middle East",
        "handle": "NVIDIAGeForceME",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Dec 2015",
        "bioTags": [],
        "bio": "Introducing GeForce RTX 50 Series graphics cards & laptops, powered by NVIDIA Blackwell and AI.",
        "followers": 90470,
        "following": 8,
        "location": "Dubai, United Arab Emirates",
        "website": "http://www.instagram.com/nvidiageforceme",
        "imageUrl": "https://pbs.twimg.com/profile_images/2011301241297817600/A0CWtK2N_400x400.jpg"
    },
    {
        "id": "nickcammarata",
        "name": "Nick",
        "group": "founder",
        "role": "",
        "handle": "nickcammarata",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Mar 2009",
        "bioTags": [
            "Neural Networks"
        ],
        "bio": "neural network interpretability, meditation, jhana brother",
        "followers": 90034,
        "following": 875,
        "location": "🎈",
        "website": "",
        "imageUrl": "https://pbs.twimg.com/profile_images/1753264923365523456/mUCvwn7v_400x400.jpg"
    },
    {
        "id": "chelseabfinn",
        "name": "Chelsea Finn",
        "group": "researcher",
        "role": "Professor at Stanford",
        "handle": "chelseabfinn",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Jun 2014",
        "bioTags": [
            "Founder"
        ],
        "bio": "Asst Prof of CS & EE @Stanford\nCo-founder of Physical Intelligence @physical_int\nPhD from @Berkeley_EECS, EECS BS from @MIT",
        "followers": 88292,
        "following": 400,
        "location": "Palo Alto, CA",
        "website": "http://ai.stanford.edu/~cbfinn",
        "imageUrl": "https://pbs.twimg.com/profile_images/1531702062487965698/a6iO2pRx_400x400.jpg"
    },
    {
        "id": "matthewberman",
        "name": "Matthew Berman",
        "group": "media",
        "role": "AI YouTuber",
        "handle": "MatthewBerman",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Jun 2007",
        "bioTags": [
            "Investor"
        ],
        "bio": "Building Forward Future. YouTuber, Angel Investor, Developer, AI Enthusiast. \n\nhttps://t.co/9rk7dmIboR",
        "followers": 85964,
        "following": 1028,
        "location": "California",
        "website": "https://forwardfuture.ai",
        "imageUrl": "https://pbs.twimg.com/profile_images/1924926227426738176/ORKZOyMx_400x400.jpg"
    },
    {
        "id": "ciguleva",
        "name": "Tatiana Tsiguleva",
        "group": "founder",
        "role": "Creative ambassador @perplexity_ai",
        "handle": "ciguleva",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Nov 2017",
        "bioTags": [],
        "bio": "Creative ambassador @perplexity_ai | Midjourney | Mom of 2",
        "followers": 85907,
        "following": 1433,
        "location": "Canada",
        "website": "https://ciguleva.substack.com",
        "imageUrl": "https://pbs.twimg.com/profile_images/1684921618148265984/euVl5ESk_400x400.jpg"
    },
    {
        "id": "mervenoyann",
        "name": "merve",
        "group": "founder",
        "role": "huggingface",
        "handle": "mervenoyann",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Dec 2019",
        "bioTags": [],
        "bio": "open-sourceress at @huggingface 🧙🏻‍♀️ https://t.co/MhrMkGTTWX",
        "followers": 84437,
        "following": 5130,
        "location": "Paris",
        "website": "http://huggingface.co/merve",
        "imageUrl": "https://pbs.twimg.com/profile_images/1982142240571920384/hla62KCQ_400x400.jpg"
    },
    {
        "id": "gizakdag",
        "name": "Gizem Akdag",
        "group": "founder",
        "role": "CTO",
        "handle": "gizakdag",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Jan 2010",
        "bioTags": [],
        "bio": "Creative Director, AI Explorer || Creative Ambassador @perplexity_ai || \n\nFor inquiries: hello@gizemakdag.com",
        "followers": 83215,
        "following": 1354,
        "location": "",
        "website": "https://linktr.ee/gizemakdag",
        "imageUrl": "https://pbs.twimg.com/profile_images/1715718182604775424/hbyXDcq7_400x400.jpg"
    },
    {
        "id": "mmitchell_ai",
        "name": "MMitchell",
        "group": "researcher",
        "role": "Chief Ethics Scientist at Hugging Face",
        "handle": "mmitchell_ai",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Jun 2016",
        "bioTags": [
            "Research"
        ],
        "bio": "Interdisciplinary researcher focused on shaping AI towards long-term positive goals. ML & Ethics. \n\nSimilar content in the Skies (this bird has flown).",
        "followers": 81194,
        "following": 1355,
        "location": "",
        "website": "http://m-mitchell.com",
        "imageUrl": "https://pbs.twimg.com/profile_images/759051761487187968/24OG0RCC_400x400.jpg"
    },
    {
        "id": "iamtrask",
        "name": "⿻ Andrew Trask",
        "group": "researcher",
        "role": "Privacy AI Researcher",
        "handle": "iamtrask",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Nov 2012",
        "bioTags": [
            "Neural Networks"
        ],
        "bio": "i teach AI on X\n\nBuilding @openminedorg, @GoogleDeepMind, @OxfordUni. Also @UN @GovAI_ @CFR_org. I like to train federated/decentralized neural nets.",
        "followers": 79633,
        "following": 1162,
        "location": "Oxford, UK",
        "website": "https://andrewtrask.substack.com/p/gpu-demand-is-1mx-distorted-by-efficiency",
        "imageUrl": "https://pbs.twimg.com/profile_images/1414522971037765636/889M9qeA_400x400.jpg"
    },
    {
        "id": "allen_ai",
        "name": "Ai2",
        "group": "company",
        "role": "AI Research Institute",
        "handle": "allen_ai",
        "associated": "",
        "joinedDate": "Sep 2015",
        "bioTags": [],
        "bio": "Breakthrough AI to solve the world's biggest problems.\n\n› Join us: https://t.co/MjUpZpKPXJ\n› Newsletter: https://t.co/k9gGznstwj",
        "followers": 79402,
        "following": 428,
        "location": "Seattle, WA",
        "website": "http://allenai.org",
        "imageUrl": "https://pbs.twimg.com/profile_images/1819065604370051072/UrIOp6zI_400x400.png"
    },
    {
        "id": "artificialanlys",
        "name": "Artificial Analysis",
        "group": "founder",
        "role": "",
        "handle": "ArtificialAnlys",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Jan 2024",
        "bioTags": [],
        "bio": "Independent analysis of AI models and hosting providers - choose the best model and API provider for your use-case",
        "followers": 78049,
        "following": 610,
        "location": "San Francisco",
        "website": "http://artificialanalysis.ai/",
        "imageUrl": "https://pbs.twimg.com/profile_images/1810946341511766016/3mg9KIaQ_400x400.jpg"
    },
    {
        "id": "ai_for_success",
        "name": "AshutoshShrivastava",
        "group": "founder",
        "role": "",
        "handle": "ai_for_success",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Jan 2023",
        "bioTags": [],
        "bio": "Post about latest AI news, tools, tutorials and memes.",
        "followers": 77335,
        "following": 2478,
        "location": "sponsorships 📩 or check my 🌐",
        "website": "https://ashutoshai.com",
        "imageUrl": "https://pbs.twimg.com/profile_images/1687401026805256192/uQ1o2wVQ_400x400.jpg"
    },
    {
        "id": "nvidianetworkng",
        "name": "NVIDIA Networking",
        "group": "company",
        "role": "NVIDIA Networking",
        "handle": "NVIDIANetworkng",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Jul 2009",
        "bioTags": [],
        "bio": "Accelerated software-defined networking, storage, security, and management services that are turning the data center into one compute unit.",
        "followers": 76651,
        "following": 404,
        "location": "Santa Clara, CA",
        "website": "http://nvidia.com/networking",
        "imageUrl": "https://pbs.twimg.com/profile_images/1861614423355596800/JFhz0pnX_400x400.jpg"
    },
    {
        "id": "amermathsoc",
        "name": "American Mathematical Society",
        "group": "company",
        "role": "Mathematics Society",
        "handle": "amermathsoc",
        "associated": "",
        "verified": "blue",
        "joinedDate": "May 2010",
        "bioTags": [
            "Research"
        ],
        "bio": "The American Mathematical Society is dedicated to advancing research and connecting the diverse global mathematical community.",
        "followers": 75482,
        "following": 646,
        "location": "Providence, Rhode Island USA",
        "website": "http://www.ams.org",
        "imageUrl": "https://pbs.twimg.com/profile_images/951154358561001472/1jhyD_bK_400x400.jpg"
    },
    {
        "id": "srush_nlp",
        "name": "Sasha Rush",
        "group": "researcher",
        "role": "Professor at Cornell",
        "handle": "srush_nlp",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Dec 2015",
        "bioTags": [
            "Research"
        ],
        "bio": "Researcher at Cursor\nhttps://t.co/cZl0wTfqGz",
        "followers": 75445,
        "following": 517,
        "location": "New York, NY",
        "website": "http://rush-nlp.com",
        "imageUrl": "https://pbs.twimg.com/profile_images/1702727441972686848/k52u1cyt_400x400.jpg"
    },
    {
        "id": "csprofkgd",
        "name": "Kosta Derpanis (sabbatical in Munich)",
        "group": "researcher",
        "role": "CTO",
        "handle": "CSProfKGD",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Aug 2015",
        "bioTags": [],
        "bio": "#CS Assoc Prof @YorkUniversity, #ComputerVision Scientist Samsung, @VectorInst Affiliate, TPAMI AE, @ELLISforEurope Member #CVPR2026 #ECCV2026 Publicity Chair",
        "followers": 74781,
        "following": 199,
        "location": "Toronto, Ontario",
        "website": "https://csprofkgd.github.io",
        "imageUrl": "https://pbs.twimg.com/profile_images/1862500837617987584/doETrQCu_400x400.jpg"
    },
    {
        "id": "lorwen108",
        "name": "Lorwen C Nagle, PhD",
        "group": "founder",
        "role": "Harvard",
        "handle": "LORWEN108",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Mar 2015",
        "bioTags": [],
        "bio": "Harvard-trained psychologist. Ph.D. @UTAustin. Mental health is wealth. My threads help you build financial success, become fearless, and destroy anxiety.",
        "followers": 72883,
        "following": 143,
        "location": "Book a free discovery call:",
        "website": "https://calendly.com/lorwen_consulting/enlightenment-session",
        "imageUrl": "https://pbs.twimg.com/profile_images/1836391113034264576/ZrJJ4YuQ_400x400.jpg"
    },
    {
        "id": "johnschulman2",
        "name": "John Schulman",
        "group": "researcher",
        "role": "Co-founder at OpenAI",
        "handle": "johnschulman2",
        "associated": "",
        "verified": "blue",
        "joinedDate": "May 2021",
        "bioTags": [
            "Alignment"
        ],
        "bio": "Recently started @thinkymachines. Interested in reinforcement learning, alignment, birds, jazz music",
        "followers": 72576,
        "following": 1597,
        "location": "",
        "website": "http://joschu.net",
        "imageUrl": "https://pbs.twimg.com/profile_images/1389000537195040770/DzWPljT-_400x400.jpg"
    },
    {
        "id": "sethharpesq",
        "name": "Seth Harp",
        "group": "founder",
        "role": "",
        "handle": "sethharpesq",
        "associated": "",
        "joinedDate": "Sep 2020",
        "bioTags": [],
        "bio": "Author of the critically acclaimed NYT Best Seller, THE FORT BRAGG CARTEL, from @VikingBooks, soon to be a TV show from @HBO",
        "followers": 72392,
        "following": 1032,
        "location": "Austin, TX",
        "website": "https://www.penguinrandomhouse.com/books/730414/the-fort-bragg-cartel-by-seth-harp/",
        "imageUrl": "https://pbs.twimg.com/profile_images/1939855636746862592/URZOKIug_400x400.jpg"
    },
    {
        "id": "rihardjarc",
        "name": "Rihard Jarc",
        "group": "media",
        "role": "CTO",
        "handle": "RihardJarc",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Jan 2016",
        "bioTags": [
            "Research"
        ],
        "bio": "UncoverAlpha Tech Research newsletter, and Consulting (AI, cloud, semiconductors, platforms). DMs open. Tweets are only opinions.",
        "followers": 72302,
        "following": 2785,
        "location": "",
        "website": "https://www.uncoveralpha.com/",
        "imageUrl": "https://pbs.twimg.com/profile_images/1251462631363403776/r4lpY-WV_400x400.jpg"
    },
    {
        "id": "ai__pub",
        "name": "AI Pub",
        "group": "company",
        "role": "AI News & Research",
        "handle": "ai__pub",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Jul 2022",
        "bioTags": [
            "Research"
        ],
        "bio": "AI papers and AI research explained, for technical people. Get hired by the best AI companies: https://t.co/MySVjUGOQ3",
        "followers": 71715,
        "following": 340,
        "location": "San Francisco, CA",
        "website": "https://airtable.com/shr0Jv3aGS0PFjywx",
        "imageUrl": "https://pbs.twimg.com/profile_images/1557876322940006405/TUavbIZj_400x400.jpg"
    },
    {
        "id": "amandaaskell",
        "name": "Amanda Askell",
        "group": "researcher",
        "role": "Researcher at Anthropic",
        "handle": "AmandaAskell",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Jul 2016",
        "bioTags": [],
        "bio": "Philosopher & ethicist trying to make AI be good @AnthropicAI.\nPersonal account. All opinions come from my training data.",
        "followers": 69652,
        "following": 658,
        "location": "San Francisco, CA",
        "website": "http://askell.io",
        "imageUrl": "https://pbs.twimg.com/profile_images/1808357270516125696/-s0TTWR8_400x400.jpg"
    },
    {
        "id": "tobyphln",
        "name": "Toby Pohlen",
        "group": "founder",
        "role": "Founding member @xAI",
        "handle": "TobyPhln",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Dec 2012",
        "bioTags": [],
        "bio": "Founding member @xAI. Previously @GoogleDeepMind. @RWTH alumnus.",
        "followers": 69364,
        "following": 589,
        "location": "London, UK",
        "website": "",
        "imageUrl": "https://pbs.twimg.com/profile_images/1848762733732253696/S1aucmiu_400x400.jpg"
    },
    {
        "id": "sebastienbubeck",
        "name": "Sebastien Bubeck",
        "group": "researcher",
        "role": "Research at Microsoft",
        "handle": "SebastienBubeck",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Jan 2012",
        "bioTags": [],
        "bio": "I work on AI at OpenAI. Former VP AI and Distinguished Scientist at Microsoft.",
        "followers": 69318,
        "following": 1444,
        "location": "Seattle, WA",
        "website": "http://sbubeck.com",
        "imageUrl": "https://pbs.twimg.com/profile_images/1709609135321583616/6bXuF85D_400x400.jpg"
    },
    {
        "id": "julien_c",
        "name": "Julien Chaumond",
        "group": "founder",
        "role": "Co-founder at Hugging Face",
        "handle": "julien_c",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Sep 2008",
        "bioTags": [
            "Founder"
        ],
        "bio": "Co-founder and CTO at @huggingface 🤗. ML/AI for everyone, building products to propel communities fwd. @Stanford + @Polytechnique",
        "followers": 68444,
        "following": 1186,
        "location": "Paris / New York",
        "website": "https://huggingface.co",
        "imageUrl": "https://pbs.twimg.com/profile_images/1108502565925326850/zPsBf2BI_400x400.png"
    },
    {
        "id": "nvidiashield",
        "name": "NVIDIA SHIELD",
        "group": "company",
        "role": "NVIDIA SHIELD",
        "handle": "NVIDIASHIELD",
        "associated": "",
        "joinedDate": "Jul 2014",
        "bioTags": [],
        "bio": "One box to rule them all. #NVIDIASHIELD is a streaming beast with gaming, smart home, 4K HDR and Google Assistant capabilities.",
        "followers": 66805,
        "following": 378,
        "location": "California, USA",
        "website": "http://shield.nvidia.com",
        "imageUrl": "https://pbs.twimg.com/profile_images/1658528389370908672/hA4E5Mt0_400x400.png"
    },
    {
        "id": "sirbayes",
        "name": "Kevin Patrick Murphy",
        "group": "researcher",
        "role": "Professor at UBC",
        "handle": "sirbayes",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Oct 2016",
        "bioTags": [
            "Research"
        ],
        "bio": "Research Scientist at Google DeepMind. Interested in Bayesian Machine Learning.",
        "followers": 66408,
        "following": 628,
        "location": "",
        "website": "https://www.cs.ubc.ca/~murphyk/",
        "imageUrl": "https://pbs.twimg.com/profile_images/1346948649603846145/eFBHivR2_400x400.jpg"
    },
    {
        "id": "miles_brundage",
        "name": "Miles Brundage",
        "group": "researcher",
        "role": "CTO & Researcher",
        "handle": "Miles_Brundage",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Feb 2013",
        "bioTags": [
            "Research"
        ],
        "bio": "AI policy researcher, @lfschiavo wife guy, fan of cute animals and sci-fi, executive director of AVERI (https://t.co/qq9xcmKikU), Substacker, views my own",
        "followers": 66066,
        "following": 12728,
        "location": "San Francisco, CA",
        "website": "http://www.milesbrundage.com",
        "imageUrl": "https://pbs.twimg.com/profile_images/2010851888007450624/XWRO7CIH_400x400.jpg"
    },
    {
        "id": "sedielem",
        "name": "Sander Dieleman",
        "group": "researcher",
        "role": "Research Scientist at Google",
        "handle": "sedielem",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Dec 2014",
        "bioTags": [
            "Deep Learning",
            "Research"
        ],
        "bio": "Research Scientist at Google DeepMind (WaveNet, Imagen, Veo). I tweet about deep learning (research + software), music, generative models (personal account).",
        "followers": 65858,
        "following": 1905,
        "location": "London, England",
        "website": "https://sander.ai",
        "imageUrl": "https://pbs.twimg.com/profile_images/539842407081066497/6JaLwehz_400x400.png"
    },
    {
        "id": "deliprao",
        "name": "Delip Rao e/σ",
        "group": "founder",
        "role": "Busy inventing the shipwreck",
        "handle": "deliprao",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Oct 2008",
        "bioTags": [
            "NLP"
        ],
        "bio": "Busy inventing the shipwreck. @Penn. Past: @johnshopkins, @UCSC, @Amazon, @Twitter ||Art: #NLProc, Vision, Speech, #DeepLearning || Life: 道元, improv, running 🌈",
        "followers": 65177,
        "following": 5207,
        "location": "NYC, SF 🇺🇸🇮🇳🇹🇼🏳️‍🌈",
        "website": "https://deliprao.com",
        "imageUrl": "https://pbs.twimg.com/profile_images/1521801057965264896/bo8B1BjJ_400x400.jpg"
    },
    {
        "id": "zacharylipton",
        "name": "Zachary Lipton",
        "group": "researcher",
        "role": "Professor at CMU",
        "handle": "zacharylipton",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Jan 2009",
        "bioTags": [
            "Founder",
            "Professor"
        ],
        "bio": "Cofounder & CTO: @AbridgeHQ, Professor: CMU/@acmi_lab, Creator: @d2l_ai & https://t.co/QQt98VNLUp, Relapsing 🎷",
        "followers": 64855,
        "following": 1953,
        "location": "San Francisco, CA",
        "website": "http://www.acmilab.org",
        "imageUrl": "https://pbs.twimg.com/profile_images/1915691012338704385/dVKMXThO_400x400.jpg"
    },
    {
        "id": "nvidiastudio",
        "name": "NVIDIA Studio",
        "group": "company",
        "role": "NVIDIA Studio",
        "handle": "NVIDIAStudio",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Dec 2018",
        "bioTags": [],
        "bio": "🎨 Fast-track your creativity. Do more, wait less with #NVIDIAStudio RTX systems and GPUs. | Get inspired with #StudioShare.",
        "followers": 64001,
        "following": 136,
        "location": "Imagination",
        "website": "https://linktr.ee/nvidiacreators",
        "imageUrl": "https://pbs.twimg.com/profile_images/1579974405928517632/I7jWn8UO_400x400.png"
    },
    {
        "id": "__tinygrad__",
        "name": "the tiny corp",
        "group": "company",
        "role": "ML Framework",
        "handle": "__tinygrad__",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Jun 2023",
        "bioTags": [],
        "bio": "We make tinygrad; sell tinybox for the GPU middle class.\nOur mission is to commoditize the petaflop.",
        "followers": 63505,
        "following": 161,
        "location": "Hong Kong",
        "website": "https://tinygrad.org",
        "imageUrl": "https://pbs.twimg.com/profile_images/1772444459625766913/1meZwC16_400x400.jpg"
    },
    {
        "id": "roydanroy",
        "name": "Dan Roy",
        "group": "researcher",
        "role": "CTO & Professor at Google",
        "handle": "roydanroy",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Jun 2009",
        "bioTags": [
            "Research",
            "Professor"
        ],
        "bio": "@Google DeepMind. On leave, Canada CIFAR AI Chair and Former Research Director, @VectorInst. Professor, @UofT (Statistics/CS). Views are my own.",
        "followers": 62235,
        "following": 1861,
        "location": "London",
        "website": "http://danroy.org/",
        "imageUrl": "https://pbs.twimg.com/profile_images/647245794249015296/575wCuTG_400x400.jpg"
    },
    {
        "id": "osanseviero",
        "name": "Omar Sanseviero",
        "group": "founder",
        "role": "huggingface",
        "handle": "osanseviero",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Oct 2010",
        "bioTags": [],
        "bio": "Developer Experience Lead at @GoogleDeepMind\n\nBuilding Gemini API, Gemma, AI Studio and more AI products. My views\n\nex-Chief Llama Officer @huggingface 🇵🇪🇲🇽",
        "followers": 61620,
        "following": 2731,
        "location": "Zurich",
        "website": "https://osanseviero.github.io/hackerllama/",
        "imageUrl": "https://pbs.twimg.com/profile_images/1676696716693700608/t4kv-MrC_400x400.jpg"
    },
    {
        "id": "thegautamkamath",
        "name": "Gautam Kamath",
        "group": "researcher",
        "role": "Professor at Waterloo",
        "handle": "thegautamkamath",
        "associated": "",
        "joinedDate": "Dec 2009",
        "bioTags": [],
        "bio": "Assistant Prof of CS @UWaterloo, Faculty @VectorInst, Canada @CIFAR_News AI Chair. Joining @NYU_Courant Fall 2026. Co-EiC @TmlrOrg. I lead @TheSalonML.",
        "followers": 61042,
        "following": 598,
        "location": "Waterloo, Ontario",
        "website": "http://www.gautamkamath.com",
        "imageUrl": "https://pbs.twimg.com/profile_images/1702778756195053568/G7kQIlvx_400x400.jpg"
    },
    {
        "id": "mathemagic1an",
        "name": "Jay Hack",
        "group": "founder",
        "role": "Founder at stanford",
        "handle": "mathemagic1an",
        "associated": "",
        "verified": "blue",
        "joinedDate": "May 2013",
        "bioTags": [
            "Founder"
        ],
        "bio": "Head of AI @clickup. Tweets about AI, computing, dev tools and knowledge work. Previously founder @codegen / ML + data @palantir / @stanford. Not a pseudonym.",
        "followers": 60473,
        "following": 3329,
        "location": "San Francisco",
        "website": "http://jay.ai",
        "imageUrl": "https://pbs.twimg.com/profile_images/1607042017095258114/sSUQlvdW_400x400.jpg"
    },
    {
        "id": "tdietterich",
        "name": "Thomas G. Dietterich",
        "group": "researcher",
        "role": "Professor Emeritus at Oregon State",
        "handle": "tdietterich",
        "associated": "",
        "joinedDate": "Aug 2012",
        "bioTags": [
            "Professor"
        ],
        "bio": "Distinguished Professor (Emeritus), Oregon State Univ.; Former President, Assoc. for the Adv. of Artificial Intelligence; Robust AI & Comput. Sustainability",
        "followers": 59657,
        "following": 642,
        "location": "Corvallis, OR",
        "website": "http://web.engr.oregonstate.edu/~tgd/",
        "imageUrl": "https://pbs.twimg.com/profile_images/704767204437336065/wAAXEdOd_400x400.jpg"
    },
    {
        "id": "nvidiageforcetr",
        "name": "NVIDIA GeForce TR",
        "group": "company",
        "role": "NVIDIA Turkey",
        "handle": "nvidiageforcetr",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Sep 2017",
        "bioTags": [],
        "bio": "GeForce RTX 50 Serisi ekran kartları ve dizüstü bilgisayarlar, NVIDIA Blackwell ve yapay zeka gücüyle karşınızda!",
        "followers": 58151,
        "following": 72,
        "location": "",
        "website": "https://www.nvidia.com/",
        "imageUrl": "https://pbs.twimg.com/profile_images/1970147131496296448/1wf-vpWJ_400x400.jpg"
    },
    {
        "id": "nvidiagamedev",
        "name": "NVIDIAGameDev",
        "group": "company",
        "role": "NVIDIA Game Development",
        "handle": "NVIDIAGameDev",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Jan 2009",
        "bioTags": [],
        "bio": "NVIDIA-related news and announcements of interest to game developers",
        "followers": 56616,
        "following": 522,
        "location": "Santa Clara, CA",
        "website": "https://developer.nvidia.com/industries/game-development",
        "imageUrl": "https://pbs.twimg.com/profile_images/1869154628782436352/yCRNLjNQ_400x400.jpg"
    },
    {
        "id": "sarahookr",
        "name": "Sara Hooker",
        "group": "researcher",
        "role": "Research Lead at Cohere",
        "handle": "sarahookr",
        "associated": "",
        "verified": "blue",
        "joinedDate": "May 2016",
        "bioTags": [],
        "bio": "Building intelligence that evolves @adaptionlabs. Built @Cohere_Labs, @GoogleBrain, @GoogleDeepmind. ML Efficiency, Multimodal\\lingual.",
        "followers": 56192,
        "following": 10018,
        "location": "San Francisco",
        "website": "https://www.sarahooker.me/",
        "imageUrl": "https://pbs.twimg.com/profile_images/1403376500192071683/zvr_Hkox_400x400.jpg"
    },
    {
        "id": "mmbronstein",
        "name": "Michael Bronstein",
        "group": "researcher",
        "role": "Professor at Oxford",
        "handle": "mmbronstein",
        "associated": "",
        "joinedDate": "Aug 2009",
        "bioTags": [
            "Professor"
        ],
        "bio": "#DeepMind Professor of #AI @UniofOxford / Director #AITHYRA / Chief Scientist @vant_ai / https://t.co/kZpGpDzYeV (opinions are mine) 🤖🧪🧬🎶🐎",
        "followers": 55624,
        "following": 7119,
        "location": "",
        "website": "https://www.cs.ox.ac.uk/people/michael.bronstein/",
        "imageUrl": "https://pbs.twimg.com/profile_images/2009293684295258114/oQPVNwpc_400x400.jpg"
    },
    {
        "id": "littmath",
        "name": "Daniel Litt",
        "group": "researcher",
        "role": "Professor at Toronto",
        "handle": "littmath",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Aug 2010",
        "bioTags": [
            "Professor"
        ],
        "bio": "Assistant professor (of mathematics) at the University of Toronto. \"Tireless math ronin.\" Algebraic geometry, number theory, etc. He/him.",
        "followers": 54753,
        "following": 893,
        "location": "Toronto, Ontario",
        "website": "http://www.daniellitt.com",
        "imageUrl": "https://pbs.twimg.com/profile_images/1588888923081687045/KGL3lgvC_400x400.jpg"
    },
    {
        "id": "nvidiahpcdev",
        "name": "NVIDIA HPC Developer",
        "group": "company",
        "role": "NVIDIA HPC",
        "handle": "NVIDIAHPCDev",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Nov 2009",
        "bioTags": [],
        "bio": "See the latest HPC developer news and resources from @NVIDIA. Be sure to check out our NVIDIA Technical Blog for more.",
        "followers": 54158,
        "following": 687,
        "location": "Santa Clara, CA",
        "website": "https://developer.nvidia.com/blog",
        "imageUrl": "https://pbs.twimg.com/profile_images/1836133737169653760/V1Lj4vN5_400x400.jpg"
    },
    {
        "id": "theworldlabs",
        "name": "World Labs",
        "group": "company",
        "role": "AI Research Lab",
        "handle": "theworldlabs",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Dec 2023",
        "bioTags": [],
        "bio": "World Labs is a spatial intelligence company, building frontier models that can perceive, generate, and interact with the 3D world.",
        "followers": 54125,
        "following": 45,
        "location": "San Francisco, CA",
        "website": "http://worldlabs.ai",
        "imageUrl": "https://pbs.twimg.com/profile_images/1834548472592089088/LYRGq_Kn_400x400.jpg"
    },
    {
        "id": "nvidiadc",
        "name": "NVIDIA Data Center",
        "group": "company",
        "role": "NVIDIA Data Center",
        "handle": "NVIDIADC",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Nov 2009",
        "bioTags": [],
        "bio": "AI factories for the era of AI reasoning.",
        "followers": 53705,
        "following": 1664,
        "location": "Santa Clara, CA",
        "website": "https://www.nvidia.com/en-us/data-center/",
        "imageUrl": "https://pbs.twimg.com/profile_images/1859346502243713026/NzLZW_Ag_400x400.jpg"
    },
    {
        "id": "sleepinyourhat",
        "name": "Sam Bowman",
        "group": "researcher",
        "role": "Professor at NYU",
        "handle": "sleepinyourhat",
        "associated": "",
        "joinedDate": "Jul 2011",
        "bioTags": [
            "LLMs",
            "Alignment"
        ],
        "bio": "AI alignment + LLMs at Anthropic. On leave from NYU. Views not employers'. No relation to @s8mb. I think you should join @givingwhatwecan.",
        "followers": 53601,
        "following": 3247,
        "location": "San Francisco",
        "website": "https://sleepinyourhat.github.io/",
        "imageUrl": "https://pbs.twimg.com/profile_images/1915807599867662336/rHHhdB___400x400.jpg"
    },
    {
        "id": "fofrai",
        "name": "fofr",
        "group": "founder",
        "role": "Google",
        "handle": "fofrAI",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Jul 2022",
        "bioTags": [],
        "bio": "Experimenting with AI at Google DeepMind",
        "followers": 53534,
        "following": 1466,
        "location": "🪴",
        "website": "http://fofr.ai",
        "imageUrl": "https://pbs.twimg.com/profile_images/1732174612178350080/X1uR3MvQ_400x400.jpg"
    },
    {
        "id": "merettm",
        "name": "Jakub Pachocki",
        "group": "founder",
        "role": "Chief Scientist at OpenAI",
        "handle": "merettm",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Aug 2018",
        "bioTags": [],
        "bio": "OpenAI",
        "followers": 52030,
        "following": 20,
        "location": "",
        "website": "",
        "imageUrl": "https://pbs.twimg.com/profile_images/1032407242727809025/AJpM67Ve_400x400.jpg"
    },
    {
        "id": "dpkingma",
        "name": "Durk Kingma",
        "group": "researcher",
        "role": "Research Scientist at Google",
        "handle": "dpkingma",
        "associated": "",
        "joinedDate": "Mar 2009",
        "bioTags": [],
        "bio": "@AnthropicAI. Prev. @Google Brain/DeepMind, founding team @OpenAI. Computer scientist; inventor of the VAE, Adam optimizer, and other methods. ML PhD.",
        "followers": 51723,
        "following": 408,
        "location": "",
        "website": "https://dpkingma.com",
        "imageUrl": "https://pbs.twimg.com/profile_images/1866077672687702016/4CvbDNcn_400x400.jpg"
    },
    {
        "id": "shengjia_zhao",
        "name": "Shengjia Zhao",
        "group": "researcher",
        "role": "Meta",
        "handle": "shengjia_zhao",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Oct 2016",
        "bioTags": [],
        "bio": "Chief Scientist @ Meta MSL. Formerly MTS @ OpenAI, PhD @ Stanford. I train models. All opinions my own.",
        "followers": 51349,
        "following": 230,
        "location": "",
        "website": "",
        "imageUrl": "https://pbs.twimg.com/profile_images/871905725500477440/IAaj_fa7_400x400.jpg"
    },
    {
        "id": "melmitchell1",
        "name": "Melanie Mitchell",
        "group": "researcher",
        "role": "Professor at Santa Fe Institute",
        "handle": "MelMitchell1",
        "associated": "",
        "joinedDate": "Sep 2011",
        "bioTags": [
            "Professor"
        ],
        "bio": "Professor, Santa Fe Institute.  Mostly posting  on https://t.co/4NpA2IL5Va (at-melaniemitchell). More thoughts at https://t.co/nC43NHRozX.",
        "followers": 49653,
        "following": 671,
        "location": "Santa Fe, NM",
        "website": "http://melaniemitchell.me",
        "imageUrl": "https://pbs.twimg.com/profile_images/1417524012104785928/HENn1FzD_400x400.jpg"
    },
    {
        "id": "savvyrl",
        "name": "Rosanne Liu",
        "group": "founder",
        "role": "Google",
        "handle": "savvyRL",
        "associated": "",
        "joinedDate": "Mar 2013",
        "bioTags": [
            "Deep Learning",
            "Research"
        ],
        "bio": "Mom. Cofounded & running @ml_collective. Host of Deep Learning Classics & Trends. Research at Google DeepMind. DEI/DIA Chair of ICLR & NeurIPS.",
        "followers": 49438,
        "following": 1031,
        "location": "San Francisco, CA",
        "website": "https://rosanneliu.com/",
        "imageUrl": "https://pbs.twimg.com/profile_images/1661771743785263104/ePmGOL1w_400x400.jpg"
    },
    {
        "id": "nvidianewsroom",
        "name": "NVIDIA Newsroom",
        "group": "company",
        "role": "NVIDIA News",
        "handle": "nvidianewsroom",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Mar 2025",
        "bioTags": [],
        "bio": "The official newsroom for NVIDIA. Innovation delivered daily.",
        "followers": 49127,
        "following": 36,
        "location": "",
        "website": "https://nvidianews.nvidia.com/",
        "imageUrl": "https://pbs.twimg.com/profile_images/1897079284390617092/6gB0nESi_400x400.jpg"
    },
    {
        "id": "joshwoodward",
        "name": "Josh Woodward",
        "group": "company",
        "role": "Google",
        "handle": "joshwoodward",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Oct 2010",
        "bioTags": [],
        "bio": "VP, @Google @GoogleLabs @GeminiApp @GoogleAIStudio",
        "followers": 48861,
        "following": 764,
        "location": "",
        "website": "",
        "imageUrl": "https://pbs.twimg.com/profile_images/1994910063794806784/CJr-dzpj_400x400.jpg"
    },
    {
        "id": "nvidiaanz",
        "name": "NVIDIA ANZ",
        "group": "company",
        "role": "NVIDIA Australia & NZ",
        "handle": "NvidiaANZ",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Sep 2015",
        "bioTags": [],
        "bio": "Introducing GeForce RTX 50 Series graphics cards &  laptops, powered by NVIDIA Blackwell and AI.",
        "followers": 48628,
        "following": 706,
        "location": "Australia and New Zealand",
        "website": "https://www.nvidia.com/en-au/geforce/",
        "imageUrl": "https://pbs.twimg.com/profile_images/1980092889175666688/gqzmLp-R_400x400.jpg"
    },
    {
        "id": "shaneguml",
        "name": "Shane Gu",
        "group": "founder",
        "role": "OpenAI",
        "handle": "shaneguML",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Jun 2016",
        "bioTags": [
            "GPT"
        ],
        "bio": "Gemini Thinking, Senior Staff AE @GoogleDeepMind. 🇯🇵-born 🇨🇳🇨🇦. ex: Gemini 1.5-3, GPT-4 @OpenAI (JP: @shanegJP). Personal opinions.",
        "followers": 47682,
        "following": 2197,
        "location": "Mountain View, CA",
        "website": "https://scholar.google.com/citations?user=B8wslVsAAAAJ",
        "imageUrl": "https://pbs.twimg.com/profile_images/1860165285627518976/3TI_C6pk_400x400.jpg"
    },
    {
        "id": "yuhu_ai_",
        "name": "Yuhuai (Tony) Wu",
        "group": "founder",
        "role": "Co-founder",
        "handle": "Yuhu_ai_",
        "associated": "",
        "joinedDate": "Jul 2017",
        "bioTags": [
            "Transformers",
            "Founder"
        ],
        "bio": "Co-Founder @xAI. Grok Reasoning, STaR, Minerva, AlphaGeometry, Autoformalization, AlphaStar, Memorizing transformer.",
        "followers": 45774,
        "following": 460,
        "location": "Stanford",
        "website": "https://yuhuaiwu.github.io/",
        "imageUrl": "https://pbs.twimg.com/profile_images/1281320278363119617/d9Ngg05T_400x400.jpg"
    },
    {
        "id": "jonathanross321",
        "name": "Jonathan Ross",
        "group": "founder",
        "role": "Founder at Nvidia",
        "handle": "JonathanRoss321",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Nov 2021",
        "bioTags": [
            "Founder"
        ],
        "bio": "Double the World's AI Compute\nChief Software Architect @ Nvidia, Founder of Groq, Creator of the LPU & Google's TPU",
        "followers": 45607,
        "following": 219,
        "location": "",
        "website": "https://www.nvidia.com",
        "imageUrl": "https://pbs.twimg.com/profile_images/1827406129066078208/gFpaaXaq_400x400.jpg"
    },
    {
        "id": "chhillee",
        "name": "Horace He",
        "group": "founder",
        "role": "",
        "handle": "cHHillee",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Feb 2010",
        "bioTags": [],
        "bio": "@thinkymachines Formerly @PyTorch \"My learning style is Horace twitter threads\" - @typedfemale",
        "followers": 45329,
        "following": 555,
        "location": "chhillee",
        "website": "https://www.thonking.ai/p/strangely-matrix-multiplications",
        "imageUrl": "https://pbs.twimg.com/profile_images/1747412378751574016/0es3s5Fz_400x400.jpg"
    },
    {
        "id": "egrefen",
        "name": "Edward Grefenstette",
        "group": "researcher",
        "role": "CTO & Professor",
        "handle": "egrefen",
        "associated": "",
        "joinedDate": "Apr 2007",
        "bioTags": [
            "Research",
            "Professor"
        ],
        "bio": "FR/US/GB AI/ML Person, Director of Research at @GoogleDeepMind, Honorary Professor at @UCL_DARK, @ELLISforEurope Fellow. All posts are personal.",
        "followers": 44586,
        "following": 894,
        "location": "London, United Kingdom",
        "website": "http://www.egrefen.com",
        "imageUrl": "https://pbs.twimg.com/profile_images/1701720890138882048/8_FxlWxz_400x400.jpg"
    },
    {
        "id": "mattniessner",
        "name": "Matthias Niessner",
        "group": "researcher",
        "role": "Co-founder & Professor",
        "handle": "MattNiessner",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Mar 2015",
        "bioTags": [
            "Founder",
            "Professor"
        ],
        "bio": "Professor for Visual Computing & Artificial Intelligence @TU_Muenchen\nCo-Founder @synthesiaIO\nCo-Founder @SpAItial_AI",
        "followers": 44231,
        "following": 283,
        "location": "Munich, Bavaria",
        "website": "https://niessnerlab.org/publications.html",
        "imageUrl": "https://pbs.twimg.com/profile_images/746260005918146560/ghNddE9L_400x400.jpg"
    },
    {
        "id": "hendrycks",
        "name": "Dan Hendrycks",
        "group": "researcher",
        "role": "CTO",
        "handle": "hendrycks",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Aug 2009",
        "bioTags": [
            "AI Safety"
        ],
        "bio": "• Center for AI Safety Director\n• xAI and Scale AI advisor\n• GELU/MMLU/MATH/HLE\n• PhD in AI\n• Analyzing AI models, companies, policies, and geopolitics",
        "followers": 44145,
        "following": 111,
        "location": "San Francisco",
        "website": "https://newsletter.safe.ai",
        "imageUrl": "https://pbs.twimg.com/profile_images/1884117842699902978/EklOGf5d_400x400.jpg"
    },
    {
        "id": "peterberezinbca",
        "name": "Peter Berezin",
        "group": "founder",
        "role": "CTO",
        "handle": "PeterBerezinBCA",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Mar 2017",
        "bioTags": [
            "Research"
        ],
        "bio": "Chief Global Strategist and Director of Research @bcaresearch Formerly with Goldman Sachs & IMF",
        "followers": 43706,
        "following": 661,
        "location": "Hilbert space",
        "website": "http://www.bcaresearch.com",
        "imageUrl": "https://pbs.twimg.com/profile_images/1635243673548906496/8lhtDS1B_400x400.jpg"
    },
    {
        "id": "zai_org",
        "name": "Z.ai",
        "group": "company",
        "role": "AI Company",
        "handle": "Zai_org",
        "associated": "",
        "joinedDate": "Nov 2023",
        "bioTags": [
            "AGI"
        ],
        "bio": "The AI Lab behind GLM models, dedicated to inspiring the development of AGI to benefit humanity.\n\nhttps://t.co/x14hb3jO7O",
        "followers": 43687,
        "following": 225,
        "location": "user_feedback@z.ai",
        "website": "http://z.ai",
        "imageUrl": "https://pbs.twimg.com/profile_images/1970775077181411328/W8XKaUIh_400x400.jpg"
    },
    {
        "id": "getjonwithit",
        "name": "Jonathan Gorard",
        "group": "founder",
        "role": "Princeton",
        "handle": "getjonwithit",
        "associated": "",
        "joinedDate": "Nov 2012",
        "bioTags": [],
        "bio": "Applied mathematician, computational physicist @Princeton\nPreviously @Cambridge_Uni\nMaking the universe computable.",
        "followers": 43651,
        "following": 18,
        "location": "Princeton, NJ",
        "website": "",
        "imageUrl": "https://pbs.twimg.com/profile_images/1330192676222865414/mhhuGgKB_400x400.jpg"
    },
    {
        "id": "nvidiajapan",
        "name": "NVIDIA Japan",
        "group": "company",
        "role": "NVIDIA Japan",
        "handle": "NVIDIAJapan",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Oct 2010",
        "bioTags": [],
        "bio": "エヌビディア ジャパンのオフィシャルアカウントです。エヌビディア ジャパンの最新情報をお知らせします。",
        "followers": 43620,
        "following": 230,
        "location": "東京都港区赤坂",
        "website": "http://www.nvidia.co.jp/",
        "imageUrl": "https://pbs.twimg.com/profile_images/1862300595220078592/hGVao7Zs_400x400.jpg"
    },
    {
        "id": "chrszegedy",
        "name": "Christian Szegedy",
        "group": "researcher",
        "role": "Research Scientist",
        "handle": "ChrSzegedy",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Jun 2015",
        "bioTags": [
            "Research"
        ],
        "bio": "#deeplearning, #ai research scientist. Opinions are mine.",
        "followers": 43235,
        "following": 2842,
        "location": "Sunnyvale, CA",
        "website": "",
        "imageUrl": "https://pbs.twimg.com/profile_images/1728625627207725056/auh7rYVv_400x400.jpg"
    },
    {
        "id": "billpeeb",
        "name": "Bill Peebles",
        "group": "researcher",
        "role": "Research Scientist at OpenAI",
        "handle": "billpeeb",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Jul 2012",
        "bioTags": [],
        "bio": "head of sora @openai 🇺🇸🇺🇸🇺🇸",
        "followers": 43035,
        "following": 306,
        "location": "",
        "website": "https://wpeebles.com",
        "imageUrl": "https://pbs.twimg.com/profile_images/1973120495043354625/sTrUPHov_400x400.jpg"
    },
    {
        "id": "jeffteper",
        "name": "Jeff Teper",
        "group": "company",
        "role": "Microsoft",
        "handle": "jeffteper",
        "associated": "",
        "verified": "blue",
        "joinedDate": "May 2009",
        "bioTags": [],
        "bio": "President - Microsoft 365 Collab Apps & Platforms - Teams, SharePoint, AI …  🙏 best community in tech",
        "followers": 43019,
        "following": 935,
        "location": "Redmond, WA",
        "website": "",
        "imageUrl": "https://pbs.twimg.com/profile_images/1253063329091694592/pSS0UgpK_400x400.jpg"
    },
    {
        "id": "petarv_93",
        "name": "Petar Veličković",
        "group": "researcher",
        "role": "Staff Research Scientist at Google DeepMind",
        "handle": "PetarV_93",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Jan 2013",
        "bioTags": [
            "Research"
        ],
        "bio": "Senior Staff Research Scientist @GoogleDeepMind | Affiliated Lecturer @Cambridge_Uni | Assoc @clarehall_cam | GDL Scholar @ELLISforEurope. Monoids. 🇷🇸🇲🇪🇧🇦",
        "followers": 42999,
        "following": 555,
        "location": "London 🇬🇧",
        "website": "https://petar-v.com",
        "imageUrl": "https://pbs.twimg.com/profile_images/1991824836180500481/uDwvd0lk_400x400.jpg"
    },
    {
        "id": "black_in_ai",
        "name": "Black in AI",
        "group": "company",
        "role": "AI Community Organization",
        "handle": "black_in_ai",
        "associated": "",
        "joinedDate": "Nov 2017",
        "bioTags": [],
        "bio": "Black in AI empowers a global community of AI professionals of African descent to be full partners in shaping our technological and economic future.",
        "followers": 42747,
        "following": 313,
        "location": "",
        "website": "http://www.blackinai.org",
        "imageUrl": "https://pbs.twimg.com/profile_images/1841203973161619462/pJjiPD8f_400x400.png"
    },
    {
        "id": "npew",
        "name": "Peter Welinder",
        "group": "founder",
        "role": "VP at OpenAI",
        "handle": "npew",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Apr 2010",
        "bioTags": [],
        "bio": "VP and GM @OpenAI",
        "followers": 42340,
        "following": 924,
        "location": "San Francisco, CA",
        "website": "",
        "imageUrl": "https://pbs.twimg.com/profile_images/1527047003984629761/6ZfqcDtO_400x400.jpg"
    },
    {
        "id": "unslothai",
        "name": "Unsloth AI",
        "group": "company",
        "role": "LLM Fine-tuning Tools",
        "handle": "UnslothAI",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Nov 2023",
        "bioTags": [],
        "bio": "Making open-source AI accessible! 🦥 https://t.co/2kXqhhvdCD",
        "followers": 42291,
        "following": 448,
        "location": "San Francisco, CA",
        "website": "http://unsloth.ai",
        "imageUrl": "https://pbs.twimg.com/profile_images/1790653115441782784/VXHiO8LM_400x400.jpg"
    },
    {
        "id": "askokara",
        "name": "Okara",
        "group": "founder",
        "role": "private ai chat with open source models",
        "handle": "askOkara",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Dec 2021",
        "bioTags": [
            "Open Source"
        ],
        "bio": "private ai chat with open source models",
        "followers": 42147,
        "following": 690,
        "location": "web",
        "website": "https://okara.ai/",
        "imageUrl": "https://pbs.twimg.com/profile_images/2006964709212434438/9CNd6lAH_400x400.jpg"
    },
    {
        "id": "gneubig",
        "name": "Graham Neubig",
        "group": "researcher",
        "role": "Professor at CMU",
        "handle": "gneubig",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Sep 2010",
        "bioTags": [
            "Founder",
            "Professor"
        ],
        "bio": "Associate professor @LTIatCMU.\nCo-founder/chief scientist @OpenHandsDev.\nI mostly work on modeling language.",
        "followers": 42016,
        "following": 749,
        "location": "Pittsburgh, PA",
        "website": "http://www.phontron.com",
        "imageUrl": "https://pbs.twimg.com/profile_images/1115600347/drawing-me_400x400.png"
    },
    {
        "id": "suchenzang",
        "name": "Susan Zhang",
        "group": "company",
        "role": "Google",
        "handle": "suchenzang",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Apr 2014",
        "bioTags": [],
        "bio": "@ Google Deepmind. Past: @MetaAI, @OpenAI, @unitygames, @losalamosnatlab, @Princeton etc. Always hungry for intelligence.",
        "followers": 41198,
        "following": 766,
        "location": "",
        "website": "https://suchenzang.github.io/",
        "imageUrl": "https://pbs.twimg.com/profile_images/1965607429271683074/D9Yvuz-O_400x400.jpg"
    },
    {
        "id": "_mohansolo",
        "name": "Varun Mohan",
        "group": "founder",
        "role": "building @antigravity @GoogleDeepMind",
        "handle": "_mohansolo",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Jan 2019",
        "bioTags": [],
        "bio": "building @antigravity @GoogleDeepMind",
        "followers": 40788,
        "following": 231,
        "location": "",
        "website": "",
        "imageUrl": "https://pbs.twimg.com/profile_images/1658293192549339138/V0Y7u33__400x400.jpg"
    },
    {
        "id": "khoomeik",
        "name": "Rohan Pandey",
        "group": "company",
        "role": "OpenAI",
        "handle": "khoomeik",
        "associated": "",
        "joinedDate": "Feb 2020",
        "bioTags": [
            "Research"
        ],
        "bio": "descending cross-entropy to ascend entropy @PeriodicLabs || prev research @OpenAI @CarnegieMellon '23",
        "followers": 40575,
        "following": 2611,
        "location": "San Francisco, CA",
        "website": "https://rpandey.tech",
        "imageUrl": "https://pbs.twimg.com/profile_images/1970553499902681088/He-CtSGQ_400x400.jpg"
    },
    {
        "id": "tydsh",
        "name": "Yuandong Tian",
        "group": "researcher",
        "role": "Co-founder & CTO at Meta",
        "handle": "tydsh",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Dec 2009",
        "bioTags": [
            "LLMs",
            "Robotics",
            "Startup",
            "Founder"
        ],
        "bio": "co-founder of Stealth Startup. ex-Meta FAIR Director. ex-Google. Reasoning, Optimization and Understanding LLM. Novelist in spare time. PhD in @CMU_Robotics.",
        "followers": 40526,
        "following": 918,
        "location": "California, USA",
        "website": "http://yuandong-tian.com",
        "imageUrl": "https://pbs.twimg.com/profile_images/1382126627883077632/qFn6cjhc_400x400.jpg"
    },
    {
        "id": "tlogg",
        "name": "Dario TLO Wünsch",
        "group": "founder",
        "role": "Co-founder at deepmind",
        "handle": "TLOgg",
        "associated": "",
        "joinedDate": "Feb 2011",
        "bioTags": [
            "Founder"
        ],
        "bio": "Co-founder & General Manager of Competitive Operations @shopifyrebels @shopify @teamliquid StarCraft 2 alumni @deepmind AlphaStar contributor 🇪🇺🇨🇦",
        "followers": 39528,
        "following": 1241,
        "location": "Alpha Quadrant",
        "website": "http://TLO.gg",
        "imageUrl": "https://pbs.twimg.com/profile_images/1537979589649002497/9qXQYDqe_400x400.jpg"
    },
    {
        "id": "alexgraveley",
        "name": "Alex Graveley",
        "group": "founder",
        "role": "CEO",
        "handle": "alexgraveley",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Jul 2022",
        "bioTags": [],
        "bio": "Co-creator GitHub Copilot, Dropbox Paper. 2x CEO. Working on @Perplexity_ai & @Comet. Survivor 🎗️",
        "followers": 38154,
        "following": 1557,
        "location": "US",
        "website": "https://alexgraveley.com",
        "imageUrl": "https://pbs.twimg.com/profile_images/1669608410776764416/kVuKoJmS_400x400.jpg"
    },
    {
        "id": "sundeep",
        "name": "sunny madra",
        "group": "company",
        "role": "Nvidia",
        "handle": "sundeep",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Oct 2009",
        "bioTags": [],
        "bio": "VP @Nvidia, prev (COO/President@GroqInc) prev (co-f@definitiveio acq. by groq, co-f@autonomic acq. by @ford, and co-f@xtreme labs acq. by pivotal/@vmware)",
        "followers": 37748,
        "following": 5320,
        "location": "👨🏽‍💻",
        "website": "",
        "imageUrl": "https://pbs.twimg.com/profile_images/2005896047193907200/rkyjKTpD_400x400.jpg"
    },
    {
        "id": "nvidiaworkstatn",
        "name": "NVIDIA Workstation",
        "group": "company",
        "role": "NVIDIA Workstation",
        "handle": "NVIDIAworkstatn",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Nov 2009",
        "bioTags": [],
        "bio": "The #NVIDIARTXPRO platform for professional visualization drives the innovation of graphics and #AI, from the desktop to the data center to the cloud.",
        "followers": 36588,
        "following": 1146,
        "location": "Santa Clara, CA",
        "website": "https://www.nvidia.com/en-us/design-visualization/",
        "imageUrl": "https://pbs.twimg.com/profile_images/1866913814031241217/YJSZ1KXi_400x400.jpg"
    },
    {
        "id": "stuartjritchie",
        "name": "Stuart Ritchie",
        "group": "founder",
        "role": "Research Comms @AnthropicAI",
        "handle": "StuartJRitchie",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Aug 2010",
        "bioTags": [
            "Research"
        ],
        "bio": "Research Comms @AnthropicAI",
        "followers": 36492,
        "following": 1186,
        "location": "London",
        "website": "https://www.sciencefictions.org",
        "imageUrl": "https://pbs.twimg.com/profile_images/1288882190634364937/YhDe6kz0_400x400.jpg"
    },
    {
        "id": "timzaman",
        "name": "Tim Zaman",
        "group": "founder",
        "role": "OpenAI",
        "handle": "timzaman",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Jun 2010",
        "bioTags": [],
        "bio": "Frontier Clusters at OpenAI. Formerly DeepMind, Tesla AI (head of AI Infra), X/Twitter, NVIDIA.",
        "followers": 35891,
        "following": 227,
        "location": "San Francisco, CA",
        "website": "http://www.timzaman.com",
        "imageUrl": "https://pbs.twimg.com/profile_images/1388188008793337861/HgLX98oe_400x400.jpg"
    },
    {
        "id": "yoshua_bengio",
        "name": "Yoshua Bengio",
        "group": "researcher",
        "role": "Deep Learning Pioneer",
        "handle": "Yoshua_Bengio",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Sep 2024",
        "bioTags": [
            "Research"
        ],
        "bio": "Working towards the safe development of AI for the benefit of all @UMontreal, @LawZero_ & @Mila_Quebec\nA.M. Turing Award Recipient and most-cited AI researcher.",
        "followers": 34775,
        "following": 232,
        "location": "Montréal, Québec, Canada",
        "website": "https://yoshuabengio.org/",
        "imageUrl": "https://pbs.twimg.com/profile_images/1831403866228670464/ervekqfd_400x400.jpg"
    },
    {
        "id": "mattt",
        "name": "Mattt",
        "group": "company",
        "role": "huggingface",
        "handle": "mattt",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Dec 2006",
        "bioTags": [],
        "bio": "Collaborating w/@huggingface and writing on @nshipster. Prev: @replicate, @github, @apple, BA @CarnegieMellon",
        "followers": 33870,
        "following": 65,
        "location": "Portland, OR",
        "website": "https://github.com/mattt",
        "imageUrl": "https://pbs.twimg.com/profile_images/969321564050112513/fbdJZmEh_400x400.jpg"
    },
    {
        "id": "chatgpt21",
        "name": "Chris",
        "group": "founder",
        "role": "Agi 2029 - Applied in RL, CL, and generalization",
        "handle": "chatgpt21",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Jan 2023",
        "bioTags": [
            "AGI",
            "Startup"
        ],
        "bio": "Agi 2029 - Applied in RL, CL, and generalization | Program Manager | Investing in early startups 📈 E/CC 🦾🤖",
        "followers": 33496,
        "following": 1072,
        "location": "",
        "website": "https://www.asciibench.com/",
        "imageUrl": "https://pbs.twimg.com/profile_images/2001137569275256832/bO_iEVnF_400x400.jpg"
    },
    {
        "id": "zoubinghahrama1",
        "name": "Zoubin Ghahramani",
        "group": "researcher",
        "role": "VP Research at Google",
        "handle": "ZoubinGhahrama1",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Aug 2020",
        "bioTags": [
            "Research",
            "Professor"
        ],
        "bio": "VP Research, Google DeepMind, ex-head of Google Brain. Professor at University of Cambridge. Machine Learning Researcher. ex-Chief Scientist & VP of AI, Uber.",
        "followers": 33260,
        "following": 693,
        "location": "Cambridge, UK",
        "website": "",
        "imageUrl": "https://pbs.twimg.com/profile_images/1294283059747893248/9K2p5oV__400x400.jpg"
    },
    {
        "id": "liamfedus",
        "name": "William Fedus",
        "group": "company",
        "role": "Co-founder at OpenAI",
        "handle": "LiamFedus",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Oct 2012",
        "bioTags": [
            "Founder"
        ],
        "bio": "Co-Founder of @periodiclabs\n\nPast: VP of Post-Training @OpenAI; Google Brain",
        "followers": 32714,
        "following": 1156,
        "location": "San Francisco, CA",
        "website": "http://acsweb.ucsd.edu/~wfedus/",
        "imageUrl": "https://pbs.twimg.com/profile_images/946842870916448256/X0_3p45X_400x400.jpg"
    },
    {
        "id": "askalphaxiv",
        "name": "alphaXiv",
        "group": "company",
        "role": "AI Research Platform",
        "handle": "askalphaxiv",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Nov 2023",
        "bioTags": [
            "Research"
        ],
        "bio": "High fidelity research",
        "followers": 32646,
        "following": 44,
        "location": "",
        "website": "http://alphaxiv.org",
        "imageUrl": "https://pbs.twimg.com/profile_images/1866663567417806848/-Vj32Dq-_400x400.jpg"
    },
    {
        "id": "cixliv",
        "name": "CIX 🦾",
        "group": "founder",
        "role": "Founder & CEO",
        "handle": "cixliv",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Jan 2013",
        "bioTags": [
            "Startup",
            "Founder"
        ],
        "bio": "Building Real Steel - CEO / Chief Robot Fighter @REK - Decade of startups in AR/VR - Founder @LIV + more - Post about VR and Humanoid Robots",
        "followers": 32283,
        "following": 8335,
        "location": "California",
        "website": "http://rek.com",
        "imageUrl": "https://pbs.twimg.com/profile_images/2001533291527380992/T0_Tcexs_400x400.jpg"
    },
    {
        "id": "natashajaques",
        "name": "Natasha Jaques",
        "group": "company",
        "role": "Professor & Research Scientist",
        "handle": "natashajaques",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Jun 2009",
        "bioTags": [
            "Research",
            "Professor"
        ],
        "bio": "Assistant Professor leading the Social RL Lab https://t.co/ykwfJG84Bj @uwcse and Staff Research Scientist at @GoogleAI.",
        "followers": 32216,
        "following": 1117,
        "location": "Seattle, WA",
        "website": "http://natashajaques.ai",
        "imageUrl": "https://pbs.twimg.com/profile_images/1702377276376227840/kG1riV9J_400x400.jpg"
    },
    {
        "id": "jaykreps",
        "name": "Jay Kreps",
        "group": "founder",
        "role": "CEO at anthropic",
        "handle": "jaykreps",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Mar 2010",
        "bioTags": [],
        "bio": "CEO of @confluentinc (https://t.co/fKQHUemwWR). One of the original creators of @apachekafka. Board member at @anthropic. Sí se puede.",
        "followers": 31535,
        "following": 915,
        "location": "Palo Alto, California",
        "website": "http://www.confluent.io/blog",
        "imageUrl": "https://pbs.twimg.com/profile_images/1123808410510737408/NCWzmizz_400x400.png"
    },
    {
        "id": "lateinteraction",
        "name": "Omar Khattab",
        "group": "researcher",
        "role": "Professor at MIT",
        "handle": "lateinteraction",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Dec 2022",
        "bioTags": [
            "NLP",
            "Research",
            "Professor"
        ],
        "bio": "Asst professor @MIT CSAIL @nlp_mit.\n\nResearch includes https://t.co/VgyLxl0oa1, https://t.co/ZZaSzaRaZ7 (@DSPyOSS), RLMs, and GEPA.\n\nPrev: CS PhD @StanfordNLP. Research @Databricks.",
        "followers": 30119,
        "following": 3254,
        "location": "Cambridge, MA",
        "website": "https://omarkhattab.com/",
        "imageUrl": "https://pbs.twimg.com/profile_images/1613558765764374528/aZQB6U4b_400x400.jpg"
    },
    {
        "id": "chris_j_paxton",
        "name": "Chris Paxton",
        "group": "founder",
        "role": "Mostly posting about robots",
        "handle": "chris_j_paxton",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Dec 2013",
        "bioTags": [
            "AGI",
            "Robotics"
        ],
        "bio": "Mostly posting about robots.\n\ncurrently AI @agilityrobotics\n\nprev embodied AI @AIatMeta, @NVIDIAAI. All views my own.",
        "followers": 29706,
        "following": 3209,
        "location": "Pittsburgh, PA",
        "website": "https://itcanthink.substack.com/",
        "imageUrl": "https://pbs.twimg.com/profile_images/1330994153518411777/2LfHg9GF_400x400.jpg"
    },
    {
        "id": "gordic_aleksa",
        "name": "Aleksa Gordić (水平问题)",
        "group": "founder",
        "role": "Microsoft",
        "handle": "gordic_aleksa",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Sep 2017",
        "bioTags": [
            "LLMs"
        ],
        "bio": "pretraining LLMs\n\ngetting us to singularity with friends\n\ncomputers can be understood: https://t.co/doHE1Qv2Sj\n\nx @GoogleDeepMind @Microsoft",
        "followers": 29073,
        "following": 230,
        "location": "San Francisco, CA",
        "website": "https://www.aleksagordic.com/",
        "imageUrl": "https://pbs.twimg.com/profile_images/1961835942957985792/JsXmqrBl_400x400.jpg"
    },
    {
        "id": "jamesmontemagno",
        "name": "James Montemagno",
        "group": "founder",
        "role": "Microsoft",
        "handle": "JamesMontemagno",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Jan 2009",
        "bioTags": [],
        "bio": "Developer Community Lead @Microsoft focusing on @code, @githubcopilot, @dotnet, @visualstudio, and more! Creator of https://t.co/QFtWdDJvaw",
        "followers": 28914,
        "following": 35,
        "location": "",
        "website": "https://www.youtube.com/jamesmontemagno",
        "imageUrl": "https://pbs.twimg.com/profile_images/1790636025167130624/dnJ8ZfKe_400x400.jpg"
    },
    {
        "id": "tkipf",
        "name": "Thomas Kipf",
        "group": "researcher",
        "role": "Research Scientist at Google DeepMind",
        "handle": "tkipf",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Jun 2009",
        "bioTags": [
            "Robotics",
            "Neural Networks"
        ],
        "bio": "Sr. Staff RS at @GoogleDeepMind. Veo Team. Priors: GNNs, Structured World Models, Neural Assets, Veo Ingredients Co-Lead, Veo Robotics",
        "followers": 28851,
        "following": 1387,
        "location": "San Francisco, CA",
        "website": "https://scholar.google.com/citations?user=83HL5FwAAAAJ",
        "imageUrl": "https://pbs.twimg.com/profile_images/1925727886264184832/DPIJ1grK_400x400.jpg"
    },
    {
        "id": "boazbaraktcs",
        "name": "Boaz Barak",
        "group": "researcher",
        "role": "Professor at Harvard",
        "handle": "boazbaraktcs",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Jan 2020",
        "bioTags": [],
        "bio": "Computer Scientist. See also https://t.co/EXWR5k634w .\n@harvard @openai opinions my own.",
        "followers": 28717,
        "following": 702,
        "location": "Cambridge, MA",
        "website": "https://www.boazbarak.org/",
        "imageUrl": "https://pbs.twimg.com/profile_images/1252262363132280834/ytIN-vzv_400x400.jpg"
    },
    {
        "id": "thsottiaux",
        "name": "Tibo",
        "group": "founder",
        "role": "OpenAI",
        "handle": "thsottiaux",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Aug 2025",
        "bioTags": [],
        "bio": "Codex @OpenAI",
        "followers": 28496,
        "following": 52,
        "location": "",
        "website": "",
        "imageUrl": "https://pbs.twimg.com/profile_images/1953339828738899968/WWQlU2RT_400x400.jpg"
    },
    {
        "id": "nickaturley",
        "name": "Nick Turley",
        "group": "founder",
        "role": "vp & head of @chatgptapp",
        "handle": "nickaturley",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Mar 2013",
        "bioTags": [
            "GPT"
        ],
        "bio": "vp & head of @chatgptapp",
        "followers": 27562,
        "following": 898,
        "location": "San Francisco, CA",
        "website": "",
        "imageUrl": "https://pbs.twimg.com/profile_images/1956499252764672000/HFL-mLAj_400x400.jpg"
    },
    {
        "id": "jsuarez",
        "name": "Joseph Suarez 🐡",
        "group": "researcher",
        "role": "Founder at MIT",
        "handle": "jsuarez",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Mar 2019",
        "bioTags": [
            "LLMs",
            "Neural Networks",
            "Founder"
        ],
        "bio": "I build sane open-source RL tools. MIT PhD, creator of Neural MMO and founder of PufferAI. DM for business: non-LLM sim engineering, RL R&D, infra & support.",
        "followers": 27294,
        "following": 115,
        "location": "",
        "website": "https://puffer.ai",
        "imageUrl": "https://pbs.twimg.com/profile_images/1513561864524939267/X2E-h1d4_400x400.jpg"
    },
    {
        "id": "zicokolter",
        "name": "Zico Kolter",
        "group": "researcher",
        "role": "Professor at CMU",
        "handle": "zicokolter",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Mar 2017",
        "bioTags": [
            "Professor"
        ],
        "bio": "Professor and Head of Machine Learning Department at @CarnegieMellon. Board member @OpenAI and @Qualcomm. Chief Scientist @GraySwanAI.",
        "followers": 27272,
        "following": 721,
        "location": "Pittsburgh, PA",
        "website": "http://zicokolter.com",
        "imageUrl": "https://pbs.twimg.com/profile_images/1821507829406007297/IIrL9ky5_400x400.jpg"
    },
    {
        "id": "rao2z",
        "name": "Subbarao Kambhampati (కంభంపాటి సుబ్బారావు)",
        "group": "researcher",
        "role": "Professor at ASU",
        "handle": "rao2z",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Oct 2014",
        "bioTags": [
            "Research"
        ],
        "bio": "AI researcher & teacher @SCAI_ASU.  Former President of @RealAAAI; Chair of @AAAS Sec T. Here to tweach #AI. YouTube Ch: https://t.co/4beUPOmf6y Bsky: rao2z",
        "followers": 26892,
        "following": 57,
        "location": "Tempe, AZ",
        "website": "http://rakaposhi.eas.asu.edu",
        "imageUrl": "https://pbs.twimg.com/profile_images/1240088892751007745/zFdWaIFe_400x400.jpg"
    },
    {
        "id": "zeyuanallenzhu",
        "name": "Zeyuan Allen-Zhu, Sc.D.",
        "group": "founder",
        "role": "Meta",
        "handle": "ZeyuanAllenZhu",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Apr 2010",
        "bioTags": [],
        "bio": "physics of language models @ Meta (FAIR at MSL, not GenAI or TBD)\n🎓：Tsinghua Physics — MIT CSAIL — Princeton/IAS\n🏅：IOI x 2 — ICPC — USACO — Codejam — math MCM",
        "followers": 25291,
        "following": 531,
        "location": "",
        "website": "http://zeyuan.allen-zhu.com",
        "imageUrl": "https://pbs.twimg.com/profile_images/1777537825493426176/OYHinr5A_400x400.jpg"
    },
    {
        "id": "nvidia_ai_pc",
        "name": "NVIDIA AI PC",
        "group": "company",
        "role": "NVIDIA AI PC",
        "handle": "NVIDIA_AI_PC",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Nov 2024",
        "bioTags": [],
        "bio": "NVIDIA Powers the World's AI. And Yours with RTX AI PCs. 💻🚀 #AIonRTX",
        "followers": 24577,
        "following": 22,
        "location": "",
        "website": "https://www.nvidia.com/en-us/ai-on-rtx/",
        "imageUrl": "https://pbs.twimg.com/profile_images/1856713042689482752/yF_VW5Zc_400x400.jpg"
    },
    {
        "id": "jm_alexia",
        "name": "Alexia Jolicoeur-Martineau",
        "group": "researcher",
        "role": "Research Scientist",
        "handle": "jm_alexia",
        "associated": "",
        "joinedDate": "Mar 2017",
        "bioTags": [
            "Research"
        ],
        "bio": "AI Researcher 🐱‍💻 \n2025 ARC Prize Winner\n\nI build generative AI for images, videos, text, tabular data, weights, molecules, and video games.",
        "followers": 24423,
        "following": 2086,
        "location": "Montréal, Québec",
        "website": "http://ajolicoeur.wordpress.com",
        "imageUrl": "https://pbs.twimg.com/profile_images/1480318038427803651/i_-ZNnjh_400x400.jpg"
    },
    {
        "id": "alexwei_",
        "name": "Alexander Wei",
        "group": "researcher",
        "role": "OpenAI",
        "handle": "alexwei_",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Mar 2022",
        "bioTags": [],
        "bio": "Reasoning @OpenAI.\n\nCo-built CICERO @MetaAI | @Berkeley_AI PhD '23 | @Harvard '20",
        "followers": 24410,
        "following": 203,
        "location": "San Francisco, CA",
        "website": "https://www.alexwei.org",
        "imageUrl": "https://pbs.twimg.com/profile_images/1695738958041493504/OkFyoThU_400x400.jpg"
    },
    {
        "id": "nvidiaomniverse",
        "name": "NVIDIA Omniverse",
        "group": "company",
        "role": "NVIDIA Omniverse Platform",
        "handle": "nvidiaomniverse",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Oct 2020",
        "bioTags": [],
        "bio": "The official handle for #NVIDIAOmniverse. The platform for developing #OpenUSD applications for industrial digitalization and generative physical #AI.",
        "followers": 24121,
        "following": 318,
        "location": "",
        "website": "https://www.nvidia.com/omniverse",
        "imageUrl": "https://pbs.twimg.com/profile_images/1864432630059683841/FbTveajA_400x400.jpg"
    },
    {
        "id": "ctnzr",
        "name": "Bryan Catanzaro",
        "group": "founder",
        "role": "VP at NVIDIA",
        "handle": "ctnzr",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Feb 2011",
        "bioTags": [
            "Deep Learning",
            "Research"
        ],
        "bio": "VP, Applied Deep Learning Research @ NVIDIA",
        "followers": 23958,
        "following": 473,
        "location": "",
        "website": "",
        "imageUrl": "https://pbs.twimg.com/profile_images/1699513548647596032/QZ3dWSYh_400x400.jpg"
    },
    {
        "id": "embirico",
        "name": "Alexander Embiricos",
        "group": "founder",
        "role": "OpenAI",
        "handle": "embirico",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Nov 2011",
        "bioTags": [],
        "bio": "Codex @OpenAI",
        "followers": 23943,
        "following": 1025,
        "location": "San Francisco, CA",
        "website": "",
        "imageUrl": "https://pbs.twimg.com/profile_images/1649509163712561153/mTxQ1REO_400x400.jpg"
    },
    {
        "id": "ericzelikman",
        "name": "Eric Zelikman",
        "group": "researcher",
        "role": "Co-founder & CEO at stanford",
        "handle": "ericzelikman",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Apr 2010",
        "bioTags": [
            "Founder"
        ],
        "bio": "cofounder & ceo @humansand - building ai for humans // was lgtm-ing @xAI, phd-ing @stanford",
        "followers": 23532,
        "following": 1988,
        "location": "",
        "website": "http://humansand.ai",
        "imageUrl": "https://pbs.twimg.com/profile_images/2012725421796626432/TNRRFUS5_400x400.jpg"
    },
    {
        "id": "wightmanr",
        "name": "Ross Wightman",
        "group": "founder",
        "role": "Computer Vision @ 🤗",
        "handle": "wightmanr",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Apr 2012",
        "bioTags": [
            "Vision",
            "Startup"
        ],
        "bio": "Computer Vision @ 🤗. Ex head of Software, Firmware Engineering at a Canadian 🦄. Currently building ML, AI systems or investing in startups that do it better.",
        "followers": 23400,
        "following": 1339,
        "location": "Vancouver, BC",
        "website": "http://rwightman.com/",
        "imageUrl": "https://pbs.twimg.com/profile_images/769304549135880192/gUzKgYuk_400x400.jpg"
    },
    {
        "id": "sashamtl",
        "name": "Sasha Luccioni, PhD 🦋🌎✨🤗",
        "group": "founder",
        "role": "HuggingFace",
        "handle": "SashaMTL",
        "associated": "",
        "joinedDate": "Jan 2015",
        "bioTags": [],
        "bio": "Climate & AI Lead of @HuggingFace | Member of ClimateChangeAI | @TEDTalks speaker . (She/her/Dr/🦋)",
        "followers": 22589,
        "following": 3642,
        "location": "Tiohti:áke Montréal",
        "website": "",
        "imageUrl": "https://pbs.twimg.com/profile_images/1704612826797498368/OSpePMlj_400x400.jpg"
    },
    {
        "id": "alexgdimakis",
        "name": "Alex Dimakis",
        "group": "researcher",
        "role": "Professor at UT Austin",
        "handle": "AlexGDimakis",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Apr 2009",
        "bioTags": [
            "Founder",
            "Professor"
        ],
        "bio": "Professor, UC berkeley | Founder @bespokelabsai |",
        "followers": 22487,
        "following": 2467,
        "location": "Berkeley, CA",
        "website": "https://people.eecs.berkeley.edu/~alexdimakis/",
        "imageUrl": "https://pbs.twimg.com/profile_images/542926798338543617/KwlwoJRr_400x400.jpeg"
    },
    {
        "id": "simpsoka",
        "name": "Kath Korevec",
        "group": "company",
        "role": "CTO at Google",
        "handle": "simpsoka",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Jun 2007",
        "bioTags": [],
        "bio": "Director of Product at Google Labs. Code AI. Dive in ➡ @googlelabs, @stitchbygoogle, and @julesagent Previously @vercel, @github and @heroku",
        "followers": 22088,
        "following": 569,
        "location": "",
        "website": "https://kathy.pm/",
        "imageUrl": "https://pbs.twimg.com/profile_images/1994103983762493443/DQL9pgB7_400x400.jpg"
    },
    {
        "id": "kalomaze",
        "name": "kalomaze",
        "group": "researcher",
        "role": "Researcher",
        "handle": "kalomaze",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Oct 2020",
        "bioTags": [
            "Research"
        ],
        "bio": "ML researcher (@primeintellect), speculator • extremely silly jester",
        "followers": 22031,
        "following": 2490,
        "location": "",
        "website": "",
        "imageUrl": "https://pbs.twimg.com/profile_images/1998312107968995328/mVy3lsqU_400x400.jpg"
    },
    {
        "id": "nvidiagtc",
        "name": "NVIDIA GTC",
        "group": "company",
        "role": "NVIDIA GTC Conference",
        "handle": "NVIDIAGTC",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Sep 2020",
        "bioTags": [],
        "bio": "Register for the premier global AI conference. \n\nJoin us March 16-19 in San Jose, CA.",
        "followers": 21962,
        "following": 204,
        "location": "",
        "website": "https://www.nvidia.com/gtc/",
        "imageUrl": "https://pbs.twimg.com/profile_images/1861543899925565440/DGTkc_RB_400x400.jpg"
    },
    {
        "id": "risingsayak",
        "name": "Sayak Paul",
        "group": "founder",
        "role": "ML at Hugging Face 🤗",
        "handle": "RisingSayak",
        "associated": "",
        "verified": "blue",
        "joinedDate": "May 2012",
        "bioTags": [],
        "bio": "ML at Hugging Face 🤗",
        "followers": 21768,
        "following": 125,
        "location": "Earth",
        "website": "https://sayak.dev/",
        "imageUrl": "https://pbs.twimg.com/profile_images/1485518937404350464/DYrpvgPr_400x400.jpg"
    },
    {
        "id": "brentm_spacex",
        "name": "Brent Mayo",
        "group": "founder",
        "role": "SpaceX",
        "handle": "BrentM_SpaceX",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Mar 2022",
        "bioTags": [],
        "bio": "xAI Engineer/SpaceX Engineer",
        "followers": 21706,
        "following": 198,
        "location": "",
        "website": "",
        "imageUrl": "https://pbs.twimg.com/profile_images/1886989226807353344/1bbJImwi_400x400.jpg"
    },
    {
        "id": "adocomplete",
        "name": "Ado",
        "group": "founder",
        "role": "Community, Claude, Code at @AnthropicAI",
        "handle": "adocomplete",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Dec 2011",
        "bioTags": [],
        "bio": "Community, Claude, Code at @AnthropicAI",
        "followers": 21614,
        "following": 1433,
        "location": "Colorado",
        "website": "https://adocomplete.com",
        "imageUrl": "https://pbs.twimg.com/profile_images/2006485392326004737/EMUfrfo8_400x400.jpg"
    },
    {
        "id": "geoffreylitt",
        "name": "Geoffrey Litt",
        "group": "founder",
        "role": "",
        "handle": "geoffreylitt",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Nov 2010",
        "bioTags": [],
        "bio": "malleable software @NotionHQ / prev @inkandswitch, @MIT_CSAIL / 🇯🇵🇺🇸",
        "followers": 21588,
        "following": 1768,
        "location": "Washington, DC",
        "website": "https://www.geoffreylitt.com",
        "imageUrl": "https://pbs.twimg.com/profile_images/722626068293763072/4erM-SPN_400x400.jpg"
    },
    {
        "id": "koraykv",
        "name": "koray kavukcuoglu",
        "group": "researcher",
        "role": "VP Research at Google DeepMind",
        "handle": "koraykv",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Oct 2012",
        "bioTags": [],
        "bio": "Chief AI Architect, Google.\nCTO, Google DeepMind",
        "followers": 21543,
        "following": 102,
        "location": "",
        "website": "",
        "imageUrl": "https://pbs.twimg.com/profile_images/1952910128388423681/lMRfGHmB_400x400.jpg"
    },
    {
        "id": "nvidiacc",
        "name": "NVIDIA Customer Care",
        "group": "company",
        "role": "NVIDIA Customer Care",
        "handle": "nvidiacc",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Oct 2009",
        "bioTags": [],
        "bio": "Official Twitter account for NVIDIA Customer Care.  We are here to help answer your technical questions and provide troubleshooting assistance.",
        "followers": 20937,
        "following": 92,
        "location": "Santa Clara, California",
        "website": "http://www.nvidia.com/nvcc",
        "imageUrl": "https://pbs.twimg.com/profile_images/1580315776291987457/k_wGXsXP_400x400.jpg"
    },
    {
        "id": "hannawallach",
        "name": "Hanna Wallach (@hannawallach.bsky.social)",
        "group": "researcher",
        "role": "Senior Principal Researcher at Microsoft",
        "handle": "hannawallach",
        "associated": "",
        "joinedDate": "Sep 2012",
        "bioTags": [
            "Research",
            "Founder"
        ],
        "bio": "Microsoft Research NYC. Fairness, accountability & transparency in AI/ML. NeurIPS & ICML board member, WiML co-founder, sloth enthusiast. She/her.",
        "followers": 20795,
        "following": 906,
        "location": "Brooklyn, NY",
        "website": "http://dirichlet.net/",
        "imageUrl": "https://pbs.twimg.com/profile_images/2623320981/kinlr53ma1flkp9jerk4_400x400.jpeg"
    },
    {
        "id": "remicadene",
        "name": "Remi Cadene",
        "group": "founder",
        "role": "Co-founder & CEO",
        "handle": "RemiCadene",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Feb 2014",
        "bioTags": [
            "Founder"
        ],
        "bio": "Co-Founder and CEO at @UMA_Robots \n\nBuilding on top of @LeRobotHF",
        "followers": 20680,
        "following": 1027,
        "location": "Paris",
        "website": "http://remicadene.com",
        "imageUrl": "https://pbs.twimg.com/profile_images/1673900473190088704/ZKYHtzBs_400x400.jpg"
    },
    {
        "id": "maithra_raghu",
        "name": "Maithra Raghu",
        "group": "researcher",
        "role": "Research Scientist at Google",
        "handle": "maithra_raghu",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Jul 2017",
        "bioTags": [
            "Research",
            "Founder"
        ],
        "bio": "Cofounder and CEO @Samaya_AI. Formerly Research Scientist Google Brain (@GoogleAI), PhD in ML @Cornell.",
        "followers": 20365,
        "following": 525,
        "location": "",
        "website": "http://maithraraghu.com",
        "imageUrl": "https://pbs.twimg.com/profile_images/1705088879618121728/Q4HZKfqt_400x400.jpg"
    },
    {
        "id": "agarwl_",
        "name": "Rishabh Agarwal",
        "group": "company",
        "role": "Meta",
        "handle": "agarwl_",
        "associated": "",
        "verified": "blue",
        "joinedDate": "May 2016",
        "bioTags": [],
        "bio": "Reinforcement Learner @periodiclabs, Adjunct Prof at McGill. Ex Meta, DeepMind, Brain, @iitbombay. NeurIPS Best Paper, On-Policy Distillation",
        "followers": 20273,
        "following": 828,
        "location": "Montréal, Canada",
        "website": "https://agarwl.github.io",
        "imageUrl": "https://pbs.twimg.com/profile_images/1347289900916346886/khqL_K4W_400x400.jpg"
    },
    {
        "id": "xwang_lk",
        "name": "Xin Eric Wang",
        "group": "researcher",
        "role": "CTO & Professor",
        "handle": "xwang_lk",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Feb 2012",
        "bioTags": [
            "NLP",
            "Research",
            "Professor"
        ],
        "bio": "Professor @ucsantabarbara. Head of Research @SimularAI. Director @ucsbcrml. Co-Director @ucsbNLP. #Multimodal #AgenticAI. AI for Humanity.",
        "followers": 19843,
        "following": 1340,
        "location": "Santa Barbara, CA",
        "website": "https://eric-xw.github.io",
        "imageUrl": "https://pbs.twimg.com/profile_images/1998441772343828480/2TR-PwPq_400x400.jpg"
    },
    {
        "id": "heinrichkuttler",
        "name": "heiner",
        "group": "researcher",
        "role": "DeepMind",
        "handle": "HeinrichKuttler",
        "associated": "",
        "verified": "blue",
        "joinedDate": "May 2020",
        "bioTags": [],
        "bio": "Supercomputing lead @xAI. Previously: @InflectionAI, @AIatMeta, @DeepMind, @Google, @LMU_Muenchen, PhD math-ph. Opinions my own. (Can be yours for a small fee.)",
        "followers": 19775,
        "following": 1174,
        "location": "Palo Alto, CA",
        "website": "https://heiner.ai",
        "imageUrl": "https://pbs.twimg.com/profile_images/1455656517433233418/CcpIm10n_400x400.jpg"
    },
    {
        "id": "sammcallister",
        "name": "sam mcallister",
        "group": "founder",
        "role": "some people call me smca",
        "handle": "sammcallister",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Sep 2009",
        "bioTags": [],
        "bio": "some people call me smca. technical non technical member of staff at @anthropicai. prev at stripe. 🇮🇪",
        "followers": 19295,
        "following": 995,
        "location": "london",
        "website": "https://smca.io",
        "imageUrl": "https://pbs.twimg.com/profile_images/1989346628981886976/7W-5noSE_400x400.jpg"
    },
    {
        "id": "jfpuget",
        "name": "JFPuget 🇺🇦🇨🇦🇬🇱",
        "group": "researcher",
        "role": "Nvidia",
        "handle": "JFPuget",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Mar 2012",
        "bioTags": [],
        "bio": "Machine Learning at @Nvidia, 6x Kaggle Grandmaster CPMP. Arc Prize winner.  ML PhD. Ex ENS Ulm, ILOG CPLEX, IBM. Views are my own.",
        "followers": 19138,
        "following": 1473,
        "location": "France ",
        "website": "https://www.kaggle.com/cpmpml",
        "imageUrl": "https://pbs.twimg.com/profile_images/2065763037/JFP2_400x400.jpg"
    },
    {
        "id": "catherineols",
        "name": "Catherine Olsson",
        "group": "researcher",
        "role": "Safety Team at Anthropic",
        "handle": "catherineols",
        "associated": "",
        "verified": "blue",
        "joinedDate": "May 2010",
        "bioTags": [],
        "bio": "Hanging out with Claude, improving its behavior, and building tools to support that @AnthropicAI 😁\n\nprev: @open_phil @googlebrain @openai (@microcovid)",
        "followers": 18988,
        "following": 1442,
        "location": "San Francisco",
        "website": "",
        "imageUrl": "https://pbs.twimg.com/profile_images/1557826463281295360/7NIHBVko_400x400.jpg"
    },
    {
        "id": "aprilwright",
        "name": "April C Wright",
        "group": "founder",
        "role": "The Infosec Diplomat, Absurdist Polymath",
        "handle": "aprilwright",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Jul 2008",
        "bioTags": [],
        "bio": "The Infosec Diplomat, Absurdist Polymath. AI philosopher. Reality-Auditor. Hacker, Author @oreilly. Privacy, ethics, chaotic good",
        "followers": 18467,
        "following": 4685,
        "location": "@aprilwright@infosec.exchange",
        "website": "http://architectsecurity.org",
        "imageUrl": "https://pbs.twimg.com/profile_images/1145376020582846464/SMe_UIaH_400x400.jpg"
    },
    {
        "id": "nielsrogge",
        "name": "Niels Rogge",
        "group": "founder",
        "role": "huggingface",
        "handle": "NielsRogge",
        "associated": "",
        "joinedDate": "Apr 2010",
        "bioTags": [
            "Deep Learning"
        ],
        "bio": "ML Engineer @ML6team @huggingface. @KU_Leuven grad. General interest in machine learning, deep learning. Making AI more accessible for everyone!",
        "followers": 18424,
        "following": 721,
        "location": "Belgium",
        "website": "http://nielsrogge.github.io",
        "imageUrl": "https://pbs.twimg.com/profile_images/1828883496066060288/n0OUAXhz_400x400.jpg"
    },
    {
        "id": "nvidiadrive",
        "name": "NVIDIA DRIVE",
        "group": "company",
        "role": "NVIDIA Autonomous Vehicles",
        "handle": "NVIDIADRIVE",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Aug 2016",
        "bioTags": [],
        "bio": "Transforming transportation with #AI. Follow us for the latest in #autonomousvehicle development and news from our ecosystem.",
        "followers": 18358,
        "following": 199,
        "location": "Santa Clara, CA",
        "website": "https://nvda.ws/4nTbgMH",
        "imageUrl": "https://pbs.twimg.com/profile_images/1869449601054642176/bkq2Xk6f_400x400.jpg"
    },
    {
        "id": "_lewtun",
        "name": "Lewis Tunstall",
        "group": "founder",
        "role": "huggingface",
        "handle": "_lewtun",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Aug 2018",
        "bioTags": [],
        "bio": "🤠 post-training @huggingface",
        "followers": 18008,
        "following": 559,
        "location": "Berne, Switzerland",
        "website": "https://transformersbook.com/",
        "imageUrl": "https://pbs.twimg.com/profile_images/1097405296543236096/gS2C7RIq_400x400.jpg"
    },
    {
        "id": "nvidiakorea",
        "name": "NVIDIA Korea",
        "group": "company",
        "role": "NVIDIA Korea",
        "handle": "NVIDIAKorea",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Mar 2011",
        "bioTags": [],
        "bio": "인공지능(AI) 컴퓨팅 기업, NVIDIA의 한국 공식 트위터입니다. 게이밍 소식은 물론, 딥 러닝에서부터 인공지능, 자율주행 자동차 등 차세대 컴퓨팅에 관한 모든 소식들 받아가세요.",
        "followers": 17890,
        "following": 19221,
        "location": "Seoul",
        "website": "http://www.nvidia.co.kr",
        "imageUrl": "https://pbs.twimg.com/profile_images/1859409007964049408/YDtyXcL4_400x400.jpg"
    },
    {
        "id": "azaliamirh",
        "name": "Azalia Mirhoseini",
        "group": "researcher",
        "role": "Research Scientist at Google",
        "handle": "Azaliamirh",
        "associated": "",
        "verified": "blue",
        "joinedDate": "May 2013",
        "bioTags": [
            "Founder"
        ],
        "bio": "Founder @RicursiveAI, Asst. Prof. of CS at Stanford. Prev: DeepMind, Anthropic, Brain. Co-Creator of MoEs, AlphaChip, Test Time Scaling Laws.",
        "followers": 17797,
        "following": 590,
        "location": "Stanford, CA",
        "website": "https://scalingintelligence.stanford.edu/",
        "imageUrl": "https://pbs.twimg.com/profile_images/1143526877425889281/LlHltTnh_400x400.png"
    },
    {
        "id": "wimlworkshop",
        "name": "WiML",
        "group": "company",
        "role": "Women in ML Workshop",
        "handle": "WiMLworkshop",
        "associated": "",
        "joinedDate": "Nov 2014",
        "bioTags": [
            "Research"
        ],
        "bio": "Women in Machine Learning organization. Maintains a list of women in ML. Profiles the research of women in ML. Annual workshop and other events.",
        "followers": 17628,
        "following": 1146,
        "location": "",
        "website": "http://wimlworkshop.org",
        "imageUrl": "https://pbs.twimg.com/profile_images/676406388994809857/Eqh4OcKw_400x400.png"
    },
    {
        "id": "nvidiageforcepl",
        "name": "NVIDIA GeForce PL",
        "group": "company",
        "role": "NVIDIA Poland",
        "handle": "NVIDIAGeForcePL",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Dec 2009",
        "bioTags": [],
        "bio": "Przedstawiamy karty graficzne i laptopy z serii GeForce RTX 50, oparte na architekturze NVIDIA Blackwell i sztucznej inteligencji.",
        "followers": 17393,
        "following": 225,
        "location": "Polska",
        "website": "http://www.nvidia.pl",
        "imageUrl": "https://pbs.twimg.com/profile_images/2011091998577471488/Axqnq1IV_400x400.jpg"
    },
    {
        "id": "shamkakade6",
        "name": "Sham Kakade",
        "group": "researcher",
        "role": "Professor at Harvard",
        "handle": "ShamKakade6",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Dec 2018",
        "bioTags": [
            "Professor"
        ],
        "bio": "Harvard Professor. \nFull stack ML and AI. \nCo-director of  the Kempner Institute for the Study of Artificial and Natural Intelligence.",
        "followers": 17260,
        "following": 546,
        "location": "",
        "website": "https://shamulent.github.io",
        "imageUrl": "https://pbs.twimg.com/profile_images/1069108450716762112/8x6xXf4a_400x400.jpg"
    },
    {
        "id": "majmudaradam",
        "name": "adammaj",
        "group": "founder",
        "role": "openai",
        "handle": "MajmudarAdam",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Oct 2019",
        "bioTags": [
            "Research"
        ],
        "bio": "research @openai // on leave @penn",
        "followers": 17243,
        "following": 272,
        "location": "SF",
        "website": "http://adammaj.com",
        "imageUrl": "https://pbs.twimg.com/profile_images/1794879458375352320/CE7oX1gI_400x400.jpg"
    },
    {
        "id": "realmadhuguru",
        "name": "Madhu Guru",
        "group": "founder",
        "role": "Google",
        "handle": "realmadhuguru",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Nov 2021",
        "bioTags": [],
        "bio": "Product Leader at Google - Gemini, Veo, Nano Banana. All opinions mine.",
        "followers": 15876,
        "following": 205,
        "location": "Silicon Valley",
        "website": "http://madhuguru.substack.com",
        "imageUrl": "https://pbs.twimg.com/profile_images/1487465096242737157/AL-7r3o0_400x400.jpg"
    },
    {
        "id": "lm_zheng",
        "name": "Lianmin Zheng",
        "group": "founder",
        "role": "Co-founder",
        "handle": "lm_zheng",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Jan 2018",
        "bioTags": [
            "Founder"
        ],
        "bio": "Member of technical staff @xAI | Prev: Ph.D. @UCBerkeley, Co-founder @lmsysorg",
        "followers": 15563,
        "following": 646,
        "location": "Bay Area, California",
        "website": "http://lmzheng.net/",
        "imageUrl": "https://pbs.twimg.com/profile_images/1107058309994024960/kUJgsrqM_400x400.jpg"
    },
    {
        "id": "douwekiela",
        "name": "Douwe Kiela",
        "group": "researcher",
        "role": "Professor at Cambridge",
        "handle": "douwekiela",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Jul 2013",
        "bioTags": [],
        "bio": "@ContextualAI CEO, @Stanford Adjunct Prof.",
        "followers": 14921,
        "following": 447,
        "location": "Bay Area",
        "website": "",
        "imageUrl": "https://pbs.twimg.com/profile_images/1674853389702922240/RLHeLihs_400x400.jpg"
    },
    {
        "id": "jerrod_lew",
        "name": "Jerrod Lew",
        "group": "media",
        "role": "Artist, creator and educator",
        "handle": "jerrod_lew",
        "associated": "",
        "verified": "blue",
        "joinedDate": "May 2023",
        "bioTags": [],
        "bio": "Artist, creator and educator.\nTeaching you to tell stories without limits. \nConsider subscribing to my newsletter: https://t.co/cZx6ICaXDN",
        "followers": 14872,
        "following": 2764,
        "location": "Australia",
        "website": "https://jerrodlew.com/",
        "imageUrl": "https://pbs.twimg.com/profile_images/1992346776167157760/muDTFMjy_400x400.jpg"
    },
    {
        "id": "zjasper",
        "name": "Jasper",
        "group": "company",
        "role": "Co-founder & CEO",
        "handle": "zjasper",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Nov 2018",
        "bioTags": [
            "Founder"
        ],
        "bio": "Co-founder and CEO @Hyperbolic_Labs. ex-@avax & ex-@citsecurities. Finished Math PhD in 2yrs @UCBerkeley. Math Olympiad Gold Medalist. Highest honor @PKU1898",
        "followers": 14866,
        "following": 1727,
        "location": "California, USA",
        "website": "http://hyperbolic.ai",
        "imageUrl": "https://pbs.twimg.com/profile_images/1929721010049503232/dCqfpEMX_400x400.jpg"
    },
    {
        "id": "dileeplearning",
        "name": "Dileep George",
        "group": "researcher",
        "role": "AI Researcher",
        "handle": "dileeplearning",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Jun 2017",
        "bioTags": [
            "AGI",
            "Research",
            "Founder"
        ],
        "bio": "AGI research @DeepMind. Ex cofounder & CTO @vicariousai (acqd by Alphabet) and @Numenta. Triply EE (BTech IIT-Mumbai, MS&PhD Stanford). #AGIComics",
        "followers": 14834,
        "following": 1409,
        "location": "San Francisco, CA",
        "website": "http://dileeplearning.com",
        "imageUrl": "https://pbs.twimg.com/profile_images/1039010552704450561/eq2xZkut_400x400.jpg"
    },
    {
        "id": "nils_reimers",
        "name": "Nils Reimers",
        "group": "founder",
        "role": "Cohere",
        "handle": "Nils_Reimers",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Aug 2016",
        "bioTags": [],
        "bio": "VP AI Search @Cohere | ex-huggingface | Creator of SBERT (https://t.co/MKKOMfuQ4C)",
        "followers": 14747,
        "following": 519,
        "location": "",
        "website": "https://www.nils-reimers.de",
        "imageUrl": "https://pbs.twimg.com/profile_images/1338879379552743424/WxlU4lqL_400x400.jpg"
    },
    {
        "id": "avdnoord",
        "name": "Aäron van den Oord",
        "group": "researcher",
        "role": "Research Scientist at Google DeepMind",
        "handle": "avdnoord",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Jan 2013",
        "bioTags": [
            "Research"
        ],
        "bio": "Lead of the GenMedia team working on Veo, Imagen, Genie, Nano Banana, ... \n\nResearch Scientist @ DeepMind",
        "followers": 14528,
        "following": 264,
        "location": "London, England",
        "website": "https://avdnoord.github.io/homepage",
        "imageUrl": "https://pbs.twimg.com/profile_images/774282812576894976/IZUQ0T4s_400x400.jpg"
    },
    {
        "id": "pashmerepat",
        "name": "pash",
        "group": "founder",
        "role": "openai",
        "handle": "pashmerepat",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Oct 2015",
        "bioTags": [],
        "bio": "codex @openai | prev head of ai @cline | @meta knowledge graph | creator of vault // @usc alum",
        "followers": 14407,
        "following": 597,
        "location": "sf",
        "website": "",
        "imageUrl": "https://pbs.twimg.com/profile_images/2013776094382694400/nNX1AW2l_400x400.jpg"
    },
    {
        "id": "hochreitersepp",
        "name": "Sepp Hochreiter",
        "group": "researcher",
        "role": "LSTM Co-inventor",
        "handle": "HochreiterSepp",
        "associated": "",
        "joinedDate": "Nov 2021",
        "bioTags": [
            "Deep Learning"
        ],
        "bio": "Pioneer of Deep Learning and known for vanishing gradient and the LSTM.",
        "followers": 14347,
        "following": 375,
        "location": "",
        "website": "https://www.nx-ai.com/",
        "imageUrl": "https://pbs.twimg.com/profile_images/1463121437196267522/lT6EWJED_400x400.jpg"
    },
    {
        "id": "rayhotate",
        "name": "Ray Hotate 保立怜",
        "group": "researcher",
        "role": "Stanford",
        "handle": "rayhotate",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Oct 2017",
        "bioTags": [
            "Research"
        ],
        "bio": "Member of Technical Staff @xAI / CS(AI)+Math @Stanford @StanfordAILab / prev PE @GoldmanSachs, Quant Research @ Cubist(Point72) / 東大理三, 開成 '22 🇯🇵🇺🇸",
        "followers": 14075,
        "following": 2095,
        "location": "Stanford, California, USA",
        "website": "https://soundcloud.com/user-211285881",
        "imageUrl": "https://pbs.twimg.com/profile_images/1945740914414018561/7gxkDios_400x400.jpg"
    },
    {
        "id": "lerobothf",
        "name": "LeRobot",
        "group": "company",
        "role": "Robotics Platform",
        "handle": "LeRobotHF",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Jul 2024",
        "bioTags": [
            "Robotics"
        ],
        "bio": "~ Lowering the barrier to entry for robotics ~\nCrafted with care by @HuggingFace 🤗\nJoin our discord: https://t.co/Sx2jdT0jeF",
        "followers": 13975,
        "following": 19,
        "location": "Worldwide",
        "website": "http://github.com/huggingface/lerobot",
        "imageUrl": "https://pbs.twimg.com/profile_images/1811131318534918144/Dk2D_okm_400x400.jpg"
    },
    {
        "id": "andy_l_jones",
        "name": "andy jones",
        "group": "founder",
        "role": "anthropic",
        "handle": "andy_l_jones",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Oct 2012",
        "bioTags": [
            "Research"
        ],
        "bio": "engineering & research at anthropic.\n\ni don't check twitter DMs. email me!",
        "followers": 13857,
        "following": 350,
        "location": "SF",
        "website": "http://www.andyljones.com",
        "imageUrl": "https://pbs.twimg.com/profile_images/1443344982346063872/shqMpAL-_400x400.jpg"
    },
    {
        "id": "qhwang3",
        "name": "Qian Huang",
        "group": "researcher",
        "role": "",
        "handle": "qhwang3",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Mar 2017",
        "bioTags": [],
        "bio": "prev @xai | CS PhD student @StanfordAILab (on leave)",
        "followers": 13818,
        "following": 331,
        "location": "Palo Alto, CA",
        "website": "https://q-hwang.github.io/",
        "imageUrl": "https://pbs.twimg.com/profile_images/1337167619816710149/Ydk4Ti_M_400x400.jpg"
    },
    {
        "id": "koylanai",
        "name": "Muratcan Koylan",
        "group": "founder",
        "role": "Context Engineer, Research Team @ https://t",
        "handle": "koylanai",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Dec 2022",
        "bioTags": [
            "Research"
        ],
        "bio": "Context Engineer, Research Team @ https://t.co/ytKLwdts2F \n\n- ex AI Agent Systems Manager 99Ravens\n- HCI & Marketing background\n- Designing agent personas, autonomous workers",
        "followers": 13778,
        "following": 3853,
        "location": "Toronto, Canada 🇨🇦",
        "website": "https://muratcankoylan.com/",
        "imageUrl": "https://pbs.twimg.com/profile_images/2017468785473548288/43nF1d1X_400x400.jpg"
    },
    {
        "id": "josh_tobin_",
        "name": "Josh Tobin",
        "group": "founder",
        "role": "openai",
        "handle": "josh_tobin_",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Jul 2011",
        "bioTags": [],
        "bio": "agents @openai",
        "followers": 13750,
        "following": 1200,
        "location": "San Francisco, CA",
        "website": "",
        "imageUrl": "https://pbs.twimg.com/profile_images/1413047908853714945/JcIRsBfy_400x400.jpg"
    },
    {
        "id": "nvidiahealth",
        "name": "NVIDIA Healthcare",
        "group": "company",
        "role": "NVIDIA Healthcare",
        "handle": "NVIDIAHealth",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Oct 2020",
        "bioTags": [
            "Research"
        ],
        "bio": "The official handle for #NVIDIAHealthcare. Helping the scientific and developer community advance research, diagnostics, and patient care with #AI.",
        "followers": 13622,
        "following": 147,
        "location": "",
        "website": "",
        "imageUrl": "https://pbs.twimg.com/profile_images/1864479660530438144/NJZZqouX_400x400.jpg"
    },
    {
        "id": "anshitasaini_",
        "name": "Anshita Saini",
        "group": "founder",
        "role": "openai",
        "handle": "anshitasaini_",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Feb 2023",
        "bioTags": [
            "GPT"
        ],
        "bio": "chatgpt growth eng @openai",
        "followers": 13559,
        "following": 422,
        "location": "san francisco",
        "website": "https://www.linkedin.com/in/anshita-saini/",
        "imageUrl": "https://pbs.twimg.com/profile_images/1876046732972425216/74rHzKjF_400x400.jpg"
    },
    {
        "id": "pirroh",
        "name": "Michele Catasta",
        "group": "founder",
        "role": "President & Head of AI @Replit",
        "handle": "pirroh",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Feb 2009",
        "bioTags": [],
        "bio": "President & Head of AI @Replit | 🇮🇹 @🇺🇸",
        "followers": 13286,
        "following": 246,
        "location": "SF Bay Area, CA",
        "website": "https://pirroh.fyi",
        "imageUrl": "https://pbs.twimg.com/profile_images/1921747874922045440/wAkYCjVY_400x400.jpg"
    },
    {
        "id": "ancadianadragan",
        "name": "Anca Dragan",
        "group": "researcher",
        "role": "Professor at UC Berkeley",
        "handle": "ancadianadragan",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Mar 2018",
        "bioTags": [
            "AI Safety",
            "Alignment",
            "Professor"
        ],
        "bio": "post training co-lead at Google DeepMind, focusing on safety, alignment, post training capabilities • associate professor at UC Berkeley EECS",
        "followers": 13227,
        "following": 184,
        "location": "San Francisco, CA",
        "website": "http://www.ancadragan.com",
        "imageUrl": "https://pbs.twimg.com/profile_images/1026125638149664769/mKpHuJIA_400x400.jpg"
    },
    {
        "id": "kalinowski007",
        "name": "Caitlin Kalinowski",
        "group": "founder",
        "role": "OpenAI",
        "handle": "kalinowski007",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Aug 2012",
        "bioTags": [
            "Robotics"
        ],
        "bio": "Robotics @ OpenAI. Axon Board. Classical liberal: rule of law, pro-innovation. 🇺🇸",
        "followers": 13114,
        "following": 1399,
        "location": "",
        "website": "https://openai.com/careers/",
        "imageUrl": "https://pbs.twimg.com/profile_images/1938988827353255936/tVnKoAVN_400x400.jpg"
    },
    {
        "id": "skildai",
        "name": "Skild AI",
        "group": "company",
        "role": "Robotics AI",
        "handle": "SkildAI",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Jun 2023",
        "bioTags": [],
        "bio": "Any robot. Any task. One brain.\n\nHelp build general-purpose robotic intelligence at https://t.co/UKh2kQYSqt",
        "followers": 13022,
        "following": 0,
        "location": "USA",
        "website": "https://www.skild.ai/",
        "imageUrl": "https://pbs.twimg.com/profile_images/1810545385183526912/YWRcgcha_400x400.jpg"
    },
    {
        "id": "adinayakup",
        "name": "Adina Yakup",
        "group": "founder",
        "role": "huggingface",
        "handle": "AdinaYakup",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Apr 2023",
        "bioTags": [],
        "bio": "@huggingface 🤗 |  opinions are my own\n🔍  Chinese ML community",
        "followers": 12685,
        "following": 876,
        "location": "",
        "website": "http://huggingface.co/AdinaY",
        "imageUrl": "https://pbs.twimg.com/profile_images/1974110789146718209/j2fGFMxT_400x400.jpg"
    },
    {
        "id": "dspyoss",
        "name": "DSPy",
        "group": "company",
        "role": "LLM Programming Framework",
        "handle": "DSPyOSS",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Apr 2025",
        "bioTags": [
            "LLMs"
        ],
        "bio": "An open-source declarative framework for building modular AI software. Programming—not prompting—LLMs via higher-level abstractions & optimizers.",
        "followers": 12679,
        "following": 58,
        "location": "",
        "website": "https://dspy.ai",
        "imageUrl": "https://pbs.twimg.com/profile_images/1915049493319553024/2sK1w7YZ_400x400.jpg"
    },
    {
        "id": "tulseedoshi",
        "name": "Tulsee Doshi",
        "group": "founder",
        "role": "CTO at Stanford",
        "handle": "tulseedoshi",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Jun 2012",
        "bioTags": [],
        "bio": "Sr. Director & Product Lead, Gemini Models @GoogleDeepmind. @Stanford CS. Opinions my own.",
        "followers": 12493,
        "following": 492,
        "location": "",
        "website": "",
        "imageUrl": "https://pbs.twimg.com/profile_images/1234374883284377600/MN4p28RV_400x400.jpg"
    },
    {
        "id": "felixhill84",
        "name": "Felix Hill",
        "group": "researcher",
        "role": "Research Scientist at Google DeepMind",
        "handle": "FelixHill84",
        "associated": "",
        "joinedDate": "Jul 2010",
        "bioTags": [
            "Research"
        ],
        "bio": "Research Scientist, Deepmind\n\nI try to think hard about everything I tweet, esp on 90s football and 80s music\n\nNone of my opinions are really someone else's",
        "followers": 12389,
        "following": 740,
        "location": "London, England",
        "website": "https://fh295.github.io/",
        "imageUrl": "https://pbs.twimg.com/profile_images/1847905415264194561/l5r92XJk_400x400.jpg"
    },
    {
        "id": "guohao_li",
        "name": "Guohao Li 🐫",
        "group": "founder",
        "role": "Oxford",
        "handle": "guohao_li",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Aug 2018",
        "bioTags": [],
        "bio": "@Eigent_AI / @CamelAIOrg. Finding the Scaling Laws of Agents. Prev Oxford, KAUST, ETHz, Intel, Kumo.",
        "followers": 12084,
        "following": 2222,
        "location": "",
        "website": "https://www.eigent.ai/",
        "imageUrl": "https://pbs.twimg.com/profile_images/1237407213502816256/P2FgBNP1_400x400.jpg"
    },
    {
        "id": "yanndubs",
        "name": "Yann Dubois",
        "group": "company",
        "role": "OpenAI",
        "handle": "yanndubs",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Aug 2017",
        "bioTags": [],
        "bio": "Posttraining @OpenAI |  PhD @StanfordAILab",
        "followers": 11968,
        "following": 1295,
        "location": "San Francisco",
        "website": "https://yanndubs.github.io/",
        "imageUrl": "https://pbs.twimg.com/profile_images/1953964095897817088/OcK0_8hf_400x400.jpg"
    },
    {
        "id": "imhaotian",
        "name": "Haotian Liu",
        "group": "founder",
        "role": "building intelligence @xAI",
        "handle": "imhaotian",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Dec 2013",
        "bioTags": [
            "AGI",
            "Research"
        ],
        "bio": "building intelligence @xAI. @grok omni/imagine/vision. creator of #LLaVA, prev. @MSFTResearch @UWMadison",
        "followers": 11852,
        "following": 523,
        "location": "Cupertino, CA",
        "website": "https://hliu.cc/",
        "imageUrl": "https://pbs.twimg.com/profile_images/1553103157328318464/yMl-EUCs_400x400.jpg"
    },
    {
        "id": "nvidiaaijp",
        "name": "NVIDIA AI Japan",
        "group": "company",
        "role": "NVIDIA AI Japan",
        "handle": "NVIDIAAIJP",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Nov 2016",
        "bioTags": [],
        "bio": "エヌビディア ジャパンの AI (人工知能) に関するオフィシャルアカウントです。\n\n\n永久に解けないと思われていた問題や、解けるのは当分先だと思われていた問題が、GPU ディープラーニングによって毎日のように解決されています。",
        "followers": 11812,
        "following": 166,
        "location": "東京都港区赤坂",
        "website": "http://www.nvidia.co.jp/object/deep-learning-jp.html",
        "imageUrl": "https://pbs.twimg.com/profile_images/1862300808299040768/CRGUYXSf_400x400.jpg"
    },
    {
        "id": "itstkai",
        "name": "Tristan",
        "group": "researcher",
        "role": "Researcher at OpenAI",
        "handle": "ItsTKai",
        "associated": "",
        "joinedDate": "Apr 2025",
        "bioTags": [
            "Research"
        ],
        "bio": "Researcher @OpenAI - Opinions are my own.",
        "followers": 11769,
        "following": 1508,
        "location": "",
        "website": "",
        "imageUrl": "https://pbs.twimg.com/profile_images/1911405669472743424/ixRAFv3N_400x400.jpg"
    },
    {
        "id": "_nateraw",
        "name": "Nate Raw",
        "group": "founder",
        "role": "huggingface",
        "handle": "_nateraw",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Jan 2017",
        "bioTags": [],
        "bio": "machine learning hacker @splice. previously @huggingface @lightningai",
        "followers": 9526,
        "following": 1603,
        "location": "Austin, TX",
        "website": "https://github.com/nateraw",
        "imageUrl": "https://pbs.twimg.com/profile_images/1850951688040976384/7jhlOVvq_400x400.jpg"
    },
    {
        "id": "khipu_ai",
        "name": "khipu.ai",
        "group": "company",
        "role": "Latin American AI Community",
        "handle": "Khipu_AI",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Dec 2018",
        "bioTags": [],
        "bio": "Strengthening the artificial intelligence and machine learning communities in Latin America.",
        "followers": 6599,
        "following": 86,
        "location": "Latin America",
        "website": "http://khipu.ai",
        "imageUrl": "https://pbs.twimg.com/profile_images/1551644240236761097/aWTNjGYU_400x400.jpg"
    },
    {
        "id": "anujsaharan_",
        "name": "Anuj Saharan",
        "group": "founder",
        "role": "openai",
        "handle": "anujsaharan_",
        "associated": "",
        "verified": "blue",
        "joinedDate": "Mar 2010",
        "bioTags": [],
        "bio": "orange vanilla coke enthusiast; superduperintelligence infra @openai",
        "followers": 3442,
        "following": 281,
        "location": "seattle",
        "website": "",
        "imageUrl": "https://pbs.twimg.com/profile_images/1886036352564879360/6ACJNkIC_400x400.jpg"
    }
],
  links: [
    {
        "source": "openai",
        "target": "openainewsroom"
    },
    {
        "source": "openai",
        "target": "openaidevs"
    },
    {
        "source": "openai",
        "target": "chatgptapp"
    },
    {
        "source": "lexfridman",
        "target": "karpathy"
    },
    {
        "source": "lexfridman",
        "target": "ylecun"
    },
    {
        "source": "lexfridman",
        "target": "thsottiaux"
    },
    {
        "source": "lexfridman",
        "target": "moltbook"
    },
    {
        "source": "lexfridman",
        "target": "bcherny"
    },
    {
        "source": "lexfridman",
        "target": "openclaw"
    },
    {
        "source": "lexfridman",
        "target": "steipete"
    },
    {
        "source": "lexfridman",
        "target": "chrmanning"
    },
    {
        "source": "lexfridman",
        "target": "lateinteraction"
    },
    {
        "source": "lexfridman",
        "target": "askalphaxiv"
    },
    {
        "source": "lexfridman",
        "target": "mmbronstein"
    },
    {
        "source": "lexfridman",
        "target": "svlevine"
    },
    {
        "source": "lexfridman",
        "target": "neuripsconf"
    },
    {
        "source": "sama",
        "target": "karpathy"
    },
    {
        "source": "sama",
        "target": "gdb"
    },
    {
        "source": "sama",
        "target": "austen"
    },
    {
        "source": "sama",
        "target": "levie"
    },
    {
        "source": "sama",
        "target": "alexandr_wang"
    },
    {
        "source": "sama",
        "target": "emostaque"
    },
    {
        "source": "sama",
        "target": "esyudkowsky"
    },
    {
        "source": "sama",
        "target": "palmerluckey"
    },
    {
        "source": "sama",
        "target": "pashmerepat"
    },
    {
        "source": "sama",
        "target": "boazbaraktcs"
    },
    {
        "source": "sama",
        "target": "merettm"
    },
    {
        "source": "sama",
        "target": "thsottiaux"
    },
    {
        "source": "sama",
        "target": "embirico"
    },
    {
        "source": "sama",
        "target": "yanndubs"
    },
    {
        "source": "sama",
        "target": "anshitasaini_"
    },
    {
        "source": "sama",
        "target": "yacinemtb"
    },
    {
        "source": "sama",
        "target": "itstkai"
    },
    {
        "source": "sama",
        "target": "chatgpt21"
    },
    {
        "source": "sama",
        "target": "_mohansolo"
    },
    {
        "source": "sama",
        "target": "majmudaradam"
    },
    {
        "source": "sama",
        "target": "anujsaharan_"
    },
    {
        "source": "sama",
        "target": "timzaman"
    },
    {
        "source": "sama",
        "target": "deryatr_"
    },
    {
        "source": "sama",
        "target": "khoomeik"
    },
    {
        "source": "satyanadella",
        "target": "bradsmi"
    },
    {
        "source": "satyanadella",
        "target": "surface"
    },
    {
        "source": "satyanadella",
        "target": "jeffteper"
    },
    {
        "source": "satyanadella",
        "target": "azure"
    },
    {
        "source": "satyanadella",
        "target": "jamesmontemagno"
    },
    {
        "source": "satyanadella",
        "target": "gdb"
    },
    {
        "source": "satyanadella",
        "target": "code"
    },
    {
        "source": "satyanadella",
        "target": "clementdelangue"
    },
    {
        "source": "satyanadella",
        "target": "matthewberman"
    },
    {
        "source": "satyanadella",
        "target": "mustafasuleyman"
    },
    {
        "source": "satyanadella",
        "target": "sebastienbubeck"
    },
    {
        "source": "satyanadella",
        "target": "mspartner"
    },
    {
        "source": "nvidiageforce",
        "target": "nvidianewsroom"
    },
    {
        "source": "nvidiageforce",
        "target": "nvidia_ai_pc"
    },
    {
        "source": "nvidiageforce",
        "target": "nvidiaomniverse"
    },
    {
        "source": "nvidiageforce",
        "target": "nvidiageforcejp"
    },
    {
        "source": "levie",
        "target": "alexandr_wang"
    },
    {
        "source": "levie",
        "target": "darioamodei"
    },
    {
        "source": "levie",
        "target": "suchenzang"
    },
    {
        "source": "levie",
        "target": "claudeai"
    },
    {
        "source": "levie",
        "target": "bcherny"
    },
    {
        "source": "levie",
        "target": "thsottiaux"
    },
    {
        "source": "levie",
        "target": "realmadhuguru"
    },
    {
        "source": "nvidia",
        "target": "nvidiageforce"
    },
    {
        "source": "nvidia",
        "target": "nvidiagfn"
    },
    {
        "source": "nvidia",
        "target": "nvidiageforceuk"
    },
    {
        "source": "nvidia",
        "target": "nvidiastudio"
    },
    {
        "source": "nvidia",
        "target": "nvidiageforcede"
    },
    {
        "source": "nvidia",
        "target": "nvidiaanz"
    },
    {
        "source": "nvidia",
        "target": "nvidiageforcetr"
    },
    {
        "source": "nvidia",
        "target": "nvidianewsroom"
    },
    {
        "source": "nvidia",
        "target": "nvidia_ai_pc"
    },
    {
        "source": "nvidia",
        "target": "nvidiashield"
    },
    {
        "source": "nvidia",
        "target": "nvidiageforcejp"
    },
    {
        "source": "nvidia",
        "target": "nvidiaaijp"
    },
    {
        "source": "nvidia",
        "target": "nvidiaomniverse"
    },
    {
        "source": "nvidia",
        "target": "nvidiahealth"
    },
    {
        "source": "nvidia",
        "target": "nvidiagtc"
    },
    {
        "source": "nvidia",
        "target": "nvidianetworkng"
    },
    {
        "source": "nvidia",
        "target": "nvidiaaidev"
    },
    {
        "source": "nvidia",
        "target": "nvidiadrive"
    },
    {
        "source": "nvidia",
        "target": "nvidiaai"
    },
    {
        "source": "nvidia",
        "target": "nvidiageforceme"
    },
    {
        "source": "nvidia",
        "target": "nvidiageforcefr"
    },
    {
        "source": "nvidia",
        "target": "nvidiageforcela"
    },
    {
        "source": "nvidia",
        "target": "nvidiakorea"
    },
    {
        "source": "nvidia",
        "target": "nvidiageforcees"
    },
    {
        "source": "nvidia",
        "target": "nvidiageforcepl"
    },
    {
        "source": "nvidia",
        "target": "nvidiajapan"
    },
    {
        "source": "nvidia",
        "target": "nvidiacc"
    },
    {
        "source": "nvidia",
        "target": "nvidiaworkstatn"
    },
    {
        "source": "nvidia",
        "target": "nvidiahpcdev"
    },
    {
        "source": "nvidia",
        "target": "nvidiadc"
    },
    {
        "source": "nvidia",
        "target": "nvidiarobotics"
    },
    {
        "source": "nvidia",
        "target": "nvidiageforcebr"
    },
    {
        "source": "nvidia",
        "target": "nvidiagamedev"
    },
    {
        "source": "googleai",
        "target": "googledeepmind"
    },
    {
        "source": "googleai",
        "target": "tensorflow"
    },
    {
        "source": "googleai",
        "target": "jeffdean"
    },
    {
        "source": "googleai",
        "target": "oriolvinyalsml"
    },
    {
        "source": "googleai",
        "target": "demishassabis"
    },
    {
        "source": "googleai",
        "target": "googleaistudio"
    },
    {
        "source": "googleai",
        "target": "officiallogank"
    },
    {
        "source": "googleai",
        "target": "tulseedoshi"
    },
    {
        "source": "googleai",
        "target": "joshwoodward"
    },
    {
        "source": "googleai",
        "target": "googlelabs"
    },
    {
        "source": "googleai",
        "target": "googleaidevs"
    },
    {
        "source": "googleai",
        "target": "geminiapp"
    },
    {
        "source": "xai",
        "target": "rayhotate"
    },
    {
        "source": "xai",
        "target": "brentm_spacex"
    },
    {
        "source": "xai",
        "target": "heinrichkuttler"
    },
    {
        "source": "xai",
        "target": "lm_zheng"
    },
    {
        "source": "xai",
        "target": "qhwang3"
    },
    {
        "source": "xai",
        "target": "imhaotian"
    },
    {
        "source": "xai",
        "target": "ericzelikman"
    },
    {
        "source": "xai",
        "target": "hendrycks"
    },
    {
        "source": "xai",
        "target": "tobyphln"
    },
    {
        "source": "xai",
        "target": "chrszegedy"
    },
    {
        "source": "xai",
        "target": "yuhu_ai_"
    },
    {
        "source": "xai",
        "target": "ibab"
    },
    {
        "source": "karpathy",
        "target": "ylecun"
    },
    {
        "source": "karpathy",
        "target": "fchollet"
    },
    {
        "source": "karpathy",
        "target": "hardmaru"
    },
    {
        "source": "karpathy",
        "target": "_akhaliq"
    },
    {
        "source": "karpathy",
        "target": "rasbt"
    },
    {
        "source": "karpathy",
        "target": "soumithchintala"
    },
    {
        "source": "karpathy",
        "target": "pytorch"
    },
    {
        "source": "karpathy",
        "target": "jeremyphoward"
    },
    {
        "source": "karpathy",
        "target": "ilyasut"
    },
    {
        "source": "karpathy",
        "target": "arankomatsuzaki"
    },
    {
        "source": "karpathy",
        "target": "giffmana"
    },
    {
        "source": "karpathy",
        "target": "woj_zaremba"
    },
    {
        "source": "karpathy",
        "target": "huggingface"
    },
    {
        "source": "karpathy",
        "target": "iamtrask"
    },
    {
        "source": "karpathy",
        "target": "jeffdean"
    },
    {
        "source": "karpathy",
        "target": "sirbayes"
    },
    {
        "source": "karpathy",
        "target": "moltbook"
    },
    {
        "source": "karpathy",
        "target": "kalomaze"
    },
    {
        "source": "karpathy",
        "target": "mitchellh"
    },
    {
        "source": "karpathy",
        "target": "steipete"
    },
    {
        "source": "karpathy",
        "target": "adocomplete"
    },
    {
        "source": "karpathy",
        "target": "bcherny"
    },
    {
        "source": "karpathy",
        "target": "nanobanana"
    },
    {
        "source": "karpathy",
        "target": "shamkakade6"
    },
    {
        "source": "karpathy",
        "target": "billpeeb"
    },
    {
        "source": "karpathy",
        "target": "alexgdimakis"
    },
    {
        "source": "karpathy",
        "target": "nickcammarata"
    },
    {
        "source": "karpathy",
        "target": "agarwl_"
    },
    {
        "source": "karpathy",
        "target": "askalphaxiv"
    },
    {
        "source": "andrewyng",
        "target": "ylecun"
    },
    {
        "source": "andrewyng",
        "target": "fchollet"
    },
    {
        "source": "andrewyng",
        "target": "hardmaru"
    },
    {
        "source": "andrewyng",
        "target": "rasbt"
    },
    {
        "source": "andrewyng",
        "target": "_akhaliq"
    },
    {
        "source": "andrewyng",
        "target": "omarsar0"
    },
    {
        "source": "andrewyng",
        "target": "pytorch"
    },
    {
        "source": "andrewyng",
        "target": "soumithchintala"
    },
    {
        "source": "andrewyng",
        "target": "jeremyphoward"
    },
    {
        "source": "andrewyng",
        "target": "arankomatsuzaki"
    },
    {
        "source": "andrewyng",
        "target": "richardsocher"
    },
    {
        "source": "andrewyng",
        "target": "iamtrask"
    },
    {
        "source": "andrewyng",
        "target": "huggingface"
    },
    {
        "source": "andrewyng",
        "target": "tensorflow"
    },
    {
        "source": "andrewyng",
        "target": "jeffdean"
    },
    {
        "source": "andrewyng",
        "target": "neuripsconf"
    },
    {
        "source": "andrewyng",
        "target": "moltbook"
    },
    {
        "source": "andrewyng",
        "target": "thsottiaux"
    },
    {
        "source": "andrewyng",
        "target": "claudeai"
    },
    {
        "source": "andrewyng",
        "target": "yuhu_ai_"
    },
    {
        "source": "andrewyng",
        "target": "bcherny"
    },
    {
        "source": "googledeepmind",
        "target": "ylecun"
    },
    {
        "source": "googledeepmind",
        "target": "andrewyng"
    },
    {
        "source": "googledeepmind",
        "target": "googleai"
    },
    {
        "source": "googledeepmind",
        "target": "demishassabis"
    },
    {
        "source": "googledeepmind",
        "target": "neuripsconf"
    },
    {
        "source": "googledeepmind",
        "target": "tensorflow"
    },
    {
        "source": "googledeepmind",
        "target": "oriolvinyalsml"
    },
    {
        "source": "googledeepmind",
        "target": "petarv_93"
    },
    {
        "source": "googledeepmind",
        "target": "sedielem"
    },
    {
        "source": "googledeepmind",
        "target": "gordic_aleksa"
    },
    {
        "source": "googledeepmind",
        "target": "felixhill84"
    },
    {
        "source": "googledeepmind",
        "target": "egrefen"
    },
    {
        "source": "googledeepmind",
        "target": "nandodf"
    },
    {
        "source": "googledeepmind",
        "target": "mustafasuleyman"
    },
    {
        "source": "googledeepmind",
        "target": "tulseedoshi"
    },
    {
        "source": "googledeepmind",
        "target": "officiallogank"
    },
    {
        "source": "googledeepmind",
        "target": "joshwoodward"
    },
    {
        "source": "googledeepmind",
        "target": "miles_brundage"
    },
    {
        "source": "googledeepmind",
        "target": "googleaidevs"
    },
    {
        "source": "googledeepmind",
        "target": "geminiapp"
    },
    {
        "source": "googledeepmind",
        "target": "googleuk"
    },
    {
        "source": "googledeepmind",
        "target": "googlelabs"
    },
    {
        "source": "googledeepmind",
        "target": "zoubinghahrama1"
    },
    {
        "source": "googledeepmind",
        "target": "mcgillu"
    },
    {
        "source": "googledeepmind",
        "target": "khipu_ai"
    },
    {
        "source": "azure",
        "target": "satyanadella"
    },
    {
        "source": "stevenbjohnson",
        "target": "amandaaskell"
    },
    {
        "source": "stevenbjohnson",
        "target": "karpathy"
    },
    {
        "source": "stevenbjohnson",
        "target": "joshwoodward"
    },
    {
        "source": "stevenbjohnson",
        "target": "officiallogank"
    },
    {
        "source": "stevenbjohnson",
        "target": "emollick"
    },
    {
        "source": "stevenbjohnson",
        "target": "jeffdean"
    },
    {
        "source": "ylecun",
        "target": "_akhaliq"
    },
    {
        "source": "ylecun",
        "target": "rasbt"
    },
    {
        "source": "ylecun",
        "target": "pytorch"
    },
    {
        "source": "ylecun",
        "target": "soumithchintala"
    },
    {
        "source": "ylecun",
        "target": "jeremyphoward"
    },
    {
        "source": "ylecun",
        "target": "csprofkgd"
    },
    {
        "source": "ylecun",
        "target": "giffmana"
    },
    {
        "source": "ylecun",
        "target": "huggingface"
    },
    {
        "source": "ylecun",
        "target": "neuripsconf"
    },
    {
        "source": "ylecun",
        "target": "sirbayes"
    },
    {
        "source": "ylecun",
        "target": "mmbronstein"
    },
    {
        "source": "ylecun",
        "target": "oriolvinyalsml"
    },
    {
        "source": "ylecun",
        "target": "chris_j_paxton"
    },
    {
        "source": "ylecun",
        "target": "remicadene"
    },
    {
        "source": "ylecun",
        "target": "zeyuanallenzhu"
    },
    {
        "source": "ylecun",
        "target": "shengjia_zhao"
    },
    {
        "source": "ylecun",
        "target": "everlyn_ai"
    },
    {
        "source": "ylecun",
        "target": "alexandr_wang"
    },
    {
        "source": "ylecun",
        "target": "amermathsoc"
    },
    {
        "source": "ylecun",
        "target": "artificialanlys"
    },
    {
        "source": "gdb",
        "target": "merettm"
    },
    {
        "source": "gdb",
        "target": "openai"
    },
    {
        "source": "gdb",
        "target": "sama"
    },
    {
        "source": "anthropicai",
        "target": "jackclarksf"
    },
    {
        "source": "anthropicai",
        "target": "amandaaskell"
    },
    {
        "source": "anthropicai",
        "target": "janleike"
    },
    {
        "source": "anthropicai",
        "target": "ch402"
    },
    {
        "source": "anthropicai",
        "target": "catherineols"
    },
    {
        "source": "anthropicai",
        "target": "claudeai"
    },
    {
        "source": "anthropicai",
        "target": "darioamodei"
    },
    {
        "source": "anthropicai",
        "target": "dpkingma"
    },
    {
        "source": "anthropicai",
        "target": "jaykreps"
    },
    {
        "source": "anthropicai",
        "target": "mikeyk"
    },
    {
        "source": "anthropicai",
        "target": "sammcallister"
    },
    {
        "source": "anthropicai",
        "target": "alexalbert__"
    },
    {
        "source": "anthropicai",
        "target": "stuartjritchie"
    },
    {
        "source": "anthropicai",
        "target": "andy_l_jones"
    },
    {
        "source": "code",
        "target": "officiallogank"
    },
    {
        "source": "demishassabis",
        "target": "ylecun"
    },
    {
        "source": "demishassabis",
        "target": "googledeepmind"
    },
    {
        "source": "demishassabis",
        "target": "ilyasut"
    },
    {
        "source": "demishassabis",
        "target": "oriolvinyalsml"
    },
    {
        "source": "demishassabis",
        "target": "jeffdean"
    },
    {
        "source": "demishassabis",
        "target": "dileeplearning"
    },
    {
        "source": "demishassabis",
        "target": "mustafasuleyman"
    },
    {
        "source": "demishassabis",
        "target": "moltbook"
    },
    {
        "source": "demishassabis",
        "target": "antigravity"
    },
    {
        "source": "demishassabis",
        "target": "fofrai"
    },
    {
        "source": "demishassabis",
        "target": "goodside"
    },
    {
        "source": "demishassabis",
        "target": "nanobanana"
    },
    {
        "source": "demishassabis",
        "target": "googleaistudio"
    },
    {
        "source": "demishassabis",
        "target": "_mohansolo"
    },
    {
        "source": "demishassabis",
        "target": "karpathy"
    },
    {
        "source": "demishassabis",
        "target": "ai_for_success"
    },
    {
        "source": "demishassabis",
        "target": "yoshua_bengio"
    },
    {
        "source": "demishassabis",
        "target": "hendrycks"
    },
    {
        "source": "demishassabis",
        "target": "jerrod_lew"
    },
    {
        "source": "demishassabis",
        "target": "sriramk"
    },
    {
        "source": "demishassabis",
        "target": "emollick"
    },
    {
        "source": "demishassabis",
        "target": "stevenbjohnson"
    },
    {
        "source": "demishassabis",
        "target": "joshwoodward"
    },
    {
        "source": "demishassabis",
        "target": "geminiapp"
    },
    {
        "source": "demishassabis",
        "target": "googlelabs"
    },
    {
        "source": "demishassabis",
        "target": "alexandr_wang"
    },
    {
        "source": "demishassabis",
        "target": "garymarcus"
    },
    {
        "source": "demishassabis",
        "target": "officiallogank"
    },
    {
        "source": "demishassabis",
        "target": "ancadianadragan"
    },
    {
        "source": "demishassabis",
        "target": "geoffreyhinton"
    },
    {
        "source": "demishassabis",
        "target": "clementdelangue"
    },
    {
        "source": "demishassabis",
        "target": "arena"
    },
    {
        "source": "palmerluckey",
        "target": "alexandr_wang"
    },
    {
        "source": "palmerluckey",
        "target": "yacinemtb"
    },
    {
        "source": "palmerluckey",
        "target": "goodside"
    },
    {
        "source": "huggingface",
        "target": "abhi1thakur"
    },
    {
        "source": "huggingface",
        "target": "mervenoyann"
    },
    {
        "source": "huggingface",
        "target": "clementdelangue"
    },
    {
        "source": "huggingface",
        "target": "giffmana"
    },
    {
        "source": "huggingface",
        "target": "richardsocher"
    },
    {
        "source": "huggingface",
        "target": "julien_c"
    },
    {
        "source": "huggingface",
        "target": "osanseviero"
    },
    {
        "source": "huggingface",
        "target": "srush_nlp"
    },
    {
        "source": "huggingface",
        "target": "thom_wolf"
    },
    {
        "source": "huggingface",
        "target": "risingsayak"
    },
    {
        "source": "huggingface",
        "target": "wightmanr"
    },
    {
        "source": "huggingface",
        "target": "sashamtl"
    },
    {
        "source": "huggingface",
        "target": "douwekiela"
    },
    {
        "source": "huggingface",
        "target": "_nateraw"
    },
    {
        "source": "huggingface",
        "target": "nielsrogge"
    },
    {
        "source": "huggingface",
        "target": "_lewtun"
    },
    {
        "source": "huggingface",
        "target": "nils_reimers"
    },
    {
        "source": "huggingface",
        "target": "lerobothf"
    },
    {
        "source": "huggingface",
        "target": "adinayakup"
    },
    {
        "source": "huggingface",
        "target": "unslothai"
    },
    {
        "source": "huggingface",
        "target": "allen_ai"
    },
    {
        "source": "huggingface",
        "target": "drfeifei"
    },
    {
        "source": "huggingface",
        "target": "nvidiaaidev"
    },
    {
        "source": "huggingface",
        "target": "remicadene"
    },
    {
        "source": "fchollet",
        "target": "ylecun"
    },
    {
        "source": "fchollet",
        "target": "tunguz"
    },
    {
        "source": "fchollet",
        "target": "hardmaru"
    },
    {
        "source": "fchollet",
        "target": "rasbt"
    },
    {
        "source": "fchollet",
        "target": "andrewyng"
    },
    {
        "source": "fchollet",
        "target": "googledeepmind"
    },
    {
        "source": "fchollet",
        "target": "garymarcus"
    },
    {
        "source": "fchollet",
        "target": "docmilanfar"
    },
    {
        "source": "fchollet",
        "target": "jeremyphoward"
    },
    {
        "source": "fchollet",
        "target": "schmidhuberai"
    },
    {
        "source": "fchollet",
        "target": "deliprao"
    },
    {
        "source": "fchollet",
        "target": "richardsocher"
    },
    {
        "source": "fchollet",
        "target": "tensorflow"
    },
    {
        "source": "fchollet",
        "target": "sirbayes"
    },
    {
        "source": "fchollet",
        "target": "jeffdean"
    },
    {
        "source": "fchollet",
        "target": "woj_zaremba"
    },
    {
        "source": "fchollet",
        "target": "darioamodei"
    },
    {
        "source": "fchollet",
        "target": "aelluswamy"
    },
    {
        "source": "fchollet",
        "target": "jfpuget"
    },
    {
        "source": "fchollet",
        "target": "jm_alexia"
    },
    {
        "source": "fchollet",
        "target": "sarahookr"
    },
    {
        "source": "fchollet",
        "target": "zjasper"
    },
    {
        "source": "fchollet",
        "target": "koraykv"
    },
    {
        "source": "fchollet",
        "target": "fidjissimo"
    },
    {
        "source": "fchollet",
        "target": "npew"
    },
    {
        "source": "fchollet",
        "target": "zicokolter"
    },
    {
        "source": "fchollet",
        "target": "yoshua_bengio"
    },
    {
        "source": "fchollet",
        "target": "officiallogank"
    },
    {
        "source": "ilyasut",
        "target": "openai"
    },
    {
        "source": "drfeifei",
        "target": "ylecun"
    },
    {
        "source": "drfeifei",
        "target": "soumithchintala"
    },
    {
        "source": "drfeifei",
        "target": "pytorch"
    },
    {
        "source": "drfeifei",
        "target": "schmidhuberai"
    },
    {
        "source": "drfeifei",
        "target": "neuripsconf"
    },
    {
        "source": "drfeifei",
        "target": "svlevine"
    },
    {
        "source": "drfeifei",
        "target": "oriolvinyalsml"
    },
    {
        "source": "drfeifei",
        "target": "tdietterich"
    },
    {
        "source": "drfeifei",
        "target": "zacharylipton"
    },
    {
        "source": "drfeifei",
        "target": "chrmanning"
    },
    {
        "source": "drfeifei",
        "target": "steipete"
    },
    {
        "source": "drfeifei",
        "target": "rohanpaul_ai"
    },
    {
        "source": "drfeifei",
        "target": "emollick"
    },
    {
        "source": "drfeifei",
        "target": "bradsmi"
    },
    {
        "source": "geoffreyhinton",
        "target": "ylecun"
    },
    {
        "source": "geoffreyhinton",
        "target": "jeffdean"
    },
    {
        "source": "geoffreyhinton",
        "target": "roydanroy"
    },
    {
        "source": "geoffreyhinton",
        "target": "chrszegedy"
    },
    {
        "source": "geoffreyhinton",
        "target": "dpkingma"
    },
    {
        "source": "geoffreyhinton",
        "target": "zoubinghahrama1"
    },
    {
        "source": "geoffreyhinton",
        "target": "ilyasut"
    },
    {
        "source": "geoffreyhinton",
        "target": "goodfellow_ian"
    },
    {
        "source": "nvidiageforcefr",
        "target": "nvidianewsroom"
    },
    {
        "source": "nvidiageforcefr",
        "target": "nvidiacc"
    },
    {
        "source": "paraga",
        "target": "satyanadella"
    },
    {
        "source": "paraga",
        "target": "perplexity_ai"
    },
    {
        "source": "chatgptapp",
        "target": "kalinowski007"
    },
    {
        "source": "chatgptapp",
        "target": "thsottiaux"
    },
    {
        "source": "chatgptapp",
        "target": "claudeai"
    },
    {
        "source": "chatgptapp",
        "target": "ch402"
    },
    {
        "source": "chatgptapp",
        "target": "amandaaskell"
    },
    {
        "source": "chatgptapp",
        "target": "boazbaraktcs"
    },
    {
        "source": "chatgptapp",
        "target": "anshitasaini_"
    },
    {
        "source": "chatgptapp",
        "target": "sriramk"
    },
    {
        "source": "pytorch",
        "target": "ylecun"
    },
    {
        "source": "pytorch",
        "target": "rasbt"
    },
    {
        "source": "pytorch",
        "target": "soumithchintala"
    },
    {
        "source": "pytorch",
        "target": "huggingface"
    },
    {
        "source": "pytorch",
        "target": "iamtrask"
    },
    {
        "source": "pytorch",
        "target": "chhillee"
    },
    {
        "source": "pytorch",
        "target": "julien_c"
    },
    {
        "source": "pytorch",
        "target": "srush_nlp"
    },
    {
        "source": "pytorch",
        "target": "thom_wolf"
    },
    {
        "source": "pytorch",
        "target": "math_rachel"
    },
    {
        "source": "mikeyk",
        "target": "alexalbert__"
    },
    {
        "source": "mikeyk",
        "target": "sammcallister"
    },
    {
        "source": "mikeyk",
        "target": "anthropicai"
    },
    {
        "source": "mikeyk",
        "target": "emollick"
    },
    {
        "source": "mikeyk",
        "target": "gdb"
    },
    {
        "source": "_akhaliq",
        "target": "hardmaru"
    },
    {
        "source": "_akhaliq",
        "target": "arankomatsuzaki"
    },
    {
        "source": "_akhaliq",
        "target": "pytorch"
    },
    {
        "source": "_akhaliq",
        "target": "csprofkgd"
    },
    {
        "source": "_akhaliq",
        "target": "soumithchintala"
    },
    {
        "source": "_akhaliq",
        "target": "giffmana"
    },
    {
        "source": "_akhaliq",
        "target": "jeremyphoward"
    },
    {
        "source": "_akhaliq",
        "target": "schmidhuberai"
    },
    {
        "source": "_akhaliq",
        "target": "huggingface"
    },
    {
        "source": "_akhaliq",
        "target": "abhi1thakur"
    },
    {
        "source": "_akhaliq",
        "target": "mattniessner"
    },
    {
        "source": "_akhaliq",
        "target": "svlevine"
    },
    {
        "source": "_akhaliq",
        "target": "nvidiarobotics"
    },
    {
        "source": "_akhaliq",
        "target": "antigravity"
    },
    {
        "source": "_akhaliq",
        "target": "nanobanana"
    },
    {
        "source": "_akhaliq",
        "target": "geminiapp"
    },
    {
        "source": "_akhaliq",
        "target": "tdietterich"
    },
    {
        "source": "austen",
        "target": "sriramk"
    },
    {
        "source": "austen",
        "target": "alexandr_wang"
    },
    {
        "source": "austen",
        "target": "palmerluckey"
    },
    {
        "source": "austen",
        "target": "moltbook"
    },
    {
        "source": "austen",
        "target": "steipete"
    },
    {
        "source": "austen",
        "target": "pashmerepat"
    },
    {
        "source": "claudeai",
        "target": "anthropicai"
    },
    {
        "source": "miramurati",
        "target": "gdb"
    },
    {
        "source": "miramurati",
        "target": "goodside"
    },
    {
        "source": "miramurati",
        "target": "alexandr_wang"
    },
    {
        "source": "miramurati",
        "target": "woj_zaremba"
    },
    {
        "source": "miramurati",
        "target": "ai__pub"
    },
    {
        "source": "miramurati",
        "target": "ilyasut"
    },
    {
        "source": "miramurati",
        "target": "mathemagic1an"
    },
    {
        "source": "miramurati",
        "target": "soumithchintala"
    },
    {
        "source": "miramurati",
        "target": "miles_brundage"
    },
    {
        "source": "miramurati",
        "target": "npew"
    },
    {
        "source": "miramurati",
        "target": "jackclarksf"
    },
    {
        "source": "miramurati",
        "target": "jeffdean"
    },
    {
        "source": "miramurati",
        "target": "janleike"
    },
    {
        "source": "miramurati",
        "target": "chhillee"
    },
    {
        "source": "jeffdean",
        "target": "soumithchintala"
    },
    {
        "source": "jeffdean",
        "target": "schmidhuberai"
    },
    {
        "source": "jeffdean",
        "target": "arankomatsuzaki"
    },
    {
        "source": "jeffdean",
        "target": "giffmana"
    },
    {
        "source": "jeffdean",
        "target": "csprofkgd"
    },
    {
        "source": "jeffdean",
        "target": "sirbayes"
    },
    {
        "source": "jeffdean",
        "target": "neuripsconf"
    },
    {
        "source": "jeffdean",
        "target": "thegautamkamath"
    },
    {
        "source": "jeffdean",
        "target": "savvyrl"
    },
    {
        "source": "jeffdean",
        "target": "svlevine"
    },
    {
        "source": "jeffdean",
        "target": "chhillee"
    },
    {
        "source": "jeffdean",
        "target": "oriolvinyalsml"
    },
    {
        "source": "jeffdean",
        "target": "roydanroy"
    },
    {
        "source": "jeffdean",
        "target": "mattniessner"
    },
    {
        "source": "jeffdean",
        "target": "srush_nlp"
    },
    {
        "source": "jeffdean",
        "target": "lateinteraction"
    },
    {
        "source": "jeffdean",
        "target": "kalinowski007"
    },
    {
        "source": "jeffdean",
        "target": "simpsoka"
    },
    {
        "source": "jeffdean",
        "target": "rihardjarc"
    },
    {
        "source": "jeffdean",
        "target": "bcherny"
    },
    {
        "source": "jeffdean",
        "target": "anujsaharan_"
    },
    {
        "source": "jeffdean",
        "target": "littmath"
    },
    {
        "source": "geminiapp",
        "target": "tulseedoshi"
    },
    {
        "source": "geminiapp",
        "target": "koraykv"
    },
    {
        "source": "geminiapp",
        "target": "antigravity"
    },
    {
        "source": "geminiapp",
        "target": "officiallogank"
    },
    {
        "source": "geminiapp",
        "target": "googleuk"
    },
    {
        "source": "geminiapp",
        "target": "nanobanana"
    },
    {
        "source": "geminiapp",
        "target": "googleaistudio"
    },
    {
        "source": "geminiapp",
        "target": "joshwoodward"
    },
    {
        "source": "geminiapp",
        "target": "demishassabis"
    },
    {
        "source": "geminiapp",
        "target": "googleaidevs"
    },
    {
        "source": "geminiapp",
        "target": "googlelabs"
    },
    {
        "source": "geminiapp",
        "target": "tensorflow"
    },
    {
        "source": "geminiapp",
        "target": "googledeepmind"
    },
    {
        "source": "geminiapp",
        "target": "googleai"
    },
    {
        "source": "rasbt",
        "target": "tunguz"
    },
    {
        "source": "rasbt",
        "target": "fchollet"
    },
    {
        "source": "rasbt",
        "target": "ylecun"
    },
    {
        "source": "rasbt",
        "target": "hardmaru"
    },
    {
        "source": "rasbt",
        "target": "andrewyng"
    },
    {
        "source": "rasbt",
        "target": "omarsar0"
    },
    {
        "source": "rasbt",
        "target": "_akhaliq"
    },
    {
        "source": "rasbt",
        "target": "drjimfan"
    },
    {
        "source": "rasbt",
        "target": "jeremyphoward"
    },
    {
        "source": "rasbt",
        "target": "abhi1thakur"
    },
    {
        "source": "rasbt",
        "target": "steipete"
    },
    {
        "source": "rasbt",
        "target": "alexalbert__"
    },
    {
        "source": "rasbt",
        "target": "nvidiaaidev"
    },
    {
        "source": "rasbt",
        "target": "julien_c"
    },
    {
        "source": "rasbt",
        "target": "ilyasut"
    },
    {
        "source": "rasbt",
        "target": "oriolvinyalsml"
    },
    {
        "source": "rasbt",
        "target": "goodfellow_ian"
    },
    {
        "source": "rasbt",
        "target": "tydsh"
    },
    {
        "source": "hardmaru",
        "target": "_akhaliq"
    },
    {
        "source": "hardmaru",
        "target": "rasbt"
    },
    {
        "source": "hardmaru",
        "target": "omarsar0"
    },
    {
        "source": "hardmaru",
        "target": "soumithchintala"
    },
    {
        "source": "hardmaru",
        "target": "arankomatsuzaki"
    },
    {
        "source": "hardmaru",
        "target": "schmidhuberai"
    },
    {
        "source": "hardmaru",
        "target": "jeremyphoward"
    },
    {
        "source": "hardmaru",
        "target": "abhi1thakur"
    },
    {
        "source": "hardmaru",
        "target": "giffmana"
    },
    {
        "source": "hardmaru",
        "target": "csprofkgd"
    },
    {
        "source": "hardmaru",
        "target": "woj_zaremba"
    },
    {
        "source": "hardmaru",
        "target": "savvyrl"
    },
    {
        "source": "hardmaru",
        "target": "sirbayes"
    },
    {
        "source": "hardmaru",
        "target": "nickaturley"
    },
    {
        "source": "hardmaru",
        "target": "geoffreylitt"
    },
    {
        "source": "hardmaru",
        "target": "moltbook"
    },
    {
        "source": "hardmaru",
        "target": "openclaw"
    },
    {
        "source": "hardmaru",
        "target": "kazu_fujisawa"
    },
    {
        "source": "hardmaru",
        "target": "tom_doerr"
    },
    {
        "source": "hardmaru",
        "target": "minchoi"
    },
    {
        "source": "perplexity_ai",
        "target": "alexgraveley"
    },
    {
        "source": "perplexity_ai",
        "target": "gizakdag"
    },
    {
        "source": "perplexity_ai",
        "target": "ciguleva"
    },
    {
        "source": "tensorflow",
        "target": "fchollet"
    },
    {
        "source": "tensorflow",
        "target": "ylecun"
    },
    {
        "source": "tensorflow",
        "target": "andrewyng"
    },
    {
        "source": "tensorflow",
        "target": "hardmaru"
    },
    {
        "source": "tensorflow",
        "target": "googledeepmind"
    },
    {
        "source": "tensorflow",
        "target": "googleai"
    },
    {
        "source": "tensorflow",
        "target": "mervenoyann"
    },
    {
        "source": "tensorflow",
        "target": "jeffdean"
    },
    {
        "source": "tensorflow",
        "target": "oriolvinyalsml"
    },
    {
        "source": "tensorflow",
        "target": "googleaidevs"
    },
    {
        "source": "tensorflow",
        "target": "geminiapp"
    },
    {
        "source": "alexandr_wang",
        "target": "gdb"
    },
    {
        "source": "alexandr_wang",
        "target": "goodside"
    },
    {
        "source": "alexandr_wang",
        "target": "emostaque"
    },
    {
        "source": "alexandr_wang",
        "target": "drjimfan"
    },
    {
        "source": "alexandr_wang",
        "target": "woj_zaremba"
    },
    {
        "source": "alexandr_wang",
        "target": "ilyasut"
    },
    {
        "source": "alexandr_wang",
        "target": "soumithchintala"
    },
    {
        "source": "alexandr_wang",
        "target": "saranormous"
    },
    {
        "source": "alexandr_wang",
        "target": "jsuarez"
    },
    {
        "source": "alexandr_wang",
        "target": "zeyuanallenzhu"
    },
    {
        "source": "alexandr_wang",
        "target": "giffmana"
    },
    {
        "source": "alexandr_wang",
        "target": "shengjia_zhao"
    },
    {
        "source": "nvidiageforcees",
        "target": "nvidianewsroom"
    },
    {
        "source": "nvidiageforcees",
        "target": "nvidiageforcefr"
    },
    {
        "source": "addyosmani",
        "target": "darioamodei"
    },
    {
        "source": "addyosmani",
        "target": "fidjissimo"
    },
    {
        "source": "addyosmani",
        "target": "thsottiaux"
    },
    {
        "source": "addyosmani",
        "target": "ibab"
    },
    {
        "source": "addyosmani",
        "target": "koylanai"
    },
    {
        "source": "goodfellow_ian",
        "target": "ylecun"
    },
    {
        "source": "goodfellow_ian",
        "target": "soumithchintala"
    },
    {
        "source": "goodfellow_ian",
        "target": "jeremyphoward"
    },
    {
        "source": "goodfellow_ian",
        "target": "sirbayes"
    },
    {
        "source": "goodfellow_ian",
        "target": "neuripsconf"
    },
    {
        "source": "goodfellow_ian",
        "target": "savvyrl"
    },
    {
        "source": "goodfellow_ian",
        "target": "svlevine"
    },
    {
        "source": "goodfellow_ian",
        "target": "oriolvinyalsml"
    },
    {
        "source": "goodfellow_ian",
        "target": "roydanroy"
    },
    {
        "source": "goodfellow_ian",
        "target": "tdietterich"
    },
    {
        "source": "goodfellow_ian",
        "target": "zacharylipton"
    },
    {
        "source": "goodfellow_ian",
        "target": "sedielem"
    },
    {
        "source": "goodfellow_ian",
        "target": "chrmanning"
    },
    {
        "source": "goodfellow_ian",
        "target": "sashamtl"
    },
    {
        "source": "goodfellow_ian",
        "target": "yoshua_bengio"
    },
    {
        "source": "drjimfan",
        "target": "_akhaliq"
    },
    {
        "source": "drjimfan",
        "target": "ai__pub"
    },
    {
        "source": "drjimfan",
        "target": "arankomatsuzaki"
    },
    {
        "source": "drjimfan",
        "target": "lioronai"
    },
    {
        "source": "drjimfan",
        "target": "mathemagic1an"
    },
    {
        "source": "drjimfan",
        "target": "woj_zaremba"
    },
    {
        "source": "drjimfan",
        "target": "schmidhuberai"
    },
    {
        "source": "drjimfan",
        "target": "giffmana"
    },
    {
        "source": "drjimfan",
        "target": "anthropicai"
    },
    {
        "source": "drjimfan",
        "target": "ilyasut"
    },
    {
        "source": "drjimfan",
        "target": "_jasonwei"
    },
    {
        "source": "drjimfan",
        "target": "svlevine"
    },
    {
        "source": "drjimfan",
        "target": "shaneguml"
    },
    {
        "source": "drjimfan",
        "target": "addyosmani"
    },
    {
        "source": "drjimfan",
        "target": "brian_armstrong"
    },
    {
        "source": "drjimfan",
        "target": "zeyuanallenzhu"
    },
    {
        "source": "drjimfan",
        "target": "bcherny"
    },
    {
        "source": "drjimfan",
        "target": "sundeep"
    },
    {
        "source": "drjimfan",
        "target": "jonathanross321"
    },
    {
        "source": "drjimfan",
        "target": "palmerluckey"
    },
    {
        "source": "drjimfan",
        "target": "skildai"
    },
    {
        "source": "drjimfan",
        "target": "paraga"
    },
    {
        "source": "drjimfan",
        "target": "claudeai"
    },
    {
        "source": "minchoi",
        "target": "openclaw"
    },
    {
        "source": "minchoi",
        "target": "steipete"
    },
    {
        "source": "minchoi",
        "target": "darioamodei"
    },
    {
        "source": "minchoi",
        "target": "aelluswamy"
    },
    {
        "source": "minchoi",
        "target": "yuhu_ai_"
    },
    {
        "source": "minchoi",
        "target": "bcherny"
    },
    {
        "source": "minchoi",
        "target": "rohanpaul_ai"
    },
    {
        "source": "minchoi",
        "target": "osanseviero"
    },
    {
        "source": "minchoi",
        "target": "clementdelangue"
    },
    {
        "source": "nvidiageforcejp",
        "target": "nvidianewsroom"
    },
    {
        "source": "nvidiageforcejp",
        "target": "nvidiaomniverse"
    },
    {
        "source": "emollick",
        "target": "mmitchell_ai"
    },
    {
        "source": "emollick",
        "target": "nanobanana"
    },
    {
        "source": "emollick",
        "target": "levie"
    },
    {
        "source": "emollick",
        "target": "ibab"
    },
    {
        "source": "emollick",
        "target": "nickaturley"
    },
    {
        "source": "emollick",
        "target": "littmath"
    },
    {
        "source": "emollick",
        "target": "miramurati"
    },
    {
        "source": "emollick",
        "target": "googledeepmind"
    },
    {
        "source": "emollick",
        "target": "drjimfan"
    },
    {
        "source": "emollick",
        "target": "gdb"
    },
    {
        "source": "emollick",
        "target": "jeffdean"
    },
    {
        "source": "emollick",
        "target": "tom_doerr"
    },
    {
        "source": "emollick",
        "target": "sriramk"
    },
    {
        "source": "emollick",
        "target": "demishassabis"
    },
    {
        "source": "emollick",
        "target": "rohanpaul_ai"
    },
    {
        "source": "emollick",
        "target": "anthropicai"
    },
    {
        "source": "emostaque",
        "target": "emollick"
    },
    {
        "source": "emostaque",
        "target": "ylecun"
    },
    {
        "source": "sriramk",
        "target": "ancadianadragan"
    },
    {
        "source": "sriramk",
        "target": "openclaw"
    },
    {
        "source": "omarsar0",
        "target": "tunguz"
    },
    {
        "source": "omarsar0",
        "target": "ylecun"
    },
    {
        "source": "omarsar0",
        "target": "rasbt"
    },
    {
        "source": "omarsar0",
        "target": "andrewyng"
    },
    {
        "source": "omarsar0",
        "target": "hardmaru"
    },
    {
        "source": "omarsar0",
        "target": "_akhaliq"
    },
    {
        "source": "omarsar0",
        "target": "drjimfan"
    },
    {
        "source": "omarsar0",
        "target": "abhi1thakur"
    },
    {
        "source": "omarsar0",
        "target": "jeremyphoward"
    },
    {
        "source": "omarsar0",
        "target": "ai__pub"
    },
    {
        "source": "omarsar0",
        "target": "lioronai"
    },
    {
        "source": "omarsar0",
        "target": "mervenoyann"
    },
    {
        "source": "omarsar0",
        "target": "soumithchintala"
    },
    {
        "source": "omarsar0",
        "target": "geoffreylitt"
    },
    {
        "source": "omarsar0",
        "target": "bcherny"
    },
    {
        "source": "omarsar0",
        "target": "steipete"
    },
    {
        "source": "omarsar0",
        "target": "sundeep"
    },
    {
        "source": "omarsar0",
        "target": "addyosmani"
    },
    {
        "source": "omarsar0",
        "target": "nils_reimers"
    },
    {
        "source": "omarsar0",
        "target": "adocomplete"
    },
    {
        "source": "soumithchintala",
        "target": "ylecun"
    },
    {
        "source": "soumithchintala",
        "target": "hardmaru"
    },
    {
        "source": "soumithchintala",
        "target": "rasbt"
    },
    {
        "source": "soumithchintala",
        "target": "pytorch"
    },
    {
        "source": "soumithchintala",
        "target": "jeremyphoward"
    },
    {
        "source": "soumithchintala",
        "target": "giffmana"
    },
    {
        "source": "soumithchintala",
        "target": "chhillee"
    },
    {
        "source": "soumithchintala",
        "target": "sirbayes"
    },
    {
        "source": "soumithchintala",
        "target": "woj_zaremba"
    },
    {
        "source": "soumithchintala",
        "target": "iamtrask"
    },
    {
        "source": "soumithchintala",
        "target": "clementdelangue"
    },
    {
        "source": "soumithchintala",
        "target": "oriolvinyalsml"
    },
    {
        "source": "soumithchintala",
        "target": "jeffdean"
    },
    {
        "source": "soumithchintala",
        "target": "srush_nlp"
    },
    {
        "source": "soumithchintala",
        "target": "julien_c"
    },
    {
        "source": "soumithchintala",
        "target": "steipete"
    },
    {
        "source": "soumithchintala",
        "target": "jm_alexia"
    },
    {
        "source": "soumithchintala",
        "target": "zai_org"
    },
    {
        "source": "soumithchintala",
        "target": "ericzelikman"
    },
    {
        "source": "openclaw",
        "target": "steipete"
    },
    {
        "source": "officiallogank",
        "target": "lioronai"
    },
    {
        "source": "officiallogank",
        "target": "jeremyphoward"
    },
    {
        "source": "officiallogank",
        "target": "woj_zaremba"
    },
    {
        "source": "officiallogank",
        "target": "huggingface"
    },
    {
        "source": "officiallogank",
        "target": "clementdelangue"
    },
    {
        "source": "officiallogank",
        "target": "osanseviero"
    },
    {
        "source": "officiallogank",
        "target": "julien_c"
    },
    {
        "source": "jeremyphoward",
        "target": "fchollet"
    },
    {
        "source": "jeremyphoward",
        "target": "ylecun"
    },
    {
        "source": "jeremyphoward",
        "target": "rasbt"
    },
    {
        "source": "jeremyphoward",
        "target": "hardmaru"
    },
    {
        "source": "jeremyphoward",
        "target": "_akhaliq"
    },
    {
        "source": "jeremyphoward",
        "target": "omarsar0"
    },
    {
        "source": "jeremyphoward",
        "target": "soumithchintala"
    },
    {
        "source": "jeremyphoward",
        "target": "pytorch"
    },
    {
        "source": "jeremyphoward",
        "target": "abhi1thakur"
    },
    {
        "source": "jeremyphoward",
        "target": "schmidhuberai"
    },
    {
        "source": "jeremyphoward",
        "target": "mervenoyann"
    },
    {
        "source": "jeremyphoward",
        "target": "arankomatsuzaki"
    },
    {
        "source": "openaidevs",
        "target": "openai"
    },
    {
        "source": "steipete",
        "target": "moltbook"
    },
    {
        "source": "steipete",
        "target": "matthewberman"
    },
    {
        "source": "tunguz",
        "target": "fchollet"
    },
    {
        "source": "tunguz",
        "target": "rasbt"
    },
    {
        "source": "tunguz",
        "target": "andrewyng"
    },
    {
        "source": "tunguz",
        "target": "hardmaru"
    },
    {
        "source": "tunguz",
        "target": "omarsar0"
    },
    {
        "source": "tunguz",
        "target": "_akhaliq"
    },
    {
        "source": "tunguz",
        "target": "abhi1thakur"
    },
    {
        "source": "tunguz",
        "target": "drjimfan"
    },
    {
        "source": "tunguz",
        "target": "docmilanfar"
    },
    {
        "source": "tunguz",
        "target": "mervenoyann"
    },
    {
        "source": "tunguz",
        "target": "lioronai"
    },
    {
        "source": "tunguz",
        "target": "thsottiaux"
    },
    {
        "source": "tunguz",
        "target": "addyosmani"
    },
    {
        "source": "tunguz",
        "target": "darioamodei"
    },
    {
        "source": "nvidiaai",
        "target": "ylecun"
    },
    {
        "source": "nvidiaai",
        "target": "hardmaru"
    },
    {
        "source": "nvidiaai",
        "target": "rasbt"
    },
    {
        "source": "nvidiaai",
        "target": "googledeepmind"
    },
    {
        "source": "nvidiaai",
        "target": "soumithchintala"
    },
    {
        "source": "nvidiaai",
        "target": "jeremyphoward"
    },
    {
        "source": "nvidiaai",
        "target": "abhi1thakur"
    },
    {
        "source": "nvidiaai",
        "target": "tensorflow"
    },
    {
        "source": "nvidiaai",
        "target": "nvidiaaidev"
    },
    {
        "source": "nvidiaai",
        "target": "neuripsconf"
    },
    {
        "source": "nvidiaai",
        "target": "nvidia"
    },
    {
        "source": "nvidiaai",
        "target": "oriolvinyalsml"
    },
    {
        "source": "nvidiaai",
        "target": "sedielem"
    },
    {
        "source": "nvidiaai",
        "target": "nvidiarobotics"
    },
    {
        "source": "nvidiaai",
        "target": "nvidiaomniverse"
    },
    {
        "source": "nvidiaai",
        "target": "nvidianewsroom"
    },
    {
        "source": "nvidiaai",
        "target": "nvidiashield"
    },
    {
        "source": "nvidiaai",
        "target": "nvidiahealth"
    },
    {
        "source": "nvidiaai",
        "target": "nvidiagtc"
    },
    {
        "source": "bcherny",
        "target": "addyosmani"
    },
    {
        "source": "bcherny",
        "target": "darioamodei"
    },
    {
        "source": "bcherny",
        "target": "gdb"
    },
    {
        "source": "bcherny",
        "target": "adocomplete"
    },
    {
        "source": "bcherny",
        "target": "jeffdean"
    },
    {
        "source": "bcherny",
        "target": "alexandr_wang"
    },
    {
        "source": "bcherny",
        "target": "karpathy"
    },
    {
        "source": "bcherny",
        "target": "johnschulman2"
    },
    {
        "source": "bcherny",
        "target": "miramurati"
    },
    {
        "source": "bcherny",
        "target": "janleike"
    },
    {
        "source": "bcherny",
        "target": "amandaaskell"
    },
    {
        "source": "bcherny",
        "target": "mikeyk"
    },
    {
        "source": "bcherny",
        "target": "anthropicai"
    },
    {
        "source": "bcherny",
        "target": "alexalbert__"
    },
    {
        "source": "bcherny",
        "target": "ylecun"
    },
    {
        "source": "nvidiageforceuk",
        "target": "nvidiaanz"
    },
    {
        "source": "nvidiageforceuk",
        "target": "nvidiastudio"
    },
    {
        "source": "nvidiageforceuk",
        "target": "nvidiageforcees"
    },
    {
        "source": "moltbook",
        "target": "steipete"
    },
    {
        "source": "moltbook",
        "target": "openclaw"
    },
    {
        "source": "mustafasuleyman",
        "target": "ylecun"
    },
    {
        "source": "mustafasuleyman",
        "target": "ilyasut"
    },
    {
        "source": "mustafasuleyman",
        "target": "miles_brundage"
    },
    {
        "source": "mustafasuleyman",
        "target": "woj_zaremba"
    },
    {
        "source": "mustafasuleyman",
        "target": "jeffdean"
    },
    {
        "source": "mustafasuleyman",
        "target": "oriolvinyalsml"
    },
    {
        "source": "mustafasuleyman",
        "target": "jackclarksf"
    },
    {
        "source": "mustafasuleyman",
        "target": "sedielem"
    },
    {
        "source": "mustafasuleyman",
        "target": "iamtrask"
    },
    {
        "source": "mustafasuleyman",
        "target": "demishassabis"
    },
    {
        "source": "mustafasuleyman",
        "target": "nandodf"
    },
    {
        "source": "mustafasuleyman",
        "target": "zacharylipton"
    },
    {
        "source": "mustafasuleyman",
        "target": "chrmanning"
    },
    {
        "source": "mustafasuleyman",
        "target": "shaneguml"
    },
    {
        "source": "mustafasuleyman",
        "target": "janleike"
    },
    {
        "source": "mustafasuleyman",
        "target": "darioamodei"
    },
    {
        "source": "gavinsbaker",
        "target": "lateinteraction"
    },
    {
        "source": "esyudkowsky",
        "target": "miles_brundage"
    },
    {
        "source": "esyudkowsky",
        "target": "ilyasut"
    },
    {
        "source": "esyudkowsky",
        "target": "geoffreyhinton"
    },
    {
        "source": "esyudkowsky",
        "target": "goodside"
    },
    {
        "source": "yacinemtb",
        "target": "nickcammarata"
    },
    {
        "source": "garymarcus",
        "target": "schmidhuberai"
    },
    {
        "source": "garymarcus",
        "target": "soumithchintala"
    },
    {
        "source": "garymarcus",
        "target": "melmitchell1"
    },
    {
        "source": "garymarcus",
        "target": "arankomatsuzaki"
    },
    {
        "source": "garymarcus",
        "target": "tdietterich"
    },
    {
        "source": "garymarcus",
        "target": "savvyrl"
    },
    {
        "source": "garymarcus",
        "target": "sirbayes"
    },
    {
        "source": "garymarcus",
        "target": "miles_brundage"
    },
    {
        "source": "garymarcus",
        "target": "anthropicai"
    },
    {
        "source": "garymarcus",
        "target": "mmbronstein"
    },
    {
        "source": "garymarcus",
        "target": "svlevine"
    },
    {
        "source": "garymarcus",
        "target": "srush_nlp"
    },
    {
        "source": "garymarcus",
        "target": "chrmanning"
    },
    {
        "source": "garymarcus",
        "target": "aprilwright"
    },
    {
        "source": "garymarcus",
        "target": "theworldlabs"
    },
    {
        "source": "garymarcus",
        "target": "nickaturley"
    },
    {
        "source": "garymarcus",
        "target": "profstevekeen"
    },
    {
        "source": "garymarcus",
        "target": "rohanpaul_ai"
    },
    {
        "source": "garymarcus",
        "target": "peterberezinbca"
    },
    {
        "source": "garymarcus",
        "target": "sethharpesq"
    },
    {
        "source": "garymarcus",
        "target": "fidjissimo"
    },
    {
        "source": "mspartner",
        "target": "jeffteper"
    },
    {
        "source": "mspartner",
        "target": "azure"
    },
    {
        "source": "mspartner",
        "target": "mustafasuleyman"
    },
    {
        "source": "mspartner",
        "target": "sama"
    },
    {
        "source": "mspartner",
        "target": "mistralai"
    },
    {
        "source": "nvidiagfn",
        "target": "nvidiageforce"
    },
    {
        "source": "nvidiagfn",
        "target": "nvidiageforceuk"
    },
    {
        "source": "nvidiagfn",
        "target": "nvidia"
    },
    {
        "source": "nvidiagfn",
        "target": "nvidianewsroom"
    },
    {
        "source": "oriolvinyalsml",
        "target": "soumithchintala"
    },
    {
        "source": "oriolvinyalsml",
        "target": "ilyasut"
    },
    {
        "source": "oriolvinyalsml",
        "target": "svlevine"
    },
    {
        "source": "oriolvinyalsml",
        "target": "sedielem"
    },
    {
        "source": "oriolvinyalsml",
        "target": "tdietterich"
    },
    {
        "source": "oriolvinyalsml",
        "target": "demishassabis"
    },
    {
        "source": "oriolvinyalsml",
        "target": "chrmanning"
    },
    {
        "source": "oriolvinyalsml",
        "target": "nandodf"
    },
    {
        "source": "oriolvinyalsml",
        "target": "egrefen"
    },
    {
        "source": "oriolvinyalsml",
        "target": "natashajaques"
    },
    {
        "source": "oriolvinyalsml",
        "target": "hochreitersepp"
    },
    {
        "source": "oriolvinyalsml",
        "target": "antigravity"
    },
    {
        "source": "oriolvinyalsml",
        "target": "satyanadella"
    },
    {
        "source": "oriolvinyalsml",
        "target": "johnschulman2"
    },
    {
        "source": "oriolvinyalsml",
        "target": "lexfridman"
    },
    {
        "source": "oriolvinyalsml",
        "target": "ancadianadragan"
    },
    {
        "source": "oriolvinyalsml",
        "target": "miramurati"
    },
    {
        "source": "oriolvinyalsml",
        "target": "emostaque"
    },
    {
        "source": "oriolvinyalsml",
        "target": "math_rachel"
    },
    {
        "source": "oriolvinyalsml",
        "target": "avdnoord"
    },
    {
        "source": "oriolvinyalsml",
        "target": "azaliamirh"
    },
    {
        "source": "oriolvinyalsml",
        "target": "black_in_ai"
    },
    {
        "source": "oriolvinyalsml",
        "target": "mmitchell_ai"
    },
    {
        "source": "oriolvinyalsml",
        "target": "koraykv"
    },
    {
        "source": "oriolvinyalsml",
        "target": "ctnzr"
    },
    {
        "source": "oriolvinyalsml",
        "target": "maithra_raghu"
    },
    {
        "source": "oriolvinyalsml",
        "target": "hannawallach"
    },
    {
        "source": "oriolvinyalsml",
        "target": "tlogg"
    },
    {
        "source": "oriolvinyalsml",
        "target": "wimlworkshop"
    },
    {
        "source": "oriolvinyalsml",
        "target": "khipu_ai"
    },
    {
        "source": "oriolvinyalsml",
        "target": "chelseabfinn"
    },
    {
        "source": "oriolvinyalsml",
        "target": "goodfellow_ian"
    },
    {
        "source": "oriolvinyalsml",
        "target": "jeffdean"
    },
    {
        "source": "clementdelangue",
        "target": "_akhaliq"
    },
    {
        "source": "clementdelangue",
        "target": "rasbt"
    },
    {
        "source": "clementdelangue",
        "target": "omarsar0"
    },
    {
        "source": "clementdelangue",
        "target": "julien_c"
    },
    {
        "source": "clementdelangue",
        "target": "huggingface"
    },
    {
        "source": "clementdelangue",
        "target": "mervenoyann"
    },
    {
        "source": "clementdelangue",
        "target": "soumithchintala"
    },
    {
        "source": "clementdelangue",
        "target": "jeremyphoward"
    },
    {
        "source": "clementdelangue",
        "target": "pytorch"
    },
    {
        "source": "clementdelangue",
        "target": "abhi1thakur"
    },
    {
        "source": "clementdelangue",
        "target": "deliprao"
    },
    {
        "source": "clementdelangue",
        "target": "osanseviero"
    },
    {
        "source": "clementdelangue",
        "target": "richardsocher"
    },
    {
        "source": "clementdelangue",
        "target": "woj_zaremba"
    },
    {
        "source": "clementdelangue",
        "target": "thom_wolf"
    },
    {
        "source": "clementdelangue",
        "target": "sashamtl"
    },
    {
        "source": "clementdelangue",
        "target": "_nateraw"
    },
    {
        "source": "clementdelangue",
        "target": "guohao_li"
    },
    {
        "source": "clementdelangue",
        "target": "mattt"
    },
    {
        "source": "clementdelangue",
        "target": "gavinsbaker"
    },
    {
        "source": "clementdelangue",
        "target": "jsuarez"
    },
    {
        "source": "clementdelangue",
        "target": "askokara"
    },
    {
        "source": "clementdelangue",
        "target": "__tinygrad__"
    },
    {
        "source": "clementdelangue",
        "target": "cixliv"
    },
    {
        "source": "clementdelangue",
        "target": "aelluswamy"
    },
    {
        "source": "aelluswamy",
        "target": "arena"
    },
    {
        "source": "aelluswamy",
        "target": "palmerluckey"
    },
    {
        "source": "aelluswamy",
        "target": "srush_nlp"
    },
    {
        "source": "aelluswamy",
        "target": "esyudkowsky"
    },
    {
        "source": "aelluswamy",
        "target": "gdb"
    },
    {
        "source": "googleuk",
        "target": "joshwoodward"
    },
    {
        "source": "nvidiageforcede",
        "target": "nvidianewsroom"
    },
    {
        "source": "goodside",
        "target": "gdb"
    },
    {
        "source": "goodside",
        "target": "emostaque"
    },
    {
        "source": "goodside",
        "target": "alexandr_wang"
    },
    {
        "source": "goodside",
        "target": "drjimfan"
    },
    {
        "source": "goodside",
        "target": "esyudkowsky"
    },
    {
        "source": "goodside",
        "target": "mathemagic1an"
    },
    {
        "source": "goodside",
        "target": "yacinemtb"
    },
    {
        "source": "goodside",
        "target": "arankomatsuzaki"
    },
    {
        "source": "goodside",
        "target": "woj_zaremba"
    },
    {
        "source": "goodside",
        "target": "nickcammarata"
    },
    {
        "source": "goodside",
        "target": "anthropicai"
    },
    {
        "source": "goodside",
        "target": "zoubinghahrama1"
    },
    {
        "source": "goodside",
        "target": "steipete"
    },
    {
        "source": "goodside",
        "target": "googlelabs"
    },
    {
        "source": "goodside",
        "target": "bcherny"
    },
    {
        "source": "goodside",
        "target": "mitchellh"
    },
    {
        "source": "tom_doerr",
        "target": "embirico"
    },
    {
        "source": "tom_doerr",
        "target": "steipete"
    },
    {
        "source": "tom_doerr",
        "target": "gizakdag"
    },
    {
        "source": "tom_doerr",
        "target": "ciguleva"
    },
    {
        "source": "arankomatsuzaki",
        "target": "_akhaliq"
    },
    {
        "source": "arankomatsuzaki",
        "target": "drjimfan"
    },
    {
        "source": "arankomatsuzaki",
        "target": "giffmana"
    },
    {
        "source": "arankomatsuzaki",
        "target": "soumithchintala"
    },
    {
        "source": "arankomatsuzaki",
        "target": "deliprao"
    },
    {
        "source": "arankomatsuzaki",
        "target": "anthropicai"
    },
    {
        "source": "arankomatsuzaki",
        "target": "_jasonwei"
    },
    {
        "source": "arankomatsuzaki",
        "target": "chhillee"
    },
    {
        "source": "arankomatsuzaki",
        "target": "huggingface"
    },
    {
        "source": "arankomatsuzaki",
        "target": "woj_zaremba"
    },
    {
        "source": "arankomatsuzaki",
        "target": "savvyrl"
    },
    {
        "source": "arankomatsuzaki",
        "target": "clementdelangue"
    },
    {
        "source": "arankomatsuzaki",
        "target": "srush_nlp"
    },
    {
        "source": "arankomatsuzaki",
        "target": "wightmanr"
    },
    {
        "source": "arankomatsuzaki",
        "target": "bcherny"
    },
    {
        "source": "arankomatsuzaki",
        "target": "askalphaxiv"
    },
    {
        "source": "arankomatsuzaki",
        "target": "xwang_lk"
    },
    {
        "source": "arankomatsuzaki",
        "target": "sedielem"
    },
    {
        "source": "arankomatsuzaki",
        "target": "omarsar0"
    },
    {
        "source": "arankomatsuzaki",
        "target": "rohanpaul_ai"
    },
    {
        "source": "arankomatsuzaki",
        "target": "kalomaze"
    },
    {
        "source": "arankomatsuzaki",
        "target": "rasbt"
    },
    {
        "source": "chrmanning",
        "target": "soumithchintala"
    },
    {
        "source": "chrmanning",
        "target": "srush_nlp"
    },
    {
        "source": "chrmanning",
        "target": "sleepinyourhat"
    },
    {
        "source": "chrmanning",
        "target": "gneubig"
    },
    {
        "source": "chrmanning",
        "target": "_jasonwei"
    },
    {
        "source": "chrmanning",
        "target": "thom_wolf"
    },
    {
        "source": "chrmanning",
        "target": "tdietterich"
    },
    {
        "source": "chrmanning",
        "target": "douwekiela"
    },
    {
        "source": "chrmanning",
        "target": "huggingface"
    },
    {
        "source": "chrmanning",
        "target": "ctnzr"
    },
    {
        "source": "chrmanning",
        "target": "goodfellow_ian"
    },
    {
        "source": "chrmanning",
        "target": "adinayakup"
    },
    {
        "source": "chrmanning",
        "target": "artificialanlys"
    },
    {
        "source": "chrmanning",
        "target": "zai_org"
    },
    {
        "source": "chrmanning",
        "target": "suchenzang"
    },
    {
        "source": "chrmanning",
        "target": "miles_brundage"
    },
    {
        "source": "chrmanning",
        "target": "ylecun"
    },
    {
        "source": "neuripsconf",
        "target": "googledeepmind"
    },
    {
        "source": "neuripsconf",
        "target": "andrewyng"
    },
    {
        "source": "neuripsconf",
        "target": "ylecun"
    },
    {
        "source": "neuripsconf",
        "target": "hannawallach"
    },
    {
        "source": "neuripsconf",
        "target": "karpathy"
    },
    {
        "source": "neuripsconf",
        "target": "nandodf"
    },
    {
        "source": "nanobanana",
        "target": "googledeepmind"
    },
    {
        "source": "nanobanana",
        "target": "googleaistudio"
    },
    {
        "source": "nanobanana",
        "target": "geminiapp"
    },
    {
        "source": "everlyn_ai",
        "target": "ylecun"
    },
    {
        "source": "ch402",
        "target": "anthropicai"
    },
    {
        "source": "ch402",
        "target": "jackclarksf"
    },
    {
        "source": "ch402",
        "target": "oriolvinyalsml"
    },
    {
        "source": "ch402",
        "target": "zacharylipton"
    },
    {
        "source": "ch402",
        "target": "janleike"
    },
    {
        "source": "ch402",
        "target": "nandodf"
    },
    {
        "source": "ch402",
        "target": "catherineols"
    },
    {
        "source": "ch402",
        "target": "claudeai"
    },
    {
        "source": "ch402",
        "target": "andy_l_jones"
    },
    {
        "source": "ch402",
        "target": "darioamodei"
    },
    {
        "source": "rohanpaul_ai",
        "target": "tunguz"
    },
    {
        "source": "rohanpaul_ai",
        "target": "ylecun"
    },
    {
        "source": "rohanpaul_ai",
        "target": "rasbt"
    },
    {
        "source": "rohanpaul_ai",
        "target": "_akhaliq"
    },
    {
        "source": "rohanpaul_ai",
        "target": "omarsar0"
    },
    {
        "source": "rohanpaul_ai",
        "target": "karpathy"
    },
    {
        "source": "rohanpaul_ai",
        "target": "fchollet"
    },
    {
        "source": "rohanpaul_ai",
        "target": "bcherny"
    },
    {
        "source": "woj_zaremba",
        "target": "gdb"
    },
    {
        "source": "woj_zaremba",
        "target": "hardmaru"
    },
    {
        "source": "woj_zaremba",
        "target": "googledeepmind"
    },
    {
        "source": "woj_zaremba",
        "target": "ilyasut"
    },
    {
        "source": "woj_zaremba",
        "target": "soumithchintala"
    },
    {
        "source": "woj_zaremba",
        "target": "jeremyphoward"
    },
    {
        "source": "woj_zaremba",
        "target": "anthropicai"
    },
    {
        "source": "woj_zaremba",
        "target": "richardsocher"
    },
    {
        "source": "woj_zaremba",
        "target": "oriolvinyalsml"
    },
    {
        "source": "woj_zaremba",
        "target": "miles_brundage"
    },
    {
        "source": "woj_zaremba",
        "target": "jackclarksf"
    },
    {
        "source": "woj_zaremba",
        "target": "jeffdean"
    },
    {
        "source": "woj_zaremba",
        "target": "svlevine"
    },
    {
        "source": "woj_zaremba",
        "target": "npew"
    },
    {
        "source": "woj_zaremba",
        "target": "majmudaradam"
    },
    {
        "source": "woj_zaremba",
        "target": "billpeeb"
    },
    {
        "source": "woj_zaremba",
        "target": "ibab"
    },
    {
        "source": "woj_zaremba",
        "target": "esyudkowsky"
    },
    {
        "source": "woj_zaremba",
        "target": "amandaaskell"
    },
    {
        "source": "woj_zaremba",
        "target": "nickcammarata"
    },
    {
        "source": "woj_zaremba",
        "target": "johnschulman2"
    },
    {
        "source": "woj_zaremba",
        "target": "janleike"
    },
    {
        "source": "arena",
        "target": "nanobanana"
    },
    {
        "source": "arena",
        "target": "perplexity_ai"
    },
    {
        "source": "arena",
        "target": "liamfedus"
    },
    {
        "source": "arena",
        "target": "miramurati"
    },
    {
        "source": "arena",
        "target": "chatgptapp"
    },
    {
        "source": "arena",
        "target": "geminiapp"
    },
    {
        "source": "arena",
        "target": "demishassabis"
    },
    {
        "source": "arena",
        "target": "jeffdean"
    },
    {
        "source": "saranormous",
        "target": "steipete"
    },
    {
        "source": "saranormous",
        "target": "bcherny"
    },
    {
        "source": "saranormous",
        "target": "nickaturley"
    },
    {
        "source": "openainewsroom",
        "target": "openaidevs"
    },
    {
        "source": "openainewsroom",
        "target": "chatgptapp"
    },
    {
        "source": "openainewsroom",
        "target": "openai"
    },
    {
        "source": "googlelabs",
        "target": "googleai"
    },
    {
        "source": "googlelabs",
        "target": "googleaidevs"
    },
    {
        "source": "googlelabs",
        "target": "openainewsroom"
    },
    {
        "source": "googlelabs",
        "target": "geminiapp"
    },
    {
        "source": "nvidiarobotics",
        "target": "nvidia"
    },
    {
        "source": "nvidiarobotics",
        "target": "nvidiastudio"
    },
    {
        "source": "nvidiarobotics",
        "target": "nvidiaaidev"
    },
    {
        "source": "nvidiarobotics",
        "target": "pytorch"
    },
    {
        "source": "nvidiarobotics",
        "target": "tensorflow"
    },
    {
        "source": "nvidiarobotics",
        "target": "nvidiaai"
    },
    {
        "source": "nvidiarobotics",
        "target": "nvidiaomniverse"
    },
    {
        "source": "nvidiarobotics",
        "target": "nvidiadc"
    },
    {
        "source": "nvidiarobotics",
        "target": "nvidianewsroom"
    },
    {
        "source": "nvidiarobotics",
        "target": "nvidiajapan"
    },
    {
        "source": "nvidiarobotics",
        "target": "drjimfan"
    },
    {
        "source": "nvidiarobotics",
        "target": "nvidiacc"
    },
    {
        "source": "giffmana",
        "target": "arankomatsuzaki"
    },
    {
        "source": "giffmana",
        "target": "soumithchintala"
    },
    {
        "source": "giffmana",
        "target": "jeremyphoward"
    },
    {
        "source": "giffmana",
        "target": "schmidhuberai"
    },
    {
        "source": "giffmana",
        "target": "chhillee"
    },
    {
        "source": "giffmana",
        "target": "deliprao"
    },
    {
        "source": "giffmana",
        "target": "wightmanr"
    },
    {
        "source": "giffmana",
        "target": "sirbayes"
    },
    {
        "source": "giffmana",
        "target": "srush_nlp"
    },
    {
        "source": "giffmana",
        "target": "anthropicai"
    },
    {
        "source": "giffmana",
        "target": "sedielem"
    },
    {
        "source": "giffmana",
        "target": "svlevine"
    },
    {
        "source": "giffmana",
        "target": "jfpuget"
    },
    {
        "source": "giffmana",
        "target": "jm_alexia"
    },
    {
        "source": "giffmana",
        "target": "thsottiaux"
    },
    {
        "source": "janleike",
        "target": "woj_zaremba"
    },
    {
        "source": "janleike",
        "target": "anthropicai"
    },
    {
        "source": "janleike",
        "target": "miles_brundage"
    },
    {
        "source": "janleike",
        "target": "jackclarksf"
    },
    {
        "source": "janleike",
        "target": "amandaaskell"
    },
    {
        "source": "janleike",
        "target": "ilyasut"
    },
    {
        "source": "janleike",
        "target": "sleepinyourhat"
    },
    {
        "source": "janleike",
        "target": "zicokolter"
    },
    {
        "source": "janleike",
        "target": "fidjissimo"
    },
    {
        "source": "alexalbert__",
        "target": "hendrycks"
    },
    {
        "source": "svlevine",
        "target": "soumithchintala"
    },
    {
        "source": "svlevine",
        "target": "giffmana"
    },
    {
        "source": "svlevine",
        "target": "oriolvinyalsml"
    },
    {
        "source": "svlevine",
        "target": "natashajaques"
    },
    {
        "source": "svlevine",
        "target": "tdietterich"
    },
    {
        "source": "svlevine",
        "target": "sedielem"
    },
    {
        "source": "svlevine",
        "target": "dpkingma"
    },
    {
        "source": "svlevine",
        "target": "zoubinghahrama1"
    },
    {
        "source": "svlevine",
        "target": "remicadene"
    },
    {
        "source": "richardsocher",
        "target": "soumithchintala"
    },
    {
        "source": "richardsocher",
        "target": "deliprao"
    },
    {
        "source": "richardsocher",
        "target": "srush_nlp"
    },
    {
        "source": "richardsocher",
        "target": "chrmanning"
    },
    {
        "source": "richardsocher",
        "target": "julien_c"
    },
    {
        "source": "richardsocher",
        "target": "oriolvinyalsml"
    },
    {
        "source": "richardsocher",
        "target": "clementdelangue"
    },
    {
        "source": "richardsocher",
        "target": "anthropicai"
    },
    {
        "source": "richardsocher",
        "target": "roydanroy"
    },
    {
        "source": "richardsocher",
        "target": "neuripsconf"
    },
    {
        "source": "richardsocher",
        "target": "sleepinyourhat"
    },
    {
        "source": "richardsocher",
        "target": "sedielem"
    },
    {
        "source": "richardsocher",
        "target": "zacharylipton"
    },
    {
        "source": "richardsocher",
        "target": "tdietterich"
    },
    {
        "source": "richardsocher",
        "target": "_jasonwei"
    },
    {
        "source": "richardsocher",
        "target": "gneubig"
    },
    {
        "source": "richardsocher",
        "target": "thom_wolf"
    },
    {
        "source": "richardsocher",
        "target": "sarahookr"
    },
    {
        "source": "richardsocher",
        "target": "yuhu_ai_"
    },
    {
        "source": "richardsocher",
        "target": "xwang_lk"
    },
    {
        "source": "richardsocher",
        "target": "koylanai"
    },
    {
        "source": "richardsocher",
        "target": "josh_tobin_"
    },
    {
        "source": "richardsocher",
        "target": "saranormous"
    },
    {
        "source": "richardsocher",
        "target": "suchenzang"
    },
    {
        "source": "richardsocher",
        "target": "tydsh"
    },
    {
        "source": "richardsocher",
        "target": "hendrycks"
    },
    {
        "source": "richardsocher",
        "target": "tkipf"
    },
    {
        "source": "richardsocher",
        "target": "itstkai"
    },
    {
        "source": "richardsocher",
        "target": "pirroh"
    },
    {
        "source": "richardsocher",
        "target": "ericzelikman"
    },
    {
        "source": "richardsocher",
        "target": "liamfedus"
    },
    {
        "source": "richardsocher",
        "target": "dspyoss"
    },
    {
        "source": "richardsocher",
        "target": "getjonwithit"
    },
    {
        "source": "richardsocher",
        "target": "lorwen108"
    },
    {
        "source": "richardsocher",
        "target": "shengjia_zhao"
    },
    {
        "source": "richardsocher",
        "target": "rao2z"
    },
    {
        "source": "antigravity",
        "target": "googleaidevs"
    },
    {
        "source": "antigravity",
        "target": "geminiapp"
    },
    {
        "source": "antigravity",
        "target": "nanobanana"
    },
    {
        "source": "antigravity",
        "target": "koraykv"
    },
    {
        "source": "antigravity",
        "target": "googledeepmind"
    },
    {
        "source": "antigravity",
        "target": "demishassabis"
    },
    {
        "source": "antigravity",
        "target": "_mohansolo"
    },
    {
        "source": "googleaistudio",
        "target": "googledeepmind"
    },
    {
        "source": "googleaistudio",
        "target": "googleai"
    },
    {
        "source": "lioronai",
        "target": "karpathy"
    },
    {
        "source": "lioronai",
        "target": "ylecun"
    },
    {
        "source": "lioronai",
        "target": "tunguz"
    },
    {
        "source": "lioronai",
        "target": "_akhaliq"
    },
    {
        "source": "lioronai",
        "target": "fchollet"
    },
    {
        "source": "lioronai",
        "target": "rasbt"
    },
    {
        "source": "lioronai",
        "target": "hardmaru"
    },
    {
        "source": "lioronai",
        "target": "omarsar0"
    },
    {
        "source": "lioronai",
        "target": "andrewyng"
    },
    {
        "source": "lioronai",
        "target": "drjimfan"
    },
    {
        "source": "lioronai",
        "target": "gdb"
    },
    {
        "source": "lioronai",
        "target": "googledeepmind"
    },
    {
        "source": "lioronai",
        "target": "goodside"
    },
    {
        "source": "lioronai",
        "target": "emostaque"
    },
    {
        "source": "lioronai",
        "target": "ai__pub"
    },
    {
        "source": "lioronai",
        "target": "moltbook"
    },
    {
        "source": "profstevekeen",
        "target": "garymarcus"
    },
    {
        "source": "jackclarksf",
        "target": "miles_brundage"
    },
    {
        "source": "jackclarksf",
        "target": "soumithchintala"
    },
    {
        "source": "jackclarksf",
        "target": "arankomatsuzaki"
    },
    {
        "source": "jackclarksf",
        "target": "anthropicai"
    },
    {
        "source": "jackclarksf",
        "target": "deliprao"
    },
    {
        "source": "jackclarksf",
        "target": "jeremyphoward"
    },
    {
        "source": "jackclarksf",
        "target": "giffmana"
    },
    {
        "source": "jackclarksf",
        "target": "woj_zaremba"
    },
    {
        "source": "jackclarksf",
        "target": "richardsocher"
    },
    {
        "source": "jackclarksf",
        "target": "amandaaskell"
    },
    {
        "source": "jackclarksf",
        "target": "oriolvinyalsml"
    },
    {
        "source": "jackclarksf",
        "target": "clementdelangue"
    },
    {
        "source": "jackclarksf",
        "target": "chhillee"
    },
    {
        "source": "nandodf",
        "target": "soumithchintala"
    },
    {
        "source": "nandodf",
        "target": "arankomatsuzaki"
    },
    {
        "source": "nandodf",
        "target": "giffmana"
    },
    {
        "source": "nandodf",
        "target": "deliprao"
    },
    {
        "source": "nandodf",
        "target": "richardsocher"
    },
    {
        "source": "nandodf",
        "target": "sirbayes"
    },
    {
        "source": "nandodf",
        "target": "oriolvinyalsml"
    },
    {
        "source": "nandodf",
        "target": "neuripsconf"
    },
    {
        "source": "nandodf",
        "target": "roydanroy"
    },
    {
        "source": "nandodf",
        "target": "miles_brundage"
    },
    {
        "source": "nandodf",
        "target": "sedielem"
    },
    {
        "source": "nandodf",
        "target": "tdietterich"
    },
    {
        "source": "nandodf",
        "target": "srush_nlp"
    },
    {
        "source": "nandodf",
        "target": "anthropicai"
    },
    {
        "source": "nandodf",
        "target": "sarahookr"
    },
    {
        "source": "nandodf",
        "target": "code"
    },
    {
        "source": "nandodf",
        "target": "bcherny"
    },
    {
        "source": "nandodf",
        "target": "theworldlabs"
    },
    {
        "source": "nandodf",
        "target": "shengjia_zhao"
    },
    {
        "source": "nandodf",
        "target": "zai_org"
    },
    {
        "source": "ibab",
        "target": "googledeepmind"
    },
    {
        "source": "ibab",
        "target": "hardmaru"
    },
    {
        "source": "ibab",
        "target": "_akhaliq"
    },
    {
        "source": "ibab",
        "target": "sedielem"
    },
    {
        "source": "ibab",
        "target": "emostaque"
    },
    {
        "source": "ibab",
        "target": "drjimfan"
    },
    {
        "source": "ibab",
        "target": "miles_brundage"
    },
    {
        "source": "ibab",
        "target": "arankomatsuzaki"
    },
    {
        "source": "ibab",
        "target": "soumithchintala"
    },
    {
        "source": "ibab",
        "target": "jackclarksf"
    },
    {
        "source": "ibab",
        "target": "ilyasut"
    },
    {
        "source": "ibab",
        "target": "anthropicai"
    },
    {
        "source": "ibab",
        "target": "janleike"
    },
    {
        "source": "ibab",
        "target": "chhillee"
    },
    {
        "source": "ibab",
        "target": "jeffdean"
    },
    {
        "source": "ibab",
        "target": "steipete"
    },
    {
        "source": "docmilanfar",
        "target": "csprofkgd"
    },
    {
        "source": "docmilanfar",
        "target": "thegautamkamath"
    },
    {
        "source": "docmilanfar",
        "target": "mmbronstein"
    },
    {
        "source": "docmilanfar",
        "target": "sirbayes"
    },
    {
        "source": "docmilanfar",
        "target": "tdietterich"
    },
    {
        "source": "docmilanfar",
        "target": "sarahookr"
    },
    {
        "source": "docmilanfar",
        "target": "chris_j_paxton"
    },
    {
        "source": "_jasonwei",
        "target": "arankomatsuzaki"
    },
    {
        "source": "_jasonwei",
        "target": "deliprao"
    },
    {
        "source": "_jasonwei",
        "target": "giffmana"
    },
    {
        "source": "_jasonwei",
        "target": "savvyrl"
    },
    {
        "source": "_jasonwei",
        "target": "anthropicai"
    },
    {
        "source": "_jasonwei",
        "target": "srush_nlp"
    },
    {
        "source": "_jasonwei",
        "target": "sleepinyourhat"
    },
    {
        "source": "_jasonwei",
        "target": "shaneguml"
    },
    {
        "source": "_jasonwei",
        "target": "chrmanning"
    },
    {
        "source": "_jasonwei",
        "target": "gneubig"
    },
    {
        "source": "_jasonwei",
        "target": "felixhill84"
    },
    {
        "source": "_jasonwei",
        "target": "nickaturley"
    },
    {
        "source": "_jasonwei",
        "target": "bcherny"
    },
    {
        "source": "bradsmi",
        "target": "karpathy"
    },
    {
        "source": "bradsmi",
        "target": "sriramk"
    },
    {
        "source": "bradsmi",
        "target": "mustafasuleyman"
    },
    {
        "source": "bradsmi",
        "target": "drfeifei"
    },
    {
        "source": "bradsmi",
        "target": "gdb"
    },
    {
        "source": "bradsmi",
        "target": "openai"
    },
    {
        "source": "thom_wolf",
        "target": "soumithchintala"
    },
    {
        "source": "thom_wolf",
        "target": "arankomatsuzaki"
    },
    {
        "source": "thom_wolf",
        "target": "jeremyphoward"
    },
    {
        "source": "thom_wolf",
        "target": "abhi1thakur"
    },
    {
        "source": "thom_wolf",
        "target": "deliprao"
    },
    {
        "source": "thom_wolf",
        "target": "mervenoyann"
    },
    {
        "source": "thom_wolf",
        "target": "julien_c"
    },
    {
        "source": "thom_wolf",
        "target": "clementdelangue"
    },
    {
        "source": "thom_wolf",
        "target": "giffmana"
    },
    {
        "source": "thom_wolf",
        "target": "huggingface"
    },
    {
        "source": "thom_wolf",
        "target": "richardsocher"
    },
    {
        "source": "thom_wolf",
        "target": "srush_nlp"
    },
    {
        "source": "thom_wolf",
        "target": "osanseviero"
    },
    {
        "source": "thom_wolf",
        "target": "chhillee"
    },
    {
        "source": "thom_wolf",
        "target": "savvyrl"
    },
    {
        "source": "thom_wolf",
        "target": "pashmerepat"
    },
    {
        "source": "thom_wolf",
        "target": "claudeai"
    },
    {
        "source": "thom_wolf",
        "target": "thsottiaux"
    },
    {
        "source": "nvidiageforcebr",
        "target": "nvidiaaidev"
    },
    {
        "source": "nvidiageforcebr",
        "target": "nvidianewsroom"
    },
    {
        "source": "nvidiageforcebr",
        "target": "nvidiagamedev"
    },
    {
        "source": "googleaidevs",
        "target": "googleai"
    },
    {
        "source": "googleaidevs",
        "target": "antigravity"
    },
    {
        "source": "googleaidevs",
        "target": "googlelabs"
    },
    {
        "source": "googleaidevs",
        "target": "nanobanana"
    },
    {
        "source": "googleaidevs",
        "target": "googleaistudio"
    },
    {
        "source": "googleaidevs",
        "target": "tulseedoshi"
    },
    {
        "source": "googleaidevs",
        "target": "ai_for_success"
    },
    {
        "source": "googleaidevs",
        "target": "mathemagic1an"
    },
    {
        "source": "googleaidevs",
        "target": "oriolvinyalsml"
    },
    {
        "source": "googleaidevs",
        "target": "emollick"
    },
    {
        "source": "googleaidevs",
        "target": "demishassabis"
    },
    {
        "source": "googleaidevs",
        "target": "joshwoodward"
    },
    {
        "source": "googleaidevs",
        "target": "jeffdean"
    },
    {
        "source": "googleaidevs",
        "target": "osanseviero"
    },
    {
        "source": "googleaidevs",
        "target": "officiallogank"
    },
    {
        "source": "googleaidevs",
        "target": "googledeepmind"
    },
    {
        "source": "abhi1thakur",
        "target": "tunguz"
    },
    {
        "source": "abhi1thakur",
        "target": "fchollet"
    },
    {
        "source": "abhi1thakur",
        "target": "ylecun"
    },
    {
        "source": "abhi1thakur",
        "target": "rasbt"
    },
    {
        "source": "abhi1thakur",
        "target": "omarsar0"
    },
    {
        "source": "abhi1thakur",
        "target": "hardmaru"
    },
    {
        "source": "abhi1thakur",
        "target": "andrewyng"
    },
    {
        "source": "abhi1thakur",
        "target": "_akhaliq"
    },
    {
        "source": "abhi1thakur",
        "target": "jeremyphoward"
    },
    {
        "source": "abhi1thakur",
        "target": "pytorch"
    },
    {
        "source": "abhi1thakur",
        "target": "soumithchintala"
    },
    {
        "source": "abhi1thakur",
        "target": "huggingface"
    },
    {
        "source": "abhi1thakur",
        "target": "roydanroy"
    },
    {
        "source": "math_rachel",
        "target": "jeremyphoward"
    },
    {
        "source": "math_rachel",
        "target": "soumithchintala"
    },
    {
        "source": "math_rachel",
        "target": "mmitchell_ai"
    },
    {
        "source": "math_rachel",
        "target": "sashamtl"
    },
    {
        "source": "math_rachel",
        "target": "sedielem"
    },
    {
        "source": "math_rachel",
        "target": "natashajaques"
    },
    {
        "source": "math_rachel",
        "target": "geoffreylitt"
    },
    {
        "source": "math_rachel",
        "target": "steipete"
    },
    {
        "source": "math_rachel",
        "target": "suchenzang"
    },
    {
        "source": "math_rachel",
        "target": "rohanpaul_ai"
    },
    {
        "source": "nvidiageforcela",
        "target": "nvidiageforcees"
    },
    {
        "source": "nvidiageforcela",
        "target": "nvidiageforcede"
    },
    {
        "source": "nvidiageforcela",
        "target": "nvidiaomniverse"
    },
    {
        "source": "nvidiageforcela",
        "target": "nvidiacc"
    },
    {
        "source": "nvidiageforcela",
        "target": "nvidiagfn"
    },
    {
        "source": "nvidiageforcela",
        "target": "nvidiastudio"
    },
    {
        "source": "fidjissimo",
        "target": "levie"
    },
    {
        "source": "fidjissimo",
        "target": "sriramk"
    },
    {
        "source": "fidjissimo",
        "target": "steipete"
    },
    {
        "source": "fidjissimo",
        "target": "billpeeb"
    },
    {
        "source": "nvidiaaidev",
        "target": "ylecun"
    },
    {
        "source": "nvidiaaidev",
        "target": "_akhaliq"
    },
    {
        "source": "nvidiaaidev",
        "target": "hardmaru"
    },
    {
        "source": "nvidiaaidev",
        "target": "rasbt"
    },
    {
        "source": "nvidiaaidev",
        "target": "googledeepmind"
    },
    {
        "source": "nvidiaaidev",
        "target": "pytorch"
    },
    {
        "source": "nvidiaaidev",
        "target": "drjimfan"
    },
    {
        "source": "nvidiaaidev",
        "target": "soumithchintala"
    },
    {
        "source": "nvidiaaidev",
        "target": "csprofkgd"
    },
    {
        "source": "nvidiaaidev",
        "target": "jeremyphoward"
    },
    {
        "source": "nvidiaaidev",
        "target": "huggingface"
    },
    {
        "source": "nvidiaaidev",
        "target": "nvidiaai"
    },
    {
        "source": "nvidiaaidev",
        "target": "tensorflow"
    },
    {
        "source": "nvidiaaidev",
        "target": "nvidia"
    },
    {
        "source": "nvidiaaidev",
        "target": "julien_c"
    },
    {
        "source": "nvidiaaidev",
        "target": "neuripsconf"
    },
    {
        "source": "nvidiaaidev",
        "target": "anthropicai"
    },
    {
        "source": "nvidiaaidev",
        "target": "mistralai"
    },
    {
        "source": "nvidiaaidev",
        "target": "unslothai"
    },
    {
        "source": "nvidiaaidev",
        "target": "openaidevs"
    },
    {
        "source": "nvidiaaidev",
        "target": "xai"
    },
    {
        "source": "nvidiaaidev",
        "target": "artificialanlys"
    },
    {
        "source": "nvidiageforceme",
        "target": "nvidianewsroom"
    },
    {
        "source": "nvidiageforceme",
        "target": "nvidiaomniverse"
    },
    {
        "source": "nvidiageforceme",
        "target": "nvidiaworkstatn"
    },
    {
        "source": "nvidiageforceme",
        "target": "nvidiacc"
    },
    {
        "source": "nvidiageforceme",
        "target": "nvidiageforceuk"
    },
    {
        "source": "nvidiageforceme",
        "target": "nvidia"
    },
    {
        "source": "nvidiageforceme",
        "target": "nvidiageforce"
    },
    {
        "source": "nickcammarata",
        "target": "amandaaskell"
    },
    {
        "source": "nickcammarata",
        "target": "bcherny"
    },
    {
        "source": "chelseabfinn",
        "target": "soumithchintala"
    },
    {
        "source": "chelseabfinn",
        "target": "svlevine"
    },
    {
        "source": "chelseabfinn",
        "target": "neuripsconf"
    },
    {
        "source": "chelseabfinn",
        "target": "sirbayes"
    },
    {
        "source": "chelseabfinn",
        "target": "mattniessner"
    },
    {
        "source": "chelseabfinn",
        "target": "srush_nlp"
    },
    {
        "source": "chelseabfinn",
        "target": "oriolvinyalsml"
    },
    {
        "source": "chelseabfinn",
        "target": "tdietterich"
    },
    {
        "source": "chelseabfinn",
        "target": "zacharylipton"
    },
    {
        "source": "chelseabfinn",
        "target": "shaneguml"
    },
    {
        "source": "chelseabfinn",
        "target": "chrmanning"
    },
    {
        "source": "chelseabfinn",
        "target": "liamfedus"
    },
    {
        "source": "chelseabfinn",
        "target": "drjimfan"
    },
    {
        "source": "chelseabfinn",
        "target": "melmitchell1"
    },
    {
        "source": "matthewberman",
        "target": "sama"
    },
    {
        "source": "matthewberman",
        "target": "austen"
    },
    {
        "source": "matthewberman",
        "target": "levie"
    },
    {
        "source": "matthewberman",
        "target": "alexandr_wang"
    },
    {
        "source": "matthewberman",
        "target": "moltbook"
    },
    {
        "source": "matthewberman",
        "target": "steipete"
    },
    {
        "source": "matthewberman",
        "target": "openclaw"
    },
    {
        "source": "matthewberman",
        "target": "ericzelikman"
    },
    {
        "source": "ciguleva",
        "target": "yuhu_ai_"
    },
    {
        "source": "mervenoyann",
        "target": "huggingface"
    },
    {
        "source": "mervenoyann",
        "target": "julien_c"
    },
    {
        "source": "mervenoyann",
        "target": "osanseviero"
    },
    {
        "source": "mervenoyann",
        "target": "openclaw"
    },
    {
        "source": "mervenoyann",
        "target": "matthewberman"
    },
    {
        "source": "mervenoyann",
        "target": "bcherny"
    },
    {
        "source": "gizakdag",
        "target": "moltbook"
    },
    {
        "source": "gizakdag",
        "target": "steipete"
    },
    {
        "source": "gizakdag",
        "target": "openclaw"
    },
    {
        "source": "gizakdag",
        "target": "joshwoodward"
    },
    {
        "source": "mmitchell_ai",
        "target": "sashamtl"
    },
    {
        "source": "mmitchell_ai",
        "target": "savvyrl"
    },
    {
        "source": "mmitchell_ai",
        "target": "miles_brundage"
    },
    {
        "source": "mmitchell_ai",
        "target": "clementdelangue"
    },
    {
        "source": "mmitchell_ai",
        "target": "sarahookr"
    },
    {
        "source": "mmitchell_ai",
        "target": "srush_nlp"
    },
    {
        "source": "mmitchell_ai",
        "target": "julien_c"
    },
    {
        "source": "mmitchell_ai",
        "target": "osanseviero"
    },
    {
        "source": "mmitchell_ai",
        "target": "zacharylipton"
    },
    {
        "source": "mmitchell_ai",
        "target": "jm_alexia"
    },
    {
        "source": "mmitchell_ai",
        "target": "ctnzr"
    },
    {
        "source": "mmitchell_ai",
        "target": "sebastienbubeck"
    },
    {
        "source": "iamtrask",
        "target": "fchollet"
    },
    {
        "source": "iamtrask",
        "target": "ylecun"
    },
    {
        "source": "iamtrask",
        "target": "hardmaru"
    },
    {
        "source": "iamtrask",
        "target": "rasbt"
    },
    {
        "source": "iamtrask",
        "target": "jeremyphoward"
    },
    {
        "source": "iamtrask",
        "target": "soumithchintala"
    },
    {
        "source": "iamtrask",
        "target": "abhi1thakur"
    },
    {
        "source": "iamtrask",
        "target": "arankomatsuzaki"
    },
    {
        "source": "iamtrask",
        "target": "mervenoyann"
    },
    {
        "source": "iamtrask",
        "target": "giffmana"
    },
    {
        "source": "iamtrask",
        "target": "huggingface"
    },
    {
        "source": "iamtrask",
        "target": "srush_nlp"
    },
    {
        "source": "iamtrask",
        "target": "sirbayes"
    },
    {
        "source": "iamtrask",
        "target": "julien_c"
    },
    {
        "source": "iamtrask",
        "target": "oriolvinyalsml"
    },
    {
        "source": "iamtrask",
        "target": "woj_zaremba"
    },
    {
        "source": "iamtrask",
        "target": "tydsh"
    },
    {
        "source": "iamtrask",
        "target": "darioamodei"
    },
    {
        "source": "iamtrask",
        "target": "deryatr_"
    },
    {
        "source": "allen_ai",
        "target": "deliprao"
    },
    {
        "source": "allen_ai",
        "target": "chrmanning"
    },
    {
        "source": "allen_ai",
        "target": "thom_wolf"
    },
    {
        "source": "allen_ai",
        "target": "egrefen"
    },
    {
        "source": "allen_ai",
        "target": "perplexity_ai"
    },
    {
        "source": "allen_ai",
        "target": "karpathy"
    },
    {
        "source": "allen_ai",
        "target": "sarahookr"
    },
    {
        "source": "allen_ai",
        "target": "richardsocher"
    },
    {
        "source": "allen_ai",
        "target": "nandodf"
    },
    {
        "source": "allen_ai",
        "target": "drjimfan"
    },
    {
        "source": "allen_ai",
        "target": "jeremyphoward"
    },
    {
        "source": "artificialanlys",
        "target": "yuhu_ai_"
    },
    {
        "source": "artificialanlys",
        "target": "suchenzang"
    },
    {
        "source": "artificialanlys",
        "target": "srush_nlp"
    },
    {
        "source": "artificialanlys",
        "target": "tydsh"
    },
    {
        "source": "ai_for_success",
        "target": "steipete"
    },
    {
        "source": "ai_for_success",
        "target": "bcherny"
    },
    {
        "source": "ai_for_success",
        "target": "koraykv"
    },
    {
        "source": "ai_for_success",
        "target": "goodfellow_ian"
    },
    {
        "source": "ai_for_success",
        "target": "antigravity"
    },
    {
        "source": "ai_for_success",
        "target": "goodside"
    },
    {
        "source": "nvidianetworkng",
        "target": "nvidia"
    },
    {
        "source": "nvidianetworkng",
        "target": "nvidiastudio"
    },
    {
        "source": "nvidianetworkng",
        "target": "nvidiaai"
    },
    {
        "source": "nvidianetworkng",
        "target": "nvidiadc"
    },
    {
        "source": "nvidianetworkng",
        "target": "nvidiahpcdev"
    },
    {
        "source": "nvidianetworkng",
        "target": "nvidiagtc"
    },
    {
        "source": "nvidianetworkng",
        "target": "nvidianewsroom"
    },
    {
        "source": "nvidianetworkng",
        "target": "nvidiaomniverse"
    },
    {
        "source": "nvidianetworkng",
        "target": "nvidiaworkstatn"
    },
    {
        "source": "srush_nlp",
        "target": "soumithchintala"
    },
    {
        "source": "srush_nlp",
        "target": "clementdelangue"
    },
    {
        "source": "srush_nlp",
        "target": "savvyrl"
    },
    {
        "source": "srush_nlp",
        "target": "sleepinyourhat"
    },
    {
        "source": "srush_nlp",
        "target": "chrmanning"
    },
    {
        "source": "srush_nlp",
        "target": "chhillee"
    },
    {
        "source": "srush_nlp",
        "target": "gneubig"
    },
    {
        "source": "srush_nlp",
        "target": "julien_c"
    },
    {
        "source": "srush_nlp",
        "target": "sarahookr"
    },
    {
        "source": "srush_nlp",
        "target": "thom_wolf"
    },
    {
        "source": "srush_nlp",
        "target": "douwekiela"
    },
    {
        "source": "srush_nlp",
        "target": "zicokolter"
    },
    {
        "source": "srush_nlp",
        "target": "andy_l_jones"
    },
    {
        "source": "srush_nlp",
        "target": "shamkakade6"
    },
    {
        "source": "srush_nlp",
        "target": "khoomeik"
    },
    {
        "source": "srush_nlp",
        "target": "miramurati"
    },
    {
        "source": "csprofkgd",
        "target": "_akhaliq"
    },
    {
        "source": "csprofkgd",
        "target": "docmilanfar"
    },
    {
        "source": "csprofkgd",
        "target": "mattniessner"
    },
    {
        "source": "csprofkgd",
        "target": "giffmana"
    },
    {
        "source": "csprofkgd",
        "target": "schmidhuberai"
    },
    {
        "source": "csprofkgd",
        "target": "soumithchintala"
    },
    {
        "source": "csprofkgd",
        "target": "arankomatsuzaki"
    },
    {
        "source": "csprofkgd",
        "target": "mmbronstein"
    },
    {
        "source": "csprofkgd",
        "target": "neuripsconf"
    },
    {
        "source": "csprofkgd",
        "target": "yoshua_bengio"
    },
    {
        "source": "csprofkgd",
        "target": "sedielem"
    },
    {
        "source": "csprofkgd",
        "target": "rasbt"
    },
    {
        "source": "johnschulman2",
        "target": "gdb"
    },
    {
        "source": "johnschulman2",
        "target": "goodside"
    },
    {
        "source": "johnschulman2",
        "target": "googledeepmind"
    },
    {
        "source": "johnschulman2",
        "target": "emostaque"
    },
    {
        "source": "johnschulman2",
        "target": "drjimfan"
    },
    {
        "source": "johnschulman2",
        "target": "woj_zaremba"
    },
    {
        "source": "johnschulman2",
        "target": "soumithchintala"
    },
    {
        "source": "johnschulman2",
        "target": "ilyasut"
    },
    {
        "source": "johnschulman2",
        "target": "arankomatsuzaki"
    },
    {
        "source": "johnschulman2",
        "target": "jeremyphoward"
    },
    {
        "source": "johnschulman2",
        "target": "giffmana"
    },
    {
        "source": "johnschulman2",
        "target": "anthropicai"
    },
    {
        "source": "johnschulman2",
        "target": "svlevine"
    },
    {
        "source": "johnschulman2",
        "target": "richardsocher"
    },
    {
        "source": "johnschulman2",
        "target": "mathemagic1an"
    },
    {
        "source": "johnschulman2",
        "target": "miles_brundage"
    },
    {
        "source": "johnschulman2",
        "target": "sammcallister"
    },
    {
        "source": "johnschulman2",
        "target": "moltbook"
    },
    {
        "source": "johnschulman2",
        "target": "claudeai"
    },
    {
        "source": "rihardjarc",
        "target": "claudeai"
    },
    {
        "source": "rihardjarc",
        "target": "darioamodei"
    },
    {
        "source": "rihardjarc",
        "target": "steipete"
    },
    {
        "source": "rihardjarc",
        "target": "openclaw"
    },
    {
        "source": "rihardjarc",
        "target": "nvidianewsroom"
    },
    {
        "source": "ai__pub",
        "target": "karpathy"
    },
    {
        "source": "ai__pub",
        "target": "ylecun"
    },
    {
        "source": "ai__pub",
        "target": "_akhaliq"
    },
    {
        "source": "ai__pub",
        "target": "fchollet"
    },
    {
        "source": "ai__pub",
        "target": "hardmaru"
    },
    {
        "source": "ai__pub",
        "target": "gdb"
    },
    {
        "source": "ai__pub",
        "target": "emostaque"
    },
    {
        "source": "ai__pub",
        "target": "rasbt"
    },
    {
        "source": "ai__pub",
        "target": "googledeepmind"
    },
    {
        "source": "ai__pub",
        "target": "drjimfan"
    },
    {
        "source": "ai__pub",
        "target": "omarsar0"
    },
    {
        "source": "ai__pub",
        "target": "lioronai"
    },
    {
        "source": "ai__pub",
        "target": "arankomatsuzaki"
    },
    {
        "source": "ai__pub",
        "target": "pytorch"
    },
    {
        "source": "ai__pub",
        "target": "jeremyphoward"
    },
    {
        "source": "ai__pub",
        "target": "soumithchintala"
    },
    {
        "source": "ai__pub",
        "target": "jeffdean"
    },
    {
        "source": "ai__pub",
        "target": "chhillee"
    },
    {
        "source": "ai__pub",
        "target": "suchenzang"
    },
    {
        "source": "ai__pub",
        "target": "pirroh"
    },
    {
        "source": "ai__pub",
        "target": "perplexity_ai"
    },
    {
        "source": "amandaaskell",
        "target": "esyudkowsky"
    },
    {
        "source": "amandaaskell",
        "target": "nickcammarata"
    },
    {
        "source": "amandaaskell",
        "target": "miles_brundage"
    },
    {
        "source": "amandaaskell",
        "target": "anthropicai"
    },
    {
        "source": "amandaaskell",
        "target": "claudeai"
    },
    {
        "source": "amandaaskell",
        "target": "ancadianadragan"
    },
    {
        "source": "amandaaskell",
        "target": "lexfridman"
    },
    {
        "source": "amandaaskell",
        "target": "darioamodei"
    },
    {
        "source": "amandaaskell",
        "target": "yoshua_bengio"
    },
    {
        "source": "amandaaskell",
        "target": "alexalbert__"
    },
    {
        "source": "amandaaskell",
        "target": "stuartjritchie"
    },
    {
        "source": "tobyphln",
        "target": "imhaotian"
    },
    {
        "source": "tobyphln",
        "target": "aelluswamy"
    },
    {
        "source": "tobyphln",
        "target": "lm_zheng"
    },
    {
        "source": "tobyphln",
        "target": "thsottiaux"
    },
    {
        "source": "sebastienbubeck",
        "target": "thegautamkamath"
    },
    {
        "source": "sebastienbubeck",
        "target": "docmilanfar"
    },
    {
        "source": "sebastienbubeck",
        "target": "roydanroy"
    },
    {
        "source": "sebastienbubeck",
        "target": "sirbayes"
    },
    {
        "source": "sebastienbubeck",
        "target": "boazbaraktcs"
    },
    {
        "source": "sebastienbubeck",
        "target": "mmbronstein"
    },
    {
        "source": "sebastienbubeck",
        "target": "neuripsconf"
    },
    {
        "source": "sebastienbubeck",
        "target": "tdietterich"
    },
    {
        "source": "sebastienbubeck",
        "target": "zacharylipton"
    },
    {
        "source": "sebastienbubeck",
        "target": "moltbook"
    },
    {
        "source": "sebastienbubeck",
        "target": "thsottiaux"
    },
    {
        "source": "sebastienbubeck",
        "target": "chatgpt21"
    },
    {
        "source": "sebastienbubeck",
        "target": "chhillee"
    },
    {
        "source": "sebastienbubeck",
        "target": "ericzelikman"
    },
    {
        "source": "julien_c",
        "target": "omarsar0"
    },
    {
        "source": "julien_c",
        "target": "clementdelangue"
    },
    {
        "source": "julien_c",
        "target": "mervenoyann"
    },
    {
        "source": "julien_c",
        "target": "huggingface"
    },
    {
        "source": "julien_c",
        "target": "abhi1thakur"
    },
    {
        "source": "julien_c",
        "target": "soumithchintala"
    },
    {
        "source": "julien_c",
        "target": "pytorch"
    },
    {
        "source": "julien_c",
        "target": "jeremyphoward"
    },
    {
        "source": "julien_c",
        "target": "osanseviero"
    },
    {
        "source": "julien_c",
        "target": "deliprao"
    },
    {
        "source": "julien_c",
        "target": "thom_wolf"
    },
    {
        "source": "julien_c",
        "target": "richardsocher"
    },
    {
        "source": "julien_c",
        "target": "srush_nlp"
    },
    {
        "source": "julien_c",
        "target": "_nateraw"
    },
    {
        "source": "julien_c",
        "target": "darioamodei"
    },
    {
        "source": "julien_c",
        "target": "bcherny"
    },
    {
        "source": "nvidiashield",
        "target": "nvidiageforce"
    },
    {
        "source": "nvidiashield",
        "target": "nvidiagfn"
    },
    {
        "source": "nvidiashield",
        "target": "nvidiastudio"
    },
    {
        "source": "nvidiashield",
        "target": "nvidiageforceuk"
    },
    {
        "source": "nvidiashield",
        "target": "nvidiaanz"
    },
    {
        "source": "nvidiashield",
        "target": "nvidia"
    },
    {
        "source": "sirbayes",
        "target": "docmilanfar"
    },
    {
        "source": "sirbayes",
        "target": "schmidhuberai"
    },
    {
        "source": "sirbayes",
        "target": "giffmana"
    },
    {
        "source": "sirbayes",
        "target": "soumithchintala"
    },
    {
        "source": "sirbayes",
        "target": "roydanroy"
    },
    {
        "source": "sirbayes",
        "target": "neuripsconf"
    },
    {
        "source": "sirbayes",
        "target": "mmbronstein"
    },
    {
        "source": "sirbayes",
        "target": "svlevine"
    },
    {
        "source": "sirbayes",
        "target": "tdietterich"
    },
    {
        "source": "sirbayes",
        "target": "claudeai"
    },
    {
        "source": "sirbayes",
        "target": "palmerluckey"
    },
    {
        "source": "sirbayes",
        "target": "rasbt"
    },
    {
        "source": "miles_brundage",
        "target": "deliprao"
    },
    {
        "source": "miles_brundage",
        "target": "arankomatsuzaki"
    },
    {
        "source": "miles_brundage",
        "target": "soumithchintala"
    },
    {
        "source": "miles_brundage",
        "target": "jackclarksf"
    },
    {
        "source": "miles_brundage",
        "target": "anthropicai"
    },
    {
        "source": "miles_brundage",
        "target": "richardsocher"
    },
    {
        "source": "miles_brundage",
        "target": "woj_zaremba"
    },
    {
        "source": "miles_brundage",
        "target": "giffmana"
    },
    {
        "source": "miles_brundage",
        "target": "savvyrl"
    },
    {
        "source": "miles_brundage",
        "target": "sleepinyourhat"
    },
    {
        "source": "miles_brundage",
        "target": "amandaaskell"
    },
    {
        "source": "miles_brundage",
        "target": "srush_nlp"
    },
    {
        "source": "miles_brundage",
        "target": "openaidevs"
    },
    {
        "source": "sedielem",
        "target": "soumithchintala"
    },
    {
        "source": "sedielem",
        "target": "giffmana"
    },
    {
        "source": "sedielem",
        "target": "arankomatsuzaki"
    },
    {
        "source": "sedielem",
        "target": "pytorch"
    },
    {
        "source": "sedielem",
        "target": "schmidhuberai"
    },
    {
        "source": "sedielem",
        "target": "jeremyphoward"
    },
    {
        "source": "sedielem",
        "target": "richardsocher"
    },
    {
        "source": "sedielem",
        "target": "sirbayes"
    },
    {
        "source": "sedielem",
        "target": "csprofkgd"
    },
    {
        "source": "sedielem",
        "target": "chhillee"
    },
    {
        "source": "sedielem",
        "target": "woj_zaremba"
    },
    {
        "source": "sedielem",
        "target": "oriolvinyalsml"
    },
    {
        "source": "sedielem",
        "target": "iamtrask"
    },
    {
        "source": "sedielem",
        "target": "srush_nlp"
    },
    {
        "source": "sedielem",
        "target": "neuripsconf"
    },
    {
        "source": "sedielem",
        "target": "savvyrl"
    },
    {
        "source": "sedielem",
        "target": "moltbook"
    },
    {
        "source": "sedielem",
        "target": "goodside"
    },
    {
        "source": "deliprao",
        "target": "arankomatsuzaki"
    },
    {
        "source": "deliprao",
        "target": "srush_nlp"
    },
    {
        "source": "deliprao",
        "target": "giffmana"
    },
    {
        "source": "deliprao",
        "target": "csprofkgd"
    },
    {
        "source": "deliprao",
        "target": "thegautamkamath"
    },
    {
        "source": "deliprao",
        "target": "clementdelangue"
    },
    {
        "source": "deliprao",
        "target": "savvyrl"
    },
    {
        "source": "deliprao",
        "target": "sirbayes"
    },
    {
        "source": "deliprao",
        "target": "_jasonwei"
    },
    {
        "source": "deliprao",
        "target": "chhillee"
    },
    {
        "source": "deliprao",
        "target": "miles_brundage"
    },
    {
        "source": "deliprao",
        "target": "sarahookr"
    },
    {
        "source": "deliprao",
        "target": "chrmanning"
    },
    {
        "source": "deliprao",
        "target": "roydanroy"
    },
    {
        "source": "deliprao",
        "target": "adocomplete"
    },
    {
        "source": "deliprao",
        "target": "bcherny"
    },
    {
        "source": "deliprao",
        "target": "aelluswamy"
    },
    {
        "source": "zacharylipton",
        "target": "thegautamkamath"
    },
    {
        "source": "zacharylipton",
        "target": "roydanroy"
    },
    {
        "source": "zacharylipton",
        "target": "giffmana"
    },
    {
        "source": "zacharylipton",
        "target": "savvyrl"
    },
    {
        "source": "zacharylipton",
        "target": "srush_nlp"
    },
    {
        "source": "zacharylipton",
        "target": "neuripsconf"
    },
    {
        "source": "zacharylipton",
        "target": "tdietterich"
    },
    {
        "source": "zacharylipton",
        "target": "sarahookr"
    },
    {
        "source": "zacharylipton",
        "target": "chrmanning"
    },
    {
        "source": "zacharylipton",
        "target": "sleepinyourhat"
    },
    {
        "source": "zacharylipton",
        "target": "natashajaques"
    },
    {
        "source": "zacharylipton",
        "target": "karpathy"
    },
    {
        "source": "zacharylipton",
        "target": "emollick"
    },
    {
        "source": "zacharylipton",
        "target": "suchenzang"
    },
    {
        "source": "zacharylipton",
        "target": "alexandr_wang"
    },
    {
        "source": "zacharylipton",
        "target": "_jasonwei"
    },
    {
        "source": "zacharylipton",
        "target": "yuhu_ai_"
    },
    {
        "source": "nvidiastudio",
        "target": "nvidiagfn"
    },
    {
        "source": "nvidiastudio",
        "target": "nvidiaanz"
    },
    {
        "source": "nvidiastudio",
        "target": "nvidia"
    },
    {
        "source": "nvidiastudio",
        "target": "nvidiaomniverse"
    },
    {
        "source": "nvidiastudio",
        "target": "nvidiagamedev"
    },
    {
        "source": "nvidiastudio",
        "target": "nvidianewsroom"
    },
    {
        "source": "nvidiastudio",
        "target": "nvidia_ai_pc"
    },
    {
        "source": "__tinygrad__",
        "target": "openclaw"
    },
    {
        "source": "__tinygrad__",
        "target": "zai_org"
    },
    {
        "source": "__tinygrad__",
        "target": "allen_ai"
    },
    {
        "source": "__tinygrad__",
        "target": "openai"
    },
    {
        "source": "roydanroy",
        "target": "thegautamkamath"
    },
    {
        "source": "roydanroy",
        "target": "csprofkgd"
    },
    {
        "source": "roydanroy",
        "target": "sirbayes"
    },
    {
        "source": "roydanroy",
        "target": "savvyrl"
    },
    {
        "source": "roydanroy",
        "target": "mmbronstein"
    },
    {
        "source": "roydanroy",
        "target": "zacharylipton"
    },
    {
        "source": "roydanroy",
        "target": "tdietterich"
    },
    {
        "source": "roydanroy",
        "target": "srush_nlp"
    },
    {
        "source": "roydanroy",
        "target": "petarv_93"
    },
    {
        "source": "roydanroy",
        "target": "sarahookr"
    },
    {
        "source": "roydanroy",
        "target": "suchenzang"
    },
    {
        "source": "roydanroy",
        "target": "jsuarez"
    },
    {
        "source": "osanseviero",
        "target": "_akhaliq"
    },
    {
        "source": "osanseviero",
        "target": "rasbt"
    },
    {
        "source": "osanseviero",
        "target": "omarsar0"
    },
    {
        "source": "osanseviero",
        "target": "mervenoyann"
    },
    {
        "source": "osanseviero",
        "target": "drjimfan"
    },
    {
        "source": "osanseviero",
        "target": "huggingface"
    },
    {
        "source": "osanseviero",
        "target": "abhi1thakur"
    },
    {
        "source": "osanseviero",
        "target": "clementdelangue"
    },
    {
        "source": "osanseviero",
        "target": "julien_c"
    },
    {
        "source": "osanseviero",
        "target": "jeremyphoward"
    },
    {
        "source": "osanseviero",
        "target": "pytorch"
    },
    {
        "source": "osanseviero",
        "target": "soumithchintala"
    },
    {
        "source": "osanseviero",
        "target": "arankomatsuzaki"
    },
    {
        "source": "osanseviero",
        "target": "lioronai"
    },
    {
        "source": "osanseviero",
        "target": "giffmana"
    },
    {
        "source": "osanseviero",
        "target": "jonathanross321"
    },
    {
        "source": "thegautamkamath",
        "target": "docmilanfar"
    },
    {
        "source": "thegautamkamath",
        "target": "roydanroy"
    },
    {
        "source": "thegautamkamath",
        "target": "savvyrl"
    },
    {
        "source": "thegautamkamath",
        "target": "neuripsconf"
    },
    {
        "source": "thegautamkamath",
        "target": "mmbronstein"
    },
    {
        "source": "thegautamkamath",
        "target": "boazbaraktcs"
    },
    {
        "source": "thegautamkamath",
        "target": "sebastienbubeck"
    },
    {
        "source": "thegautamkamath",
        "target": "zacharylipton"
    },
    {
        "source": "thegautamkamath",
        "target": "sarahookr"
    },
    {
        "source": "thegautamkamath",
        "target": "littmath"
    },
    {
        "source": "mathemagic1an",
        "target": "goodside"
    },
    {
        "source": "mathemagic1an",
        "target": "gdb"
    },
    {
        "source": "mathemagic1an",
        "target": "_akhaliq"
    },
    {
        "source": "mathemagic1an",
        "target": "drjimfan"
    },
    {
        "source": "mathemagic1an",
        "target": "emostaque"
    },
    {
        "source": "mathemagic1an",
        "target": "alexandr_wang"
    },
    {
        "source": "mathemagic1an",
        "target": "ai__pub"
    },
    {
        "source": "mathemagic1an",
        "target": "lioronai"
    },
    {
        "source": "mathemagic1an",
        "target": "arankomatsuzaki"
    },
    {
        "source": "mathemagic1an",
        "target": "alexgraveley"
    },
    {
        "source": "mathemagic1an",
        "target": "steipete"
    },
    {
        "source": "mathemagic1an",
        "target": "addyosmani"
    },
    {
        "source": "mathemagic1an",
        "target": "thsottiaux"
    },
    {
        "source": "tdietterich",
        "target": "soumithchintala"
    },
    {
        "source": "tdietterich",
        "target": "deliprao"
    },
    {
        "source": "tdietterich",
        "target": "giffmana"
    },
    {
        "source": "tdietterich",
        "target": "roydanroy"
    },
    {
        "source": "tdietterich",
        "target": "thegautamkamath"
    },
    {
        "source": "tdietterich",
        "target": "sirbayes"
    },
    {
        "source": "tdietterich",
        "target": "savvyrl"
    },
    {
        "source": "tdietterich",
        "target": "neuripsconf"
    },
    {
        "source": "tdietterich",
        "target": "zacharylipton"
    },
    {
        "source": "tdietterich",
        "target": "svlevine"
    },
    {
        "source": "tdietterich",
        "target": "srush_nlp"
    },
    {
        "source": "tdietterich",
        "target": "sarahookr"
    },
    {
        "source": "tdietterich",
        "target": "geoffreylitt"
    },
    {
        "source": "tdietterich",
        "target": "ilyasut"
    },
    {
        "source": "tdietterich",
        "target": "omarsar0"
    },
    {
        "source": "tdietterich",
        "target": "docmilanfar"
    },
    {
        "source": "nvidiageforcetr",
        "target": "nvidiagfn"
    },
    {
        "source": "nvidiagamedev",
        "target": "nvidiastudio"
    },
    {
        "source": "nvidiagamedev",
        "target": "nvidia"
    },
    {
        "source": "nvidiagamedev",
        "target": "nvidiaaidev"
    },
    {
        "source": "nvidiagamedev",
        "target": "nvidiaomniverse"
    },
    {
        "source": "nvidiagamedev",
        "target": "nvidiaai"
    },
    {
        "source": "nvidiagamedev",
        "target": "nvidiarobotics"
    },
    {
        "source": "nvidiagamedev",
        "target": "nvidianewsroom"
    },
    {
        "source": "nvidiagamedev",
        "target": "nvidia_ai_pc"
    },
    {
        "source": "nvidiagamedev",
        "target": "nvidiagtc"
    },
    {
        "source": "nvidiagamedev",
        "target": "nvidiageforcede"
    },
    {
        "source": "nvidiagamedev",
        "target": "nvidiageforcefr"
    },
    {
        "source": "nvidiagamedev",
        "target": "nvidiageforcepl"
    },
    {
        "source": "nvidiagamedev",
        "target": "nvidiaanz"
    },
    {
        "source": "nvidiagamedev",
        "target": "nvidiageforcela"
    },
    {
        "source": "sarahookr",
        "target": "deliprao"
    },
    {
        "source": "sarahookr",
        "target": "savvyrl"
    },
    {
        "source": "sarahookr",
        "target": "arankomatsuzaki"
    },
    {
        "source": "sarahookr",
        "target": "giffmana"
    },
    {
        "source": "sarahookr",
        "target": "thegautamkamath"
    },
    {
        "source": "sarahookr",
        "target": "roydanroy"
    },
    {
        "source": "sarahookr",
        "target": "srush_nlp"
    },
    {
        "source": "sarahookr",
        "target": "neuripsconf"
    },
    {
        "source": "sarahookr",
        "target": "zacharylipton"
    },
    {
        "source": "sarahookr",
        "target": "sashamtl"
    },
    {
        "source": "sarahookr",
        "target": "chhillee"
    },
    {
        "source": "sarahookr",
        "target": "egrefen"
    },
    {
        "source": "sarahookr",
        "target": "_jasonwei"
    },
    {
        "source": "mmbronstein",
        "target": "docmilanfar"
    },
    {
        "source": "mmbronstein",
        "target": "csprofkgd"
    },
    {
        "source": "mmbronstein",
        "target": "petarv_93"
    },
    {
        "source": "mmbronstein",
        "target": "giffmana"
    },
    {
        "source": "mmbronstein",
        "target": "mattniessner"
    },
    {
        "source": "mmbronstein",
        "target": "sirbayes"
    },
    {
        "source": "mmbronstein",
        "target": "neuripsconf"
    },
    {
        "source": "mmbronstein",
        "target": "thegautamkamath"
    },
    {
        "source": "mmbronstein",
        "target": "savvyrl"
    },
    {
        "source": "mmbronstein",
        "target": "roydanroy"
    },
    {
        "source": "mmbronstein",
        "target": "deryatr_"
    },
    {
        "source": "mmbronstein",
        "target": "tom_doerr"
    },
    {
        "source": "littmath",
        "target": "thegautamkamath"
    },
    {
        "source": "littmath",
        "target": "jeffdean"
    },
    {
        "source": "littmath",
        "target": "demishassabis"
    },
    {
        "source": "littmath",
        "target": "alexwei_"
    },
    {
        "source": "nvidiahpcdev",
        "target": "nvidia"
    },
    {
        "source": "nvidiahpcdev",
        "target": "nvidiaaidev"
    },
    {
        "source": "nvidiahpcdev",
        "target": "soumithchintala"
    },
    {
        "source": "nvidiahpcdev",
        "target": "nvidiaai"
    },
    {
        "source": "nvidiahpcdev",
        "target": "nvidiarobotics"
    },
    {
        "source": "nvidiahpcdev",
        "target": "nvidiadc"
    },
    {
        "source": "nvidiahpcdev",
        "target": "nvidiaomniverse"
    },
    {
        "source": "nvidiahpcdev",
        "target": "sedielem"
    },
    {
        "source": "nvidiahpcdev",
        "target": "nvidiagamedev"
    },
    {
        "source": "nvidiahpcdev",
        "target": "nvidiahealth"
    },
    {
        "source": "nvidiahpcdev",
        "target": "nvidiagtc"
    },
    {
        "source": "nvidiahpcdev",
        "target": "goodfellow_ian"
    },
    {
        "source": "nvidiahpcdev",
        "target": "tensorflow"
    },
    {
        "source": "theworldlabs",
        "target": "karpathy"
    },
    {
        "source": "theworldlabs",
        "target": "geoffreyhinton"
    },
    {
        "source": "theworldlabs",
        "target": "jeffdean"
    },
    {
        "source": "theworldlabs",
        "target": "drfeifei"
    },
    {
        "source": "nvidiadc",
        "target": "nvidia"
    },
    {
        "source": "nvidiadc",
        "target": "nvidiaai"
    },
    {
        "source": "nvidiadc",
        "target": "nvidiastudio"
    },
    {
        "source": "nvidiadc",
        "target": "nvidiaaidev"
    },
    {
        "source": "nvidiadc",
        "target": "nvidiarobotics"
    },
    {
        "source": "nvidiadc",
        "target": "nvidiaomniverse"
    },
    {
        "source": "nvidiadc",
        "target": "nvidiahpcdev"
    },
    {
        "source": "nvidiadc",
        "target": "nvidiakorea"
    },
    {
        "source": "nvidiadc",
        "target": "nvidianewsroom"
    },
    {
        "source": "nvidiadc",
        "target": "nvidia_ai_pc"
    },
    {
        "source": "nvidiadc",
        "target": "nvidiaaijp"
    },
    {
        "source": "nvidiadc",
        "target": "nvidiagtc"
    },
    {
        "source": "nvidiadc",
        "target": "nvidiahealth"
    },
    {
        "source": "nvidiadc",
        "target": "goodfellow_ian"
    },
    {
        "source": "nvidiadc",
        "target": "ctnzr"
    },
    {
        "source": "sleepinyourhat",
        "target": "arankomatsuzaki"
    },
    {
        "source": "sleepinyourhat",
        "target": "srush_nlp"
    },
    {
        "source": "sleepinyourhat",
        "target": "chrmanning"
    },
    {
        "source": "sleepinyourhat",
        "target": "anthropicai"
    },
    {
        "source": "sleepinyourhat",
        "target": "miles_brundage"
    },
    {
        "source": "sleepinyourhat",
        "target": "_jasonwei"
    },
    {
        "source": "sleepinyourhat",
        "target": "gneubig"
    },
    {
        "source": "sleepinyourhat",
        "target": "savvyrl"
    },
    {
        "source": "sleepinyourhat",
        "target": "felixhill84"
    },
    {
        "source": "sleepinyourhat",
        "target": "sarahookr"
    },
    {
        "source": "sleepinyourhat",
        "target": "zacharylipton"
    },
    {
        "source": "fofrai",
        "target": "hardmaru"
    },
    {
        "source": "fofrai",
        "target": "_akhaliq"
    },
    {
        "source": "fofrai",
        "target": "openclaw"
    },
    {
        "source": "fofrai",
        "target": "moltbook"
    },
    {
        "source": "fofrai",
        "target": "steipete"
    },
    {
        "source": "fofrai",
        "target": "simpsoka"
    },
    {
        "source": "fofrai",
        "target": "esyudkowsky"
    },
    {
        "source": "merettm",
        "target": "sama"
    },
    {
        "source": "merettm",
        "target": "gdb"
    },
    {
        "source": "merettm",
        "target": "openai"
    },
    {
        "source": "merettm",
        "target": "sebastienbubeck"
    },
    {
        "source": "dpkingma",
        "target": "arankomatsuzaki"
    },
    {
        "source": "dpkingma",
        "target": "giffmana"
    },
    {
        "source": "dpkingma",
        "target": "sirbayes"
    },
    {
        "source": "dpkingma",
        "target": "sedielem"
    },
    {
        "source": "dpkingma",
        "target": "svlevine"
    },
    {
        "source": "dpkingma",
        "target": "tdietterich"
    },
    {
        "source": "dpkingma",
        "target": "oriolvinyalsml"
    },
    {
        "source": "dpkingma",
        "target": "_jasonwei"
    },
    {
        "source": "dpkingma",
        "target": "shaneguml"
    },
    {
        "source": "dpkingma",
        "target": "zoubinghahrama1"
    },
    {
        "source": "dpkingma",
        "target": "hochreitersepp"
    },
    {
        "source": "shengjia_zhao",
        "target": "karpathy"
    },
    {
        "source": "shengjia_zhao",
        "target": "drjimfan"
    },
    {
        "source": "shengjia_zhao",
        "target": "googledeepmind"
    },
    {
        "source": "shengjia_zhao",
        "target": "sama"
    },
    {
        "source": "shengjia_zhao",
        "target": "gdb"
    },
    {
        "source": "shengjia_zhao",
        "target": "fchollet"
    },
    {
        "source": "shengjia_zhao",
        "target": "richardsocher"
    },
    {
        "source": "shengjia_zhao",
        "target": "svlevine"
    },
    {
        "source": "shengjia_zhao",
        "target": "woj_zaremba"
    },
    {
        "source": "shengjia_zhao",
        "target": "zoubinghahrama1"
    },
    {
        "source": "shengjia_zhao",
        "target": "dpkingma"
    },
    {
        "source": "shengjia_zhao",
        "target": "jeffdean"
    },
    {
        "source": "shengjia_zhao",
        "target": "_jasonwei"
    },
    {
        "source": "shengjia_zhao",
        "target": "alexandr_wang"
    },
    {
        "source": "shengjia_zhao",
        "target": "satyanadella"
    },
    {
        "source": "melmitchell1",
        "target": "garymarcus"
    },
    {
        "source": "melmitchell1",
        "target": "schmidhuberai"
    },
    {
        "source": "melmitchell1",
        "target": "mmitchell_ai"
    },
    {
        "source": "melmitchell1",
        "target": "tdietterich"
    },
    {
        "source": "melmitchell1",
        "target": "roydanroy"
    },
    {
        "source": "melmitchell1",
        "target": "miles_brundage"
    },
    {
        "source": "melmitchell1",
        "target": "felixhill84"
    },
    {
        "source": "melmitchell1",
        "target": "anthropicai"
    },
    {
        "source": "melmitchell1",
        "target": "yoshua_bengio"
    },
    {
        "source": "melmitchell1",
        "target": "amandaaskell"
    },
    {
        "source": "melmitchell1",
        "target": "zicokolter"
    },
    {
        "source": "savvyrl",
        "target": "arankomatsuzaki"
    },
    {
        "source": "savvyrl",
        "target": "giffmana"
    },
    {
        "source": "savvyrl",
        "target": "deliprao"
    },
    {
        "source": "savvyrl",
        "target": "soumithchintala"
    },
    {
        "source": "savvyrl",
        "target": "csprofkgd"
    },
    {
        "source": "savvyrl",
        "target": "thegautamkamath"
    },
    {
        "source": "savvyrl",
        "target": "sarahookr"
    },
    {
        "source": "savvyrl",
        "target": "neuripsconf"
    },
    {
        "source": "savvyrl",
        "target": "_jasonwei"
    },
    {
        "source": "savvyrl",
        "target": "chhillee"
    },
    {
        "source": "savvyrl",
        "target": "anthropicai"
    },
    {
        "source": "savvyrl",
        "target": "srush_nlp"
    },
    {
        "source": "savvyrl",
        "target": "roydanroy"
    },
    {
        "source": "savvyrl",
        "target": "palmerluckey"
    },
    {
        "source": "savvyrl",
        "target": "egrefen"
    },
    {
        "source": "savvyrl",
        "target": "nanobanana"
    },
    {
        "source": "savvyrl",
        "target": "darioamodei"
    },
    {
        "source": "nvidianewsroom",
        "target": "nvidiageforceme"
    },
    {
        "source": "nvidianewsroom",
        "target": "nvidiageforcejp"
    },
    {
        "source": "nvidianewsroom",
        "target": "nvidiageforcebr"
    },
    {
        "source": "nvidianewsroom",
        "target": "nvidiageforcepl"
    },
    {
        "source": "nvidianewsroom",
        "target": "nvidiageforcees"
    },
    {
        "source": "nvidianewsroom",
        "target": "nvidiakorea"
    },
    {
        "source": "nvidianewsroom",
        "target": "nvidiajapan"
    },
    {
        "source": "nvidianewsroom",
        "target": "nvidiaaijp"
    },
    {
        "source": "nvidianewsroom",
        "target": "nvidiaanz"
    },
    {
        "source": "nvidianewsroom",
        "target": "nvidia_ai_pc"
    },
    {
        "source": "nvidianewsroom",
        "target": "nvidiaomniverse"
    },
    {
        "source": "nvidianewsroom",
        "target": "nvidiahealth"
    },
    {
        "source": "nvidianewsroom",
        "target": "nvidiagtc"
    },
    {
        "source": "nvidianewsroom",
        "target": "nvidiastudio"
    },
    {
        "source": "nvidianewsroom",
        "target": "nvidiagfn"
    },
    {
        "source": "nvidianewsroom",
        "target": "nvidiaaidev"
    },
    {
        "source": "nvidianewsroom",
        "target": "nvidiadrive"
    },
    {
        "source": "nvidianewsroom",
        "target": "nvidiaai"
    },
    {
        "source": "nvidianewsroom",
        "target": "nvidiageforcefr"
    },
    {
        "source": "nvidianewsroom",
        "target": "nvidiageforcede"
    },
    {
        "source": "nvidianewsroom",
        "target": "nvidiadc"
    },
    {
        "source": "nvidianewsroom",
        "target": "nvidiarobotics"
    },
    {
        "source": "nvidianewsroom",
        "target": "nvidiaworkstatn"
    },
    {
        "source": "nvidianewsroom",
        "target": "nvidiahpcdev"
    },
    {
        "source": "nvidianewsroom",
        "target": "nvidiageforceuk"
    },
    {
        "source": "nvidianewsroom",
        "target": "nvidiageforce"
    },
    {
        "source": "nvidianewsroom",
        "target": "nvidiacc"
    },
    {
        "source": "nvidianewsroom",
        "target": "nvidianetworkng"
    },
    {
        "source": "nvidianewsroom",
        "target": "nvidiagamedev"
    },
    {
        "source": "nvidianewsroom",
        "target": "nvidia"
    },
    {
        "source": "joshwoodward",
        "target": "steipete"
    },
    {
        "source": "joshwoodward",
        "target": "osanseviero"
    },
    {
        "source": "joshwoodward",
        "target": "_mohansolo"
    },
    {
        "source": "joshwoodward",
        "target": "nanobanana"
    },
    {
        "source": "nvidiaanz",
        "target": "nvidiageforceuk"
    },
    {
        "source": "nvidiaanz",
        "target": "nvidiastudio"
    },
    {
        "source": "shaneguml",
        "target": "drjimfan"
    },
    {
        "source": "shaneguml",
        "target": "arankomatsuzaki"
    },
    {
        "source": "shaneguml",
        "target": "soumithchintala"
    },
    {
        "source": "shaneguml",
        "target": "svlevine"
    },
    {
        "source": "shaneguml",
        "target": "giffmana"
    },
    {
        "source": "shaneguml",
        "target": "savvyrl"
    },
    {
        "source": "shaneguml",
        "target": "csprofkgd"
    },
    {
        "source": "shaneguml",
        "target": "woj_zaremba"
    },
    {
        "source": "shaneguml",
        "target": "_jasonwei"
    },
    {
        "source": "shaneguml",
        "target": "sirbayes"
    },
    {
        "source": "shaneguml",
        "target": "natashajaques"
    },
    {
        "source": "shaneguml",
        "target": "jm_alexia"
    },
    {
        "source": "shaneguml",
        "target": "openclaw"
    },
    {
        "source": "shaneguml",
        "target": "steipete"
    },
    {
        "source": "shaneguml",
        "target": "moltbook"
    },
    {
        "source": "yuhu_ai_",
        "target": "drjimfan"
    },
    {
        "source": "yuhu_ai_",
        "target": "arankomatsuzaki"
    },
    {
        "source": "yuhu_ai_",
        "target": "_jasonwei"
    },
    {
        "source": "yuhu_ai_",
        "target": "soumithchintala"
    },
    {
        "source": "yuhu_ai_",
        "target": "woj_zaremba"
    },
    {
        "source": "yuhu_ai_",
        "target": "shaneguml"
    },
    {
        "source": "yuhu_ai_",
        "target": "schmidhuberai"
    },
    {
        "source": "yuhu_ai_",
        "target": "chhillee"
    },
    {
        "source": "yuhu_ai_",
        "target": "srush_nlp"
    },
    {
        "source": "yuhu_ai_",
        "target": "svlevine"
    },
    {
        "source": "yuhu_ai_",
        "target": "jeffdean"
    },
    {
        "source": "yuhu_ai_",
        "target": "miles_brundage"
    },
    {
        "source": "yuhu_ai_",
        "target": "gavinsbaker"
    },
    {
        "source": "yuhu_ai_",
        "target": "yoshua_bengio"
    },
    {
        "source": "jonathanross321",
        "target": "levie"
    },
    {
        "source": "jonathanross321",
        "target": "nvidia"
    },
    {
        "source": "jonathanross321",
        "target": "ch402"
    },
    {
        "source": "jonathanross321",
        "target": "_akhaliq"
    },
    {
        "source": "jonathanross321",
        "target": "thom_wolf"
    },
    {
        "source": "jonathanross321",
        "target": "kalomaze"
    },
    {
        "source": "jonathanross321",
        "target": "sarahookr"
    },
    {
        "source": "chhillee",
        "target": "drjimfan"
    },
    {
        "source": "chhillee",
        "target": "soumithchintala"
    },
    {
        "source": "chhillee",
        "target": "pytorch"
    },
    {
        "source": "chhillee",
        "target": "arankomatsuzaki"
    },
    {
        "source": "chhillee",
        "target": "giffmana"
    },
    {
        "source": "chhillee",
        "target": "jeremyphoward"
    },
    {
        "source": "chhillee",
        "target": "srush_nlp"
    },
    {
        "source": "chhillee",
        "target": "wightmanr"
    },
    {
        "source": "chhillee",
        "target": "schmidhuberai"
    },
    {
        "source": "chhillee",
        "target": "anthropicai"
    },
    {
        "source": "chhillee",
        "target": "savvyrl"
    },
    {
        "source": "chhillee",
        "target": "_jasonwei"
    },
    {
        "source": "chhillee",
        "target": "heinrichkuttler"
    },
    {
        "source": "egrefen",
        "target": "soumithchintala"
    },
    {
        "source": "egrefen",
        "target": "roydanroy"
    },
    {
        "source": "egrefen",
        "target": "srush_nlp"
    },
    {
        "source": "egrefen",
        "target": "savvyrl"
    },
    {
        "source": "egrefen",
        "target": "sirbayes"
    },
    {
        "source": "egrefen",
        "target": "neuripsconf"
    },
    {
        "source": "egrefen",
        "target": "felixhill84"
    },
    {
        "source": "egrefen",
        "target": "sarahookr"
    },
    {
        "source": "egrefen",
        "target": "svlevine"
    },
    {
        "source": "egrefen",
        "target": "sedielem"
    },
    {
        "source": "egrefen",
        "target": "oriolvinyalsml"
    },
    {
        "source": "egrefen",
        "target": "chhillee"
    },
    {
        "source": "egrefen",
        "target": "zacharylipton"
    },
    {
        "source": "egrefen",
        "target": "chrmanning"
    },
    {
        "source": "egrefen",
        "target": "littmath"
    },
    {
        "source": "egrefen",
        "target": "julien_c"
    },
    {
        "source": "egrefen",
        "target": "clementdelangue"
    },
    {
        "source": "egrefen",
        "target": "ericzelikman"
    },
    {
        "source": "egrefen",
        "target": "liamfedus"
    },
    {
        "source": "egrefen",
        "target": "ctnzr"
    },
    {
        "source": "mattniessner",
        "target": "_akhaliq"
    },
    {
        "source": "mattniessner",
        "target": "csprofkgd"
    },
    {
        "source": "mattniessner",
        "target": "mmbronstein"
    },
    {
        "source": "hendrycks",
        "target": "woj_zaremba"
    },
    {
        "source": "hendrycks",
        "target": "_jasonwei"
    },
    {
        "source": "hendrycks",
        "target": "janleike"
    },
    {
        "source": "hendrycks",
        "target": "catherineols"
    },
    {
        "source": "hendrycks",
        "target": "tdietterich"
    },
    {
        "source": "hendrycks",
        "target": "demishassabis"
    },
    {
        "source": "hendrycks",
        "target": "garymarcus"
    },
    {
        "source": "hendrycks",
        "target": "esyudkowsky"
    },
    {
        "source": "hendrycks",
        "target": "yoshua_bengio"
    },
    {
        "source": "hendrycks",
        "target": "openainewsroom"
    },
    {
        "source": "hendrycks",
        "target": "goodfellow_ian"
    },
    {
        "source": "peterberezinbca",
        "target": "moltbook"
    },
    {
        "source": "zai_org",
        "target": "moltbook"
    },
    {
        "source": "zai_org",
        "target": "minchoi"
    },
    {
        "source": "zai_org",
        "target": "guohao_li"
    },
    {
        "source": "zai_org",
        "target": "demishassabis"
    },
    {
        "source": "zai_org",
        "target": "deryatr_"
    },
    {
        "source": "zai_org",
        "target": "satyanadella"
    },
    {
        "source": "nvidiajapan",
        "target": "nvidiageforcejp"
    },
    {
        "source": "nvidiajapan",
        "target": "nvidianewsroom"
    },
    {
        "source": "nvidiajapan",
        "target": "nvidiagtc"
    },
    {
        "source": "nvidiajapan",
        "target": "nvidiaomniverse"
    },
    {
        "source": "chrszegedy",
        "target": "docmilanfar"
    },
    {
        "source": "chrszegedy",
        "target": "giffmana"
    },
    {
        "source": "chrszegedy",
        "target": "soumithchintala"
    },
    {
        "source": "chrszegedy",
        "target": "arankomatsuzaki"
    },
    {
        "source": "chrszegedy",
        "target": "schmidhuberai"
    },
    {
        "source": "chrszegedy",
        "target": "csprofkgd"
    },
    {
        "source": "chrszegedy",
        "target": "deliprao"
    },
    {
        "source": "chrszegedy",
        "target": "woj_zaremba"
    },
    {
        "source": "chrszegedy",
        "target": "savvyrl"
    },
    {
        "source": "chrszegedy",
        "target": "thegautamkamath"
    },
    {
        "source": "chrszegedy",
        "target": "sirbayes"
    },
    {
        "source": "chrszegedy",
        "target": "chhillee"
    },
    {
        "source": "chrszegedy",
        "target": "deryatr_"
    },
    {
        "source": "chrszegedy",
        "target": "imhaotian"
    },
    {
        "source": "billpeeb",
        "target": "_akhaliq"
    },
    {
        "source": "billpeeb",
        "target": "karpathy"
    },
    {
        "source": "billpeeb",
        "target": "hardmaru"
    },
    {
        "source": "billpeeb",
        "target": "drjimfan"
    },
    {
        "source": "billpeeb",
        "target": "sama"
    },
    {
        "source": "billpeeb",
        "target": "arankomatsuzaki"
    },
    {
        "source": "billpeeb",
        "target": "soumithchintala"
    },
    {
        "source": "billpeeb",
        "target": "gdb"
    },
    {
        "source": "billpeeb",
        "target": "andrewyng"
    },
    {
        "source": "billpeeb",
        "target": "savvyrl"
    },
    {
        "source": "billpeeb",
        "target": "pytorch"
    },
    {
        "source": "billpeeb",
        "target": "woj_zaremba"
    },
    {
        "source": "billpeeb",
        "target": "oriolvinyalsml"
    },
    {
        "source": "billpeeb",
        "target": "yuhu_ai_"
    },
    {
        "source": "billpeeb",
        "target": "fidjissimo"
    },
    {
        "source": "jeffteper",
        "target": "steipete"
    },
    {
        "source": "jeffteper",
        "target": "ilyasut"
    },
    {
        "source": "jeffteper",
        "target": "geoffreyhinton"
    },
    {
        "source": "jeffteper",
        "target": "demishassabis"
    },
    {
        "source": "jeffteper",
        "target": "ylecun"
    },
    {
        "source": "jeffteper",
        "target": "mustafasuleyman"
    },
    {
        "source": "jeffteper",
        "target": "openai"
    },
    {
        "source": "jeffteper",
        "target": "karpathy"
    },
    {
        "source": "jeffteper",
        "target": "gdb"
    },
    {
        "source": "jeffteper",
        "target": "sebastienbubeck"
    },
    {
        "source": "jeffteper",
        "target": "palmerluckey"
    },
    {
        "source": "petarv_93",
        "target": "mmbronstein"
    },
    {
        "source": "petarv_93",
        "target": "schmidhuberai"
    },
    {
        "source": "petarv_93",
        "target": "soumithchintala"
    },
    {
        "source": "petarv_93",
        "target": "neuripsconf"
    },
    {
        "source": "petarv_93",
        "target": "chhillee"
    },
    {
        "source": "petarv_93",
        "target": "gordic_aleksa"
    },
    {
        "source": "petarv_93",
        "target": "srush_nlp"
    },
    {
        "source": "petarv_93",
        "target": "oriolvinyalsml"
    },
    {
        "source": "petarv_93",
        "target": "sarahookr"
    },
    {
        "source": "petarv_93",
        "target": "googleaistudio"
    },
    {
        "source": "petarv_93",
        "target": "suchenzang"
    },
    {
        "source": "petarv_93",
        "target": "shaneguml"
    },
    {
        "source": "petarv_93",
        "target": "googlelabs"
    },
    {
        "source": "petarv_93",
        "target": "officiallogank"
    },
    {
        "source": "petarv_93",
        "target": "darioamodei"
    },
    {
        "source": "petarv_93",
        "target": "yoshua_bengio"
    },
    {
        "source": "black_in_ai",
        "target": "mmitchell_ai"
    },
    {
        "source": "black_in_ai",
        "target": "sarahookr"
    },
    {
        "source": "black_in_ai",
        "target": "neuripsconf"
    },
    {
        "source": "black_in_ai",
        "target": "zacharylipton"
    },
    {
        "source": "black_in_ai",
        "target": "wimlworkshop"
    },
    {
        "source": "black_in_ai",
        "target": "chelseabfinn"
    },
    {
        "source": "black_in_ai",
        "target": "googleai"
    },
    {
        "source": "npew",
        "target": "gdb"
    },
    {
        "source": "npew",
        "target": "goodside"
    },
    {
        "source": "npew",
        "target": "hardmaru"
    },
    {
        "source": "npew",
        "target": "emostaque"
    },
    {
        "source": "npew",
        "target": "drjimfan"
    },
    {
        "source": "npew",
        "target": "alexandr_wang"
    },
    {
        "source": "npew",
        "target": "woj_zaremba"
    },
    {
        "source": "npew",
        "target": "arankomatsuzaki"
    },
    {
        "source": "npew",
        "target": "miramurati"
    },
    {
        "source": "npew",
        "target": "ai__pub"
    },
    {
        "source": "npew",
        "target": "ilyasut"
    },
    {
        "source": "npew",
        "target": "anthropicai"
    },
    {
        "source": "npew",
        "target": "soumithchintala"
    },
    {
        "source": "npew",
        "target": "miles_brundage"
    },
    {
        "source": "npew",
        "target": "moltbook"
    },
    {
        "source": "npew",
        "target": "embirico"
    },
    {
        "source": "npew",
        "target": "fidjissimo"
    },
    {
        "source": "npew",
        "target": "khoomeik"
    },
    {
        "source": "unslothai",
        "target": "nvidia_ai_pc"
    },
    {
        "source": "unslothai",
        "target": "matthewberman"
    },
    {
        "source": "unslothai",
        "target": "lioronai"
    },
    {
        "source": "gneubig",
        "target": "srush_nlp"
    },
    {
        "source": "gneubig",
        "target": "chrmanning"
    },
    {
        "source": "gneubig",
        "target": "_jasonwei"
    },
    {
        "source": "gneubig",
        "target": "zacharylipton"
    },
    {
        "source": "gneubig",
        "target": "douwekiela"
    },
    {
        "source": "gneubig",
        "target": "thom_wolf"
    },
    {
        "source": "gneubig",
        "target": "thsottiaux"
    },
    {
        "source": "gneubig",
        "target": "ilyasut"
    },
    {
        "source": "gneubig",
        "target": "askalphaxiv"
    },
    {
        "source": "gneubig",
        "target": "omarsar0"
    },
    {
        "source": "gneubig",
        "target": "_lewtun"
    },
    {
        "source": "suchenzang",
        "target": "drjimfan"
    },
    {
        "source": "suchenzang",
        "target": "soumithchintala"
    },
    {
        "source": "suchenzang",
        "target": "chhillee"
    },
    {
        "source": "suchenzang",
        "target": "deliprao"
    },
    {
        "source": "suchenzang",
        "target": "_jasonwei"
    },
    {
        "source": "suchenzang",
        "target": "savvyrl"
    },
    {
        "source": "suchenzang",
        "target": "giffmana"
    },
    {
        "source": "suchenzang",
        "target": "miles_brundage"
    },
    {
        "source": "suchenzang",
        "target": "yacinemtb"
    },
    {
        "source": "suchenzang",
        "target": "jackclarksf"
    },
    {
        "source": "suchenzang",
        "target": "artificialanlys"
    },
    {
        "source": "suchenzang",
        "target": "littmath"
    },
    {
        "source": "suchenzang",
        "target": "jm_alexia"
    },
    {
        "source": "suchenzang",
        "target": "alexgdimakis"
    },
    {
        "source": "_mohansolo",
        "target": "palmerluckey"
    },
    {
        "source": "_mohansolo",
        "target": "oriolvinyalsml"
    },
    {
        "source": "_mohansolo",
        "target": "shaneguml"
    },
    {
        "source": "_mohansolo",
        "target": "joshwoodward"
    },
    {
        "source": "_mohansolo",
        "target": "koraykv"
    },
    {
        "source": "_mohansolo",
        "target": "antigravity"
    },
    {
        "source": "_mohansolo",
        "target": "demishassabis"
    },
    {
        "source": "_mohansolo",
        "target": "jeffdean"
    },
    {
        "source": "_mohansolo",
        "target": "yacinemtb"
    },
    {
        "source": "_mohansolo",
        "target": "embirico"
    },
    {
        "source": "_mohansolo",
        "target": "lexfridman"
    },
    {
        "source": "_mohansolo",
        "target": "fidjissimo"
    },
    {
        "source": "_mohansolo",
        "target": "sriramk"
    },
    {
        "source": "khoomeik",
        "target": "sama"
    },
    {
        "source": "khoomeik",
        "target": "fchollet"
    },
    {
        "source": "khoomeik",
        "target": "tunguz"
    },
    {
        "source": "khoomeik",
        "target": "deliprao"
    },
    {
        "source": "khoomeik",
        "target": "chrmanning"
    },
    {
        "source": "khoomeik",
        "target": "drjimfan"
    },
    {
        "source": "khoomeik",
        "target": "goodside"
    },
    {
        "source": "khoomeik",
        "target": "_akhaliq"
    },
    {
        "source": "khoomeik",
        "target": "ylecun"
    },
    {
        "source": "khoomeik",
        "target": "karpathy"
    },
    {
        "source": "khoomeik",
        "target": "hardmaru"
    },
    {
        "source": "khoomeik",
        "target": "jackclarksf"
    },
    {
        "source": "khoomeik",
        "target": "_jasonwei"
    },
    {
        "source": "khoomeik",
        "target": "moltbook"
    },
    {
        "source": "khoomeik",
        "target": "jm_alexia"
    },
    {
        "source": "khoomeik",
        "target": "andy_l_jones"
    },
    {
        "source": "tydsh",
        "target": "soumithchintala"
    },
    {
        "source": "tydsh",
        "target": "svlevine"
    },
    {
        "source": "tydsh",
        "target": "neuripsconf"
    },
    {
        "source": "tydsh",
        "target": "_jasonwei"
    },
    {
        "source": "tydsh",
        "target": "shaneguml"
    },
    {
        "source": "tydsh",
        "target": "savvyrl"
    },
    {
        "source": "tydsh",
        "target": "chhillee"
    },
    {
        "source": "tydsh",
        "target": "oriolvinyalsml"
    },
    {
        "source": "tydsh",
        "target": "antigravity"
    },
    {
        "source": "tydsh",
        "target": "ericzelikman"
    },
    {
        "source": "tydsh",
        "target": "jm_alexia"
    },
    {
        "source": "tydsh",
        "target": "rohanpaul_ai"
    },
    {
        "source": "alexgraveley",
        "target": "goodside"
    },
    {
        "source": "alexgraveley",
        "target": "alexandr_wang"
    },
    {
        "source": "alexgraveley",
        "target": "drjimfan"
    },
    {
        "source": "alexgraveley",
        "target": "mathemagic1an"
    },
    {
        "source": "alexgraveley",
        "target": "yacinemtb"
    },
    {
        "source": "alexgraveley",
        "target": "woj_zaremba"
    },
    {
        "source": "alexgraveley",
        "target": "arankomatsuzaki"
    },
    {
        "source": "alexgraveley",
        "target": "ilyasut"
    },
    {
        "source": "alexgraveley",
        "target": "steipete"
    },
    {
        "source": "alexgraveley",
        "target": "svlevine"
    },
    {
        "source": "alexgraveley",
        "target": "timzaman"
    },
    {
        "source": "sundeep",
        "target": "levie"
    },
    {
        "source": "sundeep",
        "target": "sriramk"
    },
    {
        "source": "sundeep",
        "target": "chatgpt21"
    },
    {
        "source": "sundeep",
        "target": "steipete"
    },
    {
        "source": "sundeep",
        "target": "openaidevs"
    },
    {
        "source": "sundeep",
        "target": "nvidiaomniverse"
    },
    {
        "source": "sundeep",
        "target": "azaliamirh"
    },
    {
        "source": "nvidiaworkstatn",
        "target": "nvidiastudio"
    },
    {
        "source": "nvidiaworkstatn",
        "target": "nvidia"
    },
    {
        "source": "nvidiaworkstatn",
        "target": "nvidiaomniverse"
    },
    {
        "source": "nvidiaworkstatn",
        "target": "nvidiadc"
    },
    {
        "source": "nvidiaworkstatn",
        "target": "nvidiageforceuk"
    },
    {
        "source": "nvidiaworkstatn",
        "target": "nvidiaaidev"
    },
    {
        "source": "nvidiaworkstatn",
        "target": "nvidiaai"
    },
    {
        "source": "nvidiaworkstatn",
        "target": "nvidiarobotics"
    },
    {
        "source": "nvidiaworkstatn",
        "target": "nvidiahpcdev"
    },
    {
        "source": "nvidiaworkstatn",
        "target": "nvidianewsroom"
    },
    {
        "source": "nvidiaworkstatn",
        "target": "nvidianetworkng"
    },
    {
        "source": "nvidiaworkstatn",
        "target": "nvidiahealth"
    },
    {
        "source": "nvidiaworkstatn",
        "target": "nvidiagtc"
    },
    {
        "source": "stuartjritchie",
        "target": "catherineols"
    },
    {
        "source": "stuartjritchie",
        "target": "claudeai"
    },
    {
        "source": "timzaman",
        "target": "aelluswamy"
    },
    {
        "source": "timzaman",
        "target": "johnschulman2"
    },
    {
        "source": "timzaman",
        "target": "saranormous"
    },
    {
        "source": "timzaman",
        "target": "thsottiaux"
    },
    {
        "source": "timzaman",
        "target": "levie"
    },
    {
        "source": "timzaman",
        "target": "npew"
    },
    {
        "source": "timzaman",
        "target": "fidjissimo"
    },
    {
        "source": "timzaman",
        "target": "sriramk"
    },
    {
        "source": "timzaman",
        "target": "itstkai"
    },
    {
        "source": "yoshua_bengio",
        "target": "hendrycks"
    },
    {
        "source": "yoshua_bengio",
        "target": "openai"
    },
    {
        "source": "yoshua_bengio",
        "target": "miles_brundage"
    },
    {
        "source": "mattt",
        "target": "steipete"
    },
    {
        "source": "chatgpt21",
        "target": "sundeep"
    },
    {
        "source": "chatgpt21",
        "target": "openclaw"
    },
    {
        "source": "zoubinghahrama1",
        "target": "sirbayes"
    },
    {
        "source": "zoubinghahrama1",
        "target": "roydanroy"
    },
    {
        "source": "zoubinghahrama1",
        "target": "neuripsconf"
    },
    {
        "source": "zoubinghahrama1",
        "target": "giffmana"
    },
    {
        "source": "zoubinghahrama1",
        "target": "mmbronstein"
    },
    {
        "source": "zoubinghahrama1",
        "target": "savvyrl"
    },
    {
        "source": "zoubinghahrama1",
        "target": "svlevine"
    },
    {
        "source": "zoubinghahrama1",
        "target": "petarv_93"
    },
    {
        "source": "zoubinghahrama1",
        "target": "srush_nlp"
    },
    {
        "source": "zoubinghahrama1",
        "target": "tdietterich"
    },
    {
        "source": "zoubinghahrama1",
        "target": "sedielem"
    },
    {
        "source": "zoubinghahrama1",
        "target": "zacharylipton"
    },
    {
        "source": "zoubinghahrama1",
        "target": "sarahookr"
    },
    {
        "source": "zoubinghahrama1",
        "target": "_jasonwei"
    },
    {
        "source": "zoubinghahrama1",
        "target": "_mohansolo"
    },
    {
        "source": "zoubinghahrama1",
        "target": "fofrai"
    },
    {
        "source": "zoubinghahrama1",
        "target": "tulseedoshi"
    },
    {
        "source": "zoubinghahrama1",
        "target": "chris_j_paxton"
    },
    {
        "source": "zoubinghahrama1",
        "target": "drjimfan"
    },
    {
        "source": "zoubinghahrama1",
        "target": "nanobanana"
    },
    {
        "source": "zoubinghahrama1",
        "target": "suchenzang"
    },
    {
        "source": "liamfedus",
        "target": "drjimfan"
    },
    {
        "source": "liamfedus",
        "target": "arankomatsuzaki"
    },
    {
        "source": "liamfedus",
        "target": "giffmana"
    },
    {
        "source": "liamfedus",
        "target": "deliprao"
    },
    {
        "source": "liamfedus",
        "target": "soumithchintala"
    },
    {
        "source": "liamfedus",
        "target": "woj_zaremba"
    },
    {
        "source": "liamfedus",
        "target": "savvyrl"
    },
    {
        "source": "liamfedus",
        "target": "_jasonwei"
    },
    {
        "source": "liamfedus",
        "target": "chhillee"
    },
    {
        "source": "liamfedus",
        "target": "anthropicai"
    },
    {
        "source": "liamfedus",
        "target": "miles_brundage"
    },
    {
        "source": "liamfedus",
        "target": "srush_nlp"
    },
    {
        "source": "liamfedus",
        "target": "yuhu_ai_"
    },
    {
        "source": "liamfedus",
        "target": "bcherny"
    },
    {
        "source": "liamfedus",
        "target": "tydsh"
    },
    {
        "source": "liamfedus",
        "target": "billpeeb"
    },
    {
        "source": "askalphaxiv",
        "target": "sarahookr"
    },
    {
        "source": "askalphaxiv",
        "target": "allen_ai"
    },
    {
        "source": "askalphaxiv",
        "target": "ylecun"
    },
    {
        "source": "askalphaxiv",
        "target": "lateinteraction"
    },
    {
        "source": "askalphaxiv",
        "target": "karpathy"
    },
    {
        "source": "cixliv",
        "target": "openclaw"
    },
    {
        "source": "cixliv",
        "target": "moltbook"
    },
    {
        "source": "cixliv",
        "target": "jm_alexia"
    },
    {
        "source": "natashajaques",
        "target": "soumithchintala"
    },
    {
        "source": "natashajaques",
        "target": "savvyrl"
    },
    {
        "source": "natashajaques",
        "target": "svlevine"
    },
    {
        "source": "natashajaques",
        "target": "csprofkgd"
    },
    {
        "source": "natashajaques",
        "target": "thegautamkamath"
    },
    {
        "source": "natashajaques",
        "target": "neuripsconf"
    },
    {
        "source": "natashajaques",
        "target": "sarahookr"
    },
    {
        "source": "natashajaques",
        "target": "roydanroy"
    },
    {
        "source": "natashajaques",
        "target": "shaneguml"
    },
    {
        "source": "natashajaques",
        "target": "drjimfan"
    },
    {
        "source": "natashajaques",
        "target": "sama"
    },
    {
        "source": "natashajaques",
        "target": "melmitchell1"
    },
    {
        "source": "natashajaques",
        "target": "agarwl_"
    },
    {
        "source": "jaykreps",
        "target": "claudeai"
    },
    {
        "source": "jaykreps",
        "target": "egrefen"
    },
    {
        "source": "jaykreps",
        "target": "_mohansolo"
    },
    {
        "source": "jaykreps",
        "target": "bcherny"
    },
    {
        "source": "jaykreps",
        "target": "embirico"
    },
    {
        "source": "jaykreps",
        "target": "koraykv"
    },
    {
        "source": "lateinteraction",
        "target": "goodside"
    },
    {
        "source": "lateinteraction",
        "target": "ylecun"
    },
    {
        "source": "lateinteraction",
        "target": "sama"
    },
    {
        "source": "lateinteraction",
        "target": "karpathy"
    },
    {
        "source": "lateinteraction",
        "target": "arankomatsuzaki"
    },
    {
        "source": "lateinteraction",
        "target": "nils_reimers"
    },
    {
        "source": "lateinteraction",
        "target": "fchollet"
    },
    {
        "source": "lateinteraction",
        "target": "sleepinyourhat"
    },
    {
        "source": "lateinteraction",
        "target": "emostaque"
    },
    {
        "source": "lateinteraction",
        "target": "deliprao"
    },
    {
        "source": "lateinteraction",
        "target": "_jasonwei"
    },
    {
        "source": "lateinteraction",
        "target": "natashajaques"
    },
    {
        "source": "chris_j_paxton",
        "target": "ylecun"
    },
    {
        "source": "chris_j_paxton",
        "target": "_akhaliq"
    },
    {
        "source": "chris_j_paxton",
        "target": "drjimfan"
    },
    {
        "source": "chris_j_paxton",
        "target": "hardmaru"
    },
    {
        "source": "chris_j_paxton",
        "target": "googledeepmind"
    },
    {
        "source": "chris_j_paxton",
        "target": "svlevine"
    },
    {
        "source": "chris_j_paxton",
        "target": "soumithchintala"
    },
    {
        "source": "chris_j_paxton",
        "target": "docmilanfar"
    },
    {
        "source": "chris_j_paxton",
        "target": "arankomatsuzaki"
    },
    {
        "source": "chris_j_paxton",
        "target": "omarsar0"
    },
    {
        "source": "gordic_aleksa",
        "target": "hardmaru"
    },
    {
        "source": "gordic_aleksa",
        "target": "omarsar0"
    },
    {
        "source": "gordic_aleksa",
        "target": "googledeepmind"
    },
    {
        "source": "gordic_aleksa",
        "target": "pytorch"
    },
    {
        "source": "gordic_aleksa",
        "target": "soumithchintala"
    },
    {
        "source": "gordic_aleksa",
        "target": "petarv_93"
    },
    {
        "source": "gordic_aleksa",
        "target": "jeremyphoward"
    },
    {
        "source": "gordic_aleksa",
        "target": "giffmana"
    },
    {
        "source": "gordic_aleksa",
        "target": "arankomatsuzaki"
    },
    {
        "source": "gordic_aleksa",
        "target": "schmidhuberai"
    },
    {
        "source": "gordic_aleksa",
        "target": "mmbronstein"
    },
    {
        "source": "gordic_aleksa",
        "target": "huggingface"
    },
    {
        "source": "gordic_aleksa",
        "target": "chhillee"
    },
    {
        "source": "gordic_aleksa",
        "target": "woj_zaremba"
    },
    {
        "source": "gordic_aleksa",
        "target": "ilyasut"
    },
    {
        "source": "gordic_aleksa",
        "target": "wightmanr"
    },
    {
        "source": "gordic_aleksa",
        "target": "sarahookr"
    },
    {
        "source": "gordic_aleksa",
        "target": "miramurati"
    },
    {
        "source": "gordic_aleksa",
        "target": "saranormous"
    },
    {
        "source": "gordic_aleksa",
        "target": "sriramk"
    },
    {
        "source": "gordic_aleksa",
        "target": "shaneguml"
    },
    {
        "source": "gordic_aleksa",
        "target": "srush_nlp"
    },
    {
        "source": "gordic_aleksa",
        "target": "tobyphln"
    },
    {
        "source": "gordic_aleksa",
        "target": "jonathanross321"
    },
    {
        "source": "jamesmontemagno",
        "target": "satyanadella"
    },
    {
        "source": "tkipf",
        "target": "petarv_93"
    },
    {
        "source": "tkipf",
        "target": "mmbronstein"
    },
    {
        "source": "tkipf",
        "target": "csprofkgd"
    },
    {
        "source": "tkipf",
        "target": "sirbayes"
    },
    {
        "source": "tkipf",
        "target": "mattniessner"
    },
    {
        "source": "tkipf",
        "target": "neuripsconf"
    },
    {
        "source": "tkipf",
        "target": "savvyrl"
    },
    {
        "source": "tkipf",
        "target": "chhillee"
    },
    {
        "source": "tkipf",
        "target": "srush_nlp"
    },
    {
        "source": "tkipf",
        "target": "svlevine"
    },
    {
        "source": "tkipf",
        "target": "roydanroy"
    },
    {
        "source": "tkipf",
        "target": "sedielem"
    },
    {
        "source": "tkipf",
        "target": "ericzelikman"
    },
    {
        "source": "tkipf",
        "target": "antigravity"
    },
    {
        "source": "tkipf",
        "target": "nanobanana"
    },
    {
        "source": "tkipf",
        "target": "googleaistudio"
    },
    {
        "source": "boazbaraktcs",
        "target": "thegautamkamath"
    },
    {
        "source": "boazbaraktcs",
        "target": "roydanroy"
    },
    {
        "source": "boazbaraktcs",
        "target": "sebastienbubeck"
    },
    {
        "source": "boazbaraktcs",
        "target": "savvyrl"
    },
    {
        "source": "boazbaraktcs",
        "target": "srush_nlp"
    },
    {
        "source": "boazbaraktcs",
        "target": "zacharylipton"
    },
    {
        "source": "boazbaraktcs",
        "target": "tdietterich"
    },
    {
        "source": "boazbaraktcs",
        "target": "lateinteraction"
    },
    {
        "source": "boazbaraktcs",
        "target": "moltbook"
    },
    {
        "source": "boazbaraktcs",
        "target": "kalinowski007"
    },
    {
        "source": "boazbaraktcs",
        "target": "bcherny"
    },
    {
        "source": "thsottiaux",
        "target": "addyosmani"
    },
    {
        "source": "thsottiaux",
        "target": "miramurati"
    },
    {
        "source": "thsottiaux",
        "target": "steipete"
    },
    {
        "source": "thsottiaux",
        "target": "giffmana"
    },
    {
        "source": "thsottiaux",
        "target": "timzaman"
    },
    {
        "source": "thsottiaux",
        "target": "janleike"
    },
    {
        "source": "thsottiaux",
        "target": "gdb"
    },
    {
        "source": "thsottiaux",
        "target": "ilyasut"
    },
    {
        "source": "thsottiaux",
        "target": "woj_zaremba"
    },
    {
        "source": "thsottiaux",
        "target": "nickaturley"
    },
    {
        "source": "nickaturley",
        "target": "karpathy"
    },
    {
        "source": "nickaturley",
        "target": "gdb"
    },
    {
        "source": "nickaturley",
        "target": "goodside"
    },
    {
        "source": "nickaturley",
        "target": "ylecun"
    },
    {
        "source": "nickaturley",
        "target": "alexandr_wang"
    },
    {
        "source": "nickaturley",
        "target": "hardmaru"
    },
    {
        "source": "nickaturley",
        "target": "drjimfan"
    },
    {
        "source": "nickaturley",
        "target": "emostaque"
    },
    {
        "source": "nickaturley",
        "target": "miramurati"
    },
    {
        "source": "nickaturley",
        "target": "googledeepmind"
    },
    {
        "source": "nickaturley",
        "target": "woj_zaremba"
    },
    {
        "source": "nickaturley",
        "target": "esyudkowsky"
    },
    {
        "source": "nickaturley",
        "target": "openclaw"
    },
    {
        "source": "zicokolter",
        "target": "thegautamkamath"
    },
    {
        "source": "zicokolter",
        "target": "roydanroy"
    },
    {
        "source": "zicokolter",
        "target": "sirbayes"
    },
    {
        "source": "zicokolter",
        "target": "tdietterich"
    },
    {
        "source": "zicokolter",
        "target": "svlevine"
    },
    {
        "source": "zicokolter",
        "target": "zacharylipton"
    },
    {
        "source": "zicokolter",
        "target": "sebastienbubeck"
    },
    {
        "source": "zicokolter",
        "target": "natashajaques"
    },
    {
        "source": "zicokolter",
        "target": "steipete"
    },
    {
        "source": "zicokolter",
        "target": "demishassabis"
    },
    {
        "source": "zicokolter",
        "target": "tydsh"
    },
    {
        "source": "zicokolter",
        "target": "thsottiaux"
    },
    {
        "source": "zicokolter",
        "target": "yanndubs"
    },
    {
        "source": "zicokolter",
        "target": "saranormous"
    },
    {
        "source": "rao2z",
        "target": "tdietterich"
    },
    {
        "source": "rao2z",
        "target": "roydanroy"
    },
    {
        "source": "rao2z",
        "target": "melmitchell1"
    },
    {
        "source": "rao2z",
        "target": "srush_nlp"
    },
    {
        "source": "rao2z",
        "target": "chrmanning"
    },
    {
        "source": "rao2z",
        "target": "alexgdimakis"
    },
    {
        "source": "rao2z",
        "target": "lateinteraction"
    },
    {
        "source": "rao2z",
        "target": "fchollet"
    },
    {
        "source": "rao2z",
        "target": "dileeplearning"
    },
    {
        "source": "rao2z",
        "target": "karpathy"
    },
    {
        "source": "rao2z",
        "target": "andrewyng"
    },
    {
        "source": "rao2z",
        "target": "geoffreyhinton"
    },
    {
        "source": "rao2z",
        "target": "googledeepmind"
    },
    {
        "source": "zeyuanallenzhu",
        "target": "thegautamkamath"
    },
    {
        "source": "zeyuanallenzhu",
        "target": "sebastienbubeck"
    },
    {
        "source": "zeyuanallenzhu",
        "target": "roydanroy"
    },
    {
        "source": "zeyuanallenzhu",
        "target": "boazbaraktcs"
    },
    {
        "source": "zeyuanallenzhu",
        "target": "tydsh"
    },
    {
        "source": "zeyuanallenzhu",
        "target": "alexgdimakis"
    },
    {
        "source": "zeyuanallenzhu",
        "target": "sirbayes"
    },
    {
        "source": "zeyuanallenzhu",
        "target": "nandodf"
    },
    {
        "source": "zeyuanallenzhu",
        "target": "miramurati"
    },
    {
        "source": "zeyuanallenzhu",
        "target": "drjimfan"
    },
    {
        "source": "zeyuanallenzhu",
        "target": "demishassabis"
    },
    {
        "source": "zeyuanallenzhu",
        "target": "soumithchintala"
    },
    {
        "source": "nvidia_ai_pc",
        "target": "unslothai"
    },
    {
        "source": "nvidia_ai_pc",
        "target": "matthewberman"
    },
    {
        "source": "nvidia_ai_pc",
        "target": "nvidiagamedev"
    },
    {
        "source": "nvidia_ai_pc",
        "target": "nvidianewsroom"
    },
    {
        "source": "nvidia_ai_pc",
        "target": "nvidiaaidev"
    },
    {
        "source": "nvidia_ai_pc",
        "target": "nvidiastudio"
    },
    {
        "source": "nvidia_ai_pc",
        "target": "nvidiaai"
    },
    {
        "source": "nvidia_ai_pc",
        "target": "nvidiageforce"
    },
    {
        "source": "nvidia_ai_pc",
        "target": "nvidia"
    },
    {
        "source": "jm_alexia",
        "target": "_akhaliq"
    },
    {
        "source": "jm_alexia",
        "target": "docmilanfar"
    },
    {
        "source": "jm_alexia",
        "target": "arankomatsuzaki"
    },
    {
        "source": "jm_alexia",
        "target": "soumithchintala"
    },
    {
        "source": "jm_alexia",
        "target": "giffmana"
    },
    {
        "source": "jm_alexia",
        "target": "deliprao"
    },
    {
        "source": "jm_alexia",
        "target": "csprofkgd"
    },
    {
        "source": "jm_alexia",
        "target": "sirbayes"
    },
    {
        "source": "jm_alexia",
        "target": "savvyrl"
    },
    {
        "source": "jm_alexia",
        "target": "chhillee"
    },
    {
        "source": "jm_alexia",
        "target": "sedielem"
    },
    {
        "source": "jm_alexia",
        "target": "schmidhuberai"
    },
    {
        "source": "jm_alexia",
        "target": "thegautamkamath"
    },
    {
        "source": "jm_alexia",
        "target": "rihardjarc"
    },
    {
        "source": "jm_alexia",
        "target": "chrszegedy"
    },
    {
        "source": "alexwei_",
        "target": "yanndubs"
    },
    {
        "source": "alexwei_",
        "target": "merettm"
    },
    {
        "source": "alexwei_",
        "target": "sleepinyourhat"
    },
    {
        "source": "alexwei_",
        "target": "sama"
    },
    {
        "source": "alexwei_",
        "target": "sebastienbubeck"
    },
    {
        "source": "alexwei_",
        "target": "chatgptapp"
    },
    {
        "source": "nvidiaomniverse",
        "target": "nvidiastudio"
    },
    {
        "source": "nvidiaomniverse",
        "target": "nvidia"
    },
    {
        "source": "nvidiaomniverse",
        "target": "nvidiaai"
    },
    {
        "source": "nvidiaomniverse",
        "target": "nvidiaaidev"
    },
    {
        "source": "nvidiaomniverse",
        "target": "nvidiaworkstatn"
    },
    {
        "source": "nvidiaomniverse",
        "target": "nvidiadc"
    },
    {
        "source": "nvidiaomniverse",
        "target": "nvidiarobotics"
    },
    {
        "source": "nvidiaomniverse",
        "target": "nvidiadrive"
    },
    {
        "source": "nvidiaomniverse",
        "target": "ctnzr"
    },
    {
        "source": "nvidiaomniverse",
        "target": "nvidianewsroom"
    },
    {
        "source": "nvidiaomniverse",
        "target": "huggingface"
    },
    {
        "source": "nvidiaomniverse",
        "target": "azure"
    },
    {
        "source": "nvidiaomniverse",
        "target": "openai"
    },
    {
        "source": "ctnzr",
        "target": "hardmaru"
    },
    {
        "source": "ctnzr",
        "target": "soumithchintala"
    },
    {
        "source": "ctnzr",
        "target": "schmidhuberai"
    },
    {
        "source": "ctnzr",
        "target": "jeremyphoward"
    },
    {
        "source": "ctnzr",
        "target": "richardsocher"
    },
    {
        "source": "ctnzr",
        "target": "iamtrask"
    },
    {
        "source": "ctnzr",
        "target": "jeffdean"
    },
    {
        "source": "ctnzr",
        "target": "woj_zaremba"
    },
    {
        "source": "ctnzr",
        "target": "svlevine"
    },
    {
        "source": "ctnzr",
        "target": "sedielem"
    },
    {
        "source": "ctnzr",
        "target": "clementdelangue"
    },
    {
        "source": "ctnzr",
        "target": "oriolvinyalsml"
    },
    {
        "source": "ctnzr",
        "target": "dpkingma"
    },
    {
        "source": "ctnzr",
        "target": "miramurati"
    },
    {
        "source": "embirico",
        "target": "sama"
    },
    {
        "source": "embirico",
        "target": "levie"
    },
    {
        "source": "embirico",
        "target": "emollick"
    },
    {
        "source": "embirico",
        "target": "thsottiaux"
    },
    {
        "source": "embirico",
        "target": "zicokolter"
    },
    {
        "source": "ericzelikman",
        "target": "drjimfan"
    },
    {
        "source": "ericzelikman",
        "target": "karpathy"
    },
    {
        "source": "ericzelikman",
        "target": "_akhaliq"
    },
    {
        "source": "ericzelikman",
        "target": "goodside"
    },
    {
        "source": "ericzelikman",
        "target": "tunguz"
    },
    {
        "source": "ericzelikman",
        "target": "rasbt"
    },
    {
        "source": "ericzelikman",
        "target": "_jasonwei"
    },
    {
        "source": "ericzelikman",
        "target": "chhillee"
    },
    {
        "source": "ericzelikman",
        "target": "yuhu_ai_"
    },
    {
        "source": "ericzelikman",
        "target": "chrmanning"
    },
    {
        "source": "ericzelikman",
        "target": "mathemagic1an"
    },
    {
        "source": "ericzelikman",
        "target": "garymarcus"
    },
    {
        "source": "ericzelikman",
        "target": "shaneguml"
    },
    {
        "source": "ericzelikman",
        "target": "sleepinyourhat"
    },
    {
        "source": "ericzelikman",
        "target": "mmbronstein"
    },
    {
        "source": "ericzelikman",
        "target": "minchoi"
    },
    {
        "source": "wightmanr",
        "target": "_akhaliq"
    },
    {
        "source": "wightmanr",
        "target": "rasbt"
    },
    {
        "source": "wightmanr",
        "target": "omarsar0"
    },
    {
        "source": "wightmanr",
        "target": "giffmana"
    },
    {
        "source": "wightmanr",
        "target": "pytorch"
    },
    {
        "source": "wightmanr",
        "target": "soumithchintala"
    },
    {
        "source": "wightmanr",
        "target": "jeremyphoward"
    },
    {
        "source": "wightmanr",
        "target": "arankomatsuzaki"
    },
    {
        "source": "wightmanr",
        "target": "abhi1thakur"
    },
    {
        "source": "wightmanr",
        "target": "mervenoyann"
    },
    {
        "source": "wightmanr",
        "target": "huggingface"
    },
    {
        "source": "wightmanr",
        "target": "chhillee"
    },
    {
        "source": "wightmanr",
        "target": "julien_c"
    },
    {
        "source": "wightmanr",
        "target": "clementdelangue"
    },
    {
        "source": "wightmanr",
        "target": "steipete"
    },
    {
        "source": "wightmanr",
        "target": "openclaw"
    },
    {
        "source": "wightmanr",
        "target": "getjonwithit"
    },
    {
        "source": "sashamtl",
        "target": "mmitchell_ai"
    },
    {
        "source": "sashamtl",
        "target": "mervenoyann"
    },
    {
        "source": "sashamtl",
        "target": "clementdelangue"
    },
    {
        "source": "sashamtl",
        "target": "huggingface"
    },
    {
        "source": "sashamtl",
        "target": "osanseviero"
    },
    {
        "source": "sashamtl",
        "target": "julien_c"
    },
    {
        "source": "sashamtl",
        "target": "deliprao"
    },
    {
        "source": "sashamtl",
        "target": "savvyrl"
    },
    {
        "source": "sashamtl",
        "target": "sarahookr"
    },
    {
        "source": "sashamtl",
        "target": "abhi1thakur"
    },
    {
        "source": "sashamtl",
        "target": "giffmana"
    },
    {
        "source": "sashamtl",
        "target": "thom_wolf"
    },
    {
        "source": "sashamtl",
        "target": "_nateraw"
    },
    {
        "source": "sashamtl",
        "target": "srush_nlp"
    },
    {
        "source": "alexgdimakis",
        "target": "docmilanfar"
    },
    {
        "source": "alexgdimakis",
        "target": "thegautamkamath"
    },
    {
        "source": "alexgdimakis",
        "target": "roydanroy"
    },
    {
        "source": "alexgdimakis",
        "target": "csprofkgd"
    },
    {
        "source": "alexgdimakis",
        "target": "savvyrl"
    },
    {
        "source": "alexgdimakis",
        "target": "zacharylipton"
    },
    {
        "source": "alexgdimakis",
        "target": "sirbayes"
    },
    {
        "source": "alexgdimakis",
        "target": "sebastienbubeck"
    },
    {
        "source": "alexgdimakis",
        "target": "mmbronstein"
    },
    {
        "source": "alexgdimakis",
        "target": "thsottiaux"
    },
    {
        "source": "alexgdimakis",
        "target": "fidjissimo"
    },
    {
        "source": "simpsoka",
        "target": "koraykv"
    },
    {
        "source": "simpsoka",
        "target": "tulseedoshi"
    },
    {
        "source": "simpsoka",
        "target": "_mohansolo"
    },
    {
        "source": "kalomaze",
        "target": "claudeai"
    },
    {
        "source": "nvidiagtc",
        "target": "nvidiageforce"
    },
    {
        "source": "nvidiagtc",
        "target": "ylecun"
    },
    {
        "source": "nvidiagtc",
        "target": "nvidia"
    },
    {
        "source": "nvidiagtc",
        "target": "nvidiastudio"
    },
    {
        "source": "nvidiagtc",
        "target": "andrewyng"
    },
    {
        "source": "nvidiagtc",
        "target": "tunguz"
    },
    {
        "source": "nvidiagtc",
        "target": "nvidiaomniverse"
    },
    {
        "source": "nvidiagtc",
        "target": "googledeepmind"
    },
    {
        "source": "nvidiagtc",
        "target": "nvidiaaidev"
    },
    {
        "source": "nvidiagtc",
        "target": "drjimfan"
    },
    {
        "source": "nvidiagtc",
        "target": "nvidiaai"
    },
    {
        "source": "nvidiagtc",
        "target": "pytorch"
    },
    {
        "source": "nvidiagtc",
        "target": "nvidiarobotics"
    },
    {
        "source": "nvidiagtc",
        "target": "nvidiadc"
    },
    {
        "source": "nvidiagtc",
        "target": "nvidiaworkstatn"
    },
    {
        "source": "nvidiagtc",
        "target": "nvidiahpcdev"
    },
    {
        "source": "nvidiagtc",
        "target": "nvidiadrive"
    },
    {
        "source": "nvidiagtc",
        "target": "nvidianewsroom"
    },
    {
        "source": "risingsayak",
        "target": "rasbt"
    },
    {
        "source": "risingsayak",
        "target": "abhi1thakur"
    },
    {
        "source": "risingsayak",
        "target": "jeremyphoward"
    },
    {
        "source": "risingsayak",
        "target": "pytorch"
    },
    {
        "source": "risingsayak",
        "target": "huggingface"
    },
    {
        "source": "risingsayak",
        "target": "giffmana"
    },
    {
        "source": "risingsayak",
        "target": "soumithchintala"
    },
    {
        "source": "risingsayak",
        "target": "tensorflow"
    },
    {
        "source": "risingsayak",
        "target": "iamtrask"
    },
    {
        "source": "risingsayak",
        "target": "srush_nlp"
    },
    {
        "source": "risingsayak",
        "target": "thom_wolf"
    },
    {
        "source": "risingsayak",
        "target": "sarahookr"
    },
    {
        "source": "risingsayak",
        "target": "oriolvinyalsml"
    },
    {
        "source": "risingsayak",
        "target": "svlevine"
    },
    {
        "source": "risingsayak",
        "target": "josh_tobin_"
    },
    {
        "source": "risingsayak",
        "target": "satyanadella"
    },
    {
        "source": "risingsayak",
        "target": "ilyasut"
    },
    {
        "source": "risingsayak",
        "target": "geoffreyhinton"
    },
    {
        "source": "risingsayak",
        "target": "nvidiaai"
    },
    {
        "source": "brentm_spacex",
        "target": "rayhotate"
    },
    {
        "source": "brentm_spacex",
        "target": "heinrichkuttler"
    },
    {
        "source": "brentm_spacex",
        "target": "hendrycks"
    },
    {
        "source": "brentm_spacex",
        "target": "yuhu_ai_"
    },
    {
        "source": "adocomplete",
        "target": "geoffreylitt"
    },
    {
        "source": "adocomplete",
        "target": "bcherny"
    },
    {
        "source": "adocomplete",
        "target": "_mohansolo"
    },
    {
        "source": "adocomplete",
        "target": "antigravity"
    },
    {
        "source": "adocomplete",
        "target": "clementdelangue"
    },
    {
        "source": "adocomplete",
        "target": "goodside"
    },
    {
        "source": "adocomplete",
        "target": "osanseviero"
    },
    {
        "source": "geoffreylitt",
        "target": "bcherny"
    },
    {
        "source": "geoffreylitt",
        "target": "embirico"
    },
    {
        "source": "koraykv",
        "target": "ylecun"
    },
    {
        "source": "koraykv",
        "target": "googledeepmind"
    },
    {
        "source": "koraykv",
        "target": "soumithchintala"
    },
    {
        "source": "koraykv",
        "target": "oriolvinyalsml"
    },
    {
        "source": "koraykv",
        "target": "sedielem"
    },
    {
        "source": "koraykv",
        "target": "egrefen"
    },
    {
        "source": "koraykv",
        "target": "anthropicai"
    },
    {
        "source": "koraykv",
        "target": "demishassabis"
    },
    {
        "source": "koraykv",
        "target": "ilyasut"
    },
    {
        "source": "koraykv",
        "target": "jeffdean"
    },
    {
        "source": "koraykv",
        "target": "nandodf"
    },
    {
        "source": "koraykv",
        "target": "natashajaques"
    },
    {
        "source": "koraykv",
        "target": "chrmanning"
    },
    {
        "source": "koraykv",
        "target": "mustafasuleyman"
    },
    {
        "source": "koraykv",
        "target": "dileeplearning"
    },
    {
        "source": "koraykv",
        "target": "antigravity"
    },
    {
        "source": "koraykv",
        "target": "_mohansolo"
    },
    {
        "source": "koraykv",
        "target": "fchollet"
    },
    {
        "source": "koraykv",
        "target": "emollick"
    },
    {
        "source": "koraykv",
        "target": "officiallogank"
    },
    {
        "source": "koraykv",
        "target": "arena"
    },
    {
        "source": "koraykv",
        "target": "goodfellow_ian"
    },
    {
        "source": "nvidiacc",
        "target": "nvidiageforce"
    },
    {
        "source": "nvidiacc",
        "target": "nvidiagfn"
    },
    {
        "source": "nvidiacc",
        "target": "nvidiageforceuk"
    },
    {
        "source": "nvidiacc",
        "target": "nvidia"
    },
    {
        "source": "nvidiacc",
        "target": "nvidiarobotics"
    },
    {
        "source": "nvidiacc",
        "target": "nvidiaai"
    },
    {
        "source": "nvidiacc",
        "target": "nvidiaaidev"
    },
    {
        "source": "nvidiacc",
        "target": "nvidiaworkstatn"
    },
    {
        "source": "nvidiacc",
        "target": "nvidiaomniverse"
    },
    {
        "source": "nvidiacc",
        "target": "nvidiadc"
    },
    {
        "source": "nvidiacc",
        "target": "nvidiagtc"
    },
    {
        "source": "nvidiacc",
        "target": "nvidiashield"
    },
    {
        "source": "hannawallach",
        "target": "mmitchell_ai"
    },
    {
        "source": "hannawallach",
        "target": "roydanroy"
    },
    {
        "source": "hannawallach",
        "target": "neuripsconf"
    },
    {
        "source": "hannawallach",
        "target": "zacharylipton"
    },
    {
        "source": "hannawallach",
        "target": "srush_nlp"
    },
    {
        "source": "hannawallach",
        "target": "sarahookr"
    },
    {
        "source": "hannawallach",
        "target": "chrmanning"
    },
    {
        "source": "hannawallach",
        "target": "sleepinyourhat"
    },
    {
        "source": "hannawallach",
        "target": "tdietterich"
    },
    {
        "source": "hannawallach",
        "target": "sashamtl"
    },
    {
        "source": "hannawallach",
        "target": "melmitchell1"
    },
    {
        "source": "hannawallach",
        "target": "sirbayes"
    },
    {
        "source": "remicadene",
        "target": "karpathy"
    },
    {
        "source": "remicadene",
        "target": "_akhaliq"
    },
    {
        "source": "remicadene",
        "target": "ylecun"
    },
    {
        "source": "remicadene",
        "target": "hardmaru"
    },
    {
        "source": "remicadene",
        "target": "googledeepmind"
    },
    {
        "source": "remicadene",
        "target": "timzaman"
    },
    {
        "source": "remicadene",
        "target": "gdb"
    },
    {
        "source": "remicadene",
        "target": "fchollet"
    },
    {
        "source": "remicadene",
        "target": "bcherny"
    },
    {
        "source": "maithra_raghu",
        "target": "soumithchintala"
    },
    {
        "source": "maithra_raghu",
        "target": "savvyrl"
    },
    {
        "source": "maithra_raghu",
        "target": "giffmana"
    },
    {
        "source": "maithra_raghu",
        "target": "deliprao"
    },
    {
        "source": "maithra_raghu",
        "target": "srush_nlp"
    },
    {
        "source": "maithra_raghu",
        "target": "sarahookr"
    },
    {
        "source": "maithra_raghu",
        "target": "zacharylipton"
    },
    {
        "source": "maithra_raghu",
        "target": "neuripsconf"
    },
    {
        "source": "maithra_raghu",
        "target": "natashajaques"
    },
    {
        "source": "maithra_raghu",
        "target": "svlevine"
    },
    {
        "source": "maithra_raghu",
        "target": "sedielem"
    },
    {
        "source": "maithra_raghu",
        "target": "fidjissimo"
    },
    {
        "source": "maithra_raghu",
        "target": "levie"
    },
    {
        "source": "maithra_raghu",
        "target": "askalphaxiv"
    },
    {
        "source": "maithra_raghu",
        "target": "satyanadella"
    },
    {
        "source": "maithra_raghu",
        "target": "nandodf"
    },
    {
        "source": "maithra_raghu",
        "target": "sriramk"
    },
    {
        "source": "maithra_raghu",
        "target": "fchollet"
    },
    {
        "source": "agarwl_",
        "target": "svlevine"
    },
    {
        "source": "agarwl_",
        "target": "savvyrl"
    },
    {
        "source": "agarwl_",
        "target": "docmilanfar"
    },
    {
        "source": "agarwl_",
        "target": "shaneguml"
    },
    {
        "source": "agarwl_",
        "target": "soumithchintala"
    },
    {
        "source": "agarwl_",
        "target": "sirbayes"
    },
    {
        "source": "agarwl_",
        "target": "natashajaques"
    },
    {
        "source": "agarwl_",
        "target": "neuripsconf"
    },
    {
        "source": "agarwl_",
        "target": "arankomatsuzaki"
    },
    {
        "source": "agarwl_",
        "target": "giffmana"
    },
    {
        "source": "agarwl_",
        "target": "sarahookr"
    },
    {
        "source": "agarwl_",
        "target": "roydanroy"
    },
    {
        "source": "agarwl_",
        "target": "unslothai"
    },
    {
        "source": "agarwl_",
        "target": "bcherny"
    },
    {
        "source": "agarwl_",
        "target": "shamkakade6"
    },
    {
        "source": "xwang_lk",
        "target": "arankomatsuzaki"
    },
    {
        "source": "xwang_lk",
        "target": "csprofkgd"
    },
    {
        "source": "xwang_lk",
        "target": "srush_nlp"
    },
    {
        "source": "xwang_lk",
        "target": "gneubig"
    },
    {
        "source": "xwang_lk",
        "target": "thegautamkamath"
    },
    {
        "source": "xwang_lk",
        "target": "sleepinyourhat"
    },
    {
        "source": "xwang_lk",
        "target": "tydsh"
    },
    {
        "source": "xwang_lk",
        "target": "steipete"
    },
    {
        "source": "xwang_lk",
        "target": "andy_l_jones"
    },
    {
        "source": "xwang_lk",
        "target": "askalphaxiv"
    },
    {
        "source": "xwang_lk",
        "target": "jm_alexia"
    },
    {
        "source": "xwang_lk",
        "target": "yoshua_bengio"
    },
    {
        "source": "heinrichkuttler",
        "target": "ylecun"
    },
    {
        "source": "heinrichkuttler",
        "target": "karpathy"
    },
    {
        "source": "heinrichkuttler",
        "target": "hardmaru"
    },
    {
        "source": "heinrichkuttler",
        "target": "googledeepmind"
    },
    {
        "source": "heinrichkuttler",
        "target": "_akhaliq"
    },
    {
        "source": "heinrichkuttler",
        "target": "fchollet"
    },
    {
        "source": "heinrichkuttler",
        "target": "egrefen"
    },
    {
        "source": "heinrichkuttler",
        "target": "soumithchintala"
    },
    {
        "source": "heinrichkuttler",
        "target": "drjimfan"
    },
    {
        "source": "heinrichkuttler",
        "target": "giffmana"
    },
    {
        "source": "heinrichkuttler",
        "target": "gdb"
    },
    {
        "source": "heinrichkuttler",
        "target": "felixhill84"
    },
    {
        "source": "heinrichkuttler",
        "target": "arankomatsuzaki"
    },
    {
        "source": "heinrichkuttler",
        "target": "andrewyng"
    },
    {
        "source": "heinrichkuttler",
        "target": "tunguz"
    },
    {
        "source": "heinrichkuttler",
        "target": "steipete"
    },
    {
        "source": "heinrichkuttler",
        "target": "chatgpt21"
    },
    {
        "source": "sammcallister",
        "target": "johnschulman2"
    },
    {
        "source": "sammcallister",
        "target": "demishassabis"
    },
    {
        "source": "jfpuget",
        "target": "ylecun"
    },
    {
        "source": "jfpuget",
        "target": "omarsar0"
    },
    {
        "source": "jfpuget",
        "target": "mervenoyann"
    },
    {
        "source": "jfpuget",
        "target": "pytorch"
    },
    {
        "source": "jfpuget",
        "target": "soumithchintala"
    },
    {
        "source": "jfpuget",
        "target": "giffmana"
    },
    {
        "source": "jfpuget",
        "target": "arankomatsuzaki"
    },
    {
        "source": "jfpuget",
        "target": "huggingface"
    },
    {
        "source": "jfpuget",
        "target": "julien_c"
    },
    {
        "source": "jfpuget",
        "target": "schmidhuberai"
    },
    {
        "source": "jfpuget",
        "target": "wightmanr"
    },
    {
        "source": "jfpuget",
        "target": "sarahookr"
    },
    {
        "source": "jfpuget",
        "target": "bcherny"
    },
    {
        "source": "jfpuget",
        "target": "askalphaxiv"
    },
    {
        "source": "catherineols",
        "target": "miles_brundage"
    },
    {
        "source": "catherineols",
        "target": "jackclarksf"
    },
    {
        "source": "catherineols",
        "target": "anthropicai"
    },
    {
        "source": "catherineols",
        "target": "amandaaskell"
    },
    {
        "source": "catherineols",
        "target": "woj_zaremba"
    },
    {
        "source": "catherineols",
        "target": "savvyrl"
    },
    {
        "source": "catherineols",
        "target": "sleepinyourhat"
    },
    {
        "source": "catherineols",
        "target": "roydanroy"
    },
    {
        "source": "catherineols",
        "target": "sarahookr"
    },
    {
        "source": "catherineols",
        "target": "sriramk"
    },
    {
        "source": "catherineols",
        "target": "claudeai"
    },
    {
        "source": "catherineols",
        "target": "stuartjritchie"
    },
    {
        "source": "catherineols",
        "target": "johnschulman2"
    },
    {
        "source": "aprilwright",
        "target": "ylecun"
    },
    {
        "source": "aprilwright",
        "target": "soumithchintala"
    },
    {
        "source": "aprilwright",
        "target": "tdietterich"
    },
    {
        "source": "aprilwright",
        "target": "garymarcus"
    },
    {
        "source": "nielsrogge",
        "target": "_akhaliq"
    },
    {
        "source": "nielsrogge",
        "target": "hardmaru"
    },
    {
        "source": "nielsrogge",
        "target": "huggingface"
    },
    {
        "source": "nielsrogge",
        "target": "osanseviero"
    },
    {
        "source": "nielsrogge",
        "target": "julien_c"
    },
    {
        "source": "nielsrogge",
        "target": "clementdelangue"
    },
    {
        "source": "nielsrogge",
        "target": "giffmana"
    },
    {
        "source": "nielsrogge",
        "target": "soumithchintala"
    },
    {
        "source": "nielsrogge",
        "target": "arankomatsuzaki"
    },
    {
        "source": "nielsrogge",
        "target": "_nateraw"
    },
    {
        "source": "nielsrogge",
        "target": "_lewtun"
    },
    {
        "source": "nielsrogge",
        "target": "ai__pub"
    },
    {
        "source": "nielsrogge",
        "target": "thom_wolf"
    },
    {
        "source": "nielsrogge",
        "target": "wightmanr"
    },
    {
        "source": "nielsrogge",
        "target": "deliprao"
    },
    {
        "source": "nielsrogge",
        "target": "googleai"
    },
    {
        "source": "nielsrogge",
        "target": "openclaw"
    },
    {
        "source": "nielsrogge",
        "target": "xai"
    },
    {
        "source": "nielsrogge",
        "target": "aelluswamy"
    },
    {
        "source": "nielsrogge",
        "target": "askalphaxiv"
    },
    {
        "source": "nielsrogge",
        "target": "adinayakup"
    },
    {
        "source": "nielsrogge",
        "target": "rao2z"
    },
    {
        "source": "nielsrogge",
        "target": "fofrai"
    },
    {
        "source": "nvidiadrive",
        "target": "nvidia"
    },
    {
        "source": "nvidiadrive",
        "target": "nvidiaaidev"
    },
    {
        "source": "nvidiadrive",
        "target": "nvidiarobotics"
    },
    {
        "source": "nvidiadrive",
        "target": "nvidiaomniverse"
    },
    {
        "source": "nvidiadrive",
        "target": "nvidiadc"
    },
    {
        "source": "nvidiadrive",
        "target": "nvidianewsroom"
    },
    {
        "source": "nvidiadrive",
        "target": "nvidiahpcdev"
    },
    {
        "source": "nvidiadrive",
        "target": "nvidiaworkstatn"
    },
    {
        "source": "nvidiadrive",
        "target": "nvidiagtc"
    },
    {
        "source": "_lewtun",
        "target": "rasbt"
    },
    {
        "source": "_lewtun",
        "target": "tunguz"
    },
    {
        "source": "_lewtun",
        "target": "_akhaliq"
    },
    {
        "source": "_lewtun",
        "target": "mervenoyann"
    },
    {
        "source": "_lewtun",
        "target": "osanseviero"
    },
    {
        "source": "_lewtun",
        "target": "huggingface"
    },
    {
        "source": "_lewtun",
        "target": "julien_c"
    },
    {
        "source": "_lewtun",
        "target": "jeremyphoward"
    },
    {
        "source": "_lewtun",
        "target": "abhi1thakur"
    },
    {
        "source": "_lewtun",
        "target": "clementdelangue"
    },
    {
        "source": "_lewtun",
        "target": "drjimfan"
    },
    {
        "source": "_lewtun",
        "target": "pytorch"
    },
    {
        "source": "_lewtun",
        "target": "_nateraw"
    },
    {
        "source": "_lewtun",
        "target": "soumithchintala"
    },
    {
        "source": "_lewtun",
        "target": "arankomatsuzaki"
    },
    {
        "source": "_lewtun",
        "target": "littmath"
    },
    {
        "source": "_lewtun",
        "target": "getjonwithit"
    },
    {
        "source": "_lewtun",
        "target": "ericzelikman"
    },
    {
        "source": "_lewtun",
        "target": "jm_alexia"
    },
    {
        "source": "_lewtun",
        "target": "khoomeik"
    },
    {
        "source": "nvidiakorea",
        "target": "nvidia"
    },
    {
        "source": "nvidiakorea",
        "target": "nvidiadc"
    },
    {
        "source": "nvidiakorea",
        "target": "nvidiarobotics"
    },
    {
        "source": "nvidiakorea",
        "target": "nvidiadrive"
    },
    {
        "source": "nvidiakorea",
        "target": "nvidiaai"
    },
    {
        "source": "azaliamirh",
        "target": "soumithchintala"
    },
    {
        "source": "azaliamirh",
        "target": "giffmana"
    },
    {
        "source": "azaliamirh",
        "target": "arankomatsuzaki"
    },
    {
        "source": "azaliamirh",
        "target": "savvyrl"
    },
    {
        "source": "azaliamirh",
        "target": "svlevine"
    },
    {
        "source": "azaliamirh",
        "target": "jeffdean"
    },
    {
        "source": "azaliamirh",
        "target": "deliprao"
    },
    {
        "source": "azaliamirh",
        "target": "sarahookr"
    },
    {
        "source": "azaliamirh",
        "target": "oriolvinyalsml"
    },
    {
        "source": "azaliamirh",
        "target": "woj_zaremba"
    },
    {
        "source": "azaliamirh",
        "target": "tdietterich"
    },
    {
        "source": "azaliamirh",
        "target": "sedielem"
    },
    {
        "source": "azaliamirh",
        "target": "anthropicai"
    },
    {
        "source": "azaliamirh",
        "target": "sundeep"
    },
    {
        "source": "azaliamirh",
        "target": "saranormous"
    },
    {
        "source": "nvidiageforcepl",
        "target": "nvidiagfn"
    },
    {
        "source": "shamkakade6",
        "target": "sebastienbubeck"
    },
    {
        "source": "shamkakade6",
        "target": "boazbaraktcs"
    },
    {
        "source": "shamkakade6",
        "target": "svlevine"
    },
    {
        "source": "shamkakade6",
        "target": "tdietterich"
    },
    {
        "source": "shamkakade6",
        "target": "natashajaques"
    },
    {
        "source": "shamkakade6",
        "target": "srush_nlp"
    },
    {
        "source": "shamkakade6",
        "target": "alexgdimakis"
    },
    {
        "source": "shamkakade6",
        "target": "sleepinyourhat"
    },
    {
        "source": "shamkakade6",
        "target": "giffmana"
    },
    {
        "source": "shamkakade6",
        "target": "thom_wolf"
    },
    {
        "source": "majmudaradam",
        "target": "sama"
    },
    {
        "source": "majmudaradam",
        "target": "woj_zaremba"
    },
    {
        "source": "majmudaradam",
        "target": "ilyasut"
    },
    {
        "source": "majmudaradam",
        "target": "gavinsbaker"
    },
    {
        "source": "majmudaradam",
        "target": "anshitasaini_"
    },
    {
        "source": "realmadhuguru",
        "target": "sama"
    },
    {
        "source": "realmadhuguru",
        "target": "karpathy"
    },
    {
        "source": "realmadhuguru",
        "target": "emollick"
    },
    {
        "source": "realmadhuguru",
        "target": "bcherny"
    },
    {
        "source": "realmadhuguru",
        "target": "jeffdean"
    },
    {
        "source": "realmadhuguru",
        "target": "deryatr_"
    },
    {
        "source": "realmadhuguru",
        "target": "fidjissimo"
    },
    {
        "source": "realmadhuguru",
        "target": "emostaque"
    },
    {
        "source": "lm_zheng",
        "target": "karpathy"
    },
    {
        "source": "lm_zheng",
        "target": "ylecun"
    },
    {
        "source": "lm_zheng",
        "target": "_akhaliq"
    },
    {
        "source": "lm_zheng",
        "target": "drjimfan"
    },
    {
        "source": "lm_zheng",
        "target": "pytorch"
    },
    {
        "source": "lm_zheng",
        "target": "chhillee"
    },
    {
        "source": "lm_zheng",
        "target": "hardmaru"
    },
    {
        "source": "lm_zheng",
        "target": "tydsh"
    },
    {
        "source": "lm_zheng",
        "target": "bcherny"
    },
    {
        "source": "lm_zheng",
        "target": "woj_zaremba"
    },
    {
        "source": "lm_zheng",
        "target": "zai_org"
    },
    {
        "source": "douwekiela",
        "target": "arankomatsuzaki"
    },
    {
        "source": "douwekiela",
        "target": "soumithchintala"
    },
    {
        "source": "douwekiela",
        "target": "clementdelangue"
    },
    {
        "source": "douwekiela",
        "target": "deliprao"
    },
    {
        "source": "douwekiela",
        "target": "giffmana"
    },
    {
        "source": "douwekiela",
        "target": "richardsocher"
    },
    {
        "source": "douwekiela",
        "target": "huggingface"
    },
    {
        "source": "douwekiela",
        "target": "_jasonwei"
    },
    {
        "source": "douwekiela",
        "target": "srush_nlp"
    },
    {
        "source": "douwekiela",
        "target": "chrmanning"
    },
    {
        "source": "douwekiela",
        "target": "sleepinyourhat"
    },
    {
        "source": "douwekiela",
        "target": "savvyrl"
    },
    {
        "source": "douwekiela",
        "target": "gneubig"
    },
    {
        "source": "douwekiela",
        "target": "anthropicai"
    },
    {
        "source": "douwekiela",
        "target": "chhillee"
    },
    {
        "source": "douwekiela",
        "target": "levie"
    },
    {
        "source": "douwekiela",
        "target": "austen"
    },
    {
        "source": "douwekiela",
        "target": "woj_zaremba"
    },
    {
        "source": "douwekiela",
        "target": "miles_brundage"
    },
    {
        "source": "douwekiela",
        "target": "svlevine"
    },
    {
        "source": "douwekiela",
        "target": "shaneguml"
    },
    {
        "source": "douwekiela",
        "target": "johnschulman2"
    },
    {
        "source": "douwekiela",
        "target": "timzaman"
    },
    {
        "source": "douwekiela",
        "target": "jackclarksf"
    },
    {
        "source": "douwekiela",
        "target": "sedielem"
    },
    {
        "source": "jerrod_lew",
        "target": "openclaw"
    },
    {
        "source": "zjasper",
        "target": "steipete"
    },
    {
        "source": "zjasper",
        "target": "bcherny"
    },
    {
        "source": "zjasper",
        "target": "jm_alexia"
    },
    {
        "source": "zjasper",
        "target": "askalphaxiv"
    },
    {
        "source": "zjasper",
        "target": "jonathanross321"
    },
    {
        "source": "dileeplearning",
        "target": "garymarcus"
    },
    {
        "source": "dileeplearning",
        "target": "soumithchintala"
    },
    {
        "source": "dileeplearning",
        "target": "melmitchell1"
    },
    {
        "source": "dileeplearning",
        "target": "deliprao"
    },
    {
        "source": "dileeplearning",
        "target": "woj_zaremba"
    },
    {
        "source": "dileeplearning",
        "target": "giffmana"
    },
    {
        "source": "dileeplearning",
        "target": "felixhill84"
    },
    {
        "source": "dileeplearning",
        "target": "savvyrl"
    },
    {
        "source": "dileeplearning",
        "target": "roydanroy"
    },
    {
        "source": "dileeplearning",
        "target": "sirbayes"
    },
    {
        "source": "dileeplearning",
        "target": "miles_brundage"
    },
    {
        "source": "dileeplearning",
        "target": "openclaw"
    },
    {
        "source": "dileeplearning",
        "target": "officiallogank"
    },
    {
        "source": "dileeplearning",
        "target": "lateinteraction"
    },
    {
        "source": "nils_reimers",
        "target": "arankomatsuzaki"
    },
    {
        "source": "nils_reimers",
        "target": "mervenoyann"
    },
    {
        "source": "nils_reimers",
        "target": "julien_c"
    },
    {
        "source": "nils_reimers",
        "target": "clementdelangue"
    },
    {
        "source": "nils_reimers",
        "target": "huggingface"
    },
    {
        "source": "nils_reimers",
        "target": "giffmana"
    },
    {
        "source": "nils_reimers",
        "target": "deliprao"
    },
    {
        "source": "nils_reimers",
        "target": "richardsocher"
    },
    {
        "source": "nils_reimers",
        "target": "osanseviero"
    },
    {
        "source": "nils_reimers",
        "target": "thom_wolf"
    },
    {
        "source": "nils_reimers",
        "target": "srush_nlp"
    },
    {
        "source": "nils_reimers",
        "target": "_lewtun"
    },
    {
        "source": "nils_reimers",
        "target": "_jasonwei"
    },
    {
        "source": "nils_reimers",
        "target": "steipete"
    },
    {
        "source": "nils_reimers",
        "target": "googleaistudio"
    },
    {
        "source": "nils_reimers",
        "target": "zai_org"
    },
    {
        "source": "nils_reimers",
        "target": "rohanpaul_ai"
    },
    {
        "source": "nils_reimers",
        "target": "sebastienbubeck"
    },
    {
        "source": "nils_reimers",
        "target": "zjasper"
    },
    {
        "source": "avdnoord",
        "target": "soumithchintala"
    },
    {
        "source": "avdnoord",
        "target": "sedielem"
    },
    {
        "source": "avdnoord",
        "target": "giffmana"
    },
    {
        "source": "avdnoord",
        "target": "oriolvinyalsml"
    },
    {
        "source": "avdnoord",
        "target": "neuripsconf"
    },
    {
        "source": "avdnoord",
        "target": "svlevine"
    },
    {
        "source": "avdnoord",
        "target": "mattniessner"
    },
    {
        "source": "avdnoord",
        "target": "_jasonwei"
    },
    {
        "source": "avdnoord",
        "target": "dpkingma"
    },
    {
        "source": "avdnoord",
        "target": "nandodf"
    },
    {
        "source": "avdnoord",
        "target": "chatgpt21"
    },
    {
        "source": "avdnoord",
        "target": "_mohansolo"
    },
    {
        "source": "avdnoord",
        "target": "alexandr_wang"
    },
    {
        "source": "avdnoord",
        "target": "shengjia_zhao"
    },
    {
        "source": "avdnoord",
        "target": "fofrai"
    },
    {
        "source": "pashmerepat",
        "target": "embirico"
    },
    {
        "source": "pashmerepat",
        "target": "thsottiaux"
    },
    {
        "source": "pashmerepat",
        "target": "gdb"
    },
    {
        "source": "pashmerepat",
        "target": "goodside"
    },
    {
        "source": "pashmerepat",
        "target": "kalinowski007"
    },
    {
        "source": "pashmerepat",
        "target": "chatgpt21"
    },
    {
        "source": "hochreitersepp",
        "target": "schmidhuberai"
    },
    {
        "source": "hochreitersepp",
        "target": "giffmana"
    },
    {
        "source": "hochreitersepp",
        "target": "soumithchintala"
    },
    {
        "source": "hochreitersepp",
        "target": "csprofkgd"
    },
    {
        "source": "hochreitersepp",
        "target": "sirbayes"
    },
    {
        "source": "hochreitersepp",
        "target": "petarv_93"
    },
    {
        "source": "hochreitersepp",
        "target": "mmbronstein"
    },
    {
        "source": "hochreitersepp",
        "target": "roydanroy"
    },
    {
        "source": "hochreitersepp",
        "target": "sedielem"
    },
    {
        "source": "hochreitersepp",
        "target": "savvyrl"
    },
    {
        "source": "hochreitersepp",
        "target": "neuripsconf"
    },
    {
        "source": "hochreitersepp",
        "target": "oriolvinyalsml"
    },
    {
        "source": "hochreitersepp",
        "target": "tdietterich"
    },
    {
        "source": "hochreitersepp",
        "target": "sama"
    },
    {
        "source": "hochreitersepp",
        "target": "emostaque"
    },
    {
        "source": "hochreitersepp",
        "target": "thom_wolf"
    },
    {
        "source": "hochreitersepp",
        "target": "pytorch"
    },
    {
        "source": "hochreitersepp",
        "target": "openai"
    },
    {
        "source": "rayhotate",
        "target": "bcherny"
    },
    {
        "source": "lerobothf",
        "target": "nvidiarobotics"
    },
    {
        "source": "lerobothf",
        "target": "julien_c"
    },
    {
        "source": "lerobothf",
        "target": "huggingface"
    },
    {
        "source": "lerobothf",
        "target": "thom_wolf"
    },
    {
        "source": "lerobothf",
        "target": "clementdelangue"
    },
    {
        "source": "lerobothf",
        "target": "remicadene"
    },
    {
        "source": "andy_l_jones",
        "target": "anthropicai"
    },
    {
        "source": "andy_l_jones",
        "target": "amandaaskell"
    },
    {
        "source": "andy_l_jones",
        "target": "jackclarksf"
    },
    {
        "source": "andy_l_jones",
        "target": "arankomatsuzaki"
    },
    {
        "source": "andy_l_jones",
        "target": "janleike"
    },
    {
        "source": "andy_l_jones",
        "target": "catherineols"
    },
    {
        "source": "andy_l_jones",
        "target": "sleepinyourhat"
    },
    {
        "source": "andy_l_jones",
        "target": "ch402"
    },
    {
        "source": "andy_l_jones",
        "target": "chhillee"
    },
    {
        "source": "andy_l_jones",
        "target": "darioamodei"
    },
    {
        "source": "andy_l_jones",
        "target": "zeyuanallenzhu"
    },
    {
        "source": "andy_l_jones",
        "target": "alexalbert__"
    },
    {
        "source": "qhwang3",
        "target": "_akhaliq"
    },
    {
        "source": "qhwang3",
        "target": "ylecun"
    },
    {
        "source": "qhwang3",
        "target": "karpathy"
    },
    {
        "source": "qhwang3",
        "target": "drjimfan"
    },
    {
        "source": "qhwang3",
        "target": "petarv_93"
    },
    {
        "source": "qhwang3",
        "target": "hardmaru"
    },
    {
        "source": "qhwang3",
        "target": "arankomatsuzaki"
    },
    {
        "source": "qhwang3",
        "target": "googledeepmind"
    },
    {
        "source": "qhwang3",
        "target": "fchollet"
    },
    {
        "source": "qhwang3",
        "target": "chhillee"
    },
    {
        "source": "qhwang3",
        "target": "anthropicai"
    },
    {
        "source": "qhwang3",
        "target": "andrewyng"
    },
    {
        "source": "qhwang3",
        "target": "_jasonwei"
    },
    {
        "source": "qhwang3",
        "target": "mmbronstein"
    },
    {
        "source": "qhwang3",
        "target": "srush_nlp"
    },
    {
        "source": "qhwang3",
        "target": "johnschulman2"
    },
    {
        "source": "qhwang3",
        "target": "shengjia_zhao"
    },
    {
        "source": "qhwang3",
        "target": "heinrichkuttler"
    },
    {
        "source": "qhwang3",
        "target": "imhaotian"
    },
    {
        "source": "qhwang3",
        "target": "perplexity_ai"
    },
    {
        "source": "qhwang3",
        "target": "officiallogank"
    },
    {
        "source": "qhwang3",
        "target": "ibab"
    },
    {
        "source": "qhwang3",
        "target": "tobyphln"
    },
    {
        "source": "qhwang3",
        "target": "lm_zheng"
    },
    {
        "source": "koylanai",
        "target": "arena"
    },
    {
        "source": "koylanai",
        "target": "moltbook"
    },
    {
        "source": "koylanai",
        "target": "openclaw"
    },
    {
        "source": "josh_tobin_",
        "target": "omarsar0"
    },
    {
        "source": "josh_tobin_",
        "target": "soumithchintala"
    },
    {
        "source": "josh_tobin_",
        "target": "jeremyphoward"
    },
    {
        "source": "josh_tobin_",
        "target": "richardsocher"
    },
    {
        "source": "josh_tobin_",
        "target": "woj_zaremba"
    },
    {
        "source": "josh_tobin_",
        "target": "iamtrask"
    },
    {
        "source": "josh_tobin_",
        "target": "savvyrl"
    },
    {
        "source": "josh_tobin_",
        "target": "svlevine"
    },
    {
        "source": "josh_tobin_",
        "target": "risingsayak"
    },
    {
        "source": "josh_tobin_",
        "target": "shaneguml"
    },
    {
        "source": "josh_tobin_",
        "target": "jsuarez"
    },
    {
        "source": "josh_tobin_",
        "target": "ericzelikman"
    },
    {
        "source": "josh_tobin_",
        "target": "embirico"
    },
    {
        "source": "nvidiahealth",
        "target": "googledeepmind"
    },
    {
        "source": "nvidiahealth",
        "target": "nvidiaai"
    },
    {
        "source": "nvidiahealth",
        "target": "nvidia"
    },
    {
        "source": "nvidiahealth",
        "target": "nvidiaaidev"
    },
    {
        "source": "nvidiahealth",
        "target": "nvidiarobotics"
    },
    {
        "source": "nvidiahealth",
        "target": "nvidiadc"
    },
    {
        "source": "nvidiahealth",
        "target": "tensorflow"
    },
    {
        "source": "nvidiahealth",
        "target": "nvidiahpcdev"
    },
    {
        "source": "nvidiahealth",
        "target": "neuripsconf"
    },
    {
        "source": "nvidiahealth",
        "target": "ctnzr"
    },
    {
        "source": "nvidiahealth",
        "target": "nvidianewsroom"
    },
    {
        "source": "anshitasaini_",
        "target": "thsottiaux"
    },
    {
        "source": "anshitasaini_",
        "target": "amandaaskell"
    },
    {
        "source": "anshitasaini_",
        "target": "soumithchintala"
    },
    {
        "source": "anshitasaini_",
        "target": "yanndubs"
    },
    {
        "source": "anshitasaini_",
        "target": "johnschulman2"
    },
    {
        "source": "anshitasaini_",
        "target": "addyosmani"
    },
    {
        "source": "pirroh",
        "target": "sama"
    },
    {
        "source": "pirroh",
        "target": "karpathy"
    },
    {
        "source": "pirroh",
        "target": "ylecun"
    },
    {
        "source": "pirroh",
        "target": "fchollet"
    },
    {
        "source": "pirroh",
        "target": "hardmaru"
    },
    {
        "source": "pirroh",
        "target": "gdb"
    },
    {
        "source": "pirroh",
        "target": "rasbt"
    },
    {
        "source": "pirroh",
        "target": "goodside"
    },
    {
        "source": "pirroh",
        "target": "googledeepmind"
    },
    {
        "source": "pirroh",
        "target": "_akhaliq"
    },
    {
        "source": "pirroh",
        "target": "drjimfan"
    },
    {
        "source": "pirroh",
        "target": "mmbronstein"
    },
    {
        "source": "pirroh",
        "target": "bcherny"
    },
    {
        "source": "pirroh",
        "target": "richardsocher"
    },
    {
        "source": "pirroh",
        "target": "emollick"
    },
    {
        "source": "pirroh",
        "target": "pashmerepat"
    },
    {
        "source": "ancadianadragan",
        "target": "svlevine"
    },
    {
        "source": "ancadianadragan",
        "target": "anthropicai"
    },
    {
        "source": "ancadianadragan",
        "target": "tdietterich"
    },
    {
        "source": "ancadianadragan",
        "target": "chrmanning"
    },
    {
        "source": "ancadianadragan",
        "target": "sleepinyourhat"
    },
    {
        "source": "ancadianadragan",
        "target": "amandaaskell"
    },
    {
        "source": "ancadianadragan",
        "target": "yoshua_bengio"
    },
    {
        "source": "ancadianadragan",
        "target": "alexandr_wang"
    },
    {
        "source": "ancadianadragan",
        "target": "sama"
    },
    {
        "source": "ancadianadragan",
        "target": "googledeepmind"
    },
    {
        "source": "ancadianadragan",
        "target": "johnschulman2"
    },
    {
        "source": "ancadianadragan",
        "target": "oriolvinyalsml"
    },
    {
        "source": "ancadianadragan",
        "target": "ch402"
    },
    {
        "source": "ancadianadragan",
        "target": "esyudkowsky"
    },
    {
        "source": "ancadianadragan",
        "target": "zoubinghahrama1"
    },
    {
        "source": "ancadianadragan",
        "target": "zicokolter"
    },
    {
        "source": "ancadianadragan",
        "target": "koraykv"
    },
    {
        "source": "ancadianadragan",
        "target": "satyanadella"
    },
    {
        "source": "ancadianadragan",
        "target": "openai"
    },
    {
        "source": "ancadianadragan",
        "target": "hendrycks"
    },
    {
        "source": "ancadianadragan",
        "target": "geoffreyhinton"
    },
    {
        "source": "ancadianadragan",
        "target": "mmitchell_ai"
    },
    {
        "source": "kalinowski007",
        "target": "sama"
    },
    {
        "source": "kalinowski007",
        "target": "palmerluckey"
    },
    {
        "source": "kalinowski007",
        "target": "cixliv"
    },
    {
        "source": "kalinowski007",
        "target": "levie"
    },
    {
        "source": "kalinowski007",
        "target": "amandaaskell"
    },
    {
        "source": "kalinowski007",
        "target": "moltbook"
    },
    {
        "source": "kalinowski007",
        "target": "pashmerepat"
    },
    {
        "source": "kalinowski007",
        "target": "tunguz"
    },
    {
        "source": "adinayakup",
        "target": "gavinsbaker"
    },
    {
        "source": "adinayakup",
        "target": "mistralai"
    },
    {
        "source": "dspyoss",
        "target": "tom_doerr"
    },
    {
        "source": "tulseedoshi",
        "target": "sama"
    },
    {
        "source": "tulseedoshi",
        "target": "mmitchell_ai"
    },
    {
        "source": "tulseedoshi",
        "target": "karpathy"
    },
    {
        "source": "tulseedoshi",
        "target": "sarahookr"
    },
    {
        "source": "tulseedoshi",
        "target": "andrewyng"
    },
    {
        "source": "tulseedoshi",
        "target": "googleai"
    },
    {
        "source": "tulseedoshi",
        "target": "jeffdean"
    },
    {
        "source": "tulseedoshi",
        "target": "jackclarksf"
    },
    {
        "source": "tulseedoshi",
        "target": "antigravity"
    },
    {
        "source": "tulseedoshi",
        "target": "emostaque"
    },
    {
        "source": "tulseedoshi",
        "target": "emollick"
    },
    {
        "source": "tulseedoshi",
        "target": "fidjissimo"
    },
    {
        "source": "tulseedoshi",
        "target": "ancadianadragan"
    },
    {
        "source": "tulseedoshi",
        "target": "googledeepmind"
    },
    {
        "source": "tulseedoshi",
        "target": "_mohansolo"
    },
    {
        "source": "felixhill84",
        "target": "deliprao"
    },
    {
        "source": "felixhill84",
        "target": "chrmanning"
    },
    {
        "source": "felixhill84",
        "target": "savvyrl"
    },
    {
        "source": "felixhill84",
        "target": "srush_nlp"
    },
    {
        "source": "felixhill84",
        "target": "egrefen"
    },
    {
        "source": "felixhill84",
        "target": "_jasonwei"
    },
    {
        "source": "felixhill84",
        "target": "sleepinyourhat"
    },
    {
        "source": "felixhill84",
        "target": "shaneguml"
    },
    {
        "source": "felixhill84",
        "target": "tdietterich"
    },
    {
        "source": "felixhill84",
        "target": "oriolvinyalsml"
    },
    {
        "source": "felixhill84",
        "target": "sedielem"
    },
    {
        "source": "felixhill84",
        "target": "yoshua_bengio"
    },
    {
        "source": "felixhill84",
        "target": "_akhaliq"
    },
    {
        "source": "felixhill84",
        "target": "clementdelangue"
    },
    {
        "source": "felixhill84",
        "target": "mervenoyann"
    },
    {
        "source": "felixhill84",
        "target": "thom_wolf"
    },
    {
        "source": "felixhill84",
        "target": "sashamtl"
    },
    {
        "source": "felixhill84",
        "target": "boazbaraktcs"
    },
    {
        "source": "felixhill84",
        "target": "khoomeik"
    },
    {
        "source": "guohao_li",
        "target": "_akhaliq"
    },
    {
        "source": "guohao_li",
        "target": "petarv_93"
    },
    {
        "source": "guohao_li",
        "target": "karpathy"
    },
    {
        "source": "guohao_li",
        "target": "mmbronstein"
    },
    {
        "source": "guohao_li",
        "target": "giffmana"
    },
    {
        "source": "guohao_li",
        "target": "roydanroy"
    },
    {
        "source": "guohao_li",
        "target": "darioamodei"
    },
    {
        "source": "yanndubs",
        "target": "ylecun"
    },
    {
        "source": "yanndubs",
        "target": "_akhaliq"
    },
    {
        "source": "yanndubs",
        "target": "drjimfan"
    },
    {
        "source": "yanndubs",
        "target": "giffmana"
    },
    {
        "source": "yanndubs",
        "target": "thegautamkamath"
    },
    {
        "source": "yanndubs",
        "target": "soumithchintala"
    },
    {
        "source": "yanndubs",
        "target": "roydanroy"
    },
    {
        "source": "yanndubs",
        "target": "pytorch"
    },
    {
        "source": "yanndubs",
        "target": "neuripsconf"
    },
    {
        "source": "yanndubs",
        "target": "sarahookr"
    },
    {
        "source": "yanndubs",
        "target": "csprofkgd"
    },
    {
        "source": "yanndubs",
        "target": "thsottiaux"
    },
    {
        "source": "yanndubs",
        "target": "fidjissimo"
    },
    {
        "source": "imhaotian",
        "target": "billpeeb"
    },
    {
        "source": "nvidiaaijp",
        "target": "nvidiajapan"
    },
    {
        "source": "nvidiaaijp",
        "target": "nvidianewsroom"
    },
    {
        "source": "nvidiaaijp",
        "target": "nvidiaomniverse"
    },
    {
        "source": "nvidiaaijp",
        "target": "nvidiahealth"
    },
    {
        "source": "itstkai",
        "target": "pashmerepat"
    },
    {
        "source": "itstkai",
        "target": "stevenbjohnson"
    },
    {
        "source": "_nateraw",
        "target": "_akhaliq"
    },
    {
        "source": "_nateraw",
        "target": "rasbt"
    },
    {
        "source": "_nateraw",
        "target": "hardmaru"
    },
    {
        "source": "_nateraw",
        "target": "tunguz"
    },
    {
        "source": "_nateraw",
        "target": "emostaque"
    },
    {
        "source": "_nateraw",
        "target": "mervenoyann"
    },
    {
        "source": "_nateraw",
        "target": "osanseviero"
    },
    {
        "source": "_nateraw",
        "target": "omarsar0"
    },
    {
        "source": "_nateraw",
        "target": "julien_c"
    },
    {
        "source": "_nateraw",
        "target": "goodside"
    },
    {
        "source": "_nateraw",
        "target": "huggingface"
    },
    {
        "source": "_nateraw",
        "target": "drjimfan"
    },
    {
        "source": "_nateraw",
        "target": "clementdelangue"
    },
    {
        "source": "_nateraw",
        "target": "googledeepmind"
    },
    {
        "source": "_nateraw",
        "target": "jeremyphoward"
    },
    {
        "source": "_nateraw",
        "target": "abhi1thakur"
    },
    {
        "source": "_nateraw",
        "target": "_lewtun"
    },
    {
        "source": "_nateraw",
        "target": "zai_org"
    },
    {
        "source": "_nateraw",
        "target": "darioamodei"
    },
    {
        "source": "_nateraw",
        "target": "neuripsconf"
    },
    {
        "source": "_nateraw",
        "target": "jsuarez"
    },
    {
        "source": "khipu_ai",
        "target": "neuripsconf"
    },
    {
        "source": "khipu_ai",
        "target": "oriolvinyalsml"
    },
    {
        "source": "khipu_ai",
        "target": "nandodf"
    },
    {
        "source": "khipu_ai",
        "target": "soumithchintala"
    },
    {
        "source": "khipu_ai",
        "target": "sarahookr"
    },
    {
        "source": "khipu_ai",
        "target": "wimlworkshop"
    },
    {
        "source": "khipu_ai",
        "target": "ch402"
    },
    {
        "source": "anujsaharan_",
        "target": "sama"
    },
    {
        "source": "anujsaharan_",
        "target": "karpathy"
    },
    {
        "source": "anujsaharan_",
        "target": "gdb"
    },
    {
        "source": "anujsaharan_",
        "target": "thsottiaux"
    },
    {
        "source": "anujsaharan_",
        "target": "realmadhuguru"
    },
    {
        "source": "anujsaharan_",
        "target": "kalomaze"
    },
    {
        "source": "anujsaharan_",
        "target": "agarwl_"
    }
]
};
