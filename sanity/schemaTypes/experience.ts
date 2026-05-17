import { defineField, defineType } from "sanity";

export default defineType({
  name: "experience",
  title: "Experiences",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Experience Name", type: "string" }),
    defineField({ name: "category", title: "Category", type: "string", options: { list: ["Adventure", "Leisure", "Wellness", "Culture"] } }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({ name: "duration", title: "Duration", type: "string" }),
    defineField({ name: "difficulty", title: "Difficulty", type: "string" }),
    defineField({ name: "price", title: "Price", type: "string" }),
    defineField({ name: "highlights", title: "Highlights", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "image", title: "Image", type: "image", options: { hotspot: true } }),
    defineField({ name: "order", title: "Display Order", type: "number" }),
  ],
});