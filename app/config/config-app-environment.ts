import {
  CalendarIcon,
  GiftIcon,
  MapPinIcon,
  PhoneIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";
import { ComponentType, JSX } from "react";
import { FaGoogle, FaApple } from "react-icons/fa";

// ======================
// COUNTDOWN CONFIGURATION
// ======================

/**
 * Configuration for the countdown component
 */
export interface CountdownConfig {
  event: {
    name: string; // Event name to display
    date: string; // ISO format date/time of the event
    timeZone: string; // Timezone for the event
    location: string; // Venue location
  };
  ui: {
    title: string; // Main title for countdown
    badgeText: string; // Text for badge/label
    completedMessage: string; // Message to show when countdown completes
    timeBoxLabels: {
      // Labels for time units
      days: string;
      hours: string;
      minutes: string;
      seconds: string;
    };
  };
  prayer: {
    text: string; // Prayer text to display
  };
}

export const weddingCountdownConfig: CountdownConfig = {
  event: {
    name: "Majlis Perkahwinan",
    date: "2025-09-20T08:00:00Z",
    timeZone: "Asia/Kuala_Lumpur",
    location: "Dewan Seri Endon, Putrajaya",
  },
  ui: {
    title: "Majlis Perkahwinan",
    badgeText: "Menghitung Hari",
    completedMessage: "Hari yang dinanti telah tiba! 🎉",
    timeBoxLabels: {
      days: "Hari",
      hours: "Jam",
      minutes: "Minit",
      seconds: "Saat",
    },
  },
  prayer: {
    text: "Ya Allah Ya Rahman Ya Rahim, berkatilah majlis perkahwinan ini. Limpahkanlah baraqah dan rahmatMu kepada kedua-dua mempelai ini. Kurniakanlah mereka kelak zuriat yang soleh dan solehah. Kekalkanlah jodoh mereka hingga ke jannah. Aamiin.",
  },
};

// =====================
// BOTTOM DOCK CONFIGURATION
// =====================

/**
 * Configuration for bottom dock navigation items
 */

export type DockItemKey =
  | "calendar"
  | "moneyGift"
  | "location"
  | "contact"
  | "rsvp";

export interface DockItemConfig {
  key: DockItemKey; // Unique identifier for the dock item
  label: string; // Display text
  icon: ComponentType<React.SVGProps<SVGSVGElement>>; // Icon component
  show: boolean; // Whether to display this item
}

export const BOTTOM_DOCK_ITEMS: DockItemConfig[] = [
  {
    key: "calendar",
    label: "Kalendar",
    icon: CalendarIcon,
    show: true,
  },
  {
    key: "moneyGift",
    label: "Money Gift",
    icon: GiftIcon,
    show: true,
  },
  {
    key: "location",
    label: "Lokasi",
    icon: MapPinIcon,
    show: true,
  },
  {
    key: "contact",
    label: "Hubungi",
    icon: PhoneIcon,
    show: true,
  },
  {
    key: "rsvp",
    label: "RSVP",
    icon: PencilSquareIcon,
    show: true,
  },
];

// =====================
// CALENDAR DRAWER CONFIGURATION
// =====================

/**
 * Configuration for a calendar event
 */
export interface CalendarEvent {
  title: string; // Event title
  description: string; // Event description
  location: string; // Event location
  startDate: string; // ISO format start date/time
  endDate: string; // ISO format end date/time
  timeZone: string; // Timezone for the event
}

/**
 * Configuration for the calendar drawer component
 */
export interface CalendarDrawerConfig {
  ui: {
    title: string; // Drawer title
    description: string; // Instructions/description
    closeButtonText: string; // Close button text
    providers: {
      // Calendar provider options
      google: {
        label: string; // Display label
        icon: React.ComponentType; // Provider icon
      };
      apple: {
        label: string;
        icon: React.ComponentType;
      };
    };
  };
  event: CalendarEvent; // The event to add to calendar
}

export const weddingCalendarConfig: CalendarDrawerConfig = {
  ui: {
    title: "Tambah ke Kalendar",
    description:
      "Gunakan pilihan di bawah untuk simpan tarikh ke kalendar anda.",
    closeButtonText: "Tutup",
    providers: {
      google: {
        label: "Add to Google Calendar",
        icon: FaGoogle,
      },
      apple: {
        label: "Add to Apple Calendar",
        icon: FaApple,
      },
    },
  },
  event: {
    title: "Majlis Perkahwinan",
    description: "Sertai kami untuk meraikan hari istimewa!",
    location: "Dewan Seri Endon, Putrajaya",
    startDate: "2025-06-01T10:00:00Z",
    endDate: "2025-06-01T14:00:00Z",
    timeZone: "Asia/Kuala_Lumpur",
  },
};

// =====================
// MONEY GIFT CONFIGURATION
// =====================

/**
 * Configuration for the money gift drawer
 */
export interface MoneyGiftConfig {
  accountName: string; // Name on the bank account
  accountNumber: string; // Bank account number
  qrCodeImageUrl: string; // URL of QR code image
  translations: {
    title: string; // Drawer title
    description: string; // Instructions
    copySuccessMessage: string; // Message when account number is copied
    closeButtonText: string; // Close button text
  };
}

export const moneyGiftConfig: MoneyGiftConfig = {
  accountName: "Amirul Irfan Bin Khairul Azreem",
  accountNumber: "1234567890",
  qrCodeImageUrl:
    "https://donate.sols.foundation/wp-content/uploads/2022/01/duitnow-qr-code-sols247.png",
  translations: {
    title: "Sumbangan Wang",
    description:
      "Imbas kod QR atau salin nombor akaun untuk sumbangan ikhlas anda.",
    copySuccessMessage: "Account number copied!",
    closeButtonText: "Tutup",
  },
};

// =====================
// LOCATION CONFIGURATION
// =====================

/**
 * Configuration for the location drawer
 */
export interface LocationConfig {
  coordinates: {
    latitude: number; // Venue latitude
    longitude: number; // Venue longitude
  };
  translations: {
    title: string; // Drawer title
    description: string; // Instructions
    googleMapsButtonText: string; // Google Maps button text
    wazeButtonText: string; // Waze button text
    closeButtonText: string; // Close button text
  };
}

export const locationConfig: LocationConfig = {
  coordinates: {
    latitude: 3.139003,
    longitude: 101.6869,
  },
  translations: {
    title: "Lokasi Kami",
    description: "Gunakan aplikasi di bawah untuk navigasi ke lokasi kami.",
    googleMapsButtonText: "Open in Google Maps",
    wazeButtonText: "Navigate with Waze",
    closeButtonText: "Tutup",
  },
};

// =====================
// CONTACT CONFIGURATION
// =====================

/**
 * Configuration for a contact person
 */
export interface ContactPerson {
  name: string; // Contact name
  phone: string; // Phone number
  designation: string; // Role/relationship
  avatarOptions?: {
    // Optional avatar styling
    background?: string;
    color?: string;
    size?: number;
  };
}

/**
 * Configuration for the contact drawer
 */
export interface ContactConfig {
  contacts: ContactPerson[]; // List of contacts
  translations: {
    title: string; // Drawer title
    description: string; // Instructions
    whatsappButtonText: string; // WhatsApp button text
    callButtonText: string; // Call button text
    closeButtonText: string; // Close button text
  };
  styles: {
    // CSS classes for styling
    card: string;
    whatsappButton: string;
    callButton: string;
  };
}

export const contactConfig: ContactConfig = {
  contacts: [
    {
      name: "Amirul Irfan",
      phone: "+60196643494",
      designation: "Bapa Pengantin Lelaki",
      avatarOptions: {
        background: "random", // or specific color
        color: "#ffffff",
        size: 128,
      },
    },
    {
      name: "Syazwan Salleh",
      phone: "+60123456789",
      designation: "Bapa Pengantin Perempuan",
    },
    {
      name: "Nadia Aiman",
      phone: "+60198765432",
      designation: "Pengantin Lelaki",
    },
  ],
  translations: {
    title: "Hubungi Kami",
    description: "Terus hubungi sesiapa yang berkaitan.",
    whatsappButtonText: "WhatsApp",
    callButtonText: "Call",
    closeButtonText: "Tutup",
  },
  styles: {
    card: "text-center border p-4 rounded-md shadow-sm bg-white",
    whatsappButton:
      "flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition",
    callButton:
      "flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition",
  },
};

// =====================
// RSVP FORM CONFIGURATION
// =====================

/**
 * Configuration for the RSVP form
 */
export type RSVPFormConfig = {
  labels: {
    name: string; // Name field label
    speech: string; // Speech/comment field label
    isAttend: string; // Attendance checkbox label
    totalPerson: string; // Party size field label
  };
  placeholders: {
    name: string; // Name field placeholder
    speech: string; // Speech field placeholder
    totalPerson: string; // Party size placeholder
  };
  dialog: {
    title: string; // Form dialog title
    description: string; // Form instructions
    successTitle: string; // Success message title
    successMessage: string; // Success message body
  };
  buttons: {
    submit: string; // Submit button text
    submitLoading: string; // Submit button loading text
    cancel: string; // Cancel button text
    close: string; // Close button text
  };
};

export const RSVP_FORM_CONFIG: RSVPFormConfig = {
  labels: {
    name: "Nama Anda",
    speech: "Ucapan",
    isAttend: "Saya Hadir",
    totalPerson: "Bilangan Rombongan",
  },
  placeholders: {
    name: "Contoh: Amirul Irfan",
    speech: "Ucapan anda...",
    totalPerson: "Pilih bilangan rombongan",
  },
  dialog: {
    title: "Isi Maklumat Kehadiran",
    description: "Kami hargai kehadiran dan ucapan anda",
    successTitle: "Terima kasih!",
    successMessage: "Respon anda telah diterima",
  },
  buttons: {
    submit: "Hantar RSVP",
    submitLoading: "Menghantar...",
    cancel: "Batal",
    close: "Tutup",
  },
};

// =====================
// ASSET CONFIGURATIONS
// =====================

/**
 * Configuration for Canva images
 */
export interface CanvaImage {
  id: string; // Unique identifier
  url: string; // Image URL
  alt: string; // Alt text for accessibility
}

export const CANVA_IMAGES: CanvaImage[] = [
  {
    id: "1",
    url: "https://drive.google.com/uc?export=view&id=1oOV8gwGT6lS8J_qTz_aQunJG7DZPuh-s",
    alt: "Main Image",
  },
  {
    id: "2",
    url: "https://drive.google.com/uc?export=view&id=1Wiw9h9uDxYUZc49yrUR3iHD2Y0z2zzcY",
    alt: "Invitation image",
  },
];

/**
 * Configuration for background image
 */
export interface BaseBackgroundImage {
  id: string; // Unique identifier
  url: string; // Image URL
  alt: string; // Alt text for accessibility
}

export const BASE_BACKGROUND_IMAGE: BaseBackgroundImage = {
  id: "bg-1",
  url: "https://drive.google.com/uc?export=view&id=1Uhj3i5Fqmc67in9H6F_dvW9c6faHX98v",
  alt: "Canva Design Background",
};
