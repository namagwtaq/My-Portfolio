import Link from "next/link";
import React from "react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="grid grid-cols-1 bg-[#1e2131] px-8 py-20 md:grid-cols-2 md:gap-x-6 lg:gap-x-12 lg:px-32 lg:py-40 xl:px-60"
    >
      <div className="">
        <h3 className="text-2xl font-semibold text-[#e85f5b]">
          Just say Hello !
        </h3>
        <p className="font-medium text-white">Let me know about you !</p>
        <form className="mt-4">
          <div className="flex flex-col gap-3 lg:flex-row">
            <div className="form-group w-full lg:w-1/2">
              <input
                type="text"
                placeholder="First Name"
                name="name"
                className="w-full rounded-lg bg-white bg-opacity-30 px-4 py-2 text-white placeholder:text-slate-400"
              />
            </div>
            <div className="form-group w-full lg:w-1/2">
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="w-full rounded-lg bg-white bg-opacity-30 px-4 py-2 text-white placeholder:text-slate-400"
              />
            </div>
          </div>
          <div className="form-group mt-3">
            <textarea
              name="message"
              id="message"
              rows={8}
              placeholder="Type your message"
              className="w-full rounded-lg bg-white bg-opacity-30 px-4 py-2 text-white placeholder:text-slate-400"
            ></textarea>
          </div>
          <div className="form-group mt-2">
            <button
              type="submit"
              className="w-full rounded-lg bg-[#e85f5b] px-4 py-2 text-sm text-white hover:bg-[#c8534f]"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="mt-8 md:mt-0">
        <div className="">
          <h2 className="text-center text-3xl font-semibold text-[#e85f5b] md:text-start">
            Contact <span className="text-white">Information</span>
          </h2>
        </div>
        <div className="mt-8 flex flex-col gap-y-5">
          <div className="mx-auto flex flex-col gap-x-6 text-center md:mx-0 md:flex-row md:text-start">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto my-auto md:mx-0"
            >
              <path
                d="M12 1.5C9.81276 1.50258 7.71584 2.3726 6.16923 3.91922C4.62261 5.46584 3.75259 7.56276 3.75001 9.75C3.74739 11.5374 4.33124 13.2763 5.41201 14.7C5.41201 14.7 5.63701 14.9963 5.67376 15.039L12 22.5L18.3293 15.0353C18.3623 14.9955 18.588 14.7 18.588 14.7L18.5888 14.6978C19.669 13.2747 20.2526 11.5366 20.25 9.75C20.2474 7.56276 19.3774 5.46584 17.8308 3.91922C16.2842 2.3726 14.1873 1.50258 12 1.5ZM12 12.75C11.4067 12.75 10.8266 12.5741 10.3333 12.2444C9.83995 11.9148 9.45543 11.4462 9.22837 10.8981C9.00131 10.3499 8.9419 9.74667 9.05765 9.16473C9.17341 8.58279 9.45913 8.04824 9.87869 7.62868C10.2982 7.20912 10.8328 6.9234 11.4147 6.80764C11.9967 6.69189 12.5999 6.7513 13.1481 6.97836C13.6962 7.20542 14.1648 7.58994 14.4944 8.08329C14.8241 8.57664 15 9.15666 15 9.75C14.999 10.5453 14.6826 11.3078 14.1202 11.8702C13.5578 12.4326 12.7954 12.749 12 12.75Z"
                fill="#e85f5b"
              />
            </svg>
            <p className="my-auto mt-2 text-white md:mt-0">
              Jl. Kemangsari 1 Gg.H.Wahab 1 no.36A, Jatibening, Bekasi
            </p>
          </div>
          <div className="mx-auto flex flex-col gap-x-6 text-center md:mx-0 md:flex-row md:text-start">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto my-auto md:mx-0"
            >
              <path
                d="M20 10.999H22C22 5.869 18.127 2 12.99 2V4C17.052 4 20 6.943 20 10.999Z"
                fill="#e85f5b"
              />
              <path
                d="M13 7.99999C15.103 7.99999 16 8.89699 16 11H18C18 7.77499 16.225 5.99999 13 5.99999V7.99999ZM16.422 13.443C16.2298 13.2683 15.9773 13.1752 15.7178 13.1832C15.4582 13.1912 15.212 13.2998 15.031 13.486L12.638 15.947C12.062 15.837 10.904 15.476 9.71198 14.287C8.51998 13.094 8.15898 11.933 8.05198 11.361L10.511 8.96699C10.6974 8.78612 10.8061 8.53982 10.8141 8.2802C10.8222 8.02059 10.7289 7.76804 10.554 7.57599L6.85898 3.51299C6.68402 3.32035 6.44086 3.2035 6.18113 3.18725C5.9214 3.17101 5.66557 3.25665 5.46798 3.42599L3.29798 5.28699C3.12509 5.46051 3.0219 5.69145 3.00798 5.93599C2.99298 6.18599 2.70698 12.108 7.29898 16.702C11.305 20.707 16.323 21 17.705 21C17.907 21 18.031 20.994 18.064 20.992C18.3085 20.9783 18.5393 20.8747 18.712 20.701L20.572 18.53C20.7414 18.3325 20.8273 18.0768 20.8112 17.817C20.7951 17.5573 20.6785 17.3141 20.486 17.139L16.422 13.443Z"
                fill="#e85f5b"
              />
            </svg>
            <p className="my-auto mt-2 text-white md:mt-0">+62 877 7402 6818</p>
          </div>
          <div className="mx-auto flex flex-col gap-x-6 text-center md:mx-0 md:flex-row md:text-start">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto my-auto md:mx-0"
            >
              <path
                d="M22 4H2V20H22V4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"
                fill="#e85f5b"
              />
            </svg>
            <p className="my-auto mt-2 text-white md:mt-0">demo@gmail.com</p>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-center text-3xl font-semibold text-white md:text-start">
            Follow <span className="text-[#e85f5b]">Me</span> on :
          </h2>
          <div className="mt-8 flex justify-center gap-x-6 md:justify-start">
            <Link
              href="https://www.linkedin.com/in/mahdy-mubasyir-699424210"
              target="_blank"
            >
              <svg
                className="hover:fill-[#e85f5b]"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="#ffffff"
                version="1.1"
                viewBox="0 0 32 32"
                xmlSpace="preserve"
              >
                <path d="M17.303 14.365a.246.246 0 00.031-.048v.048h-.031zM32 0v32H0V0h32zM9.925 12.285H5.153v14.354h4.772V12.285zm.312-4.438c-.03-1.41-1.035-2.482-2.668-2.482-1.631 0-2.698 1.072-2.698 2.482 0 1.375 1.035 2.479 2.636 2.479h.031c1.664 0 2.699-1.104 2.699-2.479zm16.892 10.561c0-4.408-2.355-6.459-5.494-6.459-2.531 0-3.664 1.391-4.301 2.368v-2.032h-4.77c.061 1.346 0 14.354 0 14.354h4.77v-8.016c0-.434.031-.855.157-1.164.346-.854 1.132-1.746 2.448-1.746 1.729 0 2.418 1.314 2.418 3.246v7.68h4.771l.001-8.231z"></path>
              </svg>
            </Link>
            <Link href="https://github.com/mubasyir19" target="_blank">
              <svg
                className="hover:fill-[#e85f5b]"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="#ffffff"
                viewBox="0 0 24 24"
              >
                <path d="M22 12.247a10 10 0 01-6.833 9.488c-.507.1-.687-.214-.687-.481 0-.328.012-1.407.012-2.743a2.386 2.386 0 00-.679-1.852c2.228-.248 4.566-1.093 4.566-4.935a3.859 3.859 0 00-1.028-2.683 3.591 3.591 0 00-.1-2.647s-.838-.269-2.747 1.025a9.495 9.495 0 00-5.007 0c-1.91-1.294-2.75-1.025-2.75-1.025a3.6 3.6 0 00-.1 2.647 3.864 3.864 0 00-1.027 2.683c0 3.832 2.334 4.69 4.555 4.942A2.137 2.137 0 009.54 18a2.128 2.128 0 01-2.91-.831 2.1 2.1 0 00-1.53-1.027s-.977-.013-.069.608a2.646 2.646 0 011.109 1.463s.586 1.944 3.368 1.34c.005.835.014 1.463.014 1.7 0 .265-.183.574-.683.482A10 10 0 1122 12.247z"></path>
              </svg>
            </Link>
            <Link
              href="https://www.instagram.com/mubasyirmahdy"
              target="_blank"
            >
              <svg
                className="hover:fill-[#e85f5b]"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="#ffffff"
                version="1.1"
                viewBox="0 0 32 32"
                xmlSpace="preserve"
              >
                <path d="M22.3 8.4c-.8 0-1.4.6-1.4 1.4 0 .8.6 1.4 1.4 1.4.8 0 1.4-.6 1.4-1.4 0-.8-.6-1.4-1.4-1.4zM16 10.2c-3.3 0-5.9 2.7-5.9 5.9S12.8 22 16 22s5.9-2.7 5.9-5.9-2.6-5.9-5.9-5.9zm0 9.7c-2.1 0-3.8-1.7-3.8-3.8 0-2.1 1.7-3.8 3.8-3.8 2.1 0 3.8 1.7 3.8 3.8 0 2.1-1.7 3.8-3.8 3.8z"></path>
                <path d="M20.8 4h-9.5C7.2 4 4 7.2 4 11.2v9.5c0 4 3.2 7.2 7.2 7.2h9.5c4 0 7.2-3.2 7.2-7.2v-9.5c.1-4-3.1-7.2-7.1-7.2zm4.9 16.8c0 2.7-2.2 5-5 5h-9.5c-2.7 0-5-2.2-5-5v-9.5c0-2.7 2.2-5 5-5h9.5c2.7 0 5 2.2 5 5v9.5z"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
