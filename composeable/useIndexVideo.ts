
export function useIndexVideo() {
    const list = shallowRef<string[]>([]);
    list.value = Array.from({ length: 799 }, (_, i) => `https://cdn.izhong.xyz/zcy${i+1}.webp`);
    return {
        list
    };
}
