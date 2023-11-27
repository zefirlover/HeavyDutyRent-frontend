<template>
    <div class="d-flex justify-content-center">
        <!-- Chat Box-->
        <div class="col-7 px-0">
            <div class="px-4 py-5 chat-box">
                <div v-for="message in messages">
                    <!-- Sender Message-->
                    <div v-if="message.fromUser == true" class="media mb-3">
                        <div class="media-body ml-3">
                            <div class="clientcolor rounded py-2 px-3 mb-2">
                                <p class="text-small mb-0 text-muted">{{ message.text }}</p>
                            </div>
                        </div>
                    </div>
                    <!-- Reciever Message-->
                    <div v-else-if="message.fromUser == false" class="media ml-auto mb-3">
                        <div class="media-body">
                            <div class="aicolor rounded py-2 px-3 mb-2">
                                <p class="text-small mb-0 text-white">{{ message.text }}</p>
                            </div>
                        </div>
                    </div>
                    <div v-else></div>
                </div>
            </div>

            <!-- Typing area -->
            <form action="#" class="bg-light">
                <div class="input-group d-flex align-items-center">
                    <input type="text" placeholder="Type a message" aria-describedby="button-addon2"
                        class="form-control rounded-0 border-0 py-4 bg-light" v-model="newMessage">
                    <div class="input-group-append">
                        <a id="button-addon2" type="submit" class="btn btn-link send-button" @click="sendMessage">Send</a>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>   
   
<script>
import apiClient from '../apiClient';

export default {
    name: "Advisor",
    data() {
        return {
            newMessage: '',
            messages: [],
            errors: [],
        };
    },
    methods: {
        async sendMessage() {
            this.messages.push({ "fromUser": true, "text": this.newMessage })
            try {
                const response = await apiClient.get('/api/OpenAi/UseChatGPT', {
                    params: {
                        query: this.newMessage,
                    }
                });
                this.messages.push({ "fromUser": false, "text": response.data })
                console.log(response.data)
            } catch (e) {
                this.errors.push(e);
            }
            this.newMessage = '';
        }
    }
};
</script>

<style scoped>
.text-small {
    font-size: 0.9rem;
}

.messages-box,
.chat-box {
    height: 510px;
    overflow-y: scroll;
    background-color: #f5f5f5;
}

.rounded-lg {
    border-radius: 0.5rem;
}

input::placeholder {
    font-size: 0.9rem;
    color: #999;
}

.clientcolor {
    background-color: #e2e2e2;
}

.aicolor {
    background-color: #B88E4A;
}

.send-button {
    background-color: #E5BE6D;
    color: #000;
    padding: 10px 20px;
    border: none;
    text-decoration: none;
    text-align: center;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    transition-duration: 0.4s;
}

.send-button:hover {
    background-color: #B88E4A;
    color: black;
}
</style>