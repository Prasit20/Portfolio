CLOUDFLARE PAGES DEPLOYMENT

This is a static HTML/CSS/JavaScript site. No build command or framework is required.

Cloudflare Dashboard:
1. Open Workers & Pages -> Create -> Pages -> Upload assets (Direct Upload).
2. Upload the CONTENTS of this folder (the folder containing index.html), or connect the folder to a Git repository.
3. Build command: leave blank.
4. Build output directory: / (for direct upload) or the repository root when connecting Git.
5. Deploy.

The homepage is index.html. Resume.html is retained as an alternate URL.
The large project intro video has been re-encoded to fit Cloudflare Pages' per-file asset limit.

Note: This is a static site. Any form or login UI in the sample car project is front-end only unless a backend is added separately.
