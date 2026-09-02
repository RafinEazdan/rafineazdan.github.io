<div align="center">
  <h1>Eazdan Mostafa Rafin</h1>
  <p><strong>ML Research • Backend Development • CSE Graduate, RUET</strong></p>
  <p>
    I build practical software at the intersection of machine learning, intelligent systems,
    and product-focused backend engineering. My work spans medical imaging, retrieval-augmented
    generation, analytics APIs, and full-stack web applications.
  </p>
  <p>
    <a href="https://rafineazdan.github.io/"><strong>Portfolio</strong></a>
    •
    <a href="https://github.com/RafinEazdan?tab=repositories">Projects</a>
    •
    <a href="mailto:eazdan.rafin@gmail.com">Email</a>
    •
    <a href="https://www.linkedin.com/in/eazdan-mostafa-rafin/">LinkedIn</a>
  </p>
  <p>
    <a href="https://rafineazdan.github.io/">
      <img src="https://img.shields.io/badge/Research_Portfolio-rafineazdan.github.io-4F46E5?style=for-the-badge&logo=github&logoColor=white" alt="Research portfolio" />
    </a>
  </p>
</div>

<p align="center">
  <img src="https://img.shields.io/badge/Python-0f172a?style=for-the-badge&logo=python&logoColor=white" alt="Python" />
  <img src="https://img.shields.io/badge/FastAPI-0f172a?style=for-the-badge&logo=fastapi&logoColor=white" alt="FastAPI" />
  <img src="https://img.shields.io/badge/PostgreSQL-0f172a?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
  <img src="https://img.shields.io/badge/Redis-0f172a?style=for-the-badge&logo=redis&logoColor=white" alt="Redis" />
  <img src="https://img.shields.io/badge/PyTorch-0f172a?style=for-the-badge&logo=pytorch&logoColor=white" alt="PyTorch" />
  <img src="https://img.shields.io/badge/TypeScript-0f172a?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/React-0f172a?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/Docker-0f172a?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" />
</p>

## What I Build

- Backend systems with FastAPI, PostgreSQL, Redis, authentication flows, and API-first architecture.
- Applied AI and deep learning projects that move beyond tutorials into domain-specific problem solving.
- Full-stack products with deployed demos and production-style workflows.
- Well-documented repositories that explain architecture, design choices, and technical tradeoffs clearly.

## Current Projects

- Preparing a manuscript from my completed undergraduate thesis: **DA-MDU-Net**, a double-attention multiscale dense U-Net trained federated across three client sites so that no MRI scan leaves the hospital that produced it. At 8.19M parameters — 91.6% smaller than the reference architecture, at no measurable accuracy cost — it reaches 0.8819 mean region Dice on BraTS 2023, and holds 0.7533 on an unseen BraTS-Africa cohort with no fine-tuning.
- Maintaining CERA, a microservice-based content signal extraction and recommendation system that ranks YouTube comment demand and Reddit trends into creator-ready video ideas.

## Featured Projects

