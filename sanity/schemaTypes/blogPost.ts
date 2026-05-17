import { defineField, defineType } from "sanity";

export default defineType({
  name: "blogPost",
  title: "Blog Posts",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (r) => r.required() }),
    defineField({ name: "excerpt", title: "Excerpt", type: "text" }),
    defineField({ name: "content", title: "Content", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "category", title: "Category", type: "string", options: { list: ["Travel Guide", "Culture & Food", "Adventure", "Romance"] } }),
    defineField({ name: "author", title: "Author", type: "string" }),
    defineField({ name: "publishedAt", title: "Published Date", type: "date" }),
    defineField({ name: "readTime", title: "Read Time", type: "string" }),
    defineField({ name: "coverImage", title: "Cover Image", type: "image", options: { hotspot: true } }),
    defineField({ name: "featured", title: "Featured Post", type: "boolean" }),
  ],
});