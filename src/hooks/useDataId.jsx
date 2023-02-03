import useData from './useData';

const useDataId = (id) => {
  const datas = useData();
  return datas.find((location) => location.id === id);
};

export default useDataId;