| Project | Why it stands out | Stack | Links |
| --- | --- | --- | --- |
| **Content Signal Extraction API** | Built CERA, a five-service FastAPI recommendation system that routes through an API gateway, shares PostgreSQL and Redis, extracts audience intent from YouTube comments, scores Reddit trends, and uses Gemini to turn ranked signals into creator-ready video title ideas. | FastAPI, PostgreSQL, Redis, Docker, Gemini, React | [Repo](https://github.com/RafinEazdan/Content-Signal-Extraction-and-Recommendation-API) |
| **RAG Document Chatbot** | Created a grounded document Q&A API with citations, FAISS retrieval, conversation memory, prompt-injection defense, and Docker support. | FastAPI, FAISS, Gemini, Docker | [Repo](https://github.com/RafinEazdan/AI-Document-Chatbot-RAG) |
| **VLM Fine-Tuning for Bangla Meme Classification** | Fine-tuned Qwen2-VL-2B-Instruct with QLoRA via Unsloth to classify Bangla memes into four target categories, reaching 83.24% macro accuracy on a held-out test split with a single-GPU training budget. | Python, Unsloth, PyTorch, TRL, PEFT | [Repo](https://github.com/RafinEazdan/vlm-finetuning-bangla-meme-classification) |
| **Brain MRI Segmentation** | Built DA-MDU-Net, a custom Double Attention Multiscale Dense U-Net for multi-class brain tumor segmentation on the BraTS 2020 dataset. This is the architecture my undergraduate thesis then federates and cuts to 8.19M parameters. | Python, PyTorch, Medical Imaging | [Repo](https://github.com/RafinEazdan/Brain-MRI-Segmentation-using-Double-Attention-based-Multiscale-Dense-U-Net) |
| **Dengue Prediction from Hematological Data** | Developed a full ML pipeline for dengue classification with preprocessing, feature selection, class balancing, multiple model families, and comparative evaluation on clinical data. | Python, scikit-learn, PyTorch, LightGBM | [Repo](https://github.com/RafinEazdan/Machine-Learning-Based-Dengue-Prediction-from-Hematological-Data) |
| **Expense Tracker** | Shipped a full-stack expense product with OTP-based auth, per-user expense management, and optional LLM-powered insights. | FastAPI, PostgreSQL, Redis, TypeScript | [Backend](https://github.com/RafinEazdan/Expense_Tracker) · [Frontend](https://github.com/RafinEazdan/Expense_Tracker_Frontend) · [Live Demo](https://expense-tracker-self-mu-50.vercel.app/) |
| **WanderLust** | Built a travel-focused web app with a more product-oriented frontend experience and deployment workflow. | JavaScript, Web App Architecture | [Repo](https://github.com/RafinEazdan/WanderLust) |

## Competitions

| Competition | Event & Team | Rank | Highlights | Link |
| --- | --- | --- | --- | --- |
| **DL Sprint 4.0 — Bengali Long-form Speech Recognition** | BUET CSE Fest 2026 Datathon · Team | **51 / 124** | Built a Bangla long-form ASR system for lectures, interviews, and conversational audio by fine-tuning the `hishab/titu_stt_bn_conformer_large` Conformer model to generate Bangla transcripts from raw audio. | [Kaggle](https://www.kaggle.com/competitions/dl-sprint-4-0-bengali-long-form-speech-recognition) |
| **Predict the Introverts from the Extroverts — Kaggle Playground S5E7** | Kaggle Playground Series · Team | **525 / 4329 (Top 13%)** | Binary-classification workflow built around feature engineering, model comparison, and ensembling. | [Kaggle](https://www.kaggle.com/competitions/playground-series-s5e7) |

## Hackathons

| Hackathon | Codebase | Participation | Result |
| --- | --- | --- | --- |
| [HackSpark](https://www.facebook.com/events/1703877170744084) | [hackspark_RESTless](https://github.com/RafinEazdan/hackspark_RESTless) | Team | Placed among the top 10 teams |
| [Noverse Hackathon](https://hackathon.noverseinc.com/) | [MedMemory--A-Friction-Based-Medication-System](https://github.com/RafinEazdan/MedMemory--A-Friction-Based-Medication-System) | Solo | - |
| [Hack the AI](https://smythos.com/hacktheai/) | [spartans-preli](https://github.com/RafinEazdan/spartans-preli) | Team | - |

## Focus Areas

- AI-enabled backend products
- Machine learning for real-world decision support
- Full-stack application delivery
- Clean architecture, documentation, and maintainable code

## What You Will See In My Repositories

- Strong Python-first engineering with a growing full-stack layer in TypeScript and React.
- Real project variety: deep learning, RAG systems, analytics APIs, and deployed web products.
- Backend patterns that show practical engineering concerns such as auth, caching, data ingestion, and API design.
- READMEs that explain architecture and implementation details instead of leaving projects as unexplained code dumps.

## Open To

I am open to internships, research collaborations, and developer roles where I can contribute across AI, backend engineering, and product development.

If you are hiring or building something useful, the best place to start is my [email](mailto:eazdan.rafin@gmail.com) or [LinkedIn](https://www.linkedin.com/in/eazdan-mostafa-rafin/).

For research — my thesis, research interests, and CV — see my portfolio at **[rafineazdan.github.io](https://rafineazdan.github.io/)**.
