interface GameBannerProps {
  title: string;
  adsCount: number;
  imgUrl: string;
}

export function GameBanner({ title, adsCount, imgUrl }: GameBannerProps) {
  return(
    <a href="" className="relative rounded-lg overflow-hidden">
          <img src={imgUrl} alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-blod text-white block">{title}</strong>
            <span className="text-zinc-300 text-sm block">{adsCount} anúncio(s)</span>
          </div>
        </a>
  );
}