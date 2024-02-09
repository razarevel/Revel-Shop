export default function FooterBody() {
  const svgs = [
    {
      id: 1,
      svg: (
        <svg
          className="fill-sky-600 duration-300  group-hover:fill-rose-600 group-hover:scale-105"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24px"
          height="24px"
        >
          {" "}
          <path d="M17.525,9H14V7c0-1.032,0.084-1.682,1.563-1.682h1.868v-3.18C16.522,2.044,15.608,1.998,14.693,2 C11.98,2,10,3.657,10,6.699V9H7v4l3-0.001V22h4v-9.003l3.066-0.001L17.525,9z" />
        </svg>
      ),
      link: "https://www.facebook.com/profile.php?id=100093500498917",
    },
    {
      id: 2,
      svg: (
        <svg
          className="fill-sky-600 duration-300  group-hover:fill-rose-600 group-hover:scale-105"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
          width="24px"
          height="24px"
        >
          <path d="M 6.9199219 6 L 21.136719 26.726562 L 6.2285156 44 L 9.40625 44 L 22.544922 28.777344 L 32.986328 44 L 43 44 L 28.123047 22.3125 L 42.203125 6 L 39.027344 6 L 26.716797 20.261719 L 16.933594 6 L 6.9199219 6 z" />
        </svg>
      ),
      link: "https://twitter.com/RazaRevel",
    },
    {
      id: 3,
      svg: (
        <svg
          className="fill-sky-600 duration-300  group-hover:fill-rose-600 group-hover:scale-105"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30 30"
          width="24px"
          height="24px"
        >
          {" "}
          <path d="M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065 c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z" />
        </svg>
      ),
      link: "https://www.linkedin.com/in/raza-revel-4241a5276/",
    },
    {
      id: 4,
      svg: (
        <svg
          className="fill-sky-600 duration-300  group-hover:fill-rose-600 group-hover:scale-105"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30 30"
          width="24px"
          height="24px"
        >
          {" "}
          <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z" />
        </svg>
      ),
      link: "https://www.instagram.com/otakuraza/",
    },
  ];
  return (
    <div className="w-full flex flex-col items-center justify-center space-y-6 text-center">
      <div className="opacity-80">
        <p>Copyright © 2023 Revel Shop Ca, Ltd. All Rights Are Reserved</p>
        <p>
          Developer:{" "}
          <a
            href={svgs[2].link}
            className="text-sky-600 hover:underline"
            target="_blank"
          >
            Revel Raza
          </a>
        </p>
      </div>
      <div className="flex space-x-6">
        {svgs.map((el) => (
          <a href={el.link} target="_blank" key={el.id} className="group">
            {el.svg}
          </a>
        ))}
      </div>
    </div>
  );
}
