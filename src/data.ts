import { Product, Review, EQPreset } from './types';

// Import images from assets to allow Vite to bundle and cache-bust them correctly
import earbudImg from './assets/images/earbud_y168a_1782901344186.jpg';
import proImg from './assets/images/pro_x168a_1782901354641.jpg';
import speakerImg from './assets/images/speaker_p168a_1782901366265.jpg';
import heroImg from './assets/images/crescendo_hero_1782901331827.jpg';

// Newly generated realistic products images
import turntableImg from './assets/images/turntable_t9_1782905600675.jpg';
import soundbarImg from './assets/images/soundbar_s50_1782905615003.jpg';
import dacImg from './assets/images/dac_ampli_a1_1782905630093.jpg';
import nomadImg from './assets/images/nomad_mini_green_1782905641186.jpg';
import magchargeImg from './assets/images/magcharge_y12_1782905673782.jpg';
import ganPowerImg from './assets/images/gan_power_w30_1782905686366.jpg';

export { heroImg };

export const PRODUCTS: Product[] = [
  {
    id: 'crescendo-muse-earbuds',
    name: 'Crescendo Muse Premium ANC Earbuds',
    category: 'earbuds',
    price: 279.00,
    rating: 4.9,
    reviewCount: 184,
    image: earbudImg,
    colors: [
      { name: 'Obsidian Black', hex: '#111827' },
      { name: 'Silver Mist', hex: '#9CA3AF' },
      { name: 'Midnight Violet', hex: '#4C1D95' }
    ],
    specs: {
      driver: '11mm Custom Graphene Dynamic Drivers',
      battery: 'Up to 8 hours playback (32 hours total with case)',
      bluetooth: 'Bluetooth® 5.3 with LE Audio & LDAC support',
      waterproof: 'IPX7 Sweat & Water Resistant',
      weight: '4.8g per earbud'
    },
    description: 'Immerse yourself in unrivaled acoustic clarity. Features high-fidelity Active Noise Cancellation (ANC), ambient pass-through mode, customizable touch sensors, and dual-mic beamforming clarity.',
    badge: 'Best Seller'
  },
  {
    id: 'crescendo-horizon-headphones',
    name: 'Crescendo Horizon Over-Ear ANC Headphones',
    category: 'headphones',
    price: 349.00,
    rating: 4.8,
    reviewCount: 142,
    image: proImg,
    colors: [
      { name: 'Charcoal Matte', hex: '#1F2937' },
      { name: 'Royal Eclipse', hex: '#1E3A8A' },
      { name: 'Champagne Gold', hex: '#D97706' }
    ],
    specs: {
      driver: '40mm Custom-Engineered Dynamic Transducers',
      battery: 'Up to 45 hours with ANC Off (30 hours ANC On)',
      bluetooth: 'Bluetooth® 5.3 with Multipoint Dual-Connection',
      waterproof: 'IPX4 Splash Resistant',
      weight: '245g ultra-comfortable design'
    },
    description: 'Over-ear acoustic mastery redefined. Delivering high-resolution studio playback, premium memory-foam plush earcups, and an advanced 4-microphone hybrid feedback ANC array.',
    badge: 'Premium Studio'
  },
  {
    id: 'crescendo-soundwave-speaker',
    name: 'Crescendo Soundwave Portable Hi-Fi Speaker',
    category: 'speakers',
    price: 199.00,
    rating: 4.7,
    reviewCount: 96,
    image: speakerImg,
    colors: [
      { name: 'Sleek Obsidian', hex: '#0F172A' },
      { name: 'Stone Grey', hex: '#4B5563' },
      { name: 'Crescendo Coral', hex: '#DC2626' }
    ],
    specs: {
      driver: 'Dual 50mm Full-Range Drivers & Dual Passive Radiators',
      battery: 'Up to 24 hours playback time',
      bluetooth: 'Bluetooth® 5.2 with 100ft Wireless Range',
      waterproof: 'IP67 Dustproof & Waterproof',
      weight: '480g rugged portable build'
    },
    description: 'Room-filling, bidirectional spatial acoustics in a compact, rugged form factor. Outfitted with dual high-excursion bass radiators and an integrated speakerphone mic.',
    badge: 'Spatial Audio'
  },
  {
    id: 'crescendo-nomad-speaker',
    name: 'Crescendo Nomad Mini Waterproof Speaker',
    category: 'speakers',
    price: 129.00,
    rating: 4.8,
    reviewCount: 64,
    image: nomadImg,
    colors: [
      { name: 'Forest Green', hex: '#15803D' },
      { name: 'Slate Gray', hex: '#374151' }
    ],
    specs: {
      driver: '45mm High-Excursion Driver & Dual Passive Woofers',
      battery: 'Up to 15 hours continuous playback',
      bluetooth: 'Bluetooth® 5.3 with Stereo Pairing Support',
      waterproof: 'IP67 Floating & Waterproof',
      weight: '320g ultra-light travel design'
    },
    description: 'Designed for the wild elements. A rugged cylindrical speaker wrapped in high-tensile fabric mesh, featuring a genuine leather utility wrist strap and powerful 360-degree acoustics.',
    badge: 'Outdoor Ready'
  },
  {
    id: 'crescendo-cinema-soundbar',
    name: 'Crescendo Cinema S50 Dolby Soundbar',
    category: 'speakers',
    price: 449.00,
    rating: 4.9,
    reviewCount: 58,
    image: soundbarImg,
    colors: [
      { name: 'Matte Charcoal', hex: '#1F2937' }
    ],
    specs: {
      driver: '5-Speaker Acoustic Array with Dedicated Subwoofer Output',
      battery: 'N/A (AC Powered Main Unit)',
      bluetooth: 'Bluetooth® 5.2 & Wi-Fi AirPlay 2 Support',
      waterproof: 'Dust-resistant grill',
      power: '120W Peak Cinematic Output'
    },
    description: 'Transform your home theater. A low-profile, sleek soundbar supporting virtual Dolby Atmos 5.1 surround sound, integrated HDMI eARC for lossless digital connection, and a glowing visual status ring.',
    badge: 'Cinema Series'
  },
  {
    id: 'crescendo-spinette-turntable',
    name: 'Crescendo Spinette T9 Belt-Driven Turntable',
    category: 'accessories',
    price: 549.00,
    rating: 4.9,
    reviewCount: 38,
    image: turntableImg,
    colors: [
      { name: 'Walnut Wood', hex: '#78350F' },
      { name: 'Piano Black', hex: '#030712' }
    ],
    specs: {
      driver: 'Belt-Driven Low-Vibration DC Servo Motor',
      bluetooth: 'Bluetooth® 5.2 Transmitter for Wireless Playback',
      weight: '5.2kg solid dampening wooden base',
      power: 'Built-in Switchable Pre-amplifier'
    },
    description: 'A masterpiece blend of warmth and technology. Built with a genuine walnut wood veneer casing, a static balanced tone-arm, pre-mounted premium Audio-Technica magnetic cartridge, and seamless wireless stream.',
    badge: 'Audiophile Grade'
  },
  {
    id: 'crescendo-amplifi-dac',
    name: 'Crescendo Ampli-Fi A1 Hybrid Tube DAC/Amp',
    category: 'accessories',
    price: 349.00,
    rating: 4.8,
    reviewCount: 47,
    image: dacImg,
    colors: [
      { name: 'Anodized Aluminum', hex: '#4B5563' }
    ],
    specs: {
      driver: 'ESS Sabre ES9038Q2M 32-bit/384kHz DAC Chip',
      bluetooth: 'Bluetooth® 5.1 with aptX HD & LDAC input',
      weight: '820g aluminum desktop chassis',
      power: '600mW High-Impedance Headphone Driver'
    },
    description: 'Bring studio-grade analog warmth to your digital audio workstation. Featuring a real glowing dual-triode vacuum tube pre-amplifier, a high-resolution 32-bit DAC, and a heavy-weight tactile metallic rotary dial.',
    badge: 'Studio DAC'
  },
  {
    id: 'crescendo-magcharge-pad',
    name: 'Crescendo MagCharge 15W Wireless Pad',
    category: 'accessories',
    price: 69.00,
    rating: 4.7,
    reviewCount: 112,
    image: magchargeImg,
    colors: [
      { name: 'Obsidian Dark', hex: '#111827' },
      { name: 'Chalk White', hex: '#F9FAFB' }
    ],
    specs: {
      power: '15W Dynamic High-Speed Qi Power Profile',
      weight: '110g premium slim structure',
      waterproof: 'N/A'
    },
    description: 'A premium, precision-crafted wireless charger built with an anodized aluminum ring and a subtle glowing circular LED ring. Keeps your active earbuds and phones charging seamlessly with auto-foreign object detection.',
    badge: 'Essential Gear'
  },
  {
    id: 'crescendo-ganpower-plug',
    name: 'Crescendo GaNPower 30W Fast Wall Plug',
    category: 'accessories',
    price: 49.00,
    rating: 4.8,
    reviewCount: 93,
    image: ganPowerImg,
    colors: [
      { name: 'Polar White', hex: '#F9FAFB' },
      { name: 'Obsidian Black', hex: '#111827' }
    ],
    specs: {
      power: '30W USB-C Gallium Nitride Fast Delivery',
      weight: '62g ultra-compact pocket block'
    },
    description: 'Advance to ultra-compact charging speeds. Using cutting-edge Gallium Nitride (GaN) technology to output 30W power while maintaining an extremely cool profile and convenient foldable travel prongs.',
    badge: 'Fast Charge'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    userName: 'Alexander V.',
    rating: 5,
    date: '2026-06-25',
    comment: 'The acoustic tuning on the Crescendo Horizon headphones is absolutely incredible. The sub-bass is rich and perfectly controlled, and the soundstage feels exceptionally wide. Definitely rivals audiophile gear double its price.',
    verified: true
  },
  {
    id: 'rev-2',
    userName: 'Elena R.',
    rating: 5,
    date: '2026-06-18',
    comment: 'The Muse earbuds fit comfortably and securely. I wear them during heavy workouts and running, and they never fall out. The active hybrid ANC isolation is breathtaking on noisy streets.',
    verified: true
  },
  {
    id: 'rev-3',
    userName: 'Marcus T.',
    rating: 5,
    date: '2026-06-10',
    comment: 'Superb craftsmanship on the Spinette T9. Pairing it with my Bluetooth speaker was effortless, and playing vinyl on that walnut body is an incredible aesthetic experience.',
    verified: true
  }
];

export const EQ_PRESETS: EQPreset[] = [
  {
    name: 'Crescendo Signature',
    bass: 4,
    mid: 2,
    treble: 5,
    description: 'Our custom-tuned house curve. Features tight, punching sub-bass, vivid vocals, and airy, sparkling high frequencies.'
  },
  {
    name: 'Bass Heavyweight',
    bass: 8,
    mid: -1,
    treble: 1,
    description: 'Rich, deep, club-like bass emphasis. Perfect for Hip-Hop, House, and electronic soundtracks.'
  },
  {
    name: 'Acoustic & Vocal Focus',
    bass: -2,
    mid: 6,
    treble: 4,
    description: 'Pushes mid-frequencies forward for beautiful, intimate singer-songwriter acoustic tracks and podcasts.'
  },
  {
    name: 'Studio Reference',
    bass: 0,
    mid: 0,
    treble: 0,
    description: 'Completely uncolored, transparent frequency response. Exactly as the studio engineer intended.'
  }
];
