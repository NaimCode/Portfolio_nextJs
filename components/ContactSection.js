import Link from "next/link";
const ContactSection = () => {
  return (
    <section class="text-gray-600 py-5 body-font relative">
      <div class="container px-5  mx-auto">
        <div class="lg:w-1/2 md:w-2/3 mx-auto">
          <div class="flex flex-wrap -m-2">
            <div class="p-2 w-1/2">
              <div class="relative anim1">
                <label for="name" class="leading-7 text-lg text-gray-600">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  class="w-full  rounded border border-gray-300 focus:border-secondary-light focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div class="p-2 w-1/2">
              <div class="relative anim1">
                <label for="email" class="leading-7 text-lg text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  class="w-full rounded border border-gray-300 focus:border-secondary-light focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div class="p-2 w-full">
              <div class="relative anim2">
                <label for="message" class="leading-7 text-lg text-gray-600">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  class="w-full  rounded border border-gray-300 focus:border-secondary-light focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            <div class="py-2 px-7 w-full anim2">
              <button class="flex mx-auto text-white bg-secondary-light border-0 py-2 px-8 focus:outline-none hover:bg-secondary rounded text-lg font-primary">
                Envoyer
              </button>
            </div>
            <div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center anim2">
              <a class="text-indigo-500">naimdev4@gmail.com</a>
              <p class="leading-normal my-5">
                00212 70004881 - 00235 68060500
                <br />
                Diguel, Rue 30
                <br />
                N'Djamena - TCHAD
              </p>
              <span class="inline-flex">
                <Link href="">
                  <a class="text-gray-500">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-10 h-10"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                </Link>
                <Link href="">
                  <a class="ml-4 text-gray-500">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-10 h-10"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                </Link>
                <Link href="">
                  <a class="ml-4 text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-10 h-10"
                      viewBox="0 0 24 24"
                    >
                      <rect
                        width="20"
                        height="20"
                        x="2"
                        y="2"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                  </a>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
