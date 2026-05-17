import { defineField, defineType } from "sanity";

export default defineType({
  name: "galleryImage",
  title: "Gallery",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "image", title: "Image", type: "image", options: { hotspot: true } }),
    defineField({ name: "category", title: "Category", type: "string", options: { list: ["rooms", "views", "dining", "experiences"] } }),
    defineField({ name: "order", title: "Display Order", type: "number" }),
  ],
});