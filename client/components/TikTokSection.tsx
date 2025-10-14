import { useEffect, useRef } from "react";

export default function TikTokSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const existing = document.querySelector('script[src="https://www.tiktok.com/embed.js"]') as HTMLScriptElement | null;
    if (!existing) {
      const s = document.createElement("script");
      s.src = "https://www.tiktok.com/embed.js";
      s.async = true;
      document.body.appendChild(s);
      s.onload = () => {
        // Try to initialize embeds if API is exposed
        // @ts-ignore
        if (window.tiktok?.load) window.tiktok.load();
        // @ts-ignore
        if (window.tiktokEmbedLoad) window.tiktokEmbedLoad();
      };
    } else {
      // @ts-ignore
      if (window.tiktok?.load) window.tiktok.load();
      // @ts-ignore
      if (window.tiktokEmbedLoad) window.tiktokEmbedLoad();
    }
  }, []);

  return (
    <section className="py-16 bg-white" id="tiktok">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground">Conoce más de nosotros</h2>
          <p className="mt-2 text-muted-foreground">Síguenos en TikTok y descubre tips, resultados y más.</p>
        </div>
        <div ref={containerRef} className="flex justify-center">
          <blockquote
            className="tiktok-embed"
            cite="https://www.tiktok.com/@facial.therapy"
            data-unique-id="facial.therapy"
            data-embed-type="creator"
            data-embed-from="oembed"
            style={{ maxWidth: 720, minWidth: 288 }}
          >
            <section>
              <a target="_blank" rel="noreferrer" href="https://www.tiktok.com/@facial.therapy?refer=creator_embed">@facial.therapy</a>
            </section>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
