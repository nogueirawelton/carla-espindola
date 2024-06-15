export function Footer() {
  return (
    <footer className="h-28 bg-green-icon">
      <div className="mx-auto flex h-full max-w-screen-2xl flex-col items-center justify-center px-4 md:flex-row md:justify-between md:px-24 2xl:px-0">
        <img
          src="/img/logo-alt.svg"
          alt="Logo"
          width={225}
          height={71}
          className="h-[50px] w-auto lg:h-[70px]"
        />
        <span className="text-sm text-beige-500 md:text-base">
          OAB-RJ: 235.268
        </span>
      </div>
    </footer>
  );
}
