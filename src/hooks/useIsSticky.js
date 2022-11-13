import { ref } from "vue";
import debounce from "lodash/debounce";
import { getElement } from "@/utils/getElement";

/**
 * 判断是否元素是否吸附
 * @example
 * const { isSticky, init, handleScroll } = useIsSticky()
 * onReady(() => {
 *  init('#xxx')
 * })
 * onPageScroll(({scrollTop}) => handleScroll(scrollTop))
 * @param {*} param0
 * @returns
 */
export default function useIsSticky({ debounceTime = 0 } = {}) {
  const isSticky = ref(false);
  const element = ref(null);

  const init = async (query) => {
    element.value = (await getElement(query))?.[0];
  };

  const handleScroll = debounce((scrollTop) => {
    if (!element.value) return;

    const { top: elTop } = element.value;

    isSticky.value = scrollTop >= elTop;
  }, debounceTime);

  return {
    isSticky,
    init,
    handleScroll,
  };
}
