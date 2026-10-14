import { 
  RepairService, 
  ChennaiArea, 
  BeforeAfterCase, 
  SymptomGuide, 
  CustomerReview 
} from '../types/recliner';

export const CHENNAI_PHONE = '+91 97911 80388';
export const CHENNAI_PHONE_CLEAN = '919791180388';
export const CHENNAI_EMAIL = 'info@bookmysofarepair.in';
export const CHENNAI_OFFICE_ADDRESS = 'No: 1405, Saba Rathinam Street, Rayyappa Nagar, Mudichur Road, Varadharajapuram, Chennai - 600048';

export const REPAIR_SERVICES: RepairService[] = [
  {
    id: 'motor-repair',
    title: 'Electric & Motorized Recliner Repair',
    tamilTitle: 'எலக்ட்ரிக் மோட்டார் பழுது நீக்குதல்',
    category: 'motor_electrical',
    shortDesc: 'Linear actuator motor replacement, adapter/power transformer repair, hand controller & switch fixing for all motorized recliners.',
    detailedDesc: 'Motorized recliners often stop working due to burned linear actuators, blown AC/DC 29V power adapters, or damaged remote wand switches. Our technicians carry genuine OEM Okin, Linak, Mulin, and Kaidi motors to restore your motorized recliner at your doorstep.',
    commonSigns: ['Motor hums or buzzes but chair will not move', 'Complete power outage (no LED light on handset)', 'Recliner stuck in fully extended backward position', 'Jerky or clicking movement when pressing switch'],
    partsUsed: ['24V/29V Linear Actuator Motors', '5-Pin/2-Button Hand Controllers', 'Heavy-duty 29V 2A Power Transformers', 'Thermal cutoff safety cables'],
    startingPrice: 1499,
    warranty: '1 to 2 Years Replacement Warranty',
    turnaroundTime: 'Same-day Doorstep (1 to 2 hours)',
    badge: 'Chennai #1 Specialist',
    iconName: 'Zap'
  },
  {
    id: 'cable-handle-replacement',
    title: 'Recliner Pull Cable & Handle Replacement',
    tamilTitle: 'புல் கேபிள் மற்றும் கைப்பிடி மாற்றுதல்',
    category: 'cable_handle',
    shortDesc: 'Heavy-duty steel parachute cable replacement, broken plastic pull handle & metal paddle lever replacement on-spot.',
    detailedDesc: 'The pull cable is the most vulnerable component in manual recliners. When the internal braided steel snaps or the plastic pull bezel cracks, the footrest cannot release. We stock universal and model-specific high-tensile steel cables (exposed length 90mm - 140mm) for immediate doorstep replacement.',
    commonSigns: ['Pull handle feels loose or detached with zero resistance', 'Snapping metal sound when trying to recline', 'Handle broke off or cracked at screw mount', 'Footrest does not pop out when lever pulled'],
    partsUsed: ['Braided Stainless Steel Parachute Cables', 'Cast Aluminum / Polycarbonate Pull Handles', 'Heavy-duty S-Hooks & Barrel ends', 'Cable tension clips'],
    startingPrice: 799,
    warranty: '1 Year Full Replacement Warranty',
    turnaroundTime: '30 - 45 Mins at Doorstep',
    badge: 'Most Common Fix',
    iconName: 'Wrench'
  },
  {
    id: 'footrest-mechanism-repair',
    title: 'Footrest & Scissor Linkage Realignment',
    tamilTitle: 'கால் தாங்கி மெக்கானிசம் சரிசெய்தல்',
    category: 'footrest_mechanism',
    shortDesc: 'Fixing jammed footrests that won\'t close or open, replacing sheared pivot rivets, aligning bent metal scissor arms & tension springs.',
    detailedDesc: 'Footrest scissor arms often bend if someone sits on the extended footrest, or when pivot pins shear off. Our Chennai technicians carry portable alignment clamps, hardened steel replacement rivets, and high-tension recoil springs to restore smooth gliding and firm locking.',
    commonSigns: ['Footrest won\'t latch shut and keeps falling open', 'Requires heavy kicking or force to close footrest', 'Scissor arms visibly rubbing or grinding metal against metal', 'One side of footrest is lower or crooked'],
    partsUsed: ['High-Carbon Steel Scissor Links', 'Shoulder Pivot Rivets & Bushings', 'Heavy Gauge Return Recoil Springs', 'Silicone Industrial Dry Lubricant'],
    startingPrice: 999,
    warranty: '1 Year Mechanical Warranty',
    turnaroundTime: 'Doorstep (45 - 60 Mins)',
    iconName: 'Maximize2'
  },
  {
    id: 'leather-reupholstery',
    title: 'Luxury Leather & Fabric Reupholstery',
    tamilTitle: 'லெதர் மற்றும் துணி ரீ-அப்ஹோல்ஸ்டரி',
    category: 'leather_reupholstery',
    shortDesc: 'Restoring cracked, peeling, or faded recliner surfaces with Italian top-grain leather, breathable Nappa leatherette, or pet-friendly velvet.',
    detailedDesc: 'Chennai\'s coastal humidity and heat often cause bonded leather or faux rexine to peel and flake within 3–4 years. We offer complete reupholstery using humidity-resistant premium leatherette (leather finish), genuine breathable Italian cowhide leather, or stain-resistant stain-guard fabrics with over 450+ sample swatches brought directly to your home.',
    commonSigns: ['Leather surface peeling, flaking, or leaving black powder', 'Deep cracks on headrest, armrests, and seating area', 'Pet claw scratches or fabric tears', 'Faded, discolored leather from sunlight'],
    partsUsed: ['Italian Top-Grain Leather', 'Automotive-grade Breathable Nappa Leatherette', 'High GSM Velvet & Chenille Fabric', 'Heavy-duty Bonded Nylon Stitched Seams'],
    startingPrice: 3499,
    warranty: '2 to 5 Years Material Warranty',
    turnaroundTime: 'Doorstep Inspection + 3 to 5 Days Precision Workshop Crafting',
    badge: '450+ Swatches at Home',
    iconName: 'Sparkles'
  },
  {
    id: 'cushion-foam-replacement',
    title: 'Sagging Cushion & High-Density Foam Overhaul',
    tamilTitle: 'மெத்தை பஞ்சு மாற்றுதல் மற்றும் லம்பார் சப்போர்ட்',
    category: 'cushion_foam',
    shortDesc: 'Replacing collapsed foam with 40–50D High-Resilience orthopedic foam, restoring sagging lumbar support and headrest microfibre filling.',
    detailedDesc: 'When recliner seats sink deep, it puts pressure on your lower spine and makes rising difficult. We rebuild recliner seating with Sleepwell / Featherlite certified 40D/50D high-resilience molded foam, reinforced pocket coils, and plush conjugate virgin siliconized microfibre for lumbar comfort.',
    commonSigns: ['Seat sinks drastically; you feel the hard wood or metal springs below', 'Lower back aches after sitting for 20 minutes', 'Lumpy, deflated armrests and headrest', 'Uneven seating slope leaning to one side'],
    partsUsed: ['40D / 50D High-Resilience Molded Foam', 'Pocket Spring Suspension Coils', 'Recron Virgin Siliconized Microfiber', 'Heavy-Duty Webbing Straps'],
    startingPrice: 1299,
    warranty: '3 Years Anti-Sagging Warranty',
    turnaroundTime: '1 to 2 Days (Doorstep or Express Workshop)',
    iconName: 'Layers'
  },
  {
    id: 'cinema-theatre-recliner',
    title: 'Home Cinema & Theatre Recliner AMC / Repair',
    tamilTitle: 'ஹோம் தியேட்டர் ரெக்லைனர் சர்வீஸ்',
    category: 'general_service',
    shortDesc: 'Commercial and luxury private screening room recliner maintenance, multi-seat synchronized motor repair, LED cup holders & USB port fixing.',
    detailedDesc: 'For home theatre enthusiasts, multiplex owners, and corporate entertainment lounges in Chennai, we provide specialized maintenance for motorized dual-motor recliners with integrated cup holders, tray tables, LED floor lighting, and synchronized recline controls.',
    commonSigns: ['Dual motor recline not synchronizing back and foot', 'USB charger or LED illuminated cup holder not working', 'Multi-seat row power supply trip', 'Squeaking during movie playback'],
    partsUsed: ['Commercial Grade Kaidi / Mulin Actuators', 'Integrated 5V Dual USB & Cup Light Kits', 'Power Distribution Bus Harnesses', 'Vibration Dampening Rubber Mounts'],
    startingPrice: 1899,
    warranty: '1 Year Commercial Warranty',
    turnaroundTime: 'On-site Commercial Doorstep Service',
    badge: 'Home Theatre Experts',
    iconName: 'Tv'
  }
];

