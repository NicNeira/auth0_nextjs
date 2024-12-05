export const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-transparent shadow ">
      <div className="w-full mx-auto max-w-screen-xl p-4 flex items-center justify-center">
        <span className="text-sm text-gray-500 text-center dark:text-gray-400">
          © 2024{" "}
          <a href="https://www.microsystem.cl/" className="hover:underline">
            Microsystem™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};
