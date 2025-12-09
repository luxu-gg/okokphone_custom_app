declare global {
  interface Window {
    GetParentResourceName: () => string;
    okokPhone: {
      openGallery: (
        cb: (v: GalleryMedia | false) => void,
        filter?: "images" | "videos"
      ) => void;
      callNumber: (phoneNumber: string) => void;
      callService: (jobName: string) => void;
      isDarkMode: () => boolean;
      notifyIsland: (data: DynamicIslandNotification) => void;
      disableControls: (toggle: boolean) => void;
      phoneData: {
        imei: string;
        phoneNumber: string;
        contacts: Contact[];
        email: string | undefined;
      };
    };
  }
}

export interface GalleryMedia {
  id: string;
  timestamp: string;
  type: "image" | "video";
  src: string;
  width: number;
  height: number;
}

export interface DynamicIslandNotification {
  title?: string;
  text: string;
  app?: string;
  icon?: string;
  duration: number;
}

export interface Contact {
  name: string;
  phoneNumber: string;
  company?: string;
  email?: string;
  avatar: string;
  favorite: boolean;
  timestamp: number;
}
