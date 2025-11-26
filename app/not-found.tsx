export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-dark-bg">
      <div className="text-center">
        <h1 className="text-[120px] font-bold text-primary-cyan mb-4">404</h1>
        <h2 className="text-h2 font-bold mb-4">Página no encontrada</h2>
        <p className="text-h4 text-text-secondary mb-8">
          Lo sentimos, la página que buscas no existe.
        </p>
        <a
          href="/"
          className="inline-flex items-center bg-primary-cyan text-dark-bg px-8 py-4 rounded-button font-bold hover:brightness-110 hover:scale-105 transition-all duration-300"
        >
          Volver al inicio
        </a>
      </div>
    </div>
  );
}
