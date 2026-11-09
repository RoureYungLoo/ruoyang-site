# 人工智能智能体学习指南

先做一个只调用单个工具的智能体，观察模型何时选择工具、如何传入参数，以及工具失败后如何结束任务。跑通这个流程后，再按项目需要选择框架或学习多智能体协作。

## 大语言模型基础

- [Hugging Face 大语言模型课程](https://hugging-face.cn/learn/llm-course/chapter1/1)
- [Datawhale 的 Happy LLM](https://github.com/datawhalechina/happy-llm)

## 智能体入门与工具调用

1. 从一个入门教程开始。[微软智能体入门课程（中文）](https://github.com/microsoft/ai-agents-for-beginners/blob/main/translations/zh-CN/README.md) 或 [Hugging Face 智能体课程](https://hugging-face.cn/learn/agents-course/unit1/introduction)。
2. 用代码复现一次工具调用，分别记录正常响应和失败响应。[Datawhale 从零开始构建智能体](https://github.com/datawhalechina/hello-agents)、[ai-agents-from-zero](https://github.com/didilili/ai-agents-from-zero)、[从零开始学 Agent](https://haozhe-xing.github.io/agent_learning/zh/preface.html)。
3. 需要接入外部工具时，了解模型上下文协议（MCP）的客户端与服务器角色。[Hugging Face 模型上下文协议课程](https://hugging-face.cn/learn/mcp-course/unit0/introduction)。

## 框架与工作流工具

- LangChain。[官方文档](https://docs.langchain.com/)
- OpenAI Agents SDK。[Python 文档](https://openai.github.io/openai-agents-python)、[JavaScript 文档](https://openai.github.io/openai-agents-js/zh/)
- AG2。[官方文档](https://docs.ag2.ai/)
- 其他待试用工具包括 Spring AI 和 n8n。
