declare global {
  interface Document {
    okokPhone: any;
  }
}

interface IslandNotification {
  title?: string;
  text?: string;
  app?: string;
  icon?: string;
  duration: number;
}

/**
 * ----------------------------------------
 * okokPhone specific functions
 * ----------------------------------------
 */

export function notifyIsland(notification: IslandNotification) {
  if (import.meta.env.DEV) return;
  if (!notification.app && !notification.icon) {
    notification.app = document.okokPhone.appId;
  }
  document.okokPhone.notifyIsland(notification);
}
