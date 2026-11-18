# Patricio Tena's portfolio

A Next.js portfolio with a dark navy palette, mint accents, monospace details, and a Git-inspired career timeline.

## Development

```sh
npm ci
npm run dev
```

Open `http://localhost:3000`. For a production build, run `npm run build`, then `npm start`.

## Updating content

- `src/pages/index.tsx` contains the introduction, about section, and contact details.
- `src/data/projects.ts` contains the typed project list, categories, technologies, and links. Filter counts update from this data.
- Each project's `externalLinks` list supports separate website, web panel, App Store, or npm links alongside its GitHub source link. Settlr includes its website, web panel, and iOS app; Kasane, BKR, PostulaT, Litho-Graphic, and Data Vault link to their public sites or web apps.
- `src/components/work-history-github-branches.tsx` contains work history. Role dates are retained from the previous portfolio; update them when employment changes.
- `public/projects/` contains authentic app screenshots, project-owned assets, and captures of repository usage documentation. `project-images.json` records their sources. Portrait app previews, project logos, and usage snippets retain their full aspect ratio. Generated concept covers are not used.
- `src/styles/globals.css` contains the palette, layout, responsive rules, and reduced-motion styles.
- `src/lib/terminal-background.ts` types shell commands and syntax-colored code, then scrolls completed lines away. It redraws at a capped frame rate, keeps cursor illumination, and pauses while the page is hidden. The pause control freezes the stream; reduced-motion preferences disable animation. The decorative canvas never captures pointer events.

To show a resume link, set `NEXT_PUBLIC_CV_LINK` to the public document URL before building. See `.env.example`. Without a URL, the link is hidden. Contact links open an email draft to `tenapatricio@gmail.com`.

## Project references

The Kasane description is based on its public [README](https://github.com/tenapato/kasane-mcp); Settlr uses its private project documentation. Existing project and career descriptions were edited from the previous portfolio. The Username Generator links use the repository and package's actual underscore spelling.

Build Hub, BKR, PostulaT, and Litho-Graphic use descriptions and technology tags verified against their project documentation and package manifests. Their cards, along with Settlr, display a private-source label and omit repository links.

## Verification

Run `npm run build` for the production build and TypeScript checks. Before publishing visual or interaction changes, check:

- The page fits mobile, tablet, and desktop widths, including 320px.
- Project filters show the appropriate cards and expose their selected state.
- Mobile navigation closes after a selection or Escape; Escape returns focus to the toggle.
- Project images load, internal links reach their sections, and external links open the intended projects.
- Keyboard focus remains visible, and reduced-motion preferences disable smooth scrolling.
