import { ref } from "vue"
import type { ChatMessage } from "../interfaces/chat-message-interface"

export const useChat = () => {
const messages = ref<ChatMessage[]>([
    {
        id: new Date().getTime() + Math.random(),
        message: 'Hola',
        itsMine: true,
    },
    {
        id: new Date().getTime() + Math.random() + 1,
        message: 'Chau',
        itsMine: false,
        image: "https://yesno.wtf/assets/no/17-829284e9dd894ce9fb65fbe86d2e382c.gif"
    },
])

const onMessage = (text: string) => {
    messages.value.push({
        id: new Date().getTime(),
        itsMine: true,
        message: text
    })
}


    return {
        messages,
        onMessage
    }
}