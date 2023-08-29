import { Link } from "react-router-dom";

function Social() {
  return (
    <div className="font-WorkSans mb-16 justify-center md:justify-start">
      <h1 className="font-bold  text-white text-lg">Social Media</h1>
      <div
        className="px-18"
        style={{
          fontStyle: "normal",
          fontWeight: "bolder",
          fontSize: "18px",
          lineHeight: "36px",
          color: "#7B7B7B",
          justifyItems: "center",
        }}
      >
        <div className="flex flex-row">
          <a
            target="_blank"
            href="https://www.instagram.com/kiit_robotics.society/"
            class="mr-2 text-white"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="instagram"
              class="w-5 py-1.5"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
              ></path>
            </svg>
          </a>

          <a
            target="_blank"
            href="https://www.instagram.com/kiit_robotics.society/"
          >
            Instagram
          </a>
        </div>

        <div className="flex flex-row">
          <a
            target="_blank"
            href="https://www.linkedin.com/company/kiit-robotics-society-bbsr/mycompany/"
            class="mr-2 text-white"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="linkedin-in"
              class="w-5 py-1.5"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
              ></path>
            </svg>
          </a>

          <a
            target="_blank"
            href="https://www.linkedin.com/company/kiit-robotics-society-bbsr/mycompany/"
          >
            Linkedln
          </a>
        </div>

        <div className="flex flex-row">
          <a
            target="_blank"
            href="https://www.youtube.com/c/KIITROBOTICSSOCIETY"
            class="mr-2 text-white"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="linkedin-in"
              class="w-6 py-1.5"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
            >
              {" "}
              <path
                fill="currentColor"
                d="M 15 4 C 10.814 4 5.3808594 5.0488281 5.3808594 5.0488281 L 5.3671875 5.0644531 C 3.4606632 5.3693645 2 7.0076245 2 9 L 2 15 L 2 15.001953 L 2 21 L 2 21.001953 A 4 4 0 0 0 5.3769531 24.945312 L 5.3808594 24.951172 C 5.3808594 24.951172 10.814 26.001953 15 26.001953 C 19.186 26.001953 24.619141 24.951172 24.619141 24.951172 L 24.621094 24.949219 A 4 4 0 0 0 28 21.001953 L 28 21 L 28 15.001953 L 28 15 L 28 9 A 4 4 0 0 0 24.623047 5.0546875 L 24.619141 5.0488281 C 24.619141 5.0488281 19.186 4 15 4 z M 12 10.398438 L 20 15 L 12 19.601562 L 12 10.398438 z"
              />
            </svg>
          </a>

          <a
            target="_blank"
            href="https://www.youtube.com/c/KIITROBOTICSSOCIETY"
          >
            Youtube
          </a>
        </div>

        <div className="flex flex-row">
          <a
            target="_blank"
            href="https://www.facebook.com/kiitroboticssociety/"
            class="mr-4 text-white"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="facebook-f"
              class="w-3 py-1.5"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path
                fill="currentColor"
                d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
              ></path>
            </svg>
          </a>

          <a
            target="_blank"
            href="https://www.facebook.com/kiitroboticssociety/"
          >
            Facebook
          </a>
        </div>

        <div className="flex flex-row ">
          <div className="mr-2 mt-2 text-white">
            <a href="#!" class="mr-2 text-white">
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                clip-rule="evenodd"
                fill="white"
              >
                <path d="M24 23h-24v-13.275l2-1.455v-7.27h20v7.272l2 1.453v13.275zm-20-10.472v-9.528h16v9.527l-8 5.473-8-5.472zm14-.528h-12v-1h12v1zm0-3v1h-12v-1h12zm-7-1h-5v-3h5v3zm7 0h-6v-1h6v1zm0-2h-6v-1h6v1z" />
              </svg>
            </a>
          </div>
          <a
            target="_blank"
            href="https://mail.google.com/mail/u/1/?view=cm&to=robotics.society@kiit.ac.in"
          >
            Mail
          </a>
        </div>
      </div>
    </div>
  );
}

export default Social;
