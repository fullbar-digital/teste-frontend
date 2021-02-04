import {useState} from 'react'
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { FormContainer } from "./style";

const Filter = ({setInitialFilter, setfinalFilter}) => {
  const [initial, setInitial] = useState(1)
  const [final, setFinal] = useState(30)
  
  const schema = yup.object().shape({
    initialFilter: yup.number().integer().positive().max(`${final}`, 'Errou'),
    finalFilter: yup.number().integer().positive().min(`${initial}`, "Errou"),
    pokesPerPAge: yup.number().integer().positive(),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (data) => {
    console.log(data);
  };
  return (
    <FormContainer onSubmit={handleSubmit(handleForm)}>
      <fieldset>
        <legend>filtre os pokemons</legend>

        <div>
          <label htmlFor="initialFilter">Valor inicial</label>
          <input
            ref={register}
            name="initialFilter"
            id="initialFilter"
            type="number"
            placeholder=""
            value={initial}
            onChange={(event) => setInitial(event.target.value)}
          />
          {errors.initialFilter && (
            <p className="error">{errors.initialFilter.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="finalFilter">Valor Final</label>
          <input
            ref={register}
            name="finalFilter"
            id="finalFilter"
            type="number"
            placeholder=""
            value={final}
            onChange={(event) => setFinal(event.target.value)}
          />
          {errors.finalFilter && (
            <p className="error">{errors.finalFilter.message}</p>
          )}
        </div>
      </fieldset>

      <div>
        <label htmlFor="pokesPerPage">Quantos item por página? </label>
        <select ref={register} name="pokesPerPAge" id="pokesPerPage">
          <option value={10} defaultValue>
            10
          </option>
          <option value={20}>20</option>
          <option value={30}>30</option>
        </select>
        {errors.pokesPerPAge && (
          <p className="error">{errors.pokesPerPAge.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="pagination">Qual Tipo? </label>
        <select ref={register} name="pagination" id="pagination">
          
          <option value='InfinityScroll' defaultValue>Fluido</option>
          <option value="Paginated">Paginado</option>
        </select>
        {errors.pagination && (
          <p className="error">{errors.pagination.message}</p>
        )}
      </div>
      <button type="submit">Filtrar</button>
    </FormContainer>
  );
};

export default Filter;
