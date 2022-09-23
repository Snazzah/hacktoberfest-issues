const GithubIcon = () => (
  <svg
    className="h-5 w-5 text-black"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    stroke-width="2"
    stroke="currentColor"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21" />
  </svg>
);

export const Header = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-row justify-end mx-14 py-4">
        <button type="button" className="flex flex-row items-center justify-between p-2">
          <span className="pr-2">Github</span>
          <GithubIcon />
        </button>
      </div>
      <h1 className="text-4xl py-8 text-center antialiased font-bold">
        Hacktoberfest Issue Finder
      </h1>
    </div>
  );
};