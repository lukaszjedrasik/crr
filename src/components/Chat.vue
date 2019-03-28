<template>
  <v-container>
    <v-layout>
      <v-flex>
        <h4
          class="text-xs-center display-1 red--text text--darken-3 pt-3 font-weight-thin"
        >{{ this.$store.state.auth.name }}</h4>
      </v-flex>
    </v-layout>
    <v-layout class="mt-3">
      <v-flex>
        <v-card class="py-3" height="400" v-chat-scroll="{always:false, smooth:true}">
          <ul v-for="(msg, index) in messages" :key="index">
            <li class="red--text text--darken-3 subheading mb-1">
              {{ msg.name }}
              <span
                class="body-1 font-weight-light grey--text text--darken-2 ml-3"
              >{{ msg.message }}</span>
            </li>
            <li class="subheading dark--text caption font-weight-thin mb-1">{{ msg.createdAt }}</li>
            <v-divider class="py-2"></v-divider>
          </ul>
        </v-card>
      </v-flex>
    </v-layout>
    <v-form @submit.prevent="send">
      <v-flex>
        <v-card class="py-2">
          <v-layout align-center>
            <v-text-field
              v-model.trim="message"
              class="mx-5 font-weight-light body-2"
              placeholder="message"
              color="red darken-3"
              prepend-inner-icon="send"
            ></v-text-field>
            <v-btn @click="send" color="red darken-3" flat>Wyślij</v-btn>
          </v-layout>
          <v-layout justify-center>
            <p
              v-if="feedback"
              class="red--text text--accent-3 font-weight-light subheading"
            >Wiadomość nie może być pusta</p>
          </v-layout>
        </v-card>
      </v-flex>
    </v-form>
  </v-container>
</template>

<script>
import authAxios from "@/auth-axios";

export default {
  name: "Chat",
  data() {
    return {
      messages: [],
      message: "",
      token: localStorage.getItem("token"),
      ws: null,
      feedback: false
    };
  },
  methods: {
    send() {
      this.ws.send(
        JSON.stringify({
          message: this.message
        })
      );
      this.message = "";
    }
  },
  created: async function() {
    // Get history
    try {
      const { data } = await authAxios("/chat/history", {
        headers: {
          Authorization: `Basic ${this.token}`
        }
      });
      const self = this;
      data.messages.forEach(el => {
        const tmp = new Date(el.createdAt);
        el.createdAt =
          tmp.getHours() +
          ":" +
          (tmp.getMinutes() < 10 ? "0" + tmp.getMinutes() : tmp.getMinutes());

        self.messages.push(el);
      });

      // Connect with Chat
      this.ws = new WebSocket(
        "ws://localhost:8000/api/chat/live?token=" + this.token
      );
      this.ws.addEventListener("message", ({ data }) => {
        const message = JSON.parse(data);
        // Timestamp to hours:minutes
        var tmp = new Date(message.createdAt);
        message.createdAt =
          tmp.getHours() +
          ":" +
          (tmp.getMinutes() < 10 ? "0" + tmp.getMinutes() : tmp.getMinutes());
        this.messages.push(message);
      });
    } catch (error) {}
  }
};
</script>

<style scoped lang='scss'>
ul {
  list-style-type: none;
}
.v-card {
  overflow-y: auto;
}
</style>