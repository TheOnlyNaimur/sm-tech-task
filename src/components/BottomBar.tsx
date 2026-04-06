
export default function BottomBar() {
  return (
    <div className="fixed bottom-0 left-0 w-full z-50 pointer-events-none">
      <style>{`
        @keyframes shadowPulse {
          0% {
            box-shadow: 0 0 0 0px rgba(120, 169, 56, 0.2);
          }
          100% {
            box-shadow: 0 0 0 20px rgba(120, 169, 56, 0);
          }
        }
        .pulse-green {
          animation: shadowPulse 1s infinite;
        }
      `}</style>

      {/* Gradient blur layer — strong at bottom, fades upward */}
      <div
        className="absolute inset-0"
        style={{
          backdropFilter: 'blur(5px)',
          WebkitBackdropFilter: 'blur(5px)',
          maskImage: 'linear-gradient(to top, black 0%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to top, black 0%, transparent 100%)',
        }}
      />

      {/* Bar content */}
      <div className="relative px-8 pb-10 pt-10 pointer-events-auto w-fit">
        <button className="flex items-center gap-2 bg-black/70 text-white font-medium px-5 py-2 rounded-full text-sm pulse-green leading-none">
          <span className="leading-none">Buy on</span>
          <img src="https://floka.casethemes.net/wp-content/plugins/envato-purchase-link-v2/img/envato.png" alt="Envato" className="h-3 inline-block align-middle" />
        </button>
      </div>

    </div>
  );
}
