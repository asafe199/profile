# Asafe Oliveira — Profile Page

Personal portfolio built with **Next.js** (static export) and a **dark terminal** aesthetic.

## Stack

- **Next.js 14** (App Router) with `output: 'export'` → pure static HTML
- **React 18** + **TypeScript**
- Custom CSS (no framework), **JetBrains Mono** typeface
- No browser runtime dependencies beyond React

## Development

```bash
npm install
npm run dev      # http://localhost:3000
```

## Editing the content

All content (bio, experience, skills, projects, contact) lives in a single file:

```
lib/data.ts
```

## Structure

```
app/
  layout.tsx      # metadata + font + <html>
  page.tsx        # assembles the sections
  globals.css     # dark terminal theme
components/        # Nav, Hero, About, Experience, Skills, Projects, Contact
lib/data.ts        # ← all editable content
next.config.js     # output: 'export' + configurable basePath
```