export const CHENNAI_AREAS: ChennaiArea[] = [
  // Central Chennai
  { id: 'anna-nagar', name: 'Anna Nagar', zone: 'Central Chennai', pincode: '600040', availableTechnicians: 4, avgResponseMins: 45, nearestHub: 'Anna Nagar Hub' },
  { id: 't-nagar', name: 'T. Nagar', zone: 'Central Chennai', pincode: '600017', availableTechnicians: 3, avgResponseMins: 50, nearestHub: 'T. Nagar Hub' },
  { id: 'nungambakkam', name: 'Nungambakkam', zone: 'Central Chennai', pincode: '600034', availableTechnicians: 2, avgResponseMins: 55, nearestHub: 'T. Nagar Hub' },
  { id: 'alwarpet', name: 'Alwarpet', zone: 'Central Chennai', pincode: '600018', availableTechnicians: 3, avgResponseMins: 45, nearestHub: 'Mylapore Hub' },
  { id: 'mylapore', name: 'Mylapore', zone: 'Central Chennai', pincode: '600004', availableTechnicians: 2, avgResponseMins: 50, nearestHub: 'Mylapore Hub' },
  { id: 'kilpauk', name: 'Kilpauk', zone: 'Central Chennai', pincode: '600010', availableTechnicians: 2, avgResponseMins: 60, nearestHub: 'Anna Nagar Hub' },
  { id: 'egmore', name: 'Egmore', zone: 'Central Chennai', pincode: '600008', availableTechnicians: 2, avgResponseMins: 60, nearestHub: 'Anna Nagar Hub' },
  { id: 'kodambakkam', name: 'Kodambakkam', zone: 'Central Chennai', pincode: '600024', availableTechnicians: 3, avgResponseMins: 45, nearestHub: 'T. Nagar Hub' },

  // South Chennai & OMR
  { id: 'velachery', name: 'Velachery', zone: 'South Chennai & OMR', pincode: '600042', availableTechnicians: 4, avgResponseMins: 40, nearestHub: 'Velachery Main Hub' },
  { id: 'adyar', name: 'Adyar', zone: 'South Chennai & OMR', pincode: '600020', availableTechnicians: 3, avgResponseMins: 45, nearestHub: 'Adyar Hub' },
  { id: 'besant-nagar', name: 'Besant Nagar', zone: 'South Chennai & OMR', pincode: '600090', availableTechnicians: 2, avgResponseMins: 50, nearestHub: 'Adyar Hub' },
  { id: 'thoraipakkam', name: 'Thoraipakkam (OMR)', zone: 'South Chennai & OMR', pincode: '600097', availableTechnicians: 3, avgResponseMins: 55, nearestHub: 'OMR Tech Corridor Hub' },
  { id: 'sholinganallur', name: 'Sholinganallur', zone: 'South Chennai & OMR', pincode: '600119', availableTechnicians: 3, avgResponseMins: 60, nearestHub: 'OMR Tech Corridor Hub' },
  { id: 'perungudi', name: 'Perungudi', zone: 'South Chennai & OMR', pincode: '600096', availableTechnicians: 2, avgResponseMins: 45, nearestHub: 'Velachery Main Hub' },
  { id: 'medavakkam', name: 'Medavakkam', zone: 'South Chennai & OMR', pincode: '600100', availableTechnicians: 3, avgResponseMins: 55, nearestHub: 'Velachery Main Hub' },
  { id: 'navalur', name: 'Navalur (OMR)', zone: 'South Chennai & OMR', pincode: '600130', availableTechnicians: 2, avgResponseMins: 65, nearestHub: 'OMR Tech Corridor Hub' },
  { id: 'ecr-palavakkam', name: 'ECR (Palavakkam / Neelankarai)', zone: 'South Chennai & OMR', pincode: '600041', availableTechnicians: 2, avgResponseMins: 50, nearestHub: 'Adyar Hub' },
  { id: 'kelambakkam', name: 'Kelambakkam', zone: 'South Chennai & OMR', pincode: '603103', availableTechnicians: 2, avgResponseMins: 75, nearestHub: 'OMR Tech Corridor Hub' },

  // West Chennai
  { id: 'porur', name: 'Porur', zone: 'West Chennai', pincode: '600116', availableTechnicians: 3, avgResponseMins: 50, nearestHub: 'Porur Hub' },
  { id: 'vadapalani', name: 'Vadapalani', zone: 'West Chennai', pincode: '600026', availableTechnicians: 3, avgResponseMins: 45, nearestHub: 'T. Nagar Hub' },
  { id: 'mogappair', name: 'Mogappair', zone: 'West Chennai', pincode: '600037', availableTechnicians: 2, avgResponseMins: 55, nearestHub: 'Anna Nagar Hub' },
  { id: 'koyambedu', name: 'Koyambedu', zone: 'West Chennai', pincode: '600107', availableTechnicians: 2, avgResponseMins: 50, nearestHub: 'Anna Nagar Hub' },
  { id: 'virugambakkam', name: 'Virugambakkam', zone: 'West Chennai', pincode: '600092', availableTechnicians: 2, avgResponseMins: 50, nearestHub: 'Porur Hub' },
  { id: 'ramapuram', name: 'Ramapuram', zone: 'West Chennai', pincode: '600089', availableTechnicians: 2, avgResponseMins: 50, nearestHub: 'Porur Hub' },

  // North Chennai
  { id: 'perambur', name: 'Perambur', zone: 'North Chennai', pincode: '600011', availableTechnicians: 2, avgResponseMins: 60, nearestHub: 'Perambur Hub' },
  { id: 'kolathur', name: 'Kolathur', zone: 'North Chennai', pincode: '600099', availableTechnicians: 2, avgResponseMins: 60, nearestHub: 'Anna Nagar Hub' },
  { id: 'ambattur', name: 'Ambattur', zone: 'North Chennai', pincode: '600053', availableTechnicians: 2, avgResponseMins: 65, nearestHub: 'Anna Nagar Hub' },
  { id: 'madhavaram', name: 'Madhavaram', zone: 'North Chennai', pincode: '600060', availableTechnicians: 2, avgResponseMins: 70, nearestHub: 'Perambur Hub' },

  // Chennai Suburbs & Airport Zone
  { id: 'varadharajapuram', name: 'Varadharajapuram (Mudichur Rd)', zone: 'Chennai Suburbs', pincode: '600048', availableTechnicians: 4, avgResponseMins: 30, nearestHub: 'Varadharajapuram / Mudichur HQ' },
  { id: 'tambaram', name: 'Tambaram', zone: 'Chennai Suburbs', pincode: '600045', availableTechnicians: 3, avgResponseMins: 45, nearestHub: 'Tambaram Hub' },
  { id: 'chromepet', name: 'Chromepet', zone: 'Chennai Suburbs', pincode: '600044', availableTechnicians: 2, avgResponseMins: 50, nearestHub: 'Tambaram Hub' },
  { id: 'pallavaram', name: 'Pallavaram', zone: 'Chennai Suburbs', pincode: '600043', availableTechnicians: 2, avgResponseMins: 55, nearestHub: 'Tambaram Hub' },
  { id: 'guindy', name: 'Guindy', zone: 'Chennai Suburbs', pincode: '600032', availableTechnicians: 3, avgResponseMins: 45, nearestHub: 'Velachery Main Hub' },
  { id: 'madipakkam', name: 'Madipakkam', zone: 'Chennai Suburbs', pincode: '600091', availableTechnicians: 3, avgResponseMins: 45, nearestHub: 'Velachery Main Hub' }
];

