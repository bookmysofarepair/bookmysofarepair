export type ReclinerType = 
  | 'manual_single'
  | 'motorized_single'
  | 'dual_motor_lift'
  | 'two_seater_console'
  | 'three_seater_cinema'
  | 'swivel_rocker';

export type RepairCategory = 
  | 'motor_electrical'
  | 'cable_handle'
  | 'footrest_mechanism'
  | 'leather_reupholstery'
  | 'cushion_foam'
  | 'frame_structural'
  | 'general_service';

export interface RepairService {
  id: string;
  title: string;
  tamilTitle?: string;
  category: RepairCategory;
  shortDesc: string;
  detailedDesc: string;
  commonSigns: string[];
  partsUsed: string[];
  startingPrice: number;
  warranty: string;
  turnaroundTime: string;
  badge?: string;
  iconName: string;
}

export interface ChennaiArea {
  id: string;
  name: string;
  zone: 'Central Chennai' | 'South Chennai & OMR' | 'West Chennai' | 'North Chennai' | 'Chennai Suburbs';
  pincode: string;
  availableTechnicians: number;
  avgResponseMins: number;
  nearestHub: string;
}

export interface BookingRequest {
  id: string;
  customerName: string;
  phoneNumber: string;
  email?: string;
  area: string;
  pincode?: string;
  address: string;
  reclinerType: string;
  issueType: string;
  description?: string;
  preferredDate: string;
  preferredTimeSlot: string;
  status: 'Inspection Scheduled' | 'Technician Dispatched' | 'Diagnosis & Repair in Progress' | 'Completed' | 'Delivered with Warranty';
  assignedTechnician?: {
    name: string;
    phone: string;
    experience: string;
    rating: number;
  };
  estimatedCost?: string;
  createdAt: string;
}

export interface BeforeAfterCase {
  id: string;
  title: string;
  location: string;
  brand: string;
  issue: string;
  solution: string;
  beforeImage: string;
  afterImage: string;
  turnaround: string;
  rating: number;
  customerName: string;
}

export interface SymptomGuide {
  id: string;
  symptom: string;
  probableCause: string;
  severity: 'Immediate Stop' | 'Moderate' | 'Cosmetic/Comfort';
  canUseChair: boolean;
  solution: string;
  doorstepFeasible: boolean;
  estCost: string;
}

export interface CustomerReview {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  service: string;
  brand: string;
  comment: string;
  verified: boolean;
}
