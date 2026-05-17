import { defineField, defineType } from "sanity";

export default defineType({
  name: "room",
  title: "Rooms",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Room Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "name" }, validation: (r) => r.required() }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({ name: "price", title: "Price per Night (₹)", type: "number" }),
    defineField({ name: "size", title: "Room Size", type: "string" }),
    defineField({ name: "maxGuests", title: "Max Guests", type: "number" }),
    defineField({ name: "view", title: "View Type", type: "string" }),
    defineField({ name: "tag", title: "Tag (e.g. Best Seller)", type: "string" }),
    defineField({
      name: "amenities",
      title: "Amenities",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "images",
      title: "Room Images",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    }),
    defineField({
      name: "videoUrl",
      title: "Video URL (MP4)",
      type: "url",
    }),
    defineField({ name: "featured", title: "Featured Room", type: "boolean" }),
    defineField({ name: "order", title: "Display Order", type: "number" }),
  ],
  orderings: [{ title: "Display Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
});