export const SYMPTOM_DIAGNOSTICS: SymptomGuide[] = [
  {
    id: 'symptom-1',
    symptom: 'Pull Handle is loose, spins or pulls out completely with no response',
    probableCause: 'Inner steel braided cable snapped or cable barrel slipped off the release trigger latch.',
    severity: 'Moderate',
    canUseChair: true,
    solution: 'Doorstep replacement with high-tensile 3mm steel cable + heavy-duty reinforced handle bezel.',
    doorstepFeasible: true,
    estCost: '₹799 - ₹1,299'
  },
  {
    id: 'symptom-2',
    symptom: 'Motor buzzes/hums when button pressed, but chair does not recline',
    probableCause: 'Linear actuator drive gear stripped, bent lead screw, or internal mechanical obstruction.',
    severity: 'Immediate Stop',
    canUseChair: false,
    solution: 'Immediately release button to prevent motor winding burnout. Our technician will replace stripped worm gear or actuator assembly.',
    doorstepFeasible: true,
    estCost: '₹1,499 - ₹2,999'
  },
  {
    id: 'symptom-3',
    symptom: 'Footrest will not close or stays hanging half-open despite kicking it in',
    probableCause: 'Locking catch pin broken, return springs unhooked, or scissor linkage rivet sheared.',
    severity: 'Moderate',
    canUseChair: false,
    solution: 'Do NOT forcefully stomp on the footrest. We align the scissor linkage, install high-carbon rivets and heavy recoil springs.',
    doorstepFeasible: true,
    estCost: '₹999 - ₹1,699'
  },
  {
    id: 'symptom-4',
    symptom: 'Completely dead motorized recliner (no sound, no lights, zero movement)',
    probableCause: 'Blown 29V AC/DC switching power transformer adapter, cut transformer lead, or faulty junction box.',
    severity: 'Immediate Stop',
    canUseChair: true,
    solution: 'Doorstep electrical multimeter diagnosis, replacement of 29V power pack with surge-protected adapter.',
    doorstepFeasible: true,
    estCost: '₹1,200 - ₹2,400'
  },
  {
    id: 'symptom-5',
    symptom: 'Seat sinking heavily in middle; lower back and spine pain after sitting',
    probableCause: 'High-resilience foam collapsed (fatigued) or under-seat zig-zag S-springs unhooked from wooden frame.',
    severity: 'Cosmetic/Comfort',
    canUseChair: true,
    solution: 'Foam overhaul with 40D/50D high-density orthopedic foam + re-anchoring high-tensile spring clips and elastic webbing.',
    doorstepFeasible: true,
    estCost: '₹1,299 - ₹2,499 per seat'
  },
  {
    id: 'symptom-6',
    symptom: 'Bonded leather peeling off like paper flakes, leaving sticky mess',
    probableCause: 'Polyurethane coating hydrolysed due to Chennai coastal humidity & heat.',
    severity: 'Cosmetic/Comfort',
    canUseChair: true,
    solution: 'Complete reupholstery using breathable Nappa leatherette, Italian leather, or stain-guard fabric. Choice of 450+ colors.',
    doorstepFeasible: false,
    estCost: '₹3,499 - ₹8,999 per seat'
  }
];

