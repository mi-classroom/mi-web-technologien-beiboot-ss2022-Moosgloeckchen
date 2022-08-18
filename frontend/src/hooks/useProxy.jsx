export const useProxy = (source) => {
  const split = source.split('imageserver-2022/');
  return 'https://lucascranach.org/data-proxy/image.php?subpath=/' + split[1];
};