import { BannerSlider } from '@/components/BannerSlider';
import { HeroSectionProps } from './types';

export const HeroSection: React.FC<HeroSectionProps> = ({
  hero: { hiddenTitle, banners },
}) => (
  <section className="section md:pt-0 xl:pb-[30px] smOnly:pt-[108px]">
    <div className="container !px-0">
      <h1 className="visually-hidden">{hiddenTitle}</h1>
      <BannerSlider banners={banners} />
    </div>
  </section>
);