export const BEFORE_AFTER_CASES: BeforeAfterCase[] = [
  {
    id: 'case-1',
    title: '3-Seater Recliner Flaking Leather Restored to Mocha Suede',
    location: 'Mudichur Road, Varadharajapuram, Chennai',
    brand: '3-Seater Cinema Console Recliner',
    issue: 'Severe surface peeling and flaking faux leather on seat cushions & armrests from Chennai humidity; deflated lumbar padding.',
    solution: 'Stripped hydrolysed peeling leather, replaced with 50D high-resilience orthopedic foam, precision reupholstered in stain-guard mocha suede with luxury contrast piping.',
    beforeImage: '/src/assets/images/recliner_before_peeled_1791967105487.jpg',
    afterImage: '/src/assets/images/recliner_after_restored_1791967105743.jpg',
    turnaround: '3 Days Doorstep Pickup & Delivery',
    rating: 5,
    customerName: 'Jesudoss & Family (Chennai-600048)'
  },
  {
    id: 'case-2',
    title: 'La-Z-Boy 1-Seater Motor & Cable Overhaul',
    location: 'Besant Nagar, Chennai',
    brand: 'La-Z-Boy',
    issue: 'Motor actuator seized midway; pull handle cable snapped when forced.',
    solution: 'Installed OEM Kaidi 29V actuator, replaced with heavy-duty parachute pull cable and re-tensioned dual return springs.',
    beforeImage: '/src/assets/images/recliner_before_peeled_1791967105487.jpg',
    afterImage: '/src/assets/images/recliner_after_restored_1791967105743.jpg',
    turnaround: '2 Hours (Doorstep at home)',
    rating: 5,
    customerName: 'Dr. S. Ranganathan (Besant Nagar)'
  },
  {
    id: 'case-3',
    title: 'Stanley Luxury 3-Seater Leather Reupholstery & Foam',
    location: 'Anna Nagar West, Chennai',
    brand: 'Stanley Boutique',
    issue: 'Peeling faux leather on headrests, deep 4-inch seat sag causing spine ache.',
    solution: 'Complete stripping of peeling material, 50D orthopedic high-resilience foam replacement, hand-stitched Tan Italian Leather.',
    beforeImage: '/src/assets/images/recliner_before_peeled_1791967105487.jpg',
    afterImage: '/src/assets/images/recliner_after_restored_1791967105743.jpg',
    turnaround: '4 Days (Free pickup & delivery in Chennai)',
    rating: 5,
    customerName: 'Kavitha & Arvind Raj (Anna Nagar)'
  }
];

