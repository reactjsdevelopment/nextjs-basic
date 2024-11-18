import useSWR from 'swr';

function Profile() {
  const { data, error } = useSWR('/api/hello', fetch);
console.log(data);
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return <div>hello {data.name}!</div>;
}