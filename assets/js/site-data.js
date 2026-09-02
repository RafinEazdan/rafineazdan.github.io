/* =============================================================================
   SITE CONTENT
   -----------------------------------------------------------------------------
   Everything the site displays lives in this one file. Edit the text here and
   the page updates — no build step, no framework, nothing to reinstall.

   It is deliberately a .js file rather than .json so the page also works when
   you double-click index.html locally (browsers block fetch() on file:// URLs).
   Apart from that, treat the object below as plain JSON.
============================================================================= */

window.SITE_DATA = {

  /* ---------------------------------------------------------------- meta -- */
  meta: {
    name: "Eazdan Mostafa Rafin",
    shortName: "Eazdan Rafin",
    initials: "ER",
    role: "B.Sc. in Computer Science &amp; Engineering — Rajshahi University of Engineering &amp; Technology",
    status: "Applying to PhD",
    tagline:
      "CSE graduate working at the intersection of deep learning theory and the constraints - compute, privacy, bandwidth - that decide whether it actually works in the real world. ",
    location: "Dhaka, Bangladesh",
    email: "eazdan.rafin@gmail.com",
    cvPath: "assets/cv/Eazdan_Mostafa_Rafin_CV.pdf",
    photo: "assets/img/profile/rafin.jpg"
  },

  /* --------------------------------------------------------------- links -- */
  links: [
    { label: "GitHub",   href: "https://github.com/RafinEazdan",                     icon: "github" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/eazdan-mostafa-rafin/",  icon: "linkedin" },
    { label: "Kaggle",   href: "https://www.kaggle.com/eazdanmostafarafin",          icon: "kaggle" },
    { label: "Email",    href: "mailto:eazdan.rafin@gmail.com",                      icon: "mail" }
  ],

  /* --------------------------------------------------------------- about -- */
  about: {
    lede: [
      "I'm a Computer Science and Engineering graduate from Rajshahi University of Engineering and Technology (RUET), Bangladesh. My research focuses on deep learning for medical image analysis and federated learning, with a growing interest in Vision-Language Models."
    ],
    lookingFor: {
      title: "What I am looking for",
      items: [
        "A PhD position in Machine Learning, Deep Learning, Computer Vision, Federated Learning, or Medical Image Analysis.",
        "An advisor working on federated or privacy-preserving learning, medical imaging, or efficient deep architectures."
      ]
    }
  },

  /* --------------------------------------------------- research interests -- */
  researchInterests: [
    {
      title: "Federated Learning",
      body: "Training useful models across institutions that cannot pool their data."
    },
    {
      title: "Computer Vision",
      body: "Semantic segmentation, classification, and attention mechanisms that earn their parameter budget."
    },
    {
      title: "Medical Image Analysis",
      body: "Multi-modal MRI and tumour segmentation under severe class imbalance."
    },
    {
      title: "Lightweight &amp; Efficient Architectures",
      body: "Parameter-efficient design for deployment outside well-funded labs."
    },
    {
      title: "Vision-Language &amp; Multimodal Models",
      body: "Multimodal classification and fine-tuning under tight memory budgets."
    }
  ],

  /* -------------------------------------------------------------- thesis -- */
  thesis: {
    eyebrow: "Undergraduate thesis · complete",
    title: "Lightweight Double-Attention U-Net for Federated Multi-Class Brain Tumor Segmentation",
    period: "2025 – 2026",
    supervisor: "A. F. M. Minhazur Rahman, Assistant Professor, Dept. of CSE, RUET",
    status: "Complete · 113-page thesis book",
    summary:
      "DA-MDU-Net — a double-attention U-Net cut to 8.19 M parameters, federated across three sites on BraTS 2023.",
    metrics: [
      { value: "0.8819", label: "mean region Dice, 80 held-out cases" },
      { value: "8.19 M", label: "parameters" },
      { value: "31.2 MB", label: "per client per round" },
      { value: "0.7533", label: "Dice on an unseen African cohort, no fine-tuning" }
    ],
    blocks: [
      {
        heading: "The problem",
        body: "Annotated brain MRI is private, so hospitals can't pool it. Existing federated work ignores hospitals' compute and network limits."
      },
      {
        heading: "The architecture",
        body: "Dense encoder blocks, multi-scale attention, attention gates, depthwise separable convolutions — one shared extractor across Q/K/V cuts attention over twenty-fold."
      },
      {
        heading: "The federated system",
        body: "802 BraTS 2023 cases, three clients, twenty FedAvg rounds with group normalisation. A Dice+focal+boundary+region loss protects small sub-regions."
      },
      {
        heading: "What it cost, and where it holds",
        body: "Federation cost 0.55 Dice points at a matched budget, with nothing detectable lost to the lightweight redesign. Holds 0.7533 Dice on unseen BraTS-Africa cases with no fine-tuning."
      }
    ],
    limitations:
      "Limits: one seed, IID partition, 2D only, computed not measured cost. Next: non-IID, differential privacy, 3D.",
    methods: [
      "BraTS 2023", "BraTS-Africa", "Multi-modal MRI", "Sample-weighted FedAvg",
      "3 clients &times; 20 rounds", "Depthwise separable convolutions", "Double attention",
      "Attention gates", "Dense blocks", "Group normalisation",
      "Dice + focal + boundary loss", "PyTorch"
    ],
  },

  /* -------------------------------------------------------- manuscripts -- */
  manuscriptsNote: "The following manuscripts are in preparation.",
  manuscripts: [
    {
      authors: "Eazdan Mostafa Rafin and A. F. M. Minhazur Rahman",
      title: "Lightweight Double-Attention U-Net for Federated Multi-Class Brain Tumor Segmentation",
      year: "2026",
      body: "Drawn from the completed undergraduate thesis: an 8.19 M-parameter federated segmentation model reaching 0.8819 mean region Dice on BraTS 2023, with cross-cohort validation on BraTS-Africa.",
      target: "Target: a peer-reviewed venue in medical image analysis or applied deep learning."
    },
    {
      authors: "Eazdan Mostafa Rafin and A. F. M. Minhazur Rahman",
      title: "Guideline-Grounded VLM Fine-Tuning for Target-Aware Aggression Detection in Bengali Memes",
      year: "2026",
      body: "Guideline-grounded QLoRA fine-tuning of Qwen2-VL-2B for five-way target-aware aggression classification on Bengali memes, trained and evaluated on a single 16 GB GPU.",
      target: "Target: a peer-reviewed conference."
    }
  ],

  /* ----------------------------------------------------------- education -- */
  education: [
    {
      period: "2021 – 2026",
      degree: "B.Sc. in Computer Science &amp; Engineering",
      org: "Rajshahi University of Engineering &amp; Technology (RUET)",
      place: "Rajshahi, Bangladesh",
      score: "CGPA 3.55 / 4.00",
      score2: "3.73 average · final four semesters",
      detail: "Thesis: <em>Lightweight Double-Attention U-Net for Federated Multi-Class Brain Tumor Segmentation</em> — a federated, 8.19 M-parameter segmentation model reaching 0.8819 mean region Dice on BraTS 2023."
    },
    {
      period: "2018 – 2020",
      degree: "Higher Secondary Certificate (Science)",
      org: "Notre Dame College",
      place: "Dhaka, Bangladesh",
      score: "GPA 5.00 / 5.00"
    },
    {
      period: "2016 – 2018",
      degree: "Secondary School Certificate (Science)",
      org: "Birshreshtha Noor Mohammad Public College",
      place: "Dhaka, Bangladesh",
      score: "GPA 5.00 / 5.00"
    }
  ],

  /* ---------------------------------------------------------- experience -- */
  experience: [
    {
      period: "March 2025",
      role: "Industrial Trainee",
      org: "Vivasoft Limited",
      place: "Rajshahi, Bangladesh",
      bullets: [
        "Designed and built <strong>CV Insighter</strong>, a FastAPI and PostgreSQL system that ingests unstructured PDF and DOCX CVs, scores each against a job description with LangChain and the Groq API, and returns a ranked shortlist.",
        "Worked inside a professional engineering team under a formal code-review process, with requirements agreed across roles and every change reviewed before it was accepted."
      ],
      href: "https://github.com/RafinEazdan/CV-Insighter"
    }
  ],

  /* -------------------------------------------------------------- skills -- */
  skills: [
    {
      group: "Languages",
      items: ["Python", "C", "C++", "SQL", "JavaScript"]
    },
    {
      group: "ML / DL",
      items: ["PyTorch", "scikit-learn", "Hugging Face Transformers", "LightGBM", "XGBoost", "CatBoost", "NumPy", "Pandas", "Matplotlib", "OpenCV"]
    },
    {
      group: "Deep learning methods",
      items: ["CNNs", "U-Net / DenseNet", "Attention mechanisms", "Semantic &amp; medical segmentation", "Image classification", "Vision-language models", "Federated learning", "PEFT / LoRA / QLoRA", "Unsloth"]
    },
    {
      group: "LLM &amp; RAG",
      items: ["LangChain", "FAISS", "Sentence-Transformers", "Gemini API", "Groq API", "Ollama"]
    },
    {
      group: "Backend &amp; data",
      items: ["FastAPI", "REST APIs", "SQLAlchemy", "Alembic", "PostgreSQL", "MySQL", "MongoDB", "Redis"]
    },
    {
      group: "Tools",
      items: ["Git", "Docker", "Docker Compose", "Linux", "LaTeX", "Jupyter", "Colab &amp; Kaggle GPU"]
    }
  ],

  /* ------------------------------------------------------------ projects -- */
  projectFilters: ["All", "Research", "AI / ML", "Backend"],

  projects: [
    {
      category: "Research",
      title: "DA-MDU-Net: Double-Attention Multiscale Dense U-Net",
      body: "The architecture the thesis federates — trained centrally on BraTS 2020 as a 2D pipeline over T1ce, T2 and FLAIR.",
      tags: ["Computer vision", "Attention", "BraTS 2020"],
      links: [{ label: "Repository", href: "https://github.com/RafinEazdan/Brain-MRI-Segmentation-using-Double-Attention-based-Multiscale-Dense-U-Net" }]
    },
    {
      category: "Research",
      title: "Parameter-Efficient VLM Fine-Tuning for Bangla",
      body: "Fine-tuned Qwen2-VL-2B with 4-bit QLoRA on a single 16 GB GPU for Bangla meme classification, reaching 82.07% accuracy on a held-out split.",
      tags: ["Vision-language", "QLoRA", "Bangla"],
      links: [{ label: "Repository", href: "https://github.com/RafinEazdan/vlm-finetuning-bangla-meme-classification" }]
    },
    {
      category: "Research",
      title: "ML for Dengue Diagnosis from Haematological Data",
      body: "Built the pipeline on a 1,523-patient blood dataset — outlier removal, SMOTE, consensus feature selection. LightGBM led at 76.57% accuracy and 0.71 ROC-AUC.",
      tags: ["Clinical ML", "Feature selection", "Class imbalance"],
      links: [{ label: "Repository", href: "https://github.com/RafinEazdan/Machine-Learning-Based-Dengue-Prediction-from-Hematological-Data" }]
    },
    {
      category: "AI / ML",
      title: "RAG Document Question-Answering API",
      body: "Chunks PDF/DOCX with LangChain, embeds with all-MiniLM-L6-v2, indexes into FAISS for top-k retrieval behind FastAPI with source citations and a two-tier prompt-injection guard.",
      tags: ["LangChain", "FAISS", "FastAPI", "Gemini", "Docker"],
      links: [{ label: "Repository", href: "https://github.com/RafinEazdan/AI-Document-Chatbot-RAG" }]
    },
    {
      category: "Backend",
      title: "CERA — Content Signal Extraction &amp; Recommendation API",
      featured: true,
      body: "A five-service backend with JWT/Redis-OTP auth and per-service Alembic migrations. Scores engagement signals to rank trending content, with three-tier caching and asyncio.gather fan-out.",
      tags: ["FastAPI", "PostgreSQL", "Redis", "Docker", "Microservices"],
      links: [{ label: "Repository", href: "https://github.com/RafinEazdan/Content-Signal-Extraction-and-Recommendation-API" }]
    },
    {
      category: "Backend",
      title: "CV Insighter",
      body: "Built at Vivasoft Limited: a FastAPI and PostgreSQL system that scores CVs against a job description via LangChain and Groq, returning a ranked shortlist.",
      tags: ["FastAPI", "PostgreSQL", "LangChain", "Groq"],
      links: [{ label: "Repository", href: "https://github.com/RafinEazdan/CV-Insighter" }]
    },
    {
      category: "Backend",
      title: "Expense Tracker API",
      body: "A deployed FastAPI and PostgreSQL backend with OTP auth, per-user expense CRUD, and optional LLM-assisted entry, with a separate TypeScript front end.",
      tags: ["FastAPI", "PostgreSQL", "Redis", "TypeScript"],
      links: [
        { label: "Backend",  href: "https://github.com/RafinEazdan/Expense_Tracker" },
        { label: "Frontend", href: "https://github.com/RafinEazdan/Expense_Tracker_Frontend" },
        { label: "Live demo", href: "https://expense-tracker-self-mu-50.vercel.app/" }
      ]
    }
  ],

  /* -------------------------------------------------------- achievements -- */
  achievements: [
    {
      year: "2025",
      title: "Kaggle Playground Series S5E7 — Predict the Introverts from the Extroverts",
      rank: "525 / 4,329",
      note: "Top 13%",
      body: "An open international competition, entered as a team. A binary-classification workflow built around feature engineering, model comparison, and ensembling.",
      href: "https://www.kaggle.com/competitions/playground-series-s5e7"
    },
    {
      year: "2026",
      title: "DL Sprint 4.0 Datathon — BUET CSE Fest",
      rank: "51 / 124",
      body: "Bengali long-form speech recognition, entered as a team. We fine-tuned a Conformer model to transcribe lectures, interviews, and conversational Bangla audio from raw recordings.",
      href: "https://www.kaggle.com/competitions/dl-sprint-4-0-bengali-long-form-speech-recognition"
    },
    {
      year: "2026",
      title: "HackSpark AI-API Hackathon — Technocracy Lite, RUET ECE",
      rank: "Top 10",
      body: "Scoped, built and presented a working solution as a team inside the contest window, with team RESTless.",
      href: "https://github.com/RafinEazdan/hackspark_RESTless"
    }
  ],

  /* ------------------------------------------------------ certifications -- */
  certifications: [
    {
      title: "Supervised Machine Learning: Regression and Classification",
      issuer: "DeepLearning.AI &amp; Stanford Online, via Coursera",
      date: "July 2024",
      img: "assets/img/certificates/coursera-supervised-ml.jpg",
      href: "https://coursera.org/verify/DD7TASK9F4WG"
    },
    {
      title: "Python for Data Analysis: Pandas &amp; NumPy",
      issuer: "Coursera Project Network",
      date: "July 2024",
      img: "assets/img/certificates/coursera-python-data-analysis.jpg",
      href: "https://coursera.org/verify/9S27UPVGBP5V"
    },
    {
      title: "HackSpark AI-API Hackathon — Top 10",
      issuer: "Dept. of ECE, RUET · Technocracy Lite 2026",
      date: "2026",
      img: "assets/img/certificates/hackspark-top10.jpg",
      href: "https://github.com/RafinEazdan/hackspark_RESTless"
    }
  ],

  /* ------------------------------------------------------------- moments -- */
  gallery: [
    {
      img: "assets/img/moments/graduation-ruet.jpg",
      title: "Graduation, Department of CSE, RUET",
      caption: "Receiving my graduation crest at the Department of Computer Science &amp; Engineering, Rajshahi University of Engineering &amp; Technology.",
      date: "2026"
    }
  ],

  /* ---------------------------------------------------------------- news -- */
  news: [
    { date: "Aug 2026", body: "Preparing PhD applications, focused on federated learning, medical image analysis, and efficient deep architectures." },
    { date: "11 Aug 2026", body: "Undergraduate result published — <strong>B.Sc. in Computer Science &amp; Engineering</strong> completed at RUET, CGPA 3.55 / 4.00, with a 3.73 average across the final four semesters." },
    { date: "2026",     body: "Undergraduate thesis <strong>completed</strong> — 113 pages on DA-MDU-Net, a federated double-attention U-Net reaching <strong>0.8819 mean region Dice</strong> on BraTS 2023 at 8.19 M parameters. Manuscript in preparation." },
    { date: "2026",     body: "Placed in the <strong>Top 10</strong> at the HackSpark AI-API Hackathon, Technocracy Lite, RUET ECE." },
    { date: "2026",     body: "Ranked <strong>51 / 124</strong> in the DL Sprint 4.0 Bengali long-form speech recognition datathon at BUET CSE Fest." },
    { date: "2025",     body: "Ranked <strong>525 / 4,329 (top 13%)</strong> in Kaggle Playground Series S5E7." },
    { date: "2025",     body: "Began undergraduate thesis on federated brain tumour segmentation at RUET." },
    { date: "Mar 2025", body: "Completed industrial training at <strong>Vivasoft Limited</strong>, building CV Insighter inside a professional code-review process." }
  ]
};