export const BRANDS_SERVICED = [
  { name: 'La-Z-Boy', desc: 'Authorized spare parts & motors' },
  { name: 'Stanley', desc: 'Luxury leather & mechanism care' },
  { name: 'Royaloak', desc: 'Cables, motors & scissor alignment' },
  { name: 'Home Centre', desc: 'Recliner handles & foam overhaul' },
  { name: 'IKEA', desc: 'Pöang & electric recliner repair' },
  { name: 'Godrej Interio', desc: 'Motorized & manual mechanism' },
  { name: 'Urban Ladder', desc: 'Heavy-duty cable & spring fitting' },
  { name: 'Durian', desc: 'Full leather & mechanical restoration' },
  { name: 'Ashley Furniture', desc: 'American power recliner electronics' },
  { name: 'Imported / Custom', desc: 'European & German motor systems' }
];

export const CUSTOMER_REVIEWS: CustomerReview[] = [
  {
    id: 'rev-1',
    name: 'Suresh Krishnan',
    location: 'Velachery, Chennai',
    rating: 5,
    date: '3 days ago',
    service: 'Motor & Cable Replacement',
    brand: 'La-Z-Boy Single Motor',
    comment: 'My La-Z-Boy was stuck in reclining position for 2 weeks. Called BookMyReclinerRepair Chennai; technician Vijay reached my flat in Velachery within 45 minutes! Replaced the faulty motor actuator right in my living room. Zero mess, very polite, and gave 1 year warranty card.',
    verified: true
  },
  {
    id: 'rev-2',
    name: 'Meenakshi Sundaram',
    location: 'Adyar (Gandhi Nagar), Chennai',
    rating: 5,
    date: '1 week ago',
    service: 'Italian Leather Reupholstery',
    brand: 'Stanley 3-Seater Recliner',
    comment: 'The leather on our Stanley recliner had started flaking terribly because of Chennai humidity. These folks brought 400+ leather swatches home. Picked a rich cognac Italian leather. They took it and returned it within 4 days looking 100% brand new! Worth every single rupee.',
    verified: true
  },
  {
    id: 'rev-3',
    name: 'Karthik Narayanan',
    location: 'Anna Nagar East, Chennai',
    rating: 5,
    date: '2 weeks ago',
    service: 'Broken Pull Cable & Foam Rebuild',
    brand: 'Home Centre Manual Recliner',
    comment: 'The cable had snapped and footrest was stuck. Technician Ramesh carried exact matching OEM cables for Home Centre recliners. He also padded the lumbar area with high density 40D foam. Reclines like butter now. Excellent service in Anna Nagar!',
    verified: true
  },
  {
    id: 'rev-4',
    name: 'Deepak & Sneha',
    location: 'Perungudi (OMR), Chennai',
    rating: 5,
    date: 'Last month',
    service: 'Home Cinema 4-Seater Recliner Service',
    brand: 'Royaloak Cinema Recliners',
    comment: 'Our home theatre motorized recliners were making squeaky noises and one motor stopped reclining. The team repaired both mechanisms, lubricated all scissor joints, and replaced the power adapter. Super professional and punctual.',
    verified: true
  }
];

