import { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { FormContainer } from "./style";

const Filter = ({
  setInitialPoke,
  setFinalPoke,
  setPokePerPage,
  setPaginationType,
  setPokePages,
  updatePages,
}) => {
  const [initial, setInitial] = useState(1);
  const [final, setFinal] = useState(30);

  const schema = yup.object().shape({
    initialFilter: yup.number().integer().positive().max(`${final}`, "Errou"),
    finalFilter: yup.number().integer().positive().min(`${initial}`, "Errou"),
    pokesPerPAge: yup.number().integer().positive(),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (data) => {
    console.log(data);
    const { initialFilter, finalFilter, pokesPerPage, pagination } = data;

    setInitialPoke(initialFilter - 1);
    setFinalPoke(finalFilter);
    setPokePerPage(pokesPerPage);
    setPaginationType(pagination);
    setPokePages([]);
    updatePages();
    console.log(data);
  };
  return (
    <FormContainer onSubmit={handleSubmit(handleForm)}>
      <div>
        <fieldset>
          <legend>Filtre os Pokémons</legend>

          <div>
            <label htmlFor="initialFilter">De</label>
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
            <label htmlFor="finalFilter">Até</label>
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
      </div>
      <div className='selects' >
        <label htmlFor="pokesPerPage">Quantos Pokémons por página? </label>
        <select ref={register} name="pokesPerPage" id="pokesPerPage">
          <option value={10} defaultValue>
            10
          </option>
          <option value={20}>20</option>
          <option value={30}>30</option>
        </select>
        {errors.pokesPerPage && (
          <p className="error">{errors.pokesPerPAge.message}</p>
        )}
      </div>
      <div className='selects' > 
        <label htmlFor="pagination">Qual Tipo? </label>
        <select ref={register} name="pagination" id="pagination" className='pagination'>
          <option value="pages" defaultValue>
            Paginado
          </option>
          <option value="infinity">Fluido</option>
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
