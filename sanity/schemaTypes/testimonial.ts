import { defineField, defineType } from "sanity";

export default defineType({
  name: "testimonial",
  title: "Testimonials",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Guest Name", type: "string" }),
    defineField({ name: "location", title: "Location", type: "string" }),
    defineField({ name: "date", title: "Stay Date", type: "string" }),
    defineField({ name: "rating", title: "Rating", type: "number", options: { list: [1, 2, 3, 4, 5] } }),
    defineField({ name: "room", title: "Room Stayed", type: "string" }),
    defineField({ name: "title", title: "Review Title", type: "string" }),
    defineField({ name: "review", title: "Review", type: "text" }),
    defineField({ name: "verified", title: "Verified Guest", type: "boolean" }),
    defineField({ name: "featured", title: "Show on Homepage", type: "boolean" }),
  ],
});