export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  gradient: string;
  featured: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "best-time-to-visit-pahalgam",
    title: "Best Time to Visit Pahalgam — A Complete Season Guide",
    excerpt: "From snow-covered winters to blooming spring meadows, discover when Pahalgam is at its most magical and plan your perfect Kashmir getaway.",
    content: `
Pahalgam is one of those rare destinations that transforms completely with every season — each offering a completely different but equally breathtaking experience.

**Spring (March to May)**

Spring is arguably the most spectacular time to visit Pahalgam. The valley awakens from its winter slumber with an explosion of wildflowers — almond blossoms, tulips, and mustard fields paint the landscape in vivid yellows and pinks. The Lidder River flows strong and clear from snowmelt, temperatures are mild (10–20°C), and the meadows are lush green.

This is the ideal season for trekking, photography, and experiencing Kashmir's legendary natural beauty at its peak. The famous Baisaran meadow — often called Mini Switzerland — is especially stunning during these months.

**Summer (June to August)**

Summer is peak tourist season in Pahalgam, and for good reason. Temperatures hover between 15–25°C — a welcome escape from the scorching plains of India. All trekking routes are open, including the spectacular Tulian Lake and Kolahoi Glacier treks.

The Amarnath Yatra pilgrimage also takes place during July–August, bringing thousands of devotees through Pahalgam. Book well in advance if you plan to visit during this period.

**Autumn (September to November)**

Often overlooked but absolutely magical. September brings golden light that photographers dream about, and the crowds begin to thin. The forests turn amber and red as October arrives. Temperatures cool significantly — perfect for long walks and evenings by the fireplace.

November sees the first snowfall on the higher peaks, creating a dramatic backdrop of white mountains against golden valleys.

**Winter (December to February)**

For those seeking a truly unique experience, winter in Pahalgam is unforgettable. The valley receives heavy snowfall, transforming into a pristine white landscape. While many tourist facilities shut down, Royal Cliff Resort remains open year-round, offering cozy fireplace suites and hot Kahwa to warm you from within.

Snow activities — sledging, snowball fights, and photography — make winter a hidden gem season for those who seek solitude and drama.
    `,
    category: "Travel Guide",
    author: "Royal Cliff Team",
    date: "March 15, 2025",
    readTime: "6 min read",
    gradient: "linear-gradient(135deg, #0a2a1a, #1a4a2a)",
    featured: true,
  },
  {
    id: "2",
    slug: "kashmiri-wazwan-complete-guide",
    title: "Kashmiri Wazwan — The Royal Feast You Must Experience",
    excerpt: "A deep dive into the legendary multi-course Kashmiri feast — its history, the dishes, the ceremony, and where to experience the most authentic Wazwan in Pahalgam.",
    content: `
The Wazwan is not just a meal — it is an experience, a ceremony, a cultural statement. In Kashmir, the quality of a Wazwan reflects the host's honour and generosity. To be invited to a Wazwan is to be truly welcomed.

**The History**

The Wazwan tradition traces its roots to Central Asia, brought to Kashmir by Timur's invasion in the 14th century. Over centuries, Kashmiri chefs — known as Wazas — refined and elevated these techniques, creating a cuisine that stands apart from anything else in the subcontinent.

The word "Wazwan" combines "Waz" (cook) and "Wan" (shop) — literally the cook's creation. A master Waz can prepare up to 36 dishes for a single feast, though most formal Wazwans serve 12–20 courses.

**The Signature Dishes**

Rogan Josh is perhaps the most globally recognized Kashmiri dish — slow-cooked lamb in a sauce of Kashmiri chillies, dried ginger, and aromatic spices. The deep red colour comes not from heat but from Kashmiri chillies, which give colour without excessive spice.

Gushtaba is the crowning dish of every Wazwan — minced mutton pounded to a smooth paste, shaped into meatballs, and slow-cooked in a delicate yogurt gravy. It signals the end of the meal.

Yakhni is the elegant counterpart — lamb slow-cooked in a yogurt-based sauce fragrant with fennel and cardamom. Light, refined, and deeply satisfying.

**The Ceremony**

A traditional Wazwan is served in groups of four on a large copper plate called a Traem. Guests sit together, share from the same plate, and eat with their hands — a deeply communal experience.

**Experience It at Royal Cliff**

At Royal Cliff Resort, we offer an authentic Wazwan experience every evening — served on traditional copper platters with live Sufi music setting the mood. Our Waza has been cooking Kashmiri cuisine for over 30 years.
    `,
    category: "Culture & Food",
    author: "Royal Cliff Team",
    date: "February 28, 2025",
    readTime: "8 min read",
    gradient: "linear-gradient(135deg, #2a0a0a, #4a1a10)",
    featured: true,
  },
  {
    id: "3",
    slug: "top-treks-pahalgam",
    title: "Top 5 Treks from Pahalgam — From Easy Walks to Epic Adventures",
    excerpt: "Whether you are a first-time trekker or an experienced mountaineer, Pahalgam offers trails for every level. Here are the five best treks to do from the valley.",
    content: `
Pahalgam sits at an altitude of 7,200 feet — the perfect base for some of the most spectacular trekking in the entire Himalayan region. From gentle meadow walks to multi-day high-altitude expeditions, the trails around Pahalgam cater to every level.

**1. Baisaran Valley (Easy — 2 hours)**

The perfect introduction to Pahalgam trekking. A short trek through dense pine forests leads you to the open meadows of Baisaran — often called Mini Switzerland. The views of snow-capped peaks from this meadow are picture-perfect. Horses are available if you prefer not to walk.

**2. Lidder Valley Walk (Easy — Half Day)**

A leisurely walk along the banks of the crystal-clear Lidder River. The path winds through willow groves and past traditional Kashmiri villages. Perfect for families and those who prefer flat terrain. The sound of rushing water accompanies you throughout.

**3. Tulian Lake (Moderate — Full Day)**

At 12,000 feet, Tulian Lake is the highest lake accessible from Pahalgam. The trek passes through dense forests, open meadows, and dramatic rocky terrain. The lake itself — deep blue surrounded by snow — is worth every step.

**4. Sheshnag Lake (Challenging — 2 Days)**

Part of the famous Amarnath Yatra route, the trek to Sheshnag Lake at 11,730 feet is one of the most dramatic in Kashmir. The lake is said to be home to the mythical Shesha serpent. Camping overnight beside the lake under a sky full of stars is an unforgettable experience.

**5. Kolahoi Glacier (Challenging — 3 Days)**

The ultimate Pahalgam trekking experience. The Kolahoi Glacier is the largest glacier in the Kashmir Valley, sitting at 13,500 feet. The three-day trek passes through some of the most remote and breathtaking landscapes in the region.
    `,
    category: "Adventure",
    author: "Royal Cliff Team",
    date: "February 10, 2025",
    readTime: "7 min read",
    gradient: "linear-gradient(135deg, #1a2a1a, #2a4a3a)",
    featured: false,
  },
  {
    id: "4",
    slug: "honeymoon-kashmir-guide",
    title: "Kashmir Honeymoon Guide — Why Pahalgam is India's Most Romantic Destination",
    excerpt: "Planning a honeymoon in Kashmir? Discover why Pahalgam is the perfect romantic escape — from private shikara rides to candlelit Wazwan dinners under the stars.",
    content: `
Kashmir has long been called the Switzerland of Asia — but for honeymooners, it offers something even more special: an intimacy and magic that few places in the world can match.

**Why Pahalgam for Honeymoon?**

While Srinagar gets most of the attention, Pahalgam offers something the city cannot — genuine mountain solitude. The town is smaller, quieter, and surrounded by nature on all sides. Here, you can genuinely escape the world together.

The Lidder River running through town creates a constant, romantic soundtrack. Mornings bring mist rolling off the mountains. Evenings glow golden as the sun sets behind snow-capped peaks.

**Romantic Experiences**

A private sunrise shikara ride on the Lidder River, with just you and your partner gliding through mirror-still waters as Kashmir wakes up — there are few more romantic experiences anywhere in the world.

Sunset horse riding through Baisaran meadows, followed by a private candlelit dinner on our cliff-side terrace overlooking the valley. Add a Kashmiri Kahwa ceremony to end the evening — this is romance, Kashmir style.

**Our Honeymoon Package**

Royal Cliff Resort's Honeymoon Cottage is designed entirely around romance — a private cottage with a flower-canopied terrace, clawfoot bathtub, canopy bed, and daily floral arrangements.

Our honeymoon package includes daily Kashmiri breakfast, a private Wazwan dinner, a couples spa session, a sunrise shikara ride, and a guided meadow trek — everything crafted for two.
    `,
    category: "Romance",
    author: "Royal Cliff Team",
    date: "January 25, 2025",
    readTime: "5 min read",
    gradient: "linear-gradient(135deg, #1a0a2a, #3a1a4a)",
    featured: false,
  },
  {
    id: "5",
    slug: "kashmir-photography-guide",
    title: "Kashmir Photography Guide — The Best Spots Around Pahalgam",
    excerpt: "Kashmir is a photographer's paradise. From misty mountain dawns to golden valley sunsets, here are the must-photograph spots around Pahalgam and tips for capturing them.",
    content: `
Kashmir is arguably the most photogenic destination in South Asia. The combination of dramatic mountain landscapes, pristine rivers, traditional architecture, and vibrant local life creates endless photographic opportunities.

**Golden Hour at Baisaran**

Arrive at Baisaran meadow just before sunset and you will witness one of the most spectacular light shows in nature. The meadow glows amber, the pine trees cast long shadows, and the snow peaks in the background turn pink and orange. Bring a wide-angle lens and a tripod.

**Dawn on the Lidder**

The Lidder River at dawn is magical. Mist rises from the water, local fishermen cast their lines, and the mountains are reflected in the still water. The light is soft and diffused — perfect for photography without harsh shadows.

**The Old Town**

The traditional wooden architecture of Pahalgam's old town is a photographer's dream. Intricately carved balconies, bustling markets, and locals going about their daily routines offer endless street photography opportunities.

**Tips for Photographing Kashmir**

The best light in Kashmir is during the golden hours — one hour after sunrise and one hour before sunset. The midday light can be harsh, especially in summer. Cloud cover creates beautiful diffused light for landscape photography.

Always ask permission before photographing local people — Kashmiris are generally warm and welcoming, and many enjoy being photographed, but it is always respectful to ask first.
    `,
    category: "Travel Guide",
    author: "Royal Cliff Team",
    date: "January 10, 2025",
    readTime: "6 min read",
    gradient: "linear-gradient(135deg, #0a1a2a, #1a3a4a)",
    featured: false,
  },
  {
    id: "6",
    slug: "winter-kashmir-experience",
    title: "Winter in Kashmir — Why the Off Season is Actually the Best Season",
    excerpt: "Most tourists visit Kashmir in summer. But those who visit in winter discover a completely different — and arguably more magical — side of the valley.",
    content: `
There is a Kashmir that most tourists never see — a Kashmir of deep snow, frozen rivers, smoke rising from traditional houses, and a silence so profound it feels sacred. This is winter Kashmir, and it is extraordinary.

**The Snow**

Pahalgam receives its first serious snowfall in November or December, and by January the entire valley is blanketed in white. The Lidder River partially freezes, creating beautiful ice formations along its banks. The pine forests become snow sculptures overnight.

Waking up at Royal Cliff Resort on a winter morning — with a fire crackling in the room, hot Kahwa on the bedside table, and fresh snow on the mountains outside — is an experience that guests describe as life-changing.

**The Silence**

With most tourists absent, winter Pahalgam recovers its natural rhythm. The locals are more relaxed and welcoming. Markets are quieter. The valley has a meditative quality that is impossible to find in summer.

**Winter Activities**

Snowshoeing through the forests around Pahalgam is a serene and beautiful experience. Snowball fights in the meadows, building snowmen, and photography in the dramatic winter light are all part of the experience.

For the truly adventurous, guided snow treks to viewpoints above the town offer panoramic views of a completely white Himalayan landscape — something few people in the world ever get to see.

**Practical Considerations**

Winter temperatures in Pahalgam drop to -5°C to -10°C at night. Royal Cliff Resort provides all necessary heating, warm bedding, and fireplaces. Pack warm layers, waterproof boots, and thermal underwear.

Roads can occasionally be blocked by heavy snowfall. Check conditions before traveling and allow flexibility in your schedule.
    `,
    category: "Adventure",
    author: "Royal Cliff Team",
    date: "December 20, 2024",
    readTime: "6 min read",
    gradient: "linear-gradient(135deg, #0a1a3a, #1a2a4a)",
    featured: false,
  },
];

export const categories = ["All", "Travel Guide", "Culture & Food", "Adventure", "Romance"];