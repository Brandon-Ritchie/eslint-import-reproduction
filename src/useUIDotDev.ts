import { useLocalStorage } from "@uidotdev/usehooks";

export function useUIDotDev() {
    return useLocalStorage("uidotdev", {});
}