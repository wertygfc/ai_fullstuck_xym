export interface ChatMessage {
    role: "user" | "assistant" | "system"   // 联合类型，只能是其中一个
    text: string
}