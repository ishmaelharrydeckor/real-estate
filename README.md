This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

## Showcase Showcase Components

### ScrollVideoScene (`src/components/showcase/ScrollVideoScene.tsx`)

This component demonstrates a **high-performance, Apple-style scroll-scrubbed image sequence** rendered on an HTML5 canvas, driven by GSAP ScrollTrigger.

#### Why Use This Pattern Over Native Video?
Native H.264 video seeking (updating `currentTime` on a `<video>` element) can be extremely laggy because the browser decoder must buffer and calculate frames dynamically. By preloading an image sequence (JPGs or PNGs) into memory and drawing them onto a canvas at scroll intervals, we achieve:
1. **Zero-latency frame updates**: Instant forward and backward seeking.
2. **Cross-browser consistency**: iOS Safari, Chrome, and Firefox render frames identically without complex range-request network behaviors.
3. **Responsive layouts**: The canvas can be styled with `object-fit: cover` to fit any screen height/width natively.

#### File Placement & Assets
* **Frame Images**: Place your frame images inside the `public/` folder, e.g., under `public/frames/`. Frame filenames should follow a sequential naming pattern (e.g., `frame_000.jpg`, `frame_001.jpg`, etc.).
* **Component Usage**:
  ```tsx
  import ScrollVideoScene from '@/components/showcase/ScrollVideoScene';

  export default function MyPage() {
    return (
      <ScrollVideoScene
        frameCount={150}
        imagePathPattern={(index) => `/frames/frame_${String(index).padStart(3, '0')}.jpg`}
        scrollLength="400%"
        width={1280}
        height={720}
      >
        {/* Floating text overlays/children */}
        <div className="overlay-content">
          <div className="text-overlay text-overlay-1">Overlay Card 1</div>
          <div className="text-overlay text-overlay-2">Overlay Card 2</div>
        </div>
      </ScrollVideoScene>
    );
  }
  ```

#### Fallback Vector Generator
If no `imagePathPattern` prop is provided, `ScrollVideoScene` features an **automatic SVG Vector Frame Generator** that draws a beautiful, high-performance rotating dashboard indicating frame index and scroll progress. This enables instant out-of-the-box testing without waiting for video slicing.

