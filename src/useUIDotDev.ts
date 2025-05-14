// Using useLocalStorage as a general, but every export that I checked has this same error.
import { useLocalStorage } from "@uidotdev/usehooks";

export function useUIDotDev() {
    return useLocalStorage("uidotdev", {});
}