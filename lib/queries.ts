export const roomsQuery = `*[_type == "room"] | order(order asc) {
  _id,
  name,
  "slug": slug.current,
  description,
  price,
  size,
  maxGuests,
  view,
  tag,
  amenities,
  images,
  videoUrl,
  featured,
  order
}`;

export const roomBySlugQuery = `*[_type == "room" && slug.current == $slug][0] {
  _id,
  name,
  "slug": slug.current,
  description,
  price,
  size,
  maxGuests,
  view,
  tag,
  amenities,
  images,
  videoUrl,
}`;

export const blogPostsQuery = `*[_type == "blogPost"] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  category,
  author,
  publishedAt,
  readTime,
  coverImage,
  featured,
}`;

export const blogPostBySlugQuery = `*[_type == "blogPost" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  content,
  category,
  author,
  publishedAt,
  readTime,
  coverImage,
}`;

export const galleryQuery = `*[_type == "galleryImage"] | order(order asc) {
  _id,
  title,
  image,
  category,
  order
}`;

export const testimonialsQuery = `*[_type == "testimonial" && featured == true] {
  _id,
  name,
  location,
  date,
  rating,
  room,
  title,
  review,
  verified,
}`;

export const experiencesQuery = `*[_type == "experience"] | order(order asc) {
  _id,
  name,
  category,
  description,
  duration,
  difficulty,
  price,
  highlights,
  image,
  order
}`;