<template>
  <div class="laptop:w-3/5 bg-white shadow border border-light-pink rounded-lg p-8 mt-10 mx-auto">
    <div id="contact-form-container">
      <form name="contact" method="POST" netlify>
        <div class="">
          <div class="text-left">
            <label for="name">Name</label>
            <div class="mt-2">
              <div class="rounded-sm pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-coral">
                <input
                  type="text"
                  name="name"
                  id="name"
                  class="w-full py-1.5 pl-1 pr-3 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                  placeholder="Dave Grohl"
                  required
                />
              </div>
            </div>

            <div class="mt-5">
              <label for="email">Email</label>
              <div class="mt-2">
                <div class="rounded-sm pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-coral">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="w-full py-1.5 pl-1 pr-3 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                    placeholder="dave.grohl@email.com"
                    required
                  />
                </div>
              </div>
            </div>

            <div class="mt-5">
              <label for="message">Message</label>
              <div class="mt-2">
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  class="w-full rounded-sm px-3 py-1.5 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-coral sm:text-sm/6"
                  placeholder="What do you need help with? 😃"
                  required
                ></textarea>
              </div>
            </div>
          </div>

          <div class="mt-6 flex items-center justify-end gap-x-6">
            <button type="submit" class="btn-primary">Send</button>
          </div>
        </div>
      </form>
      <p v-if="submissionMessage" :class="messageClass">{{ submissionMessage }}</p>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const submissionMessage = ref("");
    const messageClass = ref("");

    const handleSubmit = async (event) => {
      event.preventDefault();

      const formData = new FormData(event.target);
      const body = new URLSearchParams(formData).toString();

      const errorMessage = () => {
        submissionMessage.value = "Oh no, something went wrong 🙁 Please, try again.";
        messageClass.value = "text-red-600 text-left";
      }

      try {
        const response = await fetch("/", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body,
        });

        if (response.ok) {
          event.target.remove();
          submissionMessage.value = "Thank you for your submission! Talk to you soon 🙌";
          messageClass.value = "text-green-600";
        } else {
          errorMessage()
        }
      } catch (error) {
        errorMessage()
      }
    };

    return {
      submissionMessage,
      messageClass,
      handleSubmit,
    };
  },
};
</script>
