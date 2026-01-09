# Art Collection Setup

Your art collection is now set up with the structure you requested! Here's how it works:

## ✅ What's Ready

- **Navigation**: "art" link added to your header
- **Gallery**: `/art` shows all pieces in a responsive grid
- **Individual Pages**: `/art/piece-name` for each piece
- **Organized Structure**: Each piece gets its own folder

## 📁 Adding New Art Pieces

### 1. Create the folder structure:
```
src/content/art/your-piece-name/
├── index.md          # The content/metadata
├── main.jpg          # Your main/cover image
├── detail-1.jpg      # Additional images (optional)
└── detail-2.jpg      # More additional images (optional)
```

### 2. Add corresponding images to public folder:
```
public/art/your-piece-name/
├── main.jpg          # Same filenames as in content
├── detail-1.jpg
└── detail-2.jpg
```

### 3. Create the markdown file:
```yaml
---
title: "Your Sculpture Title"
description: "Brief description for gallery view"
pubDate: 2024-12-15
mainImage: "main.jpg"  # Just the filename
images: ["main.jpg", "detail-1.jpg", "detail-2.jpg"]  # Optional: all images
medium: "Bronze, steel"
dimensions: "24\" x 18\" x 12\""
---

Your longer description and artist statement goes here.
This will show on the individual piece page.
```

## 🎯 Key Features

- **Auto Image Paths**: Just use filenames in frontmatter, paths are built automatically
- **Gallery Grid**: Responsive layout that works on all devices
- **Individual Pages**: Each piece gets its own URL at `/art/piece-name`
- **Multiple Images**: Optional image galleries for each piece
- **Metadata**: Medium, dimensions, dates all displayed nicely

## 📝 Notes

- The folder name becomes the URL slug (e.g., `geometric-study` → `/art/geometric-study`)
- `mainImage` is required and shows in the gallery
- `images` array is optional - if omitted, only the main image shows
- Images must exist in both `src/content/art/piece-name/` AND `public/art/piece-name/`
- The `index.md` filename can be anything (e.g., `piece.md`, `content.md`)

## 🚀 Example Workflow

1. Take photos of your sculpture
2. Create `src/content/art/my-new-sculpture/`
3. Add `index.md` with frontmatter
4. Put images in `src/content/art/my-new-sculpture/`
5. Copy the same images to `public/art/my-new-sculpture/`
6. Your piece will automatically appear at `/art` and `/art/my-new-sculpture`

That's it! The system will handle all the paths and gallery layouts automatically.