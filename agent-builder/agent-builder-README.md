# Agent Builder UI

## 1. What the UI pattern is
The Agent Builder is a configuration interface where users define the parameters, instructions, and capabilities of an autonomous AI agent. It utilizes a split-pane layout to combine standard form inputs (for system prompts and names) with an interactive module selector (for adding tools/skills).

## 2. Where it is commonly used
This interface pattern is standard across modern AI orchestration platforms like Flowise, LangChain frameworks, OpenAI's custom GPT builder, and enterprise automation tools like n8n.

## 3. Why it is relevant to modern web interfaces
As AI becomes more accessible, "no-code/low-code" agent creation is essential. Users need intuitive ways to plug disparate capabilities (like web searching or database querying) into a language model without writing the underlying API integration scripts. 

## 4. What design/interaction patterns were observed
Standard patterns include a persistent sidebar acting as a library or repository of available tools, drag-and-drop or click-to-equip mechanics, and immediate visual feedback showing which tools are currently active on the canvas. 

## 5. What our implementation does differently or adds
Most builder interfaces in SaaS platforms are highly technical, cluttered, and rely on standard light-mode wireframes. We implemented a visually striking dark-mode glassmorphism design that simplifies the cognitive load. By using click-to-equip interactive cards instead of complex node-based wiring, the interface remains clean, modern, and highly accessible.
