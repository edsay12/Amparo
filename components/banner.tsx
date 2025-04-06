import { Button } from "./ui/button";

function Banner() {
  return (
    <section className="w-full  bg-purple-900/90 py-24  text-white shadow-inner">
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="flex flex-col items-center text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
            Juntos Contra a Violência
          </h1>
          <p className="text-xl md:text-xl max-w-[700px] text-purple-100">
            Toda mulher tem direito a uma vida livre de violência. Informação é
            o primeiro passo para a mudança.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button
              size="lg"
              className="bg-white text-purple-900 hover:bg-purple-100"
            >
              Preciso de Ajuda
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white bg-transparent hover:bg-purple-800 hover:text-white"
            >
              Como Apoiar
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
