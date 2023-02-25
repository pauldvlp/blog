export async function getStaticProps() {
  return {
    redirect: {
      destination: '/#blog',
      permanent: true
    },
  };
}