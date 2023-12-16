# RAG-AI

RAG-AI is a project that fetches search results from Google based on a user-provided query and then utilizes OpenAI's pre-trained Language Models (LLMs), specifically GPT-3.5, to summarize the content.

## Setup

### Prerequisites

Before you begin, make sure you have the following:

- Node.js installed
- npm (Node Package Manager) installed

### Environment Variables

Create a `.env` file in the root of your project with the following variables:

```env
OPENAI_API_KEY=your_openai_api_key
SERPAPI_API_KEY=your_serpapi_api_key
```

## Install Dependencies
```
npm ci
```

## Run Development Server
```
npm run dev
```
