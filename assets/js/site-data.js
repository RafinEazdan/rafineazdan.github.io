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
    status: "Applying to PhD programs · Fall 2027 intake",
    tagline:
      "CSE graduate working at the intersection of deep learning theory and the constraints - compute, privacy, bandwidth - that decide whether it actually works in the real world. ",
    location: "Dhaka, Bangladesh",
    email: "eazdan.rafin@gmail.com",
    cvPath: "assets/cv/Eazdan_Mostafa_Rafin_CV.pdf",
    photo: "assets/img/profile/rafin.jpg",
    lastUpdated: "August 2026"
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
      "I'm a Computer Science and Engineering graduate from Rajshahi University of Engineering and Technology (RUET), Bangladesh. My research focuses on deep learning for medical image analysis and federated learning, with a growing interest in Vision-Language Models and NLP for low-resource languages."
    ],
    lookingFor: {
      title: "What I am looking for",
      items: [
        "A PhD position starting Fall 2027 in Machine Learning, Deep Learning, Computer Vision, Federated Learning, or Medical Image Analysis.",
        "An advisor working on federated or privacy-preserving learning, medical imaging, or efficient deep architectures."
      ]
    }
  },

  /* --------------------------------------------------- research interests -- */
  researchInterests: [
    {
      title: "Federated Learning",
      icon: "network",
      primary: true,
      body: "Training useful models across institutions that cannot pool their data. Non-IID client distributions, aggregation strategies, communication cost, and the accuracy a federated model gives up against a centralised one."
    },
    {
      title: "Computer Vision",
      icon: "eye",
      primary: true,
      body: "Semantic segmentation, image classification, and attention mechanisms — particularly how attention can be made to earn its parameter budget rather than simply consume it."
    },
    {
      title: "Medical Image Analysis",
      icon: "scan",
      primary: true,
      body: "Multi-modal MRI, tumour and lesion segmentation, and the class imbalance that makes small clinical structures so easy to miss and so costly to miss."
    },
    {
      title: "Lightweight &amp; Efficient Architectures",
      icon: "chip",
      body: "Parameter-efficient design for low-resource deployment. If a method only works on eight A100s, most of the hospitals that need it will never run it."
    },
    {
      title: "Vision-Language &amp; Multimodal Models",
      icon: "layers",
      body: "Multimodal classification and parameter-efficient fine-tuning — QLoRA, adapters, and what actually transfers when the target domain is far from the pretraining distribution."
    },
    {
      title: "NLP for Low-Resource Languages",
      icon: "chat",
      body: "Bangla in particular, plus retrieval-augmented generation: grounding model output in retrievable evidence instead of trusting it to remember."
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
      "DA-MDU-Net — a double-attention multiscale dense U-Net rebuilt down to 8.19 M parameters and trained federated across three client sites on BraTS 2023, so that no scan leaves the hospital that produced it. Two results carry the thesis: removing 91.6% of the parameters cost nothing measurable, and federation cost about half a point of Dice.",
    metrics: [
      { value: "0.8819", label: "mean region Dice, 80 held-out cases" },
      { value: "8.19 M", label: "parameters" },
      { value: "31.2 MB", label: "per client per round" },
      { value: "0.7533", label: "Dice on an unseen African cohort, no fine-tuning" }
    ],
    blocks: [
      {
        heading: "The problem",
        body: "Multi-class brain tumour segmentation - separating enhancing tumour, peritumoral edema and the necrotic core — is the kind of task deep learning should already have solved. It has not, in the places that matter. Annotated MRI is private patient data, so most hospitals will not pool it and each site trains on the small archive it holds. Federated work exists, but it largely relies on heavy models and does not take seriously the network and compute budgets of the hospitals it is supposed to serve."
      },
      {
        heading: "The architecture",
        body: "DA-MDU-Net keeps the behaviour of a double-attention U-Net and factorises away its arithmetic. The encoder is dense blocks; spatial and channel attention run on multi-scale bottleneck features; attention gates filter every skip connection; and every spatial convolution larger than 1×1 is depthwise separable. The largest saving is structural — instead of giving the query, key and value branches their own 3×3, 5×5 and 7×7 convolutions, one depthwise multi-scale extractor is shared across all three. Spatial attention falls from 37.69 M to 1.66 M parameters and channel attention from 36.46 M to 1.66 M, over twenty-fold each, with the attention behaviour preserved."
      },
      {
        heading: "The federated system",
        body: "802 adult glioma cases from BraTS 2023, partitioned over whole patients across three clients, trained for twenty rounds of two local epochs under sample-weighted FedAvg. Group normalisation throughout, so no running statistics ever have to be averaged across clients. The loss combines Dice, focal, boundary and region terms to keep the small sub-regions from being quietly ignored. The system covers local training, aggregation, global validation, checkpointing with automatic resume, and per-round metric logging — and every slice of every test volume is scored, including the many that contain no tumour at all."
      },
      {
        heading: "What it cost, and where it holds",
        body: "Two ablations answer the two questions that matter. Against centralised training on the pooled split at a matched budget, federation cost 0.55 points of mean region Dice (0.8874 → 0.8819) — inside the band the same model covers between rounds. Against the full-capacity 97.98 M re-implementation, the lightweight redesign cost nothing detectable (0.8787 → 0.8819) while cutting traffic for a full run from 43.80 GB to 3.66 GB. Run without fine-tuning on 94 BraTS-Africa cases — a different population on older, lower-field scanners — it holds 0.7533 mean region Dice, with the median case at 0.8081 and precision staying high while sensitivity drops: it misses tumour rather than inventing it, which is the easier failure for a radiologist to correct."
      }
    ],
    limitations:
      "The thesis states its limits plainly: one seed per arm and so no significance test, an IID partition rather than a site-based one, a 2D formulation, and communication cost computed rather than measured. Those limits are exactly what I want to work on next — non-IID and site-based partitions, differential privacy and secure aggregation, real clients over a real network, and a 3D formulation.",
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

  /* ---------------------------------------------- research, where it stands -- */


  pipeline: [
    {
      status: "done",
      statusLabel: "Complete · 113-page thesis · manuscript in preparation",
      title: "Lightweight double-attention U-Net for federated multi-class brain tumour segmentation",
      role: "Undergraduate thesis · sole author, supervised",
      body: "Rebuilt a double-attention U-Net from 97.98 M to 8.19 M parameters and trained it federated over three clients on 802 BraTS 2023 glioma cases. Reaches 0.8819 mean region Dice on 80 held-out cases; the 91.6% parameter cut costs nothing measurable and federation costs 0.55 points against pooled training. Holds 0.7533 Dice on 94 unseen BraTS-Africa cases with no fine-tuning.",
      tags: ["Federated learning", "Medical imaging", "Efficient architectures"]
    },
    {
      status: "done",
      statusLabel: "Complete · public code, centralised precursor",
      title: "DA-MDU-Net: double-attention multiscale dense U-Net for multi-class brain tumour segmentation",
      role: "Independent research project",
      body: "The architecture the thesis federates, implemented and trained centrally on BraTS 2020 as a 2D pipeline over T1ce, T2 and FLAIR. This is the public repository; the federated BraTS 2023 system lives in the thesis.",
      tags: ["Computer vision", "Attention", "BraTS 2020"],
      href: "https://github.com/RafinEazdan/Brain-MRI-Segmentation-using-Double-Attention-based-Multiscale-Dense-U-Net"
    },
    {
      status: "done",
      statusLabel: "Complete · extending toward low-resource multimodal work",
      title: "Parameter-efficient vision-language fine-tuning for a low-resource language",
      role: "Independent research project",
      body: "Fine-tuned Qwen2-VL-2B-Instruct with 4-bit QLoRA on a single 16 GB GPU for Bangla meme classification, reaching 82.07% accuracy and 83.24% macro accuracy on a held-out split — with checkpoint selection driven by per-class error analysis rather than the best validation number.",
      tags: ["Vision-language", "QLoRA", "Bangla"],
      href: "https://github.com/RafinEazdan/vlm-finetuning-bangla-meme-classification"
    },
    {
      status: "done",
      statusLabel: "Complete",
      title: "Machine learning for dengue diagnosis from routine haematological data",
      role: "Independent research project",
      body: "Built the full pipeline on a 1,523-patient clinical blood dataset — outlier removal, SMOTE, consensus feature selection across five methods — and compared model families under stratified cross-validation. LightGBM led at 76.57% accuracy and 0.71 ROC-AUC, with platelet and lymphocyte counts the strongest predictors.",
      tags: ["Clinical ML", "Feature selection", "Class imbalance"],
      href: "https://github.com/RafinEazdan/Machine-Learning-Based-Dengue-Prediction-from-Hematological-Data"
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

  /* ---------------------------------------------------------- coursework -- */
  coursework: [
    {
      group: "Artificial Intelligence &amp; Data",
      items: ["Machine Learning", "Artificial Intelligence", "Data Mining", "Digital Image Processing", "Statistics &amp; Probability"]
    },
    {
      group: "Core Computer Science",
      items: ["Data Structures &amp; Algorithms", "Algorithm Design &amp; Analysis", "Database Systems", "Operating Systems", "Computer Networks"]
    },
    {
      group: "Software &amp; Systems",
      items: ["Object-Oriented Programming", "Software Engineering"]
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

  languages: [
    { name: "English", level: "Fluent — speaking and writing" },
    { name: "Bangla",  level: "Native" }
  ],

  /* ------------------------------------------------------------ projects -- */
  projectFilters: ["All", "Research", "AI / ML", "Backend"],

  projects: [
    {
      category: "AI / ML",
      title: "RAG Document Question-Answering API",
      body: "An ingestion pipeline that chunks PDF and DOCX with LangChain, embeds with all-MiniLM-L6-v2 and indexes into FAISS for top-k retrieval, served behind FastAPI with chunk-level citations back to the source page. I added a two-tier prompt-injection guard — a regex pre-screen in front of an LLM classifier — and benchmarked it for precision, recall, F1 and latency on a hand-labelled set.",
      tags: ["LangChain", "FAISS", "FastAPI", "Gemini", "Docker"],
      links: [{ label: "Repository", href: "https://github.com/RafinEazdan/AI-Document-Chatbot-RAG" }]
    },
    {
      category: "Backend",
      title: "CERA — Content Signal Extraction &amp; Recommendation API",
      featured: true,
      body: "A five-service backend — authentication, YouTube, Reddit, LLM, and gateway — with JWT and Redis-OTP authentication and per-service Alembic migrations. It scores public engagement signals with a transparent weighted formula to rank trending content, and cuts upstream latency with three-tier caching (Redis, PostgreSQL, external API) and asyncio.gather fan-out.",
      tags: ["FastAPI", "PostgreSQL", "Redis", "Docker", "Microservices"],
      links: [{ label: "Repository", href: "https://github.com/RafinEazdan/Content-Signal-Extraction-and-Recommendation-API" }]
    },
    {
      category: "Backend",
      title: "CV Insighter",
      body: "Built during industrial training at Vivasoft Limited: a FastAPI and PostgreSQL system that ingests unstructured PDF and DOCX CVs, scores each against a job description with LangChain and the Groq API, and returns a ranked shortlist. Developed inside a professional team under formal code review.",
      tags: ["FastAPI", "PostgreSQL", "LangChain", "Groq"],
      links: [{ label: "Repository", href: "https://github.com/RafinEazdan/CV-Insighter" }]
    },
    {
      category: "Backend",
      title: "Expense Tracker API",
      body: "A deployed FastAPI and PostgreSQL backend with OTP-based authentication, per-user expense CRUD, and optional LLM-assisted entry and insights, with a separate TypeScript front end.",
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
    { date: "Aug 2026", body: "Preparing PhD applications for the <strong>Fall 2027</strong> intake, focused on federated learning, medical image analysis, and efficient deep architectures." },
    { date: "11 Aug 2026", body: "Undergraduate result published — <strong>B.Sc. in Computer Science &amp; Engineering</strong> completed at RUET, CGPA 3.55 / 4.00, with a 3.73 average across the final four semesters." },
    { date: "2026",     body: "Undergraduate thesis <strong>completed</strong> — 113 pages on DA-MDU-Net, a federated double-attention U-Net reaching <strong>0.8819 mean region Dice</strong> on BraTS 2023 at 8.19 M parameters. Manuscript in preparation." },
    { date: "2026",     body: "Placed in the <strong>Top 10</strong> at the HackSpark AI-API Hackathon, Technocracy Lite, RUET ECE." },
    { date: "2026",     body: "Ranked <strong>51 / 124</strong> in the DL Sprint 4.0 Bengali long-form speech recognition datathon at BUET CSE Fest." },
    { date: "2025",     body: "Ranked <strong>525 / 4,329 (top 13%)</strong> in Kaggle Playground Series S5E7." },
    { date: "2025",     body: "Began undergraduate thesis on federated brain tumour segmentation at RUET." },
    { date: "Mar 2025", body: "Completed industrial training at <strong>Vivasoft Limited</strong>, building CV Insighter inside a professional code-review process." }
  ],

  /* ---------------------------------------------------------- references -- */
  references: [
    {
      name: "Dr. Md. Shahid Uz Zaman",
      title: "Professor and Head, Department of Computer Science &amp; Engineering",
      org: "Rajshahi University of Engineering &amp; Technology, Rajshahi–6204, Bangladesh",
      email: "zaman@cse.ruet.ac.bd"
    },
    {
      name: "A. F. M. Minhazur Rahman",
      title: "Assistant Professor, Department of Computer Science &amp; Engineering",
      org: "Rajshahi University of Engineering &amp; Technology, Rajshahi–6204, Bangladesh",
      email: "afm.minhazur@cse.ruet.ac.bd"
    }
  ]
};
