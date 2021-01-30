import React from 'react';
import Content from './Content';
import Filter from './Filter';
import styles from './Home.module.css';
import Loading from './Loading';

const Home = () => {
  const selectLimit = window.localStorage.getItem('select_limit');

  const [data, setData] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const [offset, setOffset] = React.useState(0);
  const [limit, setLimit] = React.useState(() =>
    selectLimit ? selectLimit : 10,
  );
  const [previous, setPrevious] = React.useState(null);
  const [next, setNext] = React.useState(null);
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    async function fetchResults(results) {
      setData([]);
      results.forEach(async (item) => {
        try {
          setError(null);
          setLoading(true);
          const response = await fetch(item.url);
          const { id, name, types, sprites } = await response.json();
          setData((data) => [
            ...data,
            {
              id,
              name,
              types,
              sprites,
            },
          ]);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      });
    }
    async function fetchAPI() {
      let response;
      let json;
      setData([]);
      try {
        setError(null);
        setLoading(true);
        response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`,
        );
        json = await response.json();
        await fetchResults(json.results);
        setPrevious(json.previous);
        setNext(json.next);
        setTotal(json.count);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchAPI();
  }, [limit, offset]);
  data.sort((a, b) => (a.id > b.id ? 1 : -1));

  return (
    <section className={styles.section}>
      <Filter
        limit={limit}
        setLimit={setLimit}
        offset={offset}
        setOffset={setOffset}
        total={total}
      />
      {error && <div>{error}</div>}
      {loading ? (
        <Loading />
      ) : (
        <Content
          data={data}
          previous={previous}
          next={next}
          setOffset={setOffset}
          setLimit={setLimit}
        />
      )}
    </section>
  );
};

export default Home;
