
/**
 * 函数“useIndexVideo”返回视频文件的 URL 列表。
 * @returns 返回一个带有名为“list”的属性的对象。
 */
export function useIndexVideo() {
    const list = shallowRef<string[]>([]);
    list.value = Array.from({ length: 799 }, (_, i) => `https://cdn.izhong.xyz/zcy${i+1}.webp`);
    return {
        list
    };
}
