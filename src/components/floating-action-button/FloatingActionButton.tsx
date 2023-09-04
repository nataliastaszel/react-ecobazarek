export const FloatingActionButton = () => {
  const handleClick = (): void => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <span
      onClick={handleClick}
      className=" h-7 w-7 fixed bottom-4 right-4 bg-green"
    >
      X
    </span>
  );
};