export const FAQS = [
  {
    question: 'Do you repair recliners directly at my home in Chennai, or do you take it away?',
    answer: 'Over 85% of recliner repairs (including motor replacement, broken pull cables, handle replacements, footrest unlocking, switch repair, and power adapter fixes) are completed right at your doorstep in your Chennai home within 45 to 90 minutes. Only full leather/fabric reupholstery and heavy chassis frame welding are done in our Chennai precision workshop with free door-to-door pickup and delivery.'
  },
  {
    question: 'How fast can a technician visit my area in Chennai?',
    answer: 'We have stationed mobile technicians across Chennai hubs including Anna Nagar, Velachery, T. Nagar, Adyar, and Varadharajapuram / Mudichur HQ. In most Chennai areas, our technician can arrive at your doorstep within a day from booking. Same-day service is available 7 days a week.'
  },
  {
    question: 'Do you use original OEM recliner spare parts?',
    answer: 'Yes! We only use certified OEM-grade components: Linak, Okin, Mulin, and Kaidi linear actuators, high-tensile 3mm braided steel parachute cables, cast metal alloy release handles, and Sleepwell / Featherlite high-resilience 40D/50D orthopedic foams. Every part comes with a verifiable warranty.'
  },
  {
    question: 'What warranty do you provide on recliner repairs?',
    answer: 'We provide an unconditional 1-Year to 2-Year Replacement Warranty on all new motorized actuators, pull cables, and mechanical linkages. Full leather and premium fabric reupholstery includes up to 3 to 5 years warranty against peeling and stitching defects. You receive a digital and physical warranty card upon job completion.'
  },
  {
    question: 'How much does recliner sofa repair cost in Chennai?',
    answer: 'Doorstep inspection is either completely FREE (when repair is undertaken) or a nominal ₹199 diagnostic fee if you choose not to proceed. Pull cable replacement starts from ₹799; footrest scissor alignment starts from ₹999; motor and actuator replacement starts from ₹1,499. You are always given an exact upfront quote before any work begins — no hidden surprises.'
  },
  {
    question: 'Which recliner brands do you repair in Chennai?',
    answer: 'We service all major Indian and international brands including La-Z-Boy, Stanley, Royaloak, Home Centre, IKEA, Godrej Interio, Urban Ladder, Durian, Nilkamal, Ashley Furniture, Natuzzi, and unbranded / custom-made luxury cinema recliners.'
  }
];

