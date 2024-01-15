function Header() {
  return (
    <div className="w-full bg-neutral sticky pt-1 top-0 z-10">
      <header className="py-2 text-neutral-content container">
        <div className="align-element flex justify-center sm:justify-end">
          <div className="flex gap-x-6 justify-center items-center">
            <a className="link link-hover text-xs sm:text-sm" href="/login">
              Sign in / Guest
            </a>
            <a className="link link-hover text-xs sm:text-sm" href="/register">
              Create Account
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
