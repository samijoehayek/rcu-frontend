import { create } from 'zustand';

/**
 * Zustand store for managing the global snackbar state.
 *
 * @property {boolean} isOpen - Whether the snackbar is currently visible.
 * @property {string} message - The message to display in the snackbar.
 * @property {function(string): void} showSnackbar - Action to show the snackbar with a message.
 * @property {function(): void} hideSnackbar - Action to hide the snackbar.
 */
export const useSnackbarStore = create((set) => ({
  isOpen: false,
  message: '',
  showSnackbar: (message) => set({ isOpen: true, message: message || "Default message" }),
  hideSnackbar: () => set({ isOpen: false, message: '' }),
}));