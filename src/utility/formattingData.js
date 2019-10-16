import { isPlainObject, forEach, isArray, camelCase } from 'lodash';

export function objectKeysToCamelCase(snakeCaseObject = null) {
  if (!snakeCaseObject) return {};
  const camelCaseObject = {};
  const camelCaseArray = [];

  forEach(snakeCaseObject, function(value, key) {
    if (isPlainObject(value) || isArray(value)) {
      value = objectKeysToCamelCase(value);
    }
    if (isArray(snakeCaseObject)) {
      camelCaseArray.push(value);
    } else {
      camelCaseObject[camelCase(key)] = value;
    }
  });

  if (isArray(snakeCaseObject)) return camelCaseArray;
  return camelCaseObject;
}
