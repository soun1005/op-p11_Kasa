import useData from './useData';

const useDataId = (id) => {
  // datas = JSON data
  const datas = useData();
  // find correspond data by the given id as parameter
  // trouver les données correspondantes par l'identifiant donné en paramètre
  return datas.find((location) => location.id === id);
};

export default useDataId;
