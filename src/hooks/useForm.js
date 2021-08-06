// write your custom hook here to control your checkout form
import useLocalStorage from "./useLocalStorage.js";

const useForm = (initialValues) => {
  const [values, setValues] = useLocalStorage("form", initialValues);

  const handleChanges = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return [values, handleChanges];
};

export default useForm;
