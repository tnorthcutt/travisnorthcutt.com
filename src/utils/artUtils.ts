import { dirname } from "path";
import type { CollectionEntry } from "astro:content";

// Helper to construct image paths for an art piece
export function getArtImages(artPiece: CollectionEntry<"art">) {
  const pieceDir = dirname(artPiece.id);
  const basePath = `/art/${pieceDir}`;

  // Main image path from frontmatter
  const mainImagePath = `${basePath}/${artPiece.data.mainImage}`;

  // For now, we'll just return the main image
  // You can manually add additional images to the frontmatter if needed
  return {
    mainImage: mainImagePath,
    allImages: [mainImagePath],
    additionalImages: []
  };
}

// Helper to construct image paths when you have multiple images
// Usage: add `images: ["main.jpg", "detail-1.jpg", "detail-2.jpg"]` to frontmatter
export function getArtImagesFromArray(artPiece: CollectionEntry<"art">, imageFilenames: string[]) {
  const pieceDir = dirname(artPiece.id);
  const basePath = `/art/${pieceDir}`;

  const allImagePaths = imageFilenames.map(filename => `${basePath}/${filename}`);
  const mainImagePath = `${basePath}/${artPiece.data.mainImage}`;

  return {
    mainImage: mainImagePath,
    allImages: allImagePaths,
    additionalImages: allImagePaths.filter(path => path !== mainImagePath)
  };
}