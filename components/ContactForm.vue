<template>
  <div class="laptop:w-3/5 bg-white shadow border border-light-pink rounded-lg p-8 mt-10 mx-auto">
    <div id="contact-form-container">
      <form  name="contact" method="POST" netlify  @submit="handleSubmit">
        <input type="hidden" name="form-name" value="contact" />
        <div class="">
          <div class="text-left">
            <label for="name"> {{ $t('contact.form.name') }}</label>
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
                  :placeholder= "$t('contact.form.placeholder')"
                  required
                ></textarea>
              </div>
            </div>
          </div>

          <div class="mt-6 flex items-center justify-end gap-x-6">
            <button type="submit" class="btn-primary">{{ $t("contact.form.cta") }}</button>
          </div>
        </div>
      </form>
      <p v-if="submissionMessage" :class="messageClass">{{ submissionMessage }}</p>
    </div>
  </div>
</template>

<script>
  import { ref } from "vue";
  import { useI18n } from 'vue-i18n';

  export default {
    target: 'static',
    ssr: true,
    setup() {
      const { t } = useI18n();

      const submissionMessage = ref("");
      const messageClass = ref("");

      const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const body = new URLSearchParams(formData).toString();

        const errorMessage = () => {
          submissionMessage.value = t("contact.form.error_message");
          messageClass.value = "text-red-600 text-left";
        }

        try {
          const response = await fetch("/form", {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body,
          });

          if (response.ok) {
            event.target.remove();
            submissionMessage.value = t("contact.form.success_message");
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
