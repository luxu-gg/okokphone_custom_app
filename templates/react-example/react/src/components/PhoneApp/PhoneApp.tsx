import { fetchNui } from "../../utils/fivem/fetchNui";
import { notifyIsland } from "../../utils/okokPhone";

function PhoneApp() {

  
  function jump() {
    fetchNui("jump");
    notifyIsland({
      duration: 2000,
      title: "Jump",
      text: "You jumped",
    });
  }

  return (
    <div
      className={`${
        import.meta.env.DEV ? "dev-phone-container" : "phone-container"
      }`}
    >
      <div className="w-full h-full grid grid-rows-[auto_1fr_auto]">
        {/* Padding top 6rem is recommended for the header due to the notch */}
        <header className="w-full pt-24 bg-red-500 grid place-items-center pb-4">
          <h1 className="text-2xl font-bold">OkokPhone</h1>
        </header>
        <main className="w-full h-full bg-blue-500 grid place-items-center">
          <button
            className="text-2xl bg-white rounded-lg px-6 py-2"
            onClick={jump}
          >
            Jump
          </button>
        </main>
        {/* Padding bottom 2.5rem is recommended for the close app button */}
        <nav className="w-full h-full bg-green-500 pb-10 flex items-center justify-center gap-8 pt-4">
          <button className="w-8 h-8 bg-white rounded-full"></button>
          <button className="w-8 h-8 bg-white rounded-full"></button>
          <button className="w-8 h-8 bg-white rounded-full"></button>
        </nav>
      </div>
    </div>
  );
}

export { PhoneApp };
