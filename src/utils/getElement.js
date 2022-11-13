import { createSelectorQuery } from "@tarojs/taro";

/**
 * 获取小程序DOM
 * @example await getElement('#xxx')
 * @param {*} selectQuery 选择器
 * @returns {Promise}
 */
export const getElement = (selectQuery) => {
  const query = createSelectorQuery();
  if (typeof selectQuery === "string") {
    // 查找单个DOM
    query.select(`${selectQuery}`).boundingClientRect();
  } else if (typeof selectQuery === "object") {
    // 查找多个DOM
    for (const key of selectQuery) {
      query.select(`${key}`).boundingClientRect();
    }
  }

  return new Promise((resolve, reject) => {
    query.exec((res) => {
      resolve(res);
    });
  });
};
