# ChatAI with Retrieval Augmented Generation (RAG)

## Overview

This project is a web-based application that enables users to engage in dialogues with an AI powered by the Retrieval Augmented Generation (RAG) model. This application uses a combination of language models and document retrieval techniques to provide informative and contextually relevant answers, making it perfect for educational, research, and curious users alike.

## Features

- **Interactive Chat Interface**: A clean and intuitive interface for users to interact with the AI.
- **Retrieval-Augmented Responses**: Employs RAG to enhance responses with contextually relevant data from a comprehensive dataset, ensuring accuracy and relevance.
- **Real-Time Interaction**: Delivers quick responses to simulate a natural conversational flow.

## Getting Started with Ultimos-dos-psets (FRONT-END)

### Dependancies

- "@nearbyy/core": "^0.3.31",
- "react": "^18.2.0",
- "react-dom": "^18.2.0",
- "react-icons": "^5.2.1",
- "react-router": "^6.22.3",
- "react-router-dom": "^6.22.3"

### Developer Dependencies

- "@types/react": "^18.2.66",
- "@types/react-dom": "^18.2.22",
- "@vitejs/plugin-react": "^4.2.1",
- "eslint": "^8.57.0",
- "eslint-plugin-react": "^7.34.1",
- "eslint-plugin-react-hooks": "^4.6.0",
- "eslint-plugin-react-refresh": "^0.4.6",
- "vite": "^5.2.12"

### Installation

Install the dependencies:

```bash

npm i vite @google/generative-ai @nearbyy/core

```

### Add .env file with your API KEYS

```bash

VITE_NEARBYY_API_KEY = YOUR_NEARBBY_API_KEY

```

## Getting Started with Ultimos-dos-psets (BACK-END)

### Dependancies

- "@google/generative-ai": "^0.12.0",
- "@nearbyy/core": "^0.3.31",
- "cors": "^2.8.5",
- "dotenv": "^16.4.5",
- "express": "^4.19.2",
- "node-postgres": "^0.6.2",
- "openai": "^4.47.2",
- "pg": "^8.11.5"

### Add .env file with your API KEYS

```bash

GOOGLE_API_KEY = YOUR_GOOGLE_API_KEY
OPENAI_API_KEY = YOUR_OPENAI_API_KEY
NEARBYY_API_KEY = NEARBYY_API_KEY

```
