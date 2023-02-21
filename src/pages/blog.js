export async function getStaticProps() {
  return {
    redirect: {
      destination: '/#blog',
      permanent: true
    },
  };
}

export default function Blog() {
  return <></>
}