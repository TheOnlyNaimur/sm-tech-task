declare module 'three';

declare module 'hover-effect' {
  interface HoverEffectOptions {
    parent: HTMLElement;
    intensity?: number;
    intensity1?: number;
    intensity2?: number;
    angle?: number;
    angle1?: number;
    angle2?: number;
    image1: string;
    image2: string;
    displacementImage: string;
    imagesRatio?: number;
    speedIn?: number;
    speedOut?: number;
    hover?: boolean;
    speed?: number;
    easing?: string;
    video?: boolean;
  }

  class HoverEffect {
    constructor(options: HoverEffectOptions);
    next(): void;
    previous(): void;
  }

  export = HoverEffect;
}