export const INITIAL_DEMO_BOOKINGS: Record<string, any> = {
  'CHN-REC-1042': {
    id: 'CHN-REC-1042',
    customerName: 'Sundar Pichai (Demo)',
    phoneNumber: '+91 98401 22839',
    area: 'Anna Nagar, Chennai',
    pincode: '600040',
    address: 'Flat 3B, Silver Oaks Enclave, 2nd Avenue, Anna Nagar',
    reclinerType: 'Single Seater Motorized',
    issueType: 'Electric Motor Stuck Midway & Buzzing',
    status: 'Technician Dispatched',
    assignedTechnician: {
      name: 'Ramesh K. (Master Recliner Tech)',
      phone: '+91 97911 80388',
      experience: '12 Years Experience',
      rating: 4.95
    },
    estimatedCost: '₹1,650 - ₹2,200',
    preferredDate: 'Today, 3:30 PM',
    createdAt: '2026-10-13 10:15 AM'
  },
  'CHN-REC-1088': {
    id: 'CHN-REC-1088',
    customerName: 'Ananya S.',
    phoneNumber: '+91 94441 55210',
    area: 'Velachery, Chennai',
    pincode: '600042',
    address: 'Plot 18, Lake View Colony, Velachery',
    reclinerType: 'Manual Rocker Recliner',
    issueType: 'Pull Cable Snapped; Footrest Jammed',
    status: 'Diagnosis & Repair in Progress',
    assignedTechnician: {
      name: 'Vijay Anand',
      phone: '+91 97911 80388',
      experience: '8 Years Experience',
      rating: 4.9
    },
    estimatedCost: '₹899 (All Inclusive)',
    preferredDate: 'Today, 2:00 PM',
    createdAt: '2026-10-13 09:00 AM'
  }
};
