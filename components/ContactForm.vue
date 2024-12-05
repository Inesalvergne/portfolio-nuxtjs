<template>
  <div class="w-2/5 bg-white border border-light-pink rounded-lg p-8 mt-10 mx-auto">
    <form>
      <div class="">
        <div class="text-left">
          <label for="username">Name</label>
          <div class="mt-2">
            <div class="rounded-sm  pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-brick">
              <input type="text" name="username" id="username" class="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6" placeholder="Dave Grohl">
            </div>
          </div>

          <div class="mt-5">
            <label for="username">Email</label>
            <div class="mt-2">
              <div class="rounded-sm  pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-brick">
                <input type="text" name="username" id="username" class="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6" placeholder="dave.grohl@email.com">
              </div>
            </div>
          </div>

          <div class="mt-5">
            <label for="username">Message</label>
            <div class="mt-2">
              <textarea name="message" id="about" rows="5" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"></textarea>
            </div>
          </div>
        </div>

        <div class="mt-6 flex items-center justify-end gap-x-6">
          <button type="submit" class="btn-primary">Send</button>
        </div>
      </div>
    </form>

  </div>
</template>
