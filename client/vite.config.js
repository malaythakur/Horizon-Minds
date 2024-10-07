import { defineConfig } from "vite";
import react from '@vitejs/plugin-react';
import { plugin as markdown } from 'vite-plugin-markdown';
import markdownIt from "markdown-it";
import hljs from "highlight.js";

const md = markdownIt({
  html: true,
  linkify: true,
  typographer: true,
  highlight: (code, lang) => {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return `<pre class="hljs"><code>${hljs.highlight(code, { language: lang }).value}</code></pre>`;
        
      } catch (__) {}
    }

    return 
    return `<pre class="hljs"><code>${md.utils.escapeHtml(code)}</code></pre>`;

  }
});

export default defineConfig({
  plugins: [
    react(),
    markdown({
      mode: ['html'],
      markdownIt: md
    })
  ],
}); 