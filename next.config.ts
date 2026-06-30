import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  output: "standalone",
  // Izinkan file .md/.mdx jadi page/route
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
};

const withMDX = createMDX({
  options: {
    // String form supaya kompatibel dengan Turbopack
    remarkPlugins: [["remark-gfm", {}]],
  },
});

export default withMDX(nextConfig);